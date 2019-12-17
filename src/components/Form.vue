<template>
    <div class="form-container">
        <form class="todo-form" name="todo">
            <h2>{{ todo }}</h2>
            <input v-model="todo" type="text" placeholder="Type toto here...">
            <button v-on:click.prevent="setTodo(todo)" type="submit">Add!</button>
        </form>
    </div>
</template>

<script>
// import { watch } from 'fs';
export default {
    name: 'Form',
    data() {
        return {
            todo: "",
            todoArray: [],
        }
    },
    methods: {
        setTodo: function(todo) {
            this.todoArray.push(todo);
            this.todo = "";
            console.log("Todos: " + this.todoArray);
        }
    },
}
</script>