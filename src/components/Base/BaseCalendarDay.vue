<template>
  <li :class="class_names" @click="click_item" class="c-calendar__item">
    <span class="c-calendar__item-data">{{ day }}</span>
    <template v-if="is_lesson_day">
      <template v-if="!is_filter">
        <div class="c-calendar__lesson-ico">
          <img
            src="/img/icons/icon-calendar-lesson.svg"
            alt="Lesson illustration"
          />
          <span>{{ count_lessons_in_day }}</span>
        </div>
      </template>
    </template>
    <template v-else-if="is_dayOff">
      <div class="c-calendar__icon-block">
        <span></span>
        <span></span>
      </div>
    </template>
    <template v-else-if="!is_curator && !is_filter">
      <div class="c-calendar__item-hover">
        <div class="c-calendar__item-hover-icon">
          <span></span>
          <span></span>
        </div>
        <p class="c-calendar__item-hover-text">
          Добавить <br />
          занятие
        </p>
      </div>
    </template>
    <BaseTooltip
      v-if="is_lesson_day && lesson.teacher"
      id="tooltip"
      :lesson="lesson"
    />
  </li>
</template>

<script>
import BaseTooltip from "./BaseTooltip";
export default {
  name: "BaseCalendarDay",
  components: {
    BaseTooltip
  },
  props: {
    is_filter: Boolean,
    date_object: {
      type: Object
    },
    day: {
      type: [String, Number]
    },
    full_date: {
      type: String
    },
    initDate: {
      type: [String, Number]
    },
    month: {
      type: [String, Number]
    },
    initMonth: {
      type: [String, Number]
    },
    daysOff: {
      type: Array
    },
    lessons_array: {
      type: Array
    },
    is_curator: {
      type: Boolean
    },
    is_week: {
      type: Boolean
    },
    lessons: {
      type: Array
    }
  },
  computed: {
    class_names() {
      const {
        day,
        initDate,
        initMonth,
        month,
        is_curator,
        is_week,
        daysOff,
        full_date
      } = this;
      return {
        "current-day": parseInt(day) === initDate && month === initMonth,
        disabled: parseInt(day) < initDate && month === initMonth,
        "day-off": daysOff.includes(full_date),
        lesson: this.is_lesson_day,
        is_student: !is_curator && !is_week,
        is_week: is_week
      };
    },
    is_lesson_day() {
      const { lessons_array, full_date } = this;
      return lessons_array.includes(full_date);
    },
    count_lessons_in_day() {
      const { is_lesson_day, lessons_array, full_date } = this;
      return is_lesson_day
        ? lessons_array.filter(el => el === full_date).length
        : null;
    },
    is_dayOff() {
      const { daysOff, full_date } = this;
      return daysOff ? daysOff.includes(full_date) : null;
    },
    is_mobile() {
      return window.innerWidth > 1200;
    },
    lesson() {
      return this.lessons
        ? this.lessons.filter(l => l.day === this.full_date)[0]
        : {};
    }
  },
  methods: {
    click_item() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.c-calendar {
  &__item {
    height: rem(95);
    background-color: $white;
    border-radius: 2px;
    position: relative;
    border: 1px solid transparent;
    transition: all 0.5s ease;
    cursor: pointer;
    &.is_week {
      border: 1px solid $soft_gray;
    }
    &:hover {
      border-color: $gray;
      &.is_student {
        .c-calendar__item-hover {
          opacity: 1;
        }
      }
    }
    &.current-day {
      .c-calendar__item-data {
        color: $green;
      }
    }
    &.disabled {
      @extend %evt-none;
      background-color: rgba($color: $white, $alpha: 0.5);
      border-color: rgba($color: $soft_gray, $alpha: 0.2);
      .c-calendar__item-data {
        color: $soft_gray;
      }
    }
    &.day-off {
      @extend %df;
      @extend %jcc;
      @extend %aic;
      // @extend %evt-none;
      background-color: #fdefee;
      border-color: $red;
      .c-calendar {
        &__item-data {
          color: $red;
        }
      }
    }
    &.lesson {
      background-color: #f1ffea;
      border-color: $green;
      position: relative;
      &.disabled {
        background-color: rgba($color: $white, $alpha: 0.5);
        border-color: rgba($color: $soft_gray, $alpha: 0.2);
        .c-calendar {
          &__item-data {
            color: $soft_gray;
          }
        }
      }
      .c-calendar {
        &__item-data {
          color: $green;
        }
      }
      &:hover .tooltip .tooltiptext {
        visibility: visible;
      }
    }
    // .c-calendar__item_empty

    &_empty {
      background-color: transparent;
      @extend %evt-none;
    }
  }

  // .c-calendar__item-data

  &__item-data {
    position: absolute;
    top: rem(12);
    right: rem(17);
    @extend %h3-title-bold;
    color: $black;
    @extend %evt-none;
  }

  // .c-calendar__item-hover

  &__item-hover {
    padding-top: rem(25);
    transition: all 0.5s ease;
    opacity: 0;
    @extend %evt-none;
  }

  &__lesson-ico {
    position: absolute;
    bottom: rem(7);
    left: rem(12);
    img {
      margin-bottom: -5px;
    }
    span {
      @extend %text-small;
      color: $gray;
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }
  // .c-calendar__item-hover-icon
  &__icon-block {
    position: relative;
    transform: rotate(45deg);
    width: rem(11);
    height: rem(11);
    span {
      position: absolute;
      top: rem(5);
      left: 0;
      @extend %db;
      width: rem(11);
      height: rem(2);
      background-color: $red;
      border-radius: 2px;
      &:last-child {
        transform: rotate(90deg);
      }
    }
  }
  &__item-hover-icon {
    position: relative;
    @extend %db;
    width: rem(22);
    height: rem(22);
    border: 2px solid $green;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: rem(3);
    span {
      position: absolute;
      top: 8px;
      left: 5px;
      @extend %db;
      width: rem(8);
      height: rem(2);
      background-color: $green;
      border-radius: 2px;
      &:last-child {
        transform: rotate(90deg);
      }
    }
  }

  // .c-calendar__item-hover-text

  &__item-hover-text {
    @extend %text-small;
    color: $green;
    text-align: center;
  }
}
@include bp(1310px) {
  .c-calendar {
    &__item {
      max-height: 100%;
      max-width: 100%;
    }
    .c-calendar-week__wrap {
      margin-left: 0px;
    }
  }
}
@media screen and (max-width: 639px) {
  .c-calendar-week__items {
    grid-template-columns: repeat(5, 1fr) !important;
    row-gap: 30px !important;
    column-gap: 0px !important;
  }
  .c-calendar-week__wrap,
  .c-calendar-week__name-days {
    min-width: auto !important;
  }
  .c-calendar-week__static-days {
    grid-template-columns: repeat(5, 1fr) !important;
    position: relative !important;
    margin-bottom: 9px;
  }
  .c-calendar-week__static-days {
    max-width: 535px;
  }
  .c-calendar-week__name-days {
    &:nth-child(6),
    &:nth-child(7) {
      top: 135px;
      position: absolute;
    }
    &:nth-child(6) {
      left: 55px;
    }
    &:nth-child(7) {
      left: 130px;
    }
  }
  .c-calendar-week__items {
    width: min-content;
    column-gap: 10px;
    row-gap: 50px !important;
  }
}
@media screen and (max-width: 620px) {
  .c-calendar__item-data {
    font-size: 10px !important;
  }
  .c-calendar-week__name-days {
    span {
      font-size: 12px !important;
    }
  }
}
@media screen and (max-width: 448px) {
  .c-calendar-week__name-days {
    &:nth-child(6),
    &:nth-child(7) {
      top: 135px;
      position: absolute;
    }
    &:nth-child(6) {
      left: 45px;
    }
    &:nth-child(7) {
      left: 110px;
    }
  }
}
@media screen and (max-width: 389px) {
  .c-calendar-week__name-days {
    &:nth-child(6),
    &:nth-child(7) {
      top: 135px;
      position: absolute;
    }
    &:nth-child(6) {
      left: 35px;
    }
    &:nth-child(7) {
      left: 90px;
    }
  }
}
</style>
