<template>
  <div
    :style="componentStyle"
    :class="classNameForSmall"
    @mouseover="mouserOverEvent(minutesFrom, minutesTo)"
  >
    <template v-if="isUserVisible">
      <div class="c-teacher-calendar__user" :class="{'empty':!modal_data.student_first_name}" @click="showModal">
        <template v-if="modal_data.student_first_name">
          <figure class="c-teacher-calendar__user-img">
            <template v-if="modal_data.photo">
              <img :src="modal_data.photo" :alt="name" />
            </template>
            <template v-else>
              <img src="@/assets/img/ill/default-photo.svg" :alt="name" />
            </template>
          </figure>
          <div class="c-teacher-calendar__user-content">
            <h3 class="c-teacher-calendar__user-name">
              {{ modal_data.student_first_name }}
              {{ modal_data.student_last_name }}
            </h3>
            <button class="c-teacher-calendar__user-link">
              Перейти к занятию
            </button>
          </div>
        </template>
      </div>
    </template>
    <vue-slider
      :tooltip="'none'"
      class="c-reserved-teacher-time"
      :process-style="{ background: '#39B100' }"
      :step-active-style="{ background: 'transparent' }"
      :stepStyle="{ background: 'transparent' }"
      :dot-style="{ display: 'none' }"
      :value="timeEnd"
      :data="items"
      :marks="true"
    />
  </div>
</template>

<script>
import "vue-slider-component/theme/default.css";
import VueSlider from "vue-slider-component";

export default {
  name: "ReservedTeacherTime",
  components: {
    VueSlider
  },
  props: {
    modal_data: {
      type: Object
    },
    minutesFrom: {
      type: Number,
      required: true
    },
    minutesTo: {
      type: Number,
      required: true
    },
    hour: {
      type: Number,
      required: true
    },
    id: {
      type: Number
    },
  },
  computed: {
    items() {
      const minutes = [];
      const hour = this.hour < 10 ? `0${this.hour}` : this.hour;

      for (let j = this.minutesFrom; j < this.minutesTo; j += 5) {
        const minute = j < 10 ? `0${j}` : j;

        minutes.push(`${hour}:${minute}`);
      }

      return minutes;
    },
    timeEnd() {
      return this.items.slice(-1)[0];
    },
    isUserVisible() {
      return this.minutesTo === 60;
    },
    componentStyle() {
      const grid_column = `${this.minutesFrom === 0 ? 1 : this.minutesFrom} / ${
        this.minutesTo
      }`;

      return `grid-column: ${grid_column};`;
    },
    classNameForSmall() {
      const margin_class =
        this.minutesTo < 60 ? `c-teacher-calendar__timeline_small` : "";
      return margin_class;
    }
  },
  methods: {
    mouserOverEvent() {
      this.$emit("hover", this.id);
    },
    showModal() {
      console.log(this.modal_data)
      this.$store.dispatch('show_reservation_lesson_modal', {
        data: {...this.modal_data},
        modal_name: 'new-teacher-lesson'
      })
    },
  }
};
</script>

<style lang="scss">
.c-reserved-teacher-time {
  pointer-events: none;
}
</style>
