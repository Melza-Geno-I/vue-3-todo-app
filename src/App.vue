<script setup>
import InputBlock from './components/InputBlock.vue' 
import NavBar from './components/NavBar.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
<div class="todo-app">
  <main class="main-container">
        <InputBlock></InputBlock>

        <NavBar></NavBar>

        <TodoList></TodoList>
  </main>
</div>


</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.todo-app{
  width: 100vw;
  height: 100vh;
  display: flex;
    align-items: center;
    justify-content: center;
}
main{
   
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
    /* gap: 20px; */
}


</style>
