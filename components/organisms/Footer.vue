<template>
    <footer>
      <Container class="footer">
        <div class="footer-content">
          <p>© 2025 Denis Marques | Todos os direitos reservados.</p>
          <div class="social-icons">
            <a href="https://github.com" target="_blank" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #121212;
  }
  
  .footer {
    color: #ecf0f1;
    padding: 1.5rem 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  .social-icons a {
    color: #ecf0f1;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #9ca3af;
  }
  @media (max-width: 1024px){
    .footer-content {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  
    .social-icons {
      margin-top: 1rem;
    }
  }
  /* Responsividade para telas pequenas */
  /* @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  
    .social-icons {
      margin-top: 1rem;
    }
  } */
  </style>
  