

// new Vue({
//   render: (h) => h(App),
//   mounted() {
//     AOS.init()
//   },
// }).$mount('#app')

new Vue({
  el: '#app',

  data() {
    return {
      bg: 'bio' };

  } ,

  mounted() {
    // Initialize AOS after the Vue instance is mounted
    AOS.init();
  }

});


// new Vue({
//   el: '#app',

//   data() {
//     return {
//       bg: 'bio',
//     }
//   },

//   mounted() {
//     AOS.init()
//   },

//   methods: {
//     changeBg(page) {
//       this.bg = page
//     }
//   }
// })




