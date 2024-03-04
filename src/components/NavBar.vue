<template>
    <div>
        <nav>
            <li class="all-task active"><i class="ri-calendar-schedule-line"></i></li>
            <li class="pending-task"><i class="ri-hourglass-fill"></i></li>
            <li class="completed-task"><i class="ri-calendar-check-fill"></i></li>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'NavBar'
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
    color: black;
    width: 45vw;
    position: relative;
    top: -45px;
    /* border: 1px solid black; */
}
.active{
    border-bottom: 3px solid rgb(78, 78, 78);
}

</style>