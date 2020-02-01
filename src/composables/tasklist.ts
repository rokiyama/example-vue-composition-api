import { toRefs, reactive } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useTaskList() {
  const state = reactive<{ tasks: Task[] }>({
    tasks: []
  });
  const toggleTask = (task: Task) => {
    const index = state.tasks.indexOf(task);
    state.tasks.splice(index, 1, { ...task, done: !task.done });
  };
  return {
    ...toRefs(state),
    toggleTask
  };
}
