<template lang="pug">
  svg( class="icon" :class="className" :width="width" :height="height")
    use(v-bind="{ 'xlink:href': '/sprite.svg#' + name }")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    mod: {
      type: String,
      default: "black"
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  computed: {
    className() {
      return `icon-${this.name} ${this.mod}`;
    }
  }
};
</script>

<style lang="scss">
.icon {
  transition: all 0.3s ease;
  &.black {
    color: $black;
  }
  &.white {
    color: $white;
  }
  &.icon-arrow-right {
    fill: transparent;
    stroke: currentColor;
  }
}
</style>
