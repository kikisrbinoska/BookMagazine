// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure the router is imported

createApp(App)
  .use(router) // Pass the router to the app instance
  .mount('#app');
