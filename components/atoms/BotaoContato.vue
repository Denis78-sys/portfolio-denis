<template>
  <div class="botao-contato">
    <div>
      <a class="contato" href="">Entre em contato</a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* Botões */
.contato {
  color: #fff;
  padding: 17px 18px;
  border-radius: 5px;
  border: 2px solid #4a4a4a;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 1rem; /* Tamanho da fonte para os botões */
}

.contato:hover {
  background-color: #4a4a4a3f;
}

@media (max-width: 768px) {
  .contato {
    font-size: 0.9rem; /* Ajusta o tamanho da fonte do botão */
    padding: 6px 12px; /* Ajusta o padding do botão */
  }
}

@media (max-width: 480px) {
  .contato {
    font-size: 0.8rem; /* Ajusta o tamanho da fonte do botão */
    padding: 4px 10px; /* Ajusta o padding do botão */
  }
}
</style>
