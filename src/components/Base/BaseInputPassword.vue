<template>
  <div class="c-input-password" :class="{ error: error }">
    <BaseIcon name="pass" class="c-input-password__field-icon" />
    <!--    <img-->
    <!--      class="c-input-password__field-icon"-->
    <!--      src="/img/icons/pass.svg"-->
    <!--      alt="lock"-->
    <!--    />-->
    <input
      class="c-input-password__field"
      :type="type"
      :placeholder="placeholder"
      v-model="val"
      @input="changeValue"
    />
    <div
      class="c-input-password__field-show-icon"
      :class="{ 'c-input-password__field-show-icon--show': isShow }"
      @click.stop="toggleShow"
    ></div>
    <template v-if="showProgress">
      <div class="c-input-password__progress">
        <span :style="{ width: security_password }"></span>
      </div>
    </template>
    <template v-if="error_message">
      <div class="c-input-password__notifer">
        {{ error_message }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BaseInputPassword",
  props: {
    placeholder: {
      type: String
    },
    showProgress: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    error_message: {
      type: String
    }
  },
  computed: {
    type() {
      return this.isShow ? "text" : "password";
    },
    security_password() {
      return this.val.length <= 10 ? `${this.val.length * 10}%` : `100%`;
    }
  },
  data() {
    return {
      isShow: false,
      val: ""
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
    changeValue() {
      this.$emit("input", this.val);
    }
  }
};
</script>

<style lang="scss">
.c-input-password {
  position: relative;
  @extend %df;
  @extend %aic;
  border: 1px solid $soft_gray;
  width: 100%;
  height: rem(50);
  padding: 0 0 0 16px;
  transition: all 0.5s ease;
  margin-bottom: 0px !important;
  svg {
    width: 27.25px;
  }
  .c-input__field {
    padding-left: 0px;
  }
  &__notifer {
    position: absolute;
    bottom: -13px;
    @extend %text-very-small;
    color: $red;
    left: 0;
  }
  &__progress {
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 4px;

    span {
      @extend %df;
      border-radius: 2px;
      height: 100%;
      background-color: $green;
      transition: all 0.3s ease;
    }
  }
  &.error {
    border-color: $red;
    .c-input-password__field {
      color: $red;
      &-icon {
        color: $red;
      }
    }
  }
  &__field {
    width: 100%;
    @extend %text-middle;
    @extend %input-reset;
    letter-spacing: 1px;
    /*font-size: 20px;*/
    color: $black;
    height: 100%;
    max-width: rem(220);
    padding-left: 10px;
    &::placeholder {
      color: rgba(75, 75, 75, 1);
    }
    &-icon {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      // left: rem(27);
      // width: rem(17);
      // height: rem(17);
      &.icon {
        fill: transparent;
        stroke: currentColor;
      }
      width: rem(34);
      height: rem(20);
    }

    &-show-icon {
      // position: absolute;
      // top: 50%;
      // right: 21px;
      background-image: url($img_dir+"icons/hide-pass.svg");
      @extend %bg-reset;
      width: rem(19);
      height: rem(12);
      margin-left: rem(3);
      &--show {
        background-image: url($img_dir+"icons/eye-pass.svg");
      }
    }
  }
}
</style>
<style lang="scss">
input {
  &:placeholder {
    color: red !important;
  }
}
</style>
