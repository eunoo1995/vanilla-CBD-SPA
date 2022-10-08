import render from '../index.js';

class Component {
  state;

  contructor(props) {
    this.state = {};
    this.props = props;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    render();
  }

  setEvent() {}

  addEvent(type, callback) {
    document.body.addEventListener(type, callback);
  }
}

export default Component;
