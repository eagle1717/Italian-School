<template>
  <div class="v-registration">
    <form class="c-register-modal__content v-registration__form">
      <h2 class="c-register-modal__title">Быстрая регистрация</h2>
      <p class="c-register-modal__subtitle">
        Для доступа к функциям личного кабинета необходимо зарегистрироваться.
      </p>
      <BaseInputText
        class="c-register-modal__field text-field-input"
        id="user-fill"
        icon="user"
        placeholder="Ваше имя"
        :error="error_name"
      />
      <BaseInputText
        class="c-register-modal__field text-field-input"
        icon="email"
        placeholder="Ваша почта"
        :error="error_email"
        :error_message="error_email_message"
      />
      <BaseInputPassword
        class="c-register-modal__field"
        placeholder="Придумайте пароль"
        :showProgress="true"
        :error="error_password"
        :error_message="error_password_message"
      />
      <button class="c-register-modal__register-btn">
        <span>Зарегистрироваться</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      first_name: "",
      email: "",
      password: "",
      error_name: false,
      error_email: false,
      error_password: false,
      error_email_message: null,
      error_password_message: null
    };
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"])
    // onSubmit() {
    //   const registerData = {
    //     ...(this.$store.getters["user/quiz"] &&
    //       Object.keys(this.$store.getters["user/quiz"]).length > 0 && {
    //         ...this.$store.getters["user/quiz"]
    //       })
    //   };
    //   if (this.first_name.length === 0) {
    //     this.error_name = true;
    //     setTimeout(() => (this.error_name = false), 2000);
    //     return;
    //   } else {
    //     registerData.first_name = this.first_name;
    //   }
    //   if (
    //     this.email.trim().length === 0 ||
    //     !this.email.match(/^\S+@\S+\.\S+$/)
    //   ) {
    //     this.error_email = true;
    //     this.error_email_message = "Некорректный email";
    //     setTimeout(() => {
    //       this.error_email = false;
    //       this.error_email_message = null;
    //     }, 2000);
    //     return;
    //   } else {
    //     registerData.email = this.email;
    //   }
    //   if (this.password.length === 0 || this.password.length < 6) {
    //     this.error_password = true;
    //     this.error_password_message =
    //       "Ненадежный пароль (Используйте символы A-z, 0-9)";
    //     setTimeout(() => {
    //       this.error_password = false;
    //       this.error_password_message = null;
    //     }, 2000);
    //     return;
    //   } else {
    //     registerData.password = this.password;
    //   }
    //   this.$store
    //     .dispatch("auth/register", registerData)
    //     .then(() => {
    //       this.SHOW_MODAL("check");
    //       this.$router.push({ name: "ConfirmRegistration" });
    //     })
    //     .catch(statusCode => {
    //       if (statusCode === 422) {
    //         this.error_email = true;
    //         this.error_email_message =
    //           "На эту почту уже зарегистрирован аккаунт";
    //         setTimeout(() => {
    //           this.error_email = false;
    //           this.error_email_message = null;
    //         }, 3000);
    //       }
    //     });
    // }
  }
};
</script>

<style lang="scss">
.v-registration {
  @extend %df;
  @extend %jcc;
  margin-top: $mt;
}
.c-register-modal__field.text-field-input#user-fill {
  .c-input__field {
    padding-left: 5px;
    @media screen and (max-width: $mobile) {
      padding-left: 10px !important;
    }
  }
}
.c-register-modal {
  &__field {
    width: 100%;
    margin-bottom: 13px;
  }
  &__content {
    @extend %df;
    @extend %fdc;
    // @extend %jcc;
    @extend %h100;
    &.v-registration {
      &__from {
        margin: 0 auto;
      }
    }
  }

  &__title {
    @extend %h2-title-regular;
    color: $black;
  }

  &__subtitle {
    @extend %text-small-big-line-height;
    color: $black;
    max-width: 100%;
    margin: rem(5) 0 rem(30) 0;
    @media screen and (max-width: $mobile) {
      margin-bottom: 26px;
    }
  }

  &__register-btn {
    @extend %btn-border-green;
    @extend %btn-all-green;
    width: 100%;
    margin-top: 34px;
    &:hover {
      @extend %btn-darkgreen;
    }
    @media screen and (max-width: $mobile) {
      margin-bottom: 22px;
      height: 35px;
      padding: 0px !important;
    }
  }
}
</style>
