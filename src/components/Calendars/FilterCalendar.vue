<template>
  <div class="c-calendar__wrap">
    <div class="c-calendar__static-days">
      <div
        v-for="staticDay in staticDays"
        :key="staticDay"
        class="c-calendar__name-days"
      >
        <span>{{ staticDay }}</span>
      </div>
    </div>
    <ul class="c-calendar__items">
      <li
        v-for="(blank, index) in firstDayOfMonth"
        :key="`${index}-blank`"
        class="c-calendar__item c-calendar__item_empty"
      >
        &nbsp;
      </li>
      <BaseCalendarDay
        v-for="(date, index) in daysInMonth"
        :key="`${index}-day`"
        :date_object="date"
        :day="date.day"
        :full_date="date.fullDate"
        :init-date="initialDate"
        :init-month="initialMonth"
        :month="month"
        :days-off="daysOff"
        is_filter
        :lessons_array="lessonInsideArray"
        @click="clickOnDateItem(date)"
      />
    </ul>
  </div>
</template>

<script>
import moment from "moment";
import BaseCalendarDay from "@/components//Base/BaseCalendarDay";

export default {
  name: "FilterCalendar",
  components: { BaseCalendarDay },
  props: {
    lessons: {
      type: Array
    },
    daysOff: {
      type: Array
    }
  },
  data() {
    return {
      today: null,
      dateContext: null,
      staticDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      lessonInsideArray: [],
      daysOffInside: []
    };
  },
  created() {
    moment.locale("ru");
    this.today = moment();
    this.dateContext = moment();
    this.updateData();
    this.$emit("initDate", this.today.format("YYYY-MM-DD"));
  },
  mounted() {
    this.updateData();
  },
  methods: {
    addMonth: function() {
      this.dateContext = moment(this.dateContext).add(1, "month");
    },
    subtractMonth: function() {
      this.dateContext = moment(this.dateContext).subtract(1, "month");
    },
    clickOnDateItem(date) {
      const emit_date = moment(date.fullDate).format("DD.MM");
      this.$emit("click", { date: emit_date, fullDate: date.fullDate });
    },
    updateData() {
      if (this.lessons) {
        this.lessonInsideArray = this.lessons.map(el => el.day);
      }
      if (this.daysOff) this.daysOffInside = this.daysOff;
    }
  },
  computed: {
    month() {
      return this.dateContext.format("MMMM");
    },
    daysInMonth() {
      const data = [...Array(this.dateContext.daysInMonth())].map((_, i) => {
        const baseDate = this.dateContext
          .startOf("month")
          .clone()
          .add(i, "day");

        return {
          day: baseDate.format("DD"),
          fullDate: baseDate.format("YYYY-MM-DD")
        };
      });
      // console.log(data);
      return data;
    },
    currentDate() {
      return this.dateContext.get("date");
    },
    firstDayOfMonth() {
      const firstDay = moment(this.dateContext).subtract(
        this.currentDate - 1,
        "days"
      );
      return firstDay.weekday();
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

<style lang="scss"></style>
