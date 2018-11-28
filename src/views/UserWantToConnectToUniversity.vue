<template>
  <div id="user-want-to-connect-to-university">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img
        class="connected-image"
        src="@/assets/images/abc.png"
        alt="connected image"
      />

      <h1 class="text-center">DO YOU WANT TO CONNECT TO ABC UNIVERSITY?</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor
        nunc odio, hendrerit luctus elit molestie et. Etiam a diam a augue
        commodo congue. Praesent placerat augue vitae eleifend hendrerit. Morbi
        efficitur eu.
      </p>
      <a class="connected-btn" href="javascript:void(0);" @click="onClick"
        ><img src="@/assets/images/connected-btn.png"
      /></a>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-connecting.scss";

export default {
  name: "UserWantToConnectToUniversity",
  data: function() {
    return {};
  },
  methods: {
    onClick: function() {
      this.$store.commit("connectTo", "Education Institution");
      this.$router.push("connected-user");
    }
  }
};
</script>

<style></style>
