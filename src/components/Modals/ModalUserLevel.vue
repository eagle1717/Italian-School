<template>
  <div class="c-modal-level">
    <div class="c-modal-level__select">
      <h2 class="c-modal-level__title">
        Cambiare il livello:
      </h2>
      <BaseSelect
        :isImagesOptions="true"
        :options="levelOptions"
        v-model="level"
      />
    </div>
    <div class="c-modal-level__progress">
      <div class="c-modal-level__wrap c-modal-level__wrap_left">
        <p class="c-modal-level__wrap-item">Grammatica:</p>
        <CircleProgress :percent="10" />
      </div>
      <div class="c-modal-level__wrap c-modal-level__wrap_right">
        <p class="c-modal-level__wrap-item">Lessico:</p>
        <CircleProgress :percent="5" />
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from "@/components/StudentArea/LevelPage/CircleProgress";
export default {
  name: "ModalUserLevel",
  components: {
    CircleProgress
  },
  props: {
    level: {
      type: String
    }
  },
  data() {
    return {
      levelOptions: [
        {
          val: "A1",
          text: "/img/ill/level/a1.svg"
        },
        {
          val: "A2",
          text: "/img/ill/level/a2.svg"
        },
        {
          val: "B1",
          text: "/img/ill/level/b1.svg"
        },
        {
          val: "B2",
          text: "/img/ill/level/b2.svg"
        },
        {
          val: "C1",
          text: "/img/ill/level/c1.svg"
        }
      ]
    };
  },
  created() {
    this.selectCurrent = this.level;
  }
};
</script>

<style lang="scss">
.c-modal-level {
  @extend %df;
  // .c-modal-level__select

  &__select {
    .select {
      width: rem(138);
      height: rem(65);
      &__wrapper {
        height: 100%;
      }
      &__wrap-val {
        height: 100%;
        img {
          max-width: rem(60);
        }
      }
      &__option {
        margin-bottom: rem(20);
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__option-btn {
        max-width: rem(60);
      }
    }
  }

  // .c-modal-level__title

  &__title {
    @extend %btn-text;
    margin-bottom: rem(8);
  }

  // .c-modal-level__progress

  &__progress {
    @extend %df;
    margin-left: rem(60);
  }

  // .c-modal-level__wrap

  &__wrap {
    // .c-modal-level__wrap_right

    &_right {
      margin-left: rem(22);
    }
  }

  // .c-modal-level__wrap-item

  &__wrap-item {
  }
}
@include bp(766px) {
  .c-modal-level {
    flex-direction: column;
    &__progress {
      margin-left: 0;
      margin-top: 30px;
    }
    &__wrap {
      &_right {
        /*margin-left: 0;*/
      }
    }
  }
}
</style>
