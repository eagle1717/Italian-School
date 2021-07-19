<template>
  <div id="spec-off">
    <div class="c-home-offer" v-for="offer in offers" :key="offer.id">
      <span class="c-home-offer__discount"> Скидка {{ offer.discount }}% </span>
      <div class="c-home-offer__content">
        <figure class="c-home-offer__image">
          <img
            :src="require(`@/assets/img/packages/${offer.image}.svg`)"
            alt=""
          />
        </figure>
        <h3 class="c-home-offer__title">
          {{ offer.name }}
        </h3>
        <p class="c-home-offer__lessons">
          У вас осталось {{ offer.lessons }} занятий
        </p>
      </div>
      <router-link
        :to="{ name: 'Checkout', params: { id: offer.id } }"
        target="_blank"
        class="c-home-offer__btn"
      >
        <span>Выбрать пакет</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          id: "classic",
          image: "classic",
          discount: "5-15",
          name: "Классические занятия",
          lessons: "5"
        },
        {
          id: "spoken",
          image: "spoken",
          discount: "5-15",
          name: "Разговорные занятия",
          lessons: "5"
        },
        {
          id: "pronounce",
          image: "pronounce",
          discount: "5-15",
          name: "Отработка произношения",
          lessons: "5"
        },
        {
          id: "classic",
          image: "classic",
          discount: "5-15",
          name: "Классические занятия",
          lessons: "5"
        },
        {
          id: "spoken",
          image: "spoken",
          discount: "5-15",
          name: "Разговорные занятия",
          lessons: "5"
        },
        {
          id: "pronounce",
          image: "pronounce",
          discount: "5-15",
          name: "Отработка произношения",
          lessons: "5"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#spec-off {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @include bp(766px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @include bp($mobile) {
    .c-home-offer {
      height: 100%;
    }
    .c-home-offer__title {
      font-size: 16px;
      margin-top: 14px;
      margin-bottom: 10px;
      width: 115px;
      line-height: 16px;
    }
    .c-home-offer__lessons {
      font-size: 10px;
    }
  }
}
.c-home-offer {
  position: relative;
  max-width: rem(277);
  height: rem(280);
  background-color: #f7f7f7;
  overflow: hidden;
  border-radius: 2px;

  &:hover {
    .c-home-offer {
      &__btn {
        bottom: rem(20);
      }
    }
  }
  &__image {
    width: 70%;
  }
  &__content {
    padding: 36px 0 0 30px;
    @include bp($mobile) {
      padding-left: 5px;
    }
  }
  &__discount {
    position: absolute;
    @extend %df;
    @extend %aic;
    @extend %jcc;
    @extend %text-small;
    color: $green;
    top: 0;
    right: 0;
    border: 1px solid $green;
    padding: 0 rem(7);
    height: 29px;
    border-radius: 0px 2px 0px 0px;
  }
  &__title {
    @extend %h3-title-bold;
    color: $black;
    margin-top: rem(30);
    margin-bottom: rem(24);
    max-width: rem(190);
  }
  &__lessons {
    @extend %text-middle;
    color: $gray;
  }
  &__btn {
    position: absolute;
    bottom: rem(-50);
    @extend %simple-btn-green;
    width: rem(212);
    height: rem(35);
    margin-top: rem(120);
    left: 0;
    right: 0;
    margin: auto;
    &:hover {
      @extend %btn-darkgreen;
    }
    @include bp(1310px) {
      bottom: 20px;
    }
    @include bp(766px) {
      margin-left: 30px;
      width: 150px;
    }
    @include bp($mobile) {
      position: relative;
      bottom: 0;
      margin-top: 5px;
      font-size: 12px;
      margin-left: 5px;
    }
    @media screen and (max-width:400px) {
      width: 100px;
    }
  }
}
@include bp(766px) {
  .c-home-offer {
    max-width: 50vw;
    margin-right: 0;
    margin-bottom: 20px;
    &__discount {
      font-size: rem(10);
      width: 77px;
      height: 23px;
      padding: 0;
    }
  }
}
</style>
