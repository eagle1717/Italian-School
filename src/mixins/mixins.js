import { mapGetters } from "vuex";
import moment from "moment";

export const curator_mixins = {
  props: {
    curator: {
      type: Object
    }
  },
  computed: {
    about() {
      return this.curator.about ? this.curator.about : null;
    },
    textContents() {
      return this.text_content.length > 235 && !this.open
        ? [this.text_content.slice(0, 235) + "..."]
        : [this.text_content.slice(0, 235), this.text_content.slice(235)];
    },
  }
};
export const show_lesson_modal_mixin = {
  methods: {
    show_lesson_modal(date) {
      this.$store.dispatch("show_reservation_lesson_modal", {
        data: { date },
        modal_name: "lessons-modal"
      });
    }
  }
};
export const filter_lessons = {
  props: {
    date: {
      type: String
    }
  },
  computed: {
    ...mapGetters("user", ["user_lessons"]),
    curator_list() {
      return this.user_lessons.filter(({ day }) => day === this.date);
    },
    get_filtered_data() {
      const result = [];
      if (this.curator_list.length > 0) {
        this.curator_list.forEach(({ times }) => {
          times.forEach(
            ({
              teacher,
              id,
              full_from,
              is_homework_done,
              full_to,
              link_to_lesson,
              homework
            }) => {
              result.push({
                id,
                is_homework_done,
                curator: teacher,
                time: {
                  from: full_from,
                  to: full_to
                },
                lesson_link: link_to_lesson,
                homework_link: homework
              });
            }
          );
        });
      }
      return result;
    }
  }
};
export const check_form_data = {
  methods: {
    check_name(field) {
      if (this[field].length < 20) return true;
    },
    clear_name_field(field) {
      field.replace(/[&/\\#,+()$~%.'":*?!<>{}0-9]/g, "");
    },
    check_email_field(field) {
      return field.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    },
    check_password_field(field) {
      return field.length > 6;
    },
    error_handler(field, { message_field = null, message = null }) {
      this[field] = true;
      if (message_field) {
        this[message_field] = message;
      }
      setTimeout(() => {
        this[field] = false;
        if (message_field) {
          this[message_field] = null;
        }
      }, 3000);
    }
  }
};
export const get_curator_users = {
  computed: {
    students_array() {
      let arr = [];
      if (
        this.curator_not_confirmed_lessons.length ||
        this.curator_confirmed_lessons.length
      ) {
        const sorting_array = this.curator_not_confirmed_lessons.length
          ? "curator_not_confirmed_lessons"
          : "curator_confirmed_lessons";
        console.log(sorting_array)
        arr = this[sorting_array].map(
          ({
            id,
            user_id,
            homework,
            calendar_day,
            is_homework_checked,
            link_to_lesson,
            is_homework_done,
            lesson_type,
            description,
            full_from,
            full_to,
            user
          }) => {
            return {
              id: id,
              student_id: user_id,
              first_name: (user && user.first_name) || null,
              last_name: (user && user.last_name) || null,
              photo: user && user.photo ? user.photo_path || null : null,
              date: calendar_day,
              time_from: full_from,
              time_to: full_to,
              link_to_lesson,
              link_to_homework: homework,
              lesson_comment: description,
              lesson_type: lesson_type && lesson_type.name || '',
              is_homework_done,
              is_homework_checked
            };
          }
        );
        // .filter(({ first_name }) => !!first_name);
        // .filter(({ date }) => {
        //   return sorting_array === "curator_not_confirmed_lessons"
        //     ? new Date(date) > new Date()
        //     : true;
        // })
        console.log(arr);
        return arr;
      }
      console.log(arr);
      return arr;
    },
    sorting_done_homework() {
      return this.students_array.filter(
        student => student.is_homework_done && !student.is_homework_checked
      );
    },
    sorting_all_students() {
      const isAllStudents =
        this.curator_not_confirmed_lessons && this.curator_confirmed_lessons;
      if (isAllStudents) {
        const sorting_array = [
          ...this.curator_not_confirmed_lessons,
          ...this.curator_confirmed_lessons
        ];
        console.log(sorting_array)
        return sorting_array
          .map(
            ({
              id,
              user_id,
              homework,
              calendar_day,
              is_homework_checked = false,
              link_to_lesson,
              is_homework_done,
              lesson_type,
              description,
              full_from,
              full_to,
              user
            }) => {
              return {
                id: id,
                student_id: user_id,
                first_name: user && user.first_name || '',
                last_name: user && user.last_name,
                photo: user && user.photo ? user.photo_path : null,
                date: calendar_day,
                time_from: full_from,
                time_to: full_to,
                link_to_lesson,
                link_to_homework: homework,
                lesson_comment: description,
                lesson_type: lesson_type && lesson_type.name,
                is_homework_done,
                student_level: user && user.level.name,
                is_homework_checked
              };
            }
          )
        // .filter(({ date }) => {
        //   const lessonDate = moment(date).format("YYYY-MM-DD");
        //   const dateNow = moment().format("YYYY-MM-DD");
        //   return lessonDate >= dateNow;
        // });
      }
      // return [];
    },
    is_empty_new_homeworks() {
      return this.sorting_done_homework.length > 0;
    },
    is_empty_new_lessons() {
      return this.students_array.length > 0;
    },
    is_empty_all_students() {
      return this.sorting_all_students.length > 0;
    },
    sort_students() {
      if (this.dateSelect) {
        return this.sorting_all_students
          .sort((a, b) => {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
          })
          .reverse();
      } else if (this.homeworkSelected) {
        return this.sorting_all_students.filter(student => {
          if (this.homeworkSelected === "not-check") {
            return !student.is_homework_checked;
          } else if (this.homeworkSelected === "not-links") {
            return !student.link_to_homework;
          }
        });
      } else {
        return this.sorting_all_students;
      }
    }
  }
};
export const student_card_functions = {
  computed: {
    checkPassed() {
      return this.isPassed;
    },
    is_disabled() {
      return this.link_to_lesson
        ? !(this.link_to_homework && this.is_homework_done)
        : false;
    },
    display_date() {
      return moment(this.lessonDate, "YYYY-MM-DD")
        .locale("it")
        .format("DD MMMM");
    }
  },
  methods: {
    showModal() {
      this.$store.dispatch("show_reservation_lesson_modal", {
        data: {
          lesson_id: this.lessonId,
          student_id: this.userId,
          student_photo: this.photo,
          student_first_name: this.name,
          student_last_name: this.surname,
          lesson_date: this.display_date,
          lesson_time_from: this.lessonTime,
          lesson_time_to: this.lessonTimeTo,
          lesson_type: this.lesson_type,
          lesson_comment: this.lesson_comment,
          link_to_lesson: this.link_to_lesson,
          link_to_homework: this.link_to_homework
        },
        modal_name: "new-teacher-lesson"
      });
    },
    check_homework() {
      this.$store.dispatch("user/curator_confirm_homework", {
        id: this.lessonId,
        data: {
          id: this.lessonId
        }
      });
    },
    async showUser(id) {
      try {
        const user = await this.$store.dispatch("get_user_for_curator", id);
        // this.user = user.user
        // this.lessons = user.calendar
        this.$store.dispatch("show_reservation_lesson_modal", {
          data: { user: user.user, lessons: user.calendar },
          modal_name: "student-modal"
        });
      } catch (e) {
        console.log("ads");
      }
    }
  }
};
