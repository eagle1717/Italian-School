<template>
  <div class="v-students-page">
    <div class="v-students">
      <div class="v-students__wrap_top">
        <h1 class="v-students__title">I tuoi studenti</h1>
      </div>
      <div class="v-students__wrap v-students__wrap_bot">
        <div
          class="c-simple-student-card"
          v-for="(it, key) in students"
          :key="key"
        >
          <div class="c-simple-student-card__user-data">
            <div class="c-simple-student-card__main-data" @click="openModal">
              <figure class="c-simple-student-card__img">
                <template v-if="it.img">
                  <img :src="require(`@/assets/${it.img}.svg`)" alt="" />
                </template>
              </figure>
              <div class="c-simple-student-card__name">
                {{ it.name }} {{ it.surname }}
              </div>
            </div>
            <div class="c-simple-student-card__level">
              Livello: <span>{{ it.level }}</span>
            </div>
            <div class="c-simple-student-card__next-lesson">
              Prossima lezione il {{ it.date }}
            </div>
          </div>
          <template v-if="it.link_to_homework && it.is_homework_done">
            <a
              href="https://google.com"
              target="_blank"
              class="c-simple-student-card__btn c-simple-student-card__btn_red btn-width-change"
            >
              <span>
                Correggere compito
              </span>
            </a>
          </template>
          <template v-else-if="!it.link_to_lesson">
            <a
              @click="openModal2"
              class="c-simple-student-card__btn c-simple-student-card__btn_green2 btn-width-change"
            >
              <span>
                Aggiungere link
              </span>
            </a>
          </template>
          <template v-else>
            <a
              href="https://google.com"
              target="_blank"
              class="c-simple-student-card__btn c-simple-student-card__btn_green btn-width-change"
            >
              <span>
                Alla lezione
              </span>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Students",
  data() {
    return {
      dateSelect: null,
      homeworkSelected: null,
      userId: null,
      photo: "",
      name: "",
      surname: "",
      student_level: "",
      lessonDate: "",
      lessonTime: "",
      lessonTimeTo: "",
      lessonId: null,
      isPassed: false,
      isHomeWork: false,
      homeWorkLink: "",
      checkHomeWork: "",
      lesson_type: "",
      lesson_comment: "",
      link_to_lesson: "",
      link_to_homework: "",
      is_homework_done: false,
      is_homework_checked: null,
      students: [
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link_to_homework: "https://google.com",
          is_homework_done: true,
          isHomework: false
        },
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link_to_homework: "https://google.com",
          is_homework_done: true,
          isHomework: false
        },
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link: "https://google.com",
          isHomework: false
        },
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link: "https://google.com",
          isHomework: false
        },
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link: "https://google.com",
          isHomework: true
        },
        {
          id: 34242,
          img: "user2",
          name: "Ника Ларингова",
          level: "A1",
          date: "24 мая",
          link: "https://google.com",
          isHomework: true
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    openModal() {
      this.SHOW_MODAL("student-profile");
    },
    openModal2() {
      this.SHOW_MODAL("lesson-with-student");
    }
  }
};
</script>

<style lang="scss">
.v-students {
  margin: 0 auto;
  &-page {
    width: max-content;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  &__wrap {
    margin-top: 32px !important;
    &_top {
      @extend %df;
      @extend %jcsb;
      @extend %aic;
      align-items: baseline;
    }
    &_bot {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 36px;
      margin-top: 25px;
    }
  }
  &__title {
    @extend %h3-title-bold;
    color: $gray;
  }
  &__wrapper-selects {
    @extend %df;
    @extend %jcsb;
  }
  &__select {
    &_big {
      margin-left: 19px;
      width: 235px;
    }
  }
}
@include bp(1310px) {
  .v-students-page {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
  }
}
@include bp(766px) {
  .v-students-page {
    max-width: 100%;
  }
  .v-students {
    &__wrap {
      &_top {
        flex-direction: column;
      }
      &_bot {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 9px;
        .c-simple-student-card {
          width: 44vw;
        }
      }
    }
    &__select {
      width: 141px;
      &_big {
        width: 161px;
      }
      .select {
        &__wrap-val {
          padding-left: 10px;
          padding-right: 8px;
        }
        &__options {
          padding-left: 10px;
        }
        &__value {
          font-size: rem(12);
        }
        &__option-btn {
          font-size: rem(12);
        }
      }
    }
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 1310px) {
  .v-students {
    width: 96vw;
  }
}
.c-simple-student-card {
  background-color: #f7f7f7;
  border-radius: 2px;
  width: 277px;
  height: 300px;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  $border-width2: 2.5;
  &:hover {
    .c-simple-student-card {
      &__btn {
        margin-top: 25px;
      }
    }
  }
  @media screen and (max-width: 1310px) {
    max-width: 100%;
    width: 100%;
  }
  &__main-data {
    cursor: pointer;
    width: max-content;
    margin: auto;
    .c-simple-student-card {
      &__img {
        margin: auto;
        transition: all 0.5s ease;
        width: 90px;
        height: 90px;
        border-radius: 100%;
        overflow: hidden;
        border: $border-width2 + px solid transparent;
        transition: all 0.5s ease;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          border-radius: 100%;
        }
      }
      &__name {
        transition: all 0.5s ease;
      }
    }
    &:hover {
      .c-simple-student-card {
        background-color: #f7f7f7;
        &__img {
          border: $border-width2 + px solid $green;
          transition: all 0.5s ease;
        }
        &__name {
          color: $green;
          transition: all 0.5s ease;
        }
      }
    }
  }
  &__user-data {
    padding-top: 28px;
  }
  &__name {
    @extend %text-big;
    color: $black;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 3px;
    transition: all 0.5s ease;
  }
  &__level {
    @extend %text-middle;
    color: $gray;
    text-align: center;
    margin-bottom: 17px;
    span {
      color: $black;
    }
  }
  &__next-lesson {
    @extend %btn-text;
    color: $red;
    text-align: center;
  }
  &__btn {
    height: 35px;
    margin: 150px auto 0;
    &_red {
      @extend %simple-btn-red-fill;
      width: 217px;
      &:hover {
        background: #d62a20 !important;
        border-color: transparent;
        color: $white !important;
      }
    }
    &_green {
      @extend %simple-btn-green;
      width: 133px;
    }
    &_green2 {
      @extend %simple-btn-green;
      width: 175px;
    }
  }
}
@include bp(1310px) {
  .c-simple-student-card {
    &__btn {
      margin-top: 25px;
    }
    .btn-width-change {
      @media screen and (max-width: 1310px) {
        width: 100%;
      }
    }
  }
}
@include bp(766px) {
  .c-simple-student-card {
    width: 100%;
    margin: 0 auto;
  }
}
@include bp(620px) {
  .btn-width-change {
    font-size: 12px;
    height: 30px;
    margin-top: 13px;
  }
  .c-simple-student-card {
    height: max-content;
    padding-bottom: 20px;
  }
  .c-simple-student-card__name {
    font-size: 14px;
    margin-top: 7px;
  }
  .c-simple-student-card__img {
    width: 70px !important;
    height: 70px !important;
  }
  .c-simple-student-card__level,
  .c-simple-student-card__next-lesson {
    font-size: 12px;
  }
  .c-simple-student-card__next-lesson {
    line-height: 16px;
  }
  .c-simple-student-card__level {
    margin-bottom: 8px;
  }
}
</style>
