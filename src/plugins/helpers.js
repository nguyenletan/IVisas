export default {
  install(Vue) {
    // 1. add global method or property
    Vue.prototype.callFecth = function(api_url, options, callback) {
      // something logic ...
      this.$vs.loading({ type: "corners" });

      fetch(api_url, options)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.$vs.loading.close();
          if (data.code !== 200) {
            this.$vs.notify({
              title: "Error",
              text: data.message,
              color: "warning",
              position: "top-center",
              icon: "error",
              time: 3000
            });
          } else {
            callback(data);
          }
        })
        .catch(err => {
          this.$vs.notify({
            title: "error",
            text: err
          });
          console.log(err);
          this.$vs.loading.close();
        });
    };

    // 2. add a global asset
    /* Vue.directive('my-directive', {
       bind (el, binding, vnode, oldVnode) {
         // something logic ...
       }
       ...
     })*/

    // 3. inject some component options
    /*Vue.mixin({
      created: function () {
        // something logic ...
      }
      ...
    })*/

    // 4. add an instance method
    /*Vue.prototype.$myMethod = function (methodOptions) {
      // something logic ...
    }*/
  }
};
// vue.use(Helpers);
