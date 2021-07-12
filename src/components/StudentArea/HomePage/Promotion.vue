<template>
  <div class="c-promotion">
    <div class="c-promotion__wrapper">
      <div class="c-promotion__wrapper-item">
        <h2 class="c-promotion__wrapper-item-tag">
          Хочешь узнать, как у нас классно? Пройди пробное занятие
        </h2>
        <router-link
          :to="{ name: 'PromotionLesson' }"
          class="c-promotion__wrapper-item-btn"
          >Вперед!</router-link
        >
      </div>
      <div class="c-promotion__wrapper-item">
        <img
          class="c-promotion__wrapper-item-icon"
          src="/img/ill/try-teacher/header-cat.svg"
          alt="Cat"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promotion"
};
</script>

<style lang="scss">
.c-promotion {
  @extend %df;
  @extend %aic;
  width: rem(430);
  border: 1px solid $gray;
  border-radius: 2px;
  height: rem(150);
  padding: 0 23px 0 33px;
  &__wrapper {
    @extend %df;
    @extend %aic;
    &-item:nth-child(1) {
      width: 80%;
    }

    &-item {
      &-tag {
        @extend %text-big;
        color: $black;
        line-height: 27px;
      }

      &-icon {
        width: rem(80);
        height: rem(104);
      }

      &-btn {
        @extend %simple-btn-red-fill;
        width: 130px;
        height: 35px;
        padding: 0;
        margin-top: 11px;
        &:hover {
          background: #d62a20;
          color: $white;
        }
      }
    }
  }
}
@include bp(1100px) {
  .c-promotion {
    width: calc(100% / 2);
  }
}
@include bp(766px) {
  .c-promotion {
    width: 100%;
    padding-left: 18px;
    &__wrapper-item-tag {
      font-size: rem(14);
    }
    &__wrapper-item-btn {
      width: 116px;
      height: 30px;
      font-size: rem(12);
    }
    &__wrpapper-item-icon {
      width: 53px;
    }
  }
}
</style>
