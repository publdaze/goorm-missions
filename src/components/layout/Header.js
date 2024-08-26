import Component from "../Component.js";

export default class Header extends Component {
  template() {
    return `
      <div class="header-content">
        <a class="header-home" href="/">
          <img
            class="logo"
            src="https://goormkdx.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8b6f698e-8a67-4ad1-94b0-53ee956264c9%2Ff9d95b3c-fad8-4ab2-a6e9-a56124ea8be0%2Ffavicon.png?table=block&id=e43ba6f2-8873-43c9-9429-40c5ed1668f6&spaceId=8b6f698e-8a67-4ad1-94b0-53ee956264c9&width=250&userId=&cache=v2"
            alt="Logo"
            width="25"
            height="25"
          />
          <span class="site-name">구름톤 딥다이브 미션 저장소</span>
        </a>
        <div class="scroll-bar-container">
          <div class="scroll-bar"></div>
        </div>
      </div>
    `;
  }
}
