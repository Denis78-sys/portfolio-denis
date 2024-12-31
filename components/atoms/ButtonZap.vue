<template>
    <div class="button-zap">
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <i class="fa-brands fa-whatsapp"></i>
        <span class="text">Enviar via WhatsApp</span>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      const phoneNumber = "5562999856193"; // Substitua pelo seu número com código do país
      const message = "Olá! Gostaria de mais informações.";
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
  
      return { whatsappLink };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .button-zap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e63946;
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
      gap: 8px;
  
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #d62828;
      }
  
      .icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
  
      .text {
        display: block;
      }
    }
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .button {
      font-size: 0.9rem;
      padding: 10px 12px;
  
      .icon {
        width: 16px;
        height: 16px;
      }
  
      .text {
        display: none; /* Oculta o texto em telas menores */
      }
    }
  }
  
  @media (max-width: 480px) {
    .button {
      font-size: 0.8rem;
      padding: 8px 10px;
  
      .icon {
        width: 14px;
        height: 14px;
      }
  
      /* Ajuste o botão para ocupar a tela inteira */
      width: 100%;
      justify-content: center;
  
      .text {
        font-size: 0.8rem;
      }
    }
  }
  </style>
  