<template>
  <div>
    <div class="c-setting">
      <div class="c-setting__container">
        <h2 class="c-setting__title c-setting__title1">Настройка профиля</h2>
        <Profile />
        <div class="c-setting__notification">
          <h2 class="c-setting__title c-setting__title2">
            Настройки уведомлений
          </h2>
          <Notification />
        </div>
      </div>
    </div>
    <Toasted
      text="Изменения успешно сохранены."
      typeRequest="warning"
      class="toasted"
    />
  </div>
</template>

<script>
import Profile from "@/components/StudentArea/SettingPage/Profile";
import Notification from "@/components/StudentArea/SettingPage/Notification";
import Toasted from "@/components/Toasted";

export default {
  name: "SettingPage",
  components: {
    Notification,
    Toasted,
    Profile
  }
};
</script>

<style lang="scss">
.toasted {
  margin-left: $ml;
}
.c-setting {
  margin-left: $ml;
  margin-bottom: 91px;
  &__container {
    max-width: rem(892);
    padding-left: 30px;
  }
  &__title1 {
    margin-top: 42px;
    margin-bottom: 34px;
  }
  &__title2 {
    margin-top: 80px;
    margin-bottom: 15px;
  }
  &__title {
    @extend %h2-title-regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #4b4b4b;
  }
}
@include bp(1360px) {
  .c-setting {
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
    &__container {
    }
  }
}
@include bp(1100px) {
  .c-setting {
    padding-bottom: 50px;
    &__container {
      max-width: 750px;
      padding: 0;
      margin: 0 auto;
    }
  }
}
@include bp(766px) {
  .c-setting {
    &__container {
      max-width: 320px;
    }
    &__title {
      font-size: rem(16);
      line-height: rem(16);
    }
  }
}
</style>
