<template>
  <BaseModal class="c-special-modal-main" id="certificatemodal">
    <div class="c-special-modal" v-if="notSendYet">
      <div class="c-special-modal__wrap c-special-modal__wrap_top">
        <h2 class="c-special-modal__title margin-from-close-button">
          Анкета специального занятия
        </h2>
      </div>
      <div class="c-special-modal__wrap c-special-modal__wrap_teacher">
        <StudentModalCard :photo="user_photo" :name="user_name" />
      </div>
      <div class="c-special-modal__wrap c-special-modal__wrap_text">
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какой у вас уровень языка?
          </h3>
          <div class="c-special-modal__text" id="language-level">
            <BaseInputText />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какой уровень вам требуется?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Когда вы готовы приступить к занятиям и когда вы планируете сдавать
            экзамен?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Как давно вы изучаете язык?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Где? С преподавателем или на курсах? Сами?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какими учебными пособиями вы пользовались?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Как часто вы занимаетесь итальянским самостоятельно? Что вам легко
            дается?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            В чем, как вы думаете, ваши слабые стороны?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Вы уже знаете, на какой сертификат вы будете сдавать экзамен? PLIDA,
            CILS, CELI?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea />
          </div>
        </div>
      </div>
      <div class="c-special-modal__user-data">
        <h3 class="c-special-modal__data-title">Ваши контактные данные</h3>
        <p class="c-special-modal__data-text">
          Подтвердите свои контактные данные чтобы мы могли связаться с вами и
          обсудить занятие.
        </p>
        <div class="c-special-modal__data-wrap" id="bottom-form">
          <BasePhoneInput />
          <BaseInputText
            class="c-special-modal__field"
            icon="email"
            placeholder="Ваша почта"
          />
        </div>
      </div>
      <div class="btn-wrapper-submit">
        <button @click="send" class="c-special-modal__btn">
          <span>Хочу специальное занятие!</span>
        </button>
      </div>
    </div>
    <div class="c-special-modal second-special-modal" v-else>
      <Way />
    </div>
  </BaseModal>
</template>

<script>
import Way from "@/components/Modals/ModalWay.vue";
import StudentModalCard from "@/components/Modals/StudentModalCard";
export default {
  components: {
    StudentModalCard,
    Way
  },
  data() {
    return {
      notSendYet: true,
      user_photo: "robert",
      user_name: "Tomothy <br />Murphy"
    };
  },
  methods: {
    send() {
      this.notSendYet = false;
    }
  }
};
</script>

<style lang="scss">
.c-special-modal-main {
  overflow-x: hidden;
  .c-special-modal__text {
    .c-input {
      width: 100%;
      padding-left: 0px;
    }
  }
  .c-input {
    border-radius: 2px !important;
  }
  #language-level {
    .c-input {
      max-width: 100%;
    }
  }
  input {
    padding-right: 10px;
  }
  #bottom-form {
    .c-input-wrapper.c-special-modal__field {
      margin-right: 0px;
      padding-right: 0px;
    }
    .c-base-phone,
    .c-input {
      border-radius: 2px;
    }
    .c-input,
    .c-input-wrapper.c-special-modal__field {
      width: 252px;
    }
    .c-base-phone {
      input {
        padding-right: 10px;
      }
    }
    .c-input {
      padding-right: 30px;
    }
  }
  .c-special-modal {
    margin-left: 60px;
    max-width: rem(574);
    &__wrap {
      &_top {
        @extend %df;
        @extend %aic;
        margin-bottom: rem(60);
      }

      &_teacher {
        margin-bottom: 60px;
      }
    }
    &__close {
      @extend %close-modal-btn;
    }

    &__title {
      @extend %h3-title-bold;
      color: $gray;
      margin-left: rem(12);
    }

    &__wrapper-text {
      margin-bottom: rem(40);
    }

    &__field {
      width: calc(100% / 2);
      margin-right: 10px;
    }

    &__text-title {
      @extend %text-big;
      color: $gray;
      margin-bottom: rem(14);
    }

    &__textarea {
      height: 120px;
    }

    &__user-data {
      .c-input,
      .c-base-phone {
        width: 252px;
      }
      .c-input {
        margin-right: 0px;
      }
    }

    &__btn {
      @extend %simple-btn-green;
      margin-top: 37px;
    }

    &__data {
      &-title {
        margin-bottom: 14px;
        font-size: 18px;
        // font-weight: 700;
        font-family: "Circe-Bold";
        line-height: 27px;
      }
      &-wrap {
        margin-top: 20px;
        @extend %df;
        @extend %jcsb;
      }
    }
    @include bp(766px) {
      width: 100vw;
      .c-input {
        max-width: 100% !important;
        width: 100% !important;
      }
      .c-special-modal__btn {
        max-width: 100% !important;
        width: 100% !important;
      }
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
      .c-special-modal__title {
        margin-top: 0px;
      }
    }
  }
}
</style>
