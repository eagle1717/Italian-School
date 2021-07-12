<template>
  <div class="c-search">
    <div class="c-search__wrap-field">
      <input
        :placeholder="placeholder"
        class="c-search__field"
        type="text"
        v-model="val"
        @input="changeInput"
      />
      <button class="c-search__search-btn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      val: ""
    };
  },
  methods: {
    changeInput() {
      this.$emit("input", this.val);
    }
  }
};
</script>

<style lang="scss">
.c-search {
  &__field {
    border: none;
    width: 100%;
  }

  &__search-btn {
    @extend %bg-reset;
    background-image: url($img_dir+"ill/search.svg");
    background-size: contain;
    width: 14px;
    height: 14px;
    border: none;
  }

  &__wrap {
    &-field {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      @extend %text-small;
      color: $gray;
      border: 1px solid $soft_gray;
      padding: 10px 18px;
      width: 242px;
    }
  }
}
</style>
