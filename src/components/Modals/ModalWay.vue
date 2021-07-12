<template>
  <div class="way-wrapper">
    <div class="img-wrapp">
      <img src="@/assets/Way.svg" />
    </div>
    <div class="way-text">
      <div class="way-text-header">
        Мы уже в пути!
      </div>
      <div class="way-text-paragraph">
        Мы скоро свяжемся с вами и построим ваше специальное занятие для
        достижения ваших целей!
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.way-wrapper {
  $text: #4b4b4b;
  .way-text {
    margin-top: 60px;
    &-header {
      font-size: 20px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0.03em;
      color: $text;
    }
    &-paragraph {
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: $text;
      margin-top: 23px;
    }
  }
}
</style>
