<template>
    <div class="container">
        <div class="container-flex">
            <header class="todo-block">
                <h3>List</h3>
                <h3>Status</h3>
                <h3>Close</h3>
            </header>
            <TodoItem 
                v-for="task in props.tempTasks"
                :task="task"
                :key="task.id"
            ></TodoItem>
        </div>
    </div>
</template>


<script setup>
import TodoItem from './TodoItem.vue'

let props = defineProps(['tempTasks'])
// console.log(props.tempTasks)
</script>



<style scoped>
.container{
    color: black;
    width: 90%;
    min-height: 50vh;
    position: relative;
    top:-20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
header{
    width: 100%;    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    color: rgb(88, 88, 88);
    background-color: rgba(237, 237, 237, 0.719);
}
</style>