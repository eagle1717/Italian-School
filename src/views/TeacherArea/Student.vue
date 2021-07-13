<template>
  <div class="c-student" :class="{ disabled: is_disabled }">
    <div class="c-student__user-data" @click="showUser(userId)">
      <figure class="c-student__photo">
        <template v-if="photo">
          <img :src="photo" :alt="name" />
        </template>
        <template v-else>
          <img src="img/ill/default-photo.svg" :alt="name" />
        </template>
      </figure>
      <div class="c-student__name-data">
        <h2 class="c-student__name">{{ name }} {{ surname }}</h2>
        <template v-if="!link_to_lesson">
          <p class="c-student__data">
            Richiede la lezione il {{ display_date }} marzo alle {{ lessonTime }}
          </p>
        </template>
        <template v-if="link_to_homework && is_homework_done">
          <p class="c-student__data">
            Ha caricato il compito
          </p>
        </template>
      </div>
    </div>
    <template v-if="!link_to_lesson">
      <button class="c-student__btn" @click="showModal">
        <span>Aggiungere link</span>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8 8L1 15"
            stroke="#39B100"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </template>
    <template v-if="link_to_homework && is_homework_done">
      <a
        @click="check_homework"
        :href="link_to_homework"
        class="c-student__btn c-student__btn_red"
        target="_blank"
      >
        <span>Correggere</span>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8 8L1 15"
            stroke="#EF4036"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </template>
  </div>
</template>

<script>
// import moment from 'moment'
import { student_card_functions } from "@/mixins/mixins.js";
export default {
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
    lessonDate: {
      type: String
    },
    lessonTime: {
      type: String
    },
    lessonTimeTo: {
      type: String
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
    homeWorkLink: {
      type: String
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
  },
  mixins: [student_card_functions]
  // computed: {
  //   checkPassed() {
  //     return this.isPassed;
  //   },
  //   is_disabled() {
  //     return this.link_to_lesson ? !(this.link_to_homework && this.is_homework_done) : false
  //   },
  //   display_date() {
  //     return moment(this.lessonDate, 'YYYY-MM-DD').locale('ru').format('DD MMMM')
  //   }
  // },
};
</script>

<style lang="scss">
.c-student {
  width: 100%;
  height: rem(86);
  background-color: $dark_white;
  border-radius: 2px;
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  margin-bottom: rem(12);
  padding: 0 rem(22) 0 rem(15);
  &.disabled {
    opacity: 0.4;
    @extend %evt-none;
  }
  // .c-student__user-data

  &__user-data {
    @extend %df;
    @extend %aic;
    cursor: pointer;
  }

  // .c-student__photo

  &__photo {
    width: rem(56);
    height: rem(56);
    border-radius: 50%;
    overflow: hidden;
  }

  // .c-student__name-data

  &__name-data {
    margin-left: rem(21);
  }

  // .c-student__name

  &__name {
    @extend %text-big;
    color: $black;
  }

  // .c-student__data

  &__data {
    @extend %text-small-big-line-height;
    color: $gray;
  }

  // .c-student__btn

  &__btn {
    @extend %simple-btn-green;
    width: rem(189);
    svg {
      display: none;
    }
    &_red {
      @extend %simple-btn-red-border;
    }
  }
}
@include bp(766px) {
  .c-student {
    &__photo {
      width: 45px;
      height: 45px;
    }
    &__name-data {
      margin-left: 10px;
    }
    &__name {
      font-size: rem(14);
    }
    &__data {
      font-size: rem(10);
    }
    &__btn {
      background-color: transparent;
      border: none;
      width: auto;
      height: 100%;
      span {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }
}
</style>
