function createContact() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main');
  wrapper.setAttribute('data-toggle', 'contact');
  wrapper.setAttribute('hidden', '');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact information';
  heading.classList.add('main-heading');

  const addressWrapper = document.createElement('div');
  addressWrapper.classList.add('address');

  const address = document.createElement('p');
  address.classList.add('main-description');
  address.textContent = '$ Lowly Road, Missi, New Terkic';

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('main-description');
  phoneNumber.textContent = '# 98-636874521';

  addressWrapper.append(address);
  addressWrapper.append(phoneNumber);

  wrapper.append(heading);
  wrapper.append(addressWrapper);

  return wrapper;
}

export default function contact() {
  const content = document.getElementById('content');
  content.append(createContact());
}
