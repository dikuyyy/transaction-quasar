import { createApp } from 'vue'
import useQuasar from '../src/plugins/quasar'
import App from './App.vue'
import router from './router'
import './base.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'



const myApp = createApp(App);
useQuasar(myApp);
myApp.use(router);
myApp.mount('#app');
