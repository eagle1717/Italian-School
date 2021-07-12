<template>
  <div class="v-verification">
    <h1 class="v-verification__title">Вы успешно подтвердили почту</h1>
    <p class="v-verification__text">
      Перейдите по ссылке чтобы начать обучение
    </p>

    <template v-if="ready_state === 'ok'">
      <router-link :to="{ name: 'HomePage' }" class="v-verification__link">
        Перейти
      </router-link>
    </template>
    <template v-else>
      <div class="v-verification__link">
        <span> Секундочку... </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Verification",
  data() {
    return {
      ready_state: "no"
    };
  },
  created() {
    console.log(this.$route.params.token);
    this.$store
      .dispatch("auth/verification_email", this.$route.params.token)
      .then(() => {
        this.ready_state = "ok";
        window.reload();
      });
  }
};
</script>

<style lang="scss">
.v-verification {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    @extend %h1-title;
    color: $gray;
    margin-bottom: 20px;
    text-align: center;
  }
  &__text {
    @extend %text-middle;
    color: $gray;
    text-align: center;
    margin-bottom: 20px;
  }
  &__link {
    @extend %simple-btn-green;
    margin: 0 auto;
  }
}
</style>
