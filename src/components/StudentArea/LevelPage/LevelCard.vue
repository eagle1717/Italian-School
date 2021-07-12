<template>
  <div class="c-user-level">
    <div class="c-user-level__wrap c-user-level__wrap_left">
      <h3 class="c-user-level__title">
        Ваш уровень
      </h3>
      <template>
        <p class="c-user-level__text">
          Ваш уровень не<br />
          подтвержден
        </p>
        <router-link :to="{ name: 'FindOutLevel' }" class="c-user-level__link">
          Выбрать уровень
        </router-link>
      </template>
    </div>
    <div class="c-user-level__wrap c-user-level__wrap_right">
      <p class="c-user-level__wrap-item">Грамматика</p>
      <img src="@/assets/percentage.svg" />
      <!-- <CircleProgress :percent="user.level.grammar_percent" /> -->
    </div>
    <div class="c-user-level__wrap c-user-level__wrap_right">
      <p class="c-user-level__wrap-item">Лексика</p>
      <img src="@/assets/percentage.svg" />
      <!-- <CircleProgress :percent="user.level.vocabulary_percent" /> -->
    </div>
  </div>
</template>

<script>
// import CircleProgress from "../CircleProgress";
import { mapState } from "vuex";
export default {
  // components: { CircleProgress },
  data() {
    return {
      isCheckLevel: false
    };
  },
  computed: {
    ...mapState({ user: state => state.user.user })
  }
};
</script>

<style lang="scss">
.c-user-level {
  @extend %df;
  @extend %jcsa;
  @extend %aic;
  height: rem(150);
  width: rem(430);
  border: 1px solid #4b4b4b;
  border-radius: 2px;
  .c-user-level__wrap_left {
    padding-top: 5px;
  }
  &__title {
    @extend %text-big;
    color: $black;
    margin-bottom: 11px;
  }
  &__wrap-item {
    margin-bottom: 23px;
  }
  &__text {
    @extend %text-small-big-line-height;
    color: $gray;
  }
  &__link {
    @extend %dib;
    margin-top: 7px;
    @extend %btn-text;
    color: $red;
  }
  &__wrap {
    &-item {
      @extend %text-small;
    }
  }
}
@include bp(1360px) {
  .c-user-level {
    margin-right: 20px;
  }
}
@include bp(1100px) {
  .c-user-level {
    width: calc(100% / 2);
    margin-right: 20px;
  }
}
@include bp(766px) {
  .c-user-level {
    width: 100%;
    margin-right: 0;
    margin-bottom: 13px;
    padding-left: 18px;
    align-items: flex-start;
    padding-top: 35px;
    &__img {
      width: 80px;
    }
    &__title {
      font-size: rem(14);
    }
  }
}
</style>
