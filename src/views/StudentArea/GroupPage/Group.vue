<template>
  <div class="teachers tc-group">
    <div class="teachers__wrap teachers__wrap_filters">
      <div class="teachers__wrap__tabs">
        <router-link :to="{ name: 'Courses' }">Курсы</router-link>
        <router-link :to="{ name: 'Webinars' }">Вебинары</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.current-status {
  font-size: 14px;
  line-height: 20px;
  color: $black;
  height: min-content;
  .status-img {
    img {
      width: 23px;
      height: 23px;
    }
  }
  .status-text {
    margin-left: 5px;
  }
}
.wr-up {
  margin-left: $ml;
  padding-left: 30px;
}
.tc-group {
  margin-left: $ml;
}
.group-wrapper {
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  width: min-content;
  margin-top: 25px;
  .group-card {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    background: #f7f7f7;
    border-radius: 2px;
    padding: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 0px;
    width: 431px;
    height: 100%;
    position: relative;
    .current-status {
      position: absolute;
      left: 21px;
      top: 21.5px;
      font-size: 14px;
      line-height: 20px;
      color: $black;
      height: min-content;
      .status-img {
        img {
          width: 23px;
          height: 23px;
        }
      }
      .status-text {
        margin-left: 5px;
      }
    }
    img {
      width: 87px;
      height: 87px;
      margin: auto;
      margin-bottom: 20px;
    }
    .gr-cont {
      display: flex;
      flex-direction: column;
      width: 33%;
    }
    .name {
      font-size: 18px;
      color: #251c1c;
      @extend %text-middle;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .title {
      margin-bottom: 20px;
      @extend %text-middle;
      font-weight: 700;
      color: #251c1c;
      font-size: 30px;
      line-height: 33.87px;
      text-align: center;
    }

    .hr {
      height: 1px;
      border-color: #d8d8d8 !important;
      width: 200px;
      margin-bottom: 20px;
    }

    .go-to-lesson {
      background: #39b100;
      padding: 14.5px 20px;
      font-size: 16px;
      color: #fff;
      line-height: 21px;
      height: 50px;
      width: 180px;
      margin: auto;
      border-radius: 2px;
      @extend %text-middle;
      transition: all 0.5s ease;
      &:hover {
        background-color: #2e8e00;
        transition: all 0.5s ease;
      }
    }
    hr {
      margin: auto;
      margin-bottom: 20px;
    }
    .schedule {
      @extend %text-middle;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .times {
      @extend %text-big;
      font-size: 18px;
      margin-top: 15px;
    }
  }
}
.teachers {
  padding-top: 44px;
  padding-left: 30px;
  max-width: 921px;
  &__not-found {
    @extend %h3-title-bold;
    color: $gray;
  }
  &__wrap {
    &_title {
      @extend %df;
      margin-bottom: rem(58);
    }

    &_filters {
      @extend %df;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__tabs {
      a {
        padding: 7px 53px;
        color: #fff;
        font-size: 16px;
        border: 1px solid #39b100;
        color: #39b100;
        @extend %btn-text;
        &.router-link-active {
          background-color: #39b100;
          color: white;
        }
        &:hover:active {
          color: #39b100;
        }
      }
    }
  }

  &__title {
    @extend %h2-title-bold;
    color: $black;
    margin-left: 14px;

    &-img {
      width: 44px;
      height: 36px;
    }
  }

  &__filters-wrap {
    @extend %df;
    align-items: flex-end;
    @extend %jcfs;
    width: auto !important;
  }

  &__my {
    @extend %simple-select;
    width: 187px;
    @extend %btn-text;
    color: $black;
    &.active {
      color: $green;
      border-color: $green;
    }
    span {
      @extend %db;
      text-align: center;
      line-height: rem(35);
    }

    &:hover {
      color: $green;
    }
  }
}

@include bp(1360px) {
  .teachers {
    padding-right: 30px;
  }
}

@include bp(1100px) {
  .teachers {
    padding-top: 57px;
    padding-left: 0;
    max-width: 750px;
    margin: 0 auto;
    padding-right: 0;

    &__filters-wrap {
      width: 402px;
    }
  }
}

@include bp(766px) {
  .teachers {
    max-width: 320px;

    &__title {
      font-size: rem(20);
      line-height: rem(25);
    }

    &__filters-wrap {
      width: 100%;
      position: relative;
      z-index: 5;

      .select {
        width: 161px;
        height: 30px;

        &__wrapper {
          height: 30px;
        }

        &__wrap-val {
          padding-left: 15px;
          padding-right: 5px;
          height: 30px;
        }

        &__value {
          font-size: rem(12);
        }

        &__optios {
          padding-left: 15px;
        }

        &__option-btn {
          font-size: rem(12);
        }
      }

      .datepiker {
        width: 66px;
        height: 30px;

        &__val {
          font-size: rem(12);
        }
      }

      .timepicker {
        width: 75px;
        height: 30px;

        &__val {
          font-size: rem(12);
        }
      }
    }

    &__my {
      width: 100%;
      height: 30px;
      font-size: rem(12);
      line-height: rem(14);
      margin-top: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        line-height: 16px;
      }
    }

    &__wrap {
      &_filters {
        width: 100%;
        flex-direction: column;
      }
    }
  }
}
.teachers__filters-wrap {
  width: 172px !important;
  padding: 0px !important;
}
.group-card {
  height: min-content;
}
</style>
