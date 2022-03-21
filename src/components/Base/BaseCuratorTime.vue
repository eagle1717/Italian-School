<template>
  <div class="c-teacher-calendar__timelines-wrapper" style="margin-top: 30px">
    <TimelineWeekCalendar
      @change-date="change_date"
      :selected_date="selected_date"
    />
    <div class="c-teacher-calendar__time-lines">
      <template v-for="time in items">
        <ReservedTeacherTime
          class="c-teacher-calendar__timeline"
          :class="{ hovered: hoverId === time.isReserved }"
          :hour="time.hour"
          :minutes-from="time.minuteFrom"
          :minutes-to="time.minuteTo"
          :key="`t_${time.hour}_${time.minuteFrom}:${time.minuteTo}`"
          :modal_data="time.modal_data"
          @hover="hoverElement"
        />
      </template>
    </div>
  </div>
</template>

<script>
import ReservedTeacherTime from "@/components/ReservedTeacherTime";
import TimelineWeekCalendar from "@/components/Calendars/TimelineWeekCalendar";
export default {
  name: "BaseCuratorTime",
  props: {
    selected_date: {
      type: String
    },
    timeline: {
      type: Array,
      default: () => []
    },
    is_edit: {
      type: Boolean
    },
    time_off: {
      type: Array
    }
  },
  components: {
    TimelineWeekCalendar,
    ReservedTeacherTime,
  },
  data() {
    return {
      hourFrom: 9,
      hourTo: 18,
      timeOff: [],
      hoverId: null
    };
  },
  computed: {
    reservedTime() {
      return this.timeline;
    },
    items() {
      const hours = [];

      for (let hour = this.hourFrom; hour <= this.hourTo; hour++) {
        let is_full_day = null;
        for (let itm of this.time_off) {
          is_full_day = itm.fromHour === 9 && itm.toHour === 18;
          if (is_full_day) {
            hours.push({
              hour,
              minuteFrom: 0,
              minuteTo: 60,
              isReserved: false,
              countBlocks: 60,
              is_time_off: true
            });
          }
        }
        if (is_full_day) continue;
        let minuteFrom = 0;
        let minuteTo = 60;
        let isReserved = this.checkReserved(hour, minuteFrom);

        // let time_off_test = null;
        let timeOff_minute = null;

        for (let minute = 0; minute < 60; minute += 5) {
          let isReservedCheck = this.checkReserved(hour, minute);
          timeOff_minute = this.checkReserved(hour, minute, true)
            ? minute
            : null;
          const is_time_off =
            this.time_off.filter(
              time =>
                (time.fromHour === hour &&
                  time.fromMinutes === minuteFrom &&
                  time.toMinutes === timeOff_minute) ||
                time.toHour === hour
            ).length > 0;

          if (isReserved !== isReservedCheck) {
            hours.push({
              hour,
              minuteFrom,
              minuteTo: minute,
              isReserved,
              countBlocks: (minute - minuteFrom) / 5,
              is_time_off
            });

            minuteFrom = minute;
            isReserved = isReservedCheck;
          }
        }
        const user = this.reservedTime.find(
          reserved =>
            reserved.time_from ===
            `${hour > 10 ? hour : "0" + hour}:${
              minuteFrom === 0 ? "00" : minuteFrom
            }`
        );
        const is_time_off =
          this.time_off.filter(
            time =>
              (time.fromHour === hour &&
                time.fromMinutes === minuteFrom &&
                time.toMinutes === timeOff_minute) ||
              time.toHour === hour
          ).length > 0;
        // console.log(is_time_off)
        const modal_data = {
          lesson_id: user ? ("id" in user ? user.id : null) : null,
          student_id: user
            ? "student_id" in user
              ? user.student_id
              : null
            : null,
          student_photo: user ? ("photo" in user ? user.photo : null) : null,
          student_first_name: user
            ? "first_name" in user
              ? user.first_name
              : null
            : null,
          student_last_name: user
            ? "last_name" in user
              ? user.last_name
              : null
            : null,
          lesson_date: user ? ("date" in user ? user.date : null) : null,
          lesson_time_from: user
            ? "time_from" in user
              ? user.time_from
              : null
            : null,
          lesson_time_to: user
            ? "time_to" in user
              ? user.time_to
              : null
            : null,
          lesson_type: user
            ? "lesson_type" in user
              ? user.lesson_type
              : null
            : null,
          lesson_comment: user
            ? "lesson_comment" in user
              ? user.lesson_comment
              : null
            : null,
          link_to_lesson: user
            ? "link_to_lesson" in user
              ? user.link_to_lesson
              : null
            : null,
          link_to_homework: user
            ? "link_to_homework" in user
              ? user.link_to_homework
              : null
            : null
        };

        hours.push({
          hour,
          minuteFrom,
          minuteTo,
          isReserved,
          countBlocks: (minuteTo - minuteFrom) / 5,
          modal_data,
          is_time_off: is_time_off
        });
      }
      return hours;
    }
  },
  methods: {
    checkReserved(hour, minute, isTimeOff) {
      const minutes = hour * 60 + minute;
      const array = isTimeOff ? "time_off" : "reservedTime";
      const reservedItem = this[array].find(foundTime => {
        const minutesReserveFrom =
          foundTime.fromHour * 60 + foundTime.fromMinutes;
        const minutesReserveTo = foundTime.toHour * 60 + foundTime.toMinutes;
        if (minutes >= minutesReserveFrom && minutes <= minutesReserveTo) {
          return foundTime;
        } else {
          return undefined;
        }
      });
      if (reservedItem) {
        return reservedItem.id;
      } else {
        return false;
      }
    },
    hoverElement(id) {
      this.hoverId = id;
    },
    change_date(date) {
      this.$emit("change_date", date);
    },
    change_slider_curator(data) {
      this.$emit("change_time_slider", data);
    }
  }
};
</script>