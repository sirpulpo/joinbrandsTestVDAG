import ViajeService from "../services/viaje.service.js";

export const viaje = {
  namespaced: true,

  state: {
    viajesList: [],
		qrInfo: {},
    qrDialog: false,
    ocSelect: "",
    histDialog: false,
    viajeSelect: {},
    viajeSelectDialog: false,
  },

  actions: {
    getViajes({ commit }, empl_id) {
      commit("clearViajes");
      
      return ViajeService.getViajesList(empl_id).then(
        (res) => {
          // console.log("getViajes", { res });
          commit("setViajes", res);
          return Promise.resolve(res);
        },
        (err) => {
          // commit("clearViajes");
          return Promise.reject(err);
        }
      );
    },

    getAdminViajes({ commit }) {
      commit("clearViajes");
      
      return ViajeService.getAdminViajesList().then(
        (res) => {
          // console.log("getViajes", { res });
          commit("setViajes", res);
          return Promise.resolve(res);
        },
        (err) => {
          // commit("clearViajes");
          return Promise.reject(err);
        }
      );
    },

		getQrInfo({ commit }, wo) {
      return ViajeService.getQrInfo(wo).then(
        (res) => {
          // console.log("getQrInfo", { res });
          commit("setQrInfo", res);
          return Promise.resolve(res);
        },
        (err) => {
          // commit("clearQrInfo");
          return Promise.reject(err);
        }
      );
    },

    getHistoricoInfo({ commit }, oc) {
      return ViajeService.historicoInfo(oc).then(
        (res) => {
          commit("setQrInfo", res);
          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },

    historicoViajeAdmin({ commit }, oc) {
      return ViajeService.historicoViajeAdmin(oc).then(
        (res) => {
          commit("openViajeSelectDialog", res);
          return Promise.resolve(res);
        },
        (err) => {
          console.log(err);
          return Promise.reject(err);
        }
      );
    },

    busquedaViajeAdmin ({ commit }, param) {
      commit("clearViajes");
      
      return ViajeService.busquedaViajeAdmin(param).then(
        (res) => {
          // console.log("busquedaViajeAdmin", { res });
          commit("setViajes", res);
          return Promise.resolve(res);
        },
        (err) => {
          commit("clearViajes");
          return Promise.reject(err);
        }
      );
    }
  },

  mutations: {
    setViajes(state, list) {
      state.viajesList = list;
    },
    clearViajes(state) {
      state.viajesList = [];
    },
    openViajeSelectDialog(state, obj) {
      state.viajeSelectDialog = true;
      state.viajeSelect = obj;
    },
    hideViajeSelect(state) {
      state.viajeSelectDialog = false;
    },
		setQrInfo(state, obj) {
      state.qrInfo = obj;
    },
    clearQrInfo(state) {
      state.qrInfo = {};
    },
    openQrDialog(state, oc) {
      state.qrDialog = true;
      state.ocSelect = oc;
    },
    closeQrDialog(state) {
      state.qrDialog = false;
    },
    showhistDialog(state) {
      state.histDialog = true;
    },
    hidehistDialog(state) {
      state.histDialog = false;
    },
  },
};
