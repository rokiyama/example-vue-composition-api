import VueCompositionApi from "@vue/composition-api";
import { createLocalVue } from "@vue/test-utils";
import { useTodo } from "@/composition/todo";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe("todo.ts", () => {
  it("addTodo should work properly", () => {
    const { todos, addTodo } = useTodo();
    addTodo("new todo");
    expect(todos.value).toEqual(["new todo"]);
  });
  it("computed prop 'length' should work properyly", () => {
    const TODOS = ["todo1", "todo2", "todo3"];
    const { todos, length } = useTodo();
    todos.value = TODOS;
    expect(length.value).toEqual(TODOS.length);
  });
});
