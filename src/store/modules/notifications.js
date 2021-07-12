const namespaced = true;
const state = {
  notifications: []
};

const mutations = {
  ADD_NOTIFICATION(state, { type, text, delay, uuid }) {
    state.notifications.push({
      type,
      text,
      uuid: uuid || new Date().getTime(),
      delay: delay || 5
    });
  },
  REMOVE_NOTIFICATION(state, uuid) {
    state.notifications = state.notifications.filter(
      notification => notification.uuid !== uuid
    );
  }
};

const actions = {
  add_notification({ commit }, { type, text, delay, uuid }) {
    console.log(type, text);
    commit("ADD_NOTIFICATION", { type, text, delay, uuid });
  },
  remove_notification({ commit }, uuid) {
    commit("REMOVE_NOTIFICATION", uuid);
  }
};

const getters = {
  notificationAlerts: state => state.notifications
};

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
