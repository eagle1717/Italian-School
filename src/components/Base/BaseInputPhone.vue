<template>
  <div class="c-input-phone">
    <div class="c-input-phone__icon">
      <img src="/img/icons/phone.svg" alt="phone icon" />
    </div>
    <input type="text" class="c-input-phone__input" />
    <ul class="c-input-phone__flags">
      <li
        v-for="(flag, index) in flags"
        v-show="select_country == flag"
        class="c-input-phone__flag-item"
        :key="index"
      >
        <img :src="`img/icons/${flag}.svg`" :alt="flag" />
      </li>
    </ul>
    <ul class="c-input-phone__code-select">
      <li
        v-for="code in codes"
        class="c-input-phone__code-itm"
        :key="code.code"
      >
        <figure class="c-input-phone__code-ico">
          <img :src="`img/icons/${code.icon}.svg`" alt="" />
        </figure>
        <span class="c-input-phone__code-text">
          {{ code.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select_country: "ru",
      flags: ["ru", "ua", "bl"],
      codes: [
        {
          icon: "ru",
          name: "(+ 7) Россия",
          code: "+7"
        },
        {
          icon: "ua",
          name: "(+ 380) Украина",
          code: "+380"
        },
        {
          icon: "ua",
          name: "(+ 375) Белоруссия",
          code: "+375"
        }
      ]
    };
  }
};
</script>