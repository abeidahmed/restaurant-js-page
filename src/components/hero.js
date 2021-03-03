const HEADLINE = 'Star foods';

function createHero() {
  const wrapper = document.createElement('section');
  wrapper.classList.add('hero-wrapper');

  const headline = document.createElement('h1');
  headline.classList.add('hero-headline');

  headline.innerText = HEADLINE;

  wrapper.append(headline);

  return wrapper;
}

export default function hero() {
  const content = document.getElementById('content');
  content.append(createHero());
}
