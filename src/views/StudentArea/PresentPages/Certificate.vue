<template>
  <div class="c-special-page">
    <figure class="c-special-page__header">
      <img src="/img/ill/lavel-page/header.svg" alt="" />
    </figure>
    <div class="c-special-page__container">
      <figure class="c-special-page__wrap c-special-page__wrap_left">
        <img src="@/assets/img/ill/certificate/certificate.svg" alt="" />
      </figure>
      <div class="c-special-page__wrap c-special-page__wrap_right">
        <h1 class="c-special-page__title">Сдать экзамен на сертификат</h1>
        <p class="c-special-page__text">
          Если у вас есть какая-то конкретная задача, которая не вписывается в
          рамки обычных занятий языком, напишите об этом нам, и мы придумаем,
          как вам помочь! Написание резюме, подготовка к собеседованию,
          подготовка публичного выступления, презентации, экзаменационных
          речей...
        </p>
        <a href="" class="c-special-page__link-out">
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
  name: "Certificate",
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    openModal() {
      this.SHOW_MODAL("certificate");
    }
  }
};
</script>

<style lang="scss">
.c-special-page {
  padding-left: rem(30);
  padding-top: rem(10);
  margin-left: $ml;
  width: 892px;
  .c-special-page__header {
    width: 946px;
  }

  &__header {
    margin-bottom: rem(90);
  }

  &__container {
    @extend %df;
    @extend %jcsb;
    justify-content: space-between;
  }

  // .c-special-page__wrap

  &__wrap {
    // .c-special-page__wrap_left

    &_left {
      // w
    }

    // .c-special-page__wrap_right
  }

  // .c-special-page__title

  &__title {
    @extend %h2-title-regular;
    color: $black;
    margin-bottom: rem(11);
  }

  // .c-special-page__text

  &__text {
    @extend %text-middle;
    color: $gray;
    max-width: rem(390);
  }

  // .c-special-page__link-out

  &__link-out {
    @extend %dib;
    @extend %text-big;
    color: $green;
    &:hover {
      color: $red;
    }
  }

  // .c-special-page__btn

  &__btn {
    @extend %simple-btn-green;
    width: 167px;
    margin-top: 37px;
    &:hover {
      @extend %btn-darkgreen;
    }
  }
}
@include bp(1360px) {
  .c-special-page {
    padding-right: 30px;
    &__wrap {
      &_left {
        max-width: 340px;
      }
    }
  }
}
@include bp(1100px) {
  .c-special-page {
    padding: 50px 0 50px 0;
    &__container {
      max-width: 750px;
      margin: 0 auto;
    }
    &__wrap {
      &_left {
        width: 290px;
      }
    }
  }
}
@include bp(766px) {
  .c-special-page {
    &__container {
      max-width: 320px;
      flex-direction: column;
    }
    &__wrap {
      &_left {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
