import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.component('Header', Header);
app.component('Footer', Footer);
app.component('Layout', Layout);
app.mount('#app');
