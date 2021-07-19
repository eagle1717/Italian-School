<template lang="pug">
nav.navigation.left-nav#teacher( :class="{ show: isHidden }")
  template(v-if="isHidden")
    .mobile-nav__burger
      button.mobile-nav__btn.active(@click="hideNavigation")
        span
        span
        span
  .nav
    .nav__logo-soc
      a(href="https://studiait.it/", target="_blank")
        img(src="@/assets/logo.svg", alt="Logotype")
      BaseMedias
    <router-link :to="{ name: 'HomePage' }" class="nav__user">
      figure.nav__user-photo
        template
          img(src="/img/ill/default-photo.svg")
      .nav__user-content
        h1.nav__user-name(v-html='username')
        template
          img.notification-icon(src="@/assets/img/notification.svg")
    </router-link>
    ul.nav__menu
      li.nav__menu-item(
        v-for="itm of menu_teacher",
        :key="itm.name",
        :class="'nav__menu-item_' + itm.name.toLowerCase().split(' ')[0]"
      )
        <router-link class="nav__menu-link" :to="{ name: itm.route }">
          figure.nav__menu-icon(
            :class="'nav__menu-icon_' + itm.name.toLowerCase().split(' ')[0]"
          )
            img(:src="itm.icon", :alt="itm.name")
          span.nav__menu-text {{ itm.name }}
        </router-link>
      li.nav__menu-item.exit
        <button class="nav__menu-link.svg">
        <div class="inline-block">
        img(src="@/assets/close4.svg", alt="Logotype")
        </div>
          span.nav__menu-text.inline-block Uscire
          </button>
</template>

<script>
export default {
  props: {
    isHidden: {
      type: Boolean
    }
  },
  data() {
    return {
      username: "Tomothy <br/> Murphy",
      menu_teacher: [
        {
          icon: "/img/ill/teacher/lessons.svg",
          name: "Lezioni",
          route: "Lezioni"
        },
        {
          icon: "/img/ill/teacher/homework.svg",
          name: "Compiti",
          route: "Compiti"
        },
        {
          icon: "/img/ill/teacher/students.svg",
          name: "Studenti",
          route: "Studenti"
        },
        {
          icon: "/img/ill/teacher/calendar.svg",
          name: "Calendario",
          route: "Calendario"
        }
      ]
    };
  },
  logout() {
    this.$router.push({ name: "Login" });
  },
  hideNavigation() {
    this.$emit("showNav", !this.isHidden);
  }
};
</script>

