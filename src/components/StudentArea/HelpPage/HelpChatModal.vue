<template>
  <BaseModal class="c-help-chat__modal">
    <div class="c-help-chat">
      <div class="chat-navbar flex justify-between">
        <button class="go-back-button" @click="hideModal">
          <div><img src="@/assets/arrow-left.svg" alt="arrow" /></div>
          <div class="go-back-text">Назад</div>
        </button>
        <div class="c-help-chat__header">
          <router-link :to="{ name: 'Help' }" class="c-help-chat__faq-btn">
            <span>FAQ</span>
          </router-link>
        </div>
      </div>
      <div class="c-help-chat__chat">
        <div class="c-help-chat__chat-header">
          <h4 class="c-help-chat__chat-title">
            {{ title }}
          </h4>
        </div>
        <ul class="c-help-chat__chat-main" ref="chatWindow">
          <BaseChatMessage :description="first_message" :type="'question'" />
          <BaseChatMessage
            v-for="message in messages"
            :key="message.id"
            :description="message.description"
            :type="message.type"
          />
        </ul>
        <form class="c-help-chat__form">
          <input
            type="text"
            v-model="new_message"
            placeholder="Ваше сообщение..."
          />
          <div
            v-tooltip="{ text: 'Отправьте сообщение' }"
            class="msg-icon-wrapper"
          >
            <button>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8273 8.87094L3.33046 0.237309C2.17794 -0.332302 0.790838 0.158655 0.232194 1.3339C-0.0526535 1.93317 -0.0764777 2.62711 0.166565 3.24526L2.89991 10.2109H22C21.7989 9.62331 21.3771 9.14127 20.8273 8.87094Z"
                  fill="#39B100"
                />
                <path
                  d="M2.89942 11.7871L0.166073 18.7544C-0.308235 19.9708 0.274278 21.3489 1.46716 21.8326C1.73724 21.9422 2.02513 21.9991 2.31577 22.0003C2.66697 22.0003 3.01365 21.9195 3.32993 21.7639L20.8268 13.1271C21.3765 12.8567 21.7984 12.3747 21.9994 11.7871H2.89942Z"
                  fill="#39B100"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HelpChatModal",
  props: {
    ticketId: {
      type: Number
    },
    title: {
      type: String
    },
    first_message: {
      type: String
    },
    messages: {
      type: Array
    }
  },
  data() {
    return {
      new_message: null,
      local_message: this.messages
    };
  },
  mounted() {
    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
  },
  updated() {
    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight;
  },
  methods: {
    ...mapMutations(["HIDE_MODAL"]),
    checkScroll(ths) {
      return ths.scrollTop + ths.clientHeight;
    },
    hideModal() {
      this.HIDE_MODAL();
    }
  }
};
</script>

<style lang="scss">
.c-help-chat__modal {
  width: 705px !important;
  .mobile-nav__burger {
    display: none;
  }
  .go-back-button {
    display: flex;
    align-items: center;
    .go-back-text {
      margin-left: 12px;
      font-family: "Circe-Bold";
    }
    @media screen and (max-width: 620px) {
      .go-back-text {
        font-size: 12px;
      }
    }
  }
  .c-tooltip {
    position: fixed;
    border: 1px solid $gray;
    width: max-content;
    background: #fff;
    padding: 1px 5px;
    z-index: 20;
    @extend %text-small;

    &::before {
      content: "";
      position: absolute;
      background: #fff;
      left: 50%;
      bottom: -4px;
      width: 7px;
      height: 7px;
      transform: rotate(45deg) translateX(-50%);
      -webkit-transform: rotate(45deg);
      border-bottom: 1px solid;
      border-right: 1px solid;
      border-radius: 31%;
    }
  }
}
.c-help-chat {
  max-width: rem(525);
  margin: 0 auto;
  padding-top: 35px;
  input {
    padding-left: 18px;
  }
  &__header {
    @extend %df;
    justify-content: flex-end;
  }
  &__faq-btn {
    @extend %simple-btn-red-border;
    width: 147px;
    height: 35px;
    @media screen and (max-width: 620px) {
      height: 30px;
      width: 127px;
      span {
        font-size: 12px;
      }
    }
  }
  .c-help-chat__faq-btn {
    span {
      color: $red !important;
      transition: all 0.4s ease;
    }
    &:hover {
      span {
        color: $white !important;
        transition: all 0.4s ease;
      }
    }
  }
  &__chat {
    &-header {
      width: 100%;
      min-height: 60px;
      @extend %df;
      @extend %aic;
      border: 1px solid #d8d8d8;
      border-radius: 2px 2px 0px 0px;
      margin-top: 25px;
      padding: 6px 26px;
      @media screen and (max-width: 620px) {
        min-height: 37px;
      }
    }
    &-title {
      @extend %text-big;
      color: $black;
    }
    &-main {
      background-color: #f7f7f7;
      height: 450px;
      overflow: scroll;
      padding: 12px 10px 26px;
      width: 100%;
      @extend %reset-scroll-bar;
    }
  }
  &__form {
    width: 100%;
    height: 50px;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    border: 1px solid #d8d8d8;
    border-radius: 0px 0px 2px 2px;
    position: relative;
    @media screen and (max-width: 620px) {
      height: 35px;
    }
    input {
      width: 90%;
      height: 100%;
      @extend %input-reset;
      @extend %text-small-big-line-height;
      color: $gray;
      @media screen and (max-width: 620px) {
        font-size: 10px;
      }
    }
    .msg-icon-wrapper {
      position: absolute;
      right: 20px;
      @media screen and (max-width: 620px) {
        right: 13px;
      }
      button {
        vertical-align: middle;
        svg {
          width: 22px;
          height: 22px;
          @media screen and (max-width: 620px) {
            width: 13.5px;
            height: 13.5px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) and (min-width: 1310px) and (min-height: 600px) {
  .c-help-chat {
    &__modal {
      overflow: scroll;
    }
  }
}
@include bp(620px) {
  .c-help-chat {
    padding-left: 25px;
    padding-right: 25px;
    .c-help-chat__chat-title {
      font-size: 14px;
    }
  }
}
</style>
