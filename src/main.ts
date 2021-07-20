import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import installElementPlus from './plugins/element.js'
import i18n from './i18n'
import initSvgIcon from './icons'

const app = createApp(App)
// ElementPlus
installElementPlus(app)
// vuex
app.use(store, key).use(router)
// i18n
app.use(i18n)
// svgo
initSvgIcon(app)
// #app
app.mount('#app')
