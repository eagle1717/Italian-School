<template>
  <div class="c-text-area" :class="{ error: error }">
    <textarea
      :placeholder="placeholder"
      class="c-text-area__ta"
      v-model="text"
      @input="change"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    change() {
      this.$emit("input", this.text);
    }
  }
};
</script>

<style lang="scss">
.c-text-area {
  width: 100%;
  height: 100%;
  &.error {
    .c-text-area {
      &__ta {
        border-color: $red;
      }
    }
  }
  &__ta {
    @extend %text-middle;
    width: inherit;
    height: inherit;
    resize: none;
    padding: 8px;
    color: $gray;
    border: 1px solid $soft_gray;
    border-radius: 2px;
    transition: all 0.5s ease;
  }
}
</style>
