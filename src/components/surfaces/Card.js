import Component from "../Component.js";

export default class Card extends Component {
  template() {
    const { href = "", title = "", text = "", imageAlt = "image", imageSrc } = this.props;

    return `
      <a href=${href}>
        <div class="card">
          <img
            class="card-img-top"
            src=${imageSrc}
            alt=${imageAlt}
          />
          <div class="card-body">
            <h5 class="title card-title">${title}</h5>
            <p class="card-text">${text}</p>
          </div>
        </div>
      </a>
    `;
  }
}
