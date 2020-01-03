<template>
    <div class="paginator-container">
        <button 
        name="previous" 
        :active="isPrevActive" 
        @click="pageToGo = activePage - 1;" 
        class="button-prev paginator-button button"
        >
            Prev
        </button>
        <button 
        name="first" 
        :active="isFirstActive"
        @click="pageToGo = 0;" 
        class="button-first paginator-button button"
        >
            First
        </button>

        <button 
        v-for="page in pages" 
        :key="page" name="page" 
        @click="pageToGo = page - 1;" 
        class="button-page paginator-button button"
        >
            {{ page }}
        </button>

        <button 
        name="last" 
        :active="isLastActive" 
        @click="pageToGo = pages - 1;" 
        class="button-last paginator-button button"
        >
            Last
        </button>
        <button 
        name="next" 
        :active="isNextActive" 
        @click="pageToGo = activePage + 1;" 
        class="button-next paginator-button button"
        >
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: "Paginator",
    props: {
        pages:{
            type: Number,
            default: 0,
        },
        activePage: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            key: Number,
            pageToGo: 0,
            isPrevActive: true,
            isFirstActive: true,
            isLastActive: true,
            isNextActive: true,
        }
    },
    watch: {
        pageToGo() {
            console.log("Go to page " + this.pageToGo);
            this.$emit('go-page', this.pageToGo);
        },
    },
}
</script>

<style lang="scss" scoped>
    .paginator-container {
        width: $list-width;
        margin: 10px auto 20px;
        display: flex;
        justify-content: space-between;

        .paginator-button {
            height: 30px;
            // width: $list-width / 4;
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
                border-radius: 5px 0 0 30px;
                border-right: 1px solid transparent;
            }
            &:last-child {
                border-radius: 0 5px 30px 0;
                // border-radius: 30px 0 0 30px;
                border-left: 1px solid transparent;
            }
        }
    }
</style>