import { Ref, ref, computed } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useSearcher(tasks: Ref<Task[]>) {
  const searchText = ref("");
  const searchedTasks = computed(() =>
    tasks.value.filter(t => t.name.includes(searchText.value))
  );
  return {
    searchText,
    searchedTasks
  };
}
