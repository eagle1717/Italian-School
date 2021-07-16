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
            <div class="c-simple-student-card__main-data">
              <figure class="c-simple-student-card__img">
                <template v-if="it.img">
                  <!-- <img :src="require(`@/assets/${it.img}.svg`)" :alt="name" /> -->
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    :alt="name"
                  />
                </template>
                <template v-else>
                  <img src="img/ill/default-photo.svg" :alt="it.name" />
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
            <button
              class="c-simple-student-card__btn c-simple-student-card__btn_red"
            >
              <span>
                Correggere compito
              </span>
            </button>
          </template>
          <template v-else-if="!it.link_to_lesson">
            <button
              class="c-simple-student-card__btn c-simple-student-card__btn_green2"
            >
              <span>
                Aggiungere link
              </span>
            </button>
          </template>
          <template v-else>
            <button
              class="c-simple-student-card__btn c-simple-student-card__btn_green"
            >
              <span>
                Alla lezione
              </span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { get_curator_users } from "@/mixins/mixins.js";
export default {
  name: "Students",
  mixins: [get_curator_users],
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
          link_to_lesson: "https://google.com"
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
    showUserModal() {
      this.SHOW_MODAL("student-modal");
    }
  },
  computed: {
    ...mapGetters("user", [
      "curator_not_confirmed_lessons",
      "curator_confirmed_lessons"
    ])
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
    }
    &_bot {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 38px;
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
@include bp(1100px) {
  .v-students-page {
    max-width: 750px;
    margin: 0 auto;
  }
}
@include bp(766px) {
  .v-students-page {
    max-width: 320px;
  }
  .v-students {
    &__wrap {
      &_top {
        flex-direction: column;
      }
      &_bot {
        grid-template-columns: 1fr;
      }
    }
    &__wrapper-selects {
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
.c-simple-student-card {
  background-color: $dark_white;
  border-radius: 2px;
  width: 277px;
  height: 300px;
  overflow: hidden;
  &:hover {
    .c-simple-student-card {
      &__btn {
        margin-top: 25px;
      }
    }
  }
  &__main-data {
    cursor: pointer;
    .c-simple-student-card {
      &__img {
        display: block !important;
      }
    }
    &:hover {
      .c-simple-student-card {
        background-color: $dark-white;
        &__img {
          border-color: $green;
        }
        &__name {
          color: $green;
        }
      }
    }
  }
  &__user-data {
    padding-top: 28px;
  }
  &__img {
    width: 87px;
    height: 87px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
    border: 2px solid transparent;
    transition: all 0.5s ease;
    img {
      object-fit: cover;
      border-radius: 100%;
      display: block;
      position: relative;
    }
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
        background: #d62a20;
        border-color: transparent;
        color: $white;
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
@include bp(766px) {
  .c-simple-student-card {
    width: 100%;
    margin: 0 auto;
    &__btn {
      margin-top: 25px;
    }
  }
}
</style>
