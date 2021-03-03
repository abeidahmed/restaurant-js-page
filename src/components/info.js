import { createElement } from '../utils/createElement';

function createInfo() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main');
  wrapper.setAttribute('data-toggle', 'home');

  wrapper.append(
    createElement({
      tag: 'h2',
      text: 'About',
      className: 'main-heading',
    })
  );

  wrapper.append(
    createElement({
      text:
        'Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt',
      className: 'main-description',
    })
  );

  return wrapper;
}

export default function info() {
  const content = document.getElementById('content');
  content.append(createInfo());
}
