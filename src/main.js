import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";
import VeeValidate from "vee-validate";
import Vuesax from "vuesax";
import "bootstrap/dist/css/bootstrap.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(VeeValidate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
