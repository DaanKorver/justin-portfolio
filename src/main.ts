import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
})
  .$mount("#app")
  .$component("fa", FontAwesomeIcon);
