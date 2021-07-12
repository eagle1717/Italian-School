<template>
  <div class="c-timeline-week">
    <ul class="c-timeline-week__week-days">
      <li class="c-timeline-week__wd-itm" v-for="day in staticDaysIT" :key="day">
        {{ day }}
      </li>
    </ul>
    <ul class="c-timeline-week__days">
      <li
        class="c-timeline-week__days-itm"
        v-for="{ day, fullDate } in daysInWeek"
        :key="day.day"
        :class="{ current: day === initialDate }"
        @click="change_day({ day, fullDate })"
      >
        <span>{{ day }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TimelineWeekCalendar",
  props: {
    selected_date: {
      type: String
    }
  },
  data() {
    return {
      staticDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      staticDaysIT: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
      today: null,
      dateContext: null
    };
  },
  created() {
    moment.locale("ru");

    this.today = moment(this.selected_date);
    this.dateContext = moment(this.selected_date);
  },
  computed: {
    month() {
      return this.dateContext.format("MMMM");
    },
    daysInWeek() {
      const data = [...Array(7)].map((_, i) => {
        const baseDate = this.dateContext.startOf("week").clone().add(i, "day");
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
      return this.today.format("DD");
    },
    initialMonth() {
      return this.today.format("MMMM");
    }
  },
  methods: {
    change_day(date) {
      this.today = moment(date.fullDate);
      this.dateContext = moment(date.fullDate);
      this.$emit("change-date", date);
    }
  }
};
</script>

<style lang="scss">
.c-timeline-week {
  width: 100%;
  background-color: $dark_white;
  padding: 26px 35px 0;
  &__week-days,
  &__days {
    width: 100%;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
  }
  &__wd-itm {
    @extend %df;
    @extend %jcc;
    @extend %text-middle;
    color: $gray;
    width: rem(35);
    height: rem(35);
  }
  &__days-itm {
    @extend %df;
    @extend %aic;
    @extend %jcc;
    @extend %btn-text;
    width: rem(35);
    height: rem(35);
    border-radius: 50%;
    border: 1px solid transparent;
    transition: all 0.5s ease;
    cursor: pointer;
    &.current,
    &:hover {
      color: $green;
      border-color: $green;
      background-color: $white;
    }
  }
}
@include bp(766px) {
  .c-timeline-week {
    padding: 15px 10px;
  }
}
</style>
