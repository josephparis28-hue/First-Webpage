/**
 * Joseph Paris | Developer Portfolio
 *
 * The mobile menu and footer year are enhanced with JavaScript.
 * All page navigation, including "Back to top," uses standard HTML
 * anchor links so it still works when JavaScript is disabled.
 */

const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const yearElement = document.querySelector('#year');

/** Close the mobile navigation and reset the accessible button label. */
function closeMenu() {
  if (!menuButton || !primaryNav) {
    return;
  }

  primaryNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  // Close the mobile menu after selecting a page section.
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Keyboard support: Escape closes an open menu.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  // Dismiss the menu when clicking elsewhere on the page.
  document.addEventListener('click', (event) => {
    if (
      !primaryNav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Reset the mobile menu when returning to a desktop layout.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
      closeMenu();
    }
  });
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
