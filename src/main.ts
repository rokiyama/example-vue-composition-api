import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";

Vue.config.productionTip = process.env.NODE_ENV !== "production";
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App)
}).$mount("#app");
