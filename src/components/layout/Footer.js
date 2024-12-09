import Component from "../Component.js";

export default class Footer extends Component {
  template() {
    return `
      <div class="footer-content">
        <p id="copyright">© 2024 publdaze</p>
      </div>
    `;
  }
}
