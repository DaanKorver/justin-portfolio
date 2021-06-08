<template>
  <div id="home">
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

export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/scss/base/_typography.scss';
@import '@/scss/components/_buttons.scss';
  #home {
    height: 80vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .sub-hero-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .hero__subtitle {
            margin: 0 .5em;
        }

        img {
            max-width: 30px;
        }
    }

    .hero__title {
        margin-top: .4em;
    }


    .hero__text {
        margin-top: 1em;
    }

    .cta {
        margin-top: 1.5em;
    }
}
</style>