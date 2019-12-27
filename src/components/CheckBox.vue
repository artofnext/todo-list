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

    .check-outer {

    }

    .check-inner {

    }
</style>