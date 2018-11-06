<template>

  <div id="job-applications-form" class="verify">
    <div class="back-link container">

      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>

    </div>
    <div class="container container-border">

      <form class="" @submit="submit">
        <h1>Job Applications Form</h1>
        <p class="description">To apply this job, please provide certified information below, Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.</p>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9  m-auto">
            <h2>Personal information &nbsp;<span class="personal-information-description">(issued by Department of Residence Registration)</span>
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">
            <vs-input name="first-name"
                      label-placeholder="First Name"
                      v-model="fistName"
                      readonly="true"
                      size="large"
                      class="light-input"
                      icon-after="true"
                      icon="check"/>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">
            <vs-input name="last-name"
                      label-placeholder="Last Name"
                      readonly="true"
                      v-model="lastName"
                      size="large"
                      class="light-input"
                      icon-after="true"
                      icon="check"/>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">
            <vs-input name="national-id"
                      label-placeholder="National ID"
                      readonly="true"
                      v-model="nationalId"
                      size="large"
                      class="light-input"
                      icon-after="true"
                      icon="check"/>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">
            <h2>Education &nbsp;<span class="education-description">(issued by ABC University)</span></h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">
            <vs-input name="degree"
                      v-validate="'required'"
                      label-placeholder="Degree"
                      data-vv-name="degree"
                      readonly=true
                      v-model="degree"
                      size="large"
                      class="light-input"
                      danger-text="The Degree is required"
                      :danger="errors.has('degree')"/>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 m-auto">

            <vs-select
                class="light-input"
                label="Graduation Status"
                v-model="graduationStatus"
                v-validate="'required'"
                data-vv-name="graduation-status"
                name="graduation-status"
                danger-text="The Graduation Status is required"
                :danger="errors.has('graduation-status')"
            >
              <vs-select-item :key="index" :value="item.value" :text="item.text"
                              v-for="(item,index) in graduationStatusOptions"/>
            </vs-select>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 col-xl-9 m-auto">
            <vs-input name="conditon"
                      v-validate="'required'"
                      label-placeholder="Condition (GPA > 4)"
                      data-vv-name="condition"
                      v-model="condition"
                      size="large"
                      class="light-input"
                      danger-text="The Condition is required"
                      :danger="errors.has('condition')"/>
          </div>
        </div>


        <div class="row justify-content-center mt-3 mb-5">

          <div class="col-auto ">
            <vs-button color="#BF272C" text-color="#EB1C24" type="border">REJECT</vs-button>

            <!-- <input type="submit" class="signup-btn"/>-->
          </div>
          <div class="col-auto">
            <vs-button color="#7C9C46">ISSUED</vs-button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import "@/assets/styles/form-request.scss";

export default {
  name: "Verify1JobApplicationForm",
  data: function() {
    return {
      fistName: "Joe",
      lastName: "Done",
      nationalId: "123-67483",
      graduationStatus: 0,
      graduationStatusOptions: [
        { text: "Graduated", value: 0 },
        { text: "Master", value: 2 },
        { text: "Phd", value: 3 }
      ],
      degree: "Bachelor of Engineering -Computer Science and Software Engineer",
      condition: "True"
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

<style>
</style>
