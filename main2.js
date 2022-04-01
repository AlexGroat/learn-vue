// METHOD !
// window.Event = new Vue();

// /*!!!!!!!!!!!!!!! CHILD COMPONENT !!!!!!!!!!!!!!!!!!!!!*/
// Vue.component("coupon", {
//     props: [""],

//     template: `
//     /* blur: when an element has lost its focus, clicking off of
//     the input after entering a value */
//     <input placeholder="Enter your coupon code" @blur="onCouponApplied">
//    `,

//    methods: {
//        onCouponApplied() {
//            // emitting an event, referrenced in index4.html line 19
//           Event.$emit('applied');
//        }
//    }
//   });

// /*!!!!!!!!!!!!!!!!!!!!!! PARENT COMPONENT !!!!!!!!!!!!!!!!!!!!!*/
// new Vue({
//   el: "#root",

//   data: {
//       couponApplied: false
//   },

//   created() {
//       Event.$on('applied', () => alert('Handle it'));
//   }
// });

// METHOD 2
window.Event = new (class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
})();

Vue.component("coupon", {
  props: [""],

  template: `
    /* blur: when an element has lost its focus, clicking off of
    the input after entering a value */
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
   `,

  methods: {
    onCouponApplied() {
      // emitting an event, referrenced in index4.html line 19/ referrenced fire on line 41
      Event.fire("applied");
    },
  },
});

new Vue({
  el: "#root",

  data: {
    couponApplied: false,
  },

  created() {
    Event.listen("applied", () => alert("Handle it"));
  },
});
