import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/reset.css'
import '@/styles/common.css'
import App from '@/App.vue'
import router from '@/router';
// import { createPinia } from 'pinia';
// import createPersistedState from 'pinia-plugin-persistedstate';

// const pinia = createPinia();
// pinia.use(createPersistedState);

createApp(App).use(router).mount('#app')
