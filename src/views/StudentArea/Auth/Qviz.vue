<template>
  <div id="enter-content-wrapper">
    <TopNavbar />
    <div class="main">
      <div>
        <div class="container">
          <div class="hello-page__first" v-show="current === 'hello'">
            <div class="hello-page__left">
              <h2>Ciao!<br />Хочешь изучать <br />итальянский язык с нами?</h2>
              <p>Сначала расскажи немного о себе!</p>
              <button class="btn-main-green" @click="next('gender')">
                Вперед!
              </button>
            </div>
            <div class="hello-page__right">
              <img src="/img/ill/quiz/main-ill.svg" alt="" />
            </div>
          </div>
          <div class="hello-page__second" v-show="current === 'gender'">
            <h2>Кто ты?</h2>
            <div class="hello-page__human">
              <div
                class="hello-page__human-item"
                :class="{ active: gender == 'man' }"
                @click="choiceGender('man')"
              >
                <img src="/img/ill/quiz/reg-male.svg" alt="" />
                <img src="/img/ill/quiz/reg-male-hover.svg" alt="" />
                <h3>Мужчина</h3>
              </div>
              <div
                class="hello-page__human-item"
                :class="{ active: gender == 'woman' }"
                @click="choiceGender('woman')"
              >
                <img src="/img/ill/quiz/reg-girl.svg" alt="" />
                <img src="/img/ill/quiz/reg-girl-hover.svg" alt="" />
                <h3>Женщина</h3>
              </div>
              <div
                class="hello-page__human-item"
                :class="{ active: gender == 'cat' }"
                @click="choiceGender('cat')"
              >
                <img src="/img/ill/quiz/reg-cat.svg" alt="" />
                <img src="/img/ill/quiz/reg-cat-hover.svg" alt="" />
                <h3>Кот</h3>
              </div>
            </div>
            <button class="btn-main-green countinue" @click="next('why')">
              Продолжить
            </button>
          </div>
          <div class="hello-page__three" v-show="current === 'why'">
            <div class="hello-page__left">
              <h2>Зачем тебе язык?</h2>
              <ul>
                <li>
                  <label class="hello-page__checkbox">
                    <input
                      type="radio"
                      name="why"
                      v-model="why"
                      checked="checked"
                      value="Хочу общаться с итальянцами"
                    />
                    <div class="hello-page__checkbox-text">
                      Хочу общаться с итальянцами
                    </div>
                  </label>
                </li>
                <li>
                  <label class="hello-page__checkbox">
                    <input
                      type="radio"
                      name="why"
                      v-model="why"
                      value="Нужен по работе"
                    />
                    <div class="hello-page__checkbox-text">Нужен по работе</div>
                  </label>
                </li>
                <li>
                  <label class="hello-page__checkbox">
                    <input
                      type="radio"
                      name="why"
                      v-model="why"
                      value="Хочу говорить по-итальянски в поездках"
                    />
                    <div class="hello-page__checkbox-text">
                      Хочу говорить по-итальянски в поездках
                    </div>
                  </label>
                </li>
                <li>
                  <label class="hello-page__checkbox">
                    <input
                      type="radio"
                      name="why"
                      v-model="why"
                      value="Красивый язык, хочу попробовать поучить"
                    />
                    <div class="hello-page__checkbox-text">
                      Красивый язык, хочу попробовать поучить
                    </div>
                  </label>
                </li>
              </ul>
              <button class="btn-main-green countinue" @click="next('reg')">
                Продолжить
              </button>
            </div>
            <div class="hello-page__right">
              <img src="/img/ill/quiz/language.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/components/Navbars/TopNavbar.vue";
export default {
  components: {
    TopNavbar
  },
  data() {
    return {
      quiz: {},
      why: "Хочу общаться с итальянцами",
      current: "hello",
      gender: "man"
    };
  },
  methods: {
    next(name) {
      if (name === "reg") {
        this.quiz.male = this.gender;
        this.quiz.for_what = this.why;
        this.$store.dispatch("user/set_quiz_data", this.quiz);
        this.$router.push({ name: "Registration" });
      }
      this.current = name;
    },
    choiceGender(gender) {
      this.gender = gender;
    }
  }
};
</script>

