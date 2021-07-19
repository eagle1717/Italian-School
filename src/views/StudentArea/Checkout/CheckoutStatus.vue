<template>
  <div class="c-purchase-success">
    <div class="entire-purchase-content">
      <figure
        class="c-purchase-success__img"
        :class="{ failedImage: $route.params.status === 'failed' }"
      >
        <img
          :src="
            require(`@/assets/img/ill/buy-plan/${currentInformation.image}`)
          "
          alt=""
        />
      </figure>
      <div class="text-checkout">
        <h1 class="c-purchase-success__title">
          Покупка {{ currentInformation.lesson }} "{{
            currentInformation.lessonName
          }}" {{ currentInformation.statusText }}
        </h1>
        <p
          class="c-purchase-success__text"
          v-html="currentInformation.successText"
        ></p>
        <div
          class="links-next btn-wrapp-result"
          v-if="
            currentInformation.status === 'success' &&
              currentInformation.lesson === 'курса'
          "
        >
          <div>
            <router-link
              :to="{ name: 'HomePage' }"
              class="c-purchase-success__next flex"
            >
              <div>Чат курса</div>
              <div class="arrow-link"><img src="@/assets/leftArrow.svg" /></div>
            </router-link>
          </div>
          <div>
            <router-link
              :to="{ name: 'HomePage' }"
              class="c-purchase-success__next flex"
            >
              <div>Материалы курса</div>
              <div class="arrow-link"><img src="@/assets/leftArrow.svg" /></div>
            </router-link>
          </div>
          <div>
            <router-link
              :to="{ name: 'HomePage' }"
              class="c-purchase-success__next flex"
            >
              <div>Что-то еще для обучения</div>
              <div class="arrow-link"><img src="@/assets/leftArrow.svg" /></div>
            </router-link>
          </div>
        </div>
        <router-link
          class="failed failed-button-wrapper failed btn-wrapp-result btn-height-change"
          to="/home"
          v-else-if="currentInformation.status === 'failed'"
        >
          <span>Повторить попытку</span>
        </router-link>
        <router-link
          class="success-button-package btn-status-wrapper btn-class btn-wrapp-result btn-height-change"
          to="/home"
          v-else-if="
            currentInformation.lesson === 'пакета' &&
              currentInformation.status === 'success'
          "
        >
          <span>Продолжить</span>
        </router-link>
        <router-link
          class="success-button-package btn-webinar-wrapper btn-class btn-wrapp-result btn-height-change"
          to="/home"
          v-else-if="
            currentInformation.lesson === 'вебинара' &&
              currentInformation.status === 'success'
          "
        >
          <span>На страницу вебинара</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutStatus",
  data() {
    return {
      currentInformation: {
        lesson: "",
        status: "",
        successText: "",
        image: "",
        description: "",
        lessonName: "",
        statusText: "прошла успешно!"
      },
      lesson: {
        course: "курса",
        webinar: "вебинара",
        package: "пакета"
      },
      courses: ["Итальянский для чайников"],
      webinars: ["Итальянский для чайников"],
      packages: ["Классический", "Разговорный", "Фонетика"],
      status2: {
        successCourse: {
          text:
            "Вы успешно приобрели курс и теперь вам будут доступны груповые занятия с другими учениками. Присоединяйтесь к груповому чату, там будет много интересного!"
        },
        successWebinar: {
          text:
            "Вы успешно приобрели место в вебинаре! Теперь вы можете наслаждаться обучением итальянского! У вас есть уникальная ссылка, которая благодаря API работает только один раз, не упусти момент!"
        },
        successPacakge: {
          text:
            "Выбери симпатичного тебе преподавателя <br />и удобное время для занятий."
        },
        failed: {
          text:
            "Похоже, во время оплаты возникли технические проблемы. Попробуйте оплатить еще раз или повторите попытку позже."
        }
      }
    };
  },
  mounted() {
    console.log(this.$route.params.lesson);
    this.currentInformation.lesson = this.$route.params.lesson;
    this.currentInformation.status = this.$route.params.status;
    // lesson type
    if (this.currentInformation.lesson === "package") {
      this.currentInformation.lesson = "пакета";
      this.currentInformation.successText = this.status2.successPacakge.text;
      this.currentInformation.lessonName = this.packages[0];
    } else if (this.currentInformation.lesson === "course") {
      this.currentInformation.lesson = "курса";
      this.currentInformation.successText = this.status2.successCourse.text;
      this.currentInformation.lessonName = this.courses[0];
    } else if (this.currentInformation.lesson === "webinar") {
      this.currentInformation.lesson = "вебинара";
      this.currentInformation.successText = this.status2.successWebinar.text;
      this.currentInformation.lessonName = this.webinars[0];
    }
    // status type
    if (this.currentInformation.status === "success") {
      this.currentInformation.image = "buy-success.svg";
      this.currentInformation.statusText = "прошла успешно!";
    } else if (this.currentInformation.status === "failed") {
      this.currentInformation.successText = this.status2.failed.text;
      this.currentInformation.image = "buy-failed.svg";
      this.currentInformation.statusText = "не удалась!";
    }
    // lessonName
  }
};
</script>

