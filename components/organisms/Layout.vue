<template>
  <div class="layout">
    <div>
      <Header title="Denis Marques" @toggleMenu="toggleMenu" />
      <SideMenu :isOpen="menuOpen" :links="links" />
    </div>
    <main class="container">
      <div class="main-apresentacao">
        <Apresentacao />
        <!-- <div class="especializacao">
              <p>
                Especializado em criar experiências digitais excepcionais com foco em
                design moderno e performance.
              </p>
            </div> -->
        <BotoesInicio />
      </div>
      <ImagemDev />
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
.layout {
  display: flex;
  /* height: 100vh; */ /* Preenche a altura total da janela */
}

/* Define o layout principal */
/* Estilo do menu lateral */
.SideMenu {
  width: 250px; /* Largura fixa para o menu */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra */
  transition: transform 0.3s ease-in-out; /* Suaviza o abrir/fechar */
}

/* Estilo do conteúdo principal */
main {
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  gap: 20px;
  background-color: #252627;
  height: 100%;
  padding: 20px;
}

.main-apresentacao {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.imagem-dev {
  order: 0; /* Ordem padrão */
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
  main {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 15px; /* Reduzido ainda mais o espaçamento interno */
    gap: 20px; /* Reduzido o espaço entre os elementos */
  }

  .main-apresentacao {
    align-items: center;
    gap: 8px; /* Menor espaço entre os itens */
  }

  .imagem-dev {
    order: -1; /* Move a imagem para o início */
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
  main {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 15px; /* Reduzido ainda mais o espaçamento interno */
    gap: 20px; /* Reduzido o espaço entre os elementos */
  }

  .main-apresentacao {
    align-items: center;
    gap: 8px; /* Menor espaço entre os itens */
  }

  .imagem-dev {
    order: -1; /* Move a imagem para o início */
  }

  
}
</style>
