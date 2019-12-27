<template>
    <div 
    class="check-outer" 
    :class="{ checked: checked, disabled: disabled }"
    @click="changeState()"
    >
        <div class="check-inner"></div>
    </div>
</template>

<script>
export default {
    name: "Ceckbox",
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
            this.$emit("changed", !this.checked);
        },
    }
}
</script>

<style lang="scss" scoped>
    $color-dark-main: #2c3e50;
    $color-list-background: #ddd;

    .check-outer {
        margin: 2px;
        height: 10px;
        width: 25px;
        border: 1px solid $color-dark-main;
        background-color: $color-list-background;

        :hover {
            background-color: darken($color-list-background, 10%);
        }

        :disabled {
            background-color: lighten($color-list-background, 10%);
            border: 1px solid $color-list-background;

        }
    }

    .check-inner {

    }
</style>