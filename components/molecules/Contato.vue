<template>
  <section >
    <Container class="contato">
      <div class="formulario">
        <h2>Entre em Contato</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              id="nome"
              v-model="form.nome"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div class="form-group">
            <label for="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              v-model="form.mensagem"
              rows="4"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
          </div>

          <button type="submit" class="botao">Enviar Mensagem</button>
        </form>
      </div>

      <div class="informacoes">
        <h3>Informações de Contato</h3>
        <p>
          Estou disponível para freelance. Entre em contato comigo através de
          qualquer um dos canais abaixo.
        </p>
        <ul>
          <li><i class="fas fa-envelope"></i> devdml@gmail.com</li>
          <li><i class="fab fa-whatsapp"></i> +55 (62) 99985-6193</li>
          <li><i class="fab fa-linkedin"></i> linkedin.com/in/denis-marques-771255105</li>
          <li><i class="fab fa-github"></i> github.com/Denis78-sys</li>
        </ul>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  name: "Contato",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        mensagem: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.form.nome || !this.form.email || !this.form.mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
      console.log("Formulário enviado:", this.form);
      alert("Mensagem enviada com sucesso!");
      this.form.nome = "";
      this.form.email = "";
      this.form.mensagem = "";
    },
  },
};
</script>

<style scoped>
/* Layout principal */
/* section{
  background-color: #1e1e1e;
} */
.contato {
  display: flex;
  justify-content: space-between;
  gap: 40px; /* Espaçamento maior entre as colunas */
  padding: 40px 0 40px 0; /* Aumentei o padding para um espaçamento geral */
  
  color: #fff;
}

/* Estilos do formulário */
.formulario {
  flex: 1;
}

.formulario h2 {
  font-size: 2rem;
  margin-bottom: 30px; /* Mais espaço abaixo do título */
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaçamento maior entre os grupos de campos */
}
p {
  color: #9ca3af;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px; /* Espaçamento menor entre label e input */
}

input,
textarea {
  width: 100%;
  padding: 12px; /* Aumentei o padding para mais conforto visual */
  border: none;
  border-radius: 5px;
  background-color: #2b2b2b;
  color: #fff;
}

input::placeholder,
textarea::placeholder {
  color: #999;
}

.botao {
  margin-top: 20px; /* Espaçamento extra acima do botão */
  padding: 12px 18px;
  background-color: #e63946;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.botao:hover {
  background-color: #d62828;
}

/* Estilos das informações de contato */
.informacoes {
  flex: 1;
}

.informacoes h3 {
  font-size: 1.8rem;
  margin-bottom: 20px; /* Mais espaço abaixo do título */
}

.informacoes p {
  margin-bottom: 25px; /* Espaçamento maior abaixo do parágrafo */
  line-height: 1.6; /* Melhor leitura do texto */
}

.informacoes ul {
  list-style: none;
  padding: 0;
}

.informacoes li {
  display: flex;
  align-items: center;
  gap: 15px; /* Espaçamento maior entre ícone e texto */
  margin-bottom: 15px; /* Espaçamento maior entre os itens da lista */
}

.informacoes i {
  color: #e63946;
}

/* Responsividade */
@media (max-width: 768px) {
  .contato {
    flex-direction: column;
    gap: 30px; /* Ajuste do espaçamento para telas menores */
  }
  .formulario,
  .informacoes {
    flex: none;
    width: 100%;
  }
}
</style>
