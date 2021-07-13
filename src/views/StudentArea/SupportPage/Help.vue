<template>
  <div class="c-help">
    <div class="c-help__container">
      <Header
        btnTitle="Мои сообщения"
        pageTitle="Поддержка пользователей"
        btnRouteName="MyMessage"
      />
      <template>
        <div class="c-help__content">
          <transition-group name="list" tag="ul" class="list-ul">
            <li v-for="(question, index) in questions" :key="question.id">
              <Accordion
                :image="question.image"
                :title="question.title"
                :description="question.desc"
                :data-index="index"
              />
            </li>
          </transition-group>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/StudentArea/HelpPage/Accordion";
import Header from "@/components/StudentArea/HelpPage/Header";
export default {
  name: "Help",
  components: { Header, Accordion },
  data() {
    return {
      questions: [
        {
          id: 0,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Как пользоваться Studia.it?",
          image: "/img/ill/faq/how-to-use.svg"
        },
        {
          id: 1,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Что такое Studia.it?",
          image: "/img/ill/faq/what-is-it.svg"
        },
        {
          id: 2,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Как повышать уровень?",
          image: "/img/ill/faq/how-to-up-lavel.svg"
        },
        {
          id: 3,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Хочу работать у вас преподователем! Куда мне писать?",
          image: "/img/ill/faq/i-want-work.svg"
        },
        {
          id: 4,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Забыл пароль, что делать?",
          image: "/img/ill/faq/password.svg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-help__content {
  margin-top: 11px;
}
.c-help {
  padding-top: rem(35);
  padding-left: rem(30);
  max-width: rem(892);
  margin-left: $ml;
  margin-bottom: 50px;
  &__message-btn {
    width: rem(179);
    height: 35px;
    font-weight: 700;
  }
  &__not-found {
    /*<!--@extend  %df;-->*/
    /*<!--@extend  %fdc;-->*/
    /*<!--@extend  %jcc;-->*/
    img {
      display: block;
      margin: 30px auto 20px;
      width: auto;
      height: auto;
    }

    &-title {
      @extend %h2-title-regular;
      text-align: center;
      margin-bottom: 20px;
    }
    &-btn {
      @extend %simple-btn-green;
      margin: 0 auto;
      width: 200px;
    }
  }
}
@include bp(1360px) {
  .c-help {
    padding-right: 30px;
    padding-bottom: 50px;
  }
}
@include bp(1100px) {
  .c-help {
    padding: 50px 0 50px 0;
    margin: 0 auto;
    max-width: 750px;
  }
}
@include bp(766px) {
  .c-help {
    max-width: 320px;
    &__message-btn {
      width: 127px;
      font-size: rem(12);
    }
  }
}
</style>
