<template>
  <BaseModal class="c-student-modal-tech__modal">
    <div class="c-student-modal-tech">
      <div class="entire-modal-content">
        <div class="c-student-modal-tech__wrap c-student-modal-tech__wrap_top">
          <h2 class="c-student-modal-tech__title">Profilo studente</h2>
        </div>
        <div class="c-student-modal-tech__wrap c-student-modal-tech__wrap_user">
          <div class="c-student-modal">
            <div class="c-student-modal__user-data">
              <figure class="c-student-modal__photo">
                <template>
                  <img
                    :src="require(`@/assets/${user.photo}.svg`)"
                    :alt="user.name"
                  />
                </template>
              </figure>
              <h2
                class="c-student-modal__name"
                v-html="user.name + '' + '<br/>' + user.surname"
              ></h2>
            </div>
          </div>
        </div>
        <div
          class="c-student-modal-tech__wrap c-student-modal-tech__wrap_level"
        >
          <ModalUserLevel :level="user.level.val" />
        </div>
        <div
          class="c-student-modal-tech__wrap c-student-modal-tech__wrap_calendar"
        >
          <h2 class="c-student-modal-tech-h2__title">Lezioni:</h2>
          <BaseWeekCalendar
            class="c-student-modal-tech__calendar"
            :lessons="lessons"
            :isModal="true"
          />
        </div>
        <div
          class="c-student-modal-tech__wrap c-student-modal-tech__wrap_lessons"
        >
          <h2 class="c-student-modal-tech-h2__title">
            Piano studi livello A1:
          </h2>
          <ul class="c-student-modal-tech__lessons">
            <li v-for="itm in lessonItems" :key="itm.id">
              <label class="c-student-modal-tech__checkbox">
                <input type="checkbox" :checked="itm.done" />
                <div class="c-student-modal-tech__chex-text">
                  {{ itm.text }}
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div class="c-student-modal__history">
          <h2 class="c-student-modal-tech-h2__title">
            Attività:
          </h2>
          <StudentLessonsHistory
            v-for="itm of history"
            :key="itm.id"
            :iconName="itm.iconName"
            :duration="itm.duration"
            :date="itm.date"
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import StudentModalCard from "@/components/Modals/StudentModalCard.vue";
import ModalUserLevel from "@/components/Modals/ModalUserLevel.vue";
import StudentLessonsHistory from "@/components/StudentLessonsHistory.vue";
export default {
  name: "StudentProfile",
  components: {
    StudentModalCard,
    ModalUserLevel,
    StudentLessonsHistory
  },
  data() {
    return {
      user: {
        id: 234,
        photo: "user2",
        name: "Ника",
        surname: "Ларингова",
        level: {
          val: "A1",
          grammar_percent: 63,
          vocabulary_percent: 20
        }
      },
      lessons: [
        {
          day: "03-17-2020",
          id: 54
        },
        {
          day: "03-22-2020",
          id: 4
        }
      ],
      lessonItems: [
        {
          id: 12,
          done: true,
          text: "Урок номер один. Глаголы, предлоги, артикли и еще много всего!"
        },
        {
          id: 13,
          done: true,
          text: "Урок номер два. Времена и склонения."
        },
        {
          id: 14,
          done: true,
          text: "Урок номер три.  Залоги и предлоги."
        },
        {
          id: 15,
          done: true,
          text: "Урок номер пять. Устоявшиеся предложения."
        },
        {
          id: 16,
          done: false,
          text: "Урок номер шесть. Граматика в диалоге."
        },
        {
          id: 17,
          done: false,
          text: "Урок номер семь. Женский и мужской род."
        },
        {
          id: 18,
          done: false,
          text: "Урок номер шесть. Граматика в диалоге."
        },
        {
          id: 19,
          done: false,
          text: "Урок номер семь. Женский и мужской род."
        }
      ],
      history: [
        {
          id: 23,
          iconName: "classic",
          duration: 90,
          date: "09.11.2020"
        },
        {
          id: 45,
          iconName: "a1",
          duration: null,
          date: "09.11.2020"
        },
        {
          id: 56,
          iconName: "a2",
          duration: null,
          date: "09.11.2020"
        },
        {
          id: 24,
          iconName: "b1",
          duration: null,
          date: "09.11.2020"
        },
        {
          id: 53,
          iconName: "b2",
          duration: null,
          date: "09.11.2020"
        },
        {
          id: 75,
          iconName: "c1",
          duration: null,
          date: "09.11.2020"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 766px) {
  &::-webkit-scrollbar,
  &::-webkit-resizer,
  &::-webkit-scrollbar-button {
    width: 2px !important;
  }
  .c-student-modal-tech__wrap_top {
    margin-left: 20px;
  }
}
.c-student-modal-tech {
  height: max-content;
  @extend %reset-scroll-bar;
  max-width: 678px;
  width: 100%;
  padding: rem(44) 0 rem(50) 0;
  margin: 0 auto;
  overflow-x: hidden !important;
  .entire-modal-content {
    margin: 0 20px;
    @media screen and (max-width:859px) {
      width: 90% !important;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  .select__options {
    width: 102.9%;
  }
  .c-student-modal-tech__lessons {
    margin-bottom: 0px !important;
  }
  .c-student-modal-tech__wrap_lessons {
    margin-bottom: 60px;
  }
  .c-student-modal__user-data {
    margin-bottom: 0px;
  }
  .c-modal-level__wrap.c-modal-level__wrap_right {
    p {
      text-align: center;
    }
  }
  &__modal {
    width: rem(859) !important;
    overflow-y: scroll;
  }

  &__wrap {
    &_top {
      @extend %df;
      @extend %aic;
      margin-bottom: rem(33);
    }
    &_user {
      margin-bottom: rem(20);
    }
    &_level {
      margin-bottom: rem(60);
    }
    &_calendar {
      margin-bottom: rem(60);
    }
  }
  &__close {
    @extend %close-modal-btn;
    margin-right: rem(18);
  }
  &__title {
    @extend %h3-title-bold;
    color: $gray;
    margin-left: 18px;
  }

  &-h2__title {
    @extend %btn-text;
    color: $black;
    font-size: 18px;
    margin-bottom: rem(20);
  }

  &__calendar {
    width: 100%;
    .c-calendar-week__wrap {
      min-width: 100%;
      width: 100%;
    }
    .c-calendar-week__item {
      height: rem(85);
    }
  }
  &__lessons {
    width: 100%;
    max-width: 99%;
    height: rem(365);
    padding: rem(28) 0 rem(25) rem(25);
    border: 1px solid $soft_gray;
    border-radius: 2px;
    overflow-x: auto;
    @extend %reset-scroll-bar;
    margin-bottom: rem(60);
    li {
      position: relative;
      margin-bottom: rem(33);
      &:first-child {
        &::after {
          display: none;
        }
      }
      &:after {
        position: absolute;
        content: "";
        @extend %db;
        width: 1px;
        height: 20px;
        background-color: $green;
        top: -27px;
        left: 13px;
      }
    }
  }
  &__checkbox {
    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 10px 0 0 20px;
      &:checked + .c-student-modal-tech__chex-text:before {
        border-color: $green;
        background-color: $white;
      }
      &:checked + .c-student-modal-tech__chex-text:after {
        opacity: 1;
      }
    }
  }
  &__chex-text {
    position: relative;
    padding: 0 0 0 44px;
    cursor: pointer;
    @extend %text-small-big-line-height;
    color: $gray;
    &:before {
      content: "";
      position: absolute;
      top: -4px;
      left: 0;
      width: rem(27);
      height: rem(27);
      border-radius: 50%;
      border: 1px solid #d8d8d8;
      background-color: #fbfbfb;
    }
    &:after {
      content: "";
      position: absolute;
      left: 8px;
      top: 4px;
      width: 10px;
      height: 11px;
      @extend %bg-reset;
      background-image: url($img_dir+"ill/done-icon.svg");
      opacity: 0;
      transition: all 0.5s ease;
    }
  }
}
@include bp(766px) {
  .c-student-modal-tech__checkbox input {
    width: 17px;
    height: 17px;
    margin: 0px !important;
    top: -4px;
  }
  .c-student-modal-tech__lessons {
    li {
      margin-bottom: 25px;
      // &:last-of-type() {
      //   margin-bottom: 0px;
      // }
    }
  }
  .c-student-modal-tech__wrap_lessons,
  .c-student-modal-tech__wrap_level,
  .c-student-modal-tech__wrap_calendar {
    margin-bottom: 40px !important;
  }
  .c-student-modal-tech__chex-text {
    padding-left: 24px;
  }
  .c-student-modal-tech__lessons li:after {
    height: 12.59px;
    left: 8px;
    top: -23px;
  }
  .c-student-modal-tech__wrap_top {
    margin-bottom: 25px;
  }
  .c-student-modal-tech__chex-text {
    font-size: 10px;
    line-height: 17px !important;
    &::before {
      width: 17px;
      height: 17px;
    }
    &::after {
      height: 6.93px;
      width: 6.3px;
      left: 5.04px;
      top: 2.02px;
    }
  }
  .c-student-modal-tech__modal {
    .c-student-modal__photo {
      width: 64px;
      height: 64px;
    }
    .select {
      height: 52px !important;
    }
    .c-modal-level {
      flex-direction: initial;
    }
    .c-modal-level__progress {
      margin-top: 0px;
    }
    .c-modal-level__wrap-item {
      font-size: 10px;
      text-align: center;
    }
    .c-modal-level__title,
    .c-student-modal-tech-h2__title {
      font-size: 14px;
    }
    .select__option-btn,
    .select__wrap-val {
      img {
        width: 53px;
        height: 23px;
      }
    }
    .select__option {
      margin-bottom: 16px;
    }
    .select {
      width: 115px;
    }
    .donut {
      width: 69px;
      height: 69px;
    }
    .c-modal-level__progress {
      margin-top: 0.5rem;
    }
    .c-circle-progress__percent {
      font-size: 10px;
      left: 48%;
      top: 48%;
    }
    .c-modal-level__wrap_right {
      margin-left: 0px;
    }
    .c-modal-level__progress {
      margin-left: 47px;
    }
    .c-student-modal__name {
      font-size: 22px;
      line-height: 24.84px;
      margin-left: 18px;
    }
    .c-student-modal-tech__title {
      font-size: 16px;
    }
  }
}
@include bp(340px) {
  .c-modal-level__progress {
    margin-left: 20px !important;
  }
}
// @include bp(1310px) {
//   .c-student-modal-tech__modal {
//     width: 100% !important;
//   }
//   .c-student-modal-tech {
//     width: 100%;
//     max-width: 576px;
//     margin: 0 auto;
//     &__close {
//       display: none;
//     }
//     &__calendar {
//       .c-calendar-week__item {
//         width: 100%;
//         height: 75px;
//       }
//     }
//   }
// }
// @include bp(766px) {
//   .c-student-modal-tech {
//     max-width: 320px;
//     &__calendar {
//       .c-calendar-week__item {
//         height: 60px;
//       }
//     }
//     &__lessons {
//       padding: 15px;
//       li {
//         margin-bottom: 20px;
//         &:after {
//           display: none;
//         }
//       }
//     }
//     &__check-text {
//       font-size: rem(16);
//     }
//   }
// }
</style>
