import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import {
  BootstrapVue,
  IconsPlugin,
  ImagePlugin,
  InputGroupPlugin,
  ModalPlugin,
  CardPlugin,
  ButtonPlugin,
  NavbarPlugin,
  SpinnerPlugin,
  FormTextareaPlugin,
  JumbotronPlugin,
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
Vue.use(SpinnerPlugin);
Vue.use(JumbotronPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
