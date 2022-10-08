import Component from '../library/Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  render({ todos, currentTodoFilterId }) {
    const filteredTodos = todos.filter(todo =>
      currentTodoFilterId === 0 ? true : currentTodoFilterId === 1 ? todo.completed : !todo.completed
    );

    return `
      <ul class="todo-list">
        ${filteredTodos.map(todo => new TodoItem().render(todo)).join('')}
      </ul>
    `;
  }

  setEvent() {
    this.addEvent('change', ({ target }) => {
      if (!target.matches('input[type="checkbox"]')) return;

      this.toggleTodo(target.closest('li').id);
    });
    this.addEvent('click', ({ target }) => {
      if (!target.matches('.remove')) return;

      this.removeTodo(target.closest('li').id);
    });
  }
}

export default TodoList;
