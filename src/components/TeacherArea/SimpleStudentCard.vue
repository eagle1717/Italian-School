<template>
  <div class="c-simple-student-card">
    <div class="c-simple-student-card__user-data">
      <div class="c-simple-student-card__main-data" @click="showUser(userId)">
        <div class="c-simple-student-card__img">
          <!-- <template v-if="photo"> -->
          <div
            class="bgImg"
            style="backgroundImage: url(img/ill/robert.svg)"
          ></div>
          <!-- </template> -->
          <!-- <template v-else>
            <img src="img/ill/default-photo.svg" :alt="name" />
          </template> -->
        </div>
        <div class="c-simple-student-card__name">{{ name }} {{ surname }}</div>
      </div>
      <div class="c-simple-student-card__level">
        Livello: <span>{{ student_level }}</span>
      </div>
      <div class="c-simple-student-card__next-lesson">
        Prossima lezione il {{ lessonDate }}
      </div>
    </div>
    <template v-if="link_to_homework && is_homework_done">
      <a :href="link_to_homework" target="_blank">
        <button
          class="c-simple-student-card__btn c-simple-student-card__btn_red"
        >
          <span>
            Controlla i compiti
          </span>
        </button>
      </a>
    </template>
    <template v-else-if="!link_to_lesson">
      <button
        class="c-simple-student-card__btn c-simple-student-card__btn_green green2"
      >
        <span>
          Aggiungere link
        </span>
      </button>
    </template>
    <template v-else-if="link_to_lesson">
      <a :href="link_to_lesson" target="_blank">
        <button
          @click="showModal"
          class="c-simple-student-card__btn c-simple-student-card__btn_green"
        >
          <span>
            Alla lezione
          </span>
        </button>
      </a>
    </template>
  </div>
</template>

<script>
import { student_card_functions } from "@/mixins/mixins.js";
export default {
  name: "SimpleStudentCard",
  mixins: [student_card_functions],
  props: {
    userId: {
      type: Number
    },
    photo: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    student_level: {
      type: String
    },
    lessonDate: {
      type: String
    },
    lessonTime: {
      type: Object
    },
    lessonId: {
      type: Number
    },
    isPassed: {
      type: Boolean,
      default: undefined
    },
    isHomeWork: {
      type: Boolean
    },
    checkHomeWork: {
      type: Boolean,
      default: undefined
    },
    lesson_type: {
      type: String
    },
    lesson_comment: {
      type: String
    },
    link_to_lesson: {
      type: String
    },
    link_to_homework: {
      type: String
    },
    is_homework_done: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.c-simple-student-card {
  background-color: $dark_white;
  width: 277px;
  height: 300px;
  border-radius: 2px;
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
        border: 2px solid white;
      }
    }
    &:hover {
      .c-simple-student-card {
        &__img {
          border: 2px solid $green;
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
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    // transition: all 0.5s e ase;
    .bgImg {
      width: 87px;
      height: 87px;
      background-repeat: no-repeat;
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
    width: 189px;
    height: 35px;
    margin: 150px auto 0;
    &_red {
      @extend %simple-btn-red-fill;
      &:hover {
        background-color: #d62a20;
        border-color: transparent;
        color: white;
      }
    }
    &_green {
      @extend %simple-btn-green;
      width: 133px;
      &.green2 {
        width: 175px;
      }
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
