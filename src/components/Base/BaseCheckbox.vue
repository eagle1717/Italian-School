<template>
  <div class="c-checkbox">
    <input
      :id="`checkbox_${id}`"
      class="c-checkbox__input"
      type="checkbox"
      :value="value"
      @change="update"
      v-if="!value"
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
    update(value) {
      this.$emit("input", value);
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
