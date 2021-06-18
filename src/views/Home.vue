<template>
  <body>
    <section id="home">
      <div class="sub-hero-container">
        <h3 class="hero__subtitle">Hi, I'm Justin 👋</h3>
      </div>
      <h1 class="hero__title">
        Building digital <br />
        products, brands and <br />
        experience.
      </h1>
      <button class="cta">CONNECT WITH ME</button>
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </section>
    <section id="work">
      <div class="container-text">
        <h3 class="work-title">Work</h3>
        <p class="work-subtitle">Some of my work made with passion.</p>
      </div>
      <div class="work-container-top">
        <div class="work-1 work">
          <video src="../assets/work_1.mp4" type="video/mp4" autoplay muted></video>
        </div>
        <div class="work-2 work"></div>
      </div>
    </section>
  </body>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gsap from "gsap";

export default class Home extends Vue {}
</script>

<style lang="scss">
@import "@/scss/base/_typography.scss";
@import "@/scss/components/_buttons.scss";
@import "@/scss/abstracts/_variables.scss";

#home {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .image-container {
    width: 30%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25em;

    img {
      border-radius: 50%;
      background: $tertiary;
      max-width: 90%;
      max-height: 90%;
    }
  }

  .sub-hero-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .hero__subtitle {
      margin: 0 0.5em;
    }
  }

  .hero__title {
    margin-top: 0.4em;
  }

  .hero__text {
    margin-top: 1em;
  }

  .cta {
    margin-top: 2em;
  }
}

#work {
  height: auto;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;

  .container-text {
    margin: 2em .8em;
  }

  .work-container-top {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: .8em;
    height: 900px;

    .work {
      border-radius: 10px;
    }

    .work-1 {
      background: rgb(245, 230, 255);
      flex: 1;
      height: 450px;

      video {
        width: 100%;
        height: 100%;
      }
    }

    .work-2 {
      background: rgb(245, 230, 255);
      flex: 2;
      height: 450px;
    }
  }
}

@media (max-width: 768px) {
  #home {
    height: 70vh;
  }

  .work-container-top {
    display: flex;
    flex-direction: column !important;

    .work-1 {
      background: blue;
      flex: 1;
    }

    .work-2 {
      flex: 1;
      background: purple;
    }
  }
}
</style>
