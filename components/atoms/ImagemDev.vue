<template>
    <div class="imagem-dev">
      <img class="foto" src="@/assets/images/dev.jpg" alt="Foto">
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      return {};
    }
  };
  </script>
  
  <style scoped>
  .foto {
    width: 100%;
    max-width: 384px; /* Tamanho máximo em telas maiores */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 50%;
    border: 2px solid #D61C1C;
    margin: 0 auto; /* Centraliza a imagem */
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .foto {
      max-width: 140px; /* Ajuste para telas médias */
    }
  }
  
  @media (max-width: 480px) {
    .foto {
      max-width: 115px; /* Ajuste para telas pequenas */
    }
  }
  </style>
  