<template>
  <div class="c-teacher-dashboard">
    <div class="c-teacher-dashboard__content">
      <h1 class="c-teacher-dashboard__title">
        Riepilogo:
      </h1>
      <ul class="c-teacher-dashboard__info">
        <li class="c-teacher-dashboard__info-item">
          <h3 class="c-teacher-dashboard__info-title">
            Tempo:
          </h3>
          <!-- эти данные есть, нужно деструктурировать -->
          <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_hours"
          >
            12 ore
          </p>
          <!-- <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_hours"
          >
            {{ working_hours || 0 }} ore
          </p> -->
        </li>
        <li class="c-teacher-dashboard__info-item">
          <h3 class="c-teacher-dashboard__info-title">
            Guadagno:
          </h3>
          <!-- эти данные есть, нужно деструктурировать -->
          <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_money"
          >
            120 eur
          </p>
          <!-- <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_money"
          >
            {{ earned_money || 0 }} eur
          </p> -->
        </li>
      </ul>
    </div>
    <!-- <div class="c-teacher-dashboard__chart">
      <BaseTeacherChart />
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import moment from 'moment;'
export default {
  name: "TeacherDashboard",
  computed: {
    ...mapGetters("user", ["working_hours", "earned_money"])
  }
};
</script>

<style lang="scss">
.c-teacher-dashboard {
  @extend %df;
  @extend %jcsb;
  // width: 100%;
  height: rem(150);
  border: 1px solid $gray;
  border-radius: 2px;
  padding: rem(25) rem(47) 0 rem(32);
  // .c-teacher-dashboard__content

  &__content {
  }

  // .c-teacher-dashboard__title

  &__title {
    @extend %text-big;
    color: $black;
    margin-bottom: rem(26);
  }

  // .c-teacher-dashboard__info

  &__info {
    @extend %df;
  }

  // .c-teacher-dashboard__info-item

  &__info-item {
    margin-right: rem(56);
    &:last-child {
      margin-right: 0;
    }
  }

  // .c-teacher-dashboard__info-title

  &__info-title {
    @extend %text-small-big-line-height;
    color: $gray;
    margin-bottom: rem(7);
  }

  // .c-teacher-dashboard__info-text

  &__info-text {
    @extend %h2-title-bold;
    // .c-teacher-dashboard__info-text_hours

    &_hours {
      color: $red;
    }

    // .c-teacher-dashboard__info-text_money

    &_money {
      color: $green;
    }
  }

  // .c-teacher-dashboard__chart

  &__chart {
    width: rem(430);
    height: rem(118);
    /*<!--background-color: $gray;-->*/
  }
}
@include bp(1100px) {
  .c-teacher-dashboard {
    &__chart {
      width: 362px;
    }
    &__info-item {
      margin-right: 20px;
    }
  }
}
@include bp(766px) {
  .c-teacher-dashboard {
    flex-direction: column;
    height: auto;
    padding: 20px 10px;
    &__chart {
      width: 100%;
      margin-top: 35px;
    }
  }
}
</style>
