<script setup>

defineProps({
    image:String,
})
const emit = defineEmits(['close-modal'])

</script>

<template>
<div class="modal" @click.self="emit('close-modal')">
    <div class="modal-content">
        <img class="image" :src="'/gallery/'+image">
    </div>
</div>
</template>

<style scoped>
.modal {
    display:none;
    position: fixed;
    padding-top: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
    display:block !important;
}

.modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    width: 1000px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.95);
    border-radius: 10px;
}

.image{
    height:600px;
    width:960px;
    object-fit: contain;
}
</style>