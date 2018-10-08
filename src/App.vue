<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
import "@/assets/styles/layout.scss";
export default {
  name: "app"
};
</script>

<style lang="scss">
</style>
