<template>
    <button class="button-cv" @click="onClick">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      onClick: {
        type: Function,
        default: () => {},
      },
    },
    methods: {
    onClick() {
      // Aqui, você pode adicionar o link para o arquivo PDF
      const curriculoUrl = '/Profile Denis Marques.pdf'; // Caminho do arquivo PDF na pasta 'static'
      const link = document.createElement('a');
      link.href = curriculoUrl;
      link.download = 'Profile Denis Marques.pdf'; // Nome do arquivo ao fazer o download
      link.click();
    },
  },
  };
  </script>
  
  <style scoped>
  .button-cv {
    background-color: #e63946;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .button-cv:hover {
    background-color: #d62828;
  }
  </style>
  