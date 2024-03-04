<template>
    <div class="task-container">
         <div class="task-container-flex">
            <div class="list">{{ props.task.taskTitle }}</div>
            <div class="status" ><button class="status-button">{{ props.task.status }}</button></div>
            <div class="close"><i class="ri-delete-bin-5-fill"></i></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const props = defineProps(['task'])
</script>

<style scoped>
.task-container{
    text-align: center;
    /* border: 1px solid blue;   */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.task-container-flex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
    width: 100%;
    /* border: 1px solid black; */
    /* border-bottom: 1px solid gray; */
    font-size: 20px;
    text-align: left;
    color: rgb(67, 67, 67);
}
.status-button{
    color: white;
    background-color:rgba(206, 154, 58, 0.834);
    width: 8rem;
    padding: 8px;
    border-radius: 5px;
    font-size: 15px;
    font-family: sans-serif;
    border: none;
    cursor: pointer;
}
.status-button:hover{
    background-color: rgba(187, 121, 0, 0.577);
}
.status-button.completed{
    /* background-color: #cbf078; */
    background-color: #5f9ea0e6;
    color:white;
}
.status-button.completed:hover{
    background-color: #5f9ea0bc;
}
.close{
    color:rgb(240, 57, 57) ;

    cursor: pointer;
}
.close:hover{
    animation-name: shake;
   animation-duration: 1s;
   animation-iteration-count: infinite;
}
@keyframes shake {
    0% { transform:  rotate(0deg); }
   25% { transform:  rotate(-30deg); }
   50% { transform:  rotate(30deg); }
   75% { transform:  rotate(-30deg); }
   100% { transform:  rotate(0deg); }
}
</style>