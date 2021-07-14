<template>
  <BaseModal class="c-video-modal teacher2-course-group">
    <div class="c-video">
      <div class="c-video__container">
        <div class="c-video__content">
          <div class="top-side">
            <div class="c-video__header">
              <h2
                class="c-video__header-teacher2 kurs-prepoda margin-from-close-button"
              >
                Курс преподавателя
              </h2>
            </div>
            <div
              class="teacher2"
              :class="{ hide: !show_full_of_card }"
              @click="show_full_card"
            >
              <div class="flex">
                <div class="teacher2__itm-left curator-picture">
                  <figure class="teacher2__user">
                    <div class="teacher2__user-img">
                      <template>
                        <img
                          :src="
                            require(`@/assets/img/users/photos/${curatorInformation.photo}.svg`)
                          "
                          alt=""
                        />
                      </template>
                    </div>
                  </figure>
                </div>
                <div class="curator-text">
                  <div class="teacher2__user-info">
                    <h3 class="teacher2__user-name">
                      {{ curatorInformation.name }}
                    </h3>
                  </div>
                  <div class="teacher2__itm-middle">
                    <p
                      class="teacher2__text"
                      v-html="curatorInformation.desc"
                    ></p>
                  </div>
                </div>
                <div class="teacher2__itm-right">
                  <div class="teacher2__arrow">
                    <BaseIcon name="arrow-down"></BaseIcon>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-curator">
              <div class="flex current-status">
                <div class="status-img">
                  <img
                    :src="
                      require(`@/assets/status/${currentStatus.current.img}.svg`)
                    "
                  />
                </div>
                <div class="status-text">
                  <span>{{ currentStatus.current.text }} </span>
                </div>
              </div>
              <p class="c-name">Название курса</p>
              <h3>{{ courseInformation.courseName }}.</h3>
              <div class="flex lesson-date-clock">
                <img src="@/assets/clock.svg" />
                <span>{{ lessonDate }} </span>
              </div>
            </div>
            <div class="schedule-block">
              <p>График занятий</p>
              <div class="times grid grid-cols-2">
                <div
                  class="flex each-lesson"
                  v-for="lesson in courseInformation.lessonsTime"
                  :key="lesson.id"
                >
                  <img src="@/assets/clock.svg" />
                  <span
                    >{{ lesson.day }} {{ lesson.timeStart }} -{{
                      lesson.timeEnd
                    }}
                  </span>
                </div>
              </div>
            </div>
            <div
              class="main-description2"
              v-html="courseInformation.desc2"
            ></div>
          </div>
          <div class="about-lesson">
            <div class="entire-lessons">
              <div class="nav-top flex justify-between">
                <div class="left">
                  <p class="price-text">Стоимость курса</p>
                  <p class="price">{{ courseInformation.coursePrice }} €</p>
                </div>
                <div class="right">
                  <div>
                    <a href="#" class="btn-green">Присоединится к группе</a>
                  </div>
                </div>
              </div>
              <div
                class="more-descsription-about"
                v-html="courseInformation.desc"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      courseInformation: {
        courseName: "Итальянский для чайников",
        coursePrice: "200 000",
        lessonsTime: [
          {
            day: "Вторник",
            timeStart: "10:00",
            timeEnd: "11:00"
          },
          {
            day: "Пятница",
            timeStart: "12:00",
            timeEnd: "13:00"
          },
          {
            day: "Суббота",
            timeStart: "18:00",
            timeEnd: "18:30"
          }
        ],
        desc:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare amet, enim, nec risus lacinia sit nunc sed. Et diam gravida praesent porttitor condimentum varius. Platea suspendisse nibh donec ipsum. Tincidunt libero sed vitae convallis curabitur. Id magnis pellentesque mi, egestas. Nec sit congue interdum varius cursus aenean  </p  <p>  Ipsum consectetur porta blandit odio in amet. Turpis  cursus augue nunc fringilla. Neque amet arcu nulla  erat. Et odio cursus pharetra, nec condimentum quis  sed egestas in  </p  <p> Imperdiet ultrices quis mi, ut egestas turpis malesuada. Non laoreet ipsum, dignissim morbi molestie et non integer. Nunc, feugiat adipiscing vivamus  massa, sit. Adipiscing ac, quis ultrices nullam  tellus. Tellus dictumst pretium orci amet a ac diam  mauris elementum. Non laoreet ipsum, dignissim morbi  molestie et non integer  </p>",
        desc2:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare amet, enim, nec risus lacinia sit nunc sed. Et diam gravida praesent porttitor condimentum varius. Platea suspendisse nibh donec ipsum.</p>"
      },
      curatorInformation: {
        name: "Robert Fox",
        photo: "user",
        desc:
          "<p>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deser...Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deser...</p>"
      },
      show_full_of_card: false,
      lessonDate: "1 декабря  10:30",
      currentStatus: {
        current: {
          text: "Предстоящий",
          img: "future"
        }
      }
    };
  },
  computed: {
    ...mapGetters(["modalInfo"])
  },
  methods: {
    show_full_card() {
      this.show_full_of_card = !this.show_full_of_card;
    }
  },
  mounted() {
    this.$root.$on("group-modal", ({ video, desc }) => {
      this.video = video;
      this.desc = desc;
    });
    console.log(this.modalInfo);
  }
};
</script>
<style lang="scss">
.teacher2-course-group {
  max-width: 705px !important;
  width: 100% !important;
  padding: 0px;
  hr {
    margin: 30px 0px;
  }
  .c-video {
    width: 100%;
  }
  .c-name {
    margin-top: 25px;
  }
  .kurs-prepoda {
    padding-top: 10px !important;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #4b4b4b;
  }
  .c-video,
  .c-video__container,
  .c-video-content {
    padding-left: 0px !important;
  }
  .top-side,
  .about-lesson {
    padding-left: 60px;
  }
  .top-side {
    width: 525px;
  }
  .c-video__container {
    margin: 0px;
    width: 100%;
    max-width: 100%;
  }
  .teacher2__user {
    margin-bottom: 0px;
  }
  .teacher2 {
    background-color: #f7f7f7;
    max-width: 525px;
    width: 525px;
    margin: 30px 0px;
    border-radius: 2px;
    position: relative;
    max-height: max-content;
    height: max-content;
    padding: 30px;
    transition: all 0.5s ease;
    cursor: pointer;
    .teacher2__arrow {
      .icon {
        width: 11px;
        height: 10px;
        fill: transparent;
        stroke: $green;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        transform: rotate(180deg);
      }
    }
    &.hide {
      max-height: 144px;
      overflow: hidden;
      transition: all 0.5s ease;
      .teacher2__itm-middle {
        height: 60px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      &__text {
        p:nth-child(even) {
          margin-top: 20px;
        }
      }
      .teacher2__arrow {
        .icon {
          transform: rotate(0);
          stroke: #251c1c !important;
        }
      }

      &.open {
        max-height: 100%;
        cursor: default;

        .teacher2 {
          &__text {
            max-height: 100%;
            // overflow: hidden;
          }
        }
      }
    }
    .curator-text {
      margin-left: 17px;
      .teacher2__itm-middle {
        p {
          font-size: 14px;
          line-height: 20px;
          color: $gray;
        }
      }
    }
    .top-content {
      width: 100%;
    }
    .teacher2__user-name {
      @extend %regular;
      font-size: 30px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0.03em;
      color: rgba(37, 28, 28, 1);
    }
    .teacher2__itm-middle {
      margin-top: 4px;
      .teacher2__text {
        width: 358px;
      }
      p {
        margin-top: 25px;
      }
      p:nth-child(1) {
        margin-top: 0px;
      }
    }
  }
  .teacher2__user-info {
    margin-top: 0px;
    margin-left: 0px;
  }
  .teacher2__itm-right {
    margin-top: 9px;
    position: absolute;
    right: 30px;
    width: 14px;
    height: 7px;
  }
  .main-curator {
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: rgba(75, 75, 75, 1);
    }
    h3 {
      font-size: 30px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0.03em;
    }
  }
  .schedule-block {
    margin-top: 50px;
    margin-bottom: 20px;
    .times {
      span {
        font-family: "Circe";
        font-size: 20px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0.03em;
        margin-left: 5px;
        white-space: nowrap;
      }
      .each-lesson {
        margin-top: 10px;
      }
      .each-lesson:nth-child(even) {
        margin-left: 20px;
      }
    }
  }
  .about-lesson {
    box-shadow: 0px -5px 20px -10px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px -5px 20px -10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px -5px 20px -10px rgba(0, 0, 0, 0.2);
    padding-top: 20px;
    .entire-lessons {
      max-width: 525px;
      width: 100%;
      .more-descsription-about {
        margin-top: 20px;
        a {
          text-decoration: underline;
          text-underline-offset: 2px;
          &:hover {
            color: gray;
          }
        }
        ul {
          margin-top: 20px;
        }
        .about-section-header {
          font-size: 30px;
        }
        .about-section-header2 {
          font-size: 20px;
        }
        .sp {
          margin-top: 15px;
        }
        .pointer-ul {
          margin-left: 20px;
          white-space: nowrap;
          li {
            list-style-type: disc;
            display: list-item;
          }
        }
        .line-ul {
          margin-left: 20px;
          white-space: nowrap;
          li {
            list-style-type: "-";
            display: list-item;
            list-style: outside;
          }
        }
        .hd-ab {
          margin-top: 20px;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: 0.03em;
        }
      }
    }
    .price-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: rgba(75, 75, 75, 1);
    }
    .price {
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      color: rgba(57, 177, 0, 1);
    }
    .btn-green {
      transition: all 0.5s ease;
      border-radius: 2px;
      &:hover {
        transition: all 0.5s ease;
        @extend %btn-darkgreen;
      }
    }
  }
  .c-video__header-teacher2 {
    margin-top: 30px;
  }
}
.lesson-date-clock {
  margin-top: 10px;
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.03em;
    margin-left: 5px;
  }
}
</style>
<style>
.justify-between {
  justify-content: space-between;
}
</style>
