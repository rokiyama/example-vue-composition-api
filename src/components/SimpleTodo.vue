<template>
  <div class="count">
    <p>
      <input id="todo-input" v-model="text" />
      <button class="add-btn" @click="onSubmit">Add</button>
    </p>
    <p>{{ length }} todo{{ length > 1 ? "s" : "" }}</p>
    <ul>
      <li v-for="(task, i) in todos" :key="i">
        <p>
          {{ task }}
          <button class="delete-btn" @click="deleteTodo(i)">Delete</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from "@vue/composition-api";
import { useTodo } from "@/composition/todo";

export default createComponent({
  setup() {
    const text = ref("");
    const { todos, length, addTodo, deleteTodo } = useTodo();
    const onSubmit = () => {
      addTodo(text.value);
      text.value = "";
    };
    return {
      text,
      todos,
      length,
      addTodo,
      deleteTodo,
      onSubmit
    };
  }
});
</script>
