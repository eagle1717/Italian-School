<template>
  <div class="c-notification">
    <div class="c-notification__wrapper">
      <div class="c-notification__wrapper-info">
        <img
          class="c-notification__wrapper-info-picture"
          :src="require(`@/assets/notifications/${img}`)"
          alt="notification"
        />
        <div class="notification-information">
          <p v-html="text" class="notification-text"></p>
        </div>
      </div>
      <div class="c-notification__wrapper-link">
        <a
          class="c-notification__wrapper-link-item flex"
          href=""
          target="_blank"
          ><div v-html="linkText" class="link-text"></div>
          <div class="arrow-wrapper-link">
            <img src="@/assets/img/icons/arrow-right.svg" alt="arrow-right" />
          </div>
        </a>
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
  min-height: rem(86);
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  padding: 28px rem(39) 28px rem(22);
  cursor: default;
  border: 1px solid $soft_gray;
  border-radius: 2px;
  margin-bottom: rem(2);
  .notification-text {
    @extend %text-small;
    color: $black;
    .teacher-name {
      color: $red;
      font-family: "Circe-Bold";
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
      @media screen and (max-width: 1310px) {
        opacity: 1;
      }
      @media screen and (max-width: 550px) {
        .link-text {
          font-size: 10px;
        }
        .arrow-wrapper-link {
          display: none
        }
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
</style>
