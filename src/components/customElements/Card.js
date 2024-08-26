export default class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.template({
      href: this.getAttribute("href") || "",
      title: this.getAttribute("title") || "",
      text: this.getAttribute("text") || "",
      imageAlt: this.getAttribute("imageAlt") || "image",
      imageSrc: this.getAttribute("imageSrc"),
    });
  }

  template({ href, title, text, imageAlt, imageSrc }) {
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

customElements.define("custom-card", Card);
