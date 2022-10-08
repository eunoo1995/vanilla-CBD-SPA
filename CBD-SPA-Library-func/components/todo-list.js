import { useState } from '../library/state.js';
import { createElement, addEvent } from '../library/utils.js';
import TodoItem from './todo-item.js';

const TodoList = () => {
  const [todos] = useState('todos', [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false },
  ]);
  const [currentTodoFilterId] = useState('currentTodoFilterId', 0);

  const filteredTodos = todos.filter(todo =>
    currentTodoFilterId === 0 ? true : currentTodoFilterId === 1 ? todo.completed : !todo.completed
  );

  const $todoList = createElement('ul', { className: 'todo-list' }, filteredTodos.map(todo => TodoItem(todo)).join(''));

  return $todoList;
};

const removeTodo = ({ target }) => {
  if (!target.matches('.remove')) return;

  const [todos, setTodos] = useState('todos', '');
  setTodos(todos.filter(todo => todo.id !== +target.closest('li').id));
};

const toggleTodo = ({ target }) => {
  if (!target.matches('input[type="checkbox"]')) return;

  const [todos, setTodos] = useState('todos', '');
  setTodos(todos.map(todo => (todo.id === +target.closest('li').id ? { ...todo, completed: !todo.completed } : todo)));
};

addEvent('click', removeTodo);
addEvent('change', toggleTodo);

export default TodoList;
