<template>
  <div id="app">
    
   <message :msg="msg" />
   <TodoForm />
  </div>
</template>

<script>

import Message from "@/components/Message";
import TodoForm from "@/components/Form";


export default {
  name: "App",
  data() {
    return {
      msg: "Simple ToDo list",
    }
  },
  components: {
    Message,
    TodoForm,
  },
   
};
</script>

<style lang="scss">
// $color-dark-main: #2c3e50;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-dark-main;
    width: $list-width;
  @include sm {
    width: 560px;
}
@include md {
    width: 750px;
}
@include lg {
    width: 900px;
}
@include xl {
    width: 1100px;
}
  margin: 20px auto;
}
</style>
