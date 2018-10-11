<template>
  <div id="user-dashboard">
    <side-bar></side-bar>
    <div class="dashboard-content container">
      <div class="row">
        <div class="col-8 offset-2">
        <vs-input vs-icon-after="true"
                  vs-label-placeholder="icon-after"
                  vs-icon="search"
                  vs-placeholder="Search"
                  v-model="searchValue"/>
        </div>
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
      searchValue: ""
    };
  },
  components: {
    SideBar
  }
};
</script>

<style>
</style>
