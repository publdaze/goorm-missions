import Component from "../Component.js";
import "../customElements/Card.js";

export default class CardContainer extends Component {
  template() {
    return `
      <div class="card-container">
        <button class="view-control-btn" style="width: 100%">
          <img class="viewIcon" src="asset/gridView.svg" alt="gridView" />
        </button>  
        <custom-card
          href="/src/pages/240823/240823.html"
          imageSrc="https://goormkdx.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8b6f698e-8a67-4ad1-94b0-53ee956264c9%2F1607e0c8-430b-4d0e-b6b7-4f530d97f5ea%2F%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2590%25E1%2585%25B3%25E1%2584%258B%25E1%2585%25A6%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B3-1.png?table=block&id=040d00d7-2d0a-4ce9-97f3-71dcb46eb16a&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=2000&userId=&cache=v2"
          imageAlt="프론트엔드 개발자 과정 1회차 배너"
          title="자바스크립트 기초"
          text="240823 미션 수행">
        </custom-card>
        <custom-card
          href="/src/pages/240826/240826.html"
          imageSrc="https://goormkdx.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8b6f698e-8a67-4ad1-94b0-53ee956264c9%2F1607e0c8-430b-4d0e-b6b7-4f530d97f5ea%2F%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2590%25E1%2585%25B3%25E1%2584%258B%25E1%2585%25A6%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B3-1.png?table=block&id=040d00d7-2d0a-4ce9-97f3-71dcb46eb16a&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=2000&userId=&cache=v2"
          imageAlt="프론트엔드 개발자 과정 1회차 배너"
          title="HTML/CSS"
          text="240826 미션 수행">
        </custom-card>
      </div>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const cards = this.$target.querySelectorAll(".card");
      const isGridView = this.$target.querySelector(".viewIcon").alt === "gridView";

      this.$target.querySelector(".viewIcon").src = isGridView ? "asset/listView.svg" : "asset/gridView.svg";
      this.$target.querySelector(".viewIcon").alt = isGridView ? "listView" : "gridView";

      cards.forEach((card) => {
        if (isGridView) {
          card.style.flexDirection = "row";
          card.style.height = "8rem";
          card.style.maxWidth = "100%";
          card.style.width = "1080px";
          const cardImage = card.querySelector(".card-img-top");
          if (cardImage) {
            cardImage.style.width = "auto";
            cardImage.style.height = "100%";
          }
        } else {
          card.style.flexDirection = "";
          card.style.height = "";
          card.style.maxWidth = "";
          card.style.width = "";
          const cardImage = card.querySelector(".card-img-top");
          if (cardImage) {
            cardImage.style.width = "";
            cardImage.style.height = "";
          }
        }
      });
    });
  }
}
