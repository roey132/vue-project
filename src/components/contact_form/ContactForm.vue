<script setup>

</script>

<template>
<div class="form-container">
    <form action="">
        <label for="fname">שם מלא</label><br>
        <input class="field" type="text" name="fname" id="fname"><br>
        <label for="email">אימייל</label><br>
        <input class="field" type="text" name="email" id="email"><br>
        <label for="pnumber">מספר טלפון</label><br>
        <input class="field" type="text" name="pnumber" id="pnumber"><br>
        <label for="details">פירוט</label><br>
        <textarea class="field details" name="details" id="" cols="1" rows="10"></textarea><br>
        <input class = "submit" type="submit" value="שלח">
    </form>
</div>
    


</template>

<style scoped>
.field{
    background-color: white;
    border: solid 1px #ccc;
    border-bottom: 1px solid grey;
    height:40px;
    width:300px;
    margin-bottom: 5px;
}
.field:hover{
    background-color: darkgrey;
    
}
.field:focus{
    border: none;
    outline:none;
    transition-duration: 0.2s;
    background-color: rgb(158, 158, 158);
    border-radius: 3px;
}
.submit{
    text-align: center;
    background-color: #4CAF50;
    border-radius: 5px;
    width: 300px;
    height: 40px;
}
form{
    direction: rtl;
    width: 300px;
    margin-right: 50px;
    margin-left: 50px;
    padding-bottom: 20px;
    padding-top:20px;
}
.details{
    height:80px;
    resize:none;
}
.form-container{
    background-color: rgb(224, 221, 214);
    width:400px;
}
</style>