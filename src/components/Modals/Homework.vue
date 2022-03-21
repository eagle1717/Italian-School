<template>
  <BaseModal id="home-work-modal">
    <div class="c-homework">
      <div class="c-homework__container">
        <div class="c-homework__content">
          <img
            class="c-homework__content-icon"
            src="@/assets/img/ill/homework.svg"
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
#home-work-modal {
  width: 705px !important;
  @media screen and (max-width:766px) {
    width: 100vw !important;
  }
}
.c-homework {
  @extend %pagept;
  @media screen and (max-width: 766px) {
    padding-left: 0px;
    width: max-content;
    margin: 0 auto;
  }
  &__container {
    max-width: 475px;
    width: 100%;
    width: 100%;
    padding-left: 60px;
    @media screen and (max-width: 766px) {
      // padding-left: 25px;
      // padding-right: 25px;
      padding-left: 0px;
    }
    @media screen and (max-width: 620px) {
      .c-homework__content {
        img {
          width: 185px;
          height: 102px;
        }
        .c-homework__content-title {
          font-size: 18px;
          line-height: 30px;
          max-width: 200px;
          margin-top: 25px;
        }
      }
    }
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
