<template>
  <BaseModal class="c-reservation-lesson-modal__main-modal">
    <div class="c-reservation-lesson-modal">
      <div class="c-reservation-lesson-modal__container">
        <div class="c-reservation-lesson-modal__header">
          <!--          <span class="c-reservation-lesson-modal__close">X</span>-->
          <p class="c-reservation-lesson-modal__title" id="plan-title">
            Запланировать занятие
          </p>
        </div>
        <div class="c-reservation-lesson-modal__teacher">
          <div class="c-reservation-lesson-modal__teacher-credentials">
            <div class="c-reservation-lesson-modal__teacher-avatar">
              <template>
                <img :src="require(`@/assets/${photo}.svg`)" alt="" />
              </template>
            </div>
            <div class="c-reservation-lesson-modal__teacher-name">
              <p v-html="name"></p>
            </div>
          </div>
          <div class="c-reservation-lesson-modal__teacher-time">
            <div class="c-reservation-lesson-modal__teacher-time-wrapper">
              <p class="c-reservation-lesson-modal__teacher-time-title">
                Выбраное время
              </p>
              <div class="c-reservation-lesson-modal__teacher-time-chose">
                <template v-if="time">
                  {{ time.from.time }} - {{ time.to.time }}
                </template>
                <template v-else>-</template>
              </div>
            </div>
            <div class="c-reservation-lesson-modal__teacher-time-wrapper">
              <p class="c-reservation-lesson-modal__teacher-time-title">
                Стоимость:
              </p>
              <p class="c-reservation-lesson-modal__teacher-time-price">
                {{ price }}&nbsp;р.
              </p>
            </div>
          </div>
        </div>
        <div class="c-reservation-lesson-modal__select">
          <div class="c-reservation-lesson-modal__select-type">
            <BaseSelect
              class="c-reservation-lesson-modal__select-item"
              v-model="lessonType"
              :options="typeLesson"
              placeholder="Тип занятия"
            />
          </div>
          <div class="c-reservation-lesson-modal__select-time">
            <BaseSelect
              class="c-reservation-lesson-modal__select-item"
              v-model="activeTime"
              :options="timeTrack"
              placeholder="30 мин."
            />
          </div>
        </div>
        <template v-if="checkMobile">
          <TimeSlider
            class="c-reservation-lesson-modal__time-slider"
            v-model="time"
            :lesson-time="activeTime"
            :reservedTime="reserved_times"
          />
        </template>
        <template v-else>
          <ul class="c-reservation-lesson-modal__list">
            <li
              v-for="(time, index) of mobile_time"
              class="c-reservation-lesson-modal__list-item"
              :key="time"
            >
              <template v-if="mobile_time[index + 1]">
                <button
                  @click="choice_mobile(time, mobile_time[index + 1])"
                  :class="{
                    active:
                      activeMobileTime.from === time &&
                      activeMobileTime.to === mobile_time[index + 1]
                  }"
                  class="c-reservation-lesson-modal__list-btn"
                >
                  {{ time }}
                </button>
              </template>
            </li>
          </ul>
        </template>
        <div class="c-reservation-lesson-modal__ta-wrapper">
          <p>Ваши пожелания:</p>
          <BaseTextArea
            class="c-reservation-lesson-modal__ta"
            v-model="lesson_description"
          />
        </div>
        <div class="c-reservation-lesson-modal__submit">
          <button class="c-reservation-lesson-modal__submit-btn">
            Назначить занятие
          </button>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import TimeSlider from "@/components/TimeSlider";
import BaseSelect from "@/components/Base/BaseSelect";
import BaseTextArea from "@/components/Base/BaseTextArea";
import { curator_mixins } from "@/mixins/mixins.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ReservationLessonModal",
  mixins: [curator_mixins],
  components: { BaseTextArea, BaseSelect, TimeSlider },
  props: {
    day: {
      type: String
    },
    reserved_times: {
      type: Array
    }
  },
  data() {
    return {
      time: null,
      price: 30000,
      typeLesson: [
        {
          val: "firstLesson",
          text: "Разовое занятие"
        },
        {
          val: "classicLesson",
          text: "Классическое занятие"
        },
        {
          val: "talkingLesson",
          text: "Разговорное занятие "
        },
        {
          val: "pronunciationLesson",
          text: "Отработка произношения"
        },
        {
          val: "trialLesson",
          text: "Пробное занятие"
        }
      ],
      photo: "user2",
      name: "Tomothy <br />Murphy",
      lessonType: "firstLesson",
      timeTrack: [
        {
          val: 90,
          text: "90 мин"
        },
        {
          val: 60,
          text: "60 мин"
        },
        {
          val: 45,
          text: "45 мин"
        },
        {
          val: 30,
          text: "30 мин"
        }
      ],
      activeTime: 60,
      lesson_description: "",
      activeMobileTime: {
        from: null,
        to: null
      }
    };
  },
  methods: {
    ...mapActions("user", ["makeCheckoutOneLesson"]),
    choice_mobile(from, to) {
      this.activeMobileTime.from = from;
      this.activeMobileTime.to = to;
      console.log(this.activeMobileTime);
    }
  },
  computed: {
    ...mapGetters("user", ["balance"]),
    ...mapGetters(["lesson_types"]),
    checkMobile() {
      return window.innerWidth > 1100;
    },
    mobile_time() {
      let times = [];
      let started = 0;
      let step = this.activeTime;
      let workTimes = ["9:00", "18:00"];

      // Пока используем генератор
      for (
        let i = +workTimes[0].split(":")[0];
        i < +workTimes[1].split(":")[0] + 1;
        i++
      ) {
        for (; started < 60; started += step) {
          // const started_plus_step = started + step;
          // const time = `${i}:${started === 0 ? '00' : (started < 10 ? '0' + started : started)} -
          //               ${i}:${started_plus_step >= 60 ? '00' : (started_plus_step < 10 ? '0' + started_plus_step : started_plus_step) + 5}`
          // console.log(started_plus_step)
          times.push(
            `${i}:${
              started === 0 ? "00" : started < 10 ? "0" + started : started
            }`
          );
        }
        started = 0;
      }
      return times;
    }
  }
  // created() {
  //   if (window.innerWidth > 1100) {
  //     this.timeTrack.push({
  //       val: 90,
  //       text: "90"
  //     });
  //   }
  // }
};
</script>

