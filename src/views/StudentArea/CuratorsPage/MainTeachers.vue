<template>
  <div class="teachers wrapper-main-teacher">
    <div class="padding-container">
      <div class="teachers__wrap teachers__wrap_title">
        <figure class="teachers__title-img">
          <img src="@/assets/img/ill/calendar.svg" alt="Title icon" />
        </figure>
        <h1 class="teachers__title">Выбери своего первого преподавателя!</h1>
      </div>
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
      <transition-group name="transform" class="transform">
        <Video
          v-if="this.$store.state.activeModal === 'video'"
          :key="'video'"
          :name="theaches.name"
          :description="theaches.about_content"
          :video="theaches.video"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Video from "@/components/Modals/Video";
import TeacherCard from "@/components/StudentArea/CuratorsPage/TeacherCard.vue";

export default {
  components: {
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
          photo: "robert",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "998",
          name: "Tomothy Murphy",
          nation: "Итальянец",
          photo: "robert",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "987",
          name: "Tomothy Murphy",
          nation: "Итальянец",
          photo: "robert",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "325",
          name: "Lily Fisher",
          nation: "Итальянка",
          photo: "robert",
          about_content:
            "Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum. Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum."
        },
        {
          id: "123",
          name: "Stella Flores",
          nation: "Итальянка",
          photo: "robert",
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
  margin: 0 auto;
  max-width: 892px;
  @media screen and (max-width: 1310px) {
    padding-left: 25px;
    padding-right: 25px;
    max-width: 100%;
    width: 100%;
    .teacher__btn-video,
    .teacher__btn-lesson {
      width: 237px;
    }
    .teacher__itm-middle {
      margin-left: 20px;
      @media screen and (max-width: 800px) {
        max-width: 340px;
      }
    }
  }
  @media screen and (max-width: 766px) {
    .teachers__title-img {
      height: 24px;
      width: 28px;
    }
    .teachers__title {
      font-size: 20px;
      line-height: 100%;
    }
  }
  .padding-container {
    margin-top: 35px;
  }
  .teachers__wrap {
    max-width: 892px;
    @media screen and (max-width: 1310px) {
      max-width: 100%;
    }
  }
}
.teachers {
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
      margin-bottom: 48px;
    }

    &_filters {
      @extend %df;
      align-items: flex-start;
      @extend %jcsb;
      width: 100%;
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

// @include bp(1360px) {
//   .teachers {
//     padding-right: 30px;
//   }
// }

// @include bp(1310px) {
//   .teachers {
//     padding-top: 57px;
//     padding-left: 0;
//     max-width: 100%;
//     margin: 0 auto;
//     width: 100%;
//     padding-right: 0;
//   }
// }
.filters {
  height: 35px;
}
.teachers__my {
  float: right;
  padding-bottom: 34px;
}
button.teachers__my {
  width: 187px;
  &:hover {
    border: 1px solid $green;
  }
}
.teachers__wrap_tech {
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>
