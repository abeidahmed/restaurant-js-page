import createElement from '../utils/createElement';

const createContact = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main');
  wrapper.setAttribute('data-toggle', 'contact');
  wrapper.setAttribute('hidden', '');

  const addressWrapper = document.createElement('div');
  addressWrapper.classList.add('address');

  addressWrapper.append(
    createElement({
      text: '$ Lowly Road, Missi, New Terkic',
      className: 'main-description',
    }),
  );

  addressWrapper.append(
    createElement({ text: '# 98-636874521', className: 'main-description' }),
  );

  wrapper.append(
    createElement({
      tag: 'h2',
      text: 'Contact information',
      className: 'main-heading',
    }),
  );
  wrapper.append(addressWrapper);

  return wrapper;
};

const contact = () => {
  const content = document.getElementById('content');
  content.append(createContact());
};

export default contact;
