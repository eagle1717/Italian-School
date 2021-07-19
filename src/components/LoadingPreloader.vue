<template>
  <div class="c-loading" :class="{ visible: isVisible }">
    <div class="c-loading__logo">
      <img src="@/assets/logo.svg" alt="logotype" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingPreloader",
  props: {
    isVisible: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.c-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $white;
  @extend %df;
  @extend %aic;
  @extend %jcc;
  transition: all 0.5s ease;
  @extend %evt-none;
  opacity: 0;
  z-index: 9999999;
  .c-loading__logo {
    width: 95px;
    height: 48.36px;
  }
  &.visible {
    opacity: 1;
    @extend %evt-all;
  }
}
</style>
