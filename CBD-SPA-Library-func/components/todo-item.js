const TodoItem = ({ id, content, completed }) => `
    <li id="${id}">
      <label>
        <input type="checkbox" ${completed ? 'checked' : ''}/>
        <span>${content}</span>
      </label>
      <button class="remove">X</button>
    </li>
  `;

export default TodoItem;
