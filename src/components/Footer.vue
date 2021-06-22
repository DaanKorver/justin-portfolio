<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-logo-container">
        <h3 class="footer-logo">Portfolio</h3>
      </div>
      <div class="footer-menu-container">
        <ul>
          <h4 class="footer-title">Menu</h4>
          <li><a href="">Work</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div class="footer-social-container">
        <ul>
          <h4 class="footer-title">Social</h4>
          <li>
            <a href="https://www.instagram.com/justinlung_/" target="_blank"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
              target="_blank"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://github.com/JustinLung" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright-wrapper">
      <p>©Justin Lung 2021</p>
    </div>
  </footer>
</template>
<style lang="scss">
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/base/_global.scss";
@import "@/scss/base/_typography.scss";
footer {
  background-image: linear-gradient(360deg, #000000 0%, #013e66 150%);

  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 1;
    transform: scale(1.05);
    filter: blur(10px);
  }

  .footer-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 750px;

    .footer-logo-container {
      display: flex;
      align-items: center;
      margin-right: 2em;
    }

    .footer-menu-container {
      margin: 2em;
    }

    .footer-social-container {
      margin: 2em;
    }
  }

  .footer-copyright-wrapper {
    max-width: 750px;
    padding-bottom: 2em;
    margin: 0 auto;

    color: #fff;
    border: 0;
    border-top: 0.1em;
    border-style: solid;
    padding: 2em;
    padding-bottom: 2em;
  }
}

@media (max-width: 768px) {
  footer {
    .footer-wrapper {
      flex-direction: column;
      padding: 2em;

      .footer-logo-container {
        margin: 0;
        margin-top: 2em;
      }

      .footer-menu-container {
        margin: 0;
        margin-top: 2em;
      }

      .footer-social-container {
        margin: 0;
        margin-top: 2em;
      }
    }
  }
}
</style>
