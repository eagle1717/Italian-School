<template>
  <div>
    <div class="c-notification">
      <div class="c-notification__wrapper">
        <div class="c-notification__wrapper-info">
          <img
            class="c-notification__wrapper-info-picture"
            :src="require(`@/assets/notifications/${img}`)"
            alt="notification"
          />
          <div>
            <p v-html="text"></p>
          </div>
        </div>
        <div class="c-notification__wrapper-link">
          <a
            class="c-notification__wrapper-link-item flex"
            href=""
            target="_blank"
            ><div v-html="linkText"></div>
            <div class="arrow-wrapper-link">
              <img src="/img/icons/arrow-right.svg" alt="arrow-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
.c-notification {
  width: 100%;
  height: rem(86);
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  padding: 0 rem(39) 0 rem(22);
  cursor: default;
  // padding: 16px 15px;
  border: 1px solid $soft_gray;
  border-radius: 2px;
  margin-bottom: rem(2);
  p {
    @extend %text-small;
    color: $black;
    .teacher-name {
      color: $red;
      font-weight: 700;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  &:hover {
    .c-notification {
      &__wrapper-link {
        opacity: 1;
        @extend %evt-all;
      }
    }
  }
  &__wrapper {
    width: 100%;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    &-info {
      @extend %df;
      @extend %aic;
      &-picture {
        margin-right: rem(23);
      }
    }
    &-link {
      @extend %df;
      @extend %aic;
      @extend %evt-none;
      opacity: 0;
      transition: all 0.5s ease;
      &-item {
        @extend %text-small;
        color: $gray;
      }
      .arrow-wrapper-link {
        margin-left: 12px;
      }
    }
  }

  &__teacher {
    @extend %text-middle;
    @extend %dib;
    color: $red;
    border-bottom: 1px solid $red;
    margin: 0 3px;
  }
}
@include bp(766px) {
  .c-notification {
    padding-right: 14px;
    padding-left: 12px;
    min-height: 45px;
    height: auto;
    img {
      margin-right: 10px;
      width: 28px;
      height: 20px;
    }
    p {
      font-size: rem(10);
      span {
        font-size: rem(10);
        border: none;
        text-decoration: underline;
      }
    }
    &__wrapper-link {
      display: none;
    }
  }
}
</style>
