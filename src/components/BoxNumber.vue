<template>
    <div class="box-wrapper">
        <!-- <p class="box-number-message">{{ message }}</p> -->
        <p class="box-number-p box-number">{{ value }}</p>
    </div>
</template>

<script>
export default {
    name: "BoxNumber",
    props: {
        value: {
            type: Number,
            required: true,
        },
        // message: {
        //     type: String,
        //     required: false,
        // }
    },
}
</script>

<style lang="scss" scoped>
    // $color-dark-main: #2c3e50;

    .box-number-message,
    .box-wrapper {
        display: inline-block;
        // width: 50%;
    }

    .box-number {
        border: 1px solid $color-dark-main;
        border-radius: 15px;
        // padding: 5px;
        // margin: 2px;
        width: 20px;

        // float: left;
    }

    .box-number-p {
        display: inline-block;
        margin: 0;
        color: $color-dark-main;
        font-size: 16px;
        line-height: 20px;
    }
</style>