<style lang="scss">
.c-reservation-lesson-modal__main-modal {
  width: 859px !important;
  font-family: "Circe-Regular";
  .c-reservation-lesson-modal__select-type {
    .select__options {
      margin-top: 5px;
      padding-left: 20px;
      width: 100.6%;
    }
  }
  .c-reservation-lesson-modal__select-time {
    .select__options {
      width: 100.7%;
      margin-top: 5px;
      padding-left: 20px;
    }
  }
  #plan-title {
    margin-left: 40px;
  }
  .c-time-slider {
    margin-top: 40px;
  }
  .c-time-slider__timeline {
    width: 600px;
  }
  .select__value {
    color: #251c1c;
  }
  .select {
    height: 50px;
  }
  .select__wrap-val {
    padding-top: 15px;
    padding-left: 20px;
  }
}
.c-reservation-lesson-modal {
  margin-top: 46px;
  padding-bottom: 66px;
  &__container {
    width: 678px;
    margin-left: 50px;
  }

  &__header {
    @extend %df;
  }

  &__title {
    @extend %h3-title-bold;
    color: $gray;
    margin-left: 15px;
  }

  &__teacher {
    @extend %df;
    @extend %jcsb;
    padding: 30px;
    background: #f7f7f7;
    margin-top: 32px;
    border-radius: 2px;

    &-name p {
      @extend %h2-title-regular;
      color: $black;
    }

    &-avatar {
      border-radius: 50%;
      margin-right: 27px;
      overflow: hidden;
      width: rem(111);
      height: rem(111);
    }

    &-credentials {
      @extend %df;
      @extend %aic;
      justify-content: flex-start;
      width: 45%;
    }

    &-time {
      @extend %df;
      @extend %aifs;
      @extend %fdc;
      @extend %jcfs;
      width: 40%;

      &-title {
        @extend %text-middle;
        color: $gray;
      }

      &-price {
        color: $green;
        @extend %h3-title-bold;
        margin-top: 4px;
      }

      &-chose {
        @extend %h3-title-bold;
        color: $black;
        margin: 6px 0 12px 0;
      }
    }
  }

  &__select {
    @extend %df;
    @extend %jcsb;
    margin-top: 40px;

    &-type {
      width: 55%;
    }

    &-time {
      width: 41%;
    }

    &-item {
      width: 100%;
    }
  }

  &__time-slider {
    width: 100%;
  }

  &__ta-wrapper {
    margin-top: 40px;
    color: #4b4b4b;
    font-size: 16px;
    line-height: 27px;
  }

  &__ta {
    height: 88px;
    margin-top: 8px;
  }

  &__submit {
    margin-top: 56px;
    &-btn {
      @extend %btn-text;
      @extend %btn-all-green;
      height: 50px;
      width: 175px;
      padding: 0px;
      &:hover {
        @extend %btn-darkgreen;
      }
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    &-btn {
      @extend %btn-text;
      color: $gray;
      margin: rem(5);
      display: block;
      padding: 8px;
      border: 1px solid $gray;
      border-radius: 2px;
      &.active {
        border-color: $green;
        color: $green;
      }
    }
  }
}
@include bp(1360px) {
  .c-reservation-lesson-modal__main-modal {
    overflow-y: scroll;
    padding-bottom: 50px;
  }
}
@include bp(1310px) {
  .c-reservation-lesson-modal {
    &__container {
      max-width: 320px;
      margin: 0 auto;
    }
    &__title {
      margin-left: 0;
    }
    &__teacher {
      padding: 15px;
      flex-direction: column;
      &-credentials {
        width: 100%;
      }
      &-avatar {
        width: 64px;
        height: 64px;
        margin-right: 18px;
      }
      &-name {
        p {
          font-size: rem(22);
          line-height: rem(25);
        }
      }
      &-time {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 18px;
      }
    }
  }
}
</style>
