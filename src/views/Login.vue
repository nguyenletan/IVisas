<template>

  <div id="user-registration-or-login">
    <div class="back-link container">
      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img class="logo" src="@/assets/images/logo-without-shadow.png"/>
      <form class="" @submit.prevent="validateBeforeSubmit" @submit="submit">
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
        </div>
        <div class="row mt-4">
          <div class="offset-4 col-3">
            <vs-button class="big-btn">Sign In</vs-button>
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        this.isValid = !!result;
        if (this.isValid === true) {
          this.submit();
          return;
        }
      });
    },
    login() {
      let api_url = process.env.VUE_APP_HYPERLEDGER_API + "";
      fetch(api_url, {
        method: "POST"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    },
    submit() {
      //this.$validator.validateAll();
      if (this.isValid === true) {
        this.$vs.loading({ type: "corners" });
        let api_url = process.env.VUE_APP_HYPERLEDGER_API + "login";
        fetch(api_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: this.walletName, key: this.walletKey })
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.code === 200) {
              /// TODO: goto Register Success
              this.$router.push("user-dashboard");
            }
            this.$vs.loading.close();
          })
          .catch(err => {
            this.$vs.notify({
              title: "Error",
              text: "Lorem ipsum dolor sit amet, consectetur",
              color: "warning"
            });
            console.log(err);
            this.$vs.loading.close();
          });
      }
    }
  }
};
</script>

<style>
</style>
