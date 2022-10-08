import { createElement } from './library/utils.js';
import { TodoInput, TodoList, TodoFilter } from './components/index.js';

const app = () => {
  const components = [TodoInput(), TodoList(), TodoFilter()];
  const virtualDOM = createElement('div', { id: 'root' }, ...components);

  return virtualDOM;
};

export default app;
