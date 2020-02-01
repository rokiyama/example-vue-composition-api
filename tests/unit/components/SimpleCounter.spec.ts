import VueCompositionApi, { ref } from "@vue/composition-api";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import SimpleCounter from "@/components/SimpleCounter.vue";
import * as composition from "@/composition/counter";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let incrementMock: jest.Mock;
let decrementMock: jest.Mock;

describe("SimpleCounter.vue", () => {
  beforeEach(() => {
    jest.mock("@/composition/counter");
    incrementMock = jest.fn();
    decrementMock = jest.fn();
    jest.spyOn(composition, "useCount").mockReturnValue({
      counter: ref(0),
      increment: incrementMock,
      decrement: decrementMock
    });
  });
  it("renders initial html", () => {
    const wrapper = shallowMount(SimpleCounter, {
      localVue
    });
    wrapper.find("button.plus").trigger("click");
    expect(incrementMock).toHaveBeenCalled();
  });
  it("call increment when plus buttons is clicked", () => {
    const wrapper = shallowMount(SimpleCounter, {
      localVue
    });
    wrapper.find("button.plus").trigger("click");
    expect(incrementMock).toHaveBeenCalled();
  });
  it("call increment when minus buttons is clicked", () => {
    const wrapper = shallowMount(SimpleCounter, {
      localVue
    });
    wrapper.find("button.minus").trigger("click");
    expect(decrementMock).toHaveBeenCalled();
  });
});
