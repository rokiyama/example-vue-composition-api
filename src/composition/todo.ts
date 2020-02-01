import { reactive, computed, toRefs } from "@vue/composition-api";

export function useTodo() {
  const state = reactive<{ todos: string[] }>({
    todos: []
  });
  const length = computed(() => state.todos.length);
  const addTodo = (item: string) => {
    state.todos.push(item);
  };
  const deleteTodo = (index: number) => {
    state.todos.splice(index, 1);
  };
  return {
    ...toRefs(state),
    length,
    addTodo,
    deleteTodo
  };
}
