<template>
  <div class="c-default-navigation">
    <div class="container">
      <div class="c-default-nav">
        <a href="https://studiait.it/" class="c-default-nav__logo" target="_blank">
          <img src="@/assets/logo.svg" alt="Logotype" />
        </a>
        <div
          class="c-default-nav__wrapper"
          v-if="$route.name !== 'Qviz' && $route.name !== 'Verification'"
        >
          <router-link
            class="c-default-nav__login"
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
            class="c-default-nav__reg"
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
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.c-default-nav {
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  padding-top: 16px;
  &__wrapper {
    @extend %df;
  }
  &__login {
    @extend %simple-btn-gray;
    width: 104px;
    height: 45px;
    margin-right: 21px;
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
@include bp(1100px) {
  .c-default-nav {
    &__logo {
      width: 53px;
    }
    &__login {
      width: 100px;
      height: 30px;
      font-size: rem(12);
    }
    &__reg {
      width: 100px;
      height: 30px;
      font-size: rem(12);
    }
  }
}
</style>
