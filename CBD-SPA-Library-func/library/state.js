import render from '../index.js';

const state = new Proxy(
  {},
  {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      Reflect.set(target, prop, value);
      render();
      return true;
    },
  }
);

const useState = (key, value) => {
  if (state[key] === undefined) state[key] = value;

  const setState = newValue => {
    state[key] = newValue;
  };

  return [state[key], setState];
};

export { state, useState };
