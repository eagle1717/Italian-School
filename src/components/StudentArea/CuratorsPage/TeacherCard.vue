<template>
  <div
    class="up-teacher-wrapper make-transitions"
    :class="{ hide: !show_full_of_card }"
  >
    <div class="teacher" @click="show_full_card">
      <div class="teacher__itm-left">
        <figure class="teacher__user">
          <div class="teacher__user-img">
            <template>
              <img :src="require(`@/assets/${curator_photo}.svg`)" alt="" />
            </template>
          </div>
          <figcaption class="teacher__user-info">
            <h3 class="teacher__user-name">{{ curator_name }}</h3>
            <p class="teacher__user-nation">{{ curator_nation }}</p>
          </figcaption>
        </figure>
        <div class="buttons-teacher-card big-device">
          <button
            class="teacher__btn-video curator-buttons"
            @click.stop="open_teacher_modal"
          >
            <span>Посмотреть видео</span>
          </button>
          <router-link
            class="teacher__btn-lesson curator-buttons makeLessonBtn"
            :to="{ name: 'TeacherPage', params: { id: curator_id } }"
          >
            <span>Назначить занятие</span>
          </router-link>
        </div>
      </div>
      <div class="small-devices-wrapper">
        <div class="teacher__itm-middle">
          <p class="teacher__text" v-html="curator_short_description"></p>
        </div>
        <div class="buttons-teacher-card small-device">
          <button
            class="teacher__btn-video curator-buttons"
            @click.stop="open_teacher_modal"
          >
            <span>Посмотреть видео</span>
          </button>
          <router-link
            class="teacher__btn-lesson curator-buttons makeLessonBtn"
            :to="{ name: 'TeacherPage', params: { id: curator_id } }"
          >
            <span>Назначить занятие</span>
          </router-link>
        </div>
      </div>
      <div class="teacher__itm-right" @click="show_full_card">
        <div class="teacher__arrow" @click="show_full_card">
          <BaseIcon name="arrow-down"></BaseIcon>
        </div>
      </div>
    </div>
    <div class="teacher__contest">
      <div class="teacher__contest-icon" @click="show_contest">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="teacher__contest-menu" :class="{ show: show_contest_menu }">
        <li class="teacher__contest-itm">
          <button class="teacher__contest-btn" @click.stop="addFavorite">
            <figure class="teacher__contest-ico">
              <svg
                class="teacher__contest-icon-heart"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19161 0.415026C7.82372 0.10283 8.37514 -8.51155e-07 9.23058 9.66652e-06C11.4197 0.00915731 13.04 1.8721 13.04 4.24515C13.04 6.05646 12.0391 7.80614 10.1748 9.49804C9.19624 10.3861 7.9468 11.265 7.052 11.7325L6.54004 12L6.02808 11.7325C5.13327 11.265 3.88384 10.3861 2.90526 9.49804C1.04094 7.80614 0.0400391 6.05646 0.0400391 4.24515C0.0400391 1.84671 1.64521 0 3.85409 0C4.67884 0 5.25855 0.112555 5.90293 0.434143C6.12728 0.546107 6.33806 0.678915 6.53411 0.832208C6.73802 0.669811 6.95758 0.530612 7.19161 0.415026ZM9.38451 8.61141C11.0228 7.12466 11.8582 5.66422 11.8582 4.24515C11.8582 2.49763 10.7285 1.19876 9.22813 1.19248C8.54145 1.19248 8.1626 1.26313 7.71118 1.48608C7.4335 1.62323 7.18715 1.80837 6.97226 2.04364L6.54142 2.51536L6.10663 2.04735C5.89647 1.82114 5.65368 1.64012 5.37898 1.50303C4.91393 1.27094 4.50984 1.19248 3.85409 1.19248C2.33492 1.19248 1.22186 2.47304 1.22186 4.24515C1.22186 5.66422 2.0573 7.12466 3.69557 8.61141C4.58875 9.42199 5.73702 10.232 6.54004 10.657C7.34306 10.232 8.49133 9.42199 9.38451 8.61141Z"
                  fill="#39B100"
                ></path>
              </svg>
            </figure>
            <span class="teacher__contest-text">В “Мои преподаватели”</span>
          </button>
        </li>
        <li class="teacher__contest-itm">
          <button class="teacher__contest-btn" @click.stop="blockCurator">
            <figure class="teacher__contest-ico">
              <svg
                class="teacher__contest-icon-eye"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2484 2.01735C11.9317 1.34367 10.4001 0.959961 8.78 0.959961C4.00603 0.959961 0 4.29178 0 8.5571C0 8.83325 0.223858 9.0571 0.5 9.0571C0.776142 9.0571 1 8.83325 1 8.5571C1 4.98314 4.40814 1.95996 8.78 1.95996C10.1389 1.95996 11.4046 2.25202 12.5038 2.76191L13.2484 2.01735ZM14.9467 3.14748L14.2372 3.85698C15.6786 5.06445 16.56 6.73955 16.56 8.5571C16.56 8.83325 16.7839 9.0571 17.06 9.0571C17.3361 9.0571 17.56 8.83325 17.56 8.5571C17.56 6.41843 16.5528 4.51444 14.9467 3.14748ZM9.70439 5.56136C9.41539 5.45866 9.10423 5.40275 8.78 5.40275C7.25569 5.40275 6.02 6.63845 6.02 8.16275C6.02 8.48698 6.07591 8.79815 6.1786 9.08714L7.02184 8.24391C7.02062 8.21701 7.02 8.18995 7.02 8.16275C7.02 7.19073 7.80798 6.40275 8.78 6.40275C8.8072 6.40275 8.83426 6.40337 8.86116 6.40459L9.70439 5.56136ZM10.4594 7.63475L11.2209 6.87329C11.4246 7.25815 11.54 7.69698 11.54 8.16275C11.54 9.68706 10.3043 10.9228 8.78 10.9228C8.31422 10.9228 7.87539 10.8074 7.49053 10.6036L8.252 9.84218C8.41868 9.89453 8.59604 9.92275 8.78 9.92275C9.75202 9.92275 10.54 9.13478 10.54 8.16275C10.54 7.9788 10.5118 7.80143 10.4594 7.63475Z"
                  fill="#EF4036"
                ></path>
                <path
                  d="M15.2199 1.45996L4.17993 12.5"
                  stroke="#EF4036"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </figure>
            <span class="teacher__contest-text">Скрыть преподавателя</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    hideContentOnClick: {
      type: Boolean,
      default: true
    },
    curator_nation: {
      type: String,
      default: ""
    },
    curator_name: {
      type: String,
      default: ""
    },
    curator_photo: {
      type: String,
      default: ""
    },
    curator_id: {
      type: Number,
      default: ""
    },
    curator_short_description: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show_contest_menu: false,
      show_full_of_card: false
    };
  },
  methods: {
    show_contest() {
      this.show_contest_menu = !this.show_contest_menu;
    },
    show_full_card() {
      if (this.hideContentOnClick) {
        return (this.show_full_of_card = !this.show_full_of_card);
      }
      return;
    },
    open_teacher_modal() {
      this.SHOW_MODAL("video");
    },
    addFavorite() {
      this.show_contest();
    },
    blockCurator() {
      this.show_contest();
    },
    ...mapMutations(["SHOW_MODAL"])
  }
};
</script>

