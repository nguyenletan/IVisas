<template>
  <div id="user-dashboard">
    <side-bar></side-bar>
    <div class="dashboard-content">
      <div class="search-box">
        <v-text-field v-model="searchValue" label="Search" append-icon="search"></v-text-field>
      </div>
      <div class="list-organization">


        <v-card>
          <v-toolbar color="#1256B3" dark height="50">
            <v-toolbar-title>Government Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
              >

              </v-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
              ></v-divider>

              <v-list-tile
                  v-else
                  :key="item.title"
                  avatar
              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>

        <v-card>
          <v-toolbar color="#8CC63F" dark height="50">
            <v-toolbar-title>Government Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
              >

              </v-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
              ></v-divider>

              <v-list-tile
                  v-else
                  :key="item.title"
                  avatar
              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>


        <v-card>
          <v-toolbar color="#FFCB04" dark height="50">
            <v-toolbar-title>Government Agencies</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
              >

              </v-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
              ></v-divider>

              <v-list-tile
                  v-else
                  :key="item.title"
                  avatar

              >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
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
      items: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend1?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">6</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui1",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend2?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">5</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui2",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  },
  components: {
    SideBar
  }
};
</script>

<style>
</style>
