<template>
  <div class="c-teacher-page">
    <div class="entire-padding-teach">
      <div class="c-teacher-page__header">
        <router-link
          :to="{ name: 'Teachers' }"
          class="c-teacher-page__back flex"
        >
          <div>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12L1 6.5L7 1"
                stroke="#4B4B4B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="back-text-link">Назад</div>
        </router-link>
      </div>
      <div class="c-teacher-page__teacher-card" id="indiv-teacher">
        <TeacherCard
          v-if="currentState !== null"
          :hideContentOnClick="currentState"
          :curator_nation="curator.nation"
          :curator_name="curator.name"
          :curator_photo="curator.photo"
          :curator_short_description="curator.about_content"
        />
      </div>
      <div class="c-teacher-page__calendar">
        <BaseCalendar
          :lessons="lessons_array"
          :daysOff="daysOff"
          @click="calendarEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeacherCard from "@/components/StudentArea/CuratorsPage/TeacherCard.vue";
import { mapMutations } from "vuex";
export default {
  name: "TeacherPage",
  components: {
    TeacherCard
  },
  data() {
    return {
      lessons: [],
      reserved_times: [],
      windowWidth: window.innerWidth,
      daysOff: [],
      currentState: null,
      curator: {
        name: "Tomothy Murphy",
        nation: "Итальянец",
        photo: "robert",
        about_content:
          "<p>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.</p><p> Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.</p>"
      }
    };
  },
  methods: {
    ...mapMutations(["ADD_NOTIFICATION", "SHOW_MODAL"]),
    calendarEvent(data) {
      const curator = {
        id: this.curator.id,
        photo: this.curator.photo,
        first_name: this.curator.first_name,
        last_name: this.curator.last_name,
        about: this.curator.about
      };
      // const { days } = this.curator;
      if (data.type.name == "add-lesson") {
        const reserved_for_day = this.reserved_times.filter(
          lesson => lesson.day === data.date.fullDate
        );
        const DataForModal = {
          curator: curator,
          day: data.date.fullDate
        };
        reserved_for_day.length > 0
          ? (DataForModal.reserved = reserved_for_day)
          : [];
        this.$store.dispatch("show_reservation_lesson_modal", {
          data: DataForModal,
          modal_name: "reservation-lesson"
        });
      } else if (data.type.name == "lessons-modal") {
        this.SHOW_MODAL("lessons-modal");
      } else {
        this.$store.dispatch("notifications/add_notification", {
          type: "danger",
          text: "Занятие с преподавателем в этот день невозможно."
        });
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 766) {
        this.currentState = true;
      } else {
        this.currentState = false;
      }
    }
  },
  computed: {
    lessons_array() {
      return this.lessons;
    }
  },
  created() {
    const { days, day_off, time_off } = this.curator;
    const result = [];
    const user_id = this.$store.getters["user/user_id"];
    const reserved_times = [];
    days.forEach(day => {
      const is_user_lessons =
        day.times.filter(time => time.user_id === user_id).length > 0;
      if (is_user_lessons) {
        result.push({ day: day.day, id: day.id });
      } else {
        day.times.forEach(
          ({ id, hour_from, hour_to, minute_from, minute_to }) => {
            reserved_times.push({
              day: day.day,
              id: id,
              fromHour: hour_from,
              fromMinutes: minute_from,
              toHour: hour_to,
              toMinutes: minute_to + 5
            });
          }
        );
      }
    });
    const dayOff = day_off.map(({ calendar_day }) => calendar_day);

    time_off.forEach(
      ({ calendar_day, hour_from, minute_from, hour_to, minute_to }) => {
        reserved_times.push({
          day: calendar_day,
          id: calendar_day,
          fromHour: +hour_from,
          fromMinutes: +minute_from,
          toHour: +hour_to,
          toMinutes: +minute_to + 5
        });
      }
    );
    this.daysOff = dayOff;
    this.lessons = result;
    this.reserved_times = reserved_times;
  },
  // watch: {
  //   windowWidth(arg) {
  //     console.log(arg);
  //   }
  // },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
// #indiv-teacher .hide {
//   max-height: 500000px;
//   height: auto;
//   min-height: auto;
// }
#indiv-teacher {
  // .open {
  // }
  // .hide {
  //   max-height: auto !important;
  //   height: auto;
  //   min-height: auto;
  // }
  .make-transitions.hide {
    max-height: 100%;
    @media screen and (max-width: 766px) {
      max-height: 90px;
    }
  }
  .hide {
    .teacher__arrow {
      svg {
        transform: rotate(0deg) !important;
        transition: transform 0.5s ease;
      }
    }
  }
  .teacher__arrow {
    svg {
      transform: rotate(180deg);
      transition: transform 0.5s ease;
    }
  }
  .teacher__btn-video {
    margin-bottom: 0px;
  }
  .teacher__text {
    min-height: 100%;
    height: 100%;
    max-height: 100%;
  }
  .up-teacher-wrapper {
    @media screen and (max-width: 766px) {
      padding: 15px 18px 25px;
    }
  }
  .teacher__itm-middle {
    height: 100%;
    min-height: 100%;
    @media screen and (max-width: 766px) {
      width: 100%;
      margin-left: 0px !important;
    }
  }
  @media screen and (max-width: 620px) {
    .teacher__user-nation {
      line-height: 18.5px;
    }
    .teacher__user-name {
      line-height: 13.92px;
    }
    .teacher__itm-right {
      padding-right: 36px;
    }
  }
  .teacher__user {
    align-items: center;
    .teacher__user-info {
      margin-top: 0px;
    }
  }
  .buttons-teacher-card {
    @media screen and (max-width: 766px) {
      padding-left: 0px;
    }
  }
  .small-devices-wrapper {
    @media screen and (max-width: 766px) {
      // display: none;
    }
  }
  .hide {
    // max-height: 100%;
    min-height: 100%;
    height: 100%;
    @media screen and (max-width: 766px) {
      max-height: 90px;
    }
  }
  .teacher__contest {
    z-index: 1000;
  }
}
.c-teacher-page {
  @extend %pagept;
  margin: 0 auto;
  margin-bottom: 31px;
  padding-left: 0px;
  @media screen and (max-width: 1310px) {
    width: 100%;
    max-width: 100%;
  }
  .entire-padding-teach {
    @media screen and (max-width: 1310px) {
      margin: 0px 25px;
    }
  }
  .teacher__arrow {
    display: none;
    @media screen and (max-width: 620px) {
      display: initial;
      svg {
        width: 10px !important;
        height: 9px !important;
      }
    }
  }
  .teacher__itm-middle {
    max-height: 100% !important;
    overflow: visible;
    @media screen and (max-width: 766px) {
      overflow: hidden;
      margin-top: 0px;
    }
  }
  .makeLessonBtn {
    display: none;
  }
  &__header {
    margin-bottom: rem(32);
  }
  .curator-buttons {
    @media screen and (max-width: 766px) {
      width: 100%;
    }
  }
  &__back {
    @extend %btn-text;
    color: $gray;
    transition: all 0.5s ease;
    align-items: center;
    svg {
      margin-right: 10px;
      @media screen and (max-width: 620px) {
        width: 6px;
        height: 11px;
        margin-right: 8px;
      }
      path {
        transition: all 0.5s ease;
      }
    }
    &:hover {
      color: $green;
      svg {
        path {
          stroke: $green;
        }
      }
    }
    @media screen and (max-width: 620px) {
      .back-text-link {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  &__teacher-card {
    margin-bottom: 67px;
    @media screen and (max-width: 766px) {
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: 766px) {
    .c-teacher-page__header {
      margin-bottom: 25px;
    }
  }
  @extend %calendar;
}
</style>
