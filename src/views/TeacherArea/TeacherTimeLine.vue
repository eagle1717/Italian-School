<template>
  <div
    class="c-teacher-calendar"
    ref="calendar"
    :class="{ 'cursor-active': make_day_off }"
  >
    <div
      class="cursor"
      :class="{ 'cursor-active': make_day_off }"
      ref="cursor"
    ></div>
    <div class="c-teacher-calendar__container">
      <div
        class="c-calendar__curator-btns"
        :class="{ 'mb-0': this.show_hour_timeline }"
      >
        <button
          class="c-calendar__curator-btn c-calendar__change"
          :class="{ active: make_day_off }"
          @click="show_day_off_cursor"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.143066 11.5716V14.4291H3.00061L11.4323 5.99748L8.57471 3.13994L0.143066 11.5716ZM13.6345 3.79527C13.9316 3.49809 13.9316 3.01421 13.6345 2.71703L11.8552 0.937732C11.558 0.640548 11.0741 0.640548 10.7769 0.937732L9.38245 2.33221L12.24 5.18975L13.6345 3.79527Z"
              fill="#EF4036"
            />
          </svg>
        </button>
        <button
          @click="show_timeline"
          class="c-calendar__curator-btn c-calendar__hour-mode"
          :class="{ active: this.show_hour_timeline }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          @click="show_timeline"
          class="c-calendar__curator-btn c-calendar__day-mode"
          :class="{ active: !this.show_hour_timeline }"
        >
          <span></span><span></span><span></span><span></span>
        </button>
      </div>
      <template v-if="!show_hour_timeline">
        <BaseCuratorTime
          :is_edit="make_day_off"
          :time_off="times_off"
          @change_date="change_timeline_date"
          @change_time_slider="change_curator_slider"
          :selected_date="current_date"
          :timeline="day_timeline"
        />
      </template>
      <template v-else>
        <BaseCalendar
          :is_curator="true"
          @initDate="init_date"
          @show-timeline="show_timeline"
          :lessons="lessons_getter"
          :make_day_off="make_day_off"
          @make-day-off="make_day_off_method"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "TeacherCalendar",
  computed: {
    ...mapGetters("user", [
      "curator_confirmed_lessons",
      "curator_time_off",
      "curator_day_off"
    ]),
    lessons_getter() {
      return this.lessons;
    },
    day_timeline() {
      return this.time_lines;
    },
    days_off() {
      return this.curator_day_off.map(({ calendar_day }) => calendar_day);
    },
    confirmed_lessons() {
      if (this.curator_confirmed_lessons) {
        if (this.curator_confirmed_lessons.length > 0) {
          return this.curator_confirmed_lessons;
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    all_lessons() {
      return this.curator_confirmed_lessons.map(
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
          hour_from,
          hour_to,
          minute_from,
          minute_to,
          user: { first_name, last_name, photo, photo_path }
        }) => {
          return {
            id: id,
            student_id: user_id,
            first_name,
            last_name,
            photo: photo ? photo_path : null,
            date: calendar_day,
            time_from: full_from,
            time_to: full_to,
            fromHour: hour_from,
            fromMinutes: minute_from,
            toHour: hour_to,
            toMinutes: minute_to,
            link_to_lesson,
            link_to_homework: homework,
            lesson_comment: description,
            lesson_type: lesson_type.name,
            is_homework_done,
            is_homework_checked
          };
        }
      );
    },
    all_lessons_array() {
      return this.all_lessons;
    },
    lessons() {
      return this.all_lessons.map(({ date, id }) => {
        return {
          day: date,
          id
        };
      });
    },
    time_off() {
      return this.curator_time_off.map(
        ({
          calendar_day,
          full_from,
          full_to,
          hour_from,
          hour_to,
          minute_from,
          minute_to
        }) => {
          return {
            id: +hour_from + +hour_to + 35 + Math.random(),
            day: calendar_day,
            full_from,
            full_to,
            fromHour: +hour_from,
            toHour: +hour_to,
            fromMinutes: +minute_from,
            toMinutes: +minute_to
          };
        }
      );
    }
  },
  data() {
    return {
      show_hour_timeline: false,
      time_lines: [],
      times_off: [],
      select_timeline_date: undefined,
      make_day_off: false,
      current_date: "",
      inital_date: "",
      curator_new_time_off: null
    };
  },
  methods: {
    make_day_off_method(data) {
      this.$store.dispatch("user/make_day_off", data.fullDate).then(() => {
        const { calendar } = this.$refs;
        calendar.removeEventListener("mousemove", this.mouseMoveListener);
        this.make_day_off = !this.make_day_off;
      });
    },
    show_timeline(calendarDate) {
      if (!this.show_hour_timeline) {
        let result = [];
        if (calendarDate) {
          const is_have_time_off =
            this.time_off.filter(el => el.day === calendarDate.fullDate)
              .length > 0;

          const is_day_off = this.days_off.includes(calendarDate.fullDate);
          if (is_have_time_off) {
            const is_full_day_off =
              this.time_off.filter(
                el =>
                  el.fromHour === 9 &&
                  el.toHour === 18 &&
                  el.day === calendarDate.fullDate
              ).length > 0;

            if (is_full_day_off) {
              this.times_off = is_full_day_off;
            } else {
              this.time_off.forEach(el => {
                if (el.day === calendarDate.fullDate) {
                  result.push(el);
                }
              });
              this.times_off = [...result];
            }
          } else {
            this.times_off = [];
          }
          if (is_day_off) {
            this.times_off.push({
              id: 189,
              day: calendarDate.fullDate,
              full_from: "9:00",
              full_to: "19:00",
              fromHour: 9,
              toHour: 18,
              fromMinutes: 0,
              toMinutes: 55
            });
          } else {
            const indexTime = this.times_off.findIndex(el => el.id === 189);
            if (!indexTime) {
              this.times_off.splice(indexTime, 1);
            }
          }
          this.time_lines = this.timeline_getter(calendarDate);
        } else {
          const today = {};
          today.fullDate = moment().format("YYYY-MM-DD");
          const is_have_time_off = this.time_off.filter(
            el => el.day === calendarDate.fullDate
          );
          const is_day_off = this.days_off.includes(calendarDate.fullDate);
          if (is_have_time_off.length > 0) {
            const is_full_day_off = is_have_time_off.filter(
              el => el.fromHour === 9 && el.toHour === 18
            );
            if (is_full_day_off.length > 0) {
              this.times_off = is_full_day_off;
            } else {
              this.times_off = is_have_time_off;
            }
          } else {
            this.times_off = [];
          }
          if (is_day_off) {
            this.times_off.push({
              id: 60,
              day: calendarDate.fullDate,
              full_from: "9:00",
              full_to: "19:00",
              fromHour: 9,
              toHour: 18,
              fromMinutes: 0,
              toMinutes: 55
            });
          } else {
            const indexTime = this.times_off.findIndex(el => el.id === 60);
            this.times_off.splice(indexTime, 1);
          }
          this.time_lines = this.timeline_getter(today);
        }
        this.time_lines = this.timeline_getter(calendarDate);
      }
      calendarDate.fullDate
        ? (this.current_date = calendarDate.fullDate)
        : (this.current_date = this.inital_date);
      this.show_hour_timeline = !this.show_hour_timeline;
    },
    timeline_getter({ fullDate }) {
      return this.all_lessons_array.filter(({ date }) => {
        if (fullDate === date) return true;
      });
    },
    change_timeline_date(calendarDate) {
      const { fullDate } = calendarDate;
      const is_have_time_off = this.time_off.filter(el => el.day === fullDate);
      const is_day_off = this.days_off.includes(fullDate);

      if (is_have_time_off.length > 0) {
        const is_full_day_off = is_have_time_off.filter(
          el => el.fromHour === 9 && el.toHour === 18
        );
        if (is_full_day_off.length > 0) {
          this.times_off = is_full_day_off;
        } else {
          this.times_off = is_have_time_off;
        }
      } else {
        this.times_off = [];
      }
      if (is_day_off) {
        this.times_off.push({
          id: 60,
          day: calendarDate.fullDate,
          full_from: "9:00",
          full_to: "19:00",
          fromHour: 9,
          toHour: 18,
          fromMinutes: 0,
          toMinutes: 55
        });
      } else {
        const indexTime = this.times_off.findIndex(el => el.id === 60);
        this.times_off.splice(indexTime, 1);
      }

      this.time_lines = this.timeline_getter(calendarDate);
    },
    show_day_off_cursor() {
      if (this.make_day_off) {
        const { calendar } = this.$refs;
        calendar.removeEventListener("mousemove", this.mouseMoveListener);
      }
      if (this.curator_new_time_off) {
        this.$store
          .dispatch("user/make_time_off", this.curator_new_time_off)
          .then(() => {
            this.curator_new_time_off = null;
          });
      }
      this.make_day_off = !this.make_day_off;
    },
    mouseMoveListener(event) {
      const { cursor } = this.$refs;
      const x = event.clientX,
        y = event.clientY;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    init_date(date) {
      this.current_date = date;
      this.inital_date = date;
    },
    change_curator_slider(data) {
      this.curator_new_time_off = data;
    }
  },
  mounted() {
    const { calendar } = this.$refs;
    if (this.make_day_off) {
      calendar.addEventListener("mousemove", this.mouseMoveListener);
    }
  },
  updated() {
    const { calendar } = this.$refs;
    if (this.make_day_off) {
      calendar.addEventListener("mousemove", this.mouseMoveListener);
    }
  },
  beforeDestroy() {
    const { calendar } = this.$refs;
    if (this.make_day_off) {
      calendar.removeEventListener("mousemove", this.mouseMoveListener);
      // calendar.style.cursor = 'auto'
    }
  }
};
</script>

<style lang="scss">
.c-teacher-calendar {
  cursor: default;
  &.cursor-active {
    cursor: none;
    .c-calendar__item {
      cursor: none;
    }
  }
  .cursor {
    position: fixed;
    background-image: url($img_dir+"cursor.png");
    background-size: cover;
    width: 23px;
    height: 23px;
    top: -23px;
    left: 2px;
    display: none;
    &.cursor-active {
      display: block;
    }
    /*transition: all .1s ease;*/
    z-index: 999;
  }
  &__container {
    max-width: 892px;
    padding-left: 31px;
    padding-top: 40px;
    &--type-2 {
      display: flex;
    }
  }
  &__timeline {
    position: relative;
    height: 95px;
    background-color: $white;
    padding: 0 29px;
    margin-bottom: 10px;
    transition: all 0.5s ease;
    &.hovered {
      background-color: #f1ffea;
      .c-teacher-calendar__user-link {
        opacity: 1;
        @extend %evt-all;
      }
    }
    .vue-slider-marks {
      .vue-slider-mark {
        .vue-slider-mark-label {
          @extend %regular;
          line-height: rem(20);
          font-size: rem(12);
          color: $gray;
        }

        &:first-child {
          left: 2.3% !important;
        }
        &:last-child {
          left: 97.5% !important;
        }
      }
    }
    &_small {
      .vue-slider {
        margin-top: 49px;
      }
      .vue-slider-marks {
        .vue-slider-mark {
          &:first-child {
            left: 6.3% !important;
          }
          &:last-child {
            left: 93.5% !important;
          }
        }
      }
    }
    &_empty {
      .vue-slider {
        margin-top: 49px;
      }
    }
  }
  &__time-lines {
    display: grid;
    grid-template-columns: repeat(59, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: $dark_white;
    padding: 26px 33px;
  }
  &__user {
    @extend %df;
    @extend %aic;
    margin-bottom: 10px;
    margin-top: 11px;
    cursor: pointer;
    &.empty {
      height: 28px;
    }
    &-img {
      width: 28px;
      height: 28px;
      overflow: hidden;
      border-radius: 50%;
    }
    &-content {
      @extend %df;
    }
    &-name {
      margin-left: 10px;
    }
    &-name,
    &-link {
      @extend %text-small-big-line-height;
      color: $gray;
    }
    &-link {
      color: $green;
      margin-left: 20px;
      opacity: 0;
      transition: all 0.5s ease;
      @extend %evt-none;
    }
  }
}
@include bp(766px) {
  .c-teacher-calendar {
    &__container {
      max-width: 320px;
      padding-left: 0;
      padding-top: 40px;
      margin: 0 auto;
    }
    &__time-lines {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .c-teacher-calendar__timeline
    .vue-slider-marks
    .vue-slider-mark
    .vue-slider-mark-label {
    font-size: 5px;
  }
  .c-teacher-calendar__timeline {
    padding: 0 15px;
  }
  .c-teacher-calendar__user-link {
    width: 15px;
    height: 15px;
  }
  .c-teacher-calendar__user-name {
    font-size: rem(7);
  }
  .c-teacher-calendar__user-link {
    display: none;
  }
}
</style>
