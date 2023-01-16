(() => {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  // eslint-disable-next-line no-unused-vars
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('default');
    } else {
      setTheme('dark');
    }
  }

  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('dark');
    document.getElementById('slider').checked = false;
  } else {
    setTheme('default');
    document.getElementById('slider').checked = true;
  }
})();
