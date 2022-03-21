<template>
  <div class="c-home" data-vue-component-name="home">
    <header class="c-home__header">
      <template>
        <TeacherDashboard />
      </template>
    </header>
    <div class="c-home__calendar">
      <h2 class="c-home__calendar-title">
        Le prossime lezioni
      </h2>
      <BaseWeekCalendar />
    </div>
    <div class="c-home__notifications" id="notifications">
      <h2 class="c-home__notifications-title">
        Notifiche
      </h2>
      <template>
        <div v-for="it in 3" :key="it.id">
          <Notifications
            v-for="notification in notificationsData"
            :key="notification.id"
            :img="notification.img"
            :text="notification.text"
            :linkText="notification.linkText"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Notifications from "@/components/Notification.vue";
import TeacherDashboard from "@/components/TeacherArea/HomePage/TeacherDashboard";
export default {
  name: "HomePage",
  components: {
    Notifications,
    TeacherDashboard
  },
  data() {
    return {
      notificationsData: [
        {
          img: "NotificationLesson.svg",
          text:
            "<div>Lezione con <a href='#' class='teacher-name'>Анна Батьковна</a> comincia in 30 minuti.</div>",
          linkText: "<a href='https://google.com' target='_blank'>Avanti</a>"
        },
        {
          img: "NotificationCat.svg",
          text: "<div>Conferma nuove lezioni con 5 studenti.</div>",
          linkText: "<a href='https://google.com' target='_blank'>Avanti</a>"
        },
        {
          img: "NotificationBook.svg",
          text: "<div>Correggi i compiti di 2 studenti.</div>",
          linkText: "<a href='https://google.com' target='_blank'>Avanti</a>"
        }
      ]
    };
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
@include bp(766px) {
  .c-home {
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
@media screen and (max-width: 620px) {
  .c-home__notifications-title,
  .c-home__calendar-title {
    font-size: 16px !important;
  }
  .c-teacher-dashboard__title {
    font-size: 14px !important;
  }
  .c-teacher-dashboard__info-text {
    font-size: 22px;
  }
  .c-teacher-dashboard__info-title {
    margin-bottom: 0px;
  }
  .c-teacher-dashboard__title {
    margin-bottom: 14px;
  }
  .c-teacher-dashboard {
    padding: 16px;
  }
  .c-teacher-dashboard__chart {
    margin-top: 12px;
  }
  .c-home__calendar {
    margin-top: 50px;
  }
  .c-home__notifications {
    padding-top: 50px;
  }
}
</style>
