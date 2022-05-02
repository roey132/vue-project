<script setup>

defineProps({
    category:String
})

</script>

<template>
<div>
    <router-link :to="category" custom v-slot="{ navigate, href }">
        <div class="see-more-button" :href="href" @click="navigate">..ראה עוד</div>
    </router-link>
</div>

</template>

<style scoped>
.see-more-button{
    width:4em;
    font-size: 1em;
    margin-left:8px;
}
</style>