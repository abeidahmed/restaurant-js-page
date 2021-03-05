import './stylesheets/index.scss';
import hero from './components/hero';
import nav from './components/nav';
import info from './components/info';
import menu from './components/menu';
import contact from './components/contact';

const showActiveTab = (event: Event): void => {
  const panels = document.querySelectorAll('.main') as NodeListOf<HTMLElement>;

  panels.forEach((panel) => {
    const panelTarget = panel.dataset.toggle;
    const buttonTarget = event.target as HTMLElement;
    if (buttonTarget.dataset.target === panelTarget) {
      panel.removeAttribute('hidden');
    } else {
      panel.setAttribute('hidden', '');
    }
  });

  const currentButton = document.querySelectorAll('.nav-button.active');
  currentButton[0].className = currentButton[0].className.replace(
    ' active',
    '',
  );
  (event.currentTarget as HTMLElement).classList.add('active');
};

const init = (): void => {
  hero();
  nav();
  info();
  menu();
  contact();

  const toggleButtons = document.querySelectorAll('.nav-button');

  toggleButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', showActiveTab);
  });
};

init();
