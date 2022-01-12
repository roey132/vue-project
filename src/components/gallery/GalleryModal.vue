<script setup>
import { ref } from 'vue';


const modalBool= ref(false)

function closeModal(){
    modalBool.value=false
}
function openModal(){
    modalBool.value=true
}

defineProps({
    image:String
})

</script>

<template>
<button @click="openModal()">test</button>
<div class="modal" :class="{open: modalBool}" @click="closeModal()">
    <div class="modal-content">
        <img :src="'/gallery/'+image">
    </div>
</div>
</template>

<style scoped>
.modal {
    display:none;
    position: fixed;
    z-index: 1;
    padding-top: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}
.open{
    display:block !important;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 1000px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>