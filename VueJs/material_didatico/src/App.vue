<script setup>
  const nome = "Karen Aprigio"
  const Botao = true
  const Imagem = "https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_1280.jpg"

  const gostaDaImg = false;

</script>

<template>
  <div class="container">
    <h1>{{ nome }}</h1>
    <button :disabled="Botao">Entratr em contato</button>
    <img v-if="gostaDaImg" :src="Imagem">
  </div>
</template>

<style scoped>
  template {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  button {
    margin-top: 16px;
    padding: 20px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 12px;
  }

  img {
    margin-top: 12px;
    width: 40%;
  }
</style>
