<script setup>

defineProps({
    image:Object,
})
const emit = defineEmits(['close-modal', 'swap-left', 'swap-right'])

</script>

<template>

<div class="modal" @click.self="emit('close-modal')">
    <div class="modal-content">
        <div class="right-arrow" @click="emit('swap-right')"><div class="arrow"></div></div>
        <div class="left-arrow" @click="emit('swap-left')"><div class="arrow left"></div></div>
        <img class="image" :src="'/gallery/'+image['link']">
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
    transition-duration: 2s;
}

.modal-content {
    background-color: #fefefe;
    width: 1000px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.95);
}

.image{
    height:600px;
    width:1000px;
    object-fit: contain;
}
.right-arrow{
    display:flex;
    position: absolute;
    width:70px;
    height:100%;
    background-color: rgba(0, 0, 0, 0.75);
    left:1000px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.left-arrow{
    display:flex;
    position: absolute;
    width:70px;
    margin-right:950px;
    height:100%;
    left:-70px;
    justify-content: center;
    align-items:center;
    background-color: rgba(0, 0, 0, 0.75);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.arrow{
    width:30px;
    height:30px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}
.left{
    transform:rotate(225deg);
}
</style>