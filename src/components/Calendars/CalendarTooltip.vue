<template>
  <div class="c-calendar-tooltip">
    <div class="c-calendar-tooltip__content">
      <div
        v-for="tech of teachers"
        class="c-calendar-tooltip__teacher"
        :key="tech.id"
      >
        <figure class="c-calendar-tooltip__tech-img">
          <img :src="tech.photo" :alt="tech.name" />
        </figure>
        <div class="c-calendar-tooltip__tech-content">
          <h3 class="c-calendar-tooltip__tech-name">
            {{ `${tech.name} ${tech.surname}` }}
          </h3>
          <div class="c-calendar-tooltip__lesson-time">
            <figure class="c-calendar-tooltip__tach-icon">
              <img src="/img/ill/time.svg" alt="Time icon" />
            </figure>
            <p class="c-calendar-tooltip__tech-start-time">
              {{ tech.lessonTimeStart }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarTooltip",
  props: {
    teachers: {
      type: Array
    }
  }
  // data() {
  //   return {

  //   }
  // }
};
</script>

<style lang="scss">
.c-calendar-tooltip {
  @extend .c-tooltip;
  opacity: 1;
  position: absolute;
  top: rem(-152);
  width: rem(239);
  left: 50%;
  margin-left: -122.5px;
  padding: rem(19) rem(29) rem(28) rem(19);
  height: rem(147);
  // @extend %evt-none;
  opacity: 0;
  transition: all 0.5s ease;

  // .c-calendar-tooltip__content

  &__content {
    height: rem(117);
    overflow-x: scroll;
    @extend %reset-scroll-bar;
  }

  // .c-calendar-tooltip__teacher

  &__teacher {
    @extend %df;
    @extend %aic;
    margin-bottom: rem(16);
  }

  // .c-calendar-tooltip__tech-img

  &__tech-img {
    width: rem(42);
    height: rem(42);
  }

  // .c-calendar-tooltip__tech-content

  &__tech-content {
    margin-left: rem(12);
  }

  // .c-calendar-tooltip__tech-name

  &__tech-name {
    @extend %text-small-big-line-height;
    color: $gray;
    margin-bottom: rem(2);
  }

  // .c-calendar-tooltip__lesson-time

  &__lesson-time {
    @extend %df;
    // @extend %aic;
  }

  // .c-calendar-tooltip__tach-icon

  &__tach-icon {
    width: rem(15);
    height: rem(15);
    margin-right: rem(6);
  }

  // .c-calendar-tooltip__tech-start-time

  &__tech-start-time {
    @extend %text-small-big-line-height;
    line-height: auto;
    color: $black;
  }
}
</style>
