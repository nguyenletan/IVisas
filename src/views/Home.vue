<template>
  <div id="home">
      <main-header></main-header>
      <div class="container">

      <div class="row">
        <div class="col-md-5 col-sm-12 ml-5">
          <div class="row">
            <div class="col-8">
              <h1><img src="@/assets/images/iVisas.png" alt="iVisas" title="iVisas"/></h1>
            </div>
            <div class="col-4 text-right d-sm-none d-md-block">
              <img src="@/assets/images/flowers.png" alt="flowers" width="100px"/>
            </div>
          </div>
          <p class="sub-header">Identity management for the Internet</p>
          <p class="header-description">A verifiable claim is qualification, achievement, quality, or piece of information
            about an entity's background such as a name, government ID, payment provider, home address, or university
            degree.</p>
          <div class="row mt-4">
            <div class="offset-md-1 col-md-8 col-sm-12 text-center">
              <img src="@/assets/images/features.png" alt="features" class="home-features"/>
            </div>
          </div>
          <div class="row mt-5 pt-5">
            <div class="offset-md-1 col-md-8 col-sm-12 text-center">
              <router-link to="/user-registration"><img src="@/assets/images/register-btn.png" alt="register button" class="register-btn"/></router-link>
              <div class="mt-3 mb-4">
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
