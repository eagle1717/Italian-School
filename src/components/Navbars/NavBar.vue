<template lang="pug">
nav.navigation.left-nav#student( :class="{ show: isHidden }")
 div
  template(v-if="isHidden")
    .mobile-nav__burger
      button.mobile-nav__btn.active(@click="hideNavigation")
        img(src="@/assets/close.svg", alt="Logotype")
 div.entire-nav
  .nav
    .nav__logo-soc
      a(href="https://studiait.it/", target="_blank")
        img(src="@/assets/logo.svg", alt="Logotype")
      BaseMedias
    // Navigation user
    <router-link :to="{ name: 'HomePage' }" class="nav__user">
      figure.nav__user-photo
        template
          img(src="@/assets/img/ill/default-photo.svg")
      .nav__user-content
        h1.nav__user-name(v-html='username')
        template
          img.notification-icon(src="@/assets/img/notification.svg")
    </router-link>
    // Navigation menu
    ul.nav__menu
      li.nav__menu-item(
        v-for="itm of menu_student",
        :key="itm.name",
        :class="'nav__menu-item_' + itm.name.toLowerCase().split(' ')[0]"
        @click="hideNavigation"
      )
        <router-link class="nav__menu-link" :to="{ name: itm.route }">
          figure.nav__menu-icon(
            :class="'nav__menu-icon_' + itm.name.toLowerCase().split(' ')[0]"
          )
            img(:src="require(`@/assets/img/ill/${itm.icon}.svg`)", :alt="itm.name")
          span.nav__menu-text {{ itm.name }}
        </router-link>
    template
    <div class="text-bg-wrapper">
      <div class="text-bg">
       <h4>Ищешь что-то особенное?</h4>
      </div>
    </div>
    <div  @click="hideNavigation">
        <router-link class="nav__menu-link" id="support-link" :to="{name: menu2.route }">
          figure.nav__menu-icon
            img(:src="require(`@/assets/img/ill/${menu2.icon}.svg`)", :alt="menu2.name")
          span.nav__menu-text {{ menu2.name }}
        </router-link>
    </div>
      li.nav__menu-item
        button.nav__menu-link.svg.exit
          svg(
            class="exit-svg-button"
            style="margin-right: 25px",
            width="12",
            height="9",
            viewBox="0 0 12 9",
            fill="none",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              d="M11 4.5L1 4.5M1 4.5L4.5 1M1 4.5L4.5 8",
              stroke="#251C1C",
              stroke-width="2",
              stroke-linecap="round",
              stroke-linejoin="round"
            )
          span.nav__menu-text Выйти
    </div>
      // Navigation offer
      .nav__offer(@click="hideNavigation")
        <router-link :to="{name: 'SpecialOfferPage'}" class="nav__offer-img">
          img(src="@/assets/NavCat.svg", alt="Offer illustration")
        </router-link>
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
      username: "Дмитрий <br/> Релик",
      menu_student: [
        {
          icon: "group",
          name: "Групповые занятия",
          route: "Group"
        },
        {
          icon: "teachers",
          name: "Преподаватели",
          route: "Teachers"
        },
        {
          icon: "calendar",
          name: "Мой календарь",
          route: "Calendar"
        },
        {
          icon: "settings",
          name: "Настройки",
          route: "SettingPage"
        }
      ],
      menu2: {
        icon: "help",
        name: "Поддержка",
        route: "Help"
      }
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
.navigation.left-nav#student {
  position: fixed;
  top: 0;
  left: 0;
  width: 398px;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid $black;
  background-color: $white;
  padding-top: 17px;
  .mobile-nav__burger {
    position: absolute;
    left: 26px;
    top: 15px;
    width:19px;
    height:19px;
    img {
      width:19px;
      height:19px;
    }
  }
  &.show {
    z-index: 1000000;
  }
  @media screen and (max-width:766px) {
    .exit-svg-button {
      width: 10px !important;
      height: 8px !important;
      margin-right: 14.1px !important;   
    }
  }
  .entire-nav {
    position: relative;
    height: max-content;
    padding-left: 120px;
    @media screen and (max-width:766px) {
      padding-left: 100px;
    }
  }
  .text-bg-wrapper {
    z-index: 1000;
    left: 25%;
    right: 0;
  }
  #support-link {
    img {
      width: 27px;
      height: 18px;
      margin-right: 14px;
        @media screen and (max-width:766px) {
         width: 17.85px;
         height: 11.9px;
         margin-right: 10.2px;
       }
    }
  }
  .text-bg {
    background-image: url("~@/assets/textBg.svg");
    background-size: 222px;
    margin-top: 27px;
    margin-bottom: 59.12px;
    height: 66px;
    background-repeat: no-repeat;
    z-index: 1000;
    position: relative;
    margin-left: -16px;
    @media screen and (max-width:766px) {
      background-size: 166px;
    }
    h4 {
      position: absolute;
      left: 0;
      right: 0;
      padding-top: 20px;
      @extend %regular;     
      font-size: 14px;
      line-height: 20px;
      width: max-content;
      margin-left: calc(5% + 12px);
      color: rgba(75, 75, 75, 1);
      user-select: none;
      @media screen and (max-width:766px) {
      font-size: 10px;
      line-height: 19.6px;
      padding-top: 13.5px;
      }
    }
  }
  .nav__menu {
    li:nth-child(2) {
      margin-top: 10.59px;
      span {
        margin-left: 0px;
      }
    }
    li:nth-child(3) {
      margin-top: 20px;
    }
    li:nth-child(4) {
      margin-top: 20px;
      img {
        margin-right: 4px;
        margin-bottom: 20px;
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
  
  @media screen and (max-width:766px) {
    .nav__menu-link {
        margin-top: 20px;
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
    @media screen and (max-width:360px) {
     width: 200px !important;
    }
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
    &-icon {
      &_групповые {
        margin-right: 14px;
         @media screen and (max-width:766px) {
          width: 16px;
          height: 26px;
          margin-right: 12.3px;
        }
      }
      &_преподаватели {
        width: 25.19px;
        height: 32.81px;
        margin-right: 13.27px;
        @media screen and (max-width:766px) {
          width: 17.51px;
          height: 22.81px;
          margin-right: 11px;
        }
      }
      &_мой {
        width: 23px;
        height: 19px;
        margin-right: 16px;
         @media screen and (max-width:766px) {
          width: 18.2px;
          height: 15.16px;
          margin-right: 10.2px;
        }
      }
      &_настройки {
        width: 22px;
        height: 14px;
        margin-right: 17px;
        @media screen and (max-width:766px) {
         width: 18px;
         height: 12.11px;
         margin-right: 10.2px;
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
    &-text {
      @extend %h3-title-bold;
      color: $gray;
      transition: all 0.3s ease;
    }
  }
  &__offer {
    display: block;
    max-width: 290px;
    top: 63.5%;
    position: absolute;
    left: 0;
    z-index: 100;
  }
}
 .nav__menu-link.svg.exit {
   @media screen and (max-width:766px) {
     margin-top: 10px !important;
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
  nav.navigation.left-nav#student {
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
  .nav__offer-img {
    img {
      width: 78px;
      height:162px;
    }
  }
  .notification-icon {
    width: auto;
    height: 12px;
  }
  .nav__user {
    height: 69px;
  }
  }
}
</style>
