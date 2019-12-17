<template>
    <div>
    <h3>Here should be the list</h3>
    <ol>
        <li v-for="(value, key) in todoArray" :key="key">{{ value }}<button v-on:click="remove">x</button></li>
    </ol>
    </div>
</template>

<script>
export default {
    name: "ListTodo",
    data() {

        console.log('Here!')
        return {
            todoArray: [],
        }
    },
    
}
</script>