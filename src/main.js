import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  BootstrapVue,
  IconsPlugin,
  ImagePlugin,
  InputGroupPlugin,
  ModalPlugin,
  CardPlugin,
  ButtonPlugin,
  NavbarPlugin,
  FormTextareaPlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(InputGroupPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(NavbarPlugin);
Vue.use(ImagePlugin);
Vue.use(FormTextareaPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
