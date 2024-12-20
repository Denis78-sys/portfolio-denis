<template>
  <aside :class="{ open: isOpen }" class="side-menu">
    <ul>
      <li v-for="(link, index) in links" :key="index" class="menu-item">
        <a :href="link.href"> <i :class="link.icon"></i> {{ link.text }} </a>
      </li>
    </ul>
    <ButtonZap />
  </aside>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.side-menu {
 
  left: -250px;
  width: 250px;
  height: 100%;
  background: #121212;
  color: white;
  overflow-y: auto;
  z-index: 10;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 16px;
}

.menu-item a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1rem; /* Tamanho base da fonte para telas grandes */
}

.menu-item a i {
  margin-right: 8px;
}

/* Responsividade */
@media (max-width: 768px) {
  .side-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background: #121212f3;
    color: white;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    overflow-y: auto;
  }

  .side-menu.open {
    transform: translateX(250px);
  }

  /* Ajuste a distância entre os itens de menu */
  .menu-item a {
    font-size: 0.9rem; /* Reduz um pouco o tamanho da fonte */
  }

  .menu-item a i {
    margin-right: 6px; /* Ajusta o espaçamento para ícones */
  }
}

@media (max-width: 480px) {
  .side-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background: #121212f3;
    color: white;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    overflow-y: auto;
  }

  .side-menu.open {
    transform: translateX(250px);
  }

  /* Ajuste maior na distância entre os itens de menu */
  .menu-item a {
    font-size: 0.8rem; /* Fonte menor para telas pequenas */
  }

  .menu-item a i {
    margin-right: 5px; /* Espaçamento ainda menor para ícones */
  }
}

</style>
