<template>
  <section class="project-list">
    <h2 class="section-title">Projetos em Destaque</h2>
    <div class="cards-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :codeLink="project.codeLink"
        :liveLink="project.liveLink"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: require("@/assets/images/projetos/info-filmes.png"),
          title: "Info-Filmes",
          description:
            "Info-filmes: Um site dedicado aos amantes de cinema, que oferece informações detalhadas sobre filmes e séries.",
          tags: ["Vue.js", "CSS", "API Rest"],
          codeLink: "https://github.com/Denis78-sys/Info-Filmes",
          liveLink: "https://info-filmes-opal.vercel.app/",
        },
        {
          image: require("@/assets/images/projetos/site-lukasegabriell.png"),
          title: "Lukas & Gabriell",
          description:
            "Site Lukas e Gabriell: Um site desenvolvido para artistas, destacando a trajetória e o trabalho da dupla, com informações sobre shows, músicas e videoclipes.",
          tags: ["Vue.js", "API", "MongoDB", "JWT"],
          /* codeLink: 'https://github.com/seuprojeto2', */
          liveLink: "https://lukasegabriell.vercel.app/",
        },
        {
          image: require("@/assets/images/projetos/dm-imoveis.png"),
          title: "DM Imóveis",
          description:
            "DM-Imóveis: Um site criado como projeto de estudo em desenvolvimento web, focado na apresentação de imóveis de forma prática e intuitiva.",
          tags: ["Vue.js", "Tailwind css"],
          codeLink: "https://github.com/Denis78-sys/dm-imoveis",
          liveLink: "https://dm-imoveis.vercel.app/",
        },
        {
          image: require("@/assets/images/projetos/tech-hub-solutions.png"),
          title: "Tech-Hub Solutions",
          description:
            "Tech-Hub Solutions: Um projeto de estudo que simula uma empresa de tecnologia, destacando serviços inovadores e soluções digitais.",
          tags: ["Vue.js", "Tailwind css"],
          codeLink: "https://github.com/Denis78-sys/tech-hub-solutions",
          liveLink: "https://tech-hub-solutions.vercel.app/",
        },
        {
          image: require("@/assets/images/projetos/cordel.png"),
          title: "Cordel Moderno",
          description:
            "Cordel Moderno: Um projeto de estudo desenvolvido no Curso em vídeo do professor Guanabara",
          tags: ["Vue.js", "HTML", "CSS", "Responsividade"],
          codeLink: "https://github.com/Denis78-sys/projeto-cordel",
          liveLink: "https://denis78-sys.github.io/projeto-cordel/",
        },
        {
          image: require("@/assets/images/projetos/formulario-crud.png"),
          title: "Formulário CRUD",
          description:
            "Formulário CRUD: Um projeto de estudo em desenvolvimento que integra um formulário de CRUD com uma API própria, explorando manipulação de dados e conexões eficientes.",
          tags: ["Vue.js", "API", "MongoDB"],
          codeLink: "https://github.com/Denis78-sys/formulario-api-users",
          liveLink: "https://formulario-api-users.vercel.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-list {
  padding: 32px;
  background-color: #2b2b2b;
}

.section-title {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 24px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
</style>
