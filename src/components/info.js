function createInfo() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main');

  const heading = document.createElement('h2');
  heading.textContent = 'About';
  heading.classList.add('main-heading');

  const description = document.createElement('p');
  description.textContent =
    'Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt';
  description.classList.add('main-description');

  wrapper.append(heading);
  wrapper.append(description);

  return wrapper;
}

export default function info() {
  const content = document.getElementById('content');
  content.append(createInfo());
}
