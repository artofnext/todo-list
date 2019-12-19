<template>
    <div>
    <!-- <div>
                <h3  v-if="todoArray.length > 0">You have to do:</h3>
                    <transition-group name="list" tag="ol">

                        <li v-for="(value, key) in todoArray" :key="key + 'element'" :class="'list-item ' + ((key % 2) ? 'even' : 'odd')">{{ value }}
                            <button class="close rounded black" v-on:click.prevent="removeTodo(key)"></button>
                        </li>

                    </transition-group>
            </div> -->
    <ol>
        <li v-for="(value, key) in todoArray" :key="key">{{ value }}<button v-on:click="removeTodo(key)">x</button></li>
    </ol>
    </div>
</template>

<script>
export default {
    name: "ListTodo",
    props: {
        todoArray: Array,
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
        }
    }
    // data() {
    

    //     console.log('Here!')
    //     return {
    //         todoArray: [],
    //     }
    // },   
}
</script>