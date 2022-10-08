import app from './app.js';
import reconciliation from './library/diff.js';

const render = () => {
  const realDOM = document.querySelector('#root');
  const virtualDOM = app();

  // console.log(realDOM, virtualDOM);
  reconciliation(realDOM, virtualDOM);
};

document.addEventListener('DOMContentLoaded', render);

export default render;
