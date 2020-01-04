<template>
    <div class="paginator-container">
        <button 
        name="previous" 
        :disabled="!activePage"
        @click="pageToGo = activePage ? activePage - 1 : 0;" 
        class="button-prev paginator-button button"
        >
            Prev
        </button>
        <button 
        name="first"
        v-if="pages > 2"
        @click="pageToGo = 0;"
        :active="activePage == 0"
        class="button-first paginator-button button"
        >
            First
        </button>

        <div class="pages-wrapper"
            v-if="pages > 2"
        >
            <!-- Magic numbers purpose is not show 1-st & last pages number buttons -->
            <button 
            v-for="page in pages - 2"   
            :key="page"
            @click="pageToGo = page;"
            :active="page == activePage"
            class="button-page paginator-button button"
            >
                {{ page + 1 }}
            </button>

        </div>

        <button 
        name="last"
        v-if="pages > 2"
        @click="pageToGo = pages - 1;"
        :active="activePage == pages - 1"
        class="button-last paginator-button button"
        >
            Last ({{ pages }})
        </button>
        <button 
        name="next" 
        :disabled="activePage == pages - 1" 
        @click="pageToGo = activePage != pages - 1 ? activePage + 1 : pages - 1;" 
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
        }
    },
    watch: {
        pageToGo() {
            // console.log("Go to page " + this.pageToGo);
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

        .pages-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: space-evenly;
        }

        .button-page {
            width: initial;
            flex-basis: 10%;
            border-radius: 30px;
        }

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

            &.button-prev {
                // border-radius: 0 30px 30px 0;
                border-radius: 5px 0 0 30px;
                border-right: 1px solid transparent;

                &[disabled] {
                    color: darken($color-list-background, 20%);
                    &:hover {
                        background-color: $color-list-background;
                    }
                }
            }

            &.button-next {
                border-radius: 0 5px 30px 0;
                // border-radius: 30px 0 0 30px;
                border-left: 1px solid transparent;

                &[disabled] {
                    color: darken($color-list-background, 20%);
                    &:hover {
                        background-color: $color-list-background;
                    }
                }
            }

            &.button-first {
                border-radius: 0 30px 30px 0;
            }

            &.button-last {
                border-radius: 30px 0 0 30px;
            }
        }
    }
</style>