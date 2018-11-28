<template>
  <div id="user-request-university">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img
        class="university-logo"
        src="@/assets/images/university-abc.png"
        alt="university abc"
      />
      <h1>Choose your request</h1>
      <ul class="request-options">
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="1"
            >Request transcript.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="2"
            >Request certificate.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="3"
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
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-request.scss";

export default {
  name: "UserRequestUniversity",
  data: function() {
    return {
      requestOption: 1,
      otherOption: ""
    };
  },
  methods: {
    onClick: function () {
      this.$router.push("transcript-request-form");
    }
  }
};
</script>

<style></style>
