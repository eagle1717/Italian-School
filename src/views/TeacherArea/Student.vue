<template>
  <div class="c-student" :class="{ disabled: checkHomeWork }">
    <div v-if="$route.name === 'HomeWork'" class="flex justify-between">
      <div class="c-student__user-data" @click="showUser(userId)">
        <figure class="c-student__photo">
          <template v-if="photo">
            <img :src="require(`@/assets/${photo}.svg`)" :alt="name" />
          </template>
          <template v-else>
            <img src="img/ill/default-photo.svg" :alt="name" />
          </template>
        </figure>
        <div class="c-student__name-data">
          <h2 class="c-student__name">{{ name }} {{ surname }}</h2>
          <template>
            <p class="c-student__data">
              Ha caricato il compito
            </p>
          </template>
        </div>
      </div>
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
    <div v-if="$route.name === 'Classes'" class="flex justify-between">
      <div class="c-student__user-data" @click="showUser(userId)">
        <figure class="c-student__photo">
          <template v-if="photo">
            <img :src="require(`@/assets/${photo}.svg`)" :alt="name" />
          </template>
          <template v-else>
            <img src="img/ill/default-photo.svg" :alt="name" />
          </template>
        </figure>
        <div class="c-student__name-data">
          <h2 class="c-student__name">{{ name }} {{ surname }}</h2>
          <template>
            <p class="c-student__data">
              Richiede la lezione il {{ lessonDate }} marzo alle
              {{ lessonTime.from }}
            </p>
          </template>
        </div>
      </div>
      <template v-if="!link_to_lesson">
        <a
          @click="openModal"
          :href="link_to_homework"
          class="c-student__btn c-student__btn_green"
          target="_blank"
        >
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
              stroke="#EF4036"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </template>
    </div>
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
    lessonId: {
      type: Number
    },
    checkHomeWork: {
      type: Boolean
    },
    link_to_homework: {
      type: String
    },
    is_homework_done: {
      type: Boolean
    },
    lessonTime: {
      type: Object
    },
    lessonDate: {
      type: String
    }
  },
  mixins: [student_card_functions],
  computed: {
    checkPassed() {
      return this.isPassed;
    },
    display_date() {
      return moment(this.lessonDate, "YYYY-MM-DD")
        .locale("ru")
        .format("DD MMMM");
    }
  }
};
</script>

<style lang="scss">
.c-student {
  width: 100%;
  height: rem(86);
  background-color: $dark-white;
  border-radius: 2px;
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  margin-bottom: 12px;
  .c-student__btn_green {
    width: 175px;
  }
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

  &__name-data {
    margin-left: 21px;
  }

  &__name {
    @extend %text-big;
    color: $black;
  }
  &__data {
    @extend %text-small-big-line-height;
    color: $gray;
    margin-top: 3px;
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
      width: 155px;
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
<style lang="scss">
.c-simple-student-card {
  background-color: $dark_white;
  max-width: 277px;
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
    &:hover {
      .c-simple-student-card {
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
    // width: 87px;
    // height: 87px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    border: 2px solid transparent;
    transition: all 0.5s ease;
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
    }
    &_green {
      @extend %simple-btn-green;
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
