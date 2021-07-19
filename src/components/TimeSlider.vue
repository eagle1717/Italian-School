<template>
  <div class="c-time-slider">
    <div class="c-time-slider__range" ref="range">
      <div class="c-time-slider__background">
        <div
          class="c-time-slider__hour"
          :key="`h_${hour.num}`"
          v-for="hour in hours"
        >
          <div
            :class="{
              'c-time-slider__minute--reserved': checkReserved(hour.num, minute)
            }"
            class="c-time-slider__minute"
            :style="{ width: `${minuteBlockPixels}px` }"
            v-for="minute in hour.minutes"
            :key="`h_${hour.num}_${minute}`"
          ></div>
        </div>
      </div>
      <div
        :style="{ width: `${actualTimePixels}px` }"
        class="c-time-slider__time"
        :class="{ 'c-time-slider__time--reserved': isReserved }"
        @mousedown.prevent="moveTime"
      ></div>
    </div>
    <div class="c-time-slider__timeline">
      <div
        class="c-time-slider__timeline-time"
        :key="`hl_${hour.num}`"
        v-for="hour in hours"
      >
        {{ hour.num }}:00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessonTime: {
      type: Number,
      default: 60
    },
    reservedTime: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      currentLeft: 0,
      pixelPerMinute: 1,
      minutesPerBlock: 5,
      hourFrom: 9,
      hourTo: 19
    };
  },
  computed: {
    hours() {
      const hours = [];

      for (let i = this.hourFrom; i <= this.hourTo; i++) {
        const hour = {
          num: i,
          minutes: []
        };

        if (i !== this.hourTo) {
          for (let j = 0; j < 60; j += this.minutesPerBlock) {
            hour.minutes.push(j);
          }
        }

        hours.push(hour);
      }

      return hours;
    },
    offsetAllMinutes() {
      return this.currentLeft / this.pixelPerMinute;
    },
    offsetMinutes() {
      return this.offsetAllMinutes - this.offsetHours * 60;
    },
    offsetHours() {
      return Math.floor(this.offsetAllMinutes / 60);
    },
    timeFromHour() {
      return this.hourFrom + this.offsetHours;
    },
    timeFrom() {
      const hours =
        this.timeFromHour < 10 ? `0${this.timeFromHour}` : this.timeFromHour;
      const minutes =
        this.offsetMinutes < 10 ? `0${this.offsetMinutes}` : this.offsetMinutes;

      return `${hours}:${minutes}`;
    },
    timeToHour() {
      const offsetAllMinutes = this.offsetAllMinutes + this.lessonTime;

      const hour = Math.floor(offsetAllMinutes / 60);

      return this.hourFrom + hour;
    },
    timeToMinute() {
      const offsetAllMinutes = this.offsetAllMinutes + this.lessonTime;

      const hour = Math.floor(offsetAllMinutes / 60);
      return offsetAllMinutes - hour * 60;
    },
    isReserved() {
      const minutesFrom = this.offsetAllMinutes + this.hourFrom * 60;
      const minutesTo = minutesFrom + this.lessonTime;

      return (
        this.reservedTime.find(foundTime => {
          const minutesReserveFrom =
            foundTime.fromHour * 60 + foundTime.fromMinutes;
          const minutesReserveTo =
            foundTime.toHour * 60 + foundTime.toMinutes + 5;

          if (
            minutesFrom >= minutesReserveFrom &&
            minutesFrom <= minutesReserveTo
          ) {
            return true;
          }

          return (
            minutesTo >= minutesReserveFrom && minutesTo <= minutesReserveTo
          );
        }) !== undefined
      );
    },
    timeTo() {
      const hours =
        this.timeToHour < 10 ? `0${this.timeToHour}` : this.timeToHour;
      const minutes =
        this.timeToMinute < 10 ? `0${this.timeToMinute}` : this.timeToMinute;

      return `${hours}:${minutes}`;
    },
    actualTimePixels() {
      return this.lessonTime * this.pixelPerMinute;
    },
    minuteBlockPixels() {
      return this.pixelPerMinute * this.minutesPerBlock;
    }
  },
  methods: {
    checkReserved(hour, minute) {
      const minutes = hour * 60 + minute;

      return this.reservedTime.find(foundTime => {
        const minutesReserveFrom =
          foundTime.fromHour * 60 + foundTime.fromMinutes;
        const minutesReserveTo =
          foundTime.toHour * 60 + foundTime.toMinutes + 5;

        return minutes >= minutesReserveFrom && minutes <= minutesReserveTo;
      });
    },
    moveTime(event) {
      const timeEl =
        event.target.localName === "span"
          ? event.target.parentNode
          : event.target;
      let slider = this.$refs.range;
      let shiftX = event.clientX - timeEl.getBoundingClientRect().left;
      // let oldLeft = null;
      // const isInteger = (num) => {
      //   return (num ^ 0) === num
      // }
      const onMouseMove = event => {
        let newLeft =
          event.clientX - shiftX - slider.getBoundingClientRect().left;

        // isInteger(test) ? newLeft : newLeft += 5;
        if (newLeft < 0) {
          newLeft = 0;
        }

        let rightEdge = slider.offsetWidth - timeEl.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        timeEl.style.left = newLeft + "px";
        const result = Math.round(newLeft / this.minutesPerBlock);
        this.currentLeft = result * this.minutesPerBlock;
        this.update();
      };

      const onMouseUp = () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
        this.update();
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    update() {
      this.$emit("input", {
        from: {
          hour: this.timeFromHour,
          minutes: this.offsetMinutes,
          time: this.timeFrom
        },
        to: {
          hour: this.timeToHour,
          minutes: this.timeToMinute,
          time: this.timeTo
        },
        isReserved: this.isReserved
      });
    }
  }
};
</script>

<style lang="scss">
.c-time-slider {
  position: relative;
  display: inline-block;
  &__background {
    @extend %df;
    height: 59px;
    z-index: -1;
    padding-top: 2px;
  }

  &__hour {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  &__minute {
    background-color: #f1ffea;
    height: 60px;

    &--reserved {
      background-color: #fdefee;
    }
  }

  &__time {
    position: absolute;
    top: 0;
    height: 60px;
    color: $green;
    border: 2px solid $green;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    &--reserved {
      color: $red;
      border: 2px solid $red;
    }
  }

  &__range {
    display: inline-block;
  }

  &__square-title {
    font-size: 0.7rem;
  }

  &__timeline {
    @extend %df;
    @extend %jcsb;
    @extend %text-small-big-line-height;
    color: $gray;
  }
}
@include bp(766px) {
}
</style>
