Vue.component("message", {
  props: ["title", "body"],

  data() {
    return {
      show: true,
    };
  },

  template: `
        <article class="message" v-show="show">
            <div class="message-header">

            {{ title }}

            <button type="button" @click="show = false">x</button>
            </div>

            <div class="message-body">
            {{ body }}
            </div>
        </article>
     `,
});

Vue.component("modal", {
  props: [""],

  template: `
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
    // slot is user input
        <slot></slot>
    </div>
  </div>
//   Custom event is called on the button
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')">Open</button>
</div>
 `,
});

new Vue({
  el: "#root",

  data: {
      showModal: false
  }
});
