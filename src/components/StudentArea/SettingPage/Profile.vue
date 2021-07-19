<template>
  <div class="c-profile">
    <div class="c-profile__content flex">
      <div class="c-profile__wrapper-avatar">
        <div class="c-profile__avatar-holder">
          <img
            class="c-profile__wrapper-avatar-item"
            :src="default_user_photo"
            alt="user-photo"
          />
          <label class="c-profile__wrapper-upload">
            <img
              class="c-profile__wrapper-upload-picture"
              src="/img/icons/upload-photo.svg"
              alt="upload"
            />
            <span class="c-profile__wrapper-upload-title">Новое фото</span>
            <input
              type="file"
              ref="input_file"
              class="c-profile__file"
              @change="uploadPhoto($event)"
            />
          </label>
        </div>
      </div>
      <div class="flex main-info-container">
        <div class="c-profile__wrapper-credentials">
          <BaseInputText
            class="c-profile__field"
            placeholder="Имя"
            v-model="first_name"
          />
          <BaseInputText
            class="c-profile__field"
            placeholder="Фамилия"
            v-model="last_name"
          />
        </div>
        <div class="c-profile__wrapper-data right-inputs">
          <BasePhoneInput class="c-profile__field" v-model="phone" />
          <div class="c-profile__socials">
            <div class="c-profile__holder-social">
              <a href="https://instagram.com">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="c-profile__social"
                  :class="{ active: is_insta }"
                  @click="setSocial('insta')"
                >
                  <path
                    d="M7.50852 3.94009C5.57237 3.94009 3.96814 5.51666 3.96814 7.48047C3.96814 9.44427 5.54471 11.0208 7.50852 11.0208C9.47232 11.0208 11.0489 9.41661 11.0489 7.48047C11.0489 5.54432 9.44466 3.94009 7.50852 3.94009ZM7.50852 9.74852C6.26385 9.74852 5.24046 8.72513 5.24046 7.48047C5.24046 6.2358 6.26385 5.21241 7.50852 5.21241C8.75318 5.21241 9.77658 6.2358 9.77658 7.48047C9.77658 8.72513 8.75318 9.74852 7.50852 9.74852Z"
                    fill="#4B4B4B"
                  />
                  <path
                    d="M11.1893 4.65926C11.6323 4.65926 11.9914 4.30014 11.9914 3.85714C11.9914 3.41414 11.6323 3.05502 11.1893 3.05502C10.7463 3.05502 10.3872 3.41414 10.3872 3.85714C10.3872 4.30014 10.7463 4.65926 11.1893 4.65926Z"
                    fill="#4B4B4B"
                  />
                  <path
                    d="M13.2615 1.78295C12.5424 1.03615 11.519 0.648926 10.3573 0.648926H4.65951C2.25316 0.648926 0.648926 2.25316 0.648926 4.65951V10.3297C0.648926 11.519 1.03615 12.5424 1.81061 13.2892C2.55741 14.0083 3.55314 14.3679 4.68717 14.3679H10.3296C11.519 14.3679 12.5147 13.9807 13.2339 13.2892C13.9807 12.57 14.3679 11.5467 14.3679 10.3573V4.65951C14.3679 3.49783 13.9807 2.50209 13.2615 1.78295ZM13.1509 10.3573C13.1509 11.2147 12.8466 11.9062 12.3488 12.3764C11.8509 12.8466 11.1594 13.0956 10.3296 13.0956H4.68717C3.85739 13.0956 3.16591 12.8466 2.66805 12.3764C2.17018 11.8786 1.92125 11.1871 1.92125 10.3297V4.65951C1.92125 3.82974 2.17018 3.13826 2.66805 2.64039C3.13825 2.17018 3.85739 1.92125 4.68717 1.92125H10.385C11.2147 1.92125 11.9062 2.17018 12.4041 2.66805C12.8743 3.16591 13.1509 3.85739 13.1509 4.65951V10.3573Z"
                    fill="#4B4B4B"
                  />
                </svg>
              </a>
              <template>
                <div class="c-profile__close">
                  <button
                    v-tooltip="{ text: 'Удалить акаунт' }"
                    class="c-profile__close-btn"
                    @click="deleteSocial('insta')"
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.21436 1.21436L7.78578 7.78578"
                        stroke="#4B4B4B"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.78564 1.21436L1.21422 7.78578"
                        stroke="#4B4B4B"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </template>
            </div>
            <div class="c-profile__holder-social">
              <a href="https://facebook.com">
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="c-profile__social"
                  :class="{ active: is_fb }"
                  @click="setSocial('fb')"
                >
                  <path
                    d="M5.57677 14.8665V8.65317H7.67904L8.20461 6.06427H5.57677V5.02871C5.57677 3.99315 6.10339 3.47537 7.15347 3.47537H8.20461V0.886475C7.67904 0.886475 7.02734 0.886475 6.10234 0.886475C4.17089 0.886475 2.94894 2.3782 2.94894 4.51093V6.06427H0.84668V8.65317H2.94894V14.8665H5.57677Z"
                    fill="#4B4B4B"
                  />
                </svg>
              </a>

              <div class="c-profile__close">
                <button
                  v-tooltip="{ text: 'Удалить акаунт' }"
                  class="c-profile__close-btn"
                  @click="deleteSocial('fb')"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.21436 1.21436L7.78578 7.78578"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.78564 1.21436L1.21422 7.78578"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="c-profile__holder-social">
              <a href="https://vk.com">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="c-profile__social  fb-social"
                  :class="{ active: is_vk }"
                  @click="setSocial('vk')"
                >
                  <path
                    d="M10.6676 4.56543C10.4654 4.31005 10.5233 4.19643 10.6676 3.96815C10.6702 3.96555 12.3397 1.65878 12.5117 0.876475L12.5127 0.875954C12.5982 0.590865 12.5127 0.381348 12.0994 0.381348H10.7317C10.3836 0.381348 10.223 0.561157 10.137 0.762335C10.137 0.762335 9.44071 2.42909 8.45564 3.50951C8.1377 3.8217 7.99072 3.92177 7.81716 3.92177C7.73168 3.92177 7.59878 3.8217 7.59878 3.53661V0.875954C7.59878 0.534055 7.50131 0.381348 7.21309 0.381348H5.0626C4.84421 0.381348 4.71443 0.540831 4.71443 0.689369C4.71443 1.01355 5.20697 1.08808 5.25805 2.00015V3.9791C5.25805 4.41272 5.17935 4.49247 5.00474 4.49247C4.53983 4.49247 3.41142 2.81894 2.74271 0.903576C2.60772 0.53197 2.47586 0.381869 2.12509 0.381869H0.756926C0.366544 0.381869 0.287842 0.561678 0.287842 0.762856C0.287842 1.11831 0.752756 2.88565 2.4498 5.22056C3.58081 6.81435 5.17361 7.67796 6.62256 7.67796C7.49349 7.67796 7.59982 7.48616 7.59982 7.15625C7.59982 5.63334 7.52112 5.4895 7.95737 5.4895C8.15959 5.4895 8.50776 5.58956 9.32084 6.35831C10.2501 7.26987 10.4029 7.67796 10.923 7.67796H12.2907C12.6805 7.67796 12.8781 7.48616 12.7644 7.10778C12.5044 6.31193 10.7469 4.67488 10.6676 4.56543Z"
                    fill="#4B4B4B"
                  />
                </svg>
              </a>
              <div class="c-profile__close">
                <button
                  v-tooltip="{ text: 'Удалить акаунт' }"
                  class="c-profile__close-btn"
                  @click="deleteSocial('vk')"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.21436 1.21436L7.78578 7.78578"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.78564 1.21436L1.21422 7.78578"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <span class="c-profile__social-title your-socials"
              >Ваши соц. сети</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="main2-info-container">
      <div class="c-profile__title">
        <h2 class="c-profile__title-tag">Изменение пароля</h2>
      </div>
      <div class="c-profile__change flex">
        <div class="c-profile__change-password">
          <BaseInputPassword
            class="c-profile__field"
            placeholder="Старый пароль"
            v-model="old_password"
          />
          <BaseInputPassword
            class="c-profile__field newPassword"
            placeholder="Новый пароль"
            :showProgress="true"
            v-model="new_password"
            :error="error_password"
            :error_message="error_password_message"
          />
          <button class="c-profile__approve" @click="save">
            Сохранить изменения
          </button>
        </div>
        <div class="c-profile__email right-inputs">
          <BaseInputText
            class="c-profile__field c-profile__field_reg email-field"
            icon="email"
            placeholder="Почта"
            v-model="email"
            :error="error_email"
            :error_message="error_email_message"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { check_form_data } from "@/mixins/mixins.js";