<style lang="scss">
.c-purchase-success {
  max-width: 892px;
  margin: 0 auto;
  .c-purchase-success__text {
    margin-top: 23px;
  }
  .links-next {
    margin-top: 20px;
    .c-purchase-success__next div {
      margin-top: 5px;
      font-size: 18px;
      font-family: "Circe-Bold";
      line-height: 27px;
      color: $green;
      @include bp(766px) {
        img {
          width: 15px;
          height: 10px;
        }
      }
      &.flex {
        cursor: pointer;
      }
    }
    .arrow-link {
      margin-left: 10px;
      img {
        margin-top: 5px;
      }
    }
  }
  .entire-purchase-content {
    max-width: 585px;
    width: 100%;
  }
  .btn-class {
    position: absolute;
    @extend %simple-btn-green;
    width: 131px;
  }
  .failed {
    @extend %simple-btn-red-fill;
    position: absolute;
    width: 182px;
    padding: 0px;
    color: white !important;
    &:hover {
      background-color: #d62a20;
      color: white;
    }
  }
  %btnStatus {
    border-radius: 2px;
    padding: 14.5px 20px;
    color: rgba(255, 255, 255, 1);
  }
  .failed-button-wrapper {
    margin-top: 30px;
    color: white !important;
  }
  .btn-status-wrapper {
    margin-top: 46px;
    width: max-content;
  }
  .btn-webinar-wrapper {
    margin-top: 20px;
    width: 200px !important;
    padding: 0px !important;
  }
  .success-button-package {
    @extend %btnStatus;
    background-color: $green;
    &:hover {
      @extend %btn-darkgreen;
    }
  }
  .failed-button-package {
    @extend %btnStatus;
    background-color: $red;
    &:hover {
      &:hover {
        @extend %btn-dark-red;
      }
    }
  }
  margin-top: 61px;
  .c-purchase-success__title {
    font-size: 30px;
    line-height: 34px;
    letter-spacing: 0.03em;
    margin-bottom: 5px;
    margin-top: 37px;
  }
  &__title {
    @extend %h2-title-regular;
    color: $black;
    max-width: rem(468);
    margin-top: rem(54);
    margin-bottom: rem(23);
  }

  &__text {
    @extend %text-middle;
    color: $gray;
  }
  &__next {
    width: max-content;
  }
}
@include bp(1310px) {
  .c-purchase-success {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    // margin-left: 25px;
    // margin-right: 25px;
    max-width: 585px;
    .btn-height-change {
      margin-top: 42px;
    }
  }
  .entire-purchase-content {
    max-width: auto;
    margin: auto;
  }
  .c-purchase-success__img {
    width: max-content;
  }
}
@include bp(766px) {
  .c-purchase-success {
    padding: 0 25px;
  }
}
@include bp(506px) {
  .c-purchase-success {
    .c-purchase-success__text {
      margin-top: 18px;
      width: 100%;
    }
    .entire-purchase-content {
      max-width: 320px;
      width: 100%;
    }
    .text-checkout {
      width: auto;
    }
    // .c-purchase-success__img {
    //   img {
    //     width: 206px;
    //     height: 159px;
    //   }
    // }
    .c-purchase-success__title {
      // font-size: 22px;
      margin-bottom: 18px;
      margin-top: 37px;
      width: auto;
    }
    .btn-wrapp-result {
      margin-top: 30px;
    }
    .btn-height-change {
      width: max-content !important;
      padding: 0 23px !important;
    }
  }
}
</style>
