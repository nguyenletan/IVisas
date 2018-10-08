<template>

  <div id="user-registration-or-login">
    <div class="back-link container">

      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>

    </div>
    <div class="container container-border">
      <img class="logo" src="@/assets/images/logo-without-shadow.png"/>
      <p class="title">Sign up to continue</p>

      <form class="" @submit.prevent="validateBeforeSubmit">
        <div class="row">
          <div class="centerx labelx col-8">
            <vs-input name="wallet-name" v-validate="'required'" vs-label="Wallet Name" vs-placeholder="Wallet Name"
                      v-model="walletName" vs-danger-text="The wallet name is required"
                      :vs-danger="errors.has('wallet-name')"/>
            <vs-input name="wallet-type" v-validate="'required'" vs-label="Wallet Type" vs-placeholder="Wallet Type"
                      v-model="walletType" vs-danger-text="The wallet type is required"
                      :vs-danger="errors.has('wallet-type')"/>
            <vs-input name="wallet-key" v-validate="'required'" type="password" vs-label="Wallet Key Confirm"
                      vs-placeholder="Wallet Key" v-model="walletKey" vs-danger-text="The wallet key is required"
                      :vs-danger="errors.has('wallet-key')"
                      vs-icon-after="true" vs-icon="remove_red_eye"/>
            <p class="description">By clicking "Sign Up" I agree that I have accepted <a href="#">Term of Use</a></p>
          </div>
          <div class="col-3 text-right">
            <img class="user-registration-background" src="@/assets/images/user-registration-background.png"/>
          </div>
        </div>
        <div class="row mt-4">
          <div class="offset-4 col-3">
            <input type="submit" class="signup-btn"/>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import "@/assets/styles/user-registration-or-login.scss";

export default {
  name: "UserRegistration",
  data: function() {
    return {
      walletName: "",
      walletType: "",
      walletKey: ""
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
