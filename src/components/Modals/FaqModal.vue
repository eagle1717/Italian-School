<template>
  <BaseModal class="modal-faqq">
    <div class="c-faq-modal">
      <div class="c-faq-modal__container">
        <div class="c-faq-modal__content">
          <h2 class="c-faq-modal__title">Напишите нам!</h2>
          <p class="c-faq-modal__description">
            Мы постоянно совершенствуем нашу школу и хотим, чтобы она была
            удобной, а обучение эффективным. Присылайте нам свои отзывы,
            замечания, комментарии и пожелания. Хорошие тоже можно!
          </p>
          <form class="c-faq-modal__form">
            <BaseInputText
              class="nazvaniye"
              placeholder="Название"
              :error="error_name"
            />
            <BaseSelect
              class="c-faq-modal__select"
              :options="options"
              :placeholder="`${options[0].text}`"
              v-model="currentText"
              :error="error_type"
            />
            <div class="c-faq-modal__form-ta">
              <BaseTextArea
                class="text-area"
                placeholder="Ваш вопрос?..."
                :error="error_question"
              />
            </div>
            <button class="c-faq-modal__form-submit">
              Задать вопрос в поддержку
            </button>
          </form>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseInputText from "../Base/BaseInputText";
import BaseSelect from "../Base/BaseSelect";
import BaseTextArea from "../Base/BaseTextArea";

export default {
  name: "FaqModal",
  components: { BaseTextArea, BaseSelect, BaseInputText },
  data() {
    return {
      options: [
        {
          val: "error",
          text: "Сообщить об ошибке"
        },
        {
          val: "pay",
          text: "Оплата"
        },
        {
          val: "review",
          text: "Отзыв"
        },
        {
          val: "problem",
          text: "У меня проблема"
        }
      ],
      currentText: "af",
      error_name: false,
      error_type: false,
      error_question: false
    };
  }
};
</script>

<style lang="scss">
.modal-faqq {
  width: 705px !important;
  @media screen and (max-width: 766px) {
    max-width: 100vw !important;
  }
}
.c-faq-modal {
  max-width: 414px;
  width: 100%;
  margin-left: 0px;
  margin-left: 60px;
  padding-left: 0px !important;
  padding-right: 0px !important;
  @media screen and (max-width: 766px) {
    margin: 0 auto;
    padding-left: 0px !important;
  }
  @media screen and (max-width: 620px) {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }
  .select__wrap-val {
    padding-left: 20px;
  }
  .c-input {
    border-radius: 2px !important;
    padding-right: 20px;
    @media screen and (max-width: 620px) {
      padding-right: 14px;
    }
  }
  .c-input {
    max-width: 100%;
  }
}
.c-faq-modal {
  @extend %pagept;
  .nazvaniye {
    border-radius: 2px;
    input {
      padding-left: 0px;
    }
  }
  .select__options {
    width: 100.5%;
    padding-left: 20px;
    @media screen and (max-width: 620px) {
      padding-left: 14px;
      padding-top: 0px;
      width: 100.7%;
    }
  }
  &__title {
    @extend %h2-title-regular;
    margin-bottom: 9px;
    color: $black;
    line-height: 44px;
  }
  .c-faq-modal__form-ta {
    @media screen and (max-width: 620px) {
      height: 86px !important;
    }
  }
  .text-area {
    textarea {
      padding-left: 20px;
      padding-top: 15px;
    }
  }
  &__description {
    @extend %text-middle;
    margin-bottom: 30px;
    color: $gray;
    @media screen and (max-width: 620px) {
      max-width: 90%;
    }
  }
  .c-input {
    width: 100%;
  }
  &__form {
    max-width: 392px;
    width: 100%;
    @media screen and (max-width: 620px) {
      max-width: 100%;
    }
    &-ta {
      height: 157px;
    }

    &-submit {
      @extend %btn-all-green;
      width: 100%;
      margin-top: 44px;
      &:hover {
        @extend %btn-darkgreen;
      }
    }
  }

  &__select {
    width: 100%;
    height: 49px;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    margin: 13px 0;
    @media screen and (max-width: 620px) {
      margin: 10px 0px;
    }
    .select__value {
      color: #251c1c;
    }

    li {
      width: 100%;
    }
  }

  &__container {
    @extend %m0a;
    margin-top: 20px;
  }
  &__content {
    padding-top: 5px;
  }
}
@include bp(1310px) {
  .c-faq-modal {
    padding: 35px;
    height: 100vh;
    &__container {
      margin-left: 0;
      max-width: 100%;
    }
    &__content {
      max-width: 412px;
      width: 100%;
      margin: 0 auto;
      margin-top: 30px;
      padding: 0;
    }
  }
}
@include bp(620px) {
  .c-faq-modal {
    &__title {
      font-size: rem(22);
      margin-bottom: 0px;
    }
    .select__wrap-val svg {
      width: 9px;
      height: 8px;
    }
    &__description {
      width: 100%;
      font-size: rem(12);
      line-height: rem(18);
      margin-bottom: 23px;
    }
    .c-input,
    .select {
      height: 35px;
    }
    input,
    .select__value,
    .select__option-btn span,
    textarea.c-text-area__ta {
      font-size: 12px;
    }
    .c-faq-modal__form-submit {
      height: 35px;
      padding: 0px;
      font-size: 12px;
      margin-top: 30px;
    }
    textarea {
      padding: 10px 14px !important;
    }
    .c-input,
    .select__wrap-val {
      padding-left: 14px;
      padding-right: 14px;
    }
    .select__option {
      margin-bottom: 0px;
    }
  }
}
</style>
