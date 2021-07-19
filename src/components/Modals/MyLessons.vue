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
            photo: "user.svg"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.c-homework {
  width: 705px;
}
.c-my-lessons {
  @extend %pagept;
  padding-top: 36px;
  padding-left: 60px;
  width: 705px;
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
@include bp(1310px) {
  .c-my-lessons {
    &__modal {
      width: 100% !important;
    }
    &__container {
      max-width: 600px;
      margin: 0 auto;
    }
    &__header-holder-info-close {
      display: none;
    }
  }
}
@include bp(766px) {
  .c-my-lessons {
    padding-top: 36px;
    padding-left: 0;
    &__header-holder-info-title {
      padding-left: 10px;
    }
    &__header-holder-option {
      display: none;
    }
    &__container {
      max-width: 320px;
      margin: 0 auto;
    }
  }
}
</style>
