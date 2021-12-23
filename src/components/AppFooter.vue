<script setup>
import FooterLocation from "./FooterLocation.vue"
import FooterSocials from "./FooterSocials.vue"
</script>

<template>
<div class="footer">
    <FooterLocation/>
    <FooterSocials/>

    
    <div class="about">
        <h1>
            קצת עלינו
        </h1>
        <p>
            דברים שמספרים קצת עלינו
        </p>
    </div>
</div>
</template>

<style scoped>
h1, p{
    text-align: center;
}
h1{
    font-size: 1.5em;
}
.footer{
    display:flex;
    justify-content: space-around;
    height:12em;
    padding-top: 2em;
    background-color: rgb(167, 212, 75);
    border-top: 0.5em solid rgb(116, 148, 51);
}

.about{
    width:30%;
    display:flex;
    flex-direction: column;
}
</style>
