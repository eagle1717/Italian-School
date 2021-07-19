<template>
  <div class="c-user-level">
    <div class="c-user-level__wrap c-user-level__wrap_left">
      <h3 class="c-user-level__title">
        Ваш уровень
      </h3>
      <template v-if="!isCheckLevel">
        <p class="c-user-level__text">
          Ваш уровень не<br />
          подтвержден
        </p>
        <router-link :to="{ name: 'FindOutLevel' }" class="c-user-level__link">
          Выбрать уровень
        </router-link>
      </template>
      <template v-else>
        <img
          :src="require(`@/assets/img/ill/level/${levels.a1.img}.svg`)"
          class="level-show-image"
          :alt="levels.a1.text"
        />
      </template>
    </div>
    <div class="flex">
      <div
        class="c-user-level__wrap c-user-level__wrap_right grammar-percentage"
      >
        <p class="c-user-level__wrap-item">Грамматика</p>
        <CircleProgress :percent="percentage" />
      </div>
      <div
        class="c-user-level__wrap c-user-level__wrap_right leksik-percentage"
      >
        <p class="c-user-level__wrap-item">Лексика</p>
        <CircleProgress :percent="percentage" />
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from "@/components/StudentArea/LevelPage/CircleProgress";
import { mapState } from "vuex";
export default {
  components: { CircleProgress },
  data() {
    return {
      isCheckLevel: true,
      levels: {
        a1: {
          text: "A1",
          img: "a1"
        },
        a2: {
          text: "A2",
          img: "a2"
        },
        b1: {
          text: "B1",
          img: "b1"
        },
        b2: {
          text: "B2",
          img: "b2"
        },
        c1: {
          text: "C1",
          img: "c1"
        }
      },
      percentage: 68
    };
  },
  computed: {
    ...mapState({ user: state => state.user.user })
  }
};
</script>

<style lang="scss">
.c-user-level {
  @extend %df;
  @extend %jcsa;
  @extend %aic;
  height: rem(150);
  width: rem(430);
  border: 1px solid #4b4b4b;
  border-radius: 2px;
  .c-user-level__wrap_left {
    padding-top: 5px;
  }
  &__title {
    @extend %text-big;
    color: $black;
    margin-bottom: 11px;
  }
  &__wrap-item {
    margin-bottom: 5px;
  }
  &__text {
    @extend %text-small-big-line-height;
    color: $gray;
  }
  &__link {
    @extend %dib;
    margin-top: 7px;
    @extend %btn-text;
    color: $red;
  }
  &__wrap {
    &-item {
      @extend %text-small;
      color: #4b4b4b;
    }
  }
}
.leksik-percentage {
  margin-left: 20px;
  text-align: center;
}
@include bp(1360px) {
  .c-user-level {
    margin-right: 20px;
  }
}
@include bp(1310px) {
  .c-user-level {
    width: calc(100% / 2);
    margin-right: 20px;
  }
}
@include bp(766px) {
  .c-user-level {
    width: 100%;
    margin-right: 0;
    margin-bottom: 13px;
    padding-left: 18px;
    padding-right: 18px;
    align-items: flex-start;
    justify-content: space-between;
    align-items: center;
  }
}
@include bp($mobile) {
  .c-user-level {
    height: 113px;
    padding: 0 10px;
    &__wrap-item {
      margin-bottom: 5px;
    }
    .c-user-level__text,
    .c-user-level__link {
      font-size: 12px;
      line-height: 100%;
    }
    .leksik-percentage {
      margin-left: 10px;
    }
    .level-show-image {
      width: 97px;
      height: 45.93px;
    }
    .c-user-level__wrap-item {
      font-size: 10px;
      text-align: center;
    }
    .c-circle-progress {
      width: 68.13px;
      height: 67.93px;
    }
    .c-circle-progress__percent {
      font-size: 10px;
    }
    &__img {
      width: 80px;
    }
    &__title {
      font-size: rem(14);
    }
  }
}
</style>
