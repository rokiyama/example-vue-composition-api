import { ref } from "@vue/composition-api";

export function useCount() {
  const counter = ref(0);
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };
  return {
    counter,
    increment,
    decrement
  };
}
