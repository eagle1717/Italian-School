<template>
  <div class="c-promotion-page">
    <figure class="c-promotion-page__header">
      <img src="/img/ill/try-teacher/header.svg" alt="" />
    </figure>
    <div class="c-promotion-page__container">
      <div class="c-promotion-page__wrap c-promotion-page__wrap_left">
        <h1 class="c-promotion-page__title">
          Пробное занятие <br />с преподователем
        </h1>
        <p class="c-promotion-page__text">
          Пробное занятие - это 15 минут общения с нашим преподавателем.
          Поговорить, определить свой уровень, присмотреться к преподавателю,
          потихоньку влиться в процесс... почему бы и да!
        </p>
        <router-link :to="{ name: 'Teachers' }" class="c-promotion-page__link">
          <span>Выбрать преподователя</span>
        </router-link>
      </div>
      <figure class="c-promotion-page__wrap c-promotion-page__wrap_right">
        <img src="/img/ill/buy-plan/buy-success.svg" alt="Illustration" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionLesson"
};
</script>

<style lang="scss">
.c-promotion-page {
  padding-top: rem(10);
  margin: 0 auto;
  max-width: 946px;
  &__header {
    margin-bottom: rem(83);
  }

  &__container {
    @extend %df;
    @extend %jcsb;
    padding-left: rem(35);
    max-width: rem(859);
  }

  // .c-promotion-page__wrap

  &__wrap {
    // .c-promotion-page__wrap_left

    &_left {
      max-width: rem(390);
    }

    &_right {
      width: rem(381);
    }
  }

  // .c-promotion-page__title

  &__title {
    @extend %h2-title-regular;
    color: $black;
  }

  // .c-promotion-page__text

  &__text {
    @extend %text-middle;
    color: $gray;
    margin-top: rem(23);
    margin-bottom: rem(45);
  }

  // .c-promotion-page__link

  &__link {
    @extend %simple-btn-green;
    width: rem(211);
    &:hover {
      @extend %btn-darkgreen;
    }
  }
}
@include bp(1368px) {
  .c-promotion-page {
    max-width: 920px;
  }
}
@include bp(1310px) {
  .c-promotion-page {
    max-width: 946px;
    margin: auto;
    .c-promotion-page__container {
      padding-left: 0px;
      margin: auto;
      .c-promotion-page__text {
        width: 352px;
      }
    }
  }
}
@include bp(1000px) {
  .c-promotion-page {
    width: 800px;
    .c-promotion-page__wrap_right {
      width: 354px;
      height: 274px;
    }
    .c-promotion-page__header {
      margin-bottom: 80px;
    }
    .c-promotion-page__container {
      padding-left: 0px;
      width: 750px;
    }
  }
}
@include bp(830px) {
  .c-promotion-page {
    max-width: 100%;
    padding: 0 5px;
    .c-promotion-page__header {
      width: 100%;
    }
  }
}
@include bp(766px) {
  .c-promotion-page {
    margin-bottom: 50px;
    .c-promotion-page__container {
      flex-direction: column;
      padding-left: 0px;
      margin-left: 20px;
      max-width: max-content;
      .c-promotion-page__text {
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
  .c-promotion-page {
    .c-promotion-page__header {
      margin-bottom: 50px;
    }
    .c-promotion-page__container {
      max-width: 320px;
      .c-promotion-page__title {
        font-size: 22px;
        line-height: 24.84px;
      }
      .c-promotion-page__text {
        font-size: 12px;
        line-height: 18.05px;
        max-width: 100%;
      }
      .c-promotion-page__link {
        width: 202px;
        height: 35px;
        font-size: 12px;
      }
      .c-promotion-page__wrap_right {
        width: 317px;
        height: 245px;
      }
    }
  }
}
@include bp(355px) {
  .c-promotion-page {
    width: fit-content !important;
    height: fit-content !important;
    .c-promotion-page__container {
      margin: 0px 5px;
    }
    .c-promotion-page__wrap_right {
      width: fit-content !important;
      height: fit-content !important;
    }
  }
}
</style>
