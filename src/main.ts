import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import App from './App.vue'
import { createPinia } from 'pinia'
import { customizeComp, attrComp } from './utils/register'
const pinia = createPinia()

import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)
.use(pinia)
.use(TDesign)
.use(customizeComp)
.use(attrComp)
.mount('#app')