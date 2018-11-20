<template>
  <div class="container container-border" id="register-success">
    <h1>Thank you!</h1>
    <div class="row">
      <div class="offset-2 col-8">
        <p class="description">
          Your registration process is complete.<br />
          Topping chocolate bar oat cake wafer cotton candy. Chocolate cake
          chocolate bar chocolate cake sugar plum candy pie. Lemon drops jelly
          beans halvah marzipan donut donut. Cheesecake liquorice danish donut
          chocolate cake.
        </p>
      </div>
    </div>
    <div class="row mt-4 mb-4 text-center">
      <div class="col">
        <vs-button class="big-btn light-btn" @click="$router.push('login');"
          >Next</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/register-and-send-request-success.scss";

export default {
  name: "RegisterSuccess"
};
</script>

<style></style>
