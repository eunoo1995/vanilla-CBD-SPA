import Root from './app.js';
import reconciliation from './library/diff.js';

const render = () => {
  const realDOM = document.querySelector('#root');
  const virtualDOM = Root.render();

  console.log(realDOM, virtualDOM);
  reconciliation(realDOM, virtualDOM);
};

document.addEventListener('DOMContentLoaded', render);

export default render;
