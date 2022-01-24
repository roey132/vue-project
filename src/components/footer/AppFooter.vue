<script setup>
import FooterLocation from "./FooterLocation.vue"
import FooterSocials from "./FooterSocials.vue"
import FooterAbout from "./FooterAbout.vue"

</script>

<template>
<div class="footer">
    <FooterLocation/>
    <FooterSocials/>
    <FooterAbout/>
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
    background-color: rgb(152,194,68);
    border-top: 0.5em solid rgb(116, 148, 51);
}

</style>
