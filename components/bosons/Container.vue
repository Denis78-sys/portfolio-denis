<template>
    <div class="cont">
      <slot />
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
  /* Estilo base para o container */
  .cont {
    width: 100%; /* Por padrão ocupa 100% */
    max-width: 1200px; /* Largura máxima para telas maiores */
    margin: 0 auto; /* Centraliza horizontalmente */
    padding: 20px; /* Espaçamento interno */
  }
  
  /* Telas grandes (1440px e maiores) */
  @media (min-width: 1440px) {
    .cont {
      max-width: 1400px; /* Aumenta a largura máxima */
    }
  }
  
  /* Telas médias (1024px até 1439px) */
  @media (max-width: 1439px) and (min-width: 1024px) {
    .cont {
      max-width: 1024px; /* Ajusta largura para telas médias */
    }
  }
  
  /* Telas pequenas (768px até 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    .cont {
      max-width: 768px; /* Ajusta largura para tablets */
      padding: 15px; /* Reduz o espaçamento interno */
    }
  }
  
  /* Telas muito pequenas (até 767px) */
  @media (max-width: 767px) {
    .cont {
      max-width: 100%; /* Ocupa toda a largura */
      padding: 10px; /* Reduz o espaçamento interno */
    }
  }
  </style>
  