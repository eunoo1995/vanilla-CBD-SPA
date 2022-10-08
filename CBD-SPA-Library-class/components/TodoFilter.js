import Component from '../library/Component.js';

class TodoFilter extends Component {
  render({ todoFilter, currentTodoFilterId }) {
    // prettier-ignore
    return `
      <ul class="todo-filter">
        ${todoFilter.map((filter, i) =>
          `<li data-filter-id="${i}" class="${currentTodoFilterId === i ? 'selected' : ''}">${filter}</li>`)
        .join('')}
      </ul>
      `;
  }

  setEvent() {
    this.addEvent('click', ({ target }) => {
      if (!target.matches('.todo-filter li')) return;

      this.filterTodo(+target.dataset.filterId);
    });
  }
}

export default TodoFilter;
