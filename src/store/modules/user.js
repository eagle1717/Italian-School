// import axios from 'axios'
import Api from "@/service/";
export const namespaced = true;
export const state = {
  user: null,
  quiz: null
};

export const mutations = {
  CHANGE_ROLE(state, role) {
    state.user.role = role;
  },
  SET_USER_DATA(state, user) {
    user.lessons = null;
    user.tickets = null;
    user.notifications = [];
    state.user = user;
  },
  CLEAR_USER_DATA(state) {
    state.user = null;
  },
  ADD_FAVORITE_CURATOR(state, id) {
    state.favorite_teachers.push({ teacher: id });
  },
  BLOCK_CURATOR(state, id) {
    state.favorite_teachers.push({ teacher: id });
  },
  SET_TICKETS(state, tickets) {
    state.user.tickets = tickets;
  },
  SET_USER_LESSONS(state, lessons) {
    state.user.lessons = lessons;
  },
  SET_NOTIFICATIONS(state, notifications) {
    state.user.notifications = notifications;
  },
  SET_QUIZ_DATA(state, data) {
    state.quiz = { ...data };
  },
  SET_USER_PHOTO(state, photo) {
    state.user.photo = photo;
  },
  SET_LESSONS_BALANCE(state, balance) {
    state.user.balance = balance;
  }
};

