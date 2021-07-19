<template>
  <main
    class="c-default-layout app"
    :class="{ 'overflow-hidden': show_overlay }"
  >
    <NavBar />
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
  </main>
</template>

<script>
import NavBar from "@/components/Navbars/NavBar.vue";
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  components: {
    NavBar
  },
  computed: {
    ...mapState(["show_overlay"])
    // ...mapGetters('auth', ['isNotAuthenticated'])
  },
  methods: {
    hide_overlay() {
      this.$store.dispatch("hide_show_overlay", !this.show_overlay);
    }
  }
};
</script>
<style lang="scss">
@include bp(1310px) {
  .c-default-layout {
    nav {
      display: none;
    }
  }
  .c-default-layout.app {
    padding-left: 0px;
  }
}
</style>
