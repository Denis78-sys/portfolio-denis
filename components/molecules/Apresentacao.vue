<template>
  <div class="apresentacao">
    <div class="greeting"><span class="wave">👋</span> Olá, eu sou</div>
    <h1>Denis Marques</h1>
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
h1 {
  font-size: 3.75em;
}
.greeting {
  font-size: 1.3rem;
  /* text-align: center; */
  color: #9ca3af;
}
.wave {
  animation: wave 1s infinite;
  display: inline-block;
}
.dev {
  font-size: 1.87rem;
  color: #d61c1c;
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

/* Responsividade */
@media (max-width: 768px) {
  h1 {
    font-size: 1.50em;
    text-align: center;
  }
  .greeting {
    font-size: 1rem;
    text-align: center;
    color: #9ca3af;
  }
  .dev {
    font-size: 0.8rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.50em;
    text-align: center;
  }
  .greeting {
    font-size: 1rem;
    text-align: center;
  }
  .dev {
    font-size: 0.8rem;
    text-align: center;
  }
}
</style>
