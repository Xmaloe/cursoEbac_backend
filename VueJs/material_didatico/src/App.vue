<script setup>
  const nome = "Karen Aprigio"
  const Botao = true
  const Imagem = "https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_1280.jpg"
</script>

<template>
  <h1>{{ nome }}</h1>
  <button :disabled="Botao">Entratr em contato</button>
  <img :src="Imagem">
</template>

<style scoped>

</style>
