import './stylesheets/index.scss';
import hero from './components/hero';
import nav from './components/nav';
import info from './components/info';
import menu from './components/menu';
import contact from './components/contact';

function showActiveTab(event) {
  const panels = document.querySelectorAll('.main');

  panels.forEach((panel) => {
    const panelTarget = panel.dataset.toggle;
    if (event.target.dataset.target === panelTarget) {
      panel.removeAttribute('hidden');
    } else {
      panel.setAttribute('hidden', '');
    }
  });

  const currentButton = document.querySelectorAll('.nav-button.active');
  currentButton[0].className = currentButton[0].className.replace(
    ' active',
    ''
  );
  event.currentTarget.classList.add('active');
}

function init() {
  hero();
  nav();
  info();
  menu();
  contact();

  const toggleButtons = document.querySelectorAll('.nav-button');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', showActiveTab);
  });
}

init();