import BasePhoneInput from "@/components/Base/BasePhoneInput";
export default {
  name: "Profile",
  components: { BasePhoneInput },
  mixins: [check_form_data],
  data() {
    return {
      sendingPhoto: null,
      first_name: null,
      last_name: null,
      phone: null,
      old_password: null,
      new_password: null,
      email: null,
      error_password: false,
      error_email: false,
      error_email_message: null,
      error_password_message: null,
      social_links: {},
      is_insta: false,
      is_fb: false,
      is_vk: false
    };
  },
  computed: {
    ...mapGetters("user", [
      "user_first_name",
      "user_last_name",
      "user_email",
      "user_photo"
    ]),
    links_soc() {
      return this.social_links;
    },
    default_user_photo() {
      return this.user_photo ? this.user_photo : "/img/ill/default-photo.svg";
    }
  },
  methods: {
    ...mapMutations(["ADD_NOTIFICATION", "SET_USER_PHOTO"]),
    save() {
      const SaveNewData = {};
      if (this.first_name) {
        if (this.check_name("first_name") && this.first_name.length > 0) {
          SaveNewData.first_name = this.first_name;
        } else {
          return;
        }
      }
      if (this.last_name) {
        if (this.check_name("last_name") && this.last_name.length > 0) {
          SaveNewData.last_name = this.last_name;
        } else {
          return;
        }
      }
      // Доделать проверки
      if (this.email) {
        if (this.check_email_field(this.email) && this.email.length > 0) {
          SaveNewData.email = this.email;
        } else {
          this.error_handler("error_email", {
            message_field: "error_email_message",
            message: "Некорректный email!"
          });
          return;
        }
      }

      if (this.old_password && this.new_password) {
        if (
          this.check_password_field(this.new_password) &&
          this.old_password.length > 0 &&
          this.new_password.length > 0
        ) {
          SaveNewData.old_password = this.old_password;
          SaveNewData.new_password = this.new_password;
        } else {
          this.error_handler("error_password", {
            message_field: "error_password_message",
            message: "Ненадежный пароль (Используйте символы A-z, 0-9)"
          });
          return;
        }
      }

      if (this.phone) {
        if (this.phone.code && this.phone.number) {
          SaveNewData.phone = this.phone.number;
          SaveNewData.country = this.phone.code;
        }
      }

      if (this.sendingPhoto) {
        SaveNewData.photo = this.sendingPhoto;
      }

      if (Object.keys(this.social_links).length > 0) {
        SaveNewData.social_links = this.social_links;
      }

      if (Object.keys(SaveNewData).length === 0) {
        return;
      }

      let formData = new FormData();

      for (let k in SaveNewData) {
        formData.append(k, SaveNewData[k]);
      }

      // console.log(formData.toString())

      this.$store.dispatch("user/update_user_data", formData).then(() => {});

      // this.ADD_NOTIFICATION({
      //   type: "success",
      //   text: "Изменения успешно сохранены"
      // });
    },
    uploadPhoto(event) {
      let file = event.target.files,
        f = file[0],
        self = this;
      this.sendingPhoto = f;
      if (!f.type.match("image.*")) {
        alert("Только картинки");
        return;
      }
      const output = document.querySelector(".c-profile__wrapper-avatar-item");
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src); // free memory
      };

      const reader = new FileReader();
      reader.onload = (function() {
        return function(e) {
          self.SET_USER_PHOTO(e.target.result);
          // return (self.default_user_photo = e.target.result);
        };
      })(f);
      reader.readAsDataURL(f);
    },
    setSocial(name) {
      this.social_links[`${name}`] = prompt(
        "Вставьте ссылку на ваш аккаунт!",
        ""
      );
      if (name === "insta") {
        this.is_insta = true;
      } else if (name === "fb") {
        this.is_fb = true;
      } else {
        this.is_vk = true;
      }
    },
    deleteSocial(name) {
      delete this.social_links[name];
      if (name === "insta") {
        this.is_insta = false;
      } else if (name === "fb") {
        this.is_fb = false;
      } else {
        this.is_vk = false;
      }
    }
  }
};
</script>

