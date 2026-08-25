document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.textContent = '☰';
      });
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
