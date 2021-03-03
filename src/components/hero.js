const HEADLINE = 'The best restaurant in town';
const DESCRIPTION = 'All the best foods that you can taste in town.';

function createHome() {
  const wrapper = document.createElement('section');
  const headline = document.createElement('h1');
  const tagLine = document.createElement('p');

  headline.innerText = HEADLINE;
  tagLine.innerText = DESCRIPTION;

  wrapper.appendChild(headline);
  wrapper.appendChild(tagLine);

  return wrapper;
}

export default function hero() {
  const content = document.getElementById('content');
  content.appendChild(createHome());
}