<style lang="scss">
.navigation.left-nav#teacher {
  position: fixed;
  top: 0;
  left: 0;
  width: 398px;
  height: 100vh;
  background-color: $white;
  border-right: 1px solid $black;
  padding-left: 120px;
  padding-top: 17px;
  z-index: 99;
  overflow-y: scroll;
  .inline-block {
    display: inline-block;
  }
  .exit {
    position: absolute;
    bottom: 27px;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    line-height: 21px;
    span {
      margin-left: 5px;
      color: $black;
      font-size: 16px;
      // font-weight: 700;
      font-family: "Circe-Bold";
    }
  }
  .nav__menu-link.svg,
  .nav__menu-text {
    display: inline-block;
  }
  .nav__menu {
    li:nth-child(1) {
      span {
        margin-left: 22px;
      }
    }
    li:nth-child(2) {
      margin-top: 10.59px;
      span {
        margin-left: 19px;
      }
    }
    li:nth-child(3) {
      margin-top: 20px;
      span {
        margin-left: 14.16px;
      }
    }
    li:nth-child(4) {
      margin-top: 20px;
      span {
        margin-left: 14px;
      }
    }
  }
}
.nav {
  .social-medias {
    position: relative !important;
    margin: 0px !important;
    margin-bottom: 5px !important;
  }
  &__logo-soc {
    @extend %df;
    @extend %jcsb;
    align-items: flex-end;
    padding-right: 27px;
  }
  &__social {
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    margin-bottom: 4px;
    &-item {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      width: 27px;
      height: 27px;
      border: 1px solid $gray;
      border-radius: 2px;
      margin-right: 11px;
      &:last-child {
        margin-right: 0;
      }
    }
    &-link {
      @extend %df;
      @extend %aic;
      @extend %jcc;
    }
  }
  &__user {
    position: relative;
    @extend %df;
    @extend %aic;
    width: 250px;
    height: 95px;
    background-color: #f7f7f7;
    border-radius: 2px;
    margin: 76px 0 49px 0;
    padding: 0 0 0 17px;
    &-notification {
      position: absolute;
      top: 15px;
      right: 13px;
      .icon {
        width: 15px;
        height: 23px;
        fill: transparent;
        stroke: currentColor;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      &.active {
        svg {
          path {
            stroke: $green;
            &:last-child {
              fill: $green;
            }
          }
        }
      }
    }
    &-photo {
      width: 59px;
      height: 59px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid $red;
    }
    &-content {
      margin-left: 14px;
    }
    &-name {
      @extend %text-big;
      color: $gray;
      line-height: 27px;
      margin-top: 12px;
    }
    .notification-icon {
      position: absolute;
      top: 18px;
      right: 14px;
    }
  }
  &__menu {
    &-item {
      // margin-bottom: 27px;
      &:last-child {
        margin-bottom: 0;
      }
      &_поддержка {
        margin-top: 145px;
      }
      button {
        margin-top: 20px;
        svg {
          margin-left: 4px;
        }
      }
    }
    // &-icon {
    //   &_преподаватели {
    //     width: 25px;
    //     height: 32px;
    //     margin-right: 13px;
    //   }
    //   &_мой {
    //     width: 23px;
    //     height: 19px;
    //     margin-right: 16px;
    //   }
    //   &_настройки {
    //     width: 22px;
    //     height: 14px;
    //     margin-right: 17px;
    //   }
    //   &_поддержка {
    //     width: 27px;
    //     height: 18px;
    //     margin-right: 14px;
    //   }
    //   &_новые {
    //     margin-right: rem(25);
    //   }
    //   &_домашние {
    //     margin-right: rem(21);
    //   }
    //   &_ученики {
    //     margin-right: rem(16);
    //   }
    //   &_календарь {
    //     margin-right: rem(15);
    //   }
    // }
    &-link {
      @extend %df;
      @extend %aic;
      &:hover {
        span {
          color: $green;
        }
        svg {
          transition: all 0.5s ease;
          path {
            stroke: $green;
            transition: all 0.5s ease;
          }
        }
      }
    }
    .router-link-active,
    .router-link-exact-active {
      color: $green;
    }
    &-text {
      @extend %h3-title-bold;
      color: $gray;
      transition: all 0.3s ease;
    }
  }
  &__offer {
    // display: block;
    // max-width: 290px;
    // position: absolute;
    // left: 0;
    // bottom: unset !important;
    // z-index: -1;
  }
}
// @include bp(1360px) {
//   .navigation {
//     padding-left: 60px;
//     width: 338px;
//   }
//   .nav {
//     &__offer {
//       max-width: 200px;
//       bottom: 117px;
//     }
//     &__menu {
//       &-item {
//         position: relative;
//         z-index: 5;
//         &_поддержка {
//           margin-top: 150px;
//         }
//       }
//     }
//   }
// }
@include bp(1310px) {
  .navigation {
    z-index: 9999;
  }
  .mobile-navbar {
    width: 390px;
    padding-left: 78px;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    &.show {
      transform: translateX(0);
    }
  }
  .nav {
    &__logo-soc {
      display: none;
    }
    &__user {
      margin-top: 36px;
    }
    &__offer {
      bottom: 332px;
      width: 248px;
    }
  }
}
// @media screen and (max-width: 1300px) and (min-width: 1310px) and (min-height: 600px) {
//   .nav {
//     &__user {
//       margin-bottom: 15px;
//     }
//     &__menu-item_поддержка {
//       margin-top: 100px;
//     }
//   }
// }
@include bp(766px) {
  .navigation {
    width: 100%;
  }
  .mobile-navbar {
    padding-left: 45px;
  }
  .nav {
    &__user {
      margin-bottom: 30px;
    }
    /*<!--&__offer {-->*/
    /*<!--  transform: translateY(-50%);-->*/
    /*<!--  bottom: 102px;-->*/
    /*<!--}-->*/
    &__offer {
      display: none;
    }
    &__menu {
      &-item {
        &_поддержка {
          margin-top: 70px;
        }
      }
    }
  }
}
@include bp(360px) {
  .mobile-navbar {
    padding-left: 25px;
  }
  .nav {
    &__offer {
      left: -43px;
    }
  }
}
@media screen and (max-width: 450px) and (min-height: 700px) {
  .nav {
    &__offer {
      bottom: 261px;
    }
  }
}
@media screen and (max-width: 450px) and (min-height: 600px) {
  .nav {
    &__offer {
      bottom: 111px;
    }
  }
}
@media screen and (max-width: 450px) and (max-height: 600px) {
  .nav {
    &__offer {
      bottom: 5px;
    }
  }
}
</style>
