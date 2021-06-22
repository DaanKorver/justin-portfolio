<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/base/_global.scss";
@import "@/scss/base/_typography.scss";
div {
  display: flex;
  flex-direction: column;
}
</style>
