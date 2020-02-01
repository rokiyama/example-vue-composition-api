<template>
  <div id="app">
    <SimpleCounter />
    <TaskList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SimpleCounter from "./components/SimpleCounter.vue";
import TaskList from "./components/TaskList.vue";

export default Vue.extend({
  name: "app",
  components: {
    SimpleCounter,
    TaskList
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
