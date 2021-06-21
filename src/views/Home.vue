<template>
  <div>
    <section id="home">
      <fa icon="coffee" />
      <div class="sub-hero-container">
        <h3 class="hero__subtitle">Hi, I'm Justin 👋</h3>
      </div>
      <h1 class="hero__title">
        Building digital <br />
        products, brands and <br />
        experience.
      </h1>
      <button class="cta">CONNECT WITH ME</button>
    </section>
    <section id="work">
      <div class="container-text">
        <h3 class="work-title">Work</h3>
        <p class="work-subtitle">Some of my work made with passion.</p>
      </div>
      <div class="work-container-top">
        <div class="work-1 work"></div>
        <div class="work-2 work"></div>
      </div>
      <div class="work-container-middle">
        <div class="work-3 work"></div>
        <div class="work-4 work"></div>
      </div>
      <div class="work-container-bottom">
        <div class="work-5 work"></div>
      </div>
    </section>
    <section id="about">
      <div class="container-heading">
        <h3 class="about-heading">
          Creating something <br />
          simple and clean <br />
          is my passion
        </h3>
      </div>
      <div class="about-text-container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo impedit
          molestias nulla cum dignissimos incidunt nobis cumque, ex consectetur
          tenetur consequuntur esse exercitationem accusamus facere quam eum
          cupiditate nam illum neque dolorem ab rem quaerat! Officia odio quas
          nisi temporibus pariatur dolorum consequatur obcaecati accusantium
          quasi!
        </p>
        <br />
        <p>
          Deleniti reprehenderit voluptatem assumenda! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Blanditiis, cupiditate. Animi quas
          illo, mollitia velit excepturi nesciunt voluptatibus nihil distinctio
          nobis sit, quibusdam at quasi quidem tempora? Quia temporibus ea, aut
          cum quae esse sint, tempora aperiam rerum consectetur illo modi
          nesciunt assumenda est eligendi obcaecati quam dignissimos, porro
          architecto!
        </p>
      </div>
    </section>
    <!-- <section id="contact">
      <h3>Wanna have a talk?</h3>
      <div class="contact-container">

      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>

<style lang="scss">
@import "@/scss/base/_typography.scss";
@import "@/scss/components/_buttons.scss";
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";

#home {
  height: 100vh;
  @include flexCenter;
  flex-direction: column;
  text-align: center;

  .image-container {
    width: 30%;
    height: 40%;
    @include flexCenter;
    margin-bottom: 1.25em;

    img {
      border-radius: 50%;
      background: $tertiary;
      max-width: 90%;
      max-height: 90%;
    }
  }

  .sub-hero-container {
    @include flexCenter;

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

  .work {
    border-radius: 10px;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
    }
  }

  .container-text {
    margin: 2em 0.8em;
  }

  .work-container-top {
    @include flexRow;
    gap: 20px;
    margin: 0.8em;

    .work-1 {
      background: $workBackground;
      flex: 1;
      height: 450px;
    }

    .work-2 {
      background: $workBackground;
      flex: 2;
      height: 450px;
    }
  }

  .work-container-middle {
    @include flexRow;
    gap: 20px;
    margin: 1em 0.8em;

    .work-3 {
      background: $workBackground;
      flex: 1;
      height: 450px;
    }

    .work-4 {
      background: $workBackground;
      flex: 1;
      height: 450px;
    }
  }

  .work-container-bottom {
    @include flexRow;
    margin: 1em 0.8em;

    .work-5 {
      background-color: $workBackground;
      flex: 1;
      height: 450px;
    }
  }
}

#about {
  @include flexRow;
  height: auto;
  max-width: 1200px;
  margin: 10em auto;

  .container-heading {
    @include flexCenter;
    flex-direction: column;
    flex: 1;

    h3 {
      padding: 0.5em;
    }
  }

  .about-text-container {
    flex: 1;
    @include flexCenter;
    flex-direction: column;
  }

  p {
    padding: 0 1em;
  }
}

#contact {
  height: auto;
}

@media (max-width: 768px) {
  .work-container-top {
    flex-direction: column !important;

    .work-1 {
      flex: 1;
    }

    .work-2 {
      flex: 1;
    }
  }
  .work-container-middle {
    flex-direction: column !important;
  }
}

@media (max-width: 992px) {
  #about {
    flex-direction: column;
    margin: 5em auto;

    .container-heading {
      align-items: flex-start;
    }
  }
}
</style>
