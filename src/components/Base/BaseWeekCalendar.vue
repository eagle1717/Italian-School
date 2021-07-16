<template>
  <div class="c-calendar-week">
    <div class="c-calendar-week__wrap">
      <div class="c-calendar-week__static-days">
        <div
          v-for="staticDay in checkPath"
          :key="staticDay"
          class="c-calendar-week__name-days"
        >
          <span>{{ staticDay }}</span>
        </div>
      </div>
      <div class="c-calendar-week__items">
        <BaseCalendarDay
          v-for="(date, index) in daysInWeek"
          :key="`${index}-day`"
          :date_object="date"
          :day="date.day"
          :full_date="date.fullDate"
          :init-date="initialDate"
          :init-month="initialMonth"
          :month="month"
          :daysOff="[]"
          :is_week="true"
          :lessons_array="lessonInsideArray"
          @click="clickOnDateItem(date)"
        />
        <!-- <BaseCalendarDay
          v-for="(date, index) in daysInWeek"
          :key="`${index}-day`"
          :date_object="date"
          :day="date.day"
          :full_date="date.fullDate"
          :init-date="initialDate"
          :init-month="initialMonth"
          :month="month"
          :daysOff="[]"
          :is_week="true"
          :lessons_array="lessonInsideArray"
          @click="clickOnDateItem(date)"
        /> -->
        <!--        <li-->
        <!--          v-for="(date, index) in daysInWeek"-->
        <!--          :key="`${index}date`"-->
        <!--          :class="{-->
        <!--            'current-day':-->
        <!--              parseInt(date.day) === initialDate && month === initialMonth,-->
        <!--            disabled:-->
        <!--              parseInt(date.day) < initialDate && month === initialMonth,-->
        <!--            lesson: lessonInsideArray.includes(date.fullDate)-->
        <!--          }"-->
        <!--          class="c-calendar-week__item"-->
        <!--          @mouseover="showTooltip"-->
        <!--        >-->
        <!--          <span class="c-calendar-week__item-data">{{ date.day }}</span>-->
        <!--          <template v-if="!isModal">-->
        <!--            <template v-if="lessonInsideArray.includes(date.fullDate)">-->
        <!--              <CalendarTooltip v-if="isTooltipVisible" :teachers="teachers" />-->
        <!--            </template>-->
        <!--          </template>-->
        <!--        </li>-->
      </div>
    </div>
    <template v-if="!isModal">
      <div class="c-calendar-week__desc">
        <figure class="c-calendar-week__img">
          <img src="/img/ill/classes-red.svg" alt="" />
        </figure>
        <h3 class="c-calendar-week__title">
          <template v-if="is_curator">
            Hai
            <b>
              {{ lessonsCount }}
              <template>lezioni</template>
            </b>
            <br />
            questa settimana
          </template>
          <template v-else>
            У вас
            <b>
              {{ lessonsCount }}
              <template v-if="lessonsCount <= 3">занятия</template>
              <template v-else>занятий</template>
            </b>
            <br />
            на этой неделе
          </template>
        </h3>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
// import CalendarTooltip from "@/components/CalendarTooltip";
export default {
  components: {
    // CalendarTooltip
  },
  props: {
    lessons: {
      type: Array
    },
    isModal: {
      type: Boolean
    },
    is_curator: {
      type: Boolean
    }
  },
  data() {
    return {
      today: null,
      dateContext: null,
      staticDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      staticDaysIT: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
      lessonInsideArray: [],
      isTooltipVisible: false,
      teachers: null
    };
  },
  created() {
    moment.locale("ru");
    this.today = moment();
    this.dateContext = moment();
    if (this.lessons) {
      this.lessonInsideArray = this.lessons.map(el => el.day);
    }
  },
  methods: {
    showTooltip() {
      // this.isTooltipVisible = !this.isTooltipVisible;
      // this.teachers = [
      //   {
      //     id: 234,
      //     name: "Tomothy",
      //     surname: "Murphy",
      //     photo: "/img/users/photos/0.jpg",
      //     lessonTimeStart: "18:00"
      //   },
      //   {
      //     id: 453,
      //     name: "Tomothy",
      //     surname: "Murphy",
      //     photo: "/img/users/photos/1.jpg",
      //     lessonTimeStart: "18:00"
      //   },
      //   {
      //     id: 990,
      //     name: "Tomothy",
      //     surname: "Murphy",
      //     photo: "/img/users/photos/2.jpg",
      //     lessonTimeStart: "18:00"
      //   }
      // ];
    },
    clickOnDateItem(date) {
      if (!this.is_curator) {
        let eventData = {
          type: {
            name: "add-lesson"
          },
          date
        };
        if (this.lessons) {
          const lessonItem = this.lessons.find(el => el.day === date.fullDate);
          if (lessonItem) {
            eventData.type.name = "lessons-modal";
            eventData.type.lesson = lessonItem;
          }
        }
        this.$emit("click", eventData);
      }
    }
  },
  computed: {
    ...mapState(["activeModal"]),
    checkPath() {
      if (this.activeModal === "student-profile") {
        return this.staticDaysIT;
      } else {
        return this.staticDays;
      }
    },
    month() {
      return this.dateContext.format("MMMM");
    },
    lessonsCount() {
      let count = 0;
      for (let day of this.daysInWeek) {
        if (this.lessonInsideArray.includes(day.fullDate)) {
          ++count;
        }
      }
      return count;
    },
    daysInWeek() {
      const data = [...Array(7)].map((_, i) => {
        const baseDate = this.dateContext
          .startOf("week")
          .clone()
          .add(i, "day");
        return {
          day: baseDate.format("DD"),
          fullDate: baseDate.format("YYYY-MM-DD")
        };
      });
      return data;
    },
    currentDate() {
      return this.dateContext.get("date");
    },
    initialDate() {
      return this.today.get("date");
    },
    initialMonth() {
      return this.today.format("MMMM");
    }
  }
};
</script>

