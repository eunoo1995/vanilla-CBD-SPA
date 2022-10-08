import { TodoInput, TodoList, TodoFilter } from './components/index.js';
import Component from './library/Component.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 3, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'HTML', completed: false },
      ],
      todoFilter: ['All', 'Completed', 'Active'],
      currentTodoFilterId: 0,
    };
    this.components = [new TodoInput(), new TodoList(), new TodoFilter()];
    this.components.forEach(component => component.setEvent.apply(this));
  }

  render() {
    const $root = document.createElement('div');
    $root.id = 'root';

    $root.innerHTML = `
      ${this.components.map(component => component.render(this.state)).join('')}
    `;

    return $root;
  }

  addTodo = content => {
    this.setState({
      todos: [
        { id: Math.max(...this.state.todos.map(({ id }) => id), 0) + 1, content, completed: false },
        ...this.state.todos,
      ],
    });
  };

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)),
    });
  }

  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== +id) });
  }

  filterTodo(filterId) {
    this.setState({ currentTodoFilterId: filterId });
  }
}

const Root = new App();

export default Root;
