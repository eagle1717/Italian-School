<template>
  <BaseModal class="c-my-lessons__modal">
    <div class="c-my-lessons">
      <div class="c-my-lessons__container">
        <div class="c-my-lessons__header">
          <div class="c-my-lessons__header-holder-info">
            <h2
              class="c-my-lessons__header-holder-info-title margin-from-close-button"
            >
              Ваши занятия
            </h2>
          </div>
          <div class="c-my-lessons__header-holder-option">
            <router-link
              :to="{ name: 'Teachers' }"
              class="c-my-lessons__header-holder-option-btn"
            >
              Добавить занятие
            </router-link>
          </div>
        </div>
        <div class="c-my-lessons__lessons">
          <Teacher
            v-for="lesson in lessons"
            :id="lesson.id"
            :is_homework_done="lesson.is_homework_done"
            :curator="lesson.curator"
            :time-start="lesson.time.from"
            :curator_name="lesson.curator.name"
            :time-end="lesson.time.to"
            :lesson_link="lesson.lesson_link"
            :homework_link="lesson.homework_link"
            :key="lesson.id"
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import Teacher from "@/components/MyLessons/Teacher";
import Homework from "@/components/Modals/Homework.vue";
export default {
  name: "MyLessons",
  components: { Teacher, Homework },
  data() {
    return {
      lessons: [
        {
          time: {
            from: "18:00",
            to: "18:30"
          },
          homework_link: "#",
          lesson_link: "#",
          is_homework_done: true,
          id: 2,
          curator: {
            name: "Tomothy Murphy",
            photo: "robert"
          }
        },
        {
          time: {
            from: "18:00",
            to: "18:30"
          },
          homework_link: "#",
          lesson_link: "#",
          is_homework_done: false,
          id: 1,
          curator: {
            name: "Tomothy Murphy",
            photo: "robert"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-my-lessons__modal.c-modal {
  width: 705px !important;
}
.c-my-lessons__modal {
  overflow-y: hidden !important;
}
.c-my-lessons {
  @extend %pagept;
  padding-top: 36px;
  padding-left: 60px;
  width: 705px;
  @media screen and (max-width: 766px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 620px) {
    .c-my-lessons__header-holder-info-title {
      font-size: 16px;
    }
  }
  &__container {
    max-width: 525px;
  }

  &__lessons {
    overflow: scroll;
    height: 100vh;
    margin-top: 26px;
    width: 100%;
    padding-bottom: 90px;
    @extend %reset-scroll-bar;
  }

  &__header {
    @extend %df;
    @extend %jcsb;
    height: 35px;
    &-holder {
      &-info {
        @extend %df;
        @extend %jcfs;
        @extend %aic;

        &-close {
          margin-right: 14px;
        }

        &-title {
          @extend %h3-title-bold;
          color: $gray;
        }
      }

      &-option {
        &-btn {
          @extend %btn-border-green;
          padding: 7px 23px;
          &:hover {
            background-color: $green;
            color: white;
          }
        }
      }
    }
  }
}
@include bp(766px) {
  .c-my-lessons__modal.c-modal {
    width: 100vw !important;
  }
  .c-my-lessons {
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
  }
  .c-my-lessons__container {
    width: 100%;
    max-width: 100%;
  }
}
@include bp(620px) {
  .c-my-lessons {
    padding-top: 36px;
    padding-left: 0;
    &__header-holder-info-title {
      padding-left: 10px;
    }
    &__header-holder-option {
      a {
        padding: 6.4px 23px;
        font-size: 12px;
      }
    }
    &__container {
      max-width: 100%;
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
