<template>
  <div>
    <vs-navbar type="fund">
      <vs-navbar-title
        ><img class="logo" src="@/assets/images/logo-without-shadow.png"
      /></vs-navbar-title>
      <vs-spacer class="d-none d-sm-block"></vs-spacer>
      <vs-navbar-item index="0">
        <router-link to="/"
          ><i class="material-icons">home</i><span>Home</span></router-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#"
          ><i class="material-icons">person_outline</i><span>About Us</span></a
        >
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#"
          ><i class="material-icons">mail_outline</i><span>Contact</span></a
        >
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/partner-channel"
          ><vs-button
            size="medium"
            class="partner-channel-btn"
            type="border"
            color-text="#30507C"
            color="#30507C"
            >Partner Channel</vs-button
          ></router-link
        >
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
import "../assets/styles/main-header.scss";
export default {
  name: "main-header"
};
</script>

<style lang="scss"></style>
