import { ref } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useTaskList() {
  const tasks = ref<Task[]>([]);
  const toggleTask = (task: Task) => {
    const index = tasks.value.indexOf(task);
    tasks.value.splice(index, 1, { ...task, done: !task.done });
  };
  return {
    tasks,
    toggleTask
  };
}
