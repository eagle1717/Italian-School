<template>
  <div class="v-login">
    <form class="c-login-modal__content v-login__form">
      <h2 class="c-login-modal__title">Вход</h2>
      <BaseInputText
        class="c-login-modal__field text-field-input"
        icon="email"
        placeholder="Ваша почта"
        :error="error_email"
        :error_message="error_message"
      />
      <BaseInputPassword
        class="c-login-modal__field password-field-prop"
        placeholder="Ваш пароль"
        :error="error_password"
      />
      <div class="c-login-modal__error" v-if="error_password">
        {{ error_login_message }}
      </div>
      <button class="c-login-modal__register-btn">
        Войти
      </button>
      <div class="c-login-modal__social-login">
        <router-link
          :to="{ name: 'PasswordRecovery' }"
          class="c-login-modal__forgot-password"
        >
          Забыли пароль?
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error_email: false,
      error_password: false,
      error_message: null,
      error_login_message: null
    };
  },
  methods: {
    // onSubmit() {
    //   const sendingData = {};
    //   if (
    //     this.email.length === 0 ||
    //     this.email.trim().length === 0 ||
    //     !this.email.match(/^\S+@\S+\.\S+$/)
    //   ) {
    //     this.error_email = true;
    //     this.error_message = "Некорректный email";
    //     setTimeout(() => {
    //       this.error_email = false;
    //       this.error_message = null;
    //     }, 2000);
    //     return;
    //   } else {
    //     sendingData.email = this.email;
    //   }
    //   if (this.password.length === 0) {
    //     this.error_password = true;
    //     setTimeout(() => (this.error_password = false), 2000);
    //     return;
    //   } else {
    //     sendingData.password = this.password;
    //   }
    //   // this.$store
    //   //   .dispatch("auth/login", sendingData)
    //   //   .then(() => {
    //   //     this.$router.push({ path: "/home" });
    //   //   })
    //   //   .catch(err => {
    //   //     this.error_email = true;
    //   //     this.error_password = true;
    //   //     this.error_login_message =
    //   //       "Неправильный логин или пароль, попробуйте еще раз.";
    //   //     setTimeout(() => {
    //   //       this.error_email = false;
    //   //       this.error_password = false;
    //   //       this.error_login_message = null;
    //   //     }, 3000);
    //   //     console.log(err);
    //   //   });
    // }
  }
};
</script>

<style lang="scss">
.v-login {
  margin-top: $mt;
  &__form {
    margin: 0 auto;
  }
}
.c-login-modal {
  &__error {
    @extend %text-very-small;
    color: $red;
    margin-top: 4px;
  }

  &__field {
    width: 100%;
    margin-bottom: 13px;
    &.password-field-prop {
      margin-bottom: 0px;
    }
  }
  &__title {
    @extend %h2-title-regular;
    color: $black;
    margin-bottom: 23px;
  }

  &__subtitle {
    font-size: rem(14);
    line-height: 140%;
    width: rem(309);
    margin-bottom: rem(30);
  }

  &__register-btn {
    @extend %btn-border-green;
    @extend %btn-all-green;
    width: 100%;
    margin-top: rem(34);
    &:hover {
      @extend %btn-darkgreen;
    }
  }

  &__social {
    @extend %empt-btn;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-repeat: no-repeat;

    &-login {
      text-align: center;
      margin-top: 20px;
    }

    &:not(:last-child) {
      margin-right: 11.53px;
    }

    &-tag {
      margin-top: rem(40);
      margin-bottom: rem(10);
      @extend %ls-5;
      @extend %regular;
    }
  }
  &__forgot-password {
    @extend %text-big;
    color: $red;
  }
}
</style>
