<template>
  <div class="datepiker" :class="{ active: current }">
    <div class="datepiker__val" @click="show_calendar">
      <span>{{ current ? current : "Дата" }}</span>
    </div>
    <div class="datepiker__wrapper" v-show="is_show_calendar">
      <FilterCalendar
        class="datepiker__calendar"
        @click="change_calendar"
        :lessons="$store.getters['user/user_lessons']"
        :days-off="[]"
      />
    </div>
    <i class="close" v-if="current" @click="change_calendar"></i>
  </div>
</template>

<script>
import FilterCalendar from "@/components/Calendars/FilterCalendar";
export default {
  components: { FilterCalendar },
  data() {
    return {
      is_show_calendar: false,
      current: null
    };
  },
  methods: {
    show_calendar() {
      if (this.current) {
        this.current = null;
        this.$emit("change", null);
        return;
      }
      this.is_show_calendar = !this.is_show_calendar;
    },
    change_calendar(date) {
      this.current = date.date;
      this.$emit("change", date.fullDate);
      this.is_show_calendar = false;
    }
  }
};
</script>

<style lang="scss">
.datepiker {
  position: relative;
  margin-right: 10px;
  @extend %simple-select;
  width: 85px;
  &.active {
    border-color: $green;
    .datepiker {
      &__val {
        color: $green;
      }
    }
    .close {
      height: 23px;
      width: 23px;
      font-style: normal;
    }
    .close::after {
      content: "\00D7";
      position: absolute;
      top: -10px;
      right: -6px;
      height: 23px;
      width: 23px;
      background: #f7f7f7;
      border-radius: 50%;
      border: 1px solid #d8d8d8;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__val {
    @extend %btn-text;
    @extend %df;
    @extend %aic;
    @extend %jcc;
    width: 100%;
    height: 100%;
    color: $black;
  }
  &__wrapper {
    position: absolute;
    left: 0;
    top: calc(100% + 10px);
    width: rem(380);
    padding: rem(16);
    background-color: $white;
    border-radius: 2px;
    border: 1px solid $black;
    transform: translateX(-40%);
  }
}
@include bp(766px) {
  .datepiker {
    &__wrapper {
      transform: translateX(-53%);
      width: 320px;
    }
  }
}
</style>
