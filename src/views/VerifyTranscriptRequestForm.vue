<template>
  <div id="transcript-request-form" class="verify">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <form class="" @submit="submit">
        <h1>Transcript Request Form</h1>
        <p class="description">
          Please provide certifited information below, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="first-name"
              placeholder="First Name"
              data-vv-name="first-name"
              v-model="fistName"
              size="large"
              class="light-input"
              readonly="true"
              icon-after="true"
              icon="check"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="last-name"
              placeholder="Last Name"
              data-vv-name="last-name"
              v-model="lastName"
              size="large"
              class="light-input"
              readonly="true"
              icon-after="true"
              icon="check"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="date-of-birth"
              placeholder="Date of Birth"
              data-vv-name="date-of-birth"
              v-model="dateOfBirth"
              size="large"
              class="light-input"
              readonly="true"
              icon-after="true"
              icon="check"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="place-of-birth"
              placeholder="Place of Birth"
              data-vv-name="place-of-birth"
              v-model="placeOfBirth"
              size="large"
              class="light-input fail"
              readonly="true"
              icon-after="true"
              :danger="true"
              icon="cancel"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="national-id"
              placeholder="National ID Number"
              data-vv-name="national-id"
              v-model="nationalId"
              size="large"
              class="light-input"
              readonly="true"
              icon-after="true"
              icon="check"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-auto m-auto">
            <vs-button type="submit" class="big-btn light-btn"
              >CHECK CREDENTIALS</vs-button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/form-request.scss";

export default {
  name: "VerifyTranscriptRequestForm",
  data: function() {
    return {
      fistName: "Joe",
      lastName: "Doe",
      nationalId: "1321 231 13123",
      placeOfBirth: "El Centrano Ca",
      dateOfBirth: "01/12/1982",
      graduationStatus: "Graduated"
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      // let that = this;
      this.$validator.validateAll().then(result => {
        this.isValid = !!result;
        if (this.isValid === true) {
          let api_url =
            process.env.VUE_APP_HYPERLEDGER_API + "transcript-request";
          this.callFecth(
            api_url,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              },
              body: JSON.stringify({})
            },
            function() {
              // that.$router.push("register-success");
            }
          );
        }
      });
    }
  }
};
</script>

<style></style>
