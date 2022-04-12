<script setup>

const emit = defineEmits(['see-more'])

</script>

<template>
    <div class='see-more-button' @click="emit('see-more')">..ראה עוד</div>
</template>

<style scoped>
.see-more-button{
    font-size: 1em;
    margin-left:8px;
}
</style>