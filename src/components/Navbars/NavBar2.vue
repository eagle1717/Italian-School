<template lang="pug">
nav.navigation.left-nav#teacher( :class="{ show: isHidden }")
  template(v-if="isHidden")
    .mobile-nav__burger
      button.mobile-nav__btn.active(@click="hideNavigation")
        img(src="@/assets/close.svg", alt="Logotype")
  .nav
    .nav__logo-soc
      a(href="https://studiait.it/", target="_blank")
        img(src="@/assets/logo.svg", alt="Logotype")
      BaseMedias
    <router-link :to="{ name: 'HomePage' }" class="nav__user">
      figure.nav__user-photo
        template
          img(src="@/assets/img/ill/default-photo.svg")
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
            img(:src="require(`@/assets/img/ill/teacher/${itm.icon}.svg`)", :alt="itm.name")
          span.nav__menu-text {{ itm.name }}
        </router-link>
      li.nav__menu-item.exit
        <button class="nav__menu-link svg exit">
        <div class="inline-block">
        img(src="@/assets/close4.svg", alt="Logotype")
        </div>
          span.nav__menu-text.inline-block.uscire Uscire
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
          icon: "lessons",
          name: "Lezioni",
          route: "Lezioni"
        },
        {
          icon: "homework",
          name: "Compiti",
          route: "Compiti"
        },
        {
          icon: "students",
          name: "Studenti",
          route: "Studenti"
        },
        {
          icon: "calendar",
          name: "Calendario",
          route: "Calendario"
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "Login" });
    },
    hideNavigation() {
      this.$emit("showNav", !this.isHidden);
    }
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
  @media screen and (max-width:766px) {
    padding-left: 100px;
  }
  padding-top: 17px;
  z-index: 99;
  overflow-y: scroll;
  .mobile-nav__burger {
    position: absolute;
    left: 26px;
    top: 15px;
    width: 19px;
    height: 19px;
  }
  .inline-block {
    display: inline-block;
  }
  &.show {
    z-index: 1000000;
  }
  .exit {
    position: absolute;
    bottom: 27px;
    left: 75px;
    margin: auto;
    width: max-content;
    line-height: 21px;
    @media screen and (max-width:766px) {
      left: 65px;
    }
    span {
      margin-left: 5px;
      color: $black;
      font-size: 16px;
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
  .nav__menu-item.exit {
    margin-top: 0px !important;
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
}
@include bp(1310px) {
  .navigation {
    z-index: 9999;
  }
  .mobile-navbar {
    width: 390px;
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
@include bp(766px) {
  .nav__menu-link {
    margin-top: 20px;
  }
  .nav__user-photo {
    width: 37px;
    height: 37px;
  }
  .nav__menu-text {
    font-size: 16px;
  }
  .nav__user-name {
    font-size: 14px;
    line-height: 14px;
    margin-top: 0px;
  }
  .notification-icon {
    width: auto;
    height: 12px;
  }
  .nav__user {
    height: 69px;
  }
  .nav__menu-text {
    font-size: 16px;
  }
  .nav__menu-icon_lezioni {
    img {
      width: 12px;
      height: 20px;
    }
  }
  .nav__menu-icon_compiti {
    img {
      width: 15.25px;
      height: 20.07px;
    }
  }
  .nav__menu-icon_studenti {
    img {
      width: 21.58px;
      height: 14.45px;
    }
  }
  .nav__menu-icon_calendario {
    img {
      width: 18px;
      height: 14.54px;
    }
  }
}
</style>
