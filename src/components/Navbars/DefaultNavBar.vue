<template>
  <div class="c-default-navigation">
    <div class="container">
      <div class="c-default-nav">
        <a
          href="https://studiait.it/"
          class="c-default-nav__logo"
          target="_blank"
        >
          <img src="@/assets/logo.svg" alt="Logotype" />
        </a>
        <div
          class="c-default-nav__wrapper"
          v-if="$route.name !== 'Qviz' && $route.name !== 'Verification'"
        >
          <router-link
            class="c-default-nav__login navbar-buttons"
            :to="{ name: 'Login' }"
            v-if="
              $route.name === 'Registration' ||
                $route.name === 'PasswordRecovery' ||
                $route.name === 'ResetPassword' ||
                $route.name === 'CheckEmail'
            "
          >
            <span>Войти</span>
          </router-link>
          <router-link
            class="c-default-nav__reg navbar-buttons"
            :to="{ name: 'Registration' }"
            v-if="$route.name === 'Login' || $route.name === 'ResetPassword'"
          >
            <span>Регистрация</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultNavBar"
};
</script>

<style lang="scss">
.c-default-navigation {
  top: 0;
  left: 0;
  width: 100%;
  .c-default-nav {
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    padding-top: 20px;
    @media screen and (max-width: $mobile) {
      padding-top: 14px;
    }
    &__wrapper {
      @extend %df;
    }
    &__login {
      @extend %simple-btn-gray;
      width: 104px;
      height: 45px;
      // margin-right: 21px;
      transition: all 0.5s ease;
      &:hover {
        transition: all 0.5s ease;
      }
    }
    &__reg {
      @extend %simple-btn-green;
      width: 133px;
      height: 45px;
      &:hover {
        @extend %btn-darkgreen;
      }
    }
  }
  .container {
    max-width: 1180px;
    width: 100%;
    .c-default-nav__reg {
      margin-left: 21px;
    }
    @media screen and (max-width: $desktop) {
      padding: 0px 20px;
    }
    @media screen and (max-width: $tablet) {
      padding: 0px 25px;
    }
    @media screen and (max-width: $mobile) {
      padding: 0 20px;
      .c-default-nav__login {
        width: 81px;
      }
      .c-default-nav__reg {
        width: 111px;
        margin-left: 9px;
      }
      .c-default-nav__logo {
        img {
          width: 59.94px;
          height: 30.3px;
        }
      }
      .navbar-buttons {
        height: 30px;
        font-size: 12px;
      }
    }
  }
}
</style>
