<template>
  <div class="c-accordion" @click="open" :class="{ open: isShow }">
    <div class="c-accordion__content-holder">
      <div class="c-accordion__content-holder-image">
        <img
          class="c-accordion__content-holder-image-item"
          :src="image ? image : `img/ill/faq/what-is-it.svg`"
          alt="Image"
        />
      </div>
      <div class="c-accordion__content-holder-description">
        <h2 class="c-accordion__content-holder-title">{{ title }}</h2>
        <div class="c-accordion__content-holder-arrow">
          <button
            class="c-accordion__content-holder-arrow-item"
            :class="{
              'c-accordion__content-holder-arrow-item--active': isShow
            }"
            @click="isShow = !isShow"
          >
            <BaseIcon name="arrow-down"></BaseIcon>
          </button>
        </div>
        <p class="c-accordion__hide-text" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    }
  },
  methods: {
    open() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss">
.c-accordion {
  background-color: rgba(247, 247, 247, 1);
  border-radius: 2px;
  margin-top: 13px;
  height: 144px;
  padding: rem(30) rem(35);
  overflow: hidden;
  cursor: pointer;
  transition: height 0.5s ease-in;
  .icon {
    width: 16px;
    height: 10px;
    fill: transparent;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: $black;
    color: $black;
    transition: all 0.5s ease;
  }
  &.open {
    height: 100%;
    padding-bottom: 34px;
    transition: height 0.5s ease-in;
    .icon {
      stroke: $green;
      color: $green;
    }
    .c-accordion__hide-text {
      max-height: 100%;
      height: auto;
    }
  }
  &__content-holder {
    @extend %df;
    @extend %jcsb;

    position: relative;

    &-description {
      padding: 0 20px 0 0;
      width: 85%;
    }

    &-title {
      @extend %text-big;
    }

    &-arrow {
      &-item {
        width: 12px;
        cursor: pointer;
        opacity: 0.7;
        transition: all 0.5s ease;
        position: absolute;
        top: 15px;
        right: 0;
        &--active {
          transform: rotate(180deg);
          svg {
            path {
              stroke: $green;
            }
          }
        }
      }
    }

    &__image {
      &-item {
        width: 100px;
        height: 100px;
      }
    }
  }

  &__show-text {
    @extend %text-small;
    margin-top: 19px;
  }

  &__hide-text {
    display: block;
    max-width: rem(500);
    max-height: 42px;
    @extend %text-small;
    color: $gray;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: rem(19);
    transition: max-height 0.5s ease;
  }
}
@include bp(1310px) {
  .c-accordion {
    &__content-holder-description {
      margin-left: 30px;
    }
  }
}
@include bp(766px) {
  .c-accordion {
    padding: 12px;
    &__content-holder-image {
      max-width: 54px;
      img {
        max-width: inherit;
      }
    }
    &__content-holder-description {
      margin-left: 13px;
    }
    &__content-holder-title {
      font-size: rem(14);
    }
    &__hide-text {
      font-size: rem(10);
      line-height: rem(14);
      margin-top: 5px;
    }
  }
}
</style>
