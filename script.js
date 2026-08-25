document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    if (!links.id) links.id = 'primary-nav';
    toggle.setAttribute('aria-controls', links.id);
    toggle.setAttribute('aria-expanded', 'false');

    var setMenu = function (open) {
      links.classList.toggle('open', open);
      // lock the page behind the panel so only the menu scrolls
      document.body.classList.toggle('nav-open', open);
      toggle.textContent = open ? '✕' : '☰';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setMenu(!links.classList.contains('open'));
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // if the viewport grows back to the desktop nav, drop the mobile state
    window.addEventListener('resize', function () {
      if (window.innerWidth > 780 && links.classList.contains('open')) setMenu(false);
    });
  }

  var soundButtons = document.querySelectorAll('.sound-toggle');
  soundButtons.forEach(function (btn) {
    var container = btn.closest('.hero-video');
    var video = container ? container.querySelector('video') : null;
    var iconMuted = btn.querySelector('.icon-muted');
    var iconUnmuted = btn.querySelector('.icon-unmuted');
    if (video) {
      btn.addEventListener('click', function () {
        video.muted = !video.muted;
        var isMuted = video.muted;
        if (iconMuted) iconMuted.style.display = isMuted ? 'block' : 'none';
        if (iconUnmuted) iconUnmuted.style.display = isMuted ? 'none' : 'block';
        btn.setAttribute('aria-label', isMuted ? 'Turn sound on' : 'Turn sound off');
      });
    }
  });
});
