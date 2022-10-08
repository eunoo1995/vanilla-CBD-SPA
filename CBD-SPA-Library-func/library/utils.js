const createElement = (type, properties, ...children) => {
  const $element = document.createElement(type);

  Object.keys(properties).forEach(key => {
    $element[key] = properties[key];
  });

  if (children[0] instanceof Element) {
    children.forEach(child => $element.append(child));
  } else $element.innerHTML = children.join('');

  return $element;
};

const addEvent = (eventType, callback) => {
  document.body.removeEventListener(eventType, callback);
  document.body.addEventListener(eventType, callback);
};

export { createElement, addEvent };
