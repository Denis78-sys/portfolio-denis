<template>
  <section>
    <Container class="skills-section">
      <h2 class="section-title">Habilidades</h2>
      <div class="skills-container">
        <div class="skills-group">
          <h3 class="group-title">Frontend</h3>
          <SkillBar
            v-for="(skill, index) in frontendSkills"
            :key="index"
            :name="skill.name"
            :percentage="skill.percentage"
          />
        </div>
        <div class="skills-group">
          <h3 class="group-title">Ferramentas</h3>
          <SkillBar
            v-for="(skill, index) in toolsSkills"
            :key="index"
            :name="skill.name"
            :percentage="skill.percentage"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      frontendSkills: [
        { name: "HTML & CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "Nuxt.js", percentage: 85 },
        { name: "Tailwind CSS", percentage: 80 },
      ],
      toolsSkills: [
        { name: "Git & GitHub", percentage: 90 },
        { name: "Figma", percentage: 85 },
        { name: "VS Code", percentage: 95 },
        { name: "IA Generativa", percentage: 85 },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background-color: #1a1a1a;
}
.skills-section {
  padding: 40px 0 40px 0;
  color: #fff;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 24px;
  /*  text-align: center; */
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.skills-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-title {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
</style>
