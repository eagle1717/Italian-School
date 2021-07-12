import Api from "@/service/";
export const namespaced = true;

export const state = {
  auth: {
    token: localStorage.getItem("user-token") || null
  }
};

export const getters = {
  isNotAuthenticated: state => !state.auth.token
};

export const mutations = {
  SET_TOKEN(state, token) {
    localStorage.setItem("user-token", token);
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    localStorage.removeItem("user-token");
    state.token = null;
  }
};

export const actions = {
  login({ commit, dispatch }, data) {
    dispatch("set_loading", true, { root: true });
    return new Promise((resolve, reject) => {
      Api.login(data)
        .then(token => {
          commit("SET_TOKEN", token);
          dispatch("user/set_user_data", null, { root: true }).then(data => {
            resolve(data);
          });
        })
        .catch(err => {
          dispatch("set_loading", false, { root: true });
          reject(err);
        });
    });
  },
  register({ dispatch }, data) {
    dispatch("set_loading", true, { root: true });
    return new Promise((resolve, reject) => {
      Api.register(data)
        .then(res => {
          dispatch("set_loading", false, { root: true });
          resolve(res);
        })
        .catch(err => {
          dispatch("set_loading", false, { root: true });
          reject(err.status);
        });
      // axios.post('auth/register', data)
      //   .then(res => {
      //     // dispatch("user/set_user_data", res.data.user, { root: true });
      //     // axios.defaults.headers.common["Authorization"] = res.data.token;
      //     // commit("SET_TOKEN", res.data.token);
      //     dispatch("set_loading", false, { root: true });
      //     resolve(res)
      //   })
      //   .catch(err => {
      //     dispatch("set_loading", false, { root: true });
      //     console.log(err.response)
      //     // dispatch("set_loading", false, { root: true });
      //     reject(err)
      //   })
    });
  },
  logout({ commit, dispatch }) {
    commit("CLEAR_TOKEN");
    Api.logout();
    dispatch("user/clear_user_data", null, { root: true });
  },
  query_to_reset_password({ commit, dispatch }, data) {
    return Api.sent_query_to_reset_password(data)
      .then(({ data: { token } }) => {
        commit("SET_TOKEN", token);
        dispatch("show_modal", "check");
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  reset_password({ commit, dispatch }, data) {
    return Api.reset_password(data)
      .then(({ data: { token } }) => {
        commit("SET_TOKEN", token);
      })
      .catch(
        ({
          response: {
            data: { error }
          }
        }) => {
          dispatch(
            "error_handler",
            {
              type: "danger",
              text: error || "Что то пошло не так. Попробуйте еще раз!"
            },
            { root: true }
          );
        }
      );
  },
  verification_email({ commit }, token) {
    return Api.verification_email(token).then(({ data: { token } }) => {
      commit("SET_TOKEN", token);
    });
  }
};
