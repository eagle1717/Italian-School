<template>
  <div class="teachers tc-group">
    <div class="teachers__wrap teachers__wrap_filters">
      <div class="teachers__wrap__tabs flex">
        <div class="courses-route">
          <router-link :to="{ name: 'Courses' }">Курсы</router-link>
        </div>
        <div class="webinars-route">
          <router-link :to="{ name: 'Webinars' }">Вебинары</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.current-status {
  font-size: 14px;
  line-height: 20px;
  color: $black;
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
  margin: 0 auto;
}
.tc-group {
  margin: 0 auto;
}
.group-wrapper {
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  max-width: 892px;
  margin-top: 25px;
  .group-card {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    background: #f7f7f7;
    overflow: hidden;
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
    min-height: 357px;
    position: relative;
    &:hover {
      .go-to-lesson {
        transition: all 0.5s ease;
        bottom: 30px;
      }
    }
    .current-status {
      position: absolute;
      left: 21px;
      top: 21.5px;
      font-size: 14px;
      line-height: 20px;
      color: $black;
      height: min-content;
      display: flex;
      .status-img {
        height: 23px;
        width: 23px;
        display: inline-block;
        img {
          width: 23px;
          height: 23px;
        }
      }
      .status-text {
        margin-left: 5px;
        display: inline-block;
        line-height: 23px;
      }
    }
    .user-img-course {
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
      // font-weight: 700;
      font-family: "Circe-Bold";
      margin-bottom: 20px;
    }

    .title {
      margin-bottom: 20px;
      @extend %text-middle;
      // font-weight: 700;
      font-family: "Circe-Bold";
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
      transition: all 0.5s ease;
      background: #39b100;
      padding: 14.5px 20px;
      font-size: 16px;
      color: #fff;
      line-height: 21px;
      height: 50px;
      width: 180px;
      border-radius: 2px;
      margin: auto;
      position: absolute;
      bottom: rem(-50);
      margin-top: rem(120);
      left: 0;
      right: 0;
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
  max-width: 892px;
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

// @include bp(1360px) {
//   .teachers {
//     padding-right: 30px;
//   }
// }

// @include bp(766px) {
//   .teachers {
//     max-width: 320px;

//     &__title {
//       font-size: rem(20);
//       line-height: rem(25);
//     }

//     &__filters-wrap {
//       width: 100%;
//       position: relative;
//       z-index: 5;

//       .select {
//         width: 161px;
//         height: 30px;

//         &__wrapper {
//           height: 30px;
//         }

//         &__wrap-val {
//           padding-left: 15px;
//           padding-right: 5px;
//           height: 30px;
//         }

//         &__value {
//           font-size: rem(12);
//         }

//         &__optios {
//           padding-left: 15px;
//         }

//         &__option-btn {
//           font-size: rem(12);
//         }
//       }

//       .datepiker {
//         width: 66px;
//         height: 30px;

//         &__val {
//           font-size: rem(12);
//         }
//       }

//       .timepicker {
//         width: 75px;
//         height: 30px;

//         &__val {
//           font-size: rem(12);
//         }
//       }
//     }

//     &__my {
//       width: 100%;
//       height: 30px;
//       font-size: rem(12);
//       line-height: rem(14);
//       margin-top: 11px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       span {
//         line-height: 16px;
//       }
//     }

//     &__wrap {
//       &_filters {
//         width: 100%;
//         flex-direction: column;
//       }
//     }
//   }
// }
.teachers__filters-wrap {
  width: 172px !important;
  padding: 0px !important;
}
.group-card {
  height: min-content;
}
</style>
<style lang="scss">
.group-wrap-container {
  @media screen and (max-width: 1310px) {
    max-width: 892px;
    margin: 0 auto;
    .go-to-lesson {
      bottom: 20px !important;
    }
    .title {
      margin-bottom: 50px !important;
    }
  }
  @media screen and (max-width: 942px) {
    max-width: 750px;
    margin-bottom: 50px;
    .group-card {
      width: 360px;
    }
  }
  @media screen and (max-width: 766px) {
    max-width: max-content;
    .group-card {
      width: 80vw;
      margin-right: 0px;
      &:nth-child(1) {
        margin-top: 0px;
      }
    }
    .group-wrapper {
      column-count: 1;
      display: grid;
      grid-gap: 10px;
    }
  }
}
@media screen and (max-width: 550px) {
  .group-card {
    padding-top: 50px !important;
  }
  .go-to-lesson {
    height: 40px !important;
    font-size: 12px !important;
    padding-top: 10px !important;
    width: 150px !important;
  }
  .courses-route,
  .webinars-route {
    a {
      padding: 8px 18px;
      font-size: 16px;
    }
  }
}
.group-wrapper {
  font-family: "Circe-Regular";
  .go-to-lesson {
    font-family: "Circe-Bold";
  }
}
</style>
