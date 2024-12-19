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
    background: #121212;
    color: white;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    overflow-y: auto;
  }

  .side-menu.open {
    transform: translateX(250px);
  }

  /* Ajuste a distância entre os itens de menu */
  .menu-item {
    padding: 12px; /* Reduzindo o padding para telas menores */
  }
}

@media (max-width: 480px) {
  .side-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background: #121212;
    color: white;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    overflow-y: auto;
  }

  .side-menu.open {
    transform: translateX(250px);
  }

  /* Ajuste maior na distância entre os itens de menu */
  .menu-item {
    padding: 10px; /* Ajuste o padding para telas ainda menores */
  }
}

</style>
