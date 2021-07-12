<template>
  <BaseModal class="c-special-modal-main">
    <div class="c-special-modal" v-if="notSendYet">
      <div class="c-special-modal__wrap c-special-modal__wrap_top">
        <h2 class="c-special-modal__title">Анкета специального занятия</h2>
      </div>
      <div class="c-special-modal__wrap c-special-modal__wrap_teacher">
        <StudentModalCard :photo="user_photo" :name="user_name" />
        <!--        <TeacherModalCard-->
        <!--          :image="teacherInfo.image"-->
        <!--          :name="teacherInfo.name"-->
        <!--          :surname="teacherInfo.surname"-->
        <!--          :time-start="teacherInfo.timeStart"-->
        <!--          :time-end="teacherInfo.timeEnd"-->
        <!--        />-->
      </div>
      <div class="c-special-modal__wrap c-special-modal__wrap_text">
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какой у вас уровень языка?
          </h3>
          <div class="c-special-modal__text">
            <BaseInputText v-model="level" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какой уровень вам требуется?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="levelNeeded" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Когда вы готовы приступить к занятиям и когда вы планируете сдавать
            экзамен?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="schedule" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Как давно вы изучаете язык?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="learningTime" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Где? С преподавателем или на курсах? Сами?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="studyType" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Какими учебными пособиями вы пользовались?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="studyMaterials" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Как часто вы занимаетесь итальянским самостоятельно? Что вам легко
            дается?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="studyDuration" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            В чем, как вы думаете, ваши слабые стороны?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="weekSides" />
          </div>
        </div>
        <div class="c-special-modal__wrapper-text">
          <h3 class="c-special-modal__text-title">
            Вы уже знаете, на какой сертификат вы будете сдавать экзамен? PLIDA,
            CILS, CELI?
          </h3>
          <div class="c-special-modal__textarea">
            <BaseTextArea v-model="certName" />
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
          <BaseInputText
            class="c-special-modal__field"
            icon="email"
            placeholder="Ваша почта"
            v-model="userEmail"
          />
          <BasePhoneInput v-model="phone" />
        </div>
      </div>
      <button @click="send" class="c-special-modal__btn">
        <span>Хочу специальное занятие!</span>
      </button>
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
      userEmail: null,
      phone: null,
      level: null,
      levelNeeded: null,
      schedule: null,
      learningTime: null,
      studyType: null,
      studyMaterials: null,
      studyDuration: null,
      weekSides: null,
      certName: null,
      notSendYet: true,
      user_photo: "user.svg",
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
  overflow-x: scroll;
}
.c-special-modal__text {
  .c-input {
    width: 100%;
    padding-left: 0px;
  }
}
.c-special-modal {
  padding-top: rem(43);
  margin-left: 60px;
  max-width: rem(574);
  // .c-special-modal__wrap

  &__wrap {
    // .c-special-modal__wrap_top

    &_top {
      @extend %df;
      @extend %aic;
      margin-bottom: rem(60);
    }

    // .c-special-modal__wrap_teacher

    &_teacher {
      margin-bottom: 60px;
    }

    // .c-special-modal__wrap_text

    &_text {
    }
  }

  // .c-special-modal__close

  &__close {
    @extend %close-modal-btn;
  }

  // .c-special-modal__title

  &__title {
    @extend %h3-title-bold;
    color: $gray;
    margin-left: rem(12);
  }

  // .c-special-modal__wrapper-text

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
    .c-input,
    .c-base-phone {
      width: 252px;
    }
    .c-input {
      margin-right: 0px;
    }
  }

  // .c-special-modal__btn

  &__btn {
    @extend %simple-btn-green;
    margin-top: 37px;
    margin-bottom: 50px;
  }

  &__data {
    &-title {
      margin-bottom: 14px;
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
    }
    &-wrap {
      margin-top: 20px;
      @extend %df;
      @extend %jcsb;
    }
  }
}
@include bp(1100px) {
  .c-special-modal {
    padding: 0 15px 80px;
    margin: 0 auto;
    margin-top: 50px;
    &__close {
      display: none;
    }
  }
}
</style>
