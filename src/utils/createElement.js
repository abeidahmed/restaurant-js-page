const createElement = ({ tag = 'p', text, className }) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

export default createElement;
