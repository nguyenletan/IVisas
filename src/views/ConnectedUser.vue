<template>
  <div class="text-center" id="connected-user">
    <img class="embed-responsive" src="@/assets/images/connected.png" alt="connected image"/>
    <h1>Connected!</h1>
  </div>
</template>

<script>
import "@/assets/styles/register-and-send-request-success.scss";

export default {
  name: "ConnectedUser"
};
</script>

<style scoped lang="scss">
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
