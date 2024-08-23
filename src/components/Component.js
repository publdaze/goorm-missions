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

  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
}
