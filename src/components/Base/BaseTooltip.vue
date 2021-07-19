<template>
  <div class="tooltip">
    <div class="tooltiptext">
      <img
        v-if="lesson && lesson.teacher && lesson.teacher.photo"
        :src="lesson.teacher.photo_path"
        alt=""
      />
      <img v-else src="@/assets/img/ill/default-photo.svg" alt="" />
      <div class="info">
        <span
          >{{ lesson && lesson.teacher && lesson.teacher.first_name }}
          {{ lesson && lesson.teacher && lesson.teacher.last_name }}</span
        >
        <span>
          <img src="@/assets/img/time.svg" alt="" />
          <span
            >{{ lesson && lesson.teacher && lesson.full_from }} -
            {{ lesson && lesson.teacher && lesson.full_to }}</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    lesson: Object
  }
};
</script>

<style lang="scss">
.tooltip {
  // position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #4b4b4b;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;
  border: 1px solid #4b4b4b;
  font-family: "Circe-Regular", sans-serif;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: -125px;
  right: -50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 19px 19px 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 240px;
}
.tooltip .tooltiptext img {
  width: 42px;
  height: 42px;
  margin-right: 12px;
}
.tooltip .tooltiptext .info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.tooltip .tooltiptext .info span:first-of-type {
  margin-bottom: 5px;
}
.tooltip .tooltiptext .info span {
  font-size: 14px;
}
.tooltip .tooltiptext .info span img {
  width: 15px;
  height: 15px;
  margin-right: 6px;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
