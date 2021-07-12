<template lang="pug">
ul.select(:class="{ open: open, error: error }", @click.stop="openSelect")
  li.select__wrapper
    .select__wrap-val
      template(v-if="!isImagesOptions")
        span.select__value {{ currentText }}
      template(v-else)
        img(:src="currentText", :alt="currentText")
      BaseIcon(name="arrow-down")
    ul.select__options
      li.select__option(v-for="option of options", :key="option.val")
        button.select__option-btn(@click.prevent="selectOption(option.val)")
          template(v-if="!isImagesOptions")
            span {{ option.text }}
          template(v-else)
            img(:src="option.text", :alt="option")
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: [String, Number]
    },
    isImagesOptions: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    value: null
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    currentText() {
      const option = this.options.find(
        foundOption => foundOption.val === this.value
      );
      console.log(this.value);
      return option ? option.text : this.placeholder;
    }
  },
  methods: {
    openSelect() {
      if (document.querySelector("ul.open")) {
        document.querySelector("ul.open").classList.remove("open");
      }
      this.open = !this.open;
    },
    selectOption(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
.select {
  @extend %simple-select;
  transition: all 0.5s ease;
  &.error {
    border-color: $red;
    .select {
      &__options {
        border-color: $red;
        border-top-color: transparent;
      }
    }
  }
  .icon {
    transform: rotate(0);
    stroke: $green;
    fill: $green;
  }
  &.open {
    .icon {
      transform: rotate(180deg);
    }
    .select__options {
      opacity: 1;
      display: block;
    }
    img {
      transform: rotate(180deg);
    }
  }
  &__wrapper {
    height: 35px;
  }
  &__wrap-val {
    height: 35px;
    padding: 0 15px;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    .icon {
      width: 11px;
      height: 10px;
      fill: transparent;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  &__value {
    @extend %btn-text;
    color: $green;
  }
  &__options {
    position: relative;
    width: 101%;
    padding-left: 17px;
    margin-top: -6px;
    padding-top: 6px;
    margin-left: -1px;
    background-color: $white;
    border: 1px solid $soft_gray;
    border-top-color: transparent;
    padding-bottom: 12px;
    //@extend %evt-none;
    display: none;
    opacity: 0;
    transition: all 0.5s ease;
    overflow-x: hidden;
    max-height: 172px;
    z-index: 99;
    // display: none;
  }
  &__option {
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__option-btn {
    @extend %btn-text;
    @extend %df;
    @extend %jcsb;
    width: 100%;
    color: $soft_gray;
    transition: all 0.3s ease;
    &:hover {
      color: $gray;
    }
  }
}
</style>
