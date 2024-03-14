<template>
    <el-container class="container">
        <el-main class="purple">Login</el-main>
        <el-main class="main">
          <el-form :model="form" label-width="auto" >
        <el-form-item 
          label="Email"  
          prop="email" 
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            }
          ]" 
          clearable>
        <el-input v-model="form.email" placeholder="Enter email" />
        </el-form-item>
        <el-form-item 
          label="Password"  
          prop="password" 
          :rules="[
            {
              required: true,
              message: 'Please input password',
              trigger: 'blur',
            }
          ]" 
          >
        <el-input v-model="form.password" placeholder="Enter password" autocomplete="off" />
        </el-form-item>
        <el-button>Submit</el-button>
        <el-button>Refresh</el-button>
          </el-form>
        </el-main>     
</el-container>      
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  password: ''
})

// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (ruleForm.checkPass !== '') {
//       if (!ruleFormRef.value) return
//       ruleFormRef.value.validateField('checkPass', () => null)
//     }
//     callback()
//   }
// }
</script>

<style scoped>
 .container{
  text-align: center;
   border-radius: 20px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   color: white;
   font-family: "Poppins", sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;justify-content: space-around;
   width: 700px; 
   height: 500px;
}
.main{
  text-align: center;
   border-radius: 20px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   color: white;
   font-family: "Poppins", sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;justify-content: space-around;
   width: 530px; 
   height: 530px;
   position: relative;
   top: -20px;
   z-index: 1;
   margin: 10px;
}
.purple{
    background: linear-gradient(to right, rgb(95, 45, 116), rgb(70, 70, 145)) ;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 8rem;
    margin-top: 30px;
    width:100%;
    position: relative;
    top: -30px;
    font-size: 25px;
    display: flex;
    justify-content: center;
}

.el-button{
  background-color: rgb(81, 81, 153);
  color: white;
  box-shadow: rgb(114, 114, 168) 0px 2px 4px;
  border: none;

}
.el-button:hover{
    box-shadow:none
}
.el-button:active{
    box-shadow: none;
    transform: scale(0.95);
}
</style>