<style lang="scss">
.c-profile {
  background: #f7f7f7;
  padding: rem(25) rem(33);
  padding-bottom: 35px;
  display: grid;
  border-radius: 2px;
  max-width: 892px;;
  .c-input-password__field-icon {
    width: auto;
  }
  .c-profile__wrapper-credentials {
    svg {
      width: auto;
    }
  }
  .c-profile__email {
    svg {
      width: 17px;
      height: 14px;
    }
  }
  .c-input.c-profile__field,
  .c-input-password {
    padding-left: 23px;
    padding-right: 23px;
  }
  .c-profile__wrapper-credentials {
    .c-input.c-profile__field {
      padding-left: 0px;
      input {
        padding-left: 23px;
      }
    }
  }
  .c-input-password__field {
    padding-right: 23px;
  }
  .c-input__wrap-icon_email {
    width: 16px;
  }
  .email-field {
    .c-input__wrap-field {
      padding-left: 10px;
    }
  }
  .email-field {
    input {
      padding-left: 0px;
    }
  }
  .c-base-phone {
    padding-left: 16px;
  }
  .main-info-container {
    margin-left: 32px;
  }
  .main2-info-container {
    margin-left: auto;
    margin-right: auto;
  }
  .right-inputs {
    margin-left: 30px;
  }
  .c-input {
    width: 263px;
  }
  .newPassword {
    margin-top: 10px;
  }

  &__avatar-holder {
    position: relative;
    width: max-content;
  }

  &__wrapper {
    &-credentials {
      height: 110px;
    }

    &-avatar {
      position: relative;

      &:hover .c-profile__wrapper-upload {
        @extend %df;
      }

      &-item {
        width: 103px;
        height: 103px;
        border-radius: 50%;
        object-fit: contain;
      }
    }

    &-data {
      @extend %df;
      @extend %jcsb;
      @extend %fdc;
    }
  }

  &__change-password {
    grid-column-start: 2;
    width: 263px;
    .c-input-password__field-show-icon {
      position: absolute;
      right: 22.5px;
    }
  }
  &__field {
    margin-bottom: rem(10);
  }

  &__socials {
    @extend %df;
    @extend %jcfs;
    @extend %aic;
  }
  .c-profile__close-btn {
    display: none;
  }
  &__holder-social {
    position: relative;
    &:hover {
      .c-profile__close-btn {
        display: block !important;
      }
    }
  }
  &__social {
    border: 1px solid $gray;
    padding: 5px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.3s ease-in;
    &:hover {
      transition: all 0.3s ease-in;
      border-color: $green;
      path {
        fill: $green;
        transition: all 0.3s ease-in;
      }
    }
    &.active {
      border-color: $green;
    }

    &-title {
      @extend %text-middle;
    }
  }
  .your-socials {
    margin-left: 8px;
  }
  &__title {
    margin-top: 60px;

    &-tag {
      grid-column-start: 2;
      @extend %text-middle;
      margin-bottom: rem(17);
    }
  }

  &__approve {
    @extend %btn-all-green;
    width: 100%;
    margin-top: 30px;
    &:hover {
      @extend %btn-darkgreen;
    }
    &:focus {
      opacity: 0.5;
    }
    &:focus:hover {
      background-color: none !important;
    }
  }

  &__wrapper-upload {
    display: none;
    position: absolute;
    text-align: center;
    top: 49%;
    background: #251c1cb8;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 103px;
    height: 103px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    @extend %text-small;
    color: $white;

    &-picture {
      width: 22px;
      height: 18px;
    }

    &-title {
      display: block;
      width: max-content;
    }
  }
  &__close {
    position: absolute;
    top: -10px;
    right: 0;
    &:hover .c-profile__close-title {
      display: block;
    }
    &-btn {
      position: relative;
      background-color: $dark_white;
      border-radius: 50%;
      height: 23px;
      width: 23px;
      border: 1px solid #d8d8d8;
      @extend %text-small;
      svg {
        margin: auto;
      }
    }
    &-title {
      display: none;
      border: 1px solid $gray;
      position: absolute;
      top: -34px;
      width: 130px;
      background: #fff;
      left: -58px;
      padding: 5px 9px;
    }
    &-title::after,
    .c-profile__close-title::before {
      content: "";
      position: absolute;
      background: #fff;
      left: 50%;
      bottom: -4px;
      width: 7px;
      height: 7px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      border-bottom: 1px solid;
      border-right: 1px solid;
      border-radius: 31%;
    }
    &-title::before {
      z-index: 1;
      box-shadow: none;
    }
  }

  &__file {
    display: none;
  }
}
@include bp(1310px) {
  .c-profile {
    &__field {
      width: 263px;
      &.c-input-password {
        padding-right: 10px;
      }
    }
    &__change-password {
      width: 290px;
    }
    &__approve {
      width: 262px;
    }
  }
}
@include bp(766px) {
  .c-profile {
    padding: 33px;
    padding-bottom: 82px;
    display: block;
    grid-template-columns: none;
    &__content,
    &__title,
    &__change {
      display: block;
      width: 100%;
      grid-template-columns: none;
    }
    &__change-password {
      width: 100%;
    }
    &__field {
      width: 100%;
      &_reg {
        margin-top: -110px;
      }
    }
    &__wrapper-avatar {
      margin-bottom: 30px;
    }
    &__wrapper-credentials {
      margin-bottom: 10px;
    }
    &__approve {
      width: 100%;
      height: 35px;
      margin-top: 85px;
      font-size: rem(12);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
