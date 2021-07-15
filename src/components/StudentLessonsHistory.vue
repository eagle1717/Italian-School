<template>
  <div class="c-history-item">
    <figure class="c-history-item__img">
      <img :src="`img/ill/history-lessons/${iconName}.svg`" :alt="iconName" />
    </figure>
    <div class="c-history-item__content">
      <h3 class="c-history-item__title">
        <template v-if="isClassic">
          Классическое занятие
        </template>
        <template v-else>
          Повышение уровня владения языком
        </template>
      </h3>
      <div class="c-history-item__duration">
        <template v-if="isClassic">
          Длительность: <span> {{ duration }} мин. </span>
        </template>
        <template v-else>
          Уровень: <span> {{ iconName.toUpperCase() }} </span>
        </template>
      </div>
    </div>
    <div class="c-history-item__date">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String
    },
    duration: {
      type: [Number, String]
    },
    date: {
      type: String
    }
  },
  computed: {
    isClassic() {
      return this.iconName === "classic";
    }
  }
};
</script>

<style lang="scss">
.c-history-item {
  width: 100%;
  background-color: $dark_white;
  height: 82px;
  border-radius: 2px;
  margin-bottom: rem(10);
  @extend %df;
  @extend %aic;
  padding-left: rem(17);
  position: relative;
  // .c-history-item__img

  &__img {
    max-width: rem(54);
  }

  // .c-history-item__content

  &__content {
    margin-left: rem(20);
  }

  // .c-history-item__title

  &__title {
    @extend %text-middle;
    color: $gray;
  }

  // .c-history-item__duration

  &__duration {
    @extend %text-small-big-line-height;
    color: $gray;
    span {
      @extend %btn-text;
      color: $black;
    }
  }
  &__date {
    @extend %text-small-big-line-height;
    color: $gray;
    position: absolute;
    bottom: 23px;
    right: 13px;
  }
}
@include bp(766px) {
  .c-history-item {
    position: relative;
    &__img {
      max-width: 30px;
    }
    &__title {
      font-size: rem(14);
    }
    &__duration {
      font-size: rem(12);
      span {
        font-size: rem(12);
      }
    }
    &__date {
      position: absolute;
      bottom: 8px;
      right: 10px;
      font-size: rem(10);
    }
  }
}
</style>
