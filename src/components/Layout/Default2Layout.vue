<template>
  <main
    class="c-default-layout app"
    :class="{ 'overflow-hidden': show_overlay }"
  >
    <!--    <template v-if="!isNotAuthenticated">-->
    <NavBar2 />
    <!--    </template>-->
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
  </main>
</template>

<script>
import NavBar2 from "@/components/Navbars/NavBar2.vue";
import { mapState } from "vuex";

export default {
  name: "Default2Layout",
  components: {
    NavBar2
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