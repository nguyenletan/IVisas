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
          <vs-radio name="requestOption" v-model="requestOption" vs-value="1"
            >Apply for a job.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" vs-value="2"
            >Get the payslip.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" vs-value="3"
            >Create job certificate credential request.</vs-radio
          >
        </li>
        <li>
          <vs-radio
            class="other-option"
            name="requestOption"
            v-model="requestOption"
            vs-value="0"
            >Other:</vs-radio
          >
          <vs-textarea
            :disabled="requestOption > 0"
            v-model="otherOption"
          ></vs-textarea>
        </li>
      </ul>
      <img
        src="@/assets/images/next-btn.png"
        alt="next button"
        class="next-btn"
        @click="onClick"
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
      requestOption: "0",
      otherOption: ""
    };
  },
  methods: {
    onClick: function() {
      console.log(this.requestOption);
      switch (this.requestOption) {
        case "0":
          break;
        case "1":
          this.$router.push("job-application-form");
          break;
        case "2":
          this.$router.push("fill-information-for-payslip");
          break;
        case "3":
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style></style>
