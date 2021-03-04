import createElement from '../utils/createElement';

const createHero = () => {
  const wrapper = document.createElement('section');
  wrapper.classList.add('hero-wrapper');

  wrapper.append(
    createElement({
      tag: 'h1',
      className: 'hero-heading',
      text: 'Star foods',
    }),
  );

  return wrapper;
};

const hero = () => {
  const content = document.getElementById('content');
  content.append(createHero());
};

export default hero;
