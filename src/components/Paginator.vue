<template>
    <div class="paginator-container">
        <button name="previous" :active="isPrevActive" @click="goPrev" class="button-prev paginator-button button">
            Prev
        </button>
        <button name="first" :active="isFirstActive" @click="goFirst" class="button-first paginator-button button">
            First
        </button>

        <button v-for="page in pages" :key="page" name="page" @click="goPage" class="button-page paginator-button button">
            {{ page }}
        </button>

        <button name="last" :active="isLastActive" @click="goLast" class="button-last paginator-button button">
            Last
        </button>
        <button name="next" :active="isNextActive" @click="goNext" class="button-next paginator-button button">
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: "Paginator",
    props: {
        pages: Number,
        activePage: Number,
    },
}
</script>

<style lang="scss" scoped>
    .paginator-container {
        margin: 20px auto 10px;

        .paginator-buttonn {
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
                border-radius: 30px 0 0 5px;
                border-right: 1px solid transparent;
            }
            &:last-child {
                border-radius: 0 30px 5px 0;
                // border-radius: 30px 0 0 30px;
                border-left: 1px solid transparent;
            }
        }
    }
</style>