<template>
    <div :class="{ checked: checked }">

    </div>
</template>

<script>
export default {
    name: "DoneCheck",
    props: {
        checked: Boolean,
    }
}
</script>

<style lang="scss" scoped>

    // $color-list-background: #ddd;
    // $color-dark-main: #2c3e50;

    div {
            &:hover {
                background: darken($color-list-background, 20%);
                // box-shadow: 0 0 5px $color-list-background;
            }
        height: 15px;
        width: 15px;
        border: 1px solid $color-dark-main;
        border-radius: 3px;
        margin: 7px;

        & .checked {
        position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
            overflow: hidden;

            &::before, &::after {
              content: '';
              position: absolute;
              height: 2px;
              width: 70%;
              top: 50%;
              left: 0;
              margin-top: -1px;
              background: $color-dark-main;
            }

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
                width: 50%;
                left: 7px;
            }

            .rounded {
                &::before, &::after {
                    border-radius: 5px;
                }
            }

            .black {
                &::before, &::after {
                    height: 8px;
                    margin-top: -4px;
                }
           
         } }
    }
</style>