import VueCompositionApi, { ref } from "@vue/composition-api";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import SimpleTodo from "@/components/SimpleTodo.vue";
import * as composition from "@/composition/todo";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let addTodoMock: jest.Mock;
let deleteTodoMock: jest.Mock;

describe("SimpleTodo.vue", () => {
  beforeEach(() => {
    jest.mock("@/composition/todo");
    addTodoMock = jest.fn();
    deleteTodoMock = jest.fn();
    const TODOS = ["todo1", "todo2", "todo3"];
    jest.spyOn(composition, "useTodo").mockReturnValue({
      todos: ref(TODOS),
      length: ref(TODOS.length),
      addTodo: addTodoMock,
      deleteTodo: deleteTodoMock
    });
  });
  it("renders initial html", () => {
    const wrapper = shallowMount(SimpleTodo, {
      localVue
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("correctly call addTodo when Add button is clicked", () => {
    const wrapper = shallowMount(SimpleTodo, {
      localVue
    });
    wrapper.find("#todo-input").setValue("todo4");
    wrapper.find(".add-btn").trigger("click");
    expect(addTodoMock).toHaveBeenCalledWith("todo4");
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("correctly call deleteTodo when Delete button is clicked", () => {
    const wrapper = shallowMount(SimpleTodo, {
      localVue
    });
    const INDEX = 1;
    wrapper
      .findAll(".delete-btn")
      .at(INDEX)
      .trigger("click");
    expect(deleteTodoMock).toHaveBeenCalledWith(INDEX);
  });
});
