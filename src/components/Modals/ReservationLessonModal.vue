<template>
  <BaseModal class="c-reservation-lesson-modal__main-modal">
    <div class="c-reservation-lesson-modal">
      <div class="c-reservation-lesson-modal__container">
        <div class="c-reservation-lesson-modal__header">
          <p class="c-reservation-lesson-modal__title">Запланировать занятие</p>
        </div>
        <div class="c-reservation-lesson-modal__teacher">
          <div class="c-reservation-lesson-modal__teacher-credentials">
            <div class="c-reservation-lesson-modal__teacher-avatar">
              <template>
                <img
                  :src="require(`@/assets/img/users/photos/${curator.photo}`)"
                  alt=""
                />
              </template>
            </div>
            <div class="c-reservation-lesson-modal__teacher-name">
              <p>{{ curator.name }}</p>
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
                30 000 p.
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
        <div class="one-click-payment">
          <button
            v-for="btn in availableLessons"
            :key="btn.slug"
            @click="reservLesson(btn.id)"
            :disabled="!time"
          >
            <img src="@/assets/img/ill/notifications/alert-great.svg" alt="" />
            {{ btn.name }}
          </button>
        </div>
        <template>
          <TimeSlider
            class="c-reservation-lesson-modal__time-slider"
            v-model="time"
            :lesson-time="activeTime"
            :reservedTime="reserved_times"
          />
        </template>
        <template>
          <ul class="c-reservation-lesson-modal__list">
            <li
              v-for="(time, index) of mobile_time"
              class="c-reservation-lesson-modal__list-item"
              :key="time"
            >
              <!--              <template v-if="mobile_time[index + 1]">-->
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
              <!--              </template>-->
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
          <button
            @click="create_lesson"
            class="c-reservation-lesson-modal__submit-btn"
          >
            Назначить занятие
          </button>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import TimeSlider from "../TimeSlider";
import BaseSelect from "../Base/BaseSelect";
import BaseTextArea from "../Base/BaseTextArea";
import { mapActions } from "vuex";
export default {
  name: "ReservationLessonModal",
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
      lessonType: "firstLesson",
      timeTrack: [
        {
          val: 60,
          text: "60"
        },
        {
          val: 45,
          text: "45"
        },
        {
          val: 30,
          text: "30"
        }
      ],
      activeTime: 60,
      lesson_description: "",
      activeMobileTime: {
        from: null,
        to: null
      },
      time: {
        from: "18:00",
        to: "18:30"
      },
      homework_link: "#",
      lesson_link: "#",
      is_homework_done: true,
      id: 2,
      curator: {
        name: "Tomothy Murphy",
        photo: "user.svg"
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
  created() {
    if (window.innerWidth > 1100) {
      this.timeTrack.push({
        val: 90,
        text: "90"
      });
    }
  }
};
</script>

<style lang="scss">
.c-reservation-lesson-modal {
  margin-top: 46px;
  &__main-modal {
    width: 55vw;
  }
  &__container {
    max-width: 598px;
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
    border-radius: 2px;
    width: 678px;
    height: 171px;
    margin-top: 32px;

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
    margin: 40px 0;
    &-type {
      width: 371px;
    }
    .c-reservation-lesson-modal__select-item {
      height: 55px;
      padding-top: 10px;
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
      padding: 14.5px 20px;
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
@include bp(1100px) {
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
.one-click-payment {
  margin-bottom: 40px;
  margin-top: -20px;
  button {
    margin-right: 15px;
    font-size: rem(16);
    line-height: rem(21);
    border: 1px solid #d8d8d8;
    padding: 15px 7px 15px 53px;
    position: relative;
    border-radius: 2px;
    @extend %btn-text;
    img {
      position: absolute;
      left: 20px;
      height: 23px;
      width: 23px;
    }
    &:hover {
      color: #39b100;
    }
    &:disabled {
      &:hover {
        color: rgba(16, 16, 16, 0.3);
      }
    }
  }
}
</style>
