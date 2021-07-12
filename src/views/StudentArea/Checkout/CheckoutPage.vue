<template>
  <div class="c-checkout">
    <div class="c-checkout__wrap c-checkout__wrap_left">
      <figure class="c-checkout__img">
        <img src="@/assets/img/ill/buy-plan/header-cat.svg" alt="" />
        <img
          :src="
            require(`@/assets/img/packages/${plan[currentIndex].image}.svg`)
          "
          alt=""
          class="packageImg"
        />
      </figure>
      <p class="c-checkout__text">
        {{ plan[currentIndex].description }}
      </p>
      <ul class="c-checkout__adtantages">
        <li
          class="c-checkout__adv-item"
          v-for="itm of plan[currentIndex].benefits"
          :key="itm.id"
        >
          <figure class="c-checkout__adv-img">
            <img src="@/assets/img/ill/notifications/alert-great.svg" alt="" />
          </figure>
          <p class="c-checkout__adv-text">
            {{ itm }}
          </p>
        </li>
      </ul>
      <a :href="plan.link" class="c-checkout__learn-more">
        <span>Подробнее</span>
      </a>
    </div>
    <div class="c-checkout__wrap c-checkout__wrap_right">
      <form class="c-checkout__form" @submit.prevent="onSubmit">
        <div class="c-checkout__form-discount">
          Скидка - {{ plan[currentIndex].discount }}%
        </div>
        <div class="c-checkout__form-small-title">Пакет занятий</div>
        <h1 class="c-checkout__form-title">
          {{ plan[currentIndex].name }}
        </h1>
        <div class="c-checkout__form-wrap">
          <h3 class="c-checkout__form-subtitle">
            Выберете удобную конфигурацию
          </h3>
          <div class="c-checkout__form-select-wrapper">
            <div class="c-checkout__form-wrappers">
              <div
                class="c-checkout__form-select c-checkout__form-select_duration"
              >
                <h4 class="c-checkout__form-select-title">
                  Длительность
                </h4>
                <BaseSelect
                  :placeholder="`${lessonTime[currentIndex].text}`"
                  :options="lessonTime"
                  v-model="currentTime"
                />
              </div>
              <div
                class="c-checkout__form-select c-checkout__form-select_quanity"
              >
                <h4 class="c-checkout__form-select-title">Кол-во занятий</h4>
                <BaseSelect
                  :options="lessonQuant"
                  :placeholder="lessonQuant[currentIndex].text"
                  v-model="currentQuant"
                />
              </div>
            </div>
          </div>
          <div class="c-checkout__form-total">
            <h4 class="c-checkout__form-total-title">К оплате:</h4>
            <p class="c-checkout__form-total-price">30 000 €</p>
          </div>
          <router-link :to="`/purchase/package/${currentPath}/success`">
            <button class="c-checkout__form-btn">
              Выбрать пакет
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTime: 40,
      currentQuant: 15,
      currentPath: "classic",
      currentIndex: null,
      lessonTime: [
        {
          val: "90",
          text: "90 мин"
        },
        {
          val: "45",
          text: "45 мин"
        },
        {
          val: "40",
          text: "40 мин"
        }
      ],
      lessonQuant: [
        {
          val: "10",
          text: "10"
        },
        {
          val: "15",
          text: "15"
        },
        {
          val: "3",
          text: "3"
        }
      ],
      plan: [
        {
          name: "Классические занятия",
          image: "classic",
          discount: 10,
          description:
            "В ходе классических занятий с преподавателем вы будете прорабатывать все аспекты языка: грамматику, разговор, аудирование, письменные задания, перевод. Индивидуальный подход: мы учитываем твои сильные и слабые стороны, подбираем материалы исходя из твоих потребностей и особенностей. По желанию ты можешь управлять процессом обучения: пиши в комментариях, чем бы хотелось позаниматься - так мы подготовимся заранее.",
          benefits: [
            "Полноценное обучение из дома",
            "Гибкий график занятий",
            "Стимул продолжать"
          ]
        },
        {
          name: "Разговорные занятия",
          image: "spoken",
          discount: 10,
          description:
            "Во время разговорных занятий вы только разговариваете с преподавателем и не занимаетесь ничем другим. Он может вас поправлять, давать комментарии по тому, на что следует обратить внимание с точки зрения грамматики или лексики, помочь советом в конце занятия, но основное время будет посвящено разговорной практике. Вы можете выбирать тему сами или просто болтать за жизнь: в любом случае это очень полезно.",
          benefits: [
            "Регулярные разговоры на итальянском",
            "Возможность подстроить график под себя",
            "Из любого места в любое время"
          ]
        },
        {
          name: "Отработка произношения",
          image: "pronounce",
          discount: 10,
          description:
            "Если ты хочешь разговаривать по-итальянски без сильного акцента - обращайтесь к нам. Мы поставим тебе произношение, придадим ему итальянистости, певучести и легкости. Себя будет приятно послушать и будет хотеться чаще говорить.",
          benefits: [
            "Проработка всех нюансов",
            "Работа на результат",
            "Индивидуальный филигранный подход"
          ]
        }
      ]
    };
  },
  mounted() {
    this.currentPath = this.$route.params.id;
    if (this.currentPath === "classic") {
      this.currentIndex = 0;
    } else if (this.currentPath === "spoken") {
      this.currentIndex = 1;
    } else if (this.currentPath === "pronounce") {
      this.currentIndex = 2;
    }
  }
};
</script>
<style lang="scss">
.c-checkout {
  @extend %df;
  @extend %jcsb;
  padding-top: rem(36);
  max-width: rem(922);
  padding-bottom: 50px;
  padding-left: 50px;
  margin-left: 403px;
  .select__value {
    color: $black;
  }
  ul.select {
    width: 141px;
  }
  // .c-checkout__wrap

  &__wrap {
    // .c-checkout__wrap_left

    &_left {
    }

    // .c-checkout__wrap_right

    &_right {
    }
  }

  // .c-checkout__img
  .packageImg {
    margin-top: 8px;
  }
  &__img {
    // @extend %df;
    // @extend %fdc;
    img {
      display: block;
      &:last-child {
        min-width: rem(157);
      }
    }
  }

  // .c-checkout__text

  &__text {
    @extend %text-middle;
    color: $gray;
    margin-top: rem(60);
    max-width: rem(450);
    margin-bottom: rem(13);
  }

  // .c-checkout__adtantages

  &__adtantages {
  }

  // .c-checkout__adv-item

  &__adv-item {
    @extend %df;
    align-items: flex-end;
    margin-bottom: rem(19);
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .c-checkout__adv-img

  &__adv-img {
    width: rem(23);
    height: rem(23);
  }

  // .c-checkout__adv-text

  &__adv-text {
    @extend %text-big;
    color: $green;
    margin-left: rem(8);
  }

  // .c-checkout__learn-more

  &__learn-more {
    @extend %simple-btn-white;
    width: rem(122);
    margin-top: rem(44);
    margin-left: rem(4);
  }

  // .c-checkout__form

  &__form {
    position: relative;
    width: rem(363);
    height: 475px;
    background-color: #f7f7f7;
    border-radius: 2px;
    overflow: hidden;
    padding: rem(44) rem(33) 0 rem(34);
  }

  // .c-checkout__form-discount

  &__form-discount {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 2px 0 0;
    @extend %text-small;
    color: $green;
    border: 1px solid $green;
    padding: rem(6);
  }

  // .c-checkout__form-small-title

  &__form-small-title {
    @extend %text-small;
    color: $gray;
  }

  // .c-checkout__form-title

  &__form-title {
    @extend %h2-title-regular;
    color: $black;
    margin: rem(3) 0 rem(34) 0;
  }

  // .c-checkout__form-wrap

  &__form-wrap {
  }

  // .c-checkout__form-subtitle

  &__form-subtitle {
    @extend %text-middle;
    color: $black;
  }

  // .c-checkout__form-select-wrapper

  &__form-select-wrapper {
    margin: rem(19) 0 0 0;
  }

  // .c-checkout__form-wrappers

  &__form-wrappers {
    @extend %df;
    @extend %jcsb;
    margin-bottom: rem(13);
  }

  // .c-checkout__form-select

  &__form-select {
    // .c-checkout__form-select_duration

    &_duration,
    &_quanity {
      position: relative;
      z-index: 3;
      .select {
        width: 100%;
        height: rem(49);
        &__wrapper,
        &__wrap-val {
          height: inherit;
        }
        &__options {
          width: 101.5%;
        }
      }
    }

    // .c-checkout__form-select_quanity

    &_quanity {
    }

    // .c-checkout__form-select_teacher

    &_teacher {
      .select {
        width: 100%;
        height: rem(49);
        &__wrapper,
        &__wrap-val {
          height: inherit;
        }
        &__options {
          width: 100.6%;
        }
      }
    }
  }

  // .c-checkout__form-select-title

  &__form-select-title {
    @extend %text-small-big-line-height;
    color: $gray;
    margin-bottom: rem(8);
  }

  // .c-checkout__form-total

  &__form-total {
    @extend %df;
    @extend %jcsb;
    align-items: flex-end;
    margin: rem(41) 0 rem(43) 0;
  }

  // .c-checkout__form-total-title

  &__form-total-title {
    @extend %text-big;
    color: $gray;
  }

  // .c-checkout__form-total-price

  &__form-total-price {
    @extend %h3-title-bold;
    color: $green;
  }

  // .c-checkout__form-btn

  &__form-btn {
    @extend %simple-btn-red-fill;
    width: 296px;
    &:hover {
      background-color: #d62a20;
      color: white;
    }
  }
}
@include bp(1100px) {
  .c-checkout {
    max-width: 750px;
    margin: 0 auto;
    padding: 50px 0 0 0;
    &__wrap {
      &_left {
        max-width: 370px;
      }
    }
    &__adv-item {
      align-items: flex-start;
    }
  }
}
@include bp(766px) {
  .c-checkout {
    max-width: 320px;
    margin-bottom: 50px;
    flex-direction: column;
    &__wrap {
      &_left {
        margin-bottom: 50px;
      }
    }
    &__form {
      width: 100%;
      padding: 32px;
      height: auto;
      &-discount {
        font-size: rem(10);
        line-height: rem(10);
        padding: 0;
        width: 77px;
        height: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-title {
        font-size: rem(22);
        line-height: rem(25);
      }
      &-subtitle {
        font-size: rem(12);
        line-height: rem(18);
      }
      &-select {
        &_duration,
        &_quanity {
          .select {
            width: 120px;
          }
        }
        &-title {
          font-size: rem(10);
          line-height: rem(14);
        }
      }
      &-total-title {
        font-size: rem(14);
        line-height: rem(14);
      }
      &-total-price {
        font-size: rem(16);
        line-height: rem(17);
      }
      &-btn {
        width: 100%;
        height: 35px;
        font-size: rem(12);
        line-height: rem(16);
      }
    }
  }
}
</style>
