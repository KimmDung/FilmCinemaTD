import './assets/main.css'
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// import bootstrap from 'bootstrap';
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
