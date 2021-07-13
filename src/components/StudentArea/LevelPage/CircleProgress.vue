<template>
  <div class="c-circle-progress">
    <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
      <circle
        class="donut-hole"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="#fff"
      ></circle>
      <circle
        class="donut-ring"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#d2d3d4"
        stroke-width="3"
      ></circle>
      <circle
        class="donut-segment"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        :stroke-dasharray="`${percent} ${100 - percent}`"
        stroke-dashoffset="100"
      ></circle>
    </svg>
    <span class="c-circle-progress__percent">{{ percent }}%</span>
  </div>
</template>

<script>
export default {
  name: "CircleProgress",
  props: {
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#39B100"
    }
  }
};
</script>

<style lang="scss">
.c-circle-progress {
  @extend %regular;
  @extend %text-small;
  position: relative;
  width: 75px;
  height: 75px;
  &__percent {
    @extend %absolute-center;
    color: #4b4b4b;
  }
}
</style>
