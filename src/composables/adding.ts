import { ref, Ref } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useAddingTask(tasks: Ref<Task[]>) {
  const taskName = ref("");
  const addTask = () => {
    tasks.value.push({
      name: taskName.value,
      done: false
    });
    taskName.value = "";
  };
  return {
    taskName,
    addTask
  };
}
