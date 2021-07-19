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
            :src="require(`@/assets/img/ill/slider/${slide.image}.jpeg`)"
            alt=""
          />
          <div class="article-description">
            <p
              class="c-home-articles__slide-description"
              v-html="slide.desc"
            ></p>
            <p class="c-home-articles__slide-date">{{ slide.date }}</p>
          </div>
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
          id: 1,
          image: "slider-item1",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020",
          link: "https://github.com"
        },

        {
          id: 2,
          image: "slider-item2",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020",
          link: "https://github.com"
        },
        {
          id: 3,
          image: "slider-item3",
          desc:
            "Ad ipsum mollit duis eiusmod nisi quis ullamco <br>Ad ipsum mollit duis",
          date: "12 февраля 2020",
          link: "https://github.com"
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
    max-width: 48%;
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
@include bp(766px) {
  .c-home-articles {
    flex-direction: column;
    img {
      z-index: -1;
    }
    .c-slider__remote {
      margin-bottom: -404px;
      position: relative;
    }
    &__slide {
      max-width: 100%;
      img {
        max-height: 198px;
      }
    }
  }
}
@include bp(550px) {
  .c-home-articles {
    .c-slider__remote {
      margin-bottom: -417px;
    }
  }
}
</style>
