<template>
  <div id="enter-content-wrapper">
    <!-- <TopNavbar /> -->
    <div class="main">
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
              class="hello-page__human-item cot"
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
          <div class="hello-page__left2">
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
                  <div class="hello-page__checkbox-text last">
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
  max-width: 1180px;
  margin: auto;
}
img {
  max-width: 100%;
}
.main {
  @extend %df;
  @extend %jcc;
  @extend %aic;
  justify-content: initial !important;
  margin-left: 133px;
  margin-bottom: 50px;
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
  .hello-page__first,
  .hello-page__three,
  .hello-page__four {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    width: 100%;
  }
  .hello-page__left {
    max-width: 431px;
    margin-right: 130px;
    @media screen and(max-width:900px) {
      margin-right: 0px;
    }
  }
  .hello-page__first {
    width: 100%;
    max-width: 839px;
    margin-top: 58px;
    h2 {
      @extend %h2-title-bold;
      margin-bottom: 20px;
    }
  }

  .hello-page__first p {
    @extend %text-middle;
    margin-bottom: 50px;
  }

  .hello-page__second {
    @extend %df;
    @extend %fdc;
    width: 100%;
    max-width: 503px;
    margin-top: 91px;
    button {
      margin-top: 25px;
    }
  }

  .hello-page__second {
    h2 {
      @extend %h2-title-bold;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 580px) {
      button {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .hello-page__human {
    @extend %df;
    @media screen and (max-width: 580px) {
      justify-content: center;
    }
  }

  .hello-page__human-item {
    margin-right: 73px;
    text-align: center;
    position: relative;
    width: 120px;
    @media screen and (max-width: 580px) {
      margin-right: 20px !important;
    }
    &.cot {
      margin-right: 0px !important;
    }
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

  .hello-page__three {
    width: 100%;
    max-width: 857px;
    margin-top: 91px;
    h2 {
      @extend %h2-title-bold;
      margin-bottom: 23.5px;
    }
    @media screen and (max-width: 766px) {
      flex-direction: column-reverse;
      .hello-page__left2 {
        margin-top: 80px;
        h2 {
          text-align: center;
        }
        button {
          margin-left: auto;
          margin-right: auto;
        }
      }
      .hello-page__right {
        img {
          height: 236px;
          width: 312px;
        }
      }
    }
    @media screen and (max-width: $mobile) {
      .hello-page__left2 {
        margin-top: 30px;
      }
      button {
        margin-top: 64px !important;
      }
      .hello-page__right {
        img {
          width: 196px;
          height: 148px;
        }
      }
    }
  }

  .hello-page__three ul,
  .hello-page__four ul {
    @extend %text-big;
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
    &.last {
      margin-bottom: 0px;
    }
  }
  .hello-page__checkbox input:checked ~ .hello-page__checkbox-text {
    color: $green;
    background-image: url($img_dir+"ill/notifications/alert-great.svg");
  }
  .hello-page__three button {
    margin-top: 40px;
  }
  .hello-page__four h2 {
    @extend %h2-title-bold;
    margin-bottom: 45px;
  }
  .hello-page__four button {
    margin-top: 33px;
  }
  @media screen and (max-width: 1310px) {
    margin-left: 0px;
    .hello-page__first,
    .hello-page__second,
    .hello-page__three {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
  .hello-page__first,
  .hello-page__three {
    text-align: initial;
  }
  @media screen and (max-width: 830px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @include bp(766px) {
    .hello-page__first {
      flex-direction: column-reverse;
      text-align: center;
      .hello-page__right {
        img {
          width: 287px;
          height: 223px;
        }
      }
      .hello-page__left {
        margin-top: 104px;
        margin-right: 0px;
        button {
          margin: 0 auto;
        }
      }
    }
    .hello-page__second {
      .hello-page__human-item {
        img {
          width: 119px;
          height: 163px;
        }
      }
    }
  }
  @media screen and (max-width: $mobile) {
    margin-left: 20px;
    margin-right: 20px;
    .hello-page__left {
      margin-top: 50px !important;
    }
    .hello-page__first p {
      margin-bottom: 20px;
      .hello-page__left h2 {
        margin-bottom: 10px;
      }
      .hello-page__right {
        img {
          width: 226.4px;
          height: 175.75px;
        }
      }
    }
    .hello-page__second {
      .hello-page__human-item {
        h3 {
          margin-top: 125px;
        }
        img {
          width: 85px;
          height: 114px;
          right: 0;
          left: 0;
          margin: auto;
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    .hello-page__second {
      .hello-page__human-item {
        margin-right: 0px !important;
      }
    }
  }
}
</style>
