<template>

  <div id="user-registration-or-login">
    <div class="back-link container">
      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img class="logo" src="@/assets/images/logo-without-shadow.png"/>
      <form class="" @submit="submit">
        <div class="row">
          <div class="centerx labelx col-8">
            <vs-input name="wallet-name" v-validate="'required'" label="Wallet Name" placeholder="Wallet Name"
                      v-model="walletName" danger-text="The wallet name is required"
                      :danger="errors.has('wallet-name')"/>
            <vs-input type="password" label="Wallet Key Confirm" placeholder="Wallet Key" v-model="walletKey"/>
          </div>

          <div class="col-3 text-right">
            <img class="user-registration-background" src="@/assets/images/user-registration-background.png"/>
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-left">
            <vs-checkbox color="#006AFB" v-model="isRememberMe">Remember me?</vs-checkbox>
          </div>
        </div>
        <div class="row mt-4">
          <div class="offset-4 col-3">
            <vs-button class="big-btn light-btn">Sign In</vs-button>
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
      isRememberMe: false,
      isValid: false
    };
  },
  created: function() {
    this.api_url = process.env.VUE_APP_HYPERLEDGER_API;
  },

  methods: {
    submit(e) {
      //this.$validator.validateAll();
      e.preventDefault();
      let that = this;
      let api_url = process.env.VUE_APP_HYPERLEDGER_API + "login";

      this.$validator.validateAll().then(result => {
        this.isValid = !!result;
        if (result === true) {
          this.callFecth(
            api_url,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8"
                // "Content-Type": "application/x-www-form-urlencoded",
              },
              body: JSON.stringify({
                name: this.walletName,
                key: this.walletKey
              })
            },
            function() {
              that.$router.push("user-dashboard");
            }
          );
        }
      });
    }
  }
};
</script>

<style>
</style>
