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
  margin: 0 auto;
}
.c-setting {
  margin: 0 auto;
  margin-bottom: 91px;
  width: 892px;
  .c-input,
  .c-input-password {
    border-radius: 2px;
    padding-right: 20px;
  }
  @media screen and (max-width: 1310px) {
    width: 100%;
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
    font-family: "Circe-Bold";
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #4b4b4b;
  }
}
@include bp(1360px) {
  .c-setting {
    padding-bottom: 50px;
  }
}
@include bp(1310px) {
  .c-setting {
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    &__container {
      padding: 0;
      margin: 0 auto;
    }
  }
}
@include bp(900px) {
  .c-setting {
    padding: 0 15px !important;
  }
}
@include bp($mobile) {
  .c-setting {
    .c-setting__title {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 25px;
    }
  }
}
</style>
