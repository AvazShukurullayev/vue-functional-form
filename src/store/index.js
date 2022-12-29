import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import form from "./form";

export default new Vuex.Store({
  modules: {
    form,
  },
});