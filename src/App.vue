<template>
  <div id="app">
    <SimpleCounter />
    <SimpleTodo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SimpleCounter from "./components/SimpleCounter.vue";
import SimpleTodo from "./components/SimpleTodo.vue";

export default Vue.extend({
  name: "app",
  components: {
    SimpleCounter,
    SimpleTodo
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
