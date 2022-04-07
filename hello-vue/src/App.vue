<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>

import Message from './components/message.vue';
import Counter from './components/counter.vue';

export default {
  name: "app",

  components: {
    Counter
  },

  data() {
    return {
    };
  },
};
</script>

<style>

</style>
