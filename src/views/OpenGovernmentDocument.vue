<template>
  <div id="open-government-document">
    <side-bar></side-bar>
    <div class="dashboard-content">
      <div class="search-box">
        <v-text-field
          v-model="searchValue"
          label="Search"
          append-icon="search"
        ></v-text-field>
      </div>

      <section class="main-title">
        <h2 class="main-divider-title">
          MY WALLET > Government Agencies >
          <strong class="black--text"
            >Department of Residence Registration</strong
          >
        </h2>
        <span class="main-divider-icon">
          <i class="material-icons">star_border</i>
          <i class="material-icons hightlight-color">arrow_downward</i>
        </span>
      </section>
      <vs-divider class="main-divider"></vs-divider>
      <div class="row justify-content-center">
        <div class="col-10">
          <vs-list v-for="i of listItems" :key="i">
            <div @click="onClick" class="v-list--inner-wrapper">
              <div class="radio-wrapper">
                <vs-radio
                  name="university-option"
                  v-model="governmentOption"
                  vs-value="1"
                ></vs-radio>
              </div>
              <div class="list-item-wrapper">
                <vs-list-item
                  title="Verify National ID"
                  subtitle="Mon, 23 Aug 2018"
                >
                  <template slot="avatar">
                    <i class="material-icons black-star">star_border</i>
                    <vs-avatar vs-text="Vuesax" />
                  </template>
                </vs-list-item>
              </div>
              <p class="list-description">
                <span class="text-description">
                  <strong class="black--text"
                    >Your digital ID has been validated by DDR</strong
                  >
                  - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei,
                  nec lucilius phaedrum at.
                </span>
                <span class="list-time">10:00</span>
              </p>
            </div>
          </vs-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-dashboard.scss";
import SideBar from "../components/SideBar";

export default {
  name: "OpenEducationDocument",
  data: function() {
    return {
      searchValue: "",
      listItems: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      government: [],
      corporation: [],
      education: [],
      governmentOption: "1"
    };
  },
  created: function() {
    let that = this;
    let api_url = process.env.VUE_APP_HYPERLEDGER_API + "list_partner";
    this.callFecth(
      api_url,
      {
        method: "GET"
      },
      function(data) {
        console.log(data);
        that.government = data.data.government;
        that.corporation = data.data.corporation;
        that.education = data.data.education;
      }
    );
  },
  methods: {
    onClick: function() {
      this.$router.push("digital-national-id-doc");
    }
  },
  components: {
    SideBar
  }
};
</script>

<style></style>
