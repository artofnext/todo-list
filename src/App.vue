<template>
  <div id="app">
    <Modal modal-title="Modal Warning!" />
   <message :msg="msg" />
   <TodoForm />
  </div>
</template>

<script>

import Message from "@/components/Message";
import TodoForm from "@/components/Form";
import Modal from "@/components/Modal";

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
    Modal,
  },
   
};
</script>

<style lang="scss">
$color-dark-main: #2c3e50;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-dark-main;
}
</style>
