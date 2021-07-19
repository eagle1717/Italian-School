<template>
  <div class="c-teacher">
    <div class="c-teacher__content">
      <div class="c-teacher__content-teacher">
        <div class="c-teacher__content-teacher-photo">
          <template>
            <img :src="require(`@/assets/img/users/photos/${curator.photo}`)" />
          </template>
        </div>
        <div class="c-teacher__content-teacher-name">
          <p>{{ curator.name }}</p>
        </div>
      </div>
      <div class="c-teacher__content-time">
        <div class="c-teacher__content-time-clock">
          <img src="/img/ill/time.svg" alt="clock" />
        </div>
        <div class="c-teacher__content-time-title">
          <p>Время занятия:</p>
        </div>
        <div class="c-teacher__content-time-item">
          <p>{{ timeStart }}-{{ timeEnd }}</p>
        </div>
      </div>
    </div>
    <div
      :class="{
        'c-teacher__about--disabled': homework_link && is_homework_done
      }"
      class="c-teacher__about"
    >
      <a
        target="_blank"
        class="c-teacher__about-btn"
        :class="{ disabled: !lesson_link }"
        href="`https://work.studiait.it/api/calendar/goLesson/${id}`"
        >Перейти к занятию</a
      >
      <div
        class="c-teacher__about-wrapper"
        :class="{ disabled: !homework_link && !is_homework_done }"
      >
        <a
          :href="homework_link"
          target="_blank"
          class="c-teacher__about-homework"
        >
          <img src="/img/icons/doc.svg" alt="paper" />
          <p class="c-teacher__about-title">Домашнее задание</p>
        </a>
        <BaseCheckbox
          v-tooltip="{ text: 'Отправить Д/З на проверку' }"
          :checked="is_homework_done"
          :value="is_homework_done"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { curator_mixins } from "@/mixins/mixins.js";
export default {
  name: "Teacher",
  mixins: [curator_mixins],
  props: {
    id: {
      type: Number
    },
    is_homework_done: {
      type: Boolean
    },
    curator: {
      type: Object
    },
    lesson_link: {
      type: String
    },
    homework_link: {
      type: String
    },
    timeStart: {
      type: String
    },
    timeEnd: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.c-teacher {
  margin-top: 118px;
  &:nth-child(1) {
    margin: 0px;
  }
  &__about {
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    max-width: 500px;
    height: 100%;
    margin-top: 40px;
    justify-content: initial;
    &--disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    &-btn {
      @extend %btn-all-green;
      padding: 15px 30px;
      &:hover {
        @extend %btn-darkgreen;
      }
      &.disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }
    &-homework {
      @extend %df;
      @extend %aic;
      color: $black;
      margin-left: 34px;
    }
    &-title {
      margin: 0 13px;
      @extend %text-big;
    }

    &-wrapper {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      &.disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }
  }

  &__content {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    height: 171px;
    // margin-top: 73px;

    &-teacher {
      background: #f7f7f7;
      border-radius: 2px;
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      width: 370px;
      justify-content: initial;
      padding-left: 33px;
      @extend %h100;
      &-name {
        margin-left: 27px;
        width: 147px;
      }
      &-name p {
        @extend %h2-title-regular;
        width: fit-content;
      }

      &-photo {
        width: 111px;
        height: 111px;
        border-radius: 50%;
        overflow: hidden;
      }
    }

    &-time {
      @extend %df;
      @extend %jcc;
      @extend %aic;
      @extend %fdc;
      @extend %h100;
      width: 35%;
      padding: 30px;

      &-clock {
        height: 45px;
        width: 45px;
      }

      &-title {
        @extend %text-small;
        margin-top: 12px;
        margin-bottom: rem(8);
      }

      &-item {
        @extend %h3-title-bold;
      }
    }
  }
}
@include bp(766px) {
  .c-teacher {
    &__content-teacher-name {
      p {
        font-size: rem(16);
        line-height: rem(20);
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    &__content {
      height: rem(130);
    }
    &__content-time {
      padding: 10px;
    }
    &__content-teacher {
      padding: 0 0 5px 0;
    }
    &__content-time-item {
      font-size: rem(15);
    }
    &__content-teacher-photo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(50);
      margin-left: 5px;
      img {
        width: rem(50);
        height: rem(50);
      }
    }
    &__about {
      flex-direction: column;
    }
    &__about-btn {
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
    }
  }
}
</style>
