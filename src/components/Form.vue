<template>
    <div class="form-container">
        <form class="todo-form" name="todo">
            <h2>{{ todo }}</h2>
            <input v-model="todo" type="text" placeholder="Type toto here...">
            <button v-on:click.prevent="setTodo(todo)" type="submit">Add!</button>
        </form>

            <div>
                <h3>Here should be the list</h3>
                    <ol>
                        <li v-for="(value, key) in todoArray" :key="key">{{ value }}
                            <button v-on:click.prevent="todoArray.splice(key, 1)">x</button>
                        </li>
                    </ol>
            </div>
            <h2>Total todos: {{ todoArray.length }}</h2>
    </div>
</template>

<script>
// import ListTodo from '@/components/ListTodo';

export default {
    name: 'Form',
    data() {
        return {
            todo: "",
            todoArray: [],
        }
    },
    components: {
        // ListTodo,
    },
    methods: {
        setTodo: function(todo) {
            this.todoArray.push(todo);
            this.todo = "";
            console.log("Todos: " + this.todoArray);
        },
        removeTodo: function(event) {
            console.log('Pressed');
            console.log(event);
        }
        
    },
    watch: {
        todoArray() {
            console.log('todoArray: ' + this.todoArray);
        }
    },
}
</script>

<style lang="scss" scoped>
    ol {
        margin: 0 auto;
        max-width: 500px;
    }
</style>