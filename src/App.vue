<template>
  <component :is="layout" :class="{ 'overflow-hidden': activeModal }">
    <router-view />
    <transition-group name="transform" class="transform2">
      <FaqModal v-if="activeModal === 'faq'" :key="'faq'" />
      <Video v-if="activeModal === 'video'" :key="'video'" />
      <MyLessons
        v-if="activeModal === 'lessons-modal' && modalData"
        :key="'lessons-modal'"
        :date="modalData.date"
      />
      <Homework v-if="activeModal === 'homework'" :key="'homework'" />
      <!-- <StudentProfile :key="'StudentProfile'" /> -->
      <!-- <LessonWithStudent :key="'LessonWithStudent'" /> -->
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
import { mapState, mapMutations } from "vuex";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import EmptyLayout from "@/components/Layout/EmptyLayout";
import MobileLayout from "@/components/Layout/MobileLayout";
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
import NoContent from "@/components/Layout/NoContent";
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
    MobileLayout,
    SpecialLessonModal,
    CertificateModal,
    Video,
    ReservationLessonModal,
    GroupModal,
    NoContent,
    StudentProfile,
    LessonWithStudent
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
      select_val: "default"
    };
  },
  methods: {
    ...mapMutations(["CHANGE_ROLE"]),
    checkAdapt() {
      return window.innerWidth < 1100;
    }
  }
};
</script>

<style lang="scss">
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
  font-family: Circe !important;
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
.app {
  // padding-left: 398px;
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
  z-index: 100;
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
@include bp(1100px) {
  %container {
    max-width: 750px;
    margin: 0 auto;
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
