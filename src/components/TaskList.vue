<template>
  <div class="task-list">
    <div>
      <input type="text" v-model="taskName" />
      <button class="add-btn" @click="addTask">Add</button>
    </div>
    <div><input type="text" v-model="searchText" /> Search</div>
    <div class="task-list-wrapper">
      <div>
        <h4>Doing</h4>
        <TaskListTasks :tasks="doingTasks" @toggle="toggleTask" />
      </div>
      <div>
        <h4>Completed</h4>
        <TaskListTasks :tasks="completedTasks" @toggle="toggleTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import { useTaskList } from "@/composables/tasklist";
import { useFilter } from "@/composables/filter";
import { useAddingTask } from "@/composables/adding";
import { useSearcher } from "@/composables/searcher";

import TaskListTasks from "@/components/TaskListTasks.vue";

export default createComponent({
  components: {
    TaskListTasks
  },
  setup() {
    const { tasks, toggleTask } = useTaskList();
    const { taskName, addTask } = useAddingTask(tasks);
    const { searchText, searchedTasks } = useSearcher(tasks);
    const { doingTasks, completedTasks } = useFilter(searchedTasks);

    return {
      // mutable state
      tasks,
      taskName,
      searchText,
      // functions
      toggleTask,
      addTask,
      // computed
      doingTasks,
      completedTasks
    };
  }
});
</script>

<style lang="scss" scoped>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>
