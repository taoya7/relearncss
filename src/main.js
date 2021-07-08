import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index.js';
// UI lib
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import 'normalize.css';
// Setting
import Setting from './setting.js';
import './main.scss'
import gsap from 'gsap';
const app = createApp(App)
app.config.globalProperties.$setting = Setting;
app.config.globalProperties.gsap = gsap;
app.use(ElementPlus);
app.use(Router);
app.mount('#app')
