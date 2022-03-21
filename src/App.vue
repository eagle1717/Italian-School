<template>
  <component :is="layout" :class="{ 'overflow-hidden': activeModal }">
    <router-view />
    <transition-group name="transform" class="transform2">
      <FaqModal v-if="activeModal === 'faq'" :key="'faq'" />
      <Video v-if="activeModal === 'video'" :key="'video'" />
      <MyLessons
        v-if="activeModal === 'lessons-modal' && modalData"
        :key="'lessons-modal'"
      />
      <Homework v-if="activeModal === 'homework'" :key="'homework'" />
      <StudentProfile
        :key="'student-profile'"
        v-if="activeModal === 'student-profile'"
      />
      <LessonWithStudent
        :key="'lesson-with-student'"
        v-if="activeModal === 'lesson-with-student'"
      />
      <SpecialLessonModal
        v-if="activeModal === 'special-lesson'"
        :key="'special-lesson'"
      />
      <GroupModal v-if="activeModal === 'group-modal'" :key="'group-modal'" />
      <CertificateModal
        v-if="activeModal === 'certificate'"
        :key="'certificate'"
      />
      <ReservationLessonModal
        v-if="activeModal === 'reservation-lesson' && modalData"
        :curator="modalData.curator"
        :reserved_times="modalData.reserved"
        :day="modalData.day"
        :key="'reservation-lesson'"
      />
      <HelpChatModal
        v-if="activeModal === 'chat-modal' && modalData"
        :messages="modalData.messages"
        :first_message="modalData.first_message"
        :title="modalData.title"
        :ticketId="modalData.id"
        :key="'chat-modal'"
      />
    </transition-group>
    <LoadingPreloader :isVisible="loading" />
  </component>
</template>

