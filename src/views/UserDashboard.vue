<template>
  <div id="user-dashboard">
    <side-bar></side-bar>
    <div class="dashboard-content">
      <div class="search-box">
        <v-text-field
          v-model="searchValue"
          label="Search"
          append-icon="search"
        ></v-text-field>
      </div>

      <div class="list-organization">
        <v-card>
          <v-toolbar color="#1256B3" dark height="50">
            <v-toolbar-title>Government Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <template v-for="(item, index) in government">
              <v-list-tile :key="item.title">
                <v-list-tile-avatar>
                  <img
                    alt="logo"
                    :src="
                      item.logo === ''
                        ? 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                        : item.logo
                    "
                  />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="item.link"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>

        <v-card>
          <v-toolbar color="#8CC63F" dark height="50">
            <v-toolbar-title>Education Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <template v-for="(item, index) in education">
              <v-list-tile :key="item.title">
                <v-list-tile-avatar>
                  <img
                    alt="logo"
                    :src="
                      item.logo === ''
                        ? 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                        : item.logo
                    "
                  />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="item.link"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>

        <v-card>
          <v-toolbar color="#FFCB04" dark height="50">
            <v-toolbar-title>Corporation Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <template v-for="(item, index) in corporation">
              <v-list-tile :key="item.title">
                <v-list-tile-avatar>
                  <img
                    alt="logo"
                    :src="
                      item.logo === ''
                        ? 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                        : item.logo
                    "
                  />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="item.link"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user-dashboard.scss";
import SideBar from "../components/SideBar";

export default {
  name: "UserDashboard",
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
