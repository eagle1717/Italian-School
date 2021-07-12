import Vue from "vue";
import Vuex from "vuex";
import * as user from "./modules/user";
import notifications from "./modules/notifications";
import * as auth from "./modules/auth";
import * as curators from "./modules/curators";
import Api from "@/service/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show_overlay: false,
    activeModal: null,
    loading: false,
    ticketId: null,
    modalData: null,
    modalInfo: null,
    lesson_types: [],
    offers: [],
    groups: [],
    openTeacherInfo: false
  },
  getters: {
    lesson_types: state => {
      return state.lesson_types;
    },
    offers: state => {
      return state.offers;
    },
    groups: state => {
      return state.groups
    },
    modalInfo: state => {
      return state.modalInfo
    }
  },
  mutations: {
    HIDE_SHOW_OVERLAY(state, bool) {
      state.show_overlay = bool;
    },
    SHOW_MODAL(state, modal) {
      state.activeModal = modal;
      // state.modalData = data;
    },
    MODAL_DATA(state, data) {
      state.modalInfo = data;
    },
    HIDE_MODAL(state) {
      state.activeModal = null;
    },
    SET_LOADING(state, bool) {
      state.loading = bool;
    },
    SET_MODAL_DATA(state, data) {
      state.modalData = data;
    },
    SET_LESSON_TYPES(state, data) {
      state.lesson_types = data;
    },
    SET_OFFERS(state, data) {
      state.offers = data;
    },
    SET_GROUPS(state, data) {
      state.groups = data;
    }
  },
  actions: {
    hide_show_overlay({ commit }, bool) {
      commit("HIDE_SHOW_OVERLAY", bool);
      commit("HIDE_MODAL");
      commit("SET_MODAL_DATA", null);
    },
    hide_overlay({ commit }, bool) {
      commit("HIDE_SHOW_OVERLAY", bool);
    },
    hide_modal({ commit }) {
      commit("HIDE_MODAL");
    },
    show_modal({ commit }, modal_name) {
      commit("HIDE_SHOW_OVERLAY", true);
      commit("SHOW_MODAL", modal_name);
    },
    set_loading({ commit }, bool) {
      commit("SET_LOADING", bool);
    },
    show_reservation_lesson_modal({ commit }, { data, modal_name }) {
      commit("HIDE_SHOW_OVERLAY", true);
      commit("SET_MODAL_DATA", data);
      commit("SHOW_MODAL", modal_name);
    },
    error_handler({ dispatch }, { type, text }) {
      dispatch("set_loading", false);
      dispatch("notifications/add_notification", {
        type,
        text
      });
    },
    close_modal_and_clear_data({ commit }) {
      commit("HIDE_SHOW_OVERLAY", false);
      commit("HIDE_MODAL");
      commit("SET_MODAL_DATA", null);
    },
    async get_user_for_curator({ commit }, user_id) {
      commit("SET_LOADING", true);
      // const user
      try {
        const user = await Api.get_student_for_curator(user_id);
        commit("SET_LOADING", false);
        return user.data;
      } catch (e) {
        commit("SET_LOADING", false);
      }
    },
    async get_types({ commit }) {
      commit("SET_LOADING", true);
      try {
        const lesson_types = await Api.get_types();
        // console.log(lesson_types)
        commit("SET_LESSON_TYPES", lesson_types.data.types);
        commit("SET_LOADING", false);
      } catch (e) {
        commit("SET_LOADING", false);
      }
    },
    async get_offers({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await Api.get_offers();
        console.log(data);
        commit("SET_OFFERS", data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        console.log(error);
      }
    },
    async get_single_offer({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        const { data } = await Api.get_single_offer(id);
        commit("SET_LOADING", false);
        return data;
      } catch (error) {
        commit("SET_LOADING", false);
        console.log(error);
      }
    },
    async get_group({ commit }) {
      try {
        const { data } = await Api.get_group_lessons();
        commit('SET_GROUPS', data.allLessons)
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {
    user,
    notifications,
    auth,
    curators
  }
});
