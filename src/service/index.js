import axios from "axios";
const $http = axios;
const token = localStorage.getItem("user-token");
$http.defaults.baseURL = "https://work.studiait.it/api/";
$http.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";
$http.defaults.headers.common["Accept"] = "application/json";
if (token) {
  $http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  logout() {
    $http.defaults.headers.common["Authorization"] = null;
  },
  login(data) {
    return new Promise((resolve, reject) => {
      $http
        .post("auth/login", data)
        .then(({ data }) => {
          $http.defaults.headers.common[
            "Authorization"
          ] = `${data.token_type} ${data.token}`;

          resolve(data.token);
        })
        .catch(err => {
          console.log(err.response);
          reject(err);
        });
    });
  },
  register(data) {
    return new Promise((resolve, reject) => {
      $http
        .post("auth/register", data)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  get_user() {
    return new Promise((resolve, reject) => {
      $http
        .get("user/")
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  checkout({
    title,
    hours,
    total,
    student_id,
    curator_id,
    lesson_type_id,
    offer_list_id
  }) {
    return $http.post("payment/checkout", {
      title,
      hours,
      total,
      student_id,
      curator_id,
      lesson_type_id,
      offer_list_id
    });
  },
  checkoutOneLesson({
    day,
    full_from,
    full_to,
    teacher,
    description,
    lesson_type_id,
    lesson_type_slug,
    price,
    time
  }) {
    return $http.post("payment/checkoutOne", {
      day,
      full_from,
      full_to,
      teacher,
      description,
      lesson_type_id,
      lesson_type_slug,
      price,
      time
    });
  },
  checkoutPaket({ packet_id, key }) {
    return $http.post(`payment/checkoutPacket/${packet_id}/${key}`);
  },
  checkoutGroup({ groupId }) {
    return $http.post(`payment/checkoutGroup/${groupId}`);
  },
  get_balance() {
    return $http.get("calendar/balanceLessons");
  },
  get_group_lessons() {
    return $http.get("calendar/groupLessons/allLessons");
  },
  get_curators() {
    return $http.get("main/teachers");
  },
  get_curator_by_id(id) {
    return $http.get(`/filters/teachers/${id}`);
  },
  add_favorite_curator(id) {
    return $http.post(`user/addFavoriteTeacher/${id}`);
  },
  block_curator(id) {
    return $http.post(`user/addBlockTeacher/${id}`);
  },
  get_faq_questions() {
    return $http.get("main/faq");
  },
  get_user_help_tickets() {
    return $http.get("user/tickets");
  },
  create_new_help_ticket(data = { name: null, type: null, question: null }) {
    return $http.post(`user/tickets/create`, data);
  },
  create_lesson(data) {
    return $http.post(`calendar/createLesson`, data);
  },
  get_student_lessons() {
    return $http.get("calendar/allLessonsStudent");
  },
  get_curator_lessons() {
    return $http.get("calendar/allLessonsCurator");
  },
  update_user_data(data) {
    return $http.post(`user/update`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  send_ticket_message(id, data) {
    return $http.post(`user/tickets/create/question/${id}`, data);
  },
  curator_confirm_lesson(id, data) {
    return $http.post(`calendar/confirmLesson/${id}`, data);
  },
  curator_send_homework(id, data) {
    return $http.post(`calendar/sendHomework/${id}`, data);
  },
  student_send_homework(id, data) {
    return $http.post(`calendar/checkHomework/${id}`, data);
  },
  curator_confirm_homework(id, data) {
    return $http.post(`calendar/confirmHomework/${id}`, data);
  },
  make_day_off(data) {
    return $http.post(`/calendar/dayOff`, { calendar_day: data });
  },
  make_time_off(data) {
    return $http.post("calendar/timeOff", data);
  },
  send_special_lesson(data) {
    return $http.post(`main/sendSpecialLesson`, data);
  },
  send_cert(data) {
    return $http.post(`main/certificate`, data);
  },
  get_notifications() {
    return $http.get(`user/notifications`);
  },
  sent_query_to_reset_password(email) {
    return $http.post(`auth/sendEmailReset`, email);
  },
  reset_password(password) {
    return $http.post(`auth/changePassword`, password);
  },
  verification_email(token) {
    return $http.get(`auth/verify/${token}`);
  },
  filter_curators(data) {
    return $http.post(`filters/teachers`, data);
  },
  get_student_for_curator(id) {
    return $http.get(`user/student/${id}`);
  },
  get_types() {
    return $http.get(`user/types`);
  },
  get_offers() {
    return $http.get("calendar/packets");
  },
  get_single_offer(id) {
    return $http.get(`calendar/packets/${id}`);
  },
  redirectToLesson(lessonId) {
    return $http.get(`calendar/goLesson/${lessonId}`);
  },
  sendHomework(lessonId) {
    return $http.post(`calendar/sendHomework/${lessonId}`);
  }
};
