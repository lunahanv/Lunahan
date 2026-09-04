const button = document.querySelector('#language');
let language = 'tr';

function renderLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-tr]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  button.textContent = language === 'tr' ? 'EN' : 'TR';
  document.title = language === 'tr' ? 'Lunahan — Yapay Zekâ Asistanı' : 'Lunahan — AI Assistant';
}

button.addEventListener('click', () => {
  language = language === 'tr' ? 'en' : 'tr';
  renderLanguage();
});

document.querySelector('#start').addEventListener('click', () => {
  alert(language === 'tr' ? 'Erken erişim yakında açılacak.' : 'Early access is coming soon.');
});

const browserLanguage = navigator.language.toLowerCase();
language = browserLanguage.startsWith('tr') ? 'tr' : 'en';
renderLanguage();
