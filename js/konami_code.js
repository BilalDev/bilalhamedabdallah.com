(() => {
  // Konami Code
  // let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
  let code = [38];
  let keys = [];

  let onkeydownFunc = (event) => {
    keys.push(event.keyCode);
    if (_.isEqual(code, keys)) {
      window.removeEventListener('keydown', onkeydownFunc);
      showSite();
      return;
    }
    if (keys.length >= 11) {
      keys = _.slice(keys, 1, 11);
    }
  };

  let showSite = (nope) => {
    let el1 = document.getElementById('myNavbarBig');
    let el2 = document.getElementById('myNavbar');
    let el3 = document.getElementById('main');
    let el4 = document.getElementById('show-site');
    let el5 = document.getElementById('game-nav');

    el4.className = 'bha-hide-all';

    el1.className = _.replace(el1.className, "bha-hide-all", "");
    el2.className = _.replace(el2.className, "bha-hide-all", "");
    el3.className = _.replace(el3.className, "bha-hide-all", "");
    
    if (nope !== false) {
      // Focus on #game
      setTimeout(() => { window.location.hash = "#game"; }, 1000);
      // From render_line.js
      startGame();
    }
    else {
      window.removeEventListener('keydown', onkeydownFunc);
      el5.className = 'bha-hide-all';
    }
  };

  window.addEventListener('keydown', onkeydownFunc, false);
  document.getElementById('show-site-without-game').addEventListener('click', () => showSite(false), false);
})();
