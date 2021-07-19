<template>
  <div class="c-teacher-dashboard justify-between flex">
    <div class="c-teacher-dashboard__content">
      <h1 class="c-teacher-dashboard__title">
        Riepilogo:
      </h1>
      <ul class="c-teacher-dashboard__info">
        <li class="c-teacher-dashboard__info-item">
          <h3 class="c-teacher-dashboard__info-title">
            Tempo:
          </h3>
          <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_hours"
          >
            12 ore
          </p>
        </li>
        <li class="c-teacher-dashboard__info-item">
          <h3 class="c-teacher-dashboard__info-title">
            Guadagno:
          </h3>
          <p
            class="c-teacher-dashboard__info-text c-teacher-dashboard__info-text_money"
          >
            120 eur
          </p>
        </li>
      </ul>
    </div>
    <div class="c-teacher-dashboard__chart">
      <figure>
        <img src="@/assets/Chart.svg" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherDashboard"
};
</script>

<style lang="scss">
.c-teacher-dashboard {
  @extend %df;
  @extend %jcsb;
  height: rem(150);
  border: 1px solid $gray;
  width: 100%;
  border-radius: 2px;
  padding: rem(25) rem(47) 0 rem(32);
  &__title {
    @extend %text-big;
    color: $black;
    margin-bottom: rem(26);
  }

  &__info {
    @extend %df;
  }

  &__info-item {
    margin-right: rem(56);
    &:last-child {
      margin-right: 0;
    }
  }

  &__info-title {
    @extend %text-small-big-line-height;
    color: $gray;
    margin-bottom: rem(7);
  }

  &__info-text {
    @extend %h2-title-bold;
    &_hours {
      color: $red;
    }

    &_money {
      color: $green;
    }
  }
}
@include bp(1310px) {
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
