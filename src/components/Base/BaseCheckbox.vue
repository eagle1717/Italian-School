<template>
  <div
    class="c-checkbox"
    v-tooltip="{ text: 'Отправить Д/З на проверку' }"
    title="fsa"
  >
    <input
      :id="`checkbox_${id}`"
      class="c-checkbox__input"
      type="checkbox"
      :value="value"
      @change="update"
      v-if="!value"
      @click="sendHomework"
    />
    <input
      :id="`checkbox_${id}`"
      class="c-checkbox__input"
      type="checkbox"
      :value="value"
      checked
      disabled
      v-else
    />
    <label :for="`checkbox_${id}`" class="c-checkbox__label"></label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "BaseCheckbox",
  props: {
    value: {
      type: Boolean
    },
    checked: {
      type: Boolean
    }
  },
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    ...mapMutations(["SHOW_MODAL"]),
    update(value) {
      this.$emit("input", value);
    },
    sendHomework() {
      this.SHOW_MODAL("homework");
    }
  }
};
</script>

<style lang="scss">
.c-checkbox {
  &__input {
    display: none;
    &:checked + label {
      background: red;
      background-image: url($img_dir+"/icons/checkboxs.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 13px;
      background-color: $green;
      border: none;
    }
  }

  &__label {
    cursor: pointer;
    border: 1px solid $gray;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 2px;
  }
}
</style>
