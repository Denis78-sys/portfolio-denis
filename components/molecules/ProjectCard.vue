<template>
    <div class="project-card">
      <img :src="image" alt="Project Image" class="project-image" />
      <div class="project-content">
        <h3 class="project-title">{{ title }}</h3>
        <p class="project-description">{{ description }}</p>
        <div class="project-tags">
          <span v-for="(tag, index) in tags" :key="index" class="project-tag">
            {{ tag }}
          </span>
        </div>
        <div class="project-links">
          <a :href="codeLink" target="_blank" class="project-link">Ver código</a>
          <a :href="liveLink" target="_blank" class="project-link">Ver online</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        default: () => [],
      },
      codeLink: {
        type: String,
        required: true,
      },
      liveLink: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    background-color: #1f1f1f;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
  }
  
  .project-card:hover {
    transform: scale(1.03);
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .project-content {
    padding: 16px;
  }
  
  .project-title {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
  
  .project-description {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .project-tag {
    background-color: #333;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .project-links {
    display: flex;
    gap: 16px;
  }
  
  .project-link {
    color: #e63946;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;
  }
  
  .project-link:hover {
    color: #d62828;
  }
  </style>
  