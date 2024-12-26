<template>
  <div class="layout">
    <div>
      <Header title="Denis Marques" @toggleMenu="toggleMenu" />
      <SideMenu :isOpen="menuOpen" :links="links" />
    </div>
    <main>
      <Container class="cont">
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
      </Container>
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
  display: flex; /* Coloca side-menu e main lado a lado */
  height: 100vh; /* Ocupa toda a altura da tela */
  overflow: hidden; /* Evita scroll no contêiner principal */
}

/* Menu lateral */
.SideMenu {
  position: sticky;
}

/* Estilo principal */
main {
  width: 100%;
  /* display: flex; */
  flex: 1; /* Ocupa o espaço restante */
  overflow-y: auto; /* Permite rolar o conteúdo do main */

  gap: 20px;
  /* padding: 20px; */
  background-color: #252627;
  /* padding: 4%; */
  height: auto;
  /*  z-index: 10; */
}
.cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-apresentacao {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 150px;
  margin-bottom: 150px;
}

.imagem-dev {
  order: 0;
  width: 300px;
  height: auto;
  border-radius: 50%;
}

.especializacao {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 391px;
}

p {
  font-size: 1.2rem;
  color: #d1d5db;
  /* text-align: center; */
  line-height: 1.5;
}

@media (max-width: 1440px) {
  /* Telas grandes (até 1440px) */
  .cont {
    gap: 16px;
  }
  .main-apresentacao {
    gap: 16px;
  }
  .imagem-dev {
    margin-top: 80px;
    /* order: -1; */
  }
}

@media (max-width: 1024px) {
  /* Telas médias (até 1024px) */
  /* .layout {
    display: block;
  } */
  .side-menu {
    position: fixed;
    height: 100vh;
    /* top: 0;
    left: 0; */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .cont {
    flex-direction: column;
  }


  .main-apresentacao {
    align-items: center;
    /* gap: 12px; */
    margin-top: 70px;
    margin-bottom: 70px;
  }
  .imagem-dev {
    margin-top: 80px;
    order: -1;
  }
}
/* Tela média */
@media (max-width: 768px) {
  .layout {
    display: block;
  }
  
  .cont {
    display: flex;
    flex-direction: column;
    text-align: center;
    /* gap: 20px; */
    /* padding: 2%; */
  }

  .main-apresentacao {
    align-items: center;
    margin-top: 36px;
    margin-bottom: 36px;
  }

  .imagem-dev {
    margin-top: 36px;
    order: -1;
    width: 200px;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }
}

/* Tela pequena */
@media (max-width: 480px) {
  .layout {
    display: block;
  }

  main {
    padding: 1%;
    gap: 10px;
  }

  .imagem-dev {
    width: 150px;
  }

  p {
    text-align: center;
    font-size: 0.9rem;
  }
}

@media (max-width: 320px) {
  /* Telas muito pequenas (até 320px) */
  .layout {
    display: block;
    font-size: 0.7em;
  }
  p {
    font-size: 0.7em;
  }
  .especializacao {
    width: 70%;
    justify-content: center;
  }
  .cont {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 6px;
  }

  .main-apresentacao {
    align-items: center;
    gap: 4px;
  }

  .imagem-dev {
    order: -1; /* Move a imagem para o início */
    width: 100px; /* Redimensiona a imagem */
    height: 100px;
  }
}
</style>
