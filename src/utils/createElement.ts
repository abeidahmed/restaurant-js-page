type elementType = {
  tag?: string;
  text?: string;
  className?: string;
};

const createElement = ({
  tag = 'p',
  text,
  className,
}: elementType): HTMLElement => {
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
