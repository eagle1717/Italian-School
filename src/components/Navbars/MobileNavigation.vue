<template>
  <div class="mobile-navigation">
    <div class="container">
      <div class="mobile-nav">
        <div class="mobile-nav__wrapper">
          <div class="mobile-nav__burger">
            <button class="mobile-nav__btn" @click="showNavigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <router-link :to="{ name: 'HomePage' }" class="mobile-nav__logo">
            <img src="@/assets/logo.svg" alt="Logotype" />
          </router-link>
        </div>
        <ul class="nav__social">
          <li class="nav__social-item">
            <a class="nav__social-link" href="#">
              <BaseIcon name="play-ico" width="13" height="13"></BaseIcon>
            </a>
          </li>
          <li class="nav__social-item">
            <a class="nav__social-link" href="#">
              <BaseIcon name="fb" width="8" height="15"></BaseIcon>
            </a>
          </li>
          <li class="nav__social-item">
            <a class="nav__social-link" href="#">
              <BaseIcon name="insta" width="15" height="15"></BaseIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavigation",
  data() {
    return {
      isNavbarVisible: false
    };
  },
  methods: {
    showNavigation() {
      this.$emit("showNav", !this.isNavbarVisible);
      return (this.isNavbarVisible = !this.isNavbarVisible);
    }
  }
};
</script>

<style lang="scss">
.mobile-navigation {
  padding-top: 7px;
}
.mobile-nav {
  @extend %df;
  @extend %jcsb;
  &__wrapper {
    @extend %df;
    @extend %aic;
  }
  &__burger {
    position: relative;
    z-index: 10;
    width: 25px;
    height: 18px;
  }
  &__btn {
    position: relative;
    @extend %df;
    flex-direction: column;
    @extend %jcc;
    width: 100%;
    height: 100%;
    @extend %ease;
    span {
      display: block;
      width: 23px;
      height: 2px;
      border-radius: 7px;
      background-color: $black;
      transition: all 0.5s ease;
      &:first-child {
        position: absolute;
        top: 0;
        left: 0px;
      }
      &:last-child {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    &.active {
      span {
        background-color: $black;
        &:first-child {
          top: 8px;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          height: 0;
        }
        &:last-child {
          bottom: 8px;
          transform: rotate(-45deg);
        }
      }
    }
  }
  &__logo {
    @extend %db;
    width: 53px;
    height: 26px;
    margin-left: 27px;
  }
}
</style>
