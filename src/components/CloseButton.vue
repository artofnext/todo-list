<template>
    <button class="close rounded black" v-on:click.prevent="removeTodo(key)"></button>
</template>

<script>
export default {
    name: "CloseButton",
}
</script>

<style lang="scss" scoped>
    .close {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
            overflow: hidden;
            &:hover {
                &::before, &::after {
                    background:  red;
                    box-shadow: 0 0 5px red;
                }
            }

            &::before, &::after {
              content: '';
              position: absolute;
              height: 2px;
              width: 100%;
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
        
</style>