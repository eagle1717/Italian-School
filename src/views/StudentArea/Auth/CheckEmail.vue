<template>
  <div class="c-check-email">
    <div class="c-check-email__content">
      <h2 class="c-check-email__content-tag">Проверьте вашу почту</h2>
      <p class="c-check-email__content-text">
        Для восстановления пароля перейдите по ссылке в письме. <br />
        Если вы не получили наше письмо, проверьте папку «Спам».
      </p>
      <h2 class="c-check-email__content-question">Всё ещё нет?</h2>
      <p class="c-check-email__content-send">Отправить повторно</p>
    </div>
  </div>
</template>

<style lang="scss">
.c-check-email {
  padding: rem(20) rem(116) 0 rem(114);
  height: 70%;

  &__login {
    @extend %df;
    @extend %jcfe;

    &-btn {
      @extend %simple-btn-gray;
      width: rem(133);
      height: rem(45);
    }
  }

  &__content {
    @extend %df;
    @extend %jcc;
    @extend %fdc;
    height: 100%;
    width: rem(309);

    &-tag {
      @extend %h2-title-regular;
      color: $black;
    }

    &-text {
      @extend %text-small-big-line-height;
      color: $gray;
      margin-top: rem(12);
    }

    &-question {
      @extend %text-middle;
      color: $black;
      margin-top: rem(24);
    }

    &-send {
      @extend %text-middle;
      color: $green;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
