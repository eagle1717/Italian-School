<template>
  <div>
    <Group />
    <div class="group-wrapper wr-up">
      <div class="gr-cont">
        <div class="group-card">
          <img src="@/assets/robert.svg" alt="user-photo" />
          <p class="name">Annette Black</p>
          <h3 class="title">Итальянский для <br />чайников.</h3>
          <div class="go-to-lesson">
            <a href="#" @click.prevent="openModal">Перейти к занятию</a>
          </div>
        </div>
        <div class="group-card">
          <img src="@/assets/robert.svg" alt="user-photo" />
          <p class="name">Robert Fox</p>
          <h3 class="title">
            Итальянский для <br />чайников и тех кто его не<br />
            знает.
          </h3>
          <hr class="hr" />
          <span class="schedule">график занятий</span>
          <div class="time grid">
            <span class="times">Пн. 10:00 - 11:00</span>
            <span class="times">Ср. 12:00 - 13:00</span>
          </div>
        </div>
      </div>
      <div class="gr-cont">
        <div class="group-card">
          <img src="@/assets/robert.svg" alt="user-photo" />
          <p class="name">Guy Hawkins</p>
          <h3 class="title">Итальянский для <br />чайников.</h3>
          <hr class="hr" />
          <span class="schedule">график занятий</span>
          <div class="time grid">
            <span class="times">Пн. 10:00 - 11:00</span>
            <span class="times">Ср. 12:00 - 13:00</span>
          </div>
        </div>
        <div class="group-card">
          <img src="@/assets/robert.svg" alt="user-photo" />
          <p class="name">Dianne Russell</p>
          <h3 class="title">
            Итальянский для<br />
            чайников.
          </h3>
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
export default {
  components: {
    Group
  },
  methods: {
    openModal() {
      this.$store.state.openTeacherInfo = true;
    }
  }
};
</script>
