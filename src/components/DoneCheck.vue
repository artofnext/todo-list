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
    div {
            &:hover {
                background:  red;
                box-shadow: 0 0 5px red;
            }
        height: 15px;
        width: 15px;
        border: 1px solid black;
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
              background: #000;
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