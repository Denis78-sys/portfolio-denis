<template>
    <section class="skills-section">
      <h2 class="section-title">Habilidades</h2>
      <div class="skills-container">
        <div class="skills-group">
          <h3 class="group-title">Frontend</h3>
          <SkillBar v-for="(skill, index) in frontendSkills" :key="index" :name="skill.name" :percentage="skill.percentage" />
        </div>
        <div class="skills-group">
          <h3 class="group-title">Ferramentas</h3>
          <SkillBar v-for="(skill, index) in toolsSkills" :key="index" :name="skill.name" :percentage="skill.percentage" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
 
  
  export default {
    
    data() {
      return {
        frontendSkills: [
          { name: 'HTML & CSS', percentage: 95 },
          { name: 'JavaScript', percentage: 90 },
          { name: 'Nuxt.js', percentage: 85 },
        ],
        toolsSkills: [
          { name: 'Git & GitHub', percentage: 90 },
          { name: 'Figma', percentage: 85 },
          { name: 'VS Code', percentage: 95 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills-section {
    padding: 32px;
    background-color: #1A1A1A;
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
    gap: 32px;
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
  