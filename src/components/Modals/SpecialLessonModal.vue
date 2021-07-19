<template>
  <BaseModal class="c-special-modal-main" id="sp-lesson-modal">
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
          <h3 class="c-special-modal__text-title">Опишите вашу ситуацию</h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="situation_val" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            У вас уже есть готовый материал для подготовки?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="materials_val" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Когда вам было бы удобно провести занятие?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="lesson_val" />
          </div>
        </div>
      </div>
      <div class="c-special-modal__user-data">
        <h3 class="c-special-modal__data-title">Ваши контактные данные</h3>
        <p class="c-special-modal__data-text">
          Подтвердите свои контактные данные чтобы мы могли связаться с вами и
          обсудить занятие.
        </p>
        <div class="c-special-modal__data-wrap">
          <BasePhoneInput v-model="phone" />
          <BaseInputText
            class="c-special-modal__field"
            icon="email"
            placeholder="Ваша почта"
            v-model="userEmail"
          />
        </div>
      </div>
      <div class="btn-wrapper-submit">
        <button class="c-special-modal__btn" @click="send">
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
import { mapGetters } from "vuex";
import StudentModalCard from "@/components/Modals/StudentModalCard";
import Way from "@/components/Modals/ModalWay.vue";
export default {
  components: {
    StudentModalCard,
    Way
  },
  data() {
    return {
      situation_val: null,
      materials_val: null,
      lesson_val: null,
      userEmail: null,
      phone: null,
      user_photo: "user.svg",
      user_name: "Tomothy <br />Murphy",
      notSendYet: true
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
.c-modal.c-special-modal-main {
  width: 705px;
  .c-input__wrap-icon.c-input__wrap-icon_email {
    svg {
      width: 24px;
    }
    input {
      padding-left: 0px;
    }
  }
  @include bp(766px) {
    width: 100vw;
  }
}
.c-special-modal-main {
  overflow-x: scroll;
}
.btn-wrapper-submit {
  padding-bottom: 40px;
}
#sp-lesson-modal {
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
.c-student-modal__photo {
  width: 111px;
  height: 111px;
}
.c-special-modal {
  padding-top: rem(43);
  height: 100%;
  width: 524px;
  padding-left: 0px;
  @media screen and (max-width: 766px) {
    .c-student-modal__name {
      font-size: 30px !important;
      line-height: 33.87px;
    }
    .c-student-modal__photo {
      width: 111px;
      height: 111px;
    }
  }
  .c-special-modal__field {
    padding-right: 10px;
  }
  &__data-wrap {
    @include bp(766px) {
      display: grid !important;
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
      .c-special-modal__field,
      .c-base-phone {
        width: 100% !important;
        max-width: 100% !important;
      }
    }
  }

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

    @include bp(766px) {
      margin-top: 20px;
    }
  }

  &__wrapper-text {
    margin-bottom: rem(40);
  }

  &__field {
    width: calc(100% / 2);
    margin-right: 10px;
  }

  // .c-special-modal__text-title

  &__text-title {
    @extend %text-big;
    color: $gray;
    margin-bottom: rem(14);
  }

  // .c-special-modal__textarea

  &__textarea {
    height: 120px;
  }

  // .c-special-modal__user-data

  &__user-data {
  }

  // .c-special-modal__btn

  &__btn {
    @extend %simple-btn-green;
    margin-top: 30px;
    width: 252px !important;
    &:hover {
      @extend %btn-darkgreen;
    }
  }

  &__data {
    &-title {
      margin-bottom: 20px;
    }
    &-wrap {
      margin-top: 20px;
      @extend %df;
      @extend %jcsb;
    }
  }
}
@include bp(620px) {
  .c-special-modal-main {
    .c-special-modal {
      .c-special-modal__title {
        font-size: 16px;
      }
      .c-student-modal__name {
        font-size: 22px !important;
        line-height: 24.84px;
      }
      .c-student-modal__photo {
        width: 64px;
        height: 64px;
      }
      .c-special-modal__text-title,
      .c-special-modal__data-title {
        font-size: 14px;
      }
      .c-special-modal__data-text {
        font-size: 12px;
        max-width: 279px;
      }
      .c-input {
        padding-left: 12px;
        svg {
          width: 16px;
          height: 13px;
        }
        .c-base-phone {
          svg {
            width: 10px;
            height: 17px;
          }
        }
        .c-input__wrap-field {
          input {
            padding-left: 0px;
          }
        }
      }
      .c-special-modal__btn {
        margin-top: 27px;
      }
      input,
      textarea {
        font-size: 12px;
      }
      .c-special-modal__wrapper-text {
        margin-bottom: 30px;
        .c-special-modal__textarea {
          height: 80px;
        }
      }
      button,
      .c-input,
      .c-base-phone {
        height: 35px;
        font-size: 12px;
      }
      .c-special-modal__wrap.c-special-modal__wrap_teacher {
        margin-bottom: 43px;
      }
      .c-special-modal__wrap.c-special-modal__wrap_top {
        margin-bottom: 24px;
      }
    }
  }
}
// @include bp(1310px) {
//   .c-special-modal {
//     padding: 0 15px 80px;
//     margin: 0 auto;
//     margin-top: 50px;
//     &__close {
//       display: none;
//     }
//   }
// }
</style>
