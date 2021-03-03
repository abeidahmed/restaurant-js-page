const HEADLINE = 'The best restaurant in town';
const DESCRIPTION = 'All the best foods that you can taste in town.';

function createHero() {
  const wrapper = document.createElement('section');
  wrapper.classList.add('hero-wrapper');

  const headline = document.createElement('h1');
  headline.classList.add('hero-headline');

  const tagLine = document.createElement('p');
  tagLine.classList.add('hero-tagline');

  headline.innerText = HEADLINE;
  tagLine.innerText = DESCRIPTION;

  wrapper.append(headline);
  wrapper.append(tagLine);

  return wrapper;
}

export default function hero() {
  const content = document.getElementById('content');
  content.append(createHero());
}
