import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './App.vue';
import { definePlugins } from './plugins';

const app = createApp(App);
definePlugins(app);
app.mount('#app');