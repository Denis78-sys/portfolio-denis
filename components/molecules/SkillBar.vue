<template>
    <div class="skill-bar">
      <div class="skill-info">
        <span class="skill-name">{{ name }}</span>
        <span class="skill-percentage">{{ percentage }}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .skill-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  
  .skill-name {
    color: #fff;
  }
  
  .skill-percentage {
    color: #e63946;
  }
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #444;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #e63946;
    transition: width 0.3s ease;
  }
  </style>
  