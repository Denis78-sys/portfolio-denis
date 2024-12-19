<template>
  <div class="botoes-inicio">
    <div class="botoes">
      <BotaoProjetos />
      <BotaoContato />
    </div>
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
.botoes {
  display: flex;
  gap: 16px;
}
@media (max-width: 768px) {
  .botoes {
    gap: 8px;
    align-content: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .botoes {
    gap: 8px;
    align-content: center;
    justify-content: center;
  }
}
</style>
