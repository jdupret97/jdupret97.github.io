(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const toggle = document.getElementById('theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('jl-theme'); } catch (_) {}
  const apply = (theme) => {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light appearance' : 'Switch to dark appearance');
  };
  apply(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : preference.matches ? 'dark' : 'light');
  toggle.addEventListener('click', () => {
    storedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(storedTheme);
    try { localStorage.setItem('jl-theme', storedTheme); } catch (_) {}
  });
  preference.addEventListener('change', (event) => {
    if (!storedTheme) apply(event.matches ? 'dark' : 'light');
  });
  const links = [...document.querySelectorAll('nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
  }
})();
