import { createElement } from '../utils/createElement';

function createHero() {
  const wrapper = document.createElement('section');
  wrapper.classList.add('hero-wrapper');

  wrapper.append(
    createElement({
      tag: 'h1',
      className: 'hero-heading',
      text: 'Star foods',
    })
  );

  return wrapper;
}

export default function hero() {
  const content = document.getElementById('content');
  content.append(createHero());
}
