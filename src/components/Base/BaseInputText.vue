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
            <svg
              class="user-svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.49998 9C10.9853 9 13 6.98528 13 4.5C13 2.01472 10.9853 0 8.49998 0C6.0147 0 3.99998 2.01472 3.99998 4.5C3.99998 6.98528 6.0147 9 8.49998 9ZM14.5104 11.4896C15.6286 12.6078 16.403 14.0054 16.7658 15.5183C17.0233 16.5925 16.1045 17.5 15 17.5H8.49998L1.99998 17.5C0.89541 17.5 -0.023364 16.5925 0.234179 15.5183C0.596935 14.0054 1.3714 12.6078 2.48957 11.4896C4.08363 9.89553 6.24564 9 8.49998 9C10.7543 9 12.9163 9.89553 14.5104 11.4896Z"
                />
              </mask>
              <path
                d="M14.5104 11.4896L13.8033 12.1967L14.5104 11.4896ZM8.49998 17.5V18.5V17.5ZM2.48957 11.4896L1.78247 10.7825H1.78247L2.48957 11.4896ZM1.99998 17.5L1.99998 18.5L1.99998 17.5ZM0.234179 15.5183L-0.738259 15.2852L0.234179 15.5183ZM16.7658 15.5183L17.7382 15.2852L16.7658 15.5183ZM12 4.5C12 6.433 10.433 8 8.49998 8V10C11.5375 10 14 7.53757 14 4.5H12ZM8.49998 1C10.433 1 12 2.567 12 4.5H14C14 1.46243 11.5375 -1 8.49998 -1V1ZM4.99998 4.5C4.99998 2.567 6.56698 1 8.49998 1V-1C5.46241 -1 2.99998 1.46243 2.99998 4.5H4.99998ZM8.49998 8C6.56698 8 4.99998 6.433 4.99998 4.5H2.99998C2.99998 7.53757 5.46241 10 8.49998 10V8ZM17.7382 15.2852C17.3328 13.5943 16.4672 12.0322 15.2175 10.7825L13.8033 12.1967C14.7899 13.1833 15.4732 14.4165 15.7933 15.7515L17.7382 15.2852ZM8.49998 18.5H15V16.5H8.49998V18.5ZM1.99998 18.5L8.49998 18.5L8.49998 16.5L1.99998 16.5L1.99998 18.5ZM1.78247 10.7825C0.532715 12.0322 -0.332844 13.5943 -0.738259 15.2852L1.20662 15.7515C1.52671 14.4165 2.21008 13.1833 3.19668 12.1967L1.78247 10.7825ZM8.49998 8C5.98042 8 3.56406 9.00089 1.78247 10.7825L3.19668 12.1967C4.6032 10.7902 6.51086 10 8.49998 10V8ZM15.2175 10.7825C13.4359 9.00089 11.0195 8 8.49998 8V10C10.4891 10 12.3968 10.7902 13.8033 12.1967L15.2175 10.7825ZM1.99998 16.5C1.71718 16.5 1.47954 16.3827 1.33886 16.2313C1.20969 16.0923 1.16299 15.9334 1.20662 15.7515L-0.738259 15.2852C-1.18587 17.152 0.428531 18.5 1.99998 18.5L1.99998 16.5ZM15.7933 15.7515C15.837 15.9334 15.7903 16.0923 15.6611 16.2313C15.5204 16.3827 15.2828 16.5 15 16.5V18.5C16.5714 18.5 18.1858 17.152 17.7382 15.2852L15.7933 15.7515Z"
                fill="#4B4B4B"
                mask="url(#path-1-inside-1)"
              />
            </svg>
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
  width: rem(311);
  height: rem(50);
  padding: 0 0 0 16px;
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
    text-align: center;
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
      margin-left: 7px;
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
