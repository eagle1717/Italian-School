<template>
  <div class="c-student-modal">
    <div class="c-student-modal__user-data">
      <figure class="c-student-modal__photo">
        <template>
          <img :src="require(`@/assets/${photo}.svg`)" :alt="name" />
        </template>
      </figure>
      <h2 class="c-student-modal__name" v-html="name"></h2>
    </div>
    <template v-if="lessonData">
      <ul class="c-student-modal__time">
        <li class="c-student-modal__time-item">
          <h3 class="c-student-modal__time-title">
            Data:
          </h3>
          <div class="c-student-modal__val">
            {{ lessonData }}
          </div>
        </li>
        <li class="c-student-modal__time-item">
          <h3 class="c-student-modal__time-title">
            Ora:
          </h3>
          <div class="c-student-modal__val">
            {{ lessonTimeFrom }} - {{ lessonTimeTo }}
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    lessonData: {
      type: String
    },
    lessonTimeFrom: {
      type: [String, Number]
    },
    lessonTimeTo: {
      type: [String, Number]
    }
  }
};
</script>

<style lang="scss">
.c-student-modal {
  width: 100%;
  height: 171px;
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  background-color: #f7f7f7;
  padding: 0 rem(24) 0 rem(33);
  // .c-student-modal__user-data

  &__user-data {
    @extend %df;
    @extend %aic;
  }

  // .c-student-modal__photo

  &__photo {
    width: rem(88);
    height: rem(88);
    border-radius: 50%;
    overflow: hidden;
  }

  // .c-student-modal__name

  &__name {
    @extend %h2-title-regular;
    color: $black;
    margin-left: rem(20);
  }

  // .c-student-modal__time

  &__time {
    @extend %df;
    @extend %aic;
  }

  // .c-student-modal__time-item

  &__time-item {
    margin-right: rem(45);
    &:last-child {
      margin-right: 0;
    }
  }

  // .c-student-modal__time-title

  &__time-title {
    @extend %text-middle;
    color: $gray;
    margin-bottom: rem(2);
  }

  // .c-student-modal__val

  &__val {
    @extend %h3-title-bold;
    color: $black;
  }
}
@include bp(766px) {
  .c-student-modal {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    &__user-data {
      margin-bottom: 18px;
    }
  }
}
@include bp(620px) {
  .c-student-modal {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 18px;
    .c-student-modal__photo {
      width: 64px;
      height: 64px;
    }
    &__time-title {
      font-size: rem(12);
      margin-bottom: 0px;
    }
    &__val {
      font-size: rem(16);
    }
    &__name {
      font-size: rem(22);
      line-height: rem(25);
    }
  }
}
</style>
