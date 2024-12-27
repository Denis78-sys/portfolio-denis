<template>
  <div class="imagem-dev">
    <img class="foto" src="@/assets/images/dev.jpg" alt="Foto do Desenvolvedor">
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
/* Estilo da imagem */
.foto {
  width: 100%; /* Garante que a imagem se ajuste ao contêiner */
  max-width: 284px; /* Define um tamanho máximo em telas maiores */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 50%; /* Deixa a imagem circular */
  border: 3px solid #D61C1C; /* Adiciona borda */
  margin: 0 auto; /* Centraliza a imagem */
  display: block; /* Garante alinhamento adequado */
}

/* Responsividade para telas médias */
@media (max-width: 768px) {
  .foto {
    max-width: 180px; /* Reduz tamanho máximo */
  }
}

/* Responsividade para telas pequenas */
@media (max-width: 480px) {
  .foto {
    max-width: 120px; /* Reduz tamanho máximo ainda mais */
  }
}

/* Ajuste para telas muito pequenas */
@media (max-width: 320px) {
  .foto {
    max-width: 100px; /* Reduz ainda mais para dispositivos muito pequenos */
  }
}
</style>
