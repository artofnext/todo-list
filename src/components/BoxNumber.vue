<template>
    <div class="box-wrapper">
        <p class="box-number-message">{{ message }}</p>
        <p class="box-number-p box-number">{{ value }}</p>
    </div>
</template>

<script>
export default {
    name: "Box Number",
    props: {
        value: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
            required: false,
        }
    },
}
</script>

<style lang="scss" scoped>
    // $color-dark-main: #2c3e50;

    .box-number-message,
    .box-wrapper {
        display: inline-block;
        width: 50%;
    }

    .box-number {
        border: 1px solid $color-dark-main;
        border-radius: 5px;
        padding: 5px;
        margin: 2px;
        width: 30px;

        // float: left;
    }

    .box-number-p {
        display: inline-block;
        margin: 2px;
        color: $color-dark-main;
        font-size: 20px;
    }
</style>