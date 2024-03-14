<template>
    <div>
        <nav>
            <li :class="activeClass === 'allTasks'?'active':null"  @click="$emit('tabValue','allTasks'), addActiveClass('allTasks')" ><i class="ri-calendar-schedule-line"></i></li>
            <li class="pending-task" :class="activeClass=='pendingTasks'?'active':null" @click="$emit('tabValue','pendingTasks'), addActiveClass('pendingTasks')"><i class="ri-hourglass-fill" ></i></li>
            <li class="completed-task" :class="activeClass==='completedTasks'?'active':null" @click="$emit('tabValue','completedTasks'), addActiveClass('completedTasks')"><i class="ri-calendar-check-fill" ></i></li>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let emit = defineEmits(['tabValue','navValue'], )
let activeClass = ref('allTasks')


function addActiveClass(taskStatus){
    
    return activeClass = taskStatus, console.log(activeClass)
    
}


</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    font-size:25px ;
    list-style: none;
    color: rgba(0, 0, 0, 0.489);
    width: 45vw;
    position: relative;
    top: -50px;
    /* border: 1px solid black; */
}
i{
    padding: 3px 6px;
    cursor: pointer;
}
i:active{
    transform: scale(0.9);
}
i:hover{
    color: rgb(0, 0, 0);
    
}
.active{
    /* border-bottom: 3px solid rgb(78, 78, 78); */
    border: 1px solid transparent;
    background-color: rgba(128, 128, 128, 0.168);
    padding: 3px 6px;
    border-radius: 50%;
    color: black;
}

</style>