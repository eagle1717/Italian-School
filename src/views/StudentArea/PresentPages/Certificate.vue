<template>
  <div class="c-certificate-page">
    <figure class="c-certificate-page__header">
      <img src="@/assets/img/ill/lavel-page/header.svg" alt="" />
    </figure>
    <div class="c-certificate-page__container">
      <figure class="c-certificate-page__wrap c-certificate-page__wrap_left">
        <img src="@/assets/img/ill/certificate/certificate.svg" alt="" />
      </figure>
      <div class="c-certificate-page__wrap c-certificate-page__wrap_right">
        <h1 class="c-certificate-page__title">Сдать экзамен на сертификат</h1>
        <p class="c-certificate-page__text">
          Если у вас есть какая-то конкретная задача, которая не вписывается в
          рамки обычных занятий языком, напишите об этом нам, и мы придумаем,
          как вам помочь! Написание резюме, подготовка к собеседованию,
          подготовка публичного выступления, презентации, экзаменационных
          речей...
        </p>
        <a href="" class="c-certificate-page__link-out">
          Подробнее
        </a>
        <button @click="openModal" class="c-certificate-page__btn">
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
.c-certificate-page {
  padding-top: rem(10);
  margin: 0 auto;
  width: 946px;
  .c-certificate-page__header {
    max-width: 946px;
  }
  &__header {
    margin-bottom: rem(90);
  }
  &__container {
    @extend %df;
    @extend %jcsb;
    justify-content: space-between;
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
    width: 167px;
    margin-top: 37px;
    &:hover {
      @extend %btn-darkgreen;
    }
  }
}
@include bp(1368px) {
  .c-certificate-page {
    max-width: 920px;
  }
}
@include bp(1310px) {
  .c-certificate-page {
    max-width: 946px;
    margin: auto;
    .c-certificate-page__container {
      padding-left: 0px;
      margin: auto;
      .c-certificate-page__text {
        width: 352px;
      }
    }
  }
}
@include bp(1000px) {
  .c-certificate-page {
    width: 800px;
    .c-certificate-page__wrap_right {
      width: 354px;
      // height: 274px;
    }
    .c-certificate-page__wrap_left {
      width: 371px;
      height: 293px;
    }
    .c-certificate-page__header {
      margin-bottom: 80px;
    }
    .c-certificate-page__container {
      padding-left: 0px;
      width: 750px;
    }
  }
}
@include bp(830px) {
  .c-certificate-page {
    max-width: 100%;
    padding: 0 5px;
    .c-certificate-page__header {
      width: 100%;
    }
  }
}
@include bp(766px) {
  .c-certificate-page {
    .c-certificate-page__container {
      margin-bottom: 50px;
      flex-direction: column;
      padding-left: 0px;
      margin-left: 20px;
      max-width: max-content;
      .c-certificate-page__text {
        margin-top: 13px;
        margin-bottom: 26px;
      }
    }
    &__wrap {
      &_left {
        margin-bottom: 50px;
      }
    }
  }
}
@include bp(620px) {
  .c-certificate-page {
    .c-certificate-page__header {
      margin-bottom: 50px;
    }
    .c-certificate-page__container {
      max-width: 320px;
      .c-certificate-page__wrap_left {
        width: 90%;
        height: 82%;
      }
      .c-certificate-page__title {
        font-size: 22px;
        line-height: 24.84px;
      }
      .c-certificate-page__text {
        font-size: 12px;
        line-height: 18.05px;
        max-width: 100%;
        margin-bottom: 0px;
      }
      .c-certificate-page__link-out {
        width: 202px;
        height: 35px;
        font-size: 12px;
      }
      .c-certificate-page__wrap_right {
        width: 317px;
        height: 245px;
      }
      .c-certificate-page__btn {
        height: 35px;
        font-size: 12px;
        margin-top: 16px;
      }
    }
  }
}
@include bp(355px) {
  .c-certificate-page {
    .c-certificate-page__container {
      margin: 0px 5px;
      max-width: 300px;
    }
    .c-certificate-page__wrap_right {
      max-width: 300px;
    }
  }
}
</style>
