<template>
  <header>
    <h3 class="logo">Portfolio</h3>
    <nav class="nav">
      <ul class="nav__list">
        <li><a href="#">Works</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div
        class="hamburger-menu"
        id="hamburger"
        @click="hamburgerOpen = !hamburgerOpen"
        v-bind:class="{ hamburger__open: hamburgerOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>

      <div class="overlay">
        <ul class="overlay__list">
          <li><a href="#">Works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  private hamburgerOpen = false;
}
</script>
<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/base/_typography.scss";
@import "@/scss/components/_buttons.scss";

* {
  scroll-behavior: smooth;
}

body {
  background-color: $primary;
  color: $tertiary;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

header {
  padding: 2em;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu__open {
    ul {
      transform: translateX(0%);
    }
  }

  .logo {
    font-size: 1.5rem;
    margin: auto auto 0 2.5em;
    z-index: 100;
  }

  .nav {
    padding: 2px;

    a {
      text-decoration: none;
      color: $tertiary;
    }

    .nav__list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      gap: 2.5em;
      margin-left: 2.5em;

      li:first-child {
        margin-left: auto;
      }

      li:last-child {
        margin-right: 3em;
      }
    }

    .hamburger-menu {
      position: relative;
      z-index: 100;
      width: 30px;
      height: 18px;
      display: none;
      margin-left: auto;
      cursor: pointer;

      .hamburger-line {
        width: 30px;
        height: 2px;
        background-color: white;
        position: absolute;

        &:first-child {
          top: 0;
          transition: top 0.3s 0.3s, transform 0.3s;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
          transition: opacity 0.3s 0.3s;
        }

        &:last-child {
          bottom: 0;
          transition: bottom 0.3s 0.3s, transform 0.3s;
        }
      }
    }

    .hamburger__open {
      .hamburger-line {
        &:first-child {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          transition: top 0.2s, transform 0.2s 0.2s;
        }

        &:nth-child(2) {
          opacity: 0;
          transition: opacity 0s 0.2s;
        }

        &:last-child {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
          transition: bottom 0.3s, transform 0.2s 0.2s;
        }
      }
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;

      width: 100%;
      height: 100vh;
      background: $overlayNav;

      display: flex;
      align-items: center;
      transform: translateX(-100%);
      transition: 0.3s ease-in-out;

      &__list {
        list-style: none;

        li {
          font-size: 2.5em;
          margin-left: 0.5em;
        }
      }
    }

    .overlay.active {
      transform: translateX(0%);
    }
  }
}

@media (max-width: 768px) {
  header .logo {
    margin-left: 0;
  }

  .logo {
    margin: 0;
    margin-left: 0px;
  }

  .nav__list {
    display: none !important;

    li:last-child {
      margin: 0;
    }
  }

  .hamburger-menu {
    display: block !important;
  }
}

@media (max-width: 992px) {
  .logo {
    margin: auto auto 0 0;
  }
}
</style>
