import { toRefs, reactive } from "@vue/composition-api";

export function useCount() {
  const state = reactive({
    counter: 0
  });
  const increment = () => {
    state.counter++;
  };
  const decrement = () => {
    state.counter--;
  };
  return {
    ...toRefs(state),
    increment,
    decrement
  };
}
