<template>
    <button class="button-styled" @click="$emit('Hello')"><slot/>  botão estilizado <span>TESTE</span></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoepd>
    .button-styled {
    color: #fff;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    margin-bottom: 1rem;
    background-color: #2d6cea;
    }
</style>