function createContact() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main');
  wrapper.setAttribute('data-toggle', 'contact');
  wrapper.setAttribute('hidden', '');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact information';
  heading.classList.add('main-heading');

  wrapper.append(heading);

  return wrapper;
}

export default function contact() {
  const content = document.getElementById('content');
  content.append(createContact());
}
