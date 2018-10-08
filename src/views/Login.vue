<template>

  <div id="user-registration-or-login">
    <div class="back-link container">
      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img class="logo" src="@/assets/images/logo-without-shadow.png"/>
      <form class="" @submit.prevent="validateBeforeSubmit">
        <div class="row">
          <div class="centerx labelx col-8">
            <vs-input name="wallet-name" v-validate="'required'" vs-label="Wallet Name" vs-placeholder="Wallet Name"
                      v-model="walletName" vs-danger-text="The wallet name is required"
                      :vs-danger="errors.has('wallet-name')"/>
            <vs-input type="password" vs-label="Wallet Key Confirm" vs-placeholder="Wallet Key" v-model="walletKey"/>
          </div>

          <div class="col-3 text-right">
            <img class="user-registration-background" src="@/assets/images/user-registration-background.png"/>
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-left">
            <vs-checkbox vs-color="#006AFB" v-model="isRememberMe">Remember me?</vs-checkbox>
          </div>
          <div class="col-4 text-right">
            <p class="forgot-wallet-key"><a href="#">Forgot your Wallet Key?</a></p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="offset-4 col-3">
            <input type="submit" class="signin-btn"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-registration-or-login.scss";

export default {
  name: "Login",
  data: function() {
    return {
      walletName: null,
      walletKey: "",
      isRememberMe: false
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // isValid == true
          return;
        }
      });
    }
  }
};
</script>

<style>
</style>