<style lang="scss">
.c-calendar-week {
  @extend %df;
  // .c-calendar-week__wrap

  &__wrap {
    min-width: rem(698);
  }

  // .c-calendar-week__static-days

  &__static-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: rem(15);
  }

  // .c-calendar-week__name-days

  &__name-days {
    @extend %df;
    justify-content: flex-end;
    padding: 0 20px 0px 0px;
    @extend %text-middle;
    color: $gray;
  }

  // .c-calendar-week__items

  &__items {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: rem(2);
    row-gap: rem(2);
    width: 100%;
  }

  // .c-calendar-week__item

  &__item {
    // width: rem(98);
    height: rem(98);
    background-color: $white;
    border-radius: 2px;
    position: relative;
    border: 1px solid $soft_gray;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      border-color: $gray;
      .c-calendar-week__item-hover {
        opacity: 1;
      }
      .c-calendar-tooltip {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &.current-day {
      .c-calendar-week__item-data {
        color: $green;
      }
    }
    &.disabled {
      @extend %evt-none;
      background-color: rgba($color: $white, $alpha: 0.5);
      border-color: rgba($color: $soft_gray, $alpha: 0.2);
      .c-calendar-week__item-data {
        color: $soft_gray;
      }
    }
    &.lesson {
      background-color: #f1ffea;
      border-color: $green;
      .c-calendar {
        &__item-data {
          color: $green;
        }
      }
    }
  }

  // .c-calendar-week__item-data

  &__item-data {
    position: absolute;
    top: rem(12);
    right: rem(17);
    @extend %h3-title-bold;
    color: $black;
    @extend %evt-none;
  }
  &__desc {
    margin-top: rem(40);
    margin-left: rem(33);
  }
  &__img {
    margin-bottom: rem(15);
  }
  &__title {
    @extend %text-middle;
    color: $gray;
    b {
      @extend %bold;
    }
  }
}
@include bp(1100px) {
  .c-calendar-week {
    &__wrap {
      min-width: 593px;
    }
    &__item {
      width: 83px;
      height: 83px;
    }
  }
}
@include bp(766px) {
  .c-calendar-week {
    flex-direction: column;
    &__wrap {
      min-width: 100%;
    }
    &__desc {
      margin-left: 0;
    }
    &__name-days {
      font-size: rem(12);
      &:nth-child(6),
      &:nth-child(7) {
        position: absolute;
        top: 110px;
      }
      &:nth-child(6) {
        left: 23px;
      }
      &:nth-child(7) {
        left: 87px;
      }
    }
    &__static-days {
      grid-template-columns: repeat(5, 1fr);
      /*grid-template-rows: repeat(2, 1fr);*/
      position: relative;
      margin-bottom: 9px;
    }
    &__items {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      row-gap: 43px;
    }
    &__item {
      width: 62px;
      height: 62px;
      &-data {
        top: 9px;
        right: 9px;
        font-size: rem(16);
      }
    }
    &__desk {
      margin: -67px 0 0 168px;
    }
    &__img {
      margin-bottom: 0;
      img {
        width: 35px;
      }
    }
    &__title {
    }
  }
}
</style>
