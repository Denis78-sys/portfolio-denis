<template>
  <section >
    <Container class="about-section">

      <div class="about-content">
        <h2>Sobre mim</h2>
        <p>
          Formado em Análise e Desenvolvimento de Sistemas, desenvolvedor
          front-end com 2+ anos de experiência. Especializado em criar interfaces
          modernas, responsivas e otimizadas para performance.
        </p>
        <div class="button-wrapper">
          <ButtonCV> <i class="fas fa-download"></i> Download CV </ButtonCV>
        </div>
      </div>
      <div class="about-stats">
        <div class="stat-card">
          <h3>2+</h3>
          <p>Anos de experiência</p>
        </div>
        <div class="stat-card">
          <h3>8+</h3>
          <p>Projetos realizados</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
/* import ButtonCV from "@/components/atoms/ButtonCV.vue";

export default {
  components: {
    ButtonCV,
  },
}; */
</script>

<style scoped>
section{
  background-color: #181818;
}
.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 40px 0 40px 0;
  /* border-radius: 10px; */
  gap: 40px;
  flex-wrap: wrap;
 /*  width: 100%; */
}

.about-content {
  flex: 1;
  /* min-width: 300px; */
}

.about-content h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 10px;
}

.about-content p {
  color: #d1d5db;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
}

.button-wrapper {
  display: flex;
  justify-content: flex-start;
}

.about-stats {
  display: flex;
  gap: 20px;
  flex: 1;
  /* min-width: 300px; */
  width: 100%;
  justify-content: space-between;
}

.stat-card {
  background-color: #202020;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
 /*  max-width: 150px; */
}

.stat-card h3 {
  font-size: 2rem;
  color: #e63946;
  margin-bottom: 10px;
}

.stat-card p {
  font-size: 1rem;
  color: #d1d5db;
  
}

/* Responsividade */
@media (max-width: 1024px) {
  .about-section {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  /* .about-content {
    text-align: center;
  } */

  /* .button-wrapper {
    justify-content: center; 
  } */

  .about-stats {
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  .stat-card {
    width: 100%;
    flex: none;
    /* width: 140px; */ /* Ajusta o tamanho dos cards */
  }
}

@media (max-width: 480px) {
  .about-content p {
    font-size: 0.9rem;
  }

  .stat-card h3 {
    font-size: 1.5rem;
  }

  .stat-card p {
    font-size: 0.8rem;
  }

  .stat-card {
    width: 100%; /* Cards ocupam toda a largura */
    max-width: none;
  }
}
</style>
