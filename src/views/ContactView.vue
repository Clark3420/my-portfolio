
<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSending = ref(false)
const statusMessage = ref('')
const statusType = ref('')

async function sendEmail() {
  if (isSending.value) return

  isSending.value = true
  statusMessage.value = ''
  statusType.value = ''

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('Email service configuration is missing.')
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      {
        publicKey,
      },
    )

    statusType.value = 'success'
    statusMessage.value =
      'Your message has been sent successfully. Thank you for reaching out!'

    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  } catch (error) {
    console.error('EmailJS submission error:', {
      status: error?.status,
      text: error?.text,
      message: error?.message,
    })

    statusType.value = 'error'
    statusMessage.value =
      'Something went wrong while sending your message. Please try again later.'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-intro container-custom py-5">
      <p class="section-eyebrow">GET IN TOUCH</p>
      <h1>Let's start a conversation.</h1>
      <p class="contact-lead">
        Have a project in mind, an opportunity to share, or simply want
        to connect? I'd be happy to hear from you.
      </p>
    </section>

    <section class="contact-content container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-5">
          <p class="section-eyebrow">01 / CONTACT INFORMATION</p>
          <h2>Let's connect.</h2>
          <p>
            I'm open to professional opportunities, collaborations,
            and conversations about web development.
          </p>

          <div class="contact-details">
            <div class="contact-detail">
              <span class="detail-label">EMAIL</span>
              <p>Email address coming soon</p>
            </div>

            <div class="contact-detail">
              <span class="detail-label">LOCATION</span>
              <p>Philippines</p>
            </div>
          </div>

          <div class="contact-socials">
            <span class="detail-label">FIND ME ONLINE</span>
            <div class="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <p class="section-eyebrow">02 / SEND A MESSAGE</p>
          <h2>Send me a message.</h2>

          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="row g-4">
              <div class="col-md-6">
                <label for="contact-name">Your name</label>
                <input
                  id="contact-name"
                  v-model.trim="form.name"
                  type="text"
                  class="form-control"
                  placeholder="John Doe"
                  maxlength="100"
                  autocomplete="name"
                  required
                  :disabled="isSending"
                />
              </div>

              <div class="col-md-6">
                <label for="contact-email">Email address</label>
                <input
                  id="contact-email"
                  v-model.trim="form.email"
                  type="email"
                  class="form-control"
                  placeholder="john@example.com"
                  maxlength="254"
                  autocomplete="email"
                  required
                  :disabled="isSending"
                />
              </div>

              <div class="col-12">
                <label for="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  v-model.trim="form.subject"
                  type="text"
                  class="form-control"
                  placeholder="What would you like to discuss?"
                  maxlength="150"
                  required
                  :disabled="isSending"
                />
              </div>

              <div class="col-12">
                <label for="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  v-model.trim="form.message"
                  class="form-control"
                  rows="6"
                  maxlength="5000"
                  placeholder="Write your message here..."
                  required
                  :disabled="isSending"
                ></textarea>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="contact-submit"
                  :disabled="isSending"
                >
                  {{ isSending ? 'Sending...' : 'Send Message ↗' }}
                </button>
              </div>

              <div v-if="statusMessage" class="col-12">
                <p
                  class="form-status"
                  :class="`form-status-${statusType}`"
                >
                  {{ statusMessage }}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-content {
  border-top: 1px solid var(--color-border);
}

.contact-details {
  margin-top: 2.5rem;
}

.contact-detail {
  margin-bottom: 1.5rem;
}

.detail-label {
  display: block;
  margin-bottom: 0.4rem;
  color: var(--color-text);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
}

.contact-socials {
  margin-top: 2.5rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.social-links a {
  color: var(--color-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.social-links a:hover {
  color: var(--color-primary);
}

.contact-form {
  margin-top: 1.75rem;
}

.contact-form label {
  display: block;
  margin-bottom: 0.6rem;
  color: var(--color-text);
  font-size: 0.9rem;
}

.contact-form .form-control {
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  background-color: var(--color-surface-elevated);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  box-shadow: none;
  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.contact-form .form-control:focus {
  border-color: var(--color-secondary);
  background-color: var(--color-surface-elevated);
  box-shadow: 0 0 0 2px rgba(133, 105, 77, 0.12);
}

.contact-form .form-control::placeholder {
  color: var(--color-text-muted);
  opacity: 0.75;
}

.contact-form .form-control:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.contact-form textarea {
  min-height: 160px;
  resize: vertical;
}

.contact-submit {
  padding: 0.85rem 1.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 2px;
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.contact-submit:hover:not(:disabled) {
  background-color: transparent;
  color: var(--color-primary);
}

.contact-submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.form-status {
  margin: 0;
  padding: 1rem;
  border: 1px solid var(--color-border);
  font-size: 0.9rem;
}

.form-status-success {
  color: #386641;
  background-color: #eaf2e8;
  border-color: #b7cfb4;
}

.form-status-error {
  color: #9b2c2c;
  background-color: #f9eaea;
  border-color: #e5b8b8;
}

@media (max-width: 767.98px) {
  .contact-content {
    padding-top: 2.5rem !important;
  }

  .contact-form {
    margin-top: 1.5rem;
  }
}
</style>
