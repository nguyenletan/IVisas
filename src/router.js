import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RegisterSuccess from "./views/RegisterSuccess";
import UserRegistration from "./views/UserRegistration";
import Login from "./views/Login";
import ConnectedUser from "./views/ConnectedUser";
import UserConnecting from "./views/UserConnecting";
import UserRequestGovernment from "./views/UserRequestGovernment";
import UserRequestCompany from "./views/UserRequestCompany";
import UserRequestUniversity from "./views/UserRequestUniversity";
import UserDashboard from "./views/UserDashboard";

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
      path: "/user-dashboard",
      name: "UserDashboard",
      component: UserDashboard
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
      path: "/connected-user",
      name: "ConnectedUser",
      component: ConnectedUser
    },
    {
      path: "/user-connecting",
      name: "UserConnecting",
      component: UserConnecting
    },
    {
      path: "/user-request-government",
      name: "UserRequestGovernment",
      component: UserRequestGovernment
    },
    {
      path: "/user-request-company",
      name: "UserRequestCompany",
      component: UserRequestCompany
    },
    {
      path: "/user-request-university",
      name: "UserRequestUniversity",
      component: UserRequestUniversity
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
