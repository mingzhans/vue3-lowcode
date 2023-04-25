import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import App from './App.vue'
import { createPinia } from 'pinia'

import GlobalData from './utils/global'
const globalData = new GlobalData()

import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App).use(TDesign).mount('#app')
