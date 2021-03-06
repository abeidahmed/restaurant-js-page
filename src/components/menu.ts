import createElement from '../utils/createElement';
import Food1 from '../assets/images/food-1.jpg';
import Food2 from '../assets/images/food-2.jpg';
import Food3 from '../assets/images/food-3.jpg';
import Food4 from '../assets/images/food-4.jpg';
import Food5 from '../assets/images/food-5.jpg';
import Food6 from '../assets/images/food-6.jpg';

type menuCardsType = {
  src: undefined;
  alt: string;
  title: string;
  price: string;
};

const menuCards: menuCardsType[] = [
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

const createMenuHoverCard = ({
  title,
  price,
}: {
  title: string;
  price: string;
}): HTMLElement => {
  const container = document.createElement('div');
  container.classList.add('menu-hover-card');

  container.append(
    createElement({
      tag: 'h3',
      text: title,
    }),
  );

  container.append(
    createElement({
      text: price,
    }),
  );

  return container;
};

const createCard = ({
  src,
  alt,
  title,
  price,
}: {
  src: undefined;
  alt: string;
  title: string;
  price: string;
}): HTMLElement => {
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
};

const createMenu = (): HTMLElement => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main', 'menu-grid');
  wrapper.setAttribute('data-toggle', 'menu');
  wrapper.setAttribute('hidden', '');

  menuCards.forEach(({ src, alt, title, price }) => {
    wrapper.append(
      createCard({
        src,
        alt,
        title,
        price,
      }),
    );
  });

  return wrapper;
};

const menu = (): void => {
  const content = document.getElementById('content');
  content.append(createMenu());
};

export default menu;
