import Component from "./components/Component.js";
import CardContainer from "./components/layout/CardContainer.js";
import Footer from "./components/layout/Footer.js";
import Header from "./components/layout/Header.js";

export default class App extends Component {
  template() {
    return `
      <header data-component="header" class="header"></header>
      <main data-component="main"></main>
      <footer data-component="footer" class="footer"></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('[data-component="header"]');
    const $main = this.$target.querySelector('[data-component="main"]');
    const $footer = this.$target.querySelector('[data-component="footer"]');

    new Header($header);
    new CardContainer($main);
    new Footer($footer);
  }
}

window.addEventListener("scroll", () => {
  let currentY = document.documentElement.scrollTop;
  let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percentage = (currentY / totalY) * 100;

  if (percentage < 1) {
    document.querySelector(".scroll-bar").style.width = `1%`;
    return;
  }
  document.querySelector(".scroll-bar").style.width = `${percentage}%`;
});
