import { Ref, computed, reactive, toRefs } from "@vue/composition-api";
import { Task } from "@/types/task";

export function useSearcher(tasks: Readonly<Ref<readonly Task[]>>) {
  const state = reactive({
    searchText: ""
  });
  const searchedTasks = computed(() =>
    tasks.value.filter(t => t.name.includes(state.searchText))
  );
  return {
    ...toRefs(state),
    searchedTasks
  };
}