<script>
import { mapState } from "vuex";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Default2Layout from "@/components/Layout/Default2Layout";
import EmptyLayout from "@/components/Layout/EmptyLayout";
import MobileLayout from "@/components/Layout/MobileLayout";
import NoLayout from "@/components/Layout/NoLayout";
import FaqModal from "@/components/Modals/FaqModal";
import SpecialLessonModal from "@/components/Modals/SpecialLessonModal";
import CertificateModal from "@/components/Modals/CertificateModal";
import Video from "@/components/Modals/Video";
import MyLessons from "@/components/Modals/MyLessons";
import Homework from "@/components/Modals/Homework";
import ReservationLessonModal from "@/components/Modals/ReservationLessonModal";
import LoadingPreloader from "./components/LoadingPreloader";
import HelpChatModal from "./components/StudentArea/HelpPage/HelpChatModal";
import GroupModal from "@/views/StudentArea/GroupPage/GroupModal";
import StudentProfile from "@/views/TeacherArea/StudentProfile";
import LessonWithStudent from "@/views/TeacherArea/LessonWithStudent";
export default {
  components: {
    HelpChatModal,
    LoadingPreloader,
    Homework,
    MyLessons,
    FaqModal,
    DefaultLayout,
    EmptyLayout,
    NoLayout,
    MobileLayout,
    SpecialLessonModal,
    CertificateModal,
    Video,
    ReservationLessonModal,
    GroupModal,
    StudentProfile,
    LessonWithStudent,
    Default2Layout
  },
  computed: {
    ...mapState(["activeModal", "loading", "auth", "modalData"]),
    layout() {
      const { meta } = this.$route;
      const layout = this.checkAdapt() ? "Mobile" : meta.layout || "Default";

      return `${layout}Layout`;
    }
  },
  data() {
    return {
      select_val: "default",
      width: window.innerWidth
    };
  },
  methods: {
    checkAdapt() {
      return this.width < 1310;
    },
    onResize() {
      this.width = window.innerWidth;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
.c-default-layout.app {
  padding-left: 398px;
  @media screen and (min-width: 1310px) {
    padding-left: 398px;
  }
  @media screen and (max-width: 1310px) {
    padding-left: 0px;
  }
}
.router-link-active,
.router-link-exact-active {
  span {
    color: $green !important;
  }
}
.c-tooltip {
  position: fixed;
  border: 1px solid $gray;
  width: max-content;
  background: #fff;
  padding: 1px 5px;
  z-index: 20;
  @extend %text-small;

  &::before {
    content: "";
    position: absolute;
    background: #fff;
    left: 50%;
    bottom: -4px;
    width: 7px;
    height: 7px;
    transform: rotate(45deg) translateX(-50%);
    -webkit-transform: rotate(45deg);
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-radius: 31%;
  }
}
body {
  font-family: "Circe-Regular";
}
button {
  font-family: "Circe-Bold";
}
.margin-from-close-button {
  margin-left: 32px !important;
}
.faq {
  @extend %simple-btn-red-border;
  width: 147px !important;
  text-align: center;
  height: 35px;
}
.second-special-modal {
  padding-top: 127px;
}
.text-field-input {
  .c-input__wrap-field {
    padding-right: 40px;
  }
}
button {
  font-weight: 700 !important;
}
.msg {
  @extend %simple-btn-red-border;
  padding: 0px;
  width: 179px !important;
}
.c-help__message-btn {
  @extend %btn-border-danger;
  &:hover {
    background-color: $red;
    color: $white;
    padding: 0px;
  }
}
.overflow-hidden {
  overflow: hidden;
  height: 100vh;
}
.c-profile__field {
  border-radius: 2px;
  background-color: $white;
}
#change-role {
  position: fixed;
  top: 10px;
  right: 10px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: $black, $alpha: 0.2);
  z-index: 100000;
  opacity: 0;
  transition: all 0.5s ease;
  @extend %evt-none;
  &.show {
    opacity: 1;
    @extend %evt-all;
    cursor: pointer;
  }
}
@include bp(1360px) {
  .app {
    padding-left: 338px;
  }
}
</style>
<style>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
</style>
<style lang="scss">
.open {
  svg {
    color: $green !important;
  }
}
.flex {
  display: flex !important;
}
.justify-between {
  justify-content: space-between !important;
}
body {
  overflow: visible !important;
}
</style>
<style lang="scss">
// animations
.make-transitions {
  //
  position: relative;
  max-height: 500000px;
  background-color: #f7f7f7;
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  transition: max-height 0.5s ease;
  .teacher__itm-left {
    width: 240.34px;
  }
  //
  &.hide {
    transition: max-height 0.5s ease;
  }
  .teacher__itm-middle,
  .teacher2__itm-middle {
    transition: max-height 0.5s ease;
    overflow: hidden;
  }
  &.hide {
    .teacher__arrow,
    .teacher2__arrow {
      transform: rotate(0deg);
      transition: transform 0.5s ease;
    }
  }
  .teacher__arrow,
  .teacher2__arrow {
    margin-right: 69px;
    transform: rotate(180deg);
    transition: transform 0.5s ease;
    @media screen and (max-width: 766px) {
      margin-right: 0px;
    }
    .icon {
      width: 16px;
      height: 10px;
      fill: transparent;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: $green;
      color: $green;
      transition: all 0.5s ease;
    }
  }
}
.make-transitions.hide {
  .icon {
    stroke: #251c1c !important;
    transition: transform 0.5s ease;
  }
  max-height: 144px;
  @media screen and (max-width: 766px) {
    max-height: 90px;
  }
  .teacher__text,
  .teacher2__text {
    max-height: 60px;
    transition: max-height 0.5s ease;
    overflow: hidden;
    p:nth-child(even) {
      margin-top: 20px;
    }
  }
}
</style>
<style lang="scss">
// media queries
.c-login-modal__content,
.c-register-modal__content,
.c-reset-password__content,
.v-pass-recovery__form {
  @extend %df;
  @extend %fdc;
  @extend %jcc;
  @extend %h100;
  max-width: 311px;
  width: 100%;
  .c-input__wrap-icon_email {
    width: 24px;
  }
  .c-input,
  .c-input-password {
    border-radius: 2px;
  }
  @media screen and (max-width: $mobile) {
    max-width: 231px !important;
    .c-login-modal__title,
    .c-register-modal__title,
    .c-reset-modal__title,
    .v-pass-recovery__title {
      font-size: 22px;
    }
    .c-input,
    .c-input-password {
      height: 35px;
      padding-left: 13px;
      input {
        font-size: 12px;
      }
    }
    .c-input__wrap-icon_email {
      width: 13px;
      height: 11px;
    }
    .c-input__wrap-icon_user {
      width: 12.78px;
      height: 13.5px;
      vertical-align: middle;
      display: flex;
    }
    .c-input__wrap-field {
      padding-right: 20px;
    }
    .c-input-password__field {
      padding-right: 35px;
    }
    .c-input-password__field-show-icon {
      position: absolute;
      right: 14px;
      vertical-align: middle;
      display: flex;
      img {
        width: 14px;
        height: min-content;
      }
    }
    .c-input {
      padding-left: 12px;
    }
    .c-input-password {
      padding-left: 11.5px;
    }
    .icon.c-input-password__field-icon {
      width: 11.47px;
      height: 15px;
    }
    .c-login-modal__error,
    .c-input__notifer,
    .c-input-password__notifer {
      font-size: 10px;
    }
    .c-register-modal__subtitle {
      font-size: 12px;
    }
    button {
      padding: 9.5px 0px;
      font-size: 12px;
      margin-top: 22px;
    }
    .c-login-modal__forgot-password {
      font-size: 14px;
    }
  }
}
</style>
