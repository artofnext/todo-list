<template>
    <div class="form-container">
        <form class="todo-form" name="todo">
            <!-- <h2>{{ todo }}</h2> -->
            <input v-model="todo" type="text" placeholder="Type toto here...">
            <button :disabled="!todo" v-on:click.prevent="setTodo(todo)" type="submit">Add!</button>
        </form>

            <ListTodo :todoArray="todoArray" />

            <!-- <div>
                <h3  v-if="todoArray.length > 0">You have to do:</h3>
                    <transition-group name="list" tag="ol">

                        <li v-for="(value, key) in todoArray" :key="key + 'element'" :class="'list-item ' + ((key % 2) ? 'even' : 'odd')">{{ value }}
                            <button class="close rounded black" v-on:click.prevent="removeTodo(key)"></button>
                        </li>

                    </transition-group>
            </div> -->
        <h2 v-if="todoArray.length > 0">Total todos: {{ todoArray.length }}</h2>
        <h2 v-else>You have nothing to do!</h2>
    </div>
</template>

<script>
import ListTodo from '@/components/ListTodo';

export default {
    name: 'Form',
    data() {
        return {
            todo: "",
            todoArray: [],
        }
    },
    components: {
        ListTodo,
    },
    methods: {
        setTodo: function(todo) {
            this.todoArray.push(todo);
            this.todo = "";
        },
        
    },
    watch: {
        todoArray() {
            console.log('todoArray: ' + this.todoArray);
        }
    },
    mounted() {
        this.$localStorage.set('name', 'john');
    },
}
</script>

<style lang="scss" scoped>
    $color-list-background: #ddd;

    ol {
        margin: 0 auto;
        max-width: 500px;
        width: 100%;
        text-align: left;
        font-size: 20px;
        line-height: 30px;

        .odd {
            background-color: $color-list-background;
        }
        
        .even {
            background-color: lighten( $color-list-background, 10%);
        }

        .list-item {
            // display: inline-block;
            // margin-right: 10px;
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
            width: 450px;
            & button {
                float: right;
                border: none;
                margin: 7px;
                background-color: transparent;
            }
        }

        .close{
            position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
            overflow: hidden;
            &:hover {
                &::before, &::after {
                    background: red;
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
    }
</style>