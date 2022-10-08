import { useState } from '../library/state.js';
import { createElement, addEvent } from '../library/utils.js';

const TodoFilter = () => {
  const [todoFilter] = useState('todoFilter', ['All', 'Completed', 'Active']);
  const [currentTodoFilterId] = useState('currentTodoFilterId', 0);

  // prettier-ignore
  const $todoFilter = createElement('ul',{ className: 'todo-filter' },
  todoFilter.map((filter, i) => `<li data-filter-id="${i}" class="${currentTodoFilterId === i ? 'selected' : ''}">${filter}</li>`).join(''));

  return $todoFilter;
};

const filterTodo = ({ target }) => {
  if (!target.matches('.todo-filter li')) return;

  const [, setCurrentTodoFilterId] = useState('currentTodoFilterId', 0);
  setCurrentTodoFilterId(+target.dataset.filterId);
};

addEvent('click', filterTodo);

export default TodoFilter;
