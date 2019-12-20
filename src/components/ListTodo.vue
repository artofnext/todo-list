<template>
    <div>
        <Modal v-model="modalOpen" modal-title="Modal Warning!" />
        <h2 v-if="todoArray.length > 0">You have to do:</h2>
        <transition-group name="list" tag="ol">
            <li v-for="(value, key) in todoArray" 
            :key="value.id" 
            :class="'list-item ' + ((key % 2) ? 'even' : 'odd')">
            {{ value.todo }}
                <!-- <button class="close rounded black" v-on:click.prevent="removeTodo(key)"></button> -->
                <CloseButton class="list-close" v-on:click.native="openModal" />
                <!-- <input type="checkbox" v-on:click="checkDone(key)" :checked="value.done" > -->
                <DoneCheck class="checkbox" :key="key" v-on:click.native="checkDone(key)" :checked="value.done" />
            </li>
        </transition-group>
        <h2 v-if="todoArray.length > 0">Total todos: {{ todoArray.length }}</h2>
        <h2 v-else>You have nothing to do!</h2>
        <h2 v-if="alreadyDone">Already done: {{ alreadyDone }}</h2>

    </div>
</template>

<script>
import DoneCheck from "@/components/DoneCheck"
import CloseButton from "@/components/CloseButton"
import Modal from "@/components/Modal";

export default {
    name: "ListTodo",
    props: {
        todoArray: Array,
    },
    data() {
        return {
            modalOpen: false,
        }
    },
    components: {
        DoneCheck,
        CloseButton,
        Modal,
    },
    methods: {
        removeTodo: function(key) {

            let self = this;

            setTimeout(function () { // for purpose to pass param to callback function
                removeElem(key);
                }, 50);

            function removeElem (key) {
                self.todoArray.splice(key, 1);
            }
        },
        checkDone(key) {
            let self = this;

            self.todoArray[key].done = !self.todoArray[key].done;

            console.log(self.todoArray);
        },
        openModal() {
            this.modalOpen = !this.modalOpen;
        }
    },
    computed: {
        alreadyDone() {
            let result = 0;
            for (let todo of this.todoArray) {
                if (todo.done) {
                    result++;
                }
            }

            if (result == this.todoArray.length ) {
                result = "ALL! Well done!";
            }

            if (this.todoArray.length == 0) {
                result = false;
            }
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>
    $color-list-background: #ddd;
    $color-dark-main: #2c3e50;

    ol {
        list-style: none;
        counter-reset: my-awesome-counter;
    }
    ol li {
        counter-increment: my-awesome-counter;
    }
    ol li::before {
        content: counter(my-awesome-counter) "";
        color: white;
        font-weight: bold;

        border: 1px solid $color-dark-main;
        border-radius: 30px;
        background-color: $color-dark-main;
        width: 21px;
        height: 29px;
        padding: 0 6px 0 3px; 
        margin-right: 10px;
        display: inline-block;
        
        text-align: center;

        font-size: 20px;
        line-height: 30px;
    }

    ol {
        margin: 0 auto;
        max-width: 550px;
        width: 100%;
        text-align: left;
        font-size: 20px;
        line-height: 30px;
        padding-left: 0;

        .odd {
            background-color: $color-list-background;
        }
        
        .even {
            background-color: lighten( $color-list-background, 10%);
        }

        .list-item {
            // padding-left: 20px;
            // box-sizing: border-box;
        }
        .list-enter-active, .list-leave-active {
            transition: all 1s;
        }
        .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
            opacity: 0;
            transform: translateX(30px);
        }
        .list-move {
            transition: transform 1s;
        }

        li {
            margin-bottom: 10px;
            width: 550px;
            border: 1px solid $color-dark-main;
            border-radius: 20px;
            // padding-left: 20px;

            & .checkbox {
                float: right;
            }
            & .list-close {
                float: right;
                border: none;
                margin: 8px;
                background-color: transparent;
            }
        }

        // .close {
        //     position: relative;
        //     display: inline-block;
        //     width: 15px;
        //     height: 15px;
        //     overflow: hidden;
        //     &:hover {
        //         &::before, &::after {
        //             background:  red;
        //             box-shadow: 0 0 5px red;
        //         }
        //     }

        //     &::before, &::after {
        //       content: '';
        //       position: absolute;
        //       height: 2px;
        //       width: 100%;
        //       top: 50%;
        //       left: 0;
        //       margin-top: -1px;
        //       background: #000;
        //     }

        //     &::before {
        //         transform: rotate(45deg);
        //     }

        //     &::after {
        //         transform: rotate(-45deg);
        //     }

        //     .rounded {
        //         &::before, &::after {
        //             border-radius: 5px;
        //         }
        //     }

        //     .black {
        //         &::before, &::after {
        //             height: 8px;
        //             margin-top: -4px;
        //         }
        //     }
        // }
    }

    .checkbox {
        height: 15px;
        width: 15px;
    }

</style>