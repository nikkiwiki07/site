(function () {
  var container = document.getElementById('stars');
  if (!container) return;
  var count = window.innerWidth < 600 ? 60 : 110;
  var frag = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    var s = document.createElement('span');
    s.className = 'star-dot';
    var size = (Math.random() * 1.6 + 0.6).toFixed(2);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.top = (Math.random() * 100) + 'vh';
    s.style.opacity = (Math.random() * 0.5 + 0.35).toFixed(2);
    frag.appendChild(s);
  }
  container.appendChild(frag);
})();
