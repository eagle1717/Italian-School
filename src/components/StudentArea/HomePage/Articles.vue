<template>
  <div class="c-home-articles">
    <BaseSlider title="Последние статьи" :slides="articles">
      <template class="c-home-articles__wrapper" v-slot="{ slide }">
        <a
          :href="slide.link"
          class="c-home-articles__slide"
          :key="slide.id"
          target="_blank"
        >
          <img
            class="c-home-articles__slide-picture"
            :src="slide.image"
            alt=""
          />
          <p class="c-home-articles__slide-description" v-html="slide.desc"></p>
          <p class="c-home-articles__slide-date">{{ slide.date }}</p>
        </a>
      </template>
    </BaseSlider>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: [
        {
          image: "/img/ill/slider/slider-item1.jpeg",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020"
        },

        {
          image: "/img/ill/slider/slider-item3.jpeg",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020"
        },
        {
          image: "/img/ill/slider/slider-item3.jpeg",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.article-enter-active,
.article-leave-active {
  transition: all 0.5s ease;
  transform: translateY(0);
  opacity: 1;
}
.article-enter,
.article-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
.c-home-articles {
  &__wrapper {
    @extend %df;
    @extend %aic;
  }
  &__slide {
    @extend %df;
    @extend %fdc;
    width: rem(430);
    transition: all 0.5s ease;
    &:hover {
      .c-home-articles {
        &__slide {
          &-description {
            color: $green;
          }
        }
      }
    }
    &-picture {
      width: 100%;
      height: rem(270);
      object-fit: cover;
    }
    &-description {
      @extend %text-middle;
      color: $black;
      margin-top: rem(20);
      margin-bottom: rem(9);
      transition: all 0.5s ease;
    }

    &-date {
      @extend %text-small;
      color: $light-grey;
    }
  }
}
@include bp(1360px) {
  .c-home-articles {
    &__slide {
      max-width: 400px;
    }
  }
}
@include bp(1100px) {
  .c-home-articles {
    &__slide {
      max-width: 365px;
      &-picture {
        height: 228px;
      }
    }
  }
}
@include bp(766px) {
  .c-home-articles {
    flex-direction: column;
    &__slide {
      width: 100%;
      margin-bottom: 30px;
      img {
        height: 198px;
      }
    }
  }
}
</style>
