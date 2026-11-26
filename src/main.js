
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/variables.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
