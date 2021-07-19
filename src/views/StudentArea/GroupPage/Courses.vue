<template>
  <div class="group-wrap-container">
    <Group />
    <div class="group-wrapper wr-up">
      <div class="group-card" v-for="group in groupInformation" :key="group.id">
        <div class="current-status">
          <div class="status-img">
            <img
              v-if="group.status === 'current'"
              :src="
                require(`@/assets/status/${group.currentStatus.current.img}.svg`)
              "
            />
            <img
              v-else-if="group.status === 'past'"
              :src="
                require(`@/assets/status/${group.currentStatus.past.img}.svg`)
              "
            />
            <img
              v-else-if="group.status === 'future'"
              :src="
                require(`@/assets/status/${group.currentStatus.future.img}.svg`)
              "
            />
          </div>
          <div class="status-text">
            <div v-if="group.status === 'current'">
              {{ group.currentStatus.current.text }}
            </div>
            <div v-else-if="group.status === 'past'">
              {{ group.currentStatus.past.text }}
            </div>
            <div v-else-if="group.status === 'future'">
              {{ group.currentStatus.future.text }}
            </div>
          </div>
        </div>
        <img
          :src="require(`@/assets/${group.curatorPhoto}.svg`)"
          alt=""
          class="user-img-course"
        />
        <p class="name">{{ group.curatorName }}</p>
        <h3 class="title" v-html="group.courseName"></h3>
        <a
          @click.prevent="openModal"
          v-if="group.status == 'current'"
          class="go-to-lesson"
        >
          Перейти к занятию
        </a>
        <div v-else>
          <hr class="hr" />
          <span class="schedule">график занятий</span>
          <div class="time grid">
            <span class="times">Пн. 10:00 - 11:00</span>
            <span class="times">Ср. 12:00 - 13:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Group from "./Group.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      groupInformation: [
        {
          curatorName: "Annette Black",
          curatorPhoto: "robert",
          courseName: "Итальянский для <br />чайников.",
          status: "current",
          currentStatus: {
            current: {
              text: "Сейчас в сети",
              img: "current"
            },
            past: {
              text: "Прошедший",
              img: "past"
            },
            future: {
              text: "Предстоящий",
              img: "future"
            }
          }
        },
        {
          curatorName: "Annette Black",
          curatorPhoto: "robert",
          courseName: "Итальянский для <br />чайников.",
          status: "current",
          currentStatus: {
            current: {
              text: "Сейчас в сети",
              img: "current"
            },
            past: {
              text: "Прошедший",
              img: "past"
            },
            future: {
              text: "Предстоящий",
              img: "future"
            }
          }
        },
        {
          curatorName: "Annette Black",
          curatorPhoto: "robert",
          courseName: "Итальянский для <br />чайников.",
          status: "past",
          currentStatus: {
            current: {
              text: "Сейчас в сети",
              img: "current"
            },
            past: {
              text: "Прошедший",
              img: "past"
            },
            future: {
              text: "Предстоящий",
              img: "future"
            }
          }
        },
        {
          curatorName: "Annette Black",
          curatorPhoto: "robert",
          courseName: "Итальянский для <br />чайников.",
          status: "future",
          currentStatus: {
            current: {
              text: "Сейчас в сети",
              img: "current"
            },
            past: {
              text: "Прошедший",
              img: "past"
            },
            future: {
              text: "Предстоящий",
              img: "future"
            }
          }
        }
      ]
    };
  },
  components: {
    Group
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    openModal() {
      this.SHOW_MODAL("group-modal");
    }
  }
};
</script>
<style lang="scss">
.group-wrapper {
  font-family: "Circe-Regular";
  .go-to-lesson {
    font-family: 'Circe-Bold';
  }
}
</style>
