<template>
  <nav class="navbar flex justify-between">
    <div class="left-side flex">
      <div class="logo">
        <figure>
          <a href="https://studiait.it/" target="_blank">
            <img src="@/assets/logo.svg" alt="logo" />
          </a>
        </figure>
      </div>
      <div class="links-wrapper">
        <div class="links-container">
          <ul class="flex router-links">
            <router-link to="#">Обучение</router-link>
            <router-link to="#">Материалы</router-link>
            <router-link to="#">Грамматика</router-link>
            <router-link to="#">Медиатека</router-link>
            <router-link to="#">Презентации</router-link>
            <router-link to="#">Блог</router-link>
            <router-link to="#">О нас</router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-side flex">
      <BaseMedias />
      <div class="enter-to-account">
        <button>Войти</button>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
%absolute {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.navbar {
  height: 63px;
  margin-top: 17px;
  @extend %regular;
  .left-side {
    .links-wrapper {
      margin-left: 49px;
      position: relative;
      .links-container {
        height: 21px;
        @extend %absolute;
        a {
          &:hover {
            color: $green;
          }
        }
        ul {
          a {
            margin-left: 24px;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.03em;
            white-space: nowrap;
            color: #251c1c;
          }
          a:nth-child(1) {
            margin-left: 0px;
          }
        }
      }
    }
  }
  .right-side {
    position: relative;
    max-width: 245px;
    width: 100%;
    button {
      @extend %absolute;
      left: auto;
      margin-left: 38px;
      border: 1px solid rgba(37, 28, 28, 1);
      height: max-content;
      @extend %simple-btn-gray;
      width: 104px;
      height: 45px;
    }
  }
}
</style>
