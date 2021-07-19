<template>
  <div class="c-input-wrapper">
    <div class="c-input" :class="{ error: error }">
      <div class="c-input__wrap-field">
        <input
          class="c-input__field"
          type="text"
          :placeholder="placeholder"
          v-model="val"
          @input="changeValue"
        />
      </div>
      <template v-if="icon">
        <div class="c-input__wrap-icon" :class="`c-input__wrap-icon_${icon}`">
          <template v-if="icon == 'user'">
            <img src="/img/icons/user-icon.svg" />
          </template>
          <template v-else>
            <BaseIcon :name="icon" class="c-input__field-icon" />
          </template>
        </div>
      </template>
    </div>
    <template v-if="error_message" class="error-message-wrapper">
      <div class="c-input__notifer">
        {{ error_message }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BaseInputText",
  props: {
    placeholder: {
      type: String
    },
    icon: {
      type: String
    },
    error: {
      type: Boolean
    },
    error_message: {
      type: String
    },
    isLinkInput: {
      type: Boolean
    }
  },
  data() {
    return {
      val: this.$attrs.value || null
    };
  },
  methods: {
    changeValue() {
      if (this.icon !== "email" && !this.isLinkInput) {
        this.val = this.val.replace(/[&/\\#,+()$~%.'":*?!<>{}0-9]/g, "");
      }
      this.$emit("input", this.val);
    }
  }
};
</script>

<style lang="scss">
.c-input {
  position: relative;
  @extend %df;
  @extend %aic;
  border: 1px solid $soft_gray;
  max-width: 311px;
  height: rem(50);
  padding: 0 0 0 20px;
  transition: all 0.5s ease;
  .c-input__field {
    padding-left: 10px;
    &::placeholder {
      color: rgba(75, 75, 75, 1);
    }
  }
  .error-message-wrapper {
    display: block;
  }
  &__notifer {
    @extend %text-very-small;
    color: $red;
    margin-top: 5px;
    // text-align: center;
  }
  &.error {
    border-color: $red;
    .c-input__field {
      color: $red;
      &-icon {
        color: $red;
      }
    }
  }
  &__wrap-field {
    order: 2;
    width: 100%;
    height: 100%;
  }

  &__wrap-icon {
    order: 1;
    .user-svg {
      margin-left: 3px;
    }
    &_user {
      width: rem(30);
      height: rem(18);
    }
    &_email {
      width: rem(30);
      height: rem(16);
    }
  }

  &__field {
    @extend %dib;
    width: 100%;
    height: 100%;
    @extend %text-middle;
    @extend %input-reset;
    color: $black;
    padding-left: 6px;
    color: $black;

    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      // left: rem(27);
      &.icon {
        fill: transparent;
        stroke: currentColor;
      }
      width: inherit;
      height: inherit;
    }
  }
}
</style>
