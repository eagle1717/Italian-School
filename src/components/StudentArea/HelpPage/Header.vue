<template>
  <div class="c-help__header">
    <div class="c-help__wrap-title">
      <h3 class="c-help__wrap-title-tag">{{ pageTitle }}</h3>
    </div>
    <div class="c-help__wrap-term">
      <BaseSearch
        placeholder="Ваш вопрос"
        v-model="searchInput"
        @input="searchQuery"
        class="quest"
      />
      <router-link
        to="/help"
        class="c-help__message-btn faq"
        v-if="$route.name === 'MyMessage'"
        >FAQ</router-link
      >
      <router-link to="/my-message" class="c-help__message-btn msg" v-else
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
  },
  data() {
    return {
      searchInput: null
    };
  },
  methods: {
    searchQuery() {
      this.$emit("input", this.searchInput);
    }
  }
};
</script>

<style lang="scss">
.c-search__wrap-field {
  border-radius: 2px;
  height: 35px;
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
@include bp(766px) {
  .c-help {
    &__header {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &__wrap-title {
      margin-bottom: 21px;
      &-tag {
        font-size: rem(16);
      }
    }
    &__wrap-term {
      .c-search {
        width: 183px;
        &__wrap-field {
          width: 100%;
          font-size: rem(10);
        }
      }
    }
  }
}
</style>
