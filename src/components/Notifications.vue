<template>
  <div class="c-notifications-alert">
    <ul>
      <li
        class="c-notification-alert__list"
        :key="notification.uuid"
        v-for="notification in notificationAlerts"
      >
        <div class="c-notification-alert__holder">
          <img :src="getTypeImg(notification.type)" alt="icon notification" />
          <span>{{ notification.text }}</span>
        </div>
        <div class="c-notification-alert__holder">
          <button
            class="c-notification-alert__close"
            @click="remove_notification(notification.uuid)"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="10.5"
                fill="#FBFBFB"
                stroke="#D8D8D8"
              />
              <path
                d="M7.85715 7.85693L14.1429 14.1426"
                stroke="#4B4B4B"
                stroke-linecap="round"
              />
              <path
                d="M14.1429 7.85693L7.85714 14.1426"
                stroke="#4B4B4B"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notifications",
  watch: {
    notificationAlerts(notifications) {
      for (const notification of notifications) {
        setTimeout(() => {
          this.$store.dispatch(
            "notifications/remove_notification",
            notification.uuid
          );
        }, notification.delay * 1000);
      }
    }
  },
  computed: {
    ...mapGetters("notifications", ["notificationAlerts"])
  },
  methods: {
    getTypeImg(type) {
      switch (type) {
        case "success":
          return "/img/ill/notifications/alert-great.svg";
        case "warning":
          return "/img/ill/notifications/alert-simple-chat.svg";
        case "danger":
          return "/img/ill/notifications/alert-danger.svg";
        default:
          throw Error("Not found type");
      }
    },
    remove_notification(uuid) {
      this.$store.dispatch("notifications/remove_notification", uuid);
    }
  }
};
</script>

<style lang="scss">
.notification-enter-active,
.notification-leave-active {
  transition: transform 0.5s ease;
  transform: translateY(0);
}
.notification-enter,
.notification-leave-to {
  transform: translateY(100%);
}
.emppty-layout-notifer {
  .c-notification-alert {
    &__list {
      width: 100vw;
    }
  }
}
.c-notification-alert {
  &__list {
    position: fixed;
    bottom: 0;
    border-top: 1px solid $gray;
    background-color: $white;
    z-index: 999999;
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    width: calc(100vw - 393px);
    padding: 20px;
  }

  &__holder {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    @extend %text-middle;
    color: $gray;
  }

  &__holder img {
    margin-right: 21px;
  }

  &__close {
    background-color: $dark_white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
  }
}
@include bp(1100px) {
  .c-notification-alert {
    &__list {
      width: 100%;
    }
  }
}
</style>
