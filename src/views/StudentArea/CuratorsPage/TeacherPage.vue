<template>
  <div class="c-teacher-page">
    <div class="c-teacher-page__header">
      <router-link :to="{ name: 'Teachers' }" class="c-teacher-page__back">
        <div class="inline-block">
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
        <div class="inline-block">Назад</div>
      </router-link>
    </div>
    <div class="c-teacher-page__teacher-card">
      <TeacherCard
        :hideContentOnClick="false"
        class="open"
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
      daysOff: [],
      curator: {
        name: "Tomothy Murphy",
        nation: "Итальянец",
        photo: "user.svg",
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
  }
};
</script>

<style lang="scss">
.c-teacher-page {
  @extend %pagept;
  margin-left: $ml;
  margin-bottom: 31px;
  .teacher__arrow {
    display: none;
  }
  &__header {
    margin-bottom: rem(32);
  }

  // .c-teacher-page__back

  &__back {
    @extend %btn-text;
    color: $gray;
    transition: all 0.5s ease;
    svg {
      margin-right: 10px;
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
  }

  // .c-teacher-page__teacher-card

  &__teacher-card {
    margin-bottom: 67px;
  }

  // .c-teacher-page__calendar

  &__calendar {
  }
}
.open {
}
@include bp(1100px) {
  .c-teacher-page {
    padding: 50px 0 0 0;
    margin: 0 auto;
    max-width: 750px;
  }
}
@include bp(766px) {
  .c-teacher-page {
    max-width: 320px;
  }
}
</style>
