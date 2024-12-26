<template>
  <div class="apresentacao">
    <div class="greeting"><span class="wave">👋</span> Olá, eu sou</div>
    <h1 class="nome">Denis Marques</h1>
    <p class="dev">Desenvolvedor Front-end</p>
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
.apresentacao {
  display: block;
  gap: 12px;
}

.nome {
  font-size: clamp(2.5rem, 5vw, 3.75rem); /* Título principal responsivo */
  /* text-align: center; */
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

