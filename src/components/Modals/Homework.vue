<template>
  <BaseModal>
    <div class="c-homework">
      <div class="c-homework__container">
        <div class="c-homework__content">
          <img
            class="c-homework__content-icon"
            src="/img/ill/homework.svg"
            alt="homework"
          />
          <h3 class="c-homework__content-title">
            Домашнее задание отправлено на проверку!
          </h3>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Homework",
  computed: {
    ...mapState(["show_overlay"])
  },
  methods: {
    hide_overlay() {
      this.$store.dispatch("hide_show_overlay", !this.show_overlay);
    }
  }
};
</script>

<style lang="scss">
.c-homework {
  @extend %pagept;
  &__container {
    max-width: 475px;
    padding-left: 60px;
    // @extend %m0a;
  }
  &__header {
    cursor: pointer;
  }

  &__content {
    margin-top: 60px;
    @extend %df;
    @extend %jcfs;
    @extend %fdc;
    &-title {
      @extend %h2-title-regular;
      margin-top: 50px;
    }
    &-icon {
      width: max-content;
    }
  }
}
</style>
