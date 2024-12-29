import axios from 'axios';
import { App } from 'vue';

const axiosPlugin = {
  install(app: App<Element>) {
    const csrf_token = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
    axios.defaults.headers.common = {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": csrf_token
    }
    app.provide('axios', axios);
  },
};
export default axiosPlugin;