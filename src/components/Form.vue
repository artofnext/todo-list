<template>
    <div class="form-container">
        <form class="todo-form" name="todo">
            <!-- <h2>{{ todo }}</h2> -->
            <input class="todo-input" v-model="todo" type="text" placeholder="Type todo here...">
            <button class="todo-add" :disabled="!todo" v-on:click.prevent="setTodo(todo)" type="submit">Add!</button>
        </form>

        <ListTodo :todoArray="todoArray" />
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
            let newTodo = {
                id: this.todoArray.length, // Need this for proper vue key in v-for
                todo,
                done: false,
            };
            this.todoArray.push(newTodo);
            this.todo = "";
        },
        
    },
    watch: {                                // TODO watch don't catch change of an array element
        todoArray() {
            console.log('todoArray: ' + this.todoArray);
            this.$localStorage.set('todo', this.todoArray);
        }
    },
    beforeMount() {
        if (this.$localStorage.hasKey('todo')) {
            this.todoArray = this.$localStorage.get('todo');
        }
    },
}
</script>

<style lang="scss">
    $color-dark-main: #2c3e50;
    $color-list-background: #ddd;
    .todo-input {
        font-size: 20px;
        line-height: 25px;
        width: 450px;
        height: 50px;
        padding: 0 25px;
        box-sizing: border-box;
        border: 1px solid $color-dark-main;
        border-radius: 30px 0 0 30px;
        outline: none;
    }



    .todo-add {
        font-size: 20px;
        line-height: 25px;
        width: 100px;
        height: 50px;
        border: 1px solid $color-dark-main;
        border-radius: 0 30px 30px 0;
        background-color: $color-list-background;
        border-left: 1px solid $color-list-background;

        &[disabled] {
            
    pointer-events: none;

        }

        &:hover {
            background-color: $color-dark-main;
            color: white;
            border-left: 1px solid $color-dark-main;
        }
    }
</style>