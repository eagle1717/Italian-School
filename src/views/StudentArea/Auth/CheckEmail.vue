<template>
  <div class="c-check-email">
    <div class="c-check-email__content">
      <h2 class="c-check-email__content-tag">Проверьте вашу почту</h2>
      <p class="c-check-email__content-text">
        Для восстановления пароля перейдите по ссылке в письме. <br />
        Если вы не получили наше письмо, проверьте папку «Спам».
      </p>
      <h2 class="c-check-email__content-question">Всё ещё нет?</h2>
      <p class="c-check-email__content-send">
        <a href="#">Отправить повторно</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.c-check-email {
  margin-top: $mt;
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
    max-width: 311px;
    width: 100%;
    margin: auto;

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
    }
  }
  @media screen and (max-width: $mobile) {
    .c-check-email__content {
      max-width: 247px;
      width: 247px;
      &-tag {
        font-size: 22px;
        letter-spacing: 3%;
      }
      &-text,
      &-question,
      &-send {
        font-size: 12px;
      }
      &-question {
        margin-top: 12px;
      }
      &-text {
        line-height: 18.05px;
        width: 229px;
      }
    }
  }
}
</style>
