<template>

  <div id="user-registration-or-login">
    <div class="back-link container">

      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>

    </div>
    <div class="container container-border">
      <img class="logo" src="@/assets/images/logo-without-shadow.png"/>
      <p class="title">Sign up to continue</p>

      <form class="" @submit="submit" @submit.prevent="validateBeforeSubmit">
        <div class="row">
          <div class="centerx labelx col-8">
            <vs-input name="wallet-name" v-validate="'required'" vs-label="Wallet Name" vs-placeholder="Wallet Name"
                      data-vv-name="wallet-name"
                      v-model="walletName" vs-danger-text="The wallet name is required"
                      :vs-danger="errors.has('wallet-name')"/>
            <vs-input name="wallet-key" v-validate="'required'" type="password" vs-label="Wallet Key"
                      vs-placeholder="Wallet Key"
                      data-vv-name="wallet-key"
                      v-model="walletKey" vs-danger-text="The wallet key is required"
                      :vs-danger="errors.has('wallet-key')" ref="wallet-key"/>
            <vs-input name="wallet-key-confirm" v-validate="'required|confirmed:wallet-key'" type="password"
                      vs-label="Wallet Key Confirm"
                      data-vv-as="wallet-key"
                      vs-placeholder="Wallet Key Confirm" v-model="walletKeyConfirm"
                      vs-danger-text="The wallet key confirm does not match."
                      :vs-danger="errors.has('wallet-key-confirm')"
            /><!--vs-icon-after="true" vs-icon="remove_red_eye"-->
            <p class="description">By clicking "Sign Up" I agree that I have accepted <a href="#">Term of Use</a></p>
          </div>
          <div class="col-3 text-right">
            <img class="user-registration-background" src="@/assets/images/user-registration-background.png"/>
          </div>
        </div>
        <div class="row mt-4">
          <div class="offset-4 col-3">
            <vs-button type="submit" class="big-btn">Sign Up</vs-button>
            <!-- <input type="submit" class="signup-btn"/>-->
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
      walletKeyConfirm: "",
      walletKey: "",
      isValid: false
    };
  },
  methods: {
    validateBeforeSubmit: function() {
      this.$validator.validateAll().then(result => {
        // console.log(result);
        this.isValid = result ? true : false;
        if (this.isValid === true) {
          this.submit();
          return;
        }
      });
    },
    submit() {
      //this.$validator.validateAll();
      if (this.isValid === true) {
        this.$vs.loading({ type: "corners" });
        let api_url = process.env.VUE_APP_HYPERLEDGER_API + "test_wallet";
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
              this.$router.push("register-success");
            }
            this.$vs.loading.close();
          })
          .catch(err => {
            this.$vs.notify({
              title: "dark",
              text: "Error",
              color: "dark"
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
