<template>
  <BaseModal class="modal-faqq">
    <div class="c-faq-modal">
      <div class="c-faq-modal__container">
        <div class="c-faq-modal__content">
          <h2 class="c-faq-modal__title">Напишите нам!</h2>
          <p class="c-faq-modal__description">
            Мы постоянно совершенствуем нашу школу и хотим, чтобы она была
            удобной, а обучение эффективным. Присылайте нам свои отзывы,
            замечания, комментарии <br />и пожелания. Хорошие тоже можно!
          </p>
          <form @submit.prevent="submit_ticket" class="c-faq-modal__form">
            <BaseInputText
              class="nazvaniye"
              placeholder="Название"
              v-model="name"
              :error="error_name"
            />
            <BaseSelect
              class="c-faq-modal__select"
              v-model="type"
              :options="options"
              placeholder="Тема"
              :error="error_type"
            />
            <div class="c-faq-modal__form-ta">
              <BaseTextArea
                class="text-area"
                placeholder="Ваш вопрос?..."
                v-model="question"
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
      name: "",
      question: null,
      type: null,
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
      error_name: false,
      error_type: false,
      error_question: false
    };
  },
  methods: {
    errorHandler(name) {
      this[name] = true;
      setTimeout(() => (this[name] = false), 2000);
    },
    submit_ticket() {
      const TicketData = {};

      if (this.name.length === 0) {
        this.errorHandler("error_name");
        return;
      } else {
        TicketData.name = this.name;
      }

      if (!this.type) {
        this.errorHandler("error_type");
        return;
      } else {
        TicketData.type = this.type;
      }

      if (!this.question && this.question.length < 20) {
        this.errorHandler("error_question");
        return;
      } else {
        TicketData.question = this.question;
      }
      this.$store.dispatch("user/create_ticket", TicketData).then(() => {
        this.$store.dispatch("hide_show_overlay", false);
      });
    }
  }
};
</script>

<style lang="scss">
.modal-faqq {
  width: 705px !important;
}
.c-faq-modal {
  width: 412px;
  margin-left: 0px;
}
.c-faq-modal {
  @extend %pagept;
  .nazvaniye {
    border-radius: 2px;
    input {
      padding-left: 0px;
    }
  }
  &__title {
    @extend %h2-title-regular;
    margin-bottom: 9px;
    color: $black;
    line-height: 44px;
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
    width: 412px;
    color: $gray;
  }
  .c-input {
    width: 100%;
  }
  &__form {
    max-width: rem(392);
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
    padding-left: 20px;
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
      margin: 0 auto;
      margin-top: 30px;
      padding: 0;
    }
  }
}
@include bp(766px) {
  .c-faq-modal {
    &__title {
      font-size: rem(22);
    }
    &__description {
      width: 100%;
      font-size: rem(12);
      line-height: rem(18);
    }
  }
}
</style>
