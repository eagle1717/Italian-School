<template>
  <div class="v-pass-recovery">
    <form @submit.prevent="onSubmit" class="v-pass-recovery__form">
      <h2 class="v-pass-recovery__title">
        Восстановление пароля
      </h2>
      <div class="v-pass-recovery__input">
        <BaseInputText
          class="v-pass-recovery__field text-field-input"
          icon="email"
          placeholder="Ваша почта"
          v-model="email"
          :error="error_email"
          :error_message="error_message"
        />
      </div>
      <button class="v-pass-recovery__btn">
        <span>Отправить письмо</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PasswordRecovery",
  data() {
    return {
      email: "",
      error_email: false,
      error_message: null
    };
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    onSubmit() {
      const sendingData = {};
      // if (
      //   this.email.length === 0 ||
      //   !this.email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
      // ) {
      //   this.error_email = true;
      //   this.error_message = "Некорректный email";
      //   setTimeout(() => {
      //     this.error_email = false;
      //     this.error_message = null;
      //   }, 2000);
      //   return;
      // }

      // else {
      this.$router.push("/checkemail");
      // }
    }
  }
};
</script>

<style lang="scss">
.v-pass-recovery {
  margin-top: $mt;
  &__form {
    margin: 0 auto;
  }
  &__title {
    @extend %h2-title-regular;
    color: $black;
    margin-bottom: 23px;
  }
  &__input {
    margin-bottom: 34px;
  }
  &__btn {
    @extend %simple-btn-green;
    width: 100%;
    &:hover {
      @extend %btn-darkgreen;
    }
  }
  @media screen and (max-width: $mobile) {
    &__title {
      line-height: 100%;
    }
    &__btn {
      height: 35px;
      padding: 0px;
    }
    .v-pass-recovery__input {
      margin-bottom: 0px;
    }
  }
}
</style>
