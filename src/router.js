import Vue from "vue";
import Router from "vue-router";
import ConnectedUser from "./views/ConnectedUser";
import FillInformationForGovernment from "./views/FillInformationForGovernment";
import DigitalNationalIdDoc from "./views/DigitalNationalIdDocument";
import Home from "./views/Home.vue";
import Login from "./views/Login";
import RegisterSuccess from "./views/RegisterSuccess";
import UserConnecting from "./views/UserConnecting";
import UserDashboard from "./views/UserDashboard";
import MyWallet from "./views/MyWallet";
import UserRegistration from "./views/UserRegistration";
import UserRequestCompany from "./views/UserRequestCompany";
import UserRequestGovernment from "./views/UserRequestGovernment";
import UserRequestUniversity from "./views/UserRequestUniversity";
import UserSendRequestSuccessfully from "./views/UserSendRequestSuccessfully";
import PartnerChannel from "./views/PartnerChannel";
import TranscriptRequestForm from "./views/TranscriptRequestForm";

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
      path: "/my-wallet",
      name: "MyWallet",
      component: MyWallet
    },
    {
      path: "/digital-national-id-doc",
      name: "DigitalNationalIdDoc",
      component: DigitalNationalIdDoc
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
      path: "/user-send-request-successfully",
      name: "UserSendRequestSuccessfully",
      component: UserSendRequestSuccessfully
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
      path: "/fill-information-for-government",
      name: "FillInformationForGovernment",
      component: FillInformationForGovernment
    },
    {
      path: "/partner-channel",
      name: "PartnerChannel",
      component: PartnerChannel
    },
    {
      path: "/transcript-request-form",
      name: "TranscriptRequestForm",
      component: TranscriptRequestForm
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
