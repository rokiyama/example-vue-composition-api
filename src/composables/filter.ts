import { Ref, computed } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useFilter(tasks: Readonly<Ref<readonly Task[]>>) {
  const doingTasks = computed(() => tasks.value.filter(t => !t.done));
  const completedTasks = computed(() => tasks.value.filter(t => t.done));
  return {
    doingTasks,
    completedTasks
  };
}
