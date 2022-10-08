import Component from '../library/Component.js';

class TodoItem extends Component {
  render({ id, content, completed }) {
    // prettier-ignore
    return `
      <li id="${id}">
        <label>
        <input type="checkbox" ${completed ? 'checked' : ''}/>
        <span>${content}</span>
        </label>
        <button class="remove">X</button>
      </li>`;
  }
}

export default TodoItem;
