<template>
  <div class="c-teacher">
    <div class="c-teacher__content">
      <div class="c-teacher__content-teacher">
        <div class="flex card-data-wrapp">
          <div class="c-teacher__content-teacher-photo">
            <template>
              <img :src="require(`@/assets/${curator.photo}.svg`)" />
            </template>
          </div>
          <div class="c-teacher__content-teacher-name">
            <p>{{ curator.name }}</p>
          </div>
        </div>
        <div class="c-teacher__content-time">
          <div class="c-teacher__content-time-clock">
            <img src="@/assets/img/ill/time.svg" alt="clock" />
          </div>
          <div class="c-teacher__content-time-title">
            <p>Время занятия:</p>
          </div>
          <div class="c-teacher__content-time-item">
            <p>{{ timeStart }}-{{ timeEnd }}</p>
          </div>
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
          <img src="@/assets/img/icons/doc.svg" alt="paper" class="doc-icon" />
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
    min-height: 171px;
    height: 100%;
    &-teacher {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      min-width: 370px;
      justify-content: initial;
      @extend %h100;
      .c-teacher__content-time-item {
        p {
          white-space: nowrap;
        }
      }
      .card-data-wrapp {
        background: #f7f7f7;
        border-radius: 2px;
        padding: 30px;
        padding-left: 33px;
        @media screen and (max-width: 620px) {
          background: transparent;
          padding: 0px;
        }
      }
      &-name {
        margin-left: 27px;
        max-width: 147px;
        align-self: center !important;
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
      max-width: 35%;
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
@include bp(620px) {
  .c-my-lessons__lessons {
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 25px !important;
  }
  .c-teacher {
    margin-top: 80px;
    &__content-teacher-name {
      margin-left: 14px;
      p {
        font-size: 22px;
        line-height: 25px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    .card-data-wrapp {
      margin-bottom: 11px;
    }
    .c-teacher__content-teacher-photo {
      height: max-content;
    }
    .c-teacher__content-teacher {
      display: initial;
      height: max-content;
      max-width: 100%;
      width: 100%;
      @media screen and (max-width: 620px) {
        background: #f7f7f7;
        padding: 30px !important;
        border-radius: 2px;
      }
    }
    .c-teacher__content-time {
      max-width: 100%;
    }
    .c-teacher__content-time-title {
      margin: 0 7px;
      p {
        font-size: 12px;
      }
    }
    .c-teacher__content-time-item {
      p {
        font-size: 16px;
      }
    }
    &__content {
      height: rem(130);
    }
    &__content-time {
      padding: 10px;
    }
    .c-teacher__content-time {
      padding: 0px;
    }
    .c-teacher__content-time-clock {
      width: 14px;
      height: 14px;
      display: contents;
    }
    &__content-teacher {
      padding: 0 0 5px 0;
    }
    .c-teacher__content-time {
      flex-direction: row;
      height: max-content;
      justify-content: end;
    }
    .c-teacher__about-btn {
      height: 35px;
      font-size: 12px;
      padding-top: 8.5px;
      padding-left: 0px;
      padding-right: 0px;
      width: 150px;
      text-align: center;
    }
    .c-teacher__about-title {
      font-size: 14px;
    }
    .c-teacher__content-teacher {
      padding: 15px;
      width: 100%;
    }
    .c-teacher__about {
      justify-content: space-between;
      margin-top: 25px;
      max-width: 100%;
      width: 100%;
    }
    img.doc-icon {
      width: 14px;
      height: 19px;
    }
    .c-teacher__about-title {
      margin: 0 9px;
    }
    .c-checkbox {
      label {
        width: 18px;
        height: 18px;
        background-size: 9px !important;
      }
    }
    &__content-time-item {
      font-size: rem(15);
    }
    &__content-teacher-photo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      margin-left: 5px;
      img {
        width: 64px;
        height: 64px;
      }
    }
  }
}
</style>