<style lang="scss">
#enter-content-wrapper {
  width: 1180px;
  margin: auto;
}
body {
  overflow: visible !important;
}

img {
  max-width: 100%;
}

.main {
  @extend %df;
  @extend %jcc;
  @extend %aic;
  width: 100%;
  margin-top: 58px;
  justify-content: initial !important;
  margin-left: 133px;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: 856px;
}
.btn-main-green {
  @extend %simple-btn-green;
  width: 98px;
  &:hover {
    @extend %btn-darkgreen;
  }
  &.countinue {
    width: 131px;
  }
}
@media (max-width: 1200px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 1023px) {
  .container {
    max-width: 690px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 320px;
  }
}

@media (max-width: 340px) {
  .container {
    max-width: 100%;
    padding: 0 15px;
  }
}

.hello-page__first,
.hello-page__three,
.hello-page__four {
  @extend %df;
  @extend %jcsb;
  @extend %aic;
  width: 100%;
}

.hello-page__left {
  width: 431px;
  margin-right: 130px;
}

.hello-page__first h2 {
  @extend %h2-title-bold;
  margin-bottom: 20px;
}

.hello-page__first p {
  @extend %text-middle;
  margin-bottom: 50px;
}

.hello-page__second {
  @extend %df;
  @extend %fdc;
}

.hello-page__second h2 {
  @extend %h2-title-bold;
  margin-bottom: 15px;
}

.hello-page__human {
  @extend %df;
}

.hello-page__human-item {
  margin-right: 70px;
  width: 120px;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.hello-page__human-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 164px;
  transition: 0.2s all ease;
  opacity: 1;
}

@media (max-width: 1023px) {
  .hello-page__human {
    flex-direction: column;
  }
  .hello-page__human-item {
    margin-right: auto;
    margin-left: auto;
  }
}

.hello-page__human-item img:nth-child(2) {
  opacity: 0;
  transition: 0.2s all ease;
}

.hello-page__human-item {
  h3 {
    cursor: default;
  }
  &:hover,
  &.active {
    h3 {
      color: $green;
    }
    img {
      &:nth-child(1) {
        opacity: 0;
      }
    }
  }
}

.hello-page__human-item {
  &:hover,
  &.active {
    img {
      &:nth-child(2) {
        opacity: 1;
      }
    }
  }
}

.hello-page__human-item h3 {
  @extend %h3-title-bold;
  margin-top: 179px;
  transition: 0.2s all ease;
}

.hello-page__human-item:hover h3 {
  color: $green;
}

.hello-page__three h2 {
  @extend %h2-title-bold;
  margin-bottom: 28px;
}

.hello-page__three ul,
.hello-page__four ul {
  @extend %text-big;
}

.hello-page__checkbox {
}

.hello-page__checkbox input {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
}

.hello-page__checkbox-text {
  position: relative;
  padding: 0 0 0 37px;
  margin-bottom: 27px;
  line-height: 24px;
  background-position: left center;
  background-size: 24px;
  background-repeat: no-repeat;
  transition: 0.15s all ease;
}

.hello-page__checkbox input:checked ~ .hello-page__checkbox-text {
  color: $green;
  background-image: url($img_dir+"ill/notifications/alert-great.svg");
}

.hello-page__three button {
  margin-top: 20px;
}

.hello-page__four h2 {
  @extend %h2-title-bold;
  margin-bottom: 45px;
}

.hello-page__four button {
  margin-top: 33px;
}

@media (max-width: 1023px) {
  .main {
    padding: 50px 0;
  }
  .hello-page__first,
  .hello-page__second,
  .hello-page__three,
  .hello-page__four {
    flex-direction: column;
  }
  .hello-page__left {
    margin-right: 0px;
    margin-bottom: 50px;
  }
}
</style>
