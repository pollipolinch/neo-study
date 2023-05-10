import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
import {createI18n,useI18n} from 'vue-i18n';
import { languages } from './locales/index.js'
const messages= Object.assign(languages)

export const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages
})


const app = createApp(App)

app.use(router).use(i18n).use(store).mount('#app')
