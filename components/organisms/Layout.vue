<template>
  <div>
    <Header title="Denis Marques" @toggleMenu="toggleMenu" />
    <SideMenu :isOpen="menuOpen" :links="links" />
    <!--  <main>
        <slot />
      </main> -->
    <main>
      <BotaoProjetos />
      <BotaoContato />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      links: [
        { href: "#", text: "Início", icon: "fas fa-home" },
        { href: "#", text: "Sobre Mim", icon: "fas fa-user" },
        { href: "#", text: "O que eu faço", icon: "fas fa-code" },
        { href: "#", text: "Contato", icon: "fas fa-envelope" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
main {
  padding: 16px;
}
</style>
