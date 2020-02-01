<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
    <div class="button-box">
      <button class="plus" @click="increment">+</button>
      <button class="minus" @click="decrement">-</button>
    </div>
    {{ mode }}
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

import { useCount } from "@/composition/counter";

export default createComponent({
  setup() {
    return {
      ...useCount(),
      mode: process.env.NODE_ENV
    };
  }
});
</script>
