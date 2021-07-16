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
  width: 946px;

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

    // .c-promotion-page__wrap_right

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
@include bp(1100px) {
  .c-promotion-page {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;

    &__container {
      max-width: 750px;
      margin: 0 auto;
      padding-left: 0;
    }
    &__wrap {
      &_right {
        width: 300px;
      }
    }
  }
}
@include bp(766px) {
  .c-promotion-page {
    margin-bottom: 50px;
    &__container {
      max-width: 320px;
      flex-direction: column;
    }
    &__wrap {
      &_left {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
