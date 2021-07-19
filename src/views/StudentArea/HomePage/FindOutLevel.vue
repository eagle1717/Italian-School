<template>
  <div class="c-level">
    <figure class="c-level__header">
      <img src="@/assets/img/ill/lavel-page/header.svg" alt="" />
    </figure>
    <div class="c-level__wrap">
      <h2 class="c-level__title">
        А ты уже знаешь свой уровень?
      </h2>
      <div class="c-level__wrap-items">
        <div class="c-level__card c-level__card_teacher">
          <figure class="c-level__card-img">
            <img src="@/assets/img/ill/lavel-page/help-teacher.svg" alt="" />
          </figure>
          <h3 class="c-level__card-title">
            Определить с помощью<br />
            преподавателя
          </h3>
          <p class="c-level__text container-text-1">
            Во время пробного занятия преподаватель может определить ваш уровень
            и составить учебный план.
          </p>
          <router-link :to="{ name: 'PromotionLesson' }" class="c-level__link">
            <span>Пробное занятие</span>
          </router-link>
        </div>
        <div class="c-level__card c-level__card_myself">
          <figure class="c-level__card-img">
            <img src="@/assets/img/ill/lavel-page/myself.svg" alt="" />
          </figure>
          <h3 class="c-level__card-title">Да знаю...<br />И выберу сам!</h3>
          <p class="c-level__text c-level__text-2">
            Если вы примерно знаете, какой у вас уровень - выберите его из
            списка. Это ни к чему не обязывает, но облегчит нам подготовку к
            занятию.
          </p>
          <div class="c-level__card-wrapper">
            <div>
              <h4 class="c-level__my">
                Мой уровень:
              </h4>
            </div>
            <div class="flex">
              <div>
                <BaseSelect v-model="selec_current" :options="select_options" />
              </div>
              <div>
                <button class="c-level__btn">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0509 0.23287C14.0211 0.794345 13.3289 2.02516 12.6429 2.95574C12.0067 3.81907 11.3938 4.69965 10.7949 5.58956C9.5396 7.45541 8.3356 9.35722 7.11761 11.2465C6.49851 12.2068 5.87786 13.1655 5.26186 14.1274C4.85898 13.5018 4.45298 12.8746 4.07966 12.2318C3.54766 11.3169 3.12454 10.3441 2.61121 9.42136C1.91433 8.1686 0.0414552 8.77231 0.00256668 10.1314C-0.0378774 11.4905 0.405457 12.7448 0.921897 13.9788C1.41345 15.1534 1.96877 16.3138 2.66254 17.3836C3.51342 18.6974 4.9943 19.4513 6.49695 18.7052C7.67917 18.1172 8.33561 16.8738 9.03094 15.8024C10.4729 13.5769 11.9056 11.345 13.3616 9.1304C14.0584 8.07001 14.7662 7.01746 15.502 5.98522C16.2829 4.89199 17.5117 3.71897 17.9115 2.44431C18.4404 0.752062 16.4851 -0.54913 15.0509 0.23287Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selec_current: "А1",
      select_options: [
        {
          val: "А1",
          text: "А1"
        },
        {
          val: "А2",
          text: "А2"
        },
        {
          val: "B1",
          text: "B1"
        },
        {
          val: "B2",
          text: "B2"
        },
        {
          val: "С1",
          text: "С1"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-level {
  padding-top: rem(10);
  margin: 0 auto;
  max-width: 946px;
  margin-bottom: 100px;
  &__header {
    margin-bottom: rem(80);
    img {
      max-width: 100%;
    }
  }
  &__wrap {
    max-width: rem(742);
  }

  // .c-level__title

  &__title {
    @extend %h2-title-regular;
    color: $black;
    margin-bottom: rem(34);
  }

  // .c-level__wrap-items

  &__wrap-items {
    @extend %df;
    @extend %jcsb;
  }

  // .c-level__card

  &__card {
    max-width: rem(356);
    padding-right: 44px;
    background-color: #f7f7f7;
    padding-left: rem(33);
    padding-top: rem(23);
    padding-bottom: rem(32);
    border-radius: 2px;
    // .c-level__card_teacher
    &:nth-child(2) {
      padding-right: 47px;
    }
  }

  &__card-title {
    @extend %h3-title-bold;
    color: $black;
    margin-top: 16px;
    line-height: 28.78px;
  }
  &__text {
    @extend %text-small-big-line-height;
    color: $gray;
    max-width: rem(276);
    margin-bottom: rem(34);
  }

  &__link {
    @extend %simple-btn-green;
    width: 291px;
    &:hover {
      @extend %btn-darkgreen;
    }
  }

  &__card-wrapper {
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    max-width: rem(262);
    margin-top: rem(-10);
  }

  &__my {
    @extend %btn-text;
    color: $black;
  }
  .select {
    width: rem(78);
    &__options {
      width: 103%;
    }
  }
  &__btn {
    @extend %df;
    @extend %aic;
    @extend %jcc;
    width: rem(35);
    height: rem(35);
    background-color: $green;
    border-radius: 2px;
    border: 1px solid $green;
    margin-left: 10px;
    &:hover {
      @extend %btn-darkgreen;
      svg {
        path {
          fill: $white;
        }
      }
    }
  }
}
@include bp(1368px) {
  .c-level {
    max-width: 920px;
    .c-level__wrap {
      padding-left: 10px;
    }
  }
}
@include bp(1310px) {
  .c-level {
    max-width: 946px;
    margin: auto;
    .c-level__wrap {
      padding-left: 0px;
    }
  }
}
@include bp(1000px) {
  .c-level {
    width: 800px;
    .c-level__header {
      margin-bottom: 80px;
    }
    .c-level__wrap {
      padding-left: 0px;
      width: 750px;
    }
  }
}
// 

@include bp(830px) {
  .c-level {
    max-width: 100%;
    padding: 0 5px;
    .c-level__header {
      width: 100%;
    }
    .c-level__wrap {
      margin-left: 10px;
    }
  }
}
@include bp(766px) {
  .c-level {
    margin-bottom: 50px;
    .c-level__wrap {
      .c-level__wrap-items {
        flex-direction: column;
      }
      padding-left: 0px;
      margin-left: 20px;
      max-width: max-content;
      .c-level__card_myself {
        margin-top: 20px;
      }
    }
  }
}


// 
@include bp(620px) {
  .c-level {
    .select,
    .select__wrap-val,
    .select__wrapper {
      height: 30px;
    }
    .c-level__wrap {
      margin: auto;
    }
    .icon-arrow-down {
      width: 10px;
      height: 8px;
    }
    .c-level__btn {
      height: 30px;
      width: 30px;
      margin-left: 5px;
      svg {
        width: 15px;
        height: 16px;
      }
    }
    .c-level__header {
      margin-bottom: 50px;
    }
    .container-text-1 {
      width: 186px;
    }
    .c-level__wrap {
      max-width: 320px;
      .c-level__wrap-items {
        max-width: 320px;
      }
      .c-level__title {
        font-size: 22px;
        line-height: 24.84px;
        margin-bottom: 24px;
      }
      .select__value {
        font-size: 12px;
      }
      .select__options {
        padding-left: 14px;
        padding-bottom: 7px;
        li {
          margin-bottom: 0px;
        }
        .select__option-btn {
          span {
            font-size: 12px;
          }
        }
      }
      .c-level__card-title {
        font-size: 16px;
        line-height: 16.94px;
      }
      .c-level__text {
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 17px;
        margin-top: 13px;
      }
      .c-level__text-2 {
        margin-bottom: 23px;
      }
      .c-level__my {
        font-size: 14px;
      }
      .c-level__link {
        width: 154px;
        height: 35px;
        span {
          font-size: 12px;
        }
      }
    }
  }
}
@include bp(368px) {
}
@include bp(340px) {
  .c-level {
    width: fit-content !important;
    height: fit-content !important;
    margin: auto;
    .c-level__card,
    .c-level__wrap-items {
      max-width: 100%;
    }
    .c-level__wrap {
      padding: 0px 5px;
    }
  }
}
</style>
