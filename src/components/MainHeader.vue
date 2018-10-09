<template>
  <div>
    <vs-navbar type="fund">
      <!--<vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>
  -->

      <vs-navbar-title><img class="logo" src="@/assets/images/logo.png"></vs-navbar-title>
      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <router-link to="/"><i class="material-icons">home</i><span>Home</span></router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#"><i class="material-icons">person_outline</i><span>About Us</span></a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#"><i class="material-icons">mail_outline</i><span>Contact</span></a>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <vs-button vs-size="medium" class="partner-channel-btn" vs-type="border" color-text="#FFFFFF" color="#FFFFFF">Partner Channel</vs-button>
      </vs-navbar-item>
    </vs-navbar>

  </div>
</template>

<script>
import "@/assets/styles/main-header.scss";
export default {
  name: "main-header"
};
</script>

<style lang="scss">
</style>
