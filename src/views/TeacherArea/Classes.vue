<template>
  <div class="v-teacher-classess">
    <div class="entire-teacher-class">
      <template v-if="students.length >= 0">
        <div class="classes-navigation-bar flex justify-between">
          <h1 class="v-teacher-classess__title">Nuove lezioni</h1>
        </div>
        <div id="wr-stud-card">
          <div
            class="flex justify-between c-student"
            :class="{ disabled: it.link_to_lesson }"
            v-for="(it, key) in students"
            :key="key"
          >
            <div class="c-student__user-data">
              <figure class="c-student__photo">
                <template v-if="it.photo">
                  <img
                    :src="require(`@/assets/${it.photo}.svg`)"
                    :alt="it.name"
                  />
                </template>
                <template v-else>
                  <img src="img/ill/default-photo.svg" :alt="it.name" />
                </template>
              </figure>
              <div class="c-student__name-data">
                <h2 class="c-student__name">{{ it.name }} {{ it.surname }}</h2>
                <template>
                  <p class="c-student__data">
                    Richiede la lezione il {{ it.lessonDate }} marzo alle
                    {{ it.lessonTime }}
                  </p>
                </template>
              </div>
            </div>
            <template v-if="it.link_to_lesson == ''">
              <a
                @click="openModal"
                class="c-student__btn c-student__btn_green"
                target="_blank"
              >
                <span>Aggiungere link</span>
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L8 8L1 15"
                    stroke="#EF4036"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </template>
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
  name: "Teacherclasses",
  components: {
    Student
  },
  mixins: [get_curator_users],
  data() {
    return {
      selectVal: "notCheck",
      selectVal: "notCheck",
      selectOptions: [
        {
          val: "notCheck",
          text: "Da correggere"
        },
        {
          val: "last",
          text: "Ultimi"
        }
      ],
      userId: null,
      photo: "",
      name: "",
      surname: "",
      lessonDate: "",
      lessonTime: "",
      link_to_lesson: "",
      students: [
        {
          userId: 1,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          lessonDate: "24 marzo",
          lessonTime: "18:00",
          link_to_lesson: ""
        },
        {
          userId: 2,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          lessonDate: "24 marzo",
          lessonTime: "18:00",
          link_to_lesson: "https://google.com"
        },
        {
          userId: 3,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          lessonDate: "24 marzo",
          lessonTime: "18:00",
          link_to_lesson: "https://google.com"
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
    openModal() {
      this.SHOW_MODAL("lesson-with-student");
    }
  }
};
</script>

<style lang="scss">
.v-teacher-classess {
  @extend %pagept;
  margin: 0 auto;
  padding-top: 42px;
  max-width: 892px;;
  padding-left: 0px;
  #wr-stud-card {
    margin-top: 32px;
  }
  .c-student {
    padding: 15px 30px 15px 15px;
  }
  .classes-navigation-bar {
    align-items: center;
    .select {
      width: 183px;
      .select__value {
        color: rgba(37, 28, 28, 1);
      }
      .select__option-btn {
        &:hover {
          color: inherit;
        }
      }
      .select__wrap-val {
        svg {
          color: rgba(37, 28, 28, 1) !important;
        }
      }
    }
  }
  .no-tasks {
    margin-top: 66px;
  }
  .student-card-wrapper {
    margin-bottom: 13px;
    display: block;
  }
  &__title {
    font-size: 20px;
    // font-weight: 700;
    font-family: 'Circe-Bold';
    height: min-content;
    letter-spacing: 0.03em;
    color: #4b4b4b;
  }
  &__wrapper {
    @extend %df;
  }
  &__ill {
    max-width: 209px;
    max-height: 168.58px;
  }
  &__content {
    margin-left: 47px;
    margin-top: 15px;
  }
  &__em {
    &-title {
      @extend %h3-title-bold;
      margin-bottom: 15px;
      font-size: 20px;
      font-style: normal;
      // font-weight: 700;
      font-family: 'Circe-Bold';
      line-height: 21px;
      letter-spacing: 0.03em;
    }
    &-text {
      @extend %text-small;
      color: $gray;
      max-width: 497px;
    }
  }
}
@include bp(1310px) {
  .v-teacher-classess {
    padding: 50px 0 0 0;
    max-width: 750px;
    margin: 0 auto;
  }
}
@include bp(766px) {
  .v-teacher-classess {
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
