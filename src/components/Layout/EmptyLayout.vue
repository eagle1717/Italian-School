<template>
  <div class="c-empty-layout">
    <DefaultNavBar />
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
    <Notifications class="emppty-layout-notifer" />
  </div>
</template>

<script>
import DefaultNavBar from "@/components/Navbars/DefaultNavBar";
import { mapState } from "vuex";
import Notifications from "../Notifications";
export default {
  name: "EmptyLayout",
  components: { Notifications, DefaultNavBar },
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
