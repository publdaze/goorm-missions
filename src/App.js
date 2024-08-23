import Component from "./components/Component.js";
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
    const $footer = this.$target.querySelector('[data-component="footer"]');

    new Header($header);
    new Footer($footer);
  }
}
