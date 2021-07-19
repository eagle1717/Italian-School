<template>
  <div class="c-special-page">
    <figure class="c-special-page__header">
      <img src="/img/ill/lavel-page/header.svg" alt="" />
    </figure>
    <div class="c-special-page__container">
      <figure class="c-special-page__wrap c-special-page__wrap_left">
        <img src="/img/ill/special/offer.svg" alt="" />
      </figure>
      <div class="c-special-page__wrap c-special-page__wrap_right">
        <h1 class="c-special-page__title">
          Написание резюме, подготовка к собеседованию?
        </h1>
        <p class="c-special-page__text">
          Если у вас есть какая-то конкретная задача, которая не вписывается в
          рамки обычных занятий языком, напишите об этом нам, и мы придумаем,
          как вам помочь! Написание резюме, подготовка к собеседованию,
          подготовка публичного выступления, презентации, экзаменационных
          речей...
        </p>
        <a href="" @click.prevent="openModal" class="c-special-page__link-out">
          Подробнее
        </a>
        <button @click="openModal" class="c-special-page__btn">
          <span>Заполнить анкету</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SpecialOffer",
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    openModal() {
      this.SHOW_MODAL("special-lesson");
    }
  }
};
</script>

<style lang="scss">
.c-special-page {
  padding-top: rem(10);
  margin: 0 auto;
  max-width: 946px;
  &__header {
    margin-bottom: rem(90);
  }
  &__container {
    @extend %df;
    @extend %jcsb;
    max-width: rem(952);
  }

  &__wrap {
    &_right {
      max-width: rem(431);
    }
  }

  &__title {
    @extend %h2-title-regular;
    color: $black;
    margin-bottom: rem(11);
  }

  &__text {
    @extend %text-middle;
    color: $gray;
    max-width: rem(390);
    line-height: 27.2px;
  }

  &__link-out {
    @extend %dib;
    @extend %text-big;
    color: $green;
    &:hover {
      color: $red;
    }
  }

  &__btn {
    @extend %simple-btn-green;
    width: rem(167);
    margin-top: 37px;
    &:hover {
      @extend %btn-darkgreen;
    }
  }
}
@include bp(1000px) {
  .c-special-page {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    .c-special-page__wrap_right {
      max-width: 360px;
    }
    .c-special-page__header {
      margin-bottom: 80px;
    }
    .c-special-page__container {
      padding-left: 0px;
    }
  }
}
.c-special-page {
  .c-special-page__wrap_right {
    @include bp(850px) {
      max-width: 320px;
    }
    @include bp(825px) {
      max-width: 300px;
    }
  }
}
@include bp(766px) {
  .c-special-page {
    margin-bottom: 50px;
    .c-special-page__container {
      flex-direction: column;
      padding-left: 0px;
      max-width: max-content;
      .c-special-page__wrap {
        max-width: 320px;
      }
    }
  }
}
@include bp(620px) {
  .c-special-page {
    .c-special-page__header {
      margin-bottom: 40px;
    }
    .c-special-page__wrap_left {
      width: 90%;
      height: 82%;
    }
    .c-special-page__title {
      font-size: 22px;
      line-height: 24.84px;
    }
    .c-special-page__text,
    .c-special-page__link-out {
      font-size: 12px;
      line-height: 18.05px;
    }
    button {
      width: 167px;
      height: 35px;
      font-size: 12px;
      margin-top: 35px;
    }
  }
}
@include bp(355px) {
  .c-special-page {
    width: fit-content !important;
    height: fit-content !important;
    padding: 0px 5px;
    .c-special-page__wrap_right {
      width: fit-content !important;
      height: fit-content !important;
    }
  }
}
</style>
