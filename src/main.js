import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import Layout from './components/Layout.vue'
// vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// vee-validate 規則
import { required, email, min } from '@vee-validate/rules'
// vee-validate 多國語系
import { localize, setLocale } from '@vee-validate/i18n'
// 繁中語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'
import store from './store'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(store)
app.component('Loading', Loading)
app.component('Layout', Layout)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
