<template>
  <div class="connected-user-wrapper" @click="onClick">
    <div class="text-center" id="connected-user">
      <img
        class="embed-responsive"
        src="@/assets/images/connected.png"
        alt="connected image"
      />
      <h1>Connected!</h1>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/register-and-send-request-success.scss";

export default {
  name: "ConnectedUser",
  methods: {
    onClick: function() {
      switch (this.$store.state.connectedTo) {
        case "Government Agency":
          this.$router.push("user-request-government");
          break;

        case "Education Institution":
          this.$router.push("user-request-university");
          break;

        case "Registered Corporation":
          this.$router.push("user-request-company");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.connected-user-wrapper {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
}
#connected-user {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  h1 {
    font-size: 60px;
    font-weight: 900;
    color: #808080;
    margin-top: 20px;
  }
}
img {
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  max-width: 250px;
  margin: 0 auto;
}
</style>
