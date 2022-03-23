import AuthService from '../services/auth.service';
import moment from 'moment';

const usr = JSON.parse(localStorage.getItem('usr'));
const loggedIn = usr ? true : false;
const timeOut = localStorage.getItem('timeOut')
  ? moment(new Date(localStorage.getItem('timeOut')))
  : null;

export const auth = {
  namespaced: true,

  state: {
    usr,
    loggedIn,
    timeOut,
    usersAccounts: []
  },

  actions: {
    signUp({ commit }, user) {
      return AuthService.signUp(user).then(
        (res) => {
          commit('signUpSuccess', res);

          return Promise.resolve(res);
        },
        (err) => {
          commit('logout');
          return Promise.reject(err);
        }
      );
    },

    login({ commit }, user) {
      return AuthService.login(user).then(
        (res) => {
          commit('loginSuccess', res);

          return Promise.resolve(res);
        },
        (err) => {
          commit('logout');
          return Promise.reject(err);
        }
      );
    },

    chngPsw({ commit }, user) {
      return AuthService.chngPsw(user).then(
        (res) => {
          commit('loginSuccess', res);

          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },

    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
  },

  mutations: {
    signUpSuccess(state, usuario) {
      state.timeOut = moment(new Date(localStorage.getItem('timeOut')));
      state.loggedIn = true;
      state.usr = usuario;
    },
    loginSuccess(state, usuario) {
      state.timeOut = moment(new Date(localStorage.getItem('timeOut')));
      state.loggedIn = true;
      state.usr = usuario;
    },
    logout(state) {
      state.usr = null;
      state.loggedIn = false;
      state.timeOut = null;
    },
  },
};
