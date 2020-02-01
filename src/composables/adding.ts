import { Ref, reactive, toRefs } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useAddingTask(tasks: Ref<Task[]>) {
  const state = reactive({
    taskName: ""
  });
  const addTask = () => {
    tasks.value.push({
      name: state.taskName,
      done: false
    });
    state.taskName = "";
  };
  return {
    ...toRefs(state),
    addTask
  };
}
