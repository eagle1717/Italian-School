<template>
  <div class="c-home" id="home-page-wrapper" data-vue-component-name="home">
    <header class="c-home__header">
      <template>
        <UserLevel />
        <Promotion />
      </template>
    </header>
    <template>
      <div class="c-home__offer">
        <div class="c-home__offer-wrap">
          <h2 class="c-home__offer-title">Специальные предложения</h2>
          <router-link :to="{ name: 'Certificate' }" class="c-home__offer-link"
            >Экзамен на сертификат</router-link
          >
        </div>
        <div class="c-home__offer-items">
          <SpecialOffer />
        </div>
      </div>
      <div class="c-home__notifications" id="notifications">
        <h2 class="c-home__notifications-title">
          Уведомления
        </h2>
        <template v-if="notifications">
          <Notifications
            v-for="notification in notificationsData"
            :key="notification.id"
            :img="notification.img"
            :text="notification.text"
            :linkText="notification.linkText"
          />
        </template>
      </div>
    </template>
    <div class="c-home__calendar">
      <h2 class="c-home__calendar-title">
        Ближайшие занятия
      </h2>
      <BaseWeekCalendar @click="calendarEvent" :lessons="computed_lessons" />
    </div>
    <template>
      <Articles />
      <VideoSlider />
    </template>
  </div>
</template>

<script>
import UserLevel from "@/components/StudentArea/LevelPage/LevelCard";
import Promotion from "@/components/StudentArea/HomePage/Promotion";
import SpecialOffer from "@/components/StudentArea/HomePage/SpecialOffer";
import Notifications from "@/components/Notification";
import Articles from "@/components/StudentArea/HomePage/Articles";
import VideoSlider from "@/components/StudentArea/HomePage/VideoSlider";
import { show_lesson_modal_mixin } from "@/mixins/mixins.js";
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  mixins: [show_lesson_modal_mixin],
  components: {
    VideoSlider,
    Articles,
    Notifications,
    UserLevel,
    Promotion,
    SpecialOffer
  },
  data() {
    return {
      lessons: [],
      notificationsData: [
        {
          img: "NotificationLesson.svg",
          text:
            "<div>Занятие с <a href='#' class='teacher-name'>Анна Батьковна</a> начнется через 30 минут.</div>",
          linkText: "<a href='https://google.com'>Перейти</a>"
        },
        {
          img: "NotificationLesson.svg",
          text:
            "<div>Занятие с <a href='#' class='teacher-name'>Анна Батьковна</a> начнется через 30 минут.</div>",
          linkText: "<a href='https://google.com'>Перейти</a>"
        },
        {
          img: "NotificationLesson.svg",
          text:
            "<div>Занятие с <a href='#' class='teacher-name'>Анна Батьковна</a> начнется через 30 минут.</div>",
          linkText: "<a href='https://google.com'>Перейти</a>"
        },
        {
          img: "NotificationLesson.svg",
          text:
            "<div>Занятие с <a href='#' class='teacher-name'>Анна Батьковна</a> начнется через 30 минут.</div>",
          linkText: "<a href='https://google.com'>Перейти</a>"
        },
      ]
    };
  },
  computed: {
    ...mapGetters("user", [
      "user_lessons",
      "curator_confirmed_lessons",
      "notifications"
    ]),
    ...mapGetters(["offers"]),
    student_lessons() {
      return this.user_lessons;
    },
    curator_lessons() {
      return this.curator_confirmed_lessons;
    },
    computed_lessons() {
      let result = [];
      if (this.student_lessons) {
        this.student_lessons.forEach(({ id, day }) => {
          result.push({ id, day });
        });
      } else if (this.curator_lessons) {
        this.curator_lessons.forEach(({ id, calendar_day }) => {
          result.push({ id, day: calendar_day });
        });
      }
      return result;
    }
  },
  methods: {
    calendarEvent(data) {
      if (data.type.name === "lessons-modal") {
        const { fullDate } = data.date;
        this.show_lesson_modal(fullDate);
      }
    }
  }
};
</script>

<style lang="scss">
.c-home {
  padding-top: rem(20);
  width: rem(892);
  padding-bottom: 50px;
  margin: 0 auto;
  &__header {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
  }
  &__offer {
    padding-top: rem(79);
    &-wrap {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      margin-bottom: rem(21);
    }
    &-title {
      @extend %h3-title-bold;
      color: $black;
    }
    &-link {
      @extend %simple-btn-red-border;
      width: rem(208);
      height: rem(35);
    }
    &-items {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
    }
  }
  &__calendar {
    margin-top: rem(80);
    &-title {
      @extend %h3-title-bold;
      color: $black;
      margin-bottom: rem(23);
    }
  }
  &__notifications {
    padding-top: rem(80);
    &-title {
      @extend %h3-title-bold;
      color: $black;
      margin-bottom: rem(23);
      // margin: rem(80) 0 rem(23) rem(30);
    }
  }
}
@include bp(1360px) {
  .c-home {
    padding-right: 30px;
  }
}
@include bp(1100px) {
  .c-home {
    padding: 50px 0 0 0;
    margin: 0 auto;
    max-width: 750px;
  }
}
@include bp(766px) {
  .c-home {
    max-width: 320px;
    &__header {
      flex-direction: column;
    }
    &__offer {
      &-title {
        font-size: rem(16);
      }
      &-link {
        width: 150px;
        height: 30px;
        font-size: rem(10);
      }
      &-items {
        flex-wrap: wrap;
      }
    }
    &__notifications {
      font-size: rem(16);
    }
  }
}
.c-home__offer-items {
  display: initial;
}
</style>
