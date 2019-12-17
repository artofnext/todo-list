import Vue from 'vue';
import Storage from 'vue-web-storage';  


Vue.use(Storage, {
    prefix: 'todo_list_',// default `app_`
    drivers: 'local', // default 'local'
  });

//   export default new Storage;