<template>
    <div class="tooltip" :class="{ checked: checked }">
        <span class="tooltiptext">Done</span>
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

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 80px;
        background-color: $color-dark-main;
        color: #fff;
        text-align: center;
        border-radius: 30px 10px 10px 30px;
        // padding: 5px 0;
        position: absolute;
        z-index: 10;
        top: -46%;
        right: 170%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 18%;
        left: 105%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color:  transparent transparent transparent $color-dark-main;
        // border-color: $color-dark-main;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

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
            // overflow: hidden;

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
           
            } 
        }
    }
</style>