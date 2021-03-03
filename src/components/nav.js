function createButton(id, text, isActive = false) {
  const btn = document.createElement('button');
  btn.classList.add('nav-button', `${isActive ? 'active' : null}`);
  btn.setAttribute('data-target', id);
  btn.textContent = text;

  return btn;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeBtn = createButton('home', 'Home', true);
  const menuBtn = createButton('menu', 'Menu');
  const contactBtn = createButton('contact', 'Contact');

  nav.append(homeBtn);
  nav.append(menuBtn);
  nav.append(contactBtn);

  return nav;
}

export default function nav() {
  const content = document.getElementById('content');
  content.append(createNav());
}
