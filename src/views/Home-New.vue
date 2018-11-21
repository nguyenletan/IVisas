<template>
  <div id="home">
    <main-header></main-header>
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <div class="title row">
            <div class="col-8"><h1>iVisas</h1></div>
          </div>
          <p class="sub-header">Identity management for the Internet</p>
          <p class="header-description">
            A verifiable claim is qualification, achievement, quality, or piece
            of information about an entity's background such as a name,
            government ID, payment provider, home address, or university degree.
          </p>

          <div class="row mt-4">
            <div class="offset-md-0 col">
              <router-link to="/user-registration">
                <vs-button class="big-btn register-btn home-btn"
                  >Register now</vs-button
                >
              </router-link>
              <div class="already-account">
                Already have an account?
                <router-link to="/login" class="sign-in">Sign In</router-link>
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
  name: "home-new",
  components: {
    MainHeader
  }
};
</script>
