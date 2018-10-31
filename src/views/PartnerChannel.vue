<template>
  <div id="partner-channel">
    <div id="become-a-partner-block" class="container-fluid">

      <div id="nav" class="row justify-content-between">
        <div class="col">
          <router-link to="/"><i class="material-icons">arrow_back</i><span>iVisas Homepage</span></router-link>
        </div>
        <div class="col text-right">
          <a href="javascript:void(0);"><i class="material-icons">phone</i><span>Need help?</span></a>
        </div>

      </div>
      <div class="row">
        <div class="col-5">
          <img class="logo" src="@/assets/images/logo-white-text.png" alt="Logo">
          <h1>Smart Management with <span class="branch-name">iVisas</span></h1>
          <p class="header-description">Lorem ipsum dolor sit amet, vocibus offendit expetenda eos ex. Stet propriae
            concludaturque ex pri, duo cu fugit legere perpetua, nam modo accusamus expetendis et</p>
          <vs-button class="big-btn partner-btn">Become a partner</vs-button>
          <div class="already-account">
              <span>
                Already have an account? <strong><router-link to="/login" class="sign-in">Sign In</router-link></strong>
              </span>
          </div>
        </div>

        <div class="col-7">
          <div class="become-a-partner-img"></div>
        </div>
      </div>
    </div>

    <div id="process-become-a-partner-block" class="container-fluid">
      <div class="row">
        <div class="col-auto m-auto">
          <h2>Processes to be become a partner</h2>
        </div>
      </div>

      <img class="row process-become-a-partner-img" src="@/assets/images/partner-channel/process-become-a-partner.png"/>

      <div class="row process-become-a-partner-description no-gutters justify-content-between m-auto">

        <div class="col-3">
          <div class="feature first odd">
            <p class="order-number">1.</p>
            <p class="feature-title">Name of Agent</p>
            <p class="feature-description">Please provide the name of your agent so that user can find it easily on
              our system.</p>
          </div>
        </div>

        <div class="col-3">
          <div class="feature even">
            <p class="order-number">2.</p>
            <p class="feature-title">Address information</p>
            <p class="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature odd">
            <p class="order-number">3.</p>
            <p class="feature-title">Bank Account information</p>
            <p class="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature last even">
            <p class="order-number">4.</p>
            <p class="feature-title">Provide services</p>
            <p class="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

      </div>
    </div>

    <div id="outstanding-benefit-block" class="container-fluid">
      <div class="row">
        <div class="col-9 m-auto">
          <h2>Outstanding benefits<br/>in collaboration<br/>with <span class="branch-name">iVisas</span></h2>
        </div>
      </div>

      <div class="row sub-block" id="manage-information">
        <div class="col-8 ma-auto">
          <div class="row">
            <div class="col-8">
              <img class="embed-responsive benefit-1" src="@/assets/images/partner-channel/benefit-1.png"
                   alt="Manage information in one place"/>
            </div>
            <div class="col-4">
              <h3>Manage information in one place</h3>
              <p class="description">
                Ad vim erant saperet, ei doctus patrioque quo. Nec ei laudem nostrud, vix ad habeo reque assentior.
              </p>
              <vs-button class="see-more-btn" color="warning" vs-size="small">See more...</vs-button>
            </div>
          </div>
        </div>
      </div>

      <div class="row sub-block" id="save-your-time">
        <div class="col-8 ma-auto">
          <div class="row">
            <div class="col-4">
              <h3>Save your time & Easy to use</h3>
              <p class="description">
                Ad vim erant saperet, ei doctus patrioque quo. Nec ei laudem nostrud, vix ad habeo reque assentior.
              </p>
              <vs-button class="see-more-btn" color="warning" vs-size="small">See more...</vs-button>
            </div>
            <div class="col-8">
              <img class="embed-responsive benefit-1" src="@/assets/images/partner-channel/benefit-2.png"
                   alt="Manage information in one place"/>
            </div>
          </div>
        </div>
      </div>

      <div class="row sub-block" id="monthly-visits">
        <div class="col-8 ma-auto">
          <div class="row">
            <div class="col-7">
              <img class="embed-responsive benefit-1" src="@/assets/images/partner-channel/benefit-3.png"
                   alt="Manage information in one place"/>
            </div>
            <div class="col-5">
              <h3>Monthly visits</h3>
              <p class="description">
                Ad vim erant saperet, ei doctus patrioque quo. Nec ei laudem nostrud, vix ad habeo reque assentior.
              </p>
              <vs-button class="see-more-btn" color="warning" vs-size="small">See more...</vs-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="client-review-block" class="container-fluid">
      <div class="row">
        <div class="col-auto m-auto">
          <h2>Client <strong>Reviews</strong></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-10 m-auto">
          <v-carousel hide-delimiters  height="auto" interval="2000">
            <v-carousel-item
                v-for="(item,i) in carouselItems"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>

    <div id="our-partners-block" class="container-fluid">
      <div class="row">
        <div class="col-auto m-auto">
          <h2>Our partners</h2>
        </div>
      </div>
      <div class="row partners-img justify-content-between">
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/rmit.png" alt="rmit"/>
        </div>
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/humber.png" alt="humber"/>
        </div>
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/cabinet.png" alt="cabinet office"/>
        </div>
      </div>

      <div class="row partners-img justify-content-between">
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/australian-government.png"
               alt="australian government"/>
        </div>
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/ibm.png" alt="ibm"/>
        </div>
        <div class="partner-img">
          <img class="partner-img" src="@/assets/images/partner-channel/fedex.png" alt="fedex"/>
        </div>
      </div>
    </div>

    <div id="work-with-us-now" class="container-fluid">
      <div class="row">
        <div class="col-auto m-auto">
          <h2>Work with us now?</h2>
        </div>
      </div>
      <div class="row m-auto">
        <vs-button class="very-big-btn work-with-us-btn">Become a partner</vs-button>
      </div>
    </div>

    <div id="footer" class="container-fluid">
      <div class="row">
        <div class="col-auto m-auto">
          <span class="branch-name">iVisas</span>
          <span class="copyright">Copyright &copy;2018 iVias.com | All rights reserved</span>
          <span class="email">abchc@iVisas.com</span> |
          <span class="terms">Terms of Use</span> |
          <span class="privacy">Privacy Policy</span>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
import quote1 from "../assets/images/partner-channel/quote_1.png";
import "../assets/styles/partner-channel.scss";

export default {
  name: "PartnerChannel",
  data() {
    return {
      carouselItems: [{ src: quote1 }, { src: quote1 }, { src: quote1 }]
    };
  }
};
</script>

<style>
</style>
