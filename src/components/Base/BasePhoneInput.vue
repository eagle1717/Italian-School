<template>
  <div class="c-base-phone" :class="{ open: is_open }">
    <div class="c-base-phone__input-icon">
      <svg
        width="13"
        height="23"
        viewBox="0 0 13 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="12"
          height="22"
          rx="1.5"
          stroke="#4B4B4B"
        />
        <path d="M4 1H9" stroke="#4B4B4B" stroke-linecap="round" />
        <path d="M5 21H8" stroke="#4B4B4B" stroke-linecap="round" />
      </svg>
    </div>
    <input type="tel" v-model="val" @input="change_val" />
    <div class="c-base-phone__chose-code" @click="open_codes_drop">
      <div class="c-base-phone__code-ico">
        <template v-if="phone_code === 'ru'">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="4.66667" fill="#FBFBFB" />
            <rect y="4.66675" width="20" height="4.66667" fill="#0094FF" />
            <rect y="9.33325" width="20" height="4.66667" fill="#EF4036" />
          </svg>
        </template>
        <template v-else-if="phone_code === 'ua'">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="7" fill="#0075FE" />
            <rect y="7" width="20" height="7" fill="#FED500" />
          </svg>
        </template>
        <template v-else>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="8.39996" fill="#FE0F00" />
            <rect y="8.3999" width="20" height="5.59998" fill="#038500" />
            <rect
              y="14"
              width="13.9999"
              height="1.53846"
              transform="rotate(-90 0 14)"
              fill="#FBFBFB"
            />
          </svg>
        </template>
      </div>
      <div class="c-base-phone__arrow" :class="{ openCodes: is_open }">
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1L6.5 7L1 1"
            stroke="#D8D8D8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <ul class="c-base-phone__codes">
      <li
        v-for="p in phone_codes"
        :key="p.code"
        class="c-base-phone__code-item"
        @click="choice_phone_code(p.phone_code, p.code)"
      >
        <div class="c-base-phone__ico">
          <template v-if="p.code === 'ru'">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="4.66667" fill="#FBFBFB" />
              <rect y="4.66675" width="20" height="4.66667" fill="#0094FF" />
              <rect y="9.33325" width="20" height="4.66667" fill="#EF4036" />
            </svg>
          </template>
          <template v-else-if="p.code === 'ua'">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="7" fill="#0075FE" />
              <rect y="7" width="20" height="7" fill="#FED500" />
            </svg>
          </template>
          <template v-else>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="8.39996" fill="#FE0F00" />
              <rect y="8.3999" width="20" height="5.59998" fill="#038500" />
              <rect
                y="14"
                width="13.9999"
                height="1.53846"
                transform="rotate(-90 0 14)"
                fill="#FBFBFB"
              />
            </svg>
          </template>
        </div>
        <div
          class="c-base-phone__text"
          v-html="p.text"
          :class="{ blackText: p.code === phone_code }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasePhoneInput",
  data() {
    return {
      val: "+7",
      phone_code: "ru",
      phone_codes: [
        {
          code: "ru",
          text: "(+ 7)<span>Россия</span>",
          phone_code: "+7"
        },
        {
          code: "ua",
          text: "(+ 380)<span>Украина</span>",
          phone_code: "+380"
        },
        {
          code: "blr",
          text: "(+ 375)<span>Белоруссия</span>",
          phone_code: "+375"
        }
      ],
      is_open: false
    };
  },
  methods: {
    open_codes_drop() {
      this.is_open = !this.is_open;
    },
    choice_phone_code(code, text_code) {
      this.val = code;
      this.phone_code = text_code;
      this.is_open = !this.is_open;
    },
    change_val() {
      const num = this.phone_codes.find(el => el.code === this.phone_code);
      this.val = this.val.replace(/[^+\d]/g, "");
      if (this.val.length < num.phone_code.length) {
        this.val = num.phone_code;
      }
      this.$emit("input", { number: this.val, code: this.phone_code });
    }
  }
};
</script>

<style lang="scss">
.c-base-phone {
  @extend %df;
  @extend %aic;
  @extend %jcsb;
  max-width: rem(263);
  height: 50px;
  position: relative;
  border: 1px solid $soft_gray;
  border-radius: 2px;
  padding: 0 17px;
  background-color: $white;
  .blackText {
    color: #4B4B4B !important;
  }
  .c-base-phone__text {
    color: #d8d8d8;
    transition: all 0.3s ease-in;
    &:hover {
      color: #4b4b4b;
      transition: all 0.3s ease-in;
    }
    span {
      margin-left: 11px;
    }
  }
  z-index: 9;
  &.open {
    .c-base-phone {
      &__codes {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  &__input-icon {
    @extend %df;
    @extend %aic;
    @extend %jcc;
  }
  &__arrow {
    margin-left: 6px;
    margin-top: 7px;
    transition: all 0.3s ease-in;
  }
  .openCodes {
    transform: rotate(180deg);
    transition: all 0.3s ease-in;
  }
  &__codes {
    position: absolute;
    top: calc(100% - 2px);
    left: -1px;
    width: calc(100% + 2px);
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid $soft_gray;
    background-color: $white;
    border-radius: 0 2px 0 2px;
    border-top-color: transparent;
    pointer-events: none;
    transition: all 0.5s ease;
    opacity: 0;
  }
  &__chose-code {
    @extend %df;
    @extend %aic;
    cursor: pointer;
  }
  &__codes {
  }
  &__code-item {
    @extend %df;
    @extend %aic;
    padding: 0 14px;
    height: 20px;
    @extend %text-small-big-line-height;
    color: $gray;
    cursor: pointer;
    margin-bottom: 7px;
    transition: all 0.5s ease;
    &:hover {
      color: $black;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__ico {
    margin-right: 7px;
    cursor: pointer;
  }
  input {
    border: none;
    width: 100%;
    height: 100%;
    @extend %text-middle;
    padding-left: 10px;
    color: $gray;
  }
}
</style>
