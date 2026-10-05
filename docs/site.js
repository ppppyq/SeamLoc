const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (toggle && navigation) {
  toggle.hidden = false;
  navigation.dataset.collapsible = 'true';
  const closeNavigation = () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeNavigation();
      toggle.focus();
    }
  });
}

const video = document.querySelector('.demo-video');
const fallback = document.querySelector('.video-fallback');
if (video && fallback) {
  const showFallback = () => { fallback.hidden = false; };
  video.addEventListener('error', showFallback);
  video.querySelector('source')?.addEventListener('error', showFallback);
}
