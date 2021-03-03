import Food1 from '../assets/images/food-1.jpg';
import Food2 from '../assets/images/food-2.jpg';
import Food3 from '../assets/images/food-3.jpg';
import Food4 from '../assets/images/food-4.jpg';
import Food5 from '../assets/images/food-5.jpg';
import Food6 from '../assets/images/food-6.jpg';

const menuCards = [
  {
    src: Food1,
    alt: 'Good food',
    title: 'Good food',
    price: '$39.99',
  },
  {
    src: Food2,
    alt: 'Good meal',
    title: 'Good food',
    price: '$39.99',
  },
  {
    src: Food3,
    alt: 'Good meal',
    title: 'Good food',
    price: '$39.99',
  },
  {
    src: Food4,
    alt: 'Good meal',
    title: 'Good food',
    price: '$39.99',
  },
  {
    src: Food5,
    alt: 'Good meal',
    title: 'Good food',
    price: '$39.99',
  },
  {
    src: Food6,
    alt: 'Good meal',
    title: 'Good food',
    price: '$39.99',
  },
];

function createMenuHoverCard({ title, price }) {
  const container = document.createElement('div');
  container.classList.add('menu-hover-card');

  const menuName = document.createElement('h3');
  menuName.textContent = title;

  const menuPrice = document.createElement('p');
  menuPrice.textContent = price;

  container.append(menuName);
  container.append(menuPrice);

  return container;
}

function createCard({ src, alt, title, price }) {
  const card = document.createElement('div');
  card.classList.add('menu-card');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('menu-image-container');

  const img = document.createElement('img');
  img.classList.add('menu-image');
  img.src = src;
  img.alt = alt;

  imgContainer.append(img);
  card.append(imgContainer);
  card.append(createMenuHoverCard({ title, price }));

  return card;
}

function createMenu() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main', 'menu-grid');
  wrapper.setAttribute('data-toggle', 'menu');
  wrapper.setAttribute('hidden', '');

  menuCards.forEach(({ src, alt, title, price }) => {
    wrapper.append(createCard({ src, alt, title, price }));
  });

  return wrapper;
}

export default function menu() {
  const content = document.getElementById('content');
  content.append(createMenu());
}