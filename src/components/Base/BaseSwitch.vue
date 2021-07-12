<template>
  <div class="c-switch">
    <label class="c-switch__form-switch">
      <input type="checkbox" checked />
      <i></i>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseSwitch"
};
</script>

<style lang="scss">
.c-switch {
  &__form-switch {
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    i {
      position: relative;
      display: inline-block;
      margin-right: 0.5rem;
      width: 46px;
      height: 26px;
      background-color: #d8d8d8;
      border-radius: 23px;
      vertical-align: text-bottom;
      transition: all 0.3s linear;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 42px;
        height: 22px;
        background-color: $white;
        border-radius: 11px;
        transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
        transition: all 0.25s linear;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 22px;
        height: 22px;
        background-color: $soft_gray;
        border-radius: 11px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
        transform: translate3d(2px, 2px, 0);
        transition: all 0.2s ease-in-out;
      }
    }

    &:active i::after {
      width: 28px;
      transform: translate3d(2px, 2px, 0);
    }

    &:active input:checked + i::after {
      transform: translate3d(16px, 2px, 0);
    }

    input {
      display: none;

      &:checked + i {
        background-color: $green;
      }

      &:checked + i::before {
        transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
      }

      &:checked + i::after {
        transform: translate3d(22px, 2px, 0);
        background-color: $white;
      }
    }
  }
}
</style>
