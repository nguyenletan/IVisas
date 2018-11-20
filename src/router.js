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
import JobApplicationForm from "./views/JobApplicationForm";
import VerifyJobApplicationForm from "./views/VerifyJobApplicationForm";
import VerifyTranscriptRequestForm from "./views/VerifyTranscriptRequestForm";
import UserNotification from "./views/UserNotification";
import OpenCompanyDocument from "./views/OpenCompanyDocument";
import OpenEducationDocument from "./views/OpenEducationDocument";
import OpenGovernmentDocument from "./views/OpenGovernmentDocument";

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
      path: "/user-notification",
      name: "UserNotification",
      component: UserNotification
    },
    {
      path: "/open-company-document",
      name: "OpenCompanyDocument",
      component: OpenCompanyDocument
    },
    {
      path: "/open-education-document",
      name: "OpenEducationDocument",
      component: OpenEducationDocument
    },
    {
      path: "/open-government-document",
      name: "OpenGovernmentDocument",
      component: OpenGovernmentDocument
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
      path: "/job-application-form",
      name: "JobApplicationForm",
      component: JobApplicationForm
    },
    {
      path: "/verify-job-application-form",
      name: "VerifyJobApplicationForm",
      component: VerifyJobApplicationForm
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
      path: "/verify-transcript-request-form",
      name: "VerifyTranscriptRequestForm",
      component: VerifyTranscriptRequestForm
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
