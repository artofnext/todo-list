<template>
    <div class="filter-block">
      <button :active="activeIndex == 0" @click="activeIndex = 0" class="filter-button button">
          All
            <box-number :value="statistic[0]"/>
      </button>
      <button :active="activeIndex == 1"  @click="activeIndex = 1" class="filter-button button">
          Done
            <box-number :value="statistic[1]"/>
          </button>
      <button :active="activeIndex == 2"  @click="activeIndex = 2" class="filter-button button">
          Not Done
            <box-number :value="statistic[2]"/>
          </button>
    </div>
</template>

<script>
import BoxNumber from "@/components/BoxNumber.vue"

export default {
    name: "RadioButton",
    props: {
        activeIndex: Number,
        statistic: Array,
    },
    components: {
        BoxNumber,
    },
    watch: {
        activeIndex() {
            this.$emit("state-change", this.activeIndex);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-block {

    margin: 20px auto;

  .filter-button {
    height: 30px;
    width: $list-width / 3;
    background-color: $color-list-background;
    color: $color-dark-main;
    font-size: 20px;
    height: 35px;
    outline: none;

        &:hover {
            background-color: darken($color-list-background, 10%);
        }

        &[active] {
          background-color: $color-dark-main;
          color: $color-light;
        }

        &:first-child {
            // border-radius: 0 30px 30px 0;
            border-radius: 30px 0 0 30px;
            border-right: 1px solid transparent;
        }

        &:last-child {
            border-radius: 0 30px 30px 0;
            // border-radius: 30px 0 0 30px;
            border-left: 1px solid transparent;
        }
    }


}
</style>