<template>
  <ul>
    <li v-for="(task, i) in tasks" :key="i">
      <input type="checkbox" :checked="task.done" disabled />
      {{ task.name }}
      <button class="toggle-btn" @click="$emit('toggle', task)">
        toggle
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
  props: {
    tasks: Array
  },
  setup() {
    return {};
  }
});
</script>
