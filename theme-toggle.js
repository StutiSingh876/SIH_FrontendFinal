function setTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  localStorage.setItem('preferredTheme', theme);
}

function getPreferredTheme() {
  return localStorage.getItem('preferredTheme') || 'light';
}

document.addEventListener('DOMContentLoaded', () => {
  setTheme(getPreferredTheme());
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.onclick = () => {
      const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
      setTheme(newTheme);
    };
  }
});

