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
    width: calc(100% - 40px); /* Reduz a largura total para deixar uma margem fixa */
    max-width: 1200px; /* Largura máxima para telas maiores */
    margin: 0 auto; /* Centraliza o container horizontalmente */
    /* padding: 40px; */ /* Espaçamento interno */
   /*  border: 1px solid red; */ /* Apenas para visualização */
  }
  
  /* Telas grandes (1440px e maiores) */
  @media (min-width: 1440px) {
    .cont {
      max-width: 1400px; /* Aumenta a largura máxima */
      width: calc(100% - 60px); /* Ajusta a margem para telas maiores */
    }
  }
  
  /* Telas médias (1024px até 1439px) */
  @media (max-width: 1439px) and (min-width: 1024px) {
    .cont {
      max-width: 1024px; /* Ajusta largura para telas médias */
      width: calc(100% - 40px); /* Mantém uma margem menor */
    }
  }
  
  /* Telas pequenas (768px até 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) {
    .cont {
      max-width: 768px; /* Ajusta largura para tablets */
      width: calc(100% - 40px); /* Reduz a margem */
      /* padding: 15px; */ /* Ajusta o espaçamento interno */
    }
  }
  
  /* Telas muito pequenas (até 767px) */
  @media (max-width: 767px) {
    .cont {
      max-width: 100%; /* Ocupa toda a largura disponível */
      width: calc(100% - 40px); /* Mantém uma margem fixa pequena */
      /* padding: 10px; */ /* Reduz o espaçamento interno */
    }
  }
  </style>
  