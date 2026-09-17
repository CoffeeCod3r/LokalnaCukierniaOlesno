// Menu pozostaje dostępne także bez JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
menuButton.hidden = false;
navbar.classList.add('menu-ready');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Otwórz menu');
}
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
navbar.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
// Płynne przewijanie jest realizowane przez scroll-behavior w style.css.
const form = document.querySelector('#order-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  // Tutaj można później podłączyć Formspree, EmailJS lub własny backend.
  // Wersja demonstracyjna nie wysyła, nie zapisuje i nie loguje danych.
  const status = document.querySelector('#form-status');
  status.textContent = 'Dziękujemy! To wersja demonstracyjna formularza.';
  status.hidden = false;
});
// Włączamy formularz dopiero po podpięciu obsługi — bez JS dane nie trafią do URL.
document.querySelector('#form-fields').disabled = false;
