<template>
  <div class="c-setting-notification flex justify-between">
    <div class="c-setting-notification__wrap-icon">
      <img src="/img/ill/notification-settings.svg" alt="cat-icon" />
    </div>
    <div class="c-setting-notification__notification">
      <div class="c-setting-notification__wrap-switch">
        <p class="c-setting-notification__title">Уведомления о занятиях</p>
        <BaseSwitch />
      </div>
      <div class="c-setting-notification__wrap-switch">
        <p class="c-setting-notification__title">Еженедельная рассылка</p>
        <BaseSwitch />
      </div>
      <div class="c-setting-notification__wrap-switch">
        <p class="c-setting-notification__title">Уведомления о новостях</p>
        <BaseSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSwitch from "@/components/Base/BaseSwitch";
export default {
  name: "Notification",
  components: { BaseSwitch }
};
</script>

<style lang="scss">
.c-setting-notification {
  background: #f7f7f7;
  padding-top: 38px;
  padding-bottom: 48px;
  padding-left: 33px;
  padding-right: 80px;
  width: 892px;
  border-radius: 2px;
  @extend %df;
  @extend %jcsb;
  @extend %aic;

  &__title {
    @extend %text-big;
    padding-top: 6px;
  }

  &__notification {
    margin-top: 6px;
    width: 351px;
  }

  &__wrap-switch {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    height: 32px;
    margin-bottom: 18px;
    &:nth-child(3) {
      margin-bottom: 0px;
    }
  }
}
@include bp(766px) {
  .c-setting-notification {
    padding: 36px 30px;
    flex-direction: column;
    &__wrap-icon {
      width: 262px;
    }
    &__notification {
      order: -1;
      width: 100%;
      margin-bottom: 30px;
    }
    &__title {
      font-size: rem(14);
      line-height: rem(14);
    }
    &__wrap-switch {
      width: 100%;
    }
  }
}
</style>
