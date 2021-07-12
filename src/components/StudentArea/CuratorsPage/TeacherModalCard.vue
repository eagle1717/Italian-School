<template>
  <router-link
    :to="{ name: 'TeacherPage', params: { id: 3 } }"
    class="c-teacher-modal"
  >
    <div class="c-teacher-modal__main-info">
      <figure class="c-teacher-modal__img">
        <img :src="image" alt="name" />
      </figure>
      <h2 class="c-teacher-modal__name">
        {{ name }} <br />
        {{ surname }}
      </h2>
    </div>
    <template v-if="timeStart">
      <div class="c-teacher-modal__content">
        <div class="c-teacher-modal__lesson">
          <figure class="c-teacher-modal__time-img">
            <img src="/img/ill/time.svg" alt="Time illustration" />
          </figure>
          <h3 class="c-teacher-modal__time-title">
            Время занятия:
          </h3>
          <div class="c-teacher-modal__time">
            {{ timeStart }} -
            {{ timeEnd }}
          </div>
        </div>
      </div>
    </template>
  </router-link>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
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
.c-teacher-modal {
  width: 100%;
  height: rem(171);
  background-color: $dark_white;
  @extend %df;
  padding-left: rem(23);

  // .c-teacher-modal__main-info
  &__main-info {
    @extend %df;
    @extend %aic;
  }

  // .c-teacher-modal__img

  &__img {
    width: rem(111);
    height: rem(111);
    border-radius: 50%;
    overflow: hidden;
  }

  // .c-teacher-modal__content

  &__content {
    @extend %df;
    @extend %fdc;
    @extend %jcc;
    @extend %aic;
    background-color: $white;
    width: rem(178);
  }

  // .c-teacher-modal__name

  &__name {
    @extend %h2-title-regular;
    color: $black;
    max-width: rem(147);
    margin-left: rem(27);
  }

  // .c-teacher-modal__lesson

  &__lesson {
  }

  // .c-teacher-modal__time-img

  &__time-img {
    width: rem(45);
    height: rem(45);
    margin: 0 auto;
  }

  // .c-teacher-modal__time-title

  &__time-title {
    @extend %text-middle;
    color: $gray;
    text-align: center;
    margin-top: rem(12);
    margin-bottom: rem(8);
  }

  // .c-teacher-modal__time

  &__time {
    @extend %h3-title-bold;
    color: $black;
    text-align: center;
  }
}
</style>
