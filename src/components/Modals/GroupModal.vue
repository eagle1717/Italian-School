<template>
  <BaseModal class="c-video-modal">
    <div class="c-video">
      <div class="c-video__container">
        <div class="c-video__content">
          <div class="c-video__header">
            <h2 class="c-video__header-teacher">Курс преподавателя</h2>
          </div>
          <div class="curator-about">
            <div class="left">
              <img src="/img/ill/user-group.png" alt="" />
            </div>
            <div class="right">
              <h3 class="name">
                {{ modalInfo.teacher.first_name }}
                {{ modalInfo.teacher.last_name }}
              </h3>
              <p class="about">
                Exercitation officia ad officia sit amet laboris Lorem Lorem.
                Veniam sunt est eu voluptate ut officia proident pariatur sint
                amet in cupidatat ea cillum. Irure fugiat magna deser...
              </p>
            </div>
          </div>
          <div class="main-curator">
            <p>Название курса</p>
            <h3>{{ modalInfo.title }}</h3>
          </div>
          <div v-html="modalInfo.description"></div>
          <div class="about-lesson">
            <div class="left">
              <p class="price-text">Стоимость курса</p>
              <p class="price">{{ modalInfo.price }} €</p>
            </div>
            <div class="right">
              <a href="#" @click.prevent="makeCheckout"
                >Присоединится к группе</a
              >
            </div>
          </div>
          <!-- <div class="schedule-block">
            <p>График занятий</p>
            <div class="times">
              <span> Вторник 10:00 - 11:00 </span>
              <span> Вторник 10:00 - 11:00 </span>
              <span> Вторник 10:00 - 11:00 </span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { loadStripe } from "@stripe/stripe-js";
export default {
  name: "Group",
  data() {
    return {
      video: null,
      desc: null
    };
  },
  computed: {
    ...mapGetters(["modalInfo"])
  },
  methods: {
    ...mapActions("user", ["makeCheckoutForGroup"]),
    async makeCheckout() {
      const { publicKey, sessionId } = await this.makeCheckoutForGroup({
        groupId: this.modalInfo.id
      });
      const stripe = await loadStripe(publicKey);
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.$root.$on("group-modal", ({ video, desc }) => {
      this.video = video;
      this.desc = desc;
    });
    console.log(this.modalInfo);
  }
};
</script>

<style lang="scss">
.about-lesson {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-content: center;

  .price-text {
    color: #4b4b4b;
    font-size: 16px;
    line-height: 27px;
  }
  .price {
    color: #39b100;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    @extend %text-middle;
  }
  .right {
    line-height: 50px;
  }
  .right a {
    background: #39b100;
    padding: 14px 20px;
    color: #fff;
    font-size: 16px;
    line-height: 21px;
    @extend %text-middle;
  }
}
.curator-about {
  margin-top: 30px;
  border-radius: 2px;
  background: #f7f7f7;
  padding: 28px 30px;
  display: flex;
  justify-content: space-between;

  .left {
    img {
      display: block;
      margin-right: 17px;
      width: 90px;
      height: 90px;
    }
  }
  .right {
    width: 450px;
    h3 {
      @extend %text-middle;
      font-size: 30px;
    }
    .about {
      font-size: 14px;
      @extend %text-middle;
      color: #4b4b4b;
    }
  }
}
.main-curator {
  margin-top: 30px;
  margin-bottom: 50px;

  p {
    font-size: 16px;
    @extend %text-middle;
  }

  h3 {
    font-size: 30px;
    @extend %text-middle;
    margin-top: 10px;
  }
}
.c-video-modal {
  overflow-y: scroll;
}
.c-video {
  margin-bottom: 30px;
  &__container {
    @extend %m0a;
    padding-left: 0px;
  }

  &__curator {
    margin-top: 31px;
  }

  &__header {
    @extend %df;
    @extend %jcfs;

    width: 500px;

    &-close {
      margin-right: 18px;
    }

    &-teacher {
      @extend %h3-title-bold;
      margin-left: 15px;
      color: $gray;
    }
  }

  &__content {
    &-holder {
      &-title {
        margin: 60px 0 23px 0;
        @extend %h3-title-bold;
        color: $gray;
      }
      &-about {
        color: $gray;
        @extend %text-small;
      }
      &-description {
        color: $gray;
        @extend %text-small;
        margin-top: 20px;
      }
    }
  }
}
@include bp(1100px) {
  .c-video {
    &__container {
      max-width: 750px;
      padding-left: 0;
      padding-top: 50px;
    }
  }
}
@include bp(766px) {
  .c-video {
    &-modal {
      overflow-x: scroll;
    }
    max-width: 320px;
    padding-left: 0;
    margin: 0 auto;
    padding-bottom: 50px;
    &__header {
      width: 100%;
    }
    iframe {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
