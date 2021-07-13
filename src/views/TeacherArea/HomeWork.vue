<template>
  <div class="v-teacher-homeworks">
    <div class="v-teacher-homeworks__wrap v-teacher-homeworks__wrap_title">
      <h1 class="v-teacher-homeworks__title">Compiti di casa</h1>
      <!--      <BaseSelect :options="selectOptions" v-model="selectVal" />-->
    </div>
    <div class="v-teacher-homeworks__wrap v-teacher-homeworks__wrap_users">
      <template v-if="is_empty_new_homeworks">
        <!--        <pre>-->
        <!--          {{ sorting_done_homework }}-->
        <!--        </pre>-->
        <Student
          v-for="student in sorting_done_homework"
          :key="student.student_id"
          :userId="student.student_id"
          :photo="student.photo"
          :name="student.first_name"
          :surname="student.last_name"
          :lessonId="student.id"
          :lessonDate="student.date"
          :lessonTime="student.time_from"
          :lessonTimeTo="student.time_to"
          :isPassed="!!student.link_to_lesson"
          :link_to_lesson="student.link_to_lesson"
          :link_to_homework="student.link_to_homework"
          :lesson_type="student.lesson_type.name"
          :lesson_comment="student.lesson_comment"
          :is_homework_done="student.is_homework_done"
          @showUser="showUserModal"
        />
      </template>
      <template v-else>
        <div class="v-teacher-homeworks__empty">
          <div class="v-teacher-homeworks__wrapper">
            <figure class="v-teacher-homeworks__ill">
              <img src="img/exam.svg" alt="" />
            </figure>
            <div class="v-teacher-homeworks__content">
              <h3 class="v-teacher-homeworks__em-title">
                Nessun nuovo compito
              </h3>
              <!-- <p class="v-teacher-homeworks__em-text">text</p> -->
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Student from "./Student.vue";
import { get_curator_users } from "@/mixins/mixins.js";
export default {
  name: "TeacherHomeWork",
  components: {
    Student
  },
  mixins: [get_curator_users],
  data() {
    return {
      selectVal: "notCheck",
      selectOptions: [
        {
          val: "notCheck",
          text: "Непроверенные"
        },
        {
          val: "last",
          text: "Последние"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("user", [
      "curator_confirmed_lessons",
      "curator_not_confirmed_lessons"
    ])
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    // Получает id занятия id
    showUserModal() {
      this.SHOW_MODAL("student-modal");
    },
    // Получает id юзера id
    showLessonModal() {
      this.SHOW_MODAL("new-teacher-lesson");
    }
  }
};
</script>

<style lang="scss">
.v-teacher-homeworks {
  @extend %pagept;
  max-width: rem(892);
  // .v-teacher-homeworks__wrap

  &__wrap {
    // .v-teacher-homeworks__wrap_title

    &_title {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      margin-bottom: rem(32);
    }

    // .v-teacher-homeworks__wrap_users

    &_users {
    }
  }

  // .v-teacher-homeworks__title

  &__title {
    @extend %h3-title-bold;
    color: $gray;
  }
  &__empty {
  }
  &__wrapper {
    @extend %df;
  }
  &__ill {
    max-width: 200px;
  }
  &__content {
    margin-left: 50px;
  }
  &__em {
    &-title {
      @extend %h3-title-bold;
      color: $gray;
      margin-bottom: 15px;
    }
    &-text {
      @extend %text-small;
      color: $gray;
    }
  }
}
@include bp(1100px) {
  .v-teacher-homeworks {
    padding: 50px 0 0 0;
    max-width: 750px;
    margin: 0 auto;
  }
}
@include bp(766px) {
  .v-teacher-homeworks {
    max-width: 320px;
    &__wrapper {
      flex-direction: column;
    }
    &__content {
      margin-left: 0;
    }
  }
}
</style>
