<template>
  <div class="c-reset-password">
    <div class="c-reset-password__container c-reset-password__content">
      <div class="c-reset-password__wrapper-form">
        <h2 class="c-reset-password__tag">
          Восстановление пароля
        </h2>
        <form @submit.prevent="onSubmit" class="c-reset-password__form">
          <BaseInputPassword
            class="c-reset-password__form-field text-field-input"
            placeholder="Новый пароль"
            v-model="old_password"
            :error="error_old_pass"
          />
          <BaseInputPassword
            placeholder="Повторите пароль"
            v-model="new_password"
            :error="error_new_pass"
            :showProgress="true"
            :error_message="error_password_message"
          />
          <button class="c-reset-password__save-password">
            Сохранить пароль
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      old_password: null,
      new_password: null,
      error_old_pass: false,
      error_new_pass: false,
      error_password_message: null
    };
  },
  methods: {
    onSubmit() {
      if (this.old_password && this.new_password) {
        if (this.old_password.length === 0 || this.old_password.length < 6) {
          this.error_old_pass = true;
          this.error_password_message =
            "Ненадежный пароль (Используйте символы A-z, 0-9)";
          setTimeout(() => {
            this.error_password = false;
            this.error_password_message = null;
          }, 2000);
          return;
        } else if (this.old_password !== this.new_password) {
          this.error_password_message = "Пароли не совпадают!";
        }
        {
          this.error_old_pass = true;
          this.error_new_pass = true;
          setTimeout(() => {
            this.error_old_pass = false;
            this.error_new_pass = false;
          }, 3000);
          return;
        }
      } else {
        this.error_old_pass = true;
        this.error_new_pass = true;
        setTimeout(() => {
          this.error_old_pass = false;
          this.error_new_pass = false;
        }, 3000);
        return;
      }
      // const sendingData = {
      //   new_password: this.new_password,
      //   remember_token: this.$route.params.token
      // };

      // this.$store.dispatch("auth/reset_password", sendingData);
    }
  }
};
</script>

<style lang="scss">
.c-reset-password {
  margin-top: $mt;
  &__container {
    max-width: rem(1035);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    .c-input-password__field-show-icon {
      position: absolute;
      right: 28.5px;
    }
    .c-input-password {
      border-radius: 2px;
      input {
        &::placeholder {
          letter-spacing: normal;
        }
      }
    }
  }

  &__content {
    margin: 0 auto;
    @extend %df;
    @extend %jcc;
    @extend %fdc;
  }

  &__header {
    padding-top: rem(18);
    &-items {
      @extend %df;
      @extend %jcsb;
    }
  }
  &__form {
    @extend %h100;
    @extend %df;
    @extend %jcc;
    @extend %fdc;
    width: rem(340);
    margin: 0 auto;
    height: auto;
    .c-input-password {
      margin-bottom: 10px !important;
    }
    .c-input-password:nth-child(2) {
      margin-bottom: 0px !important;
    }
    &-field {
      margin-bottom: rem(10);
    }
  }

  &__auth {
    &-login {
      @extend %btn-border-grey;
    }
    &-register {
      @extend %btn-all-green;
      padding: 6px 25px;
      margin-left: rem(15);
    }
  }

  &__save-password {
    @extend %btn-danger;
    width: 100%;
    margin-top: rem(37);
    font-size: 16px;
    &:hover {
      @extend %btn-dark-red;
    }
  }

  &__tag {
    margin-bottom: rem(41);
    @extend %h2-title-regular;
  }
}
</style>
