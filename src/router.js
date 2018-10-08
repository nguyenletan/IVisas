import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RegisterSuccess from "./views/RegisterSuccess";
import UserRegistration from "./views/UserRegistration";
import Login from "./views/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register-success",
      name: "RegisterSuccess",
      component: RegisterSuccess
    },
    {
      path: "/user-registration",
      name: "UserRegistration",
      component: UserRegistration
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
