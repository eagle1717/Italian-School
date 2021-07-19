<template>
  <div class="v-teacher-homeworks">
    <template v-if="students.length >= 0">
      <div class="homework-navigation-bar flex justify-between">
        <h1 class="v-teacher-homeworks__title">Compiti di casa</h1>
        <div class="v-students__wrapper-selects">
          <BaseSelect :options="selectOptions" v-model="selectVal" />
        </div>
      </div>
      <div id="wr-stud-card">
        <div
          class="flex justify-between c-student"
          v-for="(it, key) in students"
          :key="key"
          :class="{
            disabled: it.checkHomeWork
          }"
        >
          <div class="c-student__user-data">
            <div class="hover-change" @click="showModal">
              <figure class="c-student__photo">
                <img
                  :src="require(`@/assets/${it.photo}.svg`)"
                  :alt="it.name"
                />
              </figure>
              <h2 class="c-student__name">{{ it.name }} {{ it.surname }}</h2>
            </div>
            <div class="c-student__name-data">
              <p class="c-student__data">
                Ha caricato il compito
              </p>
            </div>
          </div>
          <template v-if="it.is_homework_done && !it.checkHomeWork">
            <a
              :href="it.link_to_homework"
              class="c-student__btn c-student__btn_red"
              target="_blank"
            >
              <span>Correggere</span>
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
    <template v-else>
      <div class="v-teacher-homeworks__wrap v-teacher-homeworks__wrap_users">
        <div class="v-teacher-homeworks__empty">
          <h1 class="v-teacher-homeworks__title">Compiti di casa</h1>
          <div class="v-teacher-homeworks__wrapper no-tasks">
            <figure class="v-teacher-homeworks__ill">
              <img src="@/assets/exam.svg" alt="" />
            </figure>
            <div class="v-teacher-homeworks__content">
              <h3 class="v-teacher-homeworks__em-title">
                Nessun nuovo compito
              </h3>
              <p class="v-teacher-homeworks__em-text">
                Esse anim quis laborum occaecat consequat. Ex aute aliquip qui
                sint. Elit enim in do velit nisi irure commodo esse voluptate
                deserunt est fugiat nostrud.Esse anim quis laborum occaecat
                consequat. Ex aute aliquip qui sint. Elit enim in do velit nisi
                irure commodo esse voluptate deserunt est fugiat nostrud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import Student from "./Student.vue";
export default {
  name: "TeacherHomeWork",
  components: {
    Student
  },
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
      checkHomeWork: undefined,
      is_homework_done: undefined,
      students: [
        {
          userId: 1,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          checkHomeWork: false,
          is_homework_done: true,
          link_to_homework: "https://google.com"
        },
        {
          userId: 1,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          checkHomeWork: true,
          is_homework_done: true,
          link_to_homework: "https://google.com"
        },
        {
          userId: 1,
          photo: "user2",
          name: "Ника",
          surname: "Ларингова",
          checkHomeWork: true,
          is_homework_done: true,
          link_to_homework: "https://google.com"
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
    showModal() {
      this.SHOW_MODAL("student-profile");
    }
  }
};
</script>

<style lang="scss">
.v-teacher-homeworks {
  @extend %pagept;
  margin: 0 auto;
  padding-top: 42px;
  max-width: 892px;;
  padding-left: 0px !important;
  $border-width: 2.4;
  .c-student__user-data {
    position: relative;
    cursor: initial;
  }
  .c-student__name-data {
    margin-top: 15px;
    .c-student__data {
      line-height: 19.6px;
      cursor: default;
    }
  }
  .c-student__name {
    color: #251c1c;
    position: absolute;
    margin-left: 21px;
    top: 9px;
    line-height: 17.89px;
    transition: all 0.5s ease;
  }
  .c-student__photo {
    border: $border-width + px solid transparent;
    transition: all 0.5s ease;
  }
  .hover-change {
    cursor: pointer;
    figure,
    h2 {
      display: inline-block;
    }
    img {
      object-fit: cover;
      height: min-content;
    }
    figure {
      width: 60px;
      height: 60px;
    }
    &:hover {
      transition: all 0.5s ease;
      .c-student__photo {
        border: $border-width + px solid $green;
        transition: all 0.5s ease;
      }
      .c-student__name {
        color: $green;
        transition: all 0.5s ease;
      }
    }
  }
  .c-student {
    padding: 15px 38.5px 15px 15px;
  }
  .homework-navigation-bar {
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
  #wr-stud-card {
    margin-top: 25px;
  }
  .student-card-wrapper {
    margin-bottom: 13px;
    display: block;
  }
  &__title {
    font-size: 20px;
    // font-weight: 700;
    font-family: "Circe-Bold";
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
      font-family: "Circe-Bold";
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
