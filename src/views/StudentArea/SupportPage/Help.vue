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
                :image="require(`@/assets/img/ill/faq/${question.image}.svg`)"
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
          image: "how-to-use"
        },
        {
          id: 1,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Что такое Studia.it?",
          image: "what-is-it"
        },
        {
          id: 2,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Как повышать уровень?",
          image: "how-to-up-lavel"
        },
        {
          id: 3,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Хочу работать у вас преподователем! Куда мне писать?",
          image: "i-want-work"
        },
        {
          id: 4,
          desc:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam tur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat... ",
          title: "Забыл пароль, что делать?",
          image: "password"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-help__content {
  margin-top: 11px;
  transition: all 0.5s ease-in;
}
.c-help {
  padding-top: rem(35);
  width: rem(892);
  margin: 0 auto;
  margin-bottom: 50px;
  &__message-btn {
    width: rem(179);
    height: 35px;
    // font-weight: 700;
    font-family: "Circe-Bold";
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
@include bp(1310px) {
  .c-help {
    padding: 50px 0 50px 0;
    margin: 0 25px;
    width: auto;
    max-width: 100%;
  }
}
</style>
