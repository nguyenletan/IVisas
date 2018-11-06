import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import helpers from "./plugins/helpers";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";
import VeeValidate from "vee-validate";
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

console.log(process.env.VUE_APP_HYPERLEDGER_API);

Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(VeeValidate);
Vue.use(helpers);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
