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
          linkText: "<a href='https://google.com'>Avanti</a>"
        },
        {
          img: "NotificationCat.svg",
          text: "<div>Conferma nuove lezioni con 5 studenti.</div>",
          linkText: "<a href='https://google.com'>Avanti</a>"
        },
        {
          img: "NotificationBook.svg",
          text: "<div>Correggi i compiti di 2 studenti.</div>",
          linkText: "<a href='https://google.com'>Avanti</a>"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-home {
  padding-top: rem(20);
  width: 892px;
  padding-bottom: 50px;
  margin: 0 auto;
  padding-left: 0px;
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
</style>
