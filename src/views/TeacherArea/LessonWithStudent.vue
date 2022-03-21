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
              :class="{ confirmed: confirmLesson }"
              @click="confirmLesson = true"
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
              class="m-new-lesson-teacher__btn"
              @click="confirmHomeWork = true"
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
    }
  }
};
</script>
<style lang="scss">
.m-new-lesson-teacher__modal {
  max-width: 859px !important;
  width: 100% !important;
  overflow-y: scroll;
  font-family: "Circe-Regular";
  .c-input-wrapper {
    height: 50px;
    @media screen and (max-width: 620px) {
      height: 35px;
      .c-input {
        height: 35px;
        padding-left: 13px;
        input {
          font-size: 12px;
        }
      }
    }
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
    min-height: 138px;
    padding: 25px 25px 25px 33px;
    button {
      width: 260px;
    }
  }
}
.m-new-lesson-teacher {
  max-width: 678px;
  width: 100%;
  padding: rem(44) 0 rem(50) 0;
  margin: 0 auto;
  @extend %reset-scroll-bar;
  &__wrap {
    &_top {
      @extend %df;
      @extend %aic;
      margin-bottom: rem(32);
      margin-left: 18px;
      @media screen and (max-width: 805px) {
        margin-left: 30px;
      }
    }
    &_user {
      margin-bottom: rem(40);
    }
    .m-new-lesson-teacher__wrap_link-lesson {
      width: 678px;
    }
    &_lesson-type {
      .m-new-lesson-teacher__type-label {
        margin-bottom: 5px;
      }
    }
  }
  &__close {
    @extend %close-modal-btn;
    margin-right: rem(18);
  }
  &__title {
    @extend %h3-title-bold;
    color: $gray;
  }
  &__inp-wrapper {
    margin-bottom: rem(40);
    .m-new-lesson-teacher__wrapper-title {
      margin-bottom: 9px;
    }
  }
  &__wrapper-title {
    @extend %text-middle;
    color: $gray;
  }
  &__inp-flex {
    @extend %df;
    @extend %aic;
  }
  &__input {
    width: rem(371);
  }
  &__homework-link {
    width: 100%;
  }
  &__btn {
    @extend %simple-btn-green;
    width: 100%;
    margin-left: rem(30);
    &.confirmed {
      @extend %simple-btn-green-border;
      width: 100%;
      @media screen and (max-width: 620px) {
        height: 35px;
        font-size: 12px;
      }
      &:hover {
        background-color: transparent;
        color: $green;
        cursor: initial;
      }
    }
  }
  &__type-label {
    @extend %text-middle;
    color: $gray;
  }
  &__type-title {
    @extend %h3-title-bold;
    color: $black;
    margin-bottom: rem(40);
  }
  &__commet-title {
    @extend %text-big;
    color: $black;
    margin-bottom: rem(16);
  }
  &__commet-text {
    @extend %text-small;
    color: $gray;
  }
}
@include bp(766px) {
  .m-new-lesson-teacher__modal {
    overflow-x: scroll;
  }
  .m-new-lesson-teacher {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 40px 50px 0;
    &__inp-flex {
      flex-direction: column;
    }
    .c-input-wrapper,
    .c-input {
      width: 100%;
      max-width: 100%;
    }
    .c-input-wrapper {
      margin-bottom: 10px;
    }
    &__btn {
      margin-left: 0px;
    }
  }
  .c-student-modal {
    min-height: 138px;
    padding: 25px 25px 25px 33px;
    @media screen and (max-width: 766px) {
      padding: 25px 25px 25px 33px !important;
    }
  }
}
@include bp(620px) {
  .c-student-modal {
    padding: 15px 18px 21px !important;
    min-height: min-content;
  }
  .m-new-lesson-teacher__title {
    font-size: 16px;
  }
  .m-new-lesson-teacher__wrap_top {
    margin-bottom: 25px !important;
  }
  .m-new-lesson-teacher__type-label {
    font-size: 12px;
    margin-bottom: 0px !important;
  }
  .m-new-lesson-teacher__type-title {
    font-size: 16px;
    margin-bottom: 30px;
  }
  .m-new-lesson-teacher__commet-title {
    font-size: 14px;
    margin-bottom: 11px;
  }
  .m-new-lesson-teacher__commet-text {
    font-size: 10px;
    line-height: 14px;
  }
  .m-new-lesson-teacher {
    &__btn {
      width: 100%;
      height: 35px;
      font-size: rem(12);
    }
    .m-new-lesson-teacher__wrap {
      margin-bottom: 32px;
    }
  }
  .m-new-lesson-teacher__wrapper-title {
    font-size: 12px;
    margin-bottom: 7px !important;
  }
}
</style>
