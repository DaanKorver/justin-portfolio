<template>
  <div id="home">
    <div class="image-container">
      <img src="../assets/memoji.png" class="memoji" />
    </div>
    <div class="sub-hero-container">
      <h3 class="hero__subtitle">Hi, I'm Justin 👋</h3>
      <!-- <img src="assets/rock_emoji.png" class="rock-emoji"> -->
    </div>
    <h1 class="hero__title">
      Building digital <br />
      products, brands and <br />
      experience.
    </h1>
    <p class="hero__text">
      a Software Engineer. <br />
      I specialize in UI/UX Design, Responsive Web Design, <br />
      and Web Development.
    </p>
    <button class="cta">CONNECT WITH ME</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gsap from 'gsap'

export default class Home extends Vue {
  setup() {
    const beforeEnter = (el: any) => {
      console.log('before enter - set initial state')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0;
    }

    const enter = (el: any) => {
      // el.style.opacity = 1;
      console.log('starting to enter - make transition')
      gsap.to(el, {
        y: 0,
        opacity: 1,
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/base/_typography.scss";
@import "@/scss/components/_buttons.scss";
@import "@/scss/abstracts/_variables.scss";

#home {
  height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .image-container {
    width: 30%;
    height: 20%;
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

    img {
      max-width: 30px;
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
</style>
