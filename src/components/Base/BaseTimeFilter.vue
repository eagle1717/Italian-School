<template>
  <div class="timepicker" :class="{ active: emit_time }">
    <div class="timepicker__val" @click="show_timepicker">
      <span>{{ emit_time ? emit_time : "Время" }}</span>
    </div>
    <div class="timepicker__wrapper" v-show="is_show_timepicker">
      <div class="timepicker__wrap">
        <input
          @input="change_input('time1')"
          type="text"
          class="timepicker__input"
          ref="time1"
          v-model="input.hour_1"
        />
        <input
          @input="change_input('time2')"
          type="text"
          class="timepicker__input"
          ref="time2"
          v-model="input.hour_2"
        />
        <span>:</span>
        <input
          @input="change_input('time3')"
          type="text"
          class="timepicker__input"
          ref="time3"
          v-model="input.minute_1"
        />
        <input
          @input="change_input('time4')"
          type="text"
          class="timepicker__input"
          ref="time4"
          v-model="input.minute_2"
        />
      </div>
    </div>
    <i class="close" v-if="emit_time" @click="show_timepicker"></i>
  </div>
</template>

<script>
export default {
  name: "BaseTimeFilter",
  data() {
    return {
      input: {},
      is_show_timepicker: false,
      emit_time: null
    };
  },
  methods: {
    show_timepicker() {
      if (!this.is_show_timepicker && Object.keys(this.input).length > 0) {
        this.input = {};
        this.emit_time = null;
        this.$emit("change", null);
        return;
      }
      this.is_show_timepicker = !this.is_show_timepicker;
      this.$nextTick(() => this.$refs.time1.focus());
    },
    replace_val(name) {
      this.input[name] = this.input[name].replace(/[^-0-9]/g, "");
      if (name === "hour_1" && this.input[name] > 2) this.input[name] = "";
      if (name === "hour_2" && this.input[name] > 9) this.input[name] = "";
      if (
        (name === "minute_1" && this.input[name] > 5) ||
        (name === "minute_2" && this.input[name] > 5)
      )
        this.input[name] = "";

      return this.input[name].length > 0;
    },
    change_input(name) {
      if (name === "time1") {
        if (this.replace_val("hour_1")) return this.$refs.time2.focus();
      }
      if (name === "time2") {
        if (this.replace_val("hour_2")) return this.$refs.time3.focus();
      }
      if (name === "time3") {
        if (this.replace_val("minute_1")) return this.$refs.time4.focus();
      }
      if (name === "time4") {
        if (this.replace_val("minute_2")) {
          const time = `${this.input.hour_1}${this.input.hour_2}:${this.input.minute_1}${this.input.minute_2}`;
          this.$refs.time4.blur();
          this.emit_time = time;
          this.is_show_timepicker = false;
          return this.$emit("change", time);
        }
      }
    }
  }
};
</script>

<style lang="scss">
.timepicker {
  position: relative;
  @extend %simple-select;
  width: 96px;
  &.active {
    border-color: $green;
    .timepicker {
      &__val {
        color: $green;
      }
    }
    .close {
      font-style: normal;
      height: 23px;
      width: 23px;
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
    width: rem(152);
    transform: translateX(-19%);
    padding: 14px;
    background-color: $dark_white;
    border: 1px solid $black;
    border-radius: 2px;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  &__input {
    @extend %h3-title-bold;
    color: $gray;
    text-align: center;
    width: rem(26);
    height: rem(39);
  }
  span {
    display: flex;
    height: rem(39);
    line-height: rem(39);
  }
}
@include bp(766px) {
  .timepicker {
    &__wrapper {
      transform: translateX(-53%);
    }
  }
}
</style>
