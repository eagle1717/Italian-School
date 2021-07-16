<template>
  <div class="c-calendar">
    <div class="c-calendar__header">
      <template v-if="!is_curator">
        <h2 class="c-calendar__title">Выберите дату занятия</h2>
      </template>
      <div class="c-calendar__btns">
        <button
          class="c-calendar__btn c-calendar__btn-left"
          @click="subtractMonth"
        >
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L0.999999 8L8 1"
              stroke="#D8D8D8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p class="c-calendar__month-name">
          {{ month }}
        </p>
        <button class="c-calendar__btn c-calendar__btn-right" @click="addMonth">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8 8L0.999998 15"
              stroke="#D8D8D8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="c-calendar__wrap">
      <div class="c-calendar__static-days">
        <div
          v-for="staticDay in $route.name === 'Calendario2'
            ? staticDaysIT
            : staticDays"
          :key="staticDay"
          class="c-calendar__name-days"
        >
          <span>{{ staticDay }}</span>
        </div>
      </div>
      <div class="c-calendar__items">
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
          :lessons_array="lessonInsideArray"
          :is_curator="is_curator"
          :lessons="lessons"
          @click="clickOnDateItem(date)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import BaseCalendarDay from "./BaseCalendarDay";
export default {
  components: { BaseCalendarDay },
  props: {
    lessons: {
      type: Array
    },
    daysOff: {
      type: Array
    },
    is_curator: {
      type: Boolean
    },
    make_day_off: {
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
      daysOffInside: []
    };
  },
  created() {
    if (this.$route.name === "Calendario2") {
      moment.locale("it");
    } else if (this.$route.name === "Calendar") {
      moment.locale("ru");
    }
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
      if (this.make_day_off) {
        this.$emit("make-day-off", date);
      } else if (this.is_curator) {
        this.$emit("show-timeline", date, this.daysOff.includes(date.fullDate));
      } else {
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
        if (this.daysOff) {
          const dayOfItem = this.daysOff.find(el => el === date.fullDate);
          if (dayOfItem) {
            eventData.type.name = "day-off-notification";
          }
        }
        this.$emit("click", eventData);
      }
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
