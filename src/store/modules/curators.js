// import axios from 'axios'
import Api from "@/service/";
export const namespaced = true;
export const state = {
  curators: null
};

export const mutations = {
  SET_CURATORS(state, curators) {
    state.curators = curators.reverse();
  }
};
// vladij01@gmail.com
// Testtest111!!!
export const actions = {
  get_curators({ commit }) {
    return Api.get_curators()
      .then(
        ({
          data: {
            teachers: { data }
          }
        }) => {
          commit("SET_CURATORS", data);
        }
      )
      .catch(() => {
        return;
      });
  },
  async filter_curators({ dispatch, commit }, data) {
    dispatch('set_loading', true, { root: true })
    try {
      const response = await Api.filter_curators(data)
      console.log(response)
      commit('SET_CURATORS', response.data.teachers)
      dispatch('set_loading', false, { root: true })
      return response.data.teachers
    } catch (e) {
      dispatch('set_loading', false, { root: true })
    }
  }
};

export const getters = {
  curators_array: state => {
    return state.curators ? state.curators : null;
  }
};
