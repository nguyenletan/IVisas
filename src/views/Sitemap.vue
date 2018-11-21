<template>
  <section id="sitemap" class="container-fluid">
    <h1>SiteMap</h1>
    <ol class="row justify-space-between">
      <li
        class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3"
        v-for="page in pages"
        v-bind:key="page.name"
      >
        <router-link :to="page.path">{{ page.name }}</router-link>
      </li>
    </ol>
  </section>
</template>
<script>
export default {
  name: "SiteMap",
  data: function() {
    return {
      pages: []
    };
  },
  created: function() {
    let routes = this.$router.options.routes;
    //let routesItem = {}
    console.log(this.$router);
    for (let routeItem of routes) {
      console.log(routeItem);
      this.pages.push({ path: routeItem.path, name: routeItem.name });
    }
    console.log(this.pages);
  }
};
</script>
<style scoped lang="scss">
#sitemap {
  // margin: 0 auto;

  font-family: Courier, monospace;
  font-size: 16px;
  // font-weight: bold;
  padding: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
    font-weight: bold;
  }
  ol {
    //list-style: none;
    //align-content: space-between;

    color: steelblue;
    li {
      margin: 10px;
      transition: all 0.8s ease-in-out;
      // min-width: 30%;
      a {
        text-transform: capitalize;
        color: steelblue;
      }
    }
  }
}
</style>
