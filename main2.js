/*!!!!!!!!!!!!!!! CHILD COMPONENT !!!!!!!!!!!!!!!!!!!!!*/
Vue.component("coupon", {
    props: [""],
  
    template: `
    /* blur: when an element has lost its focus, clicking off of
    the input after entering a value */
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
   `,

   methods: {
       onCouponApplied() {
           // emitting an event, referrenced in index4.html line 19
          this.$emit('applied');
       }
   }
  });

/*!!!!!!!!!!!!!!!!!!!!!! PARENT COMPONENT !!!!!!!!!!!!!!!!!!!!!*/
new Vue({
  el: "#root",

  data: {
      couponApplied: false
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    },
  },
});

