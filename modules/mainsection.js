const formSection = document.getElementById('form-section');
const contact = document.getElementById('contact');
const list = document.getElementById('list');

export const showForm = () => {
  formSection.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
};

export const showList = () => {
  formSection.style.display = 'none';
  contact.style.display = 'none';
  list.style.display = 'block';
};

export const showContact = () => {
  formSection.style.display = 'none';
  contact.style.display = 'block';
  list.style.display = 'none';
};
