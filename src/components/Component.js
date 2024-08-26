export default class Component {
  $target;
  props;

  constructor($target, props) {
    this.$target = $target;
    this.props = props || {};
    this.render();
  }

  template() {
    return "";
  }

  setEvent() {}

  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
    this.mounted();
  }
}
