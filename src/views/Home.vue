<template>
  <div id="home">
      <main-header></main-header>
      <div class="container">

      <div class="row">
        <div class="col-md-5 col-sm-12">
          <div class="title row">
            <div class="col-8">
              <h1><img src="@/assets/images/iVisas.png" alt="iVisas" title="iVisas"/></h1>
            </div>
            <div class="col-4 text-right d-sm-none d-md-block">
              <img class="flower" src="@/assets/images/flowers.png" alt="flowers"/>
            </div>
          </div>
          <p class="sub-header">Identity management for the Internet</p>
          <p class="header-description">A verifiable claim is qualification, achievement, quality, or piece of information
            about an entity's background such as a name, government ID, payment provider, home address, or university
            degree.</p>
          <div class="feature row">
            <div class="offset-md-1 col-md-8 col-sm-12 text-center">
              <img src="@/assets/images/features.png" alt="features" class="home-features"/>
            </div>
          </div>
          <div class="row mt-5">
            <div class="offset-md-0 col-md-10 col-sm-12 text-center">
              <router-link to="/user-registration">
                <vs-button class="very-big-btn register-btn ">Register now</vs-button>
              </router-link>
              <div class="already-account">
                Already have an account? <router-link to="/login" class="sign-in">Sign In</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/home.scss";
// @ is an alias to /src
import MainHeader from "@/components/MainHeader";

export default {
  name: "home",
  components: {
    MainHeader
  }
};
</script>
