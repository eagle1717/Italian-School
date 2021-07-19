<template>
  <div class="c-slider">
    <div class="c-slider__navigation">
      <h2>{{ title }}</h2>
      <div class="c-slider__remote">
        <button class="c-slider__remote-btn" @click="prevSlide">
          <svg
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L1 9.5L9 1"
              stroke="#251C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="c-slider__remote-btn" @click="nextSlide">
          <svg
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9.5L1 18"
              stroke="#251C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      tag="div"
      class="c-slider__wrapper"
      :name="back ? 'slideback' : 'slide'"
    >
      <slot v-for="slide in activeSlides" :slide="slide"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSlider",
  props: {
    title: {
      type: String,
      required: true
    },
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      offset: 0,
      back: false,
      windowWidth: window.innerWidth,
      perPage: 2
    };
  },
  computed: {
    activeSlides() {
      if (this.windowWidth < 766) {
        this.perPage = 1;
      } else {
        this.perPage = 2;
      }
      let slides = [...this.slides].splice(this.offset, this.perPage);
      if (slides.length === this.perPage) {
        return slides;
      }
      return [
        ...slides,
        ...[...this.slides].splice(0, this.perPage - slides.length)
      ];
    }
  },
  methods: {
    nextSlide() {
      let offset = this.offset + 2;
      if (offset >= this.slides.length) {
        offset = 0;
      }
      this.offset = offset;
      this.back = false;
    },
    prevSlide() {
      let offset = this.offset - 1;
      if (offset < 0) {
        offset = this.slides.length - 1;
      }
      this.offset = offset;
      this.back = true;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
.c-slider {
  width: 100%;
  padding-top: rem(80);
  overflow: hidden;
  h2 {
    @extend %h3-title-bold;
    color: $black;
  }
  &__wrapper {
    @extend %df;
    @extend %jcsb;
  }

  &__navigation {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    margin-bottom: rem(14);
  }
  &__remote {
    @extend %df;
    @extend %jcsb;
    &-btn {
      border-left: 1px solid $gray;
      border-top: 1px solid $gray;
      border-bottom: 1px solid $gray;
      padding: 24px 27.5px 24px 22.5px;
      background-color: $white;
      &:hover {
        background-color: $green;
        svg {
          path {
            stroke: $white;
          }
        }
      }
      &:last-child {
        border-right: 1px solid $gray;
        padding: 24px 22.5px 24px 27.5px;
      }
    }
  }
}
@include bp(766px) {
  .c-slider {
    position: relative;
    &__remote {
      z-index: 1000;
    }
    &__wrapper {
      flex-direction: column;
    }
    .c-slider__remote {
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  animation: slide;
}
.slide-leave-to {
  animation: slide-leave;
}

.slideback-leave-active,
.slideback-enter-active {
  transition: 1s;
}
.slideback-enter {
  animation: slide-leave;
}
.slideback-leave-to {
  animation: slide;
}

@keyframes slide {
  0% {
    transform: translate(33%, 0);
  }
  50% {
    transform: translate(66%, 0);
  }
  50% {
    transform: translate(500%, 0);
  }
}

@keyframes slide-leave {
  0% {
    transform: translate(-33%, 0);
  }
  50% {
    transform: translate(-66%, 0);
  }
  50% {
    transform: translate(-500%, 0);
  }
}
</style>
