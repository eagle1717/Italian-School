<template>
  <div class="c-modal">
    <div class="mobile-nav__burger">
      <button class="mobile-nav__btn active" @click="hideModal">
        <img src="@/assets/close3.svg" />
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BaseModal",
  methods: {
    ...mapMutations(["HIDE_SHOW_OVERLAY"]),
    hideModal() {
      this.$store.dispatch("close_modal_and_clear_data");
    }
  },
  mounted() {
    this.$store.dispatch("hide_overlay", true);
  },
  destroyed() {
    this.$store.dispatch("hide_overlay", false);
  }
};
</script>

<style lang="scss">
.transform-enter-active,
.transform-leave-active {
  transition: transform 0.5s ease;
  transform: translateX(0);
}
.transform-enter,
.transform-leave-to {
  transform: translateX(100%);
}
.c-modal {
  position: fixed;
  height: 100vh;
  width: 50vw;
  top: 0;
  right: 0;
  z-index: 9999999999;
  background: $white;
  overflow-y: scroll;
  .mobile-nav__btn {
    width: 13px;
    height: 13px;
  }
  @extend %regular;
  .mobile-nav__burger {
    position: absolute;
    top: 46px;
    left: 61px;
  }
}
.c-modal {
  .mobile-nav__burger {
    top: 43px;
  }
}
@include bp(766px) {
  .c-modal {
    width: 100vw !important;
  }
}
</style>
