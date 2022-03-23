import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth.module";
import { viaje } from "./viaje.module";
import { infoGeneral } from "./infoGeneral.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, viaje, infoGeneral },

  state: {
    loading: false,
    snackbarMessage: {
      snackbar: false,
      text: "",
      timeout: 7000,
      color: "",
      icon: "",
    },
  },

  mutations: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    message(state, payload) {
      state.snackbarMessage.snackbar = true;
      state.snackbarMessage.text = payload.text;
      state.snackbarMessage.color = payload.color;
      state.snackbarMessage.icon = payload.icon;

      if (payload.timeout) {
        state.snackbarMessage.timeout = payload.timeout;
      } else {
        state.snackbarMessage.timeout = 7000;
      }
    },
  },
});
