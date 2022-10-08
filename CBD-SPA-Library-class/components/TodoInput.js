import Component from '../library/Component.js';

class TodoInput extends Component {
  render() {
    return `
      <input type="text" class="add" placeholder="Enter todo!" autofocus />
      `;
  }

  setEvent() {
    this.addEvent('keyup', ({ key, target }) => {
      if (key !== 'Enter' || target.value === '') return;
      this.addTodo(target.value);
      target.value = '';
    });
  }
}

export default TodoInput;
