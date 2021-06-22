<template>
  <div>
    <h1>Title: {{ this.title }}</h1>
    <p>Description: {{ this.description }}</p>
    <img :src="this.getImage()" alt="" />
    <router-link to="/">TERUG</router-link>
  </div>
</template>

<script>
import projectManager from "../projectManager.js";
export default {
  data: () => {
    return {
      projectManager: projectManager,
      title: "",
      description: "",
      image: "",
    };
  },
  mounted() {
    this.setProject();
  },
  methods: {
    setProject() {
      const id = this.$route.params.id;
      const project = projectManager.projects[id];
      this.title = project.title;
      this.description = project.description;
      this.image = project.image;
    },

    getImage() {
      if (this.image == "") return false;
      return require(`@/assets/${this.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: calc(100vh - 284px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
