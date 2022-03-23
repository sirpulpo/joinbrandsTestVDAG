import InfoGeneralService from '../services/infoGeneral.service';

const usr = JSON.parse(localStorage.getItem("usr"));

export const infoGeneral = {
  namespaced: true,

  state: {
    info: usr || {},
  },

  actions: {
    infoGeneral({ commit }, empl_id) {
      return InfoGeneralService.infoGeneral(empl_id).then(
        (res) => {
          // console.log("infoGeneral", { res });
          commit("setInfo", res);
          return Promise.resolve(res);
        },
        (err) => {
          commit("logout");
          return Promise.reject(err);
        }
      );
    },
  },

	mutations: {
		setInfo(state, info) {
			state.info = info;
		},
		clearInfo(state) {
			state.info = {};
		},
	}
};