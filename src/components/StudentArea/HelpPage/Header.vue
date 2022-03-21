<template>
  <div class="c-help__header">
    <div class="c-help__wrap-title">
      <h3 class="c-help__wrap-title-tag">{{ pageTitle }}</h3>
    </div>
    <div
      class="c-help__wrap-term"
      :class="{ removeFlex: $route.name === 'Help' }"
    >
      <BaseSearch placeholder="Ваш вопрос" class="quest" />
      <router-link
        :to="{ name: 'Help' }"
        class="c-help__message-btn faq"
        v-if="$route.name === 'MyMessage'"
        >FAQ</router-link
      >
      <router-link
        :to="{ name: 'MyMessage' }"
        class="c-help__message-btn msg"
        v-else
        >Мои сообщения</router-link
      >
    </div>
  </div>
</template>

<script>
import BaseSearch from "@/components/Base/BaseSearch";

export default {
  name: "Header",
  components: { BaseSearch },
  props: {
    btnTitle: {
      type: String
    },
    pageTitle: {
      type: String
    },
    btnRouteName: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.c-search__wrap-field {
  input.c-search__field {
    padding-right: 10px;
  }
}
.c-help__message-btn {
  font-family: "Circe-Bold" !important;
}
.c-search__wrap-field {
  border-radius: 2px;
  height: 35px;
}
.c-help__header {
  @include bp(620px) {
    margin-bottom: 0px !important;
  }
}
.c-help {
  &__message-btn {
    margin-left: rem(20);
  }
  .c-help__wrap-title-tag {
    padding-top: 9px;
    height: 29px;
  }
  .quest {
    input::placeholder {
      color: #251c1c;
      font-size: 14;
      font-weight: 400;
    }
  }
  &__header {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    margin-bottom: 24px;
  }

  &__wrap {
    &-title {
      &-tag {
        @extend %h3-title-bold;
        color: $gray;
      }
    }

    &-term {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      width: max-content;
    }
  }
}
.removeFlex {
  @media screen and (max-width: 355px) {
    display: initial;
    .c-help__message-btn {
      margin-top: 5px !important;
      margin-left: 0px;
    }
  }
}
.c-help {
  @include bp(766px) {
    &__wrap-title {
      margin-bottom: 21px;
    }
    &__header {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
@include bp(620px) {
  .c-help__message-btn {
    width: 127px !important;
  }
  .c-help__message-btn,
  .c-search__wrap-field {
    height: 30px !important;
    font-size: 12px !important;
    padding: 0px !important;
  }
  .c-help__wrap-title-tag {
    font-size: rem(14) !important;
  }
  .c-search__wrap-field {
    max-width: 183px;
    padding: 10px !important;
  }
  .c-search__search-btn {
    width: 10px;
    height: 10px;
  }
  &__wrap-term {
    .c-search {
      &__wrap-field {
        width: 100%;
        font-size: rem(10);
      }
    }
  }
}
.c-help__message-btn {
  @include bp(375px) {
    width: 100px !important;
  }
  @include bp(345px) {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
