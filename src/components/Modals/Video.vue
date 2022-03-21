<template>
  <BaseModal class="c-video-modal" id="teacher-video-modal">
    <div class="c-video">
      <div class="c-video__container">
        <div class="c-video__content">
          <div class="c-video__header">
            <h2 class="c-video__header-teacher">
              Видео с преподавателем
              <span class="individualName">Tomothy Murphy</span>
            </h2>
          </div>
          <iframe
            class="c-video__curator"
            src="https://www.youtube.com/embed/btrzs54s1Rc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="c-video__content-holder">
            <h2 class="c-video__content-holder-title">О преподавателе</h2>
            <div class="c-video__content-holder-about" v-html="desc"></div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
export default {
  name: "Video",
  props: ["name", "description", "video"],
  data() {
    return {
      desc:
        "<p>Exercitation officia ad officia sit amet laboris Lorem Lorem.Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.</p><p>Exercitation officia ad officia sit amet laboris Lorem Lorem.Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.</p>"
    };
  },
  methods: {
    hideModal() {
      this.$store.dispatch("close_modal_and_clear_data");
    }
  }
};
</script>

<style lang="scss">
h2 {
  padding-top: 3px !important;
}
#teacher-video-modal {
  max-width: 805px !important;
  width: 100% !important;
  @media screen and (max-width: 766px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media screen and (max-width: 620px) {
    padding-left: 25px;
    padding-right: 25px;
  }
}

.c-video__content-holder-title {
  color: rgba(37, 28, 28, 1) !important;
}
.c-video__curator {
  height: 381px;
  max-width: 678px;
  width: 100%;
  @media screen and (max-width: 766px) {
    max-width: 100%;
  }
}
.c-video__content-holder-about {
  p:nth-child(2) {
    margin-top: 28px;
  }
}
.c-video-modal {
  padding-left: 60px;
  padding-top: 43px;
  overflow-x: hidden !important;
}
.c-video {
  margin-bottom: 30px;
  &__container {
    @extend %m0a;
  }

  &__curator {
    margin-top: 31px;
    border-radius: 2px;
  }
  &__header {
    @extend %df;
    @extend %jcfs;
    margin-left: 18px;
    &-close {
      margin-right: 18px;
    }

    &-teacher {
      @extend %h3-title-bold;
      margin-left: 18px !important;
      color: $gray;
    }
  }
  .individualName {
    color: rgba(37, 28, 28, 1);
    font-family: "Circe-Bold";
  }
  &__content {
    &-holder {
      &-title {
        margin: 60px 0 23px 0;
        @extend %h3-title-bold;
        color: $gray;
      }
      &-about {
        color: $gray;
        @extend %text-small;
      }
      &-description {
        color: $gray;
        @extend %text-small;
        margin-top: 20px;
      }
    }
  }
}
@include bp(766px) {
  .c-video-modal {
    width: 100vw;
  }
  .c-video {
    &-modal {
      overflow-x: scroll;
    }
    padding-left: 0;
    margin: 0 auto;
    padding-bottom: 50px;
    &__header {
      width: 100%;
    }
    iframe {
      width: 100%;
      height: 250px;
    }
  }
}
@include bp(620px) {
  .c-video__header-teacher,
  .c-video__content-holder-title {
    font-size: 16px;
  }
  .c-video__content-holder-about {
    font-size: 10px;
    p:nth-child(2) {
      margin-top: 14px;
    }
  }
}
</style>
