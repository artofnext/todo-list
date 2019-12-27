<template>
    <div class="box-number">
        <p class="box-number-p">{{ value }}</p>
    </div>
</template>

<script>
export default {
    name: "Box Number",
    props: {
        value: {
            type: Number,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    $color-dark-main: #2c3e50;

    .box-number {
        border: 1px solid $color-dark-main;
        border-radius: 5px;
        padding: 5px;
        margin: 2px;
    }

    .box-number-p {
        display: inline;
        margin: 2px;
        color: $color-dark-main;
        font-size: 20px;
    }
</style>