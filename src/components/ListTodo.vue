<template>
  <div>
    <Modal
      v-model="modalOpen"
      :modalKey="modalKey"
      v-on:confirmed="removeTodo(modalKey)"
      modal-title="Delete todo?"
    />
    <radio-button 
      :activeIndex="doneFilter" 
      :statistic="[todoArray.length, alreadyDone, todoArray.length - alreadyDone]" 
      @state-change=" e => doneFilter = e " 
    />

      <!-- :list="todoArray" -->
    <!-- draggable -->
    <DraggableExtended
      v-model="todoArray"
      tag="ol"
      ghost-class="moving-item"
      filter=".action-button"
      :animation="200"
      :style="{ counterReset: 'my-awesome-counter ' + pageIndex * pageSize }"
    >
      <transition-group name="list">
        <li
          v-for="(value, key) in paginatedArray"
          :key="value.id"
          :class="'list-item ' + ((key % 2) ? 'even' : 'odd')"
        >
          <p class="todo-item">{{ value.todo }}</p>
          <CloseButton class="list-close action-button" v-on:click.native="openModal(value.id)" />
          <DoneCheck
            class="checkbox action-button"
            :key="key"
            v-on:click.stop.native="checkDone(value.id)"
            :checked="value.done"
          />
        </li>
      </transition-group>
      </DraggableExtended>
    <!-- </draggable> -->
    <paginator v-if="(pages - 1) > 0" :pages="pages" :activePage="pageIndex" @go-page="page => pageIndex = page"/>
  </div>
</template>

<script>
import DoneCheck from "@/components/DoneCheck";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal";
// import { stringify } from "querystring";
// import Draggable from "vuedraggable";
import DraggableExtended from "@/components/DraggableExtended.vue";
import RadioButton from "@/components/RadioButton";
import Paginator from "@/components/Paginator";

export default {
  name: "ListTodo",
  props: {
    todoArray: Array
  },
  data() {
    return {
      modalOpen: false,
      modalKey: null,
      elementKey: null,

      // 0 - show all, 1 - only done, 2 - only not done
      doneFilter: 0,
      // pagination 
      pageSize: 10,
      pageIndex: null,
      page: null,
    };
  },
  components: {
    DoneCheck,
    CloseButton,
    Modal,
    DraggableExtended,
    RadioButton,
    Paginator,
  },
  methods: {
    removeTodo: function(key) {
      let self = this;

      setTimeout(function() {
        // for purpose to pass param to callback function
        removeElem(key);
      }, 0);

      /**
       * key is the value of id of array todo element
       */
      function removeElem(key) {
        // find index of array element by property
        let index = self.todoArray.map(elem => elem.id).indexOf(key);
        self.todoArray.splice(index, 1);
      }
    },
    checkDone(key) {
      let self = this;
      // find index of array element by property
      let index = self.todoArray.map(elem => elem.id).indexOf(key);

      self.todoArray[index].done = !self.todoArray[index].done;
      this.$emit("changed");
    },
    openModal(key) {
      this.modalKey = key;
      this.modalOpen = !this.modalOpen;
    },
  },
  watch: {
    filteredArray() {  // when page index goes out of array, set page index to 0
      if (this.pageIndex * this.pageSize >= this.filteredArray.length) {
        this.pageIndex = 0;
      }
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

      // if (result == this.todoArray.length) {
      //   result = "all";
      // }

      if (this.todoArray.length == 0) {
        result = false;
      }
      return result;
    },
    filteredArray() {
      switch (this.doneFilter) {
        case 1:
          return this.todoArray.filter(elem => elem.done);
          break;
        case 2:
          return this.todoArray.filter(elem => !elem.done);
          break;
        default:
          return this.todoArray;
      }
    },
    paginatedArray() {
      return this.filteredArray.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    },
    pages() {
      return Math.ceil(this.filteredArray.length / this.pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>

ol {
  list-style: none;
  counter-reset: my-awesome-counter; // counter starts inline
}
ol li {
  counter-increment: my-awesome-counter;
}
ol li::before {
  content: counter(my-awesome-counter) "";
  color: $color-light;
  font-weight: bold;

  border: 1px solid $color-dark-main;
  border-radius: 30px;
  background-color: $color-dark-main;
  width: 21px;
  padding: 0 6px 0 3px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;

  text-align: center;

  font-size: 20px;
  line-height: 30px;
}

.stats-block {
  margin: 0 auto;
  max-width: $list-width;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  padding-left: 0;
}

ol {
  margin: 0 auto;
  // max-width: $list-width;
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-left: 0;

  .odd {
    background-color: $color-list-background;
  }

  .even {
    background-color: lighten($color-list-background, 10%);
  }
  .moving-item {
    background-color: $color-active-background;
  }

  .sortable-chosen {
    background-color: $color-active-background;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }

  li {
    margin-bottom: 10px;
    width: $list-width;
    border: 1px solid $color-dark-main;
    border-radius: 20px;

    & .checkbox {
      float: right;
    }
    & .list-close {
      float: right;
      border: none;
      margin: 8px;
      background-color: transparent;
    }

    .todo-item {
      margin: 0;
      display: inline-block;
      width: $list-width - 40%;
      @include sm {
        width: $list-width - 20%;
      }
      @include md {
        width: $list-width - 20%;
      }
      @include lg {
        width: $list-width - 15%;
      }
      @include xl {
        width: $list-width - 10%;
      }
    }
  }
}

.checkbox {
  height: 15px;
  width: 15px;
}
</style>