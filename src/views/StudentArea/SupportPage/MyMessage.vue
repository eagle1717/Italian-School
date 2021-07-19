<template>
  <div class="c-my-message">
    <Header
      btnTitle="FAQ"
      pageTitle="Поддержка пользователей"
      btnRouteName="Help"
      v-model="searchQuery"
    />
    <template v-if="hasOwnQuestions">
      <div class="c-faq__content">
        <img
          class="c-faq__content-icon"
          src="/img/ill/faq/you-have-no-messages.svg"
          alt="picture-message"
        />
        <h2 class="c-faq__content-title">У Вас ещё нет сообщений.</h2>
        <p class="c-faq__content-info">
          Если у вас есть вопросы, замечания, пожелания <br />
          вы просто хотите поговорить - напишите нам!
        </p>
        <button @click="openModal" class="c-faq__content-btn">
          Задать вопрос в поддержку
        </button>
      </div>
    </template>
    <template v-else>
      <div class="c-my-message__container">
        <div class="c-my-message__question">
          <div class="c-my-message__question-title">
            <h2 class="c-my-message__question-title-tag">
              Мои сообщения
            </h2>
          </div>
          <div class="c-my-message__question-btn">
            <button class="c-my-message__question-btn-item" @click="openModal">
              Новый вопрос
            </button>
          </div>
        </div>
        <!--        <div class="c-my-message__content">-->
        <transition-group name="list" tag="div" class="c-my-message__content">
          <Message
            v-for="message of messages"
            :key="message.id"
            :id="message.id"
            :description="message.description"
            :date="message.date"
            :title="message.title"
            :isAnswered="message.isAnswer"
            :is-answer="message.messages"
            :messages="message.messages"
          />
        </transition-group>
        <!--        </div>-->
      </div>
    </template>
  </div>
</template>

<script>
import Header from "@/components/StudentArea/HelpPage/Header";
import Message from "@/components/StudentArea/HelpPage/Message";
import { mapMutations } from "vuex";
export default {
  name: "MyMessage",
  components: {
    Message,
    Header
  },
  data() {
    return {
      searchQuery: "",
      hasOwnQuestions: false,
      messages: [
        {
          id: 1,
          date: "12.02.20",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto\n" +
            "          minima, unde. A, ad beatae, eaque enim est exercitationem, facere illo\n" +
            "          libero porro repellat saepe sequi voluptas. Amet assumenda aut\n" +
            "          blanditiis consequuntur dolor earum enim harum illo impedit nam nemo\n" +
            "          obcaecati rerum saepe sit soluta, tempore voluptates. Distinctio\n" +
            "          fugiat ipsum mollitia repellat voluptatibus. Aperiam, at labore minus\n" +
            "          quia quibusdam quod ullam vitae! Accusantium, alias autem culpa\n" +
            "          doloremque excepturi ipsa iste iusto possimus quam quidem rerum vitae?",
          title: "Почему выдает ошибку?",
          isAnswer: false
        },
        {
          id: 2,
          date: "11.02.20",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto\n" +
            "          minima, unde. A, ad beatae, eaque enim est exercitationem, facere illo\n" +
            "          libero porro repellat saepe sequi voluptas. Amet assumenda aut\n" +
            "          blanditiis consequuntur dolor earum enim harum illo impedit nam nemo\n" +
            "          obcaecati rerum saepe sit soluta, tempore voluptates. Distinctio\n" +
            "          fugiat ipsum mollitia repellat voluptatibus. Aperiam, at labore minus\n" +
            "          quia quibusdam quod ullam vitae! Accusantium, alias autem culpa\n" +
            "          doloremque excepturi ipsa iste iusto possimus quam quidem rerum vitae?",
          title: "Ваш вопрос 1",
          isAnswer: true
        },
        {
          id: 3,
          date: "12.02.21",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto\n" +
            "          minima, unde. A, ad beatae, eaque enim est exercitationem, facere illo\n" +
            "          libero porro repellat saepe sequi voluptas. Amet assumenda aut\n" +
            "          blanditiis consequuntur dolor earum enim harum illo impedit nam nemo\n" +
            "          obcaecati rerum saepe sit soluta, tempore voluptates. Distinctio\n" +
            "          fugiat ipsum mollitia repellat voluptatibus. Aperiam, at labore minus\n" +
            "          quia quibusdam quod ullam vitae! Accusantium, alias autem culpa\n" +
            "          doloremque excepturi ipsa iste iusto possimus quam quidem rerum vitae?",
          title: "Почему выдает ошибку?",
          isAnswer: false
        },
        {
          id: 4,
          date: "12.06.20",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto\n" +
            "          minima, unde. A, ad beatae, eaque enim est exercitationem, facere illo\n" +
            "          libero porro repellat saepe sequi voluptas. Amet assumenda aut\n" +
            "          blanditiis consequuntur dolor earum enim harum illo impedit nam nemo\n" +
            "          obcaecati rerum saepe sit soluta, tempore voluptates. Distinctio\n" +
            "          fugiat ipsum mollitia repellat voluptatibus. Aperiam, at labore minus\n" +
            "          quia quibusdam quod ullam vitae! Accusantium, alias autem culpa\n" +
            "          doloremque excepturi ipsa iste iusto possimus quam quidem rerum vitae?",
          title: "Ваш вопрос 1",
          isAnswer: true
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    openModal() {
      this.SHOW_MODAL("faq");
    }
  }
};
</script>

<style lang="scss">
.c-my-message {
  @extend %pagept;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-left: 0px;
  .c-faq__content {
    margin-left: 20px;
    padding-top: 38px;
  }
  &__container {
    max-width: 892px;;
    @extend %m0a;
  }
  input {
    &::placeholder {
      color: #251c1c;
    }
  }
  &__content {
    width: 100%;
  }

  &__question {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    margin: 35px 0;

    &-title {
      &-tag {
        @extend %h3-title-bold;
      }
    }

    &-btn {
      &-item {
        @extend %btn-all-green;
        padding: 7px 22px;
        &:hover {
          @extend %btn-darkgreen;
        }
      }
    }
  }
}
.c-faq {
  &__content {
    padding-top: rem(63);
    @extend %df;
    @extend %jcc;
    @extend %aifs;
    @extend %fdc;
    @extend %h100;

    &-icon {
      margin-bottom: rem(20);
      width: 274px;
      height: 209px;
    }

    &-title {
      @extend %text-big;
      margin: rem(21) 0;
    }

    &-info {
      @extend %text-middle;
      color: $black;
      max-width: rem(441);
    }

    &-btn {
      margin-top: rem(40);
      @extend %btn-all-green;
      padding: 14.5px 20px;
      &:hover {
        @extend %btn-darkgreen;
      }
    }
  }
}
@include bp(1360px) {
  .c-my-message {
    padding-right: 30px;
    padding-bottom: 50px;
  }
}
@include bp(1310px) {
  .c-my-message {
    padding: 50px 0 50px 0;
    margin: 0 auto;
    max-width: 750px;
  }
}
@include bp(766px) {
  .c-my-message {
    max-width: 320px;
    &__question-title-tag {
      font-size: rem(16);
      line-height: rem(17);
    }
    &__question-btn-item {
      width: 127px;
      height: 30px;
      font-size: rem(12);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
