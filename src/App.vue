
<template>
    <el-container class="app-container">
      <el-header class="app-header">
          <router-link to="/Login">Login</router-link>
          <router-link to="/Todo">Todo</router-link>
      </el-header>
      <el-main class="app-main">
          <router-view></router-view>
      </el-main>
    </el-container>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router';

// const emit = defineEmits(['tab-Value','value'] );

// methods start
  // function tabValue(navValue){
  //   console.log(navValue)
  //   if(navValue === 'allTasks'){
  //     return tempTasks = tasks 
  //     //  return console.log(tempTasks)
  //   }else if(navValue === 'pendingTasks'){
  //     return tempTasks = tasks.value.filter(task => task.status === "Pending")
  //     // return console.log(tempTasks)
  //   }else if(navValue === 'completedTasks'){
  //     return tempTasks = tasks.value.filter(task => task.status === "Completed")
  //     // return console.log(tempTasks)
  //   }
  // }
// methods end

// fetch 
// const load = async()=>{
//   try{
//     let data = await fetch('https://dummyjson.com/todos').then(res => res.json());
//     console.log(data)

//     if(!data.ok){
//       throw Error('no data available')
//     }
//     tasks.value = await data.json()
//     console.log(tasks.value)
//   }
//   catch(err){
//     error.value = err.message
//   }
// }
// load()
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border: 5px solid black;
}
.app-header{
  /* background: linear-gradient(to right, rgb(95, 45, 116), rgb(70, 70, 145)) ; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  border: 5px solid red;
  background-color: #430f58;
}
.app-header a{
  color: white;
  font-size: larger;
}
a:hover{
  scale: 1.1;
  background-color: transparent;
}
a:active{
  scale: 0.9;
}
.app-main{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  border: 1px solid black;
}



</style>
