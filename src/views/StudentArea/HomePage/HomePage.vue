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
        }
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
  max-width: 892px;
  width: 100%;
  padding-bottom: 50px;
  margin: 0 auto;
  .c-user-level__wrap-item {
    text-align: center;
  }
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
    padding-left: 25px;
    padding-right: 25px;
  }
}
@include bp(1310px) {
  .c-slider__remote-btn {
    padding: 14px !important;
    svg {
      width: 8px;
      height: 14px;
    }
  }
}
@include bp(766px) {
  .c-home {
    &__header {
      flex-direction: column;
    }
    &__offer {
      // &-title {
      //   font-size: rem(16);
      // }
      // &-link {
      //   width: 150px;
      //   height: 30px;
      //   font-size: rem(10);
      // }
      &-items {
        flex-wrap: wrap;
      }
    }
    // &__notifications {
    //   font-size: rem(16);
    // }
  }
}
@include bp(550px) {
  .c-user-level__title {
    font-size: 14px;
  }
  .c-user-level__text {
    font-size: 12px;
    line-height: 17px;
  }
  .c-user-level,
  .c-promotion {
    height: 113px;
  }
  .c-user-level__link {
    font-size: 12px;
    margin-top: 0px;
  }
  .c-user-level__wrap-item {
    font-size: 10px;
    margin-bottom: 0px;
  }
  .c-promotion__wrapper-item-tag {
    font-size: 14px;
    line-height: 13.92px;
  }
  .c-promotion__wrapper-item-btn {
    height: 30px;
    font-size: 12px;
    line-height: 15.95px;
    width: 116px;
    margin-top: 20px;
  }
  .c-circle-progress {
    width: 70px;
    height: 70px;
  }
  .c-circle-progress__percent {
    font-size: 10px;
  }
  .level-show-image {
    width: 97px;
    height: 46px;
  }
  .c-home__offer-title,
  .c-home__notifications-title,
  .c-slider__navigation h2 {
    font-size: 16px;
    line-height: 16.94px;
    width: 106px;
  }
  .c-slider__navigation,
  .c-home__notifications-title,
  .c-home__offer-wrap {
    margin-bottom: 22.5px;
  }
  .c-slider__navigation h2 {
    width: 100%;
  }
  .c-home-offer__title {
    line-height: 16.94px;
  }
  .c-home__offer-link {
    height: 30px;
    font-size: 12px;
    width: 150px;
  }
  .c-home__offer {
    padding-top: 50px;
  }
  .c-home-offer {
    width: 100%;
    height: 100%;
    .c-home-offer__content {
      padding-left: 18px;
    }
    .c-home-offer__btn {
      height: 30px;
      font-size: 12px;
      width: 100px;
      position: initial;
      margin-left: 18px;
      margin-top: 5px;
    }
  }
  .c-home-offer__title {
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 15px;
    max-width: 116px;
  }
  .c-home-offer__lessons,
  .c-home-offer__discount {
    font-size: 10px;
  }
  .c-home-offer__lessons {
    line-height: 15.04px;
  }
  .c-home-offer__title {
    width: 100% !important;
  }
  // notificications
  .c-notification__wrapper-info-picture {
    width: 30px;
    height: 20px;
  }
  .c-notification {
    padding: 13px 12px;
    min-height: min-content;
  }
  .c-notification__wrapper-info {
    img {
      margin-right: 11px;
    }
  }
  .notification-text {
    div {
      font-size: 10px;
      line-height: 16px;
      width: 95%;
    }
  }
  // articles
  .c-home-articles {
    &__slide-description {
      font-size: 12px;
      line-height: 18.05px;
      margin-bottom: 5px;
    }
    &__slide-date {
      font-size: 14px;
    }
  }
  // videos
  .c-home-video {
    margin-top: 50px;
  }
  .teacher-name {
    font-size: 12px !important;
  }
}
.c-home__offer-items {
  display: initial;
}
</style>
