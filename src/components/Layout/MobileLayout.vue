<template>
  <div class="c-mobile-layout">
    <template v-if="!isEmptylayout">
      <MobileNavigation @showNav="showNavigation" />
      <NavBar
        class="mobile-navbar"
        @showNav="showNavigation"
        :isHidden="showNavbar"
      />
    </template>
    <template v-else>
      <DefaultNavBar />
    </template>
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
    <Notifications />
  </div>
</template>

<script>
import NavBar from "@/components/Navbars/NavBar.vue";
import MobileNavigation from "@/components/Navbars/MobileNavigation";
import { mapState } from "vuex";
import Notifications from "../Notifications";
import DefaultNavBar from "@/components/Navbars/DefaultNavBar";
export default {
  name: "MobileLayout",
  components: {
    DefaultNavBar,
    Notifications,
    MobileNavigation,
    NavBar
  },
  data() {
    return {
      showNavbar: false
    };
  },
  computed: {
    ...mapState(["show_overlay"]),
    isEmptylayout() {
      const { meta } = this.$route;

      return meta.layout && meta.layout === "Empty";
    }
  },
  methods: {
    // ...mapMutations(['HIDE_SHOW_OVERLAY']),
    hide_overlay() {
      this.showNavbar = !this.showNavbar;
      this.$store.dispatch("hide_show_overlay", !this.show_overlay);
    },
    showNavigation() {
      this.showNavbar = !this.showNavbar;
      this.$store.dispatch("hide_show_overlay", !this.show_overlay);
    }
  }
};
</script>

<style lang="scss" scoped></style>
