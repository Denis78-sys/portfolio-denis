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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #121212;
  color: white;
  padding: 16px;
  width: 250px;
}
.dados-title {
  display: block;
}
.title {
  margin: 0;
}
p {
  font-size: small;
  color: #9ca3af;
}
h1 {
  font-size: 1.5em;
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
  .header {
    width: 100%;
  }
  .hamburger {
    display: block;
  }
  p {
    font-size: small;
  }
  h1 {
    font-size: 1.9em;
  }
}

@media (max-width: 480px) {
  .header {
    width: 100%;
  }
  .hamburger {
    display: block;
  }
  p {
    font-size: small;
  }
  h1 {
    font-size: 1.9em;
  }
}
</style>
