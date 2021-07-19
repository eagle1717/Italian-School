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
            :src="require(`@/assets/img/ill/slider/${slide.image}.jpeg`)"
            :alt="slide.image"
          />
          <div class="c-home-video__slide-subpicture">
            <img
              class="c-home-video__slide-subpicture-item"
              src="@/assets/img/ill/slider/play.svg"
              alt=""
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
          image: "slider-item1"
        },

        {
          image: "slider-item2"
        },
        {
          image: "slider-item3"
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
    max-width: 48%;
    position: relative;
    .c-home-video__slide-picture {
      width: 100%;
    }
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
@include bp(766px) {
  .c-home-video {
    margin-top: 50px;
    padding-top: 0;
    .c-home-video__slide-picture {
      position: relative;
      z-index: -1;
    }
    &__slide {
      max-width: 100%;
      max-height: 180px;
    }
  }
}
</style>
