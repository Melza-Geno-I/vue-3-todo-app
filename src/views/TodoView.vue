<template>
    <div class="todo-app">
    <el-main class="todo-view-main-container">
        <TodoInput></TodoInput>
        <TodoTabs @tab-value="tabValue"></TodoTabs>
        <TodoList :tempTasks="tempTasks"></TodoList>
    </el-main>
        

    <!-- <NavBar :activeClass="activeClass" @task-Nav="taskNav"></NavBar> -->
        

    <!-- <TodoList v-if=" activeClass==='all' " :tempTasks="tempTasks"></TodoList> -->
        
            
        
</div>

</template>

<script setup>
import { useTodoStore } from "../store/todoStore";
import { storeToRefs } from "pinia";

import TodoInput from '../components/TodoApp/TodoInput.vue' 
import TodoTabs from '../components/TodoApp/TodoTabs.vue'
import TodoList from '../components/TodoApp/TodoList.vue'

const { tempTasks } = storeToRefs(useTodoStore());
const { tabValue } = useTodoStore();

</script>

<style scoped>
.todo-view-main-container{
    text-align: center;
   border-radius: 20px;
   width: 700px;
   max-height: 1200px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   color: white;
   font-family: "Poppins", sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;justify-content: space-around;
}
.todo-app{
    display: flex;
    align-items: center;
    justify-content: left;
}

</style>../components/TodoTabs.vue../components/TodoInput.vue../components/TodoApp/TodoList.vue../store/todoStore