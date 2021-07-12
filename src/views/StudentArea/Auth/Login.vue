<template>
  <div class="v-login">
    <form
      @submit.prevent="onSubmit"
      class="c-login-modal__content v-login__form"
    >
      <h2 class="c-login-modal__title">Вход</h2>
      <BaseInputText
        class="c-login-modal__field"
        icon="email"
        placeholder="Ваша почта"
        v-model="email"
        :error="error_email"
        :error_message="error_message"
      />
      <BaseInputPassword
        class="c-login-modal__field"
        placeholder="Ваш пароль"
        v-model="password"
        :error="error_password"
      />
      <div class="c-login-modal__error">
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
import { mapMutations } from "vuex";

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
    ...mapMutations(["SHOW_MODAL"]),
    checkEmail() {
      this.SHOW_MODAL("check");
    },
    onSubmit() {
      const sendingData = {};
      // console.log(!this.email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i))
      if (
        this.email.length === 0 ||
        !this.email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
      ) {
        this.error_email = true;
        this.error_message = "Некорректный email";
        setTimeout(() => {
          this.error_email = false;
          this.error_message = null;
        }, 2000);
        return;
      } else {
        sendingData.email = this.email;
      }
      if (this.password.length === 0) {
        this.error_password = true;
        setTimeout(() => (this.error_password = false), 2000);
        return;
      } else {
        sendingData.password = this.password;
      }
      // const self = this;
      this.$store
        .dispatch("auth/login", sendingData)
        .then(() => {
          // this.$store.dispatch("hide_show_overlay", false);
          this.$router.push({ path: "/home" });
        })
        .catch(err => {
          this.error_email = true;
          this.error_password = true;
          this.error_login_message =
            "Неправильный логин или пароль, попробуйте еще раз.";
          setTimeout(() => {
            this.error_email = false;
            this.error_password = false;
            this.error_login_message = null;
          }, 3000);
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.v-login {
  padding-top: rem(100);
  &__form {
    margin: 0 auto;
    padding-top: rem(78);
  }
}
.c-login-modal {
  &__error {
    @extend %text-very-small;
    color: $red;
  }

  &__field {
    width: 100%;
    margin-bottom: 13px;
  }

  &__content {
    @extend %df;
    @extend %fdc;
    @extend %jcc;
    @extend %h100;
    width: rem(312);
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
    width: rem(311);
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
      width: rem(311);
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
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
