<template>
  <div class="c-home-video">
    <BaseSlider title="Последние видео" :slides="articles">
      <template class="c-home-video__wrapper" v-slot="{ slide }">
        <a
          href="https://google.com"
          target="_blank"
          class="c-home-video__slide"
          :key="slide.image"
        >
          <img
            class="c-home-video__slide-picture"
            :src="slide.image"
            :alt="slide.image"
          />
          <div class="c-home-video__slide-subpicture">
            <img
              class="c-home-video__slide-subpicture-item"
              :src="slide.icon"
              :alt="slide.icon"
            />
          </div>
        </a>
      </template>
    </BaseSlider>
  </div>
</template>

<script>
export default {
  name: "VideoSlider",
  data() {
    return {
      articles: [
        {
          image: "/img/ill/slider/slider-item1.jpeg",
          icon: "/img/ill/slider/play.svg"
        },

        {
          image: "/img/ill/slider/slider-item2.jpeg",
          icon: "/img/ill/slider/play.svg"
        },
        {
          image: "/img/ill/slider/slider-item3.jpeg",
          icon: "/img/ill/slider/play.svg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-home-video {
  margin-top: rem(80);

  .c-slider {
    padding-top: 0px;
  }
  &__wrapper {
    @extend %df;
    @extend %aic;
  }

  &__slide {
    @extend %df;
    @extend %fdc;
    width: rem(430);
    position: relative;
    height: 242px;
    &-picture {
      border-radius: 5px;
      height: 100%;
      object-fit: cover;
    }
  }

  &__slide-subpicture {
    &-item {
      z-index: 2;
      @extend %absolute-center;
      cursor: pointer;
    }
  }
}
@include bp(1360px) {
  .c-home-video {
    &__slide {
      max-width: 400px;
    }
  }
}
@include bp(1100px) {
  .c-home-video {
    &__slide {
      max-width: 365px;
      &-picture {
        height: 228px;
      }
    }
  }
}
@include bp(766px) {
  .c-home-video {
    margin-top: 0px;
    padding-top: 0;
    &__slide {
      width: 100%;
      margin-bottom: 30px;
    }
    &__slide-picture {
      height: 180px;
    }
  }
}
</style>
