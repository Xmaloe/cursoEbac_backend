<script setup>
  const nome = "Karen Aprigio"
  const Botao = true
  const Emoji = "https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_1280.jpg"
  const Cafe = "https://cdn.pixabay.com/photo/2024/04/08/19/54/coffee-8684315_1280.jpg"
  const gostaEmoji = false;
  const gostaCafe = false;

  const Autorizado = true;

</script>

<template>
  <div class="container">
    <h1>{{ nome }}</h1>
    <button :disabled="Botao">Entratr em contato</button>

    <img v-if="gostaEmoji" :src="Emoji">
    <img v-else-if="gostaCafe" :src="Cafe">

    <h2 v-else>Não curte heróis da DC</h2>

    <h3 v-if="Autorizado">Bem- vinda</h3>
    <h4 v-else>Não possui acesso</h4>
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
