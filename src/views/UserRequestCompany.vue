<template>
  <div id="user-request-company">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img
        class="company-logo"
        src="@/assets/images/company-xyz.png"
        alt="company xyz"
      />
      <h1>Choose your request</h1>
      <ul class="request-options">
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="1"
            >Apply for a job.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="2"
            >Get the payslip.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="2"
            >Create job certificate credential request.</vs-radio
          >
        </li>
        <li>
          <vs-radio
            class="other-option"
            name="requestOption"
            v-model="requestOption"
            value="0"
            >Other:</vs-radio
          >
          <vs-textarea v-model="otherOption"></vs-textarea>
        </li>
      </ul>
      <img
        src="@/assets/images/next-btn.png"
        alt="next button"
        class="next-btn"
      />
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-request.scss";

export default {
  name: "UserRequestCompany",
  data: function() {
    return {
      requestOption: 1,
      otherOption: ""
    };
  },
  methods: {}
};
</script>

<style></style>
