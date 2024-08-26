import Component from "../Component.js";
import "../customElements/Card.js";

export default class CardContainer extends Component {
  template() {
    return `
      <div class="card-container">
        <custom-card
          imageSrc="https://goormkdx.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8b6f698e-8a67-4ad1-94b0-53ee956264c9%2F1607e0c8-430b-4d0e-b6b7-4f530d97f5ea%2F%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2590%25E1%2585%25B3%25E1%2584%258B%25E1%2585%25A6%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B3-1.png?table=block&id=040d00d7-2d0a-4ce9-97f3-71dcb46eb16a&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=2000&userId=&cache=v2"
          imageAlt="프론트엔드 개발자 과정 1회차 배너"
          title="자바스크립트 기초"
          text="240824 미션 수행">
        </custom-card>
      </div>
    `;
  }
}
