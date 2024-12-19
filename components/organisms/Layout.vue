<template>
  <div class="layout">
    <div>
      <Header title="Denis Marques" @toggleMenu="toggleMenu" />
      <SideMenu :isOpen="menuOpen" :links="links" />
    </div>
    <main>
      <Apresentacao />
      <!-- <div class="especializacao">
        <p>
          Especializado em criar experiências digitais excepcionais com foco em
          design moderno e performance.
        </p>
      </div> -->
      <BotoesInicio />
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      links: [
        { href: "#", text: "Início", icon: "fas fa-home" },
        { href: "#", text: "Sobre Mim", icon: "fas fa-user" },
        { href: "#", text: "O que eu faço", icon: "fas fa-code" },
        { href: "#", text: "Contato", icon: "fas fa-envelope" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
main {
  padding: 16px;

  background-color: #252627;
}

/* Define o layout principal */
.layout {
  display: flex;
  height: 100vh; /* Preenche a altura total da janela */
}

/* Estilo do menu lateral */
.SideMenu {
  width: 250px; /* Largura fixa para o menu */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra */
  transition: transform 0.3s ease-in-out; /* Suaviza o abrir/fechar */
}

/* Estilo do conteúdo principal */
main {
  flex: 1; /* Ocupa todo o espaço restante */
  padding: 16px; /* Espaçamento interno */
  overflow-y: auto; /* Permite rolagem caso o conteúdo exceda a altura */
}
.especializacao {
  display: flex;
  width: 40%;
}
p {
  font-size: 1em;
  color: #d1d5db;
  /* text-align: justify; */
  line-height: normal;
}
@media (max-width: 768px) {
  .layout {
    display: block;
  }
  p {
    font-size: 0.8em;
  }
  .especializacao {
    width: 40%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .layout {
    display: block;
    font-size: 0.7em;
  }
  p {
    font-size: 0.8em;
  }
  .especializacao {
    width: 40%;
    justify-content: center;
  }
}
</style>
