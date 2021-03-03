function createButton(text) {
  const btn = document.createElement('button');
  btn.classList.add('nav-button');
  btn.textContent = text;

  return btn;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeBtn = createButton('Home');
  const menuBtn = createButton('Menu');
  const contactBtn = createButton('Contact');

  nav.append(homeBtn);
  nav.append(menuBtn);
  nav.append(contactBtn);

  return nav;
}

export default function nav() {
  const content = document.getElementById('content');
  content.append(createNav());
}