<style lang="scss">
.up-teacher-wrapper {
  margin-bottom: 15px;
  justify-content: initial;
  width: 100%;
  padding: 30px 25px 34px 31px;
  .small-device {
    display: none;
  }
  @include bp(766px) {
    padding: 15px 22px 15px 18px;
    padding-right: 60px;
    .big-device {
      display: none;
    }
    .small-device {
      margin-top: 20px;
      display: block;
      padding-left: 20px;
    }
    .teacher {
      padding: 0px;
    }
  }
  .teacher__itm-middle {
    max-width: 362px;
    margin-left: 67px;
    @media screen and (max-width: 1310px) {
      max-width: 650px;
      margin-left: 80px !important;
    }
    @media screen and (max-width: 1200px) {
      margin-left: 60px !important;
    }
    @media screen and (max-width: 1155px) {
      width: 500px;
      margin-left: 20px !important;
    }
    @media screen and (max-width: 940px) {
      width: 340px;
      margin-left: 30px !important;
    }
    @media screen and (max-width: 800px) {
      width: 300px;
    }
    @media screen and (max-width: 766px) {
      max-width: 100% !important;
      width: 100%;
    }
  }
  .teacher {
    justify-content: initial;
    &-left {
      width: 260px;
    }
  }
  .teacher__itm-right {
    position: absolute !important;
    right: 0;
    top: 42px;
    z-index: 999;
    @media screen and (max-width: 766px) {
      top: 10px;
      margin-right: 0px !important;
    }
  }
  .teacher__contest {
    position: absolute;
    right: 24px;
    top: 0px;
    z-index: 1000;
    @extend %df;
    top: 42px;
    color: #4b4b4b;
    font-size: 14px;
    @media screen and (max-width: 766px) {
      top: 33px;
    }
  }
}
.teacher {
  @extend %df;
  @extend %jcsb;
  &__itm {
    &-middle {
      margin-top: 12px;
      overflow: hidden;
    }
  }

  &__user {
    @extend %df;
    align-items: flex-start;
    margin-bottom: 48px;

    &-img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      overflow: hidden;
    }

    &-info {
      margin-left: 23px;
      margin-top: 12px;
    }

    &-name {
      @extend %text-big;
      color: $black;
    }

    &-nation {
      @extend %text-middle;
      color: $gray;
    }
  }

  &__btn {
    &-video {
      @extend %simple-btn-white;
      margin-bottom: 13px;
    }

    &-lesson {
      @extend %simple-btn-green;
      &:hover {
        @extend %btn-darkgreen;
      }
    }
  }

  &__text {
    @extend %text-small-big-line-height;
    color: $gray;
    max-height: 100%;
  }

  &__contest {
    &-menu {
      @media screen and (max-width: 766px) {
        width: 239px !important;
        height: 91px !important;
      }
    }
    &-icon {
      cursor: pointer;
      width: 25px;
      @extend %df;
      @extend %fdc;
      @extend %jcc;
      @media screen and (max-width: 766px) {
        z-index: 10000;
      }
      span {
        position: relative;
        z-index: 2;
        @extend %db;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: $soft_gray;
        margin: 0 auto;
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &-menu {
      position: absolute;
      top: -25px;
      right: -14px;
      width: 239px;
      height: 91px;
      background-color: $white;
      border-radius: 2px;
      opacity: 0;
      pointer-events: none;
      padding-top: 18px;
      transition: all 0.5s ease;
      span {
        font-size: 15px;
        font-family: "Circe-Regular" !important;
      }
      .teacher__contest-itm {
        width: max-content;
      }
      button,
      li {
        height: 15px;
      }
      li {
        &:nth-child(2) {
          margin-top: 18px;
        }
      }
      &.show {
        opacity: 1;
        pointer-events: all;
      }
    }
    &-icon {
      &-heart {
        margin-right: 14px;
      }

      &-eye {
        margin-right: 10px;
      }
    }

    &-btn {
      @extend %df;
      @extend %aic;
      height: 45px;
      padding-left: 15px;
    }
  }
}
.teacher__itm-middle {
  max-height: 100%;
}
@include bp(1310px) {
  .teacher {
    &__itm-middle {
      max-width: 336px;
      margin-right: 0;
    }
  }
}

@include bp(766px) {
  .teacher {
    position: relative;
    padding: 15px 18px;
    flex-direction: column;
    height: auto;
    max-height: 1000px;

    .hide {
      max-height: 90px;
    }

    &__user {
      margin-bottom: 18px;

      &-img {
        width: 60px;
        height: 60px;
      }

      &-name {
        font-size: rem(14);
      }

      &-nation {
        font-size: rem(12);
        margin-top: 0;
      }
    }

    &__text {
      font-size: rem(10);
      line-height: rem(14);
    }
    &__btn {
      &-video {
        margin-bottom: 10px;
      }

      &-video,
      &-lesson {
        width: 100%;
        height: 35px;
        font-size: rem(12);
      }
    }

    &__contest-menu {
      width: 220px;
      height: 60px;
      z-index: 1000;
    }

    &__itm-right {
      position: absolute;
      top: 15px;
      right: 18px;
    }

    &__contest-btn {
      font-size: rem(12);
      height: 30px;
    }
  }
}
.curator-buttons {
  width: 175px;
  a {
    width: min-content;
  }
}
</style>
