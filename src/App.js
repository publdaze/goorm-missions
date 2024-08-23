import Component from "./components/Component.js";
import Header from "./components/layout/Header.js";

export default class App extends Component {
  template() {
    return `
      <header class="header" data-component="header"></header>
      <main data-component="main"></main>
      <footer data-component="footer"></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('[data-component="header"]');
    new Header($header);
  }
}
