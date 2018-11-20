<template>
  <div id="job-applications-form">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <form class="" @submit="submit">
        <h1>Job Applications Form</h1>
        <p class="description">
          To apply this job, please provide certified information below, Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2>Personal information</h2>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="first-name"
              v-validate="'required'"
              placeholder="First Name"
              data-vv-name="first-name"
              v-model="fistName"
              size="large"
              class="light-input"
              danger-text="The First Name is required"
              :danger="errors.has('first-name')"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="last-name"
              v-validate="'required'"
              placeholder="Last Name"
              data-vv-name="last-name"
              v-model="lastName"
              size="large"
              class="light-input"
              danger-text="The Last Name is required"
              :danger="errors.has('last-name')"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="national-id"
              v-validate="'required'"
              placeholder="National ID"
              data-vv-name="national-id"
              v-model="nationalId"
              size="large"
              class="light-input"
              danger-text="The First Name is required"
              :danger="errors.has('national-id')"
            />
          </div>
        </div>

        <h2>Education</h2>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="degree"
              v-validate="'required'"
              placeholder="Degree"
              data-vv-name="degree"
              v-model="degree"
              size="large"
              class="light-input"
              danger-text="The Degree is required"
              :danger="errors.has('degree')"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-select
              class="light-input"
              placeholder="Graduation Status"
              v-model="graduationStatus"
              v-validate="'required'"
              data-vv-name="graduation-status"
              name="graduation-status"
              danger-text="The Graduation Status is required"
              :danger="errors.has('graduation-status')"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in graduationStatusOptions"
              />
            </vs-select>
          </div>
        </div>
        <div class="row">
          <div class="col-8 m-auto">
            <vs-input
              name="conditon"
              v-validate="'required'"
              placeholder="Condition (GPA > 4)"
              data-vv-name="condition"
              v-model="condition"
              size="large"
              class="light-input"
              danger-text="The Condition is required"
              :danger="errors.has('condition')"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-auto m-auto">
            <vs-button type="submit" class="big-btn light-btn"
              >CHECK CREDENTIALS</vs-button
            >
            <!-- <input type="submit" class="signup-btn"/> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/form-request.scss";

export default {
  name: "JobApplicationForm",
  data: function() {
    return {
      fistName: null,
      lastName: null,
      nationalId: null,
      graduationStatus: null,
      graduationStatusOptions: [
        { text: "Bachelor", value: 0 },
        { text: "Master", value: 2 },
        { text: "Phd", value: 3 }
      ],
      degree: null,
      condition: null
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      // let that = this;
      this.$validator.validateAll().then(result => {
        this.isValid = !!result;
        if (this.isValid === true) {
          let api_url = process.env.VUE_APP_HYPERLEDGER_API + "job-application";
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
