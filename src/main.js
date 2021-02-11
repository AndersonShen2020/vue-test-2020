import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import "aos/dist/aos.css";
import "./assets/css/index.css";

const app = createApp(App);
// console.log(app);

app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .mount("#app");
