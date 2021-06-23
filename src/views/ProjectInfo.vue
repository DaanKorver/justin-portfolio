<template>
  <div>
    <section id="projectInfoTitle">
      <p class="project-info-subtitle">{{ this.subtitle }}</p>
      <h3 class="project-info-heading">{{ this.title }}</h3>
    </section>
    <section id="projectInfoMockup">
      <img :src="this.getImage()" alt="" />
    </section>
    <section id="projectDescription">
      <p class="project-info-subtitle">{{ this.description }}</p>
    </section>
    <div class="cta-container">
      <router-link to="/" class="cta">Return Home</router-link>
      <router-link to="/" class="cta">Next Project</router-link>
    </div>
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
      this.subtitle = project.subtitle;
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
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/base/_global.scss";
@import "@/scss/base/_typography.scss";

div {
  @include flexCenter;
  width: 100%;
  height: 100%;
  #projectInfoTitle {
    height: 85vh;
    @include flexCenter;
    flex-direction: column;
  }

  #projectInfoMockup {
    height: 100vh;
    width: 100%;
    max-width: 1660px;
    border-radius: 10px;
    background: $workBackground;
  }

  #projectDescription {
    height: auto;
    padding: 1.5em;
    max-width: 1660px;
  }

  .cta-container {
    @include flexCenter;
    flex-direction: row;
    margin: 2em;
    .cta {
      color: $primary;
      margin: 2em;
    }
  }
}
</style>
