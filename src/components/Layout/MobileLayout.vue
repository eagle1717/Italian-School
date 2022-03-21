<template>
  <div class="c-mobile-layout">
    <template v-if="!isEmptylayout">
      <MobileNavigation @showNav="showNavigation" />
      <!-- <NavBar
        class="mobile-navbar"
        @showNav="showNavigation"
        :isHidden="showNavbar"
      /> -->
      <NavBar2
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
  </div>
</template>

<script>
import NavBar from "@/components/Navbars/NavBar.vue";
import NavBar2 from "@/components/Navbars/NavBar2.vue";
import MobileNavigation from "@/components/Navbars/MobileNavigation";
import { mapState } from "vuex";
import DefaultNavBar from "@/components/Navbars/DefaultNavBar";
export default {
  name: "MobileLayout",
  components: {
    DefaultNavBar,
    MobileNavigation,
    NavBar,
    NavBar2,
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
