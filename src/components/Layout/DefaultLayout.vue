<template>
  <main
    class="c-default-layout app"
    :class="{ 'overflow-hidden': show_overlay }"
  >
    <!--    <template v-if="!isNotAuthenticated">-->
    <NavBar />
    <!--    </template>-->
    <slot></slot>
    <div
      class="overlay"
      :class="{ show: show_overlay }"
      @click="hide_overlay"
    ></div>
    <Notifications />
  </main>
</template>

<script>
import NavBar from "@/components/Navbars/NavBar.vue";
import { mapState } from "vuex";
import Notifications from "@/components/Notifications.vue";

export default {
  name: "DefaultLayout",
  components: {
    Notifications,
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