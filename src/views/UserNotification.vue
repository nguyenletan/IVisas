<template>
  <div id="user-notification">
    <side-bar></side-bar>
    <div class="dashboard-content">
      <div class="search-box">
        <v-text-field
          v-model="searchValue"
          label="Search"
          append-icon="search"
        ></v-text-field>
      </div>

      <h2 class="main-divider-title">
        MY WALLET<span class="main-divider-desc">05 unread notifications</span>
      </h2>
      <vs-divider class="main-divider"></vs-divider>
      <div class="row justify-content-center">
        <div class="col-10">
          <vs-list>
            <vs-list-item
              title="Verify National ID"
              subtitle="Mon, 23 Aug 2018"
            >
              <template slot="avatar">
                <i class="material-icons yellow-star">star</i><vs-avatar />
              </template>
            </vs-list-item>
            <p class="list-description">
              <strong class="black--text"
                >Your digital ID has been validated by DDR</strong
              >
              - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei, nec
              lucilius phaedrum at.
            </p>

            <vs-list-item
              title="Verify National ID"
              subtitle="Mon, 23 Aug 2018"
            >
              <template slot="avatar">
                <i class="material-icons yellow-star">star</i><vs-avatar />
              </template>
            </vs-list-item>
            <p class="list-description">
              <strong class="black--text"
                >Your digital ID has been validated by DDR</strong
              >
              - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei, nec
              lucilius phaedrum at.
            </p>

            <vs-list-item
              title="Verify National ID"
              subtitle="Mon, 23 Aug 2018"
            >
              <template slot="avatar">
                <i class="material-icons yellow-star">star</i><vs-avatar />
              </template>
            </vs-list-item>
            <p class="list-description">
              <strong class="black--text"
                >Your digital ID has been validated by DDR</strong
              >
              - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei, nec
              lucilius phaedrum at.
            </p>

            <vs-list-item
              title="Verify National ID"
              subtitle="Mon, 23 Aug 2018"
            >
              <template slot="avatar">
                <i class="material-icons black-star">star_border</i
                ><vs-avatar vs-text="Vuesax" />
              </template>
            </vs-list-item>
            <p class="list-description">
              <strong class="black--text"
                >Your digital ID has been validated by DDR</strong
              >
              - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei, nec
              lucilius phaedrum at.
            </p>

            <vs-list-item
              title="Verify National ID"
              subtitle="Mon, 23 Aug 2018"
            >
              <template slot="avatar">
                <i class="material-icons black-star">star_border</i
                ><vs-avatar vs-text="Vuesax" />
              </template>
            </vs-list-item>
            <p class="list-description">
              <strong class="black--text"
                >Your digital ID has been validated by DDR</strong
              >
              - Lorem ipsum dolor sit amet, mel mandamus voluptatibus ei, nec
              lucilius phaedrum at.
            </p>
          </vs-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import ddrImage from "@/assets/images/ddr.png";*/
import "@/assets/styles/user-dashboard.scss";
import SideBar from "../components/SideBar";

export default {
  name: "UserNotification",
  data: function() {
    return {
      searchValue: "",
      government: [],
      corporation: [],
      education: []
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

  components: {
    SideBar
  }
};
</script>

<style></style>
