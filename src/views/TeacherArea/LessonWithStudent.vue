<template>
  <BaseModal class="m-new-lesson-teacher__modal">
    <div class="m-new-lesson-teacher">
      <div class="m-new-lesson-teacher__wrap m-new-lesson-teacher__wrap_top">
        <div class="m-new-lesson-teacher__title">Lezione</div>
      </div>
      <div class="m-new-lesson-teacher__wrap m-new-lesson-teacher__wrap_user">
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
            <h2 class="c-student-modal__name">
              {{ user.name }} <br />
              {{ user.surname }}
            </h2>
          </div>
          <template v-if="user.lessonData">
            <ul class="c-student-modal__time">
              <li class="c-student-modal__time-item">
                <h3 class="c-student-modal__time-title">
                  Data:
                </h3>
                <div class="c-student-modal__val">
                  {{ user.lessonData }}
                </div>
              </li>
              <li class="c-student-modal__time-item">
                <h3 class="c-student-modal__time-title">
                  Ora:
                </h3>
                <div class="c-student-modal__val">
                  {{ user.lessonTimeFrom }} - {{ user.lessonTimeTo }}
                </div>
              </li>
            </ul>
          </template>
        </div>
      </div>
      <div
        class="m-new-lesson-teacher__wrap m-new-lesson-teacher__wrap_link-lesson"
      >
        <div class="m-new-lesson-teacher__inp-wrapper">
          <h3 class="m-new-lesson-teacher__wrapper-title">Link:</h3>
          <div class="m-new-lesson-teacher__inp-flex">
            <BaseInputText
              class="m-new-lesson-teacher__input"
              placeholder="Link"
              v-model="lessonLink"
              :isLinkInput="true"
              :error="error_lesson"
              :error_message="error_lesson_message"
            />
            <button
              class="m-new-lesson-teacher__btn"
              @click="confirmedLesson"
              :class="{ confirmed: confirmLesson }"
            >
              <span>
                {{
                  confirmLesson ? "Lezione confermata" : "Conferma la lezione"
                }}
              </span>
            </button>
          </div>
        </div>
        <div class="m-new-lesson-teacher__inp-wrapper">
          <h3 class="m-new-lesson-teacher__wrapper-title">
            Link al compito:
          </h3>
          <div class="m-new-lesson-teacher__inp-flex">
            <BaseInputText
              placeholder="Inserisci link al compito"
              v-model="homeworkLink"
              :isLinkInput="true"
              class="m-new-lesson-teacher__input"
              :error="error_homework"
              :error_message="error_homework_message"
            />
            <button
              @click="confirmedHomeWork"
              class="m-new-lesson-teacher__btn"
              :class="{ confirmed: confirmHomeWork }"
            >
              <span>{{
                confirmHomeWork ? "Conferma" : "Correggere compito"
              }}</span>
            </button>
          </div>
        </div>
        <div
          class="m-new-lesson-teacher__wrap m-new-lesson-teacher__wrap_lesson-type"
        >
          <h4 class="m-new-lesson-teacher__type-label">Tipo di lezione:</h4>
          <h3 class="m-new-lesson-teacher__type-title">
            {{ user.lesson_type }}
          </h3>
          <h4 class="m-new-lesson-teacher__commet-title">
            Commento dello studente:
          </h4>
          <p class="m-new-lesson-teacher__commet-text">
            {{ user.lesson_comment }}
          </p>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      confirmLesson: false,
      confirmHomeWork: false,
      lessonLink: "",
      homeworkLink: "",
      error_lesson: false,
      error_homework: false,
      error_lesson_message: "",
      error_homework_message: "",
      user: {
        id: 234,
        photo: "user2",
        name: "Ника",
        surname: "Ларингова",
        lessonData: "24 marzo",
        lessonTimeFrom: "9:35",
        lessonTimeTo: "10:35",
        lesson_type: "Pronuncia",
        lesson_comment:
          "Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов.Добрый вечер, на нашем с вами уроке, я бы хотела попрактиковать усную речь и виды глаголов."
      }
    };
  },
  methods: {
    ...mapMutations(["HIDE_MODAL"]),
    hideModal() {
      this.HIDE_MODAL();
    },
    confirmedLesson() {
      if (this.confirmLesson.length > 0 && this.confirmLesson) {
        this.confirmLesson = true;
      } else {
        this.error_lesson = true;
        this.error_lesson_message = "Inserisci link alla lezione!";
      }
    },
    confirmedHomeWork() {
      if (this.confirmHomeWork) {
        this.confirmHomeWork = true;
      } else {
        this.error_homework = true;
        this.error_homework_message = "Aggiungi link al compito!";
      }
    }
  }
};
</script>
<style lang="scss">
.m-new-lesson-teacher__modal {
  width: rem(859) !important;
  overflow-y: scroll;
  .c-input-wrapper {
    height: 50px;
  }
  .c-input {
    border-radius: 2px !important;
    width: 371px;
    padding: 0 23px 0 23px;
    input {
      padding-left: 0px;
      &::placeholder {
        color: #d8d8d8;
      }
    }
  }
  .c-input__notifer {
    text-align: left;
    margin-left: 11px;
    font-weight: 350;
  }
  .c-student-modal {
    height: 138px;
    padding: 25px 25px 25px 33px;
    button {
      width: 260px;
    }
  }
}
.m-new-lesson-teacher {
  width: 678px;
  padding: rem(44) 0 rem(50) 0;
  margin: 0 auto;
  @extend %reset-scroll-bar;
  // .m-new-lesson-teacher__wrap
  &__wrap {
    // .m-new-lesson-teacher__wrap_top

    &_top {
      @extend %df;
      @extend %aic;
      margin-bottom: rem(32);
      margin-left: 18px;
    }

    // .m-new-lesson-teacher__wrap_user

    &_user {
      margin-bottom: rem(40);
    }

    .m-new-lesson-teacher__wrap_link-lesson {
      width: 678px;
    }

    &_link-lesson {
    }

    // .m-new-lesson-teacher__wrap_lesson-type

    &_lesson-type {
      .m-new-lesson-teacher__type-label {
        margin-bottom: 5px;
      }
    }
  }

  // .m-new-lesson-teacher__close

  &__close {
    @extend %close-modal-btn;
    margin-right: rem(18);
  }

  // .m-new-lesson-teacher__title

  &__title {
    @extend %h3-title-bold;
    color: $gray;
  }

  // .m-new-lesson-teacher__inp-wrapper

  &__inp-wrapper {
    margin-bottom: rem(40);
    .m-new-lesson-teacher__wrapper-title {
      margin-bottom: 9px;
    }
  }

  // .m-new-lesson-teacher__wrapper-title

  &__wrapper-title {
    @extend %text-middle;
    color: $gray;
  }

  // .m-new-lesson-teacher__inp-flex

  &__inp-flex {
    @extend %df;
    @extend %aic;
  }

  // .m-new-lesson-teacher__input

  &__input {
    width: rem(371);
  }

  // .m-new-lesson-teacher__homework-link

  &__homework-link {
    width: 100%;
  }

  // .m-new-lesson-teacher__btn

  &__btn {
    @extend %simple-btn-green;
    width: 100%;
    margin-left: rem(30);
    &.confirmed {
      @extend %simple-btn-green-border;
      width: 100%;
      &:hover {
        background-color: transparent;
        color: $green;
        cursor: initial;
      }
    }
  }

  // .m-new-lesson-teacher__type-label

  &__type-label {
    @extend %text-middle;
    color: $gray;
  }

  // .m-new-lesson-teacher__type-title

  &__type-title {
    @extend %h3-title-bold;
    color: $black;
    margin-bottom: rem(40);
  }

  // .m-new-lesson-teacher__commet-title

  &__commet-title {
    @extend %text-big;
    color: $black;
    margin-bottom: rem(16);
  }

  // .m-new-lesson-teacher__commet-text

  &__commet-text {
    @extend %text-small;
    color: $gray;
  }
}
@include bp(1360px) {
}
@include bp(1100px) {
  .m-new-lesson-teacher__modal {
    width: 100% !important;
  }
  .m-new-lesson-teacher {
    &__close {
      display: none;
    }
  }
}
@include bp(766px) {
  .m-new-lesson-teacher__modal {
    overflow-x: scroll;
  }
  .m-new-lesson-teacher {
    max-width: 320px;
    margin: 0 auto;
    padding: 40px 0 0 0;
    &__inp-flex {
      flex-direction: column;
    }
    &__input {
      width: 100%;
    }
    &__btn {
      width: 100%;
      height: 35px;
      font-size: rem(12);
      margin: 15px 0 0 0;
    }
  }
}
</style>