export const actions = {
  set_quiz_data({ commit }, data) {
    commit("SET_QUIZ_DATA", data);
  },
  set_user_data({ commit, dispatch }) {
    return new Promise(resolve => {
      Api.get_user().then(data => {
        commit("SET_USER_DATA", data.user);
        dispatch("set_loading", false, { root: true });
        resolve(data);
      });
      // .catch((err) => {
      //   console.log(err.response)
      // })
    });
  },
  clear_user_data({ commit }) {
    commit("CLEAR_USER_DATA");
  },
  getBalance({ dispatch, commit }) {
    return new Promise(resolve => {
      Api.get_balance().then(res => {
        commit("SET_LESSONS_BALANCE", res.data);
        dispatch("set_loading", false, { root: true });
        resolve(res);
      });
    });
  },
  makeCheckoutForPacket({ dispatch }, { packet_id, key }) {
    return new Promise(resolve => {
      Api.checkoutPaket({ packet_id, key }).then(res => {
        resolve(res.data);
        console.log(res);
        dispatch("set_loading", false, { root: true });
      });
    });
  },
  makeCheckoutForGroup({ dispatch }, { groupId }) {
    return new Promise(resolve => {
      Api.checkoutGroup({ groupId }).then(res => {
        resolve(res.data);
        console.log(res);
        dispatch("set_loading", false, { root: true });
      });
    });
  },
  makeCheckoutOneLesson(
    { dispatch },
    {
      day,
      full_from,
      full_to,
      teacher,
      description,
      lesson_type_id,
      lesson_type_slug,
      price,
      time
    }
  ) {
    return new Promise(resolve => {
      Api.checkoutOneLesson({
        day,
        full_from,
        full_to,
        teacher,
        description,
        lesson_type_id,
        lesson_type_slug,
        price,
        time
      }).then(res => {
        dispatch("set_loading", false, { root: true });
        resolve(res.data);
      });
    });
  },
  makeCheckout(
    { dispatch },
    {
      title,
      hours,
      total,
      student_id,
      curator_id,
      lesson_type_id,
      offer_list_id
    }
  ) {
    return new Promise(resolve => {
      Api.checkout({
        title,
        hours,
        total,
        student_id,
        curator_id,
        lesson_type_id,
        offer_list_id
      }).then(res => {
        dispatch("set_loading", false, { root: true });
        resolve(res.data);
      });
    });
  },
  add_favorite_curator({ commit, dispatch }, id) {
    return Api.add_favorite_curator(id)
      .then(res => {
        console.log(res);
        commit("ADD_FAVORITE_CURATOR", id);
        dispatch(
          "notifications/add_notification",
          {
            type: "success",
            text: "Преподаватель успешно добавлен!"
          },
          { root: true }
        );
      })
      .catch(response => {
        if (response.status === 400) {
          dispatch(
            "notifications/add_notification",
            {
              type: "danger",
              text: "Преподаватель уже добавлен!"
            },
            { root: true }
          );
        }
        // console.log(response)
      });
  },
  block_curator({ commit, dispatch }, id) {
    return Api.block_curator(id)
      .then(() => {
        commit("BLOCK_CURATOR", id);
        dispatch(
          "notifications/add_notification",
          {
            type: "success",
            text: "Преподаватель добавлен в блоклист!"
          },
          { root: true }
        );
      })
      .catch(({ response }) => {
        // console.log(err)
        if (response.status === 400) {
          dispatch(
            "notifications/add_notification",
            {
              type: "danger",
              text: "Преподаватель уже заблокирован!"
            },
            { root: true }
          );
        }
        // console.log(response)
      });
  },
  get_tickets({ commit }) {
    return Api.get_user_help_tickets()
      .then(({ data: { tickets } }) => {
        commit("SET_TICKETS", tickets);
      })
      .catch(() => { });
  },
  create_ticket({ dispatch }, data) {
    return Api.create_new_help_ticket(data)
      .then(() => {
        dispatch("set_loading", true, { root: true });
        dispatch("get_tickets").then(() => {
          dispatch("set_loading", false, { root: true });
        });
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          dispatch(
            "error_handler",
            {
              type: "danger",
              text: "Текст вопроса должен быть не менее 20 символов!"
            },
            { root: true }
          );
        }
      });
  },
  get_lessons({ commit, getters }) {
    if (getters.user_role && getters.user_role === "student") {
      return Api.get_student_lessons()
        .then(res => {
          commit("SET_USER_LESSONS", res.data.allLessonsStudent);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    } else if (getters.user_role && getters.user_role === "curator") {
      return Api.get_curator_lessons()
        .then(res => {
          commit("SET_USER_LESSONS", res.data.allLessonsCurator);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  },
  update_user_data({ dispatch }, data) {
    dispatch("set_loading", true, { root: true });
    return Api.update_user_data(data)
      .then(res => {
        console.log(res);
        dispatch("set_user_data").then(() => {
          dispatch(
            "error_handler",
            {
              type: "success",
              text: "Данные успешно обновлены!"
            },
            { root: true }
          );
        });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch(
          "error_handler",
          {
            type: "danger",
            text: "Что то пошло не так! Попробуйте еще раз."
          },
          { root: true }
        );
      });
  },
  send_ticket_message({ commit }, { id, data }) {
    console.log(commit, "[ebnt");
    return Api.send_ticket_message(id, data)
      .then(res => {
        console.log(res);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  curator_confirm_lesson({ dispatch }, { id, data }) {
    dispatch("set_loading", true, { root: true });
    return Api.curator_confirm_lesson(id, data)
      .then(() => {
        dispatch("set_user_data").then(() => {
          dispatch("set_loading", false, { root: true });
          dispatch("close_modal_and_clear_data", null, { root: true });
        });
      })
      .catch(() => {
        dispatch("set_loading", false, { root: true });
      });
  },
  send_homework_link({ dispatch }, { id, data }) {
    dispatch("set_loading", true, { root: true });
    return Api.curator_send_homework(id, data)
      .then(() => {
        dispatch("set_user_data").then(() => {
          dispatch("set_loading", false, { root: true });
          dispatch("close_modal_and_clear_data", null, { root: true });
        });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch("set_loading", false, { root: true });
      });
  },
  student_send_to_check_homework({ dispatch }, { id, data }) {
    dispatch("set_loading", true, { root: true });
    return Api.student_send_homework(id, data)
      .then(() => {
        dispatch("get_lessons").then(() => {
          dispatch("set_loading", false, { root: true });
          dispatch(
            "error_handler",
            {
              type: "success",
              text: "Вы успешно отправили домашнее задание на проверку!"
            },
            { root: true }
          );
          // dispatch('close_modal_and_clear_data', null, { root: true });
        });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch(
          "error_handler",
          {
            type: "danger",
            text: "Что то пошло не так. Попробуйте еще раз!"
          },
          { root: true }
        );
      });
  },
  curator_confirm_homework({ dispatch }, { id, data }) {
    dispatch("set_loading", true, { root: true });
    return Api.curator_confirm_homework(id, data)
      .then(() => {
        dispatch("set_user_data").then(() => {
          dispatch("set_loading", false, { root: true });
        });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch("set_loading", false, { root: true });
      });
  },
  make_day_off({ dispatch }, data) {
    dispatch("set_loading", true, { root: true });
    return Api.make_day_off(data)
      .then(() => {
        dispatch("set_user_data").then(() => {
          dispatch("set_loading", false, { root: true });
        });
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  make_time_off({ dispatch }, data) {
    dispatch("set_loading", true, { root: true });
    return Api.make_time_off(data)
      .then(() => {
        dispatch("set_user_data").then(() => {
          dispatch("set_loading", false, { root: true });
        });
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  get_notifications({ commit }) {
    return Api.get_notifications().then(({ data: { notifications } }) => {
      // console.log(notifications)
      commit("SET_NOTIFICATIONS", notifications);
    });
  }
};

export const getters = {
  user_id: state => {
    return state.user ? state.user.id : null;
  },
  user_first_name: state => {
    return state.user ? state.user.first_name : "";
  },
  user_last_name: state => {
    return state.user ? state.user.last_name : null;
  },
  user_email: state => {
    return state.user ? state.user.email : null;
  },
  user_name: state => {
    return state.user
      ? state.user.last_name
        ? `${state.user.first_name} ${state.user.last_name}`
        : state.user.first_name
      : null;
    // return `${state.user.name}`;
  },
  user_photo: state => {
    return state.user
      ? state.user.photo
        ? state.user.photo_path
        : null
      : null;
  },
  user_role: state => {
    return state.user ? state.user.role.name : null;
  },
  working_hours: state => {
    return state.user
      ? state.user.working_hours
        ? state.user.working_hours
        : null
      : null;
  },
  earned_money: state => {
    return state.user
      ? state.user.earned_money
        ? state.user.earned_money
        : null
      : null;
  },
  favorite_teachers: state => {
    return state.user ? state.user.favorite_teachers : null;
  },
  blocked_teachers: state => {
    return state.user ? state.user.blocked_teachers : null;
  },
  user_tickets: state => {
    return state.user ? (state.user.tickets ? state.user.tickets : null) : null;
  },
  user_lessons: state => {
    return state.user ? (state.user.lessons ? state.user.lessons : null) : null;
  },
  curator_not_confirmed_lessons: state => {
    return state.user ? state.user.not_confirmed_lessons : [];
  },
  curator_confirmed_lessons: state => {
    return state.user ? state.user.confirmed_lessons : [];
  },
  curator_day_off: state => {
    return state.user && state.user.day_off ? state.user.day_off : [];
  },
  curator_time_off: state => {
    return state.user && state.user.time_off ? state.user.time_off : [];
  },
  notifications: state => {
    return state.user ? state.user.notifications : [];
  },
  quiz: state => {
    return state.quiz ? state.quiz : null;
  },
  balance: state => {
    return state.user.balance.length ? state.user.balance : null;
  }
};
// {
//   "id": 18,
//   "full_from": "09:00",
//   "full_to": "10:30",
//   "hour_from": 9,
//   "hour_to": 10,
//   "minute_from": 0,
//   "minute_to": 30,
//   "user_id": 13,
//   "teacher": 12,
//   "description": "Пожелания к занятию",
//   "link_to_lesson": null,
//   "homework": null,
//   "is_homework_done": false,
//   "user": {
//   "id": 13,
//     "first_name": "Bogdan",
//     "email": "roxeteb958@homedepinst.com",
//     "email_verified_at": null,
//     "last_name": "Student",
//     "photo": null,
//     "working_hours": 0,
//     "earned_money": 0,
//     "lang": null,
//     "country": null,
//     "phone": null,
//     "male": null,
//     "photo_path": "https://work.studiait.it/storage/"
// }
// }
