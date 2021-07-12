<template>
  <BaseModal class="c-video-modal teacher-course-group">
    <div class="c-video">
      <div class="c-video__container">
        <div class="c-video__content">
          <div class="top-side">
            <div class="c-video__header">
              <div class="mobile-nav__burger">
                <button class="mobile-nav__btn active" @click="hideModal">
                  <img src="@/assets/close2.svg" />
                </button>
              </div>
              <h2 class="c-video__header-teacher">Курс преподавателя</h2>
            </div>
            <div
              class="teacher"
              :class="{ hide: show_full_of_card, isShown: show_full_of_card }"
              @click="show_full_card"
            >
              <div class="teacher__itm-left">
                <figure class="teacher__user">
                  <div class="teacher__user-img">
                    <img src="@/assets/robert.svg" />
                  </div>
                  <div class="grid top-content">
                    <div>
                      <figcaption class="teacher__user-info">
                        <h3 class="teacher__user-name">Robert Fox</h3>
                      </figcaption>
                    </div>
                    <div class="teacher__itm-middle">
                      <div class="teacher__text" v-html="desc"></div>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="teacher__itm-right">
                <div class="teacher__arrow">
                  <BaseIcon name="arrow-down"></BaseIcon>
                </div>
              </div>
            </div>
            <div class="main-curator">
              <p>Название курса</p>
              <h3>Итальянский для чайников.</h3>
            </div>
            <div class="schedule-block">
              <p>График занятий</p>
              <div class="times grid grid-cols-2">
                <div class="flex each-lesson">
                  <img src="@/assets/clock.svg" />
                  <span>
                    Вторник 10:00 - 11:00
                  </span>
                </div>
                <div class="flex each-lesson">
                  <img src="@/assets/clock.svg" />
                  <span>
                    Пятница 12:00 - 13:00
                  </span>
                </div>
                <div class="flex each-lesson">
                  <img src="@/assets/clock.svg" />
                  <span>
                    Суббота 18:00 - 18:30
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="about-lesson">
            <div class="entire-lessons">
              <div class="nav-top flex justify-between">
                <div class="left">
                  <p class="price-text">Стоимость курса</p>
                  <p class="price">200 000 €</p>
                </div>
                <div class="right">
                  <div>
                    <a href="#" class="btn-green">Присоединится к группе</a>
                  </div>
                </div>
              </div>
              <div class="more-descsription-about">
                <p>
                  auctor ultrices vestibulum libero luctus nunc. Ornare
                  parturient sed pretium auctor ultricies ultrices etiam. Nisi
                  vulputate pharetra dui lacus non auctor egestas. Risus nibh
                  mattis ornare pulvinar vulputate viverra turpis a.
                  <a href="#">Est sagittis, platea imperdiet non.</a> Viverra
                  ac, morbi et rhoncus nec eu eros tortor eget. Ac praesent est
                  pretium consequat. Arcu, vestibulum posuere nibh dolor.
                </p>
                <p class="sp">
                  Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                  sed molestie tortor et diam, quam.
                </p>
                <hr />
                <p>
                  Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                  sed molestie tortor et diam, quam.
                </p>
                <ul class="pointer-ul">
                  <li>
                    Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                    sed molestie
                  </li>
                  <li>Nisi vulputate pharetra dui lacus non auctor egestas</li>
                  <li>
                    Nisi vulputate pharetra dui lacus non auctor egestas. Risus
                    nibh mattis.
                  </li>
                </ul>
                <ul class="line-ul">
                  <li>
                    Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                    sed molestie
                  </li>
                  <li>Nisi vulputate pharetra dui lacus non auctor egestas</li>
                  <li>
                    Nisi vulputate pharetra dui lacus non auctor egestas. Risus
                    nibh mattis.
                  </li>
                </ul>
                <div class="about-section-header hd-ab">
                  Id morbi vestibulum, ut aliquet.
                </div>
                <p>
                  Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                  sed molestie tortor et diam, quam.
                </p>
                <div class="about-section-header2 hd-ab">
                  Id morbi vestibulum, ut aliquet magnis.
                </div>
                <p>
                  Id morbi vestibulum, ut aliquet magnis. Arcu magna tincidunt
                  sed molestie tortor et diam, quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script>
export default {
  methods: {
    hideModal() {
      this.$store.state.openTeacherInfo = false;
      desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare amet, enim, nec risus lacinia sit nunc sed. Et diam gravida praesent porttitor condimentum varius. Platea suspendisse nibh donec ipsum. Tincidunt libero sed vitae convallis curabitur. Id magnis pellentesque mi, egestas. Nec sit congue interdum varius cursus aenean  </p  <p>  Ipsum consectetur porta blandit odio in amet. Turpis  cursus augue nunc fringilla. Neque amet arcu nulla  erat. Et odio cursus pharetra, nec condimentum quis  sed egestas in  </p  <p> Imperdiet ultrices quis mi, ut egestas turpis malesuada. Non laoreet ipsum, dignissim morbi molestie et non integer. Nunc, feugiat adipiscing vivamus  massa, sit. Adipiscing ac, quis ultrices nullam  tellus. Tellus dictumst pretium orci amet a ac diam  mauris elementum. Non laoreet ipsum, dignissim morbi  molestie et non integer  </p>";
    }
  }
};
</script>
<style lang="scss">
.teacher-course-group {
  width: 705px;
  hr {
    margin: 30px 0px;
  }
  .c-video {
    width: 100%;
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
  .teacher__user {
    margin-bottom: 0px;
  }
  .teacher {
    background-color: #f7f7f7;
    width: 525px;
    margin: 30px 0px;
    border-radius: 2px;
    position: relative;
    max-height: max-content;
    height: max-content;
    .top-content {
      width: 100%;
    }
    .teacher__user-name {
      @extend %regular;
      font-size: 30px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0.03em;
      color: rgba(37, 28, 28, 1);
    }
    .teacher__itm-middle {
      margin-top: 4px;
      .teacher__text {
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
  .teacher__user-info {
    margin-top: 0px;
    margin-left: 0px;
  }
  .teacher__itm-right {
    margin-top: 9px;
    position: absolute;
    right: 30px;
    width: 14px;
    height: 7px;
  }
  .teacher__arrow .icon {
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
      width: 525px;
      max-width: 525px;
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
  .c-video__header,
  .c-video__header-teacher {
    margin-left: 0px;
  }
}
</style>
<style>
.justify-between {
  justify-content: space-between;
}
</style>
