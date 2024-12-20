<template>
  <header class="header">
    <div class="dados-title">
      <h1 class="title">{{ title }}</h1>
      <p>Front-end Developer</p>
    </div>
    <button class="hamburger" @click="$emit('toggleMenu')">
      <i class="fas fa-bars"></i>
      <!-- Ícone de hamburguer -->
    </button>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos Gerais */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #121212;
  color: white;
  padding: 16px;
}

.dados-title {
  display: block;
}

.title {
  margin: 0;
  font-size: clamp(1.5rem, 2.5vw, 2rem); /* Tamanho responsivo do título */
}

p {
  font-size: clamp(
    0.9rem,
    2vw,
    1rem
  ); /* Tamanho responsivo do texto secundário */
  color: #9ca3af;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.hamburger:focus {
  outline: none;
}

/* Responsividade */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* Mostra o botão hamburger em telas menores */
  }
}

@media (max-width: 480px) {
  /* Estilo adicional caso necessário para telas muito pequenas */
}
</style>