<template>
    <div   class="input-block">
        <div class="purple" >
            <h1>TODO List</h1>
        </div>
        <div class="container">
            <!-- section-1: first block of the to-do list start -->
                <section class="section-1">
                    <input id="input" type="text" placeholder="What would you like to do?"><br>
                    <button id="addBtn">Add</button>
                </section>
            <!-- section-1 end -->
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.input-block{
    display: flex;
    align-items: center;
    justify-self: space-around;
    flex-direction: column;
}
.purple{
    background: linear-gradient(to right, rgb(95, 45, 116), rgb(70, 70, 145)) ;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 8rem;
    margin-top: 30px;
    width:120%;

}
.container{
    margin: 0;
    padding: 0;
}
.section-1{
    background-color:rgb(255, 254, 254);
    width:100%;
    padding: 2rem 9rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    position: relative;
    top: -75px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around   ;
}
.section-1 input{
    background-color:rgb(245, 240, 255);
    border: none;
    border-bottom: 2px solid grey;
    background-color: transparent;
    font-size: 16px;
    outline: none;  
}
.section-1 input:focus{
    border-bottom: 2px solid rgb(167, 167, 167);
}
.section-1 button{
    background-color: rgb(95, 95, 156) ;
    box-shadow:  rgb(114, 114, 168) 0px 3px 8px;
    border: none;
    color: white;
    width: 150px;
    padding: .5rem;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.section-1 button:hover{
    background-color: rgb(81, 81, 153);
    box-shadow: rgb(114, 114, 168) 0px 3px 8px;
}
.section-1 button:active{
    box-shadow: none;
    transform: scale(0.95);
}

</style>