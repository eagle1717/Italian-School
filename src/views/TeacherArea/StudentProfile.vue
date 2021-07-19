<template>
  <BaseModal class="c-student-modal-tech__modal">
    <div v-if="user" class="c-student-modal-tech">
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
      <div class="c-student-modal-tech__wrap c-student-modal-tech__wrap_level">
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
        <h2 class="c-student-modal-tech-h2__title">Piano studi livello A1:</h2>
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
.c-student-modal-tech {
  height: max-content;
  @extend %reset-scroll-bar;
  width: rem(677);
  padding: rem(44) 0 rem(50) 0;
  margin-left: rem(65);
  // .c-student-modal-tech__modal
  .c-modal-level__wrap.c-modal-level__wrap_right {
    p {
      text-align: center;
    }
  }
  &__modal {
    width: rem(859) !important;
    overflow-y: scroll;
  }

  // .c-student-modal-tech__wrap

  &__wrap {
    // .c-student-modal-tech__wrap_top

    &_top {
      @extend %df;
      @extend %aic;
      margin-bottom: rem(33);
    }

    // .c-student-modal-tech__wrap_user

    &_user {
      margin-bottom: rem(20);
    }

    // .c-student-modal-tech__wrap_level

    &_level {
      margin-bottom: rem(60);
    }

    // .c-student-modal-tech__wrap_calendar

    &_calendar {
      margin-bottom: rem(60);
      // width: rem(677);
    }

    // .c-student-modal-tech__wrap_lessons

    &_lessons {
    }
  }

  // .c-student-modal-tech__close

  &__close {
    @extend %close-modal-btn;
    margin-right: rem(18);
  }

  // .c-student-modal-tech__title

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
    // max-width: 610px;
    width: 100%;
    .c-calendar-week__wrap {
      min-width: 100%;
      width: 100%;
    }
    .c-calendar-week__item {
      height: rem(85);
    }
  }

  // .c-student-modal-tech__lessons

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

  // .c-student-modal-tech__checkbox

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

  // .c-student-modal-tech__chex-text

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
.c-student-modal {
  // .c-student-modal__history

  &__history {
  }

  // .c-student-modal__history-title

  &__history-title {
  }
}
@include bp(1310px) {
  .c-student-modal-tech__modal {
    width: 100% !important;
  }
  .c-student-modal-tech {
    width: 100%;
    max-width: 576px;
    margin: 0 auto;
    &__close {
      display: none;
    }
    &__calendar {
      .c-calendar-week__item {
        width: 100%;
        height: 75px;
      }
    }
  }
}
@include bp(766px) {
  .c-student-modal-tech {
    max-width: 320px;
    &__calendar {
      .c-calendar-week__item {
        height: 60px;
      }
    }
    &__lessons {
      padding: 15px;
      li {
        margin-bottom: 20px;
        &:after {
          display: none;
        }
      }
    }
    &__check-text {
      font-size: rem(16);
    }
  }
}
</style>
