<template>
  <div class="c-calendar-page">
    <BaseCalendar
      @click="calendarEvent"
      :lessons="lessons"
      :daysOff="daysOff"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { show_lesson_modal_mixin } from "@/mixins/mixins.js";
export default {
  mixins: [show_lesson_modal_mixin],
  data() {
    return {
      lessons: [],
      daysOff: []
    };
  },
  computed: {
    ...mapGetters("user", ["user_lessons"]),
    lessons_list() {
      return this.lessons;
    }
  },
  created() {
    if (this.user_lessons) {
      let result = [];
      this.user_lessons.forEach(({ id, times }) => {
        times.forEach(({ calendar_day, full_from, full_to, teacher }) => {
          result.push({ id, day: calendar_day, full_from, full_to, teacher });
        });
      });
      this.lessons = result;
    }
  },
  methods: {
    calendarEvent(data) {
      if (data.type.name === "lessons-modal") {
        this.show_lesson_modal(data.date.fullDate);
        // this.SHOW_MODAL(data.type.name);
      } else {
        this.$router.push({
          name: "Teachers",
          meta: {
            filterData: data.date
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.c-calendar-page {
  padding-top: rem(40);
  padding-bottom: rem(64);
  margin: 0 auto;
  padding-top: 42px;
  max-width: 892px;;
  padding-left: 0px !important;
  // // .c-calendar__header

  // &__header {
  //   @extend %df;
  //   @extend %jcsb;
  //   margin-bottom: rem(30);
  // }

  // // .c-calendar__title

  // &__title {
  //   @extend %h3-title-bold;
  //   color: $gray;
  // }

  // // .c-calendar__btns

  // &__btns {
  //   @extend %df;
  //   @extend %aic;
  //   margin-right: rem(47);
  // }

  // // .c-calendar__btn

  // &__btn {
  //   // .c-calendar__btns-left

  //   &-left {
  //   }
  //   // .c-calendar__btns-right

  //   &-right {
  //   }
  // }

  // // .c-calendar__month-name

  // &__month-name {
  //   @extend %h3-title-bold;
  //   color: $black;
  //   text-transform: capitalize;
  //   margin-right: rem(25);
  //   margin-left: rem(26);
  // }

  // // .c-calendar__wrap

  // &__wrap {
  //   padding: rem(28) rem(48) rem(37) rem(47);
  //   border-radius: 2px;
  //   background-color: $dark_white;
  // }

  // // .c-calendar__static-days

  // &__static-days {
  //   display: grid;
  //   grid-template-columns: repeat(7, 1fr);
  //   margin-bottom: rem(15);
  // }

  // // .c-calendar__name-days

  // &__name-days {
  //   @extend %df;
  //   justify-content: flex-end;
  //   padding: 0 20px 0px 0px;
  //   @extend %text-middle;
  //   color: $gray;
  // }

  // // .c-calendar__items

  // &__items {
  //   display: grid;
  //   grid-template-columns: repeat(7, 1fr);
  //   column-gap: rem(2);
  //   row-gap: rem(2);
  //   width: 100%;
  // }

  // // .c-calendar__item

  // &__item {
  //   height: rem(95);
  //   background-color: $white;
  //   border-radius: 2px;
  //   position: relative;
  //   border: 1px solid transparent;
  //   transition: all 0.5s ease;
  //   cursor: pointer;
  //   &:hover {
  //     border-color: $gray;
  //     .c-calendar__item-hover {
  //       opacity: 1;
  //     }
  //   }
  //   &.current-day {
  //     .c-calendar__item-data {
  //       color: $green;
  //     }
  //   }
  //   &.disabled {
  //     @extend %evt-none;
  //     background-color: rgba($color: $white, $alpha: 0.5);
  //     border-color: rgba($color: $soft_gray, $alpha: 0.2);
  //     .c-calendar__item-data {
  //       color: $soft_gray;
  //     }
  //   }
  //   // .c-calendar__item_empty

  //   &_empty {
  //     background-color: transparent;
  //     @extend %evt-none;
  //   }
  // }

  // // .c-calendar__item-data

  // &__item-data {
  //   position: absolute;
  //   top: rem(12);
  //   right: rem(17);
  //   @extend %h3-title-bold;
  //   color: $black;
  //   @extend %evt-none;
  // }

  // // .c-calendar__item-hover

  // &__item-hover {
  //   padding-top: rem(32);
  //   transition: all 0.5s ease;
  //   opacity: 0;
  //   @extend %evt-none;
  // }

  // // .c-calendar__item-hover-icon

  // &__item-hover-icon {
  //   position: relative;
  //   @extend %db;
  //   width: rem(22);
  //   height: rem(22);
  //   border: 2px solid $green;
  //   border-radius: 50%;
  //   margin: 0 auto;
  //   margin-bottom: rem(3);
  //   span {
  //     position: absolute;
  //     top: 8px;
  //     left: 5px;
  //     @extend %db;
  //     width: rem(8);
  //     height: rem(2);
  //     background-color: $green;
  //     border-radius: 2px;
  //     &:last-child {
  //       transform: rotate(90deg);
  //     }
  //   }
  // }

  // // .c-calendar__item-hover-text

  // &__item-hover-text {
  //   @extend %text-small;
  //   color: $green;
  //   text-align: center;
  // }
}
@include bp(1360px) {
  .c-calendar-page {
    padding-right: 30px;
  }
}
@include bp(1310px) {
  .c-calendar-page {
    padding: 50px 0 0 0;
    margin: 0 auto;
    max-width: 750px;
  }
}
@include bp(766px) {
  .c-calendar-page {
    max-width: 320px;
  }
}
// .c-calendar__items {

// }
// .c-calendar__items > * {
//   align-items: center;
//   display: flex;
//   justify-content: center;
// }
</style>
