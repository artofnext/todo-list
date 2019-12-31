<template>
    <div 
    class="outer" 
    :class="{ checked: checked, disabled: disabled }"
    @click="changeState()"
    >
        <div 
        class="inner"
        :class="{ checked: checked, disabled: disabled }"
        ></div>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
        checked: {
            type: Boolean,
            required: true,
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        changeState() {
            if (this.disabled) {
                return;
            }
            this.checked = !this.checked;
            this.$emit("changed", this.checked);
        },
    }
}
</script>

<style lang="scss" scoped>
    // $color-dark-main: #2c3e50;
    // $color-list-background: #ddd;

    .outer {
        position: relative;
        margin: 2px;
        height: 24px;
        width: 45px;
        border: 1px solid $color-dark-main;
        background-color: $color-list-background;
        border-radius: 15px;
        transition: all .3s ease-in-out;

        &:hover {
            background-color: darken($color-list-background, 10%);

            .inner {
                background-color: darken($color-light, 10%);
            }

        }

        &.checked {
            // background-color: lighten($color-dark-main, 10%);
            background-color: $color-dark-main;
        }

        &.disabled {
            background-color: lighten($color-list-background, 10%);
            border: 1px solid  lighten($color-dark-main, 10%);

            &.checked {
                background-color: lighten($color-dark-main, 20%);
            }
        }
    }

    .inner {
        position: absolute;
        margin: 2px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-sizing: border-box;
        // border: 1px solid white;
        border: 1px solid $color-dark-main;
        background-color: $color-light;
        left: 0;
        transition: all .3s ease-in-out;
        
        &.checked {
            // background-color: $color-list-background;
        // transition: all .5s ease-in-out;
            left: 20px;
        }
        
        &.disabled {
            background-color: lighten($color-list-background, 10%);
            border: 1px solid  lighten($color-dark-main, 10%);
        }
    }
</style>