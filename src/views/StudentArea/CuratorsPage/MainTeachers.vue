<template>
  <div class="teachers wrapper-main-teacher">
    <!-- <div class="teachers__wrap teachers__wrap_title">
      <figure class="teachers__title-img">
        <img src="/img/ill/calendar.svg" alt="Title icon" />
      </figure>
      <h1 class="teachers__title">Выбери своего первого преподавателя!</h1>
    </div> -->
    <div class="filters">
      <button class="teachers__my">
        <span>Мои преподаватели</span>
      </button>
    </div>
    <div class="teachers__wrap teachers__wrap_tech">
      <div>
        <TeacherCard
          v-for="(itm, key) in theaches"
          :curator_nation="itm.nation"
          :curator_name="itm.name"
          :curator_id="key"
          :curator_photo="itm.photo"
          :id="itm.id"
          :curator_short_description="itm.about_content"
          :key="key"
        ></TeacherCard>
      </div>
    </div>
    <Notifications />
    <transition-group name="transform">
      <Video
        v-if="this.$store.state.activeModal === 'video'"
        :key="'video'"
        :name="theaches.name"
        :description="theaches.about_content"
        :video="theaches.video"
      />
    </transition-group>
  </div>
</template>

<script>
import Video from "@/components/Modals/Video";
import TeacherCard from "@/components/StudentArea/CuratorsPage/TeacherCard.vue";
import Notifications from "@/components/Notifications";

export default {
  components: {
    Notifications,
    TeacherCard,
    Video
  },
  data() {
    return {
      theaches: [
        {
          id: "234",
          name: "Tomothy Murphy",
          nation: "Итальянец",
          photo: "user.svg",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "998",
          name: "Tomothy Murphy",
          nation: "Итальянец",
          photo: "user.svg",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "987",
          name: "Tomothy Murphy",
          nation: "Итальянец",
          photo: "user.svg",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "325",
          name: "Lily Fisher",
          nation: "Итальянка",
          photo: "user.svg",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "123",
          name: "Stella Flores",
          nation: "Итальянка",
          photo: "user.svg",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.wrapper-main-teacher {
  margin-left: $ml;
  .teachers__wrap {
    width: 892px;
  }
}
.teachers {
  padding-left: 30px;
  width: 892px;
  width: 100%;
  padding-top: 0px !important;
  margin-top: 40px;
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
      align-items: flex-start;
      @extend %jcsb;
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
    align-items: flex-start;
    @extend %jcfs;
    width: 392px;
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
button.teachers__my {
  width: 187px;
  &:hover {
    border: 1px solid $green;
  }
}
.filters {
  padding-bottom: 32px;
  width: min-content;
  float: right;
}
.teachers__wrap_tech {
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>
