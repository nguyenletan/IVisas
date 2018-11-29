<template>
  <div id="user-request-government">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <img class="ddr-img" src="@/assets/images/ddr.png" alt="DDR" />
      <h1>Choose your request</h1>
      <ul class="request-options">
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="1"
            >Request digital national ID.</vs-radio
          >
        </li>
        <li>
          <vs-radio name="requestOption" v-model="requestOption" value="2"
            >Request digital birth certificate.</vs-radio
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
  name: "UserRequestGovernment",
  data: function() {
    return {
      requestOption: 1,
      otherOption: ""
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("fill-information-for-government");
    }
  }
};
</script>

<style></style>
