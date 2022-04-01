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

new Vue({
  el: "#root",
});
