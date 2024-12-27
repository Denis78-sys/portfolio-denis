<template>
  <div class="apresentacao">
    <div class="greeting"><span class="wave">👋</span> Olá, eu sou</div>
    <h1 class="nome">
      Denis Marques
      <!-- Letra fixa + texto dinâmico + cursor -->
    </h1>
    <p class="dev">{{ fixedLetter }}<span>{{ typedName }}</span><span class="cursor"></span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "esenvolvedor Front-end", // Texto dinâmico (sem a letra "D")
      fixedLetter: "D", // Letra fixa
      typedName: "", // Parte "digitada" dinamicamente
      isDeleting: false, // Controla se o texto está sendo apagado
      typingSpeed: 200, // Velocidade de digitação (ms)
      deletingSpeed: 100, // Velocidade de apagamento (ms)
    };
  },
  mounted() {
    this.loopTyping(); // Inicia o efeito ao montar o componente
  },
  methods: {
    /**
     * Loop que alterna entre digitar e apagar
     */
    loopTyping() {
      const length = this.typedName.length;

      if (!this.isDeleting && length < this.fullName.length) {
        // Adiciona uma letra por vez
        this.typedName += this.fullName.charAt(length);
        setTimeout(this.loopTyping, this.typingSpeed);
      } else if (this.isDeleting && length > 0) {
        // Remove uma letra por vez
        this.typedName = this.typedName.slice(0, -1);
        setTimeout(this.loopTyping, this.deletingSpeed);
      } else {
        // Alterna entre digitar e apagar
        this.isDeleting = !this.isDeleting;
        setTimeout(this.loopTyping, 1000); // Pausa antes de recomeçar
      }
    },
  },
};
</script>

<style scoped>
.apresentacao {
  display: block;
  gap: 12px;
}

.nome {
  font-size: clamp(2.5rem, 5vw, 3.75rem); /* Título principal responsivo */
  /* text-align: center; */
  overflow: hidden; /* Oculta o texto não "digitado" */
  /* border-right: 2px solid #d61c1c; */ /* Adiciona o cursor */
  animation: blink-caret 0.9s step-end infinite; /* Pisca mais lentamente */
}
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: #faf9f9;
  animation: blink-caret 0.9s step-end infinite;
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #d61c1c;
  }
}
.greeting {
  font-size: clamp(1rem, 2.5vw, 1.3rem); /* Saudação responsiva */
  color: #9ca3af;
  /* text-align: center; */
}

.wave {
  animation: wave 1s infinite;
  display: inline-block;
}

.dev {
  font-size: clamp(1rem, 3vw, 1.87rem); /* Texto de descrição responsivo */
  color: #d61c1c;
  /* text-align: center; */
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media (max-width: 1024px) {
  .greeting {
    text-align: center;
  }
}
/* Ajuste para telas menores */
@media (max-width: 768px) {
  .apresentacao {
    gap: 9px;
  }
  .greeting {
    text-align: center;
  }
  .nome{
    text-align: center;
  }
  .dev{
    text-align: center;
  }
}

@media (max-width: 480px) {
  .apresentacao {
    gap: 8px;
  }
  .greeting {
    text-align: center;
  }
  .nome{
    text-align: center;
  }
  .dev{
    text-align: center;
  }
}
</style>

