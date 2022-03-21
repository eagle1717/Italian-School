<template>
  <div class="c-message" @click="open">
    <div
      :class="{ 'c-message__content--answer': isAnswered, open: isOpen }"
      class="c-message__content"
    >
      <div class="c-message__img">
        <img
          v-if="isAnswered"
          src="@/assets/img/ill/faq/question-pased.svg"
          alt="wait"
        />
        <img
          v-else
          src="@/assets/img/ill/faq/question-waiting.svg"
          alt="wait"
        />
      </div>
      <div class="c-message__text">
        <h2 class="c-message__title">{{ title }}</h2>
        <p class="c-message__description">
          {{ description }}
        </p>
      </div>
      <div class="c-message__status">
        <button
          :class="{ 'c-message__status--answer': isAnswered }"
          class="c-message__status-btn"
        >
          {{ isAnswered ? "Ответ получен" : "В ожидании" }}
        </button>
        <p class="c-message__status-date">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    id: {
      type: Number
    },
    isAnswer: {
      type: Array
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    messages: {
      type: Array
    },
    isAnswered: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open() {
      if (!this.isOpen && this.isAnswered) {
        this.$store.dispatch("show_reservation_lesson_modal", {
          data: {
            messages: this.messages,
            title: this.title,
            id: this.id,
            first_message: this.description,
          },
          modal_name: "chat-modal"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.c-message {
  &__content {
    height: rem(144);
    max-height: rem(144);
    border-radius: 2px;
    background: #f7f7f7;
    padding: rem(30) rem(35);
    margin-bottom: 13px;
    @extend %df;
    @extend %jcsb;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
    .c-message__img {
      align-self: center;
    }
    &--answer {
      background: $light-green;

      &:hover {
        border-color: $green;
      }
    }
    &.open {
      max-height: 100%;
      height: auto;
      .c-message__description {
        max-height: 100%;
        height: auto;
      }
    }
  }

  &__status {
    @extend %df;
    @extend %jcsb;
    @extend %fdc;
    @extend %aife;

    &--answer {
      @extend %btn-border-green;
      padding: 6px 25px;
    }

    &-btn {
      @extend %btn-border-black;
    }
  }

  &__title {
    @extend %text-big;
  }

  &__description {
    display: block;
    max-width: rem(500);
    max-height: rem(42);
    @extend %text-small-big-line-height;
    color: $gray;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: rem(19);
  }
  &__status-date {
    @extend %text-middle;
    color: $gray;
  }
  &__text {
    min-width: 60%;
    max-width: 60%;
  }
}
@include bp(766px) {
  .c-my-message__question-title-tag {
    font-size: 18px !important;
  }
  .c-help__wrap-term {
    width: 100%;
  }
  .c-message {
    position: relative;
    .c-message__img {
      img {
        width: 61px;
        height: 44px;
      }
    }
    &__content {
      padding: 8px 12px;
      height: 90px;
    }
    &__text {
      padding-right: 42px;
    }
    &__title {
      font-size: rem(14);
    }
    &__description {
      font-size: rem(10);
      margin-top: 5px;
    }
    &__status {
      &-btn {
        position: absolute;
        top: 7px;
        right: 10px;
        border: none;
        padding: 0;
        font-size: rem(10);
      }
      &-date {
        position: absolute;
        bottom: 7px;
        right: 10px;
        font-size: rem(10);
      }
    }
  }
  .c-my-message {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }
}
.c-my-message__question-btn-item {
  @include bp(620px) {
    height: 30px;
    width: 127px;
    font-size: 12px !important;
    padding: 0px !important;
  }
}
</style>
