<template>
  <div class="c-empty-layout">
    <DefaultNavBar />
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
  </div>
</template>

<script>
import DefaultNavBar from "@/components/Navbars/DefaultNavBar";
import { mapState } from "vuex";
export default {
  name: "EmptyLayout",
  components: { DefaultNavBar },
  computed: {
    ...mapState(["show_overlay"])
  },
  methods: {
    hide_overlay() {
      this.$store.dispatch("hide_show_overlay", !this.show_overlay);
    }
  }
};
</script>
