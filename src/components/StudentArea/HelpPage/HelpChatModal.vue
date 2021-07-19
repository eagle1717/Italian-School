<template>
  <BaseModal class="c-help-chat__modal">
    <div class="c-help-chat">
      <div class="c-help-chat__header">
        <!--        <div class="c-help-chat__back">-->
        <!--          <svg-->
        <!--            width="8"-->
        <!--            height="13"-->
        <!--            viewBox="0 0 8 13"-->
        <!--            fill="none"-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--          >-->
        <!--            <path-->
        <!--              d="M7 12L1 6.5L7 1"-->
        <!--              stroke="#4B4B4B"-->
        <!--              stroke-width="1.5"-->
        <!--              stroke-linecap="round"-->
        <!--              stroke-linejoin="round"-->
        <!--            />-->
        <!--          </svg>-->
        <!--          <span>Назад</span>-->
        <!--        </div>-->
        <router-link :to="{ name: 'Help' }" class="c-help-chat__faq-btn">
          <span>FAQ</span>
        </router-link>
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
        <form @submit.prevent="send_message" class="c-help-chat__form">
          <input
            type="text"
            v-model="new_message"
            placeholder="Ваше сообщение..."
          />
          <div v-tooltip="{ text: 'Отправьте сообщение' }">
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
    checkScroll(ths) {
      return ths.scrollTop + ths.clientHeight;
    },
    send_message() {
      if (this.new_message) {
        this.$store
          .dispatch("user/send_ticket_message", {
            id: this.ticketId,
            data: { id: this.ticketId, description: this.new_message }
          })
          .then(() => {
            this.local_message.push({
              id: Math.floor(Math.random() * 365),
              description: this.new_message,
              type: "question"
            });
            this.new_message = null;
          });
      }
    }
  }
};
</script>

<style lang="scss">
.c-help-chat__modal {
  width: 705px !important;
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
  }
  &__chat {
    &-header {
      width: 100%;
      height: 60px;
      @extend %df;
      @extend %aic;
      padding-left: 26px;
      border: 1px solid #d8d8d8;
      border-radius: 2px 2px 0px 0px;
      margin-top: 25px;
    }
    &-title {
      @extend %text-big;
      color: $black;
    }
    &-main {
      background-color: $dark_white;
      height: 450px;
      overflow: scroll;
      padding: 12px 20px 26px;
      width: 100%;
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
    input {
      width: 90%;
      height: 100%;
      @extend %input-reset;
      @extend %text-small-big-line-height;
      color: $gray;
    }
    button {
      width: 42px;
      height: 100%;
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
@include bp(766px) {
  .c-help-chat {
    max-width: rem(320);
    overflow: scroll;
  }
}
</style>
