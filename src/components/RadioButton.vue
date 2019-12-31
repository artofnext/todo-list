<template>
    <div class="filter-block">
      <button :active="activeIndex == 0" @click="activeIndex = 0" class="filter-button">All</button>
      <button :active="activeIndex == 1"  @click="activeIndex = 1" class="filter-button">Done</button>
      <button :active="activeIndex == 2"  @click="activeIndex = 2" class="filter-button">Not Done</button>
    </div>
</template>

<script>
export default {
    name: "RadioButton",
    props: {
        activeIndex: Number,
    }
}
</script>

<style lang="scss" scoped>
.filter-block {

  .filter-button {
    height: 30px;
    width: 100px;
  }

  & [active] {
    background-color: $color-dark-main;
    color: $color-light;
  }

}
</style>