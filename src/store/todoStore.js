import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useTodoStore = defineStore('todoTasks', ()=>{

    let tasks=ref([
        {id:'1', todo:'task1',completed:'Pending'},
        {id:'2', todo:'task2',completed:'Completed'},
        {id:'3', todo:'task3',completed:'Pending'},
        {id:'4', todo:'task4',completed:'Completed'}
      ])
    let tempTasks = ref(tasks.value)

    const error = ref(null)
    
    function tabValue(navValue){
        // console.log(navValue)
        if(navValue === 'allTasks'){
          return tempTasks = tasks 
        //    return console.log(tempTasks)
        }else if(navValue === 'pendingTasks'){
          return tempTasks = tasks.value.filter(task => task.status === "Pending")
        //   return console.log(tempTasks)
        }else if(navValue === 'completedTasks'){
        //   return tempTasks = tasks.value.filter(task => task.status === "Completed")
          return console.log(tempTasks)
        }
      }
      
    function addTask(){
        console.log('add function')
    }

    // fetch 
    const load = async()=>{
      try{
        let data = await fetch('https://dummyjson.com/todos').then(res => res.json());
        // console.log(data)
    
        if(!data.ok){
          throw Error('no data available')
        }
        tasks.value = await data.json()
        console.log(tasks)
      }
      catch(err){
        error.value = err.message
      }
    }
    load()

    return{tasks, tempTasks, addTask, tabValue }
})