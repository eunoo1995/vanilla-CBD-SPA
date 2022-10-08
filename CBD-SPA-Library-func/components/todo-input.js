import { useState } from '../library/state.js';
import { createElement, addEvent } from '../library/utils.js';

const addTodo = ({ key, target }) => {
  if (key !== 'Enter' || target.value.trim() === '') return;
  const [todos, setTodos] = useState('todos', '');

  setTodos([{ id: Math.max(...todos.map(({ id }) => id), 0) + 1, content: target.value, completed: false }, ...todos]);

  target.value = '';
};

addEvent('keyup', addTodo);

const TodoInput = () => {
  const $todoInput = createElement('input', {
    type: 'text',
    className: 'add',
    placeholder: 'Enter todo!',
    autofocus: 'autofocus',
  });

  return $todoInput;
};

export default TodoInput;
