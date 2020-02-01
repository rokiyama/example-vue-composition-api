import VueCompositionApi from "@vue/composition-api";
import { createLocalVue } from "@vue/test-utils";
import { useCount } from "@/composition/counter";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe("counter.ts", () => {
  it("increment should work properly", () => {
    const { counter, increment } = useCount();
    increment();
    expect(counter.value).toEqual(1);
  });
  it("decrement should work properyly", () => {
    const { counter, decrement } = useCount();
    decrement();
    expect(counter.value).toEqual(-1);
  });
});
