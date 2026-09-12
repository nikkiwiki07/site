(function () {
  var root = document.getElementById('post-root');
  if (!root || !window.POSTS) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');

  var sorted = window.POSTS.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  var index = sorted.findIndex(function (p) { return p.slug === slug; });
  var post = sorted[index];

  if (!post) {
    root.innerHTML =
      '<p class="eyebrow">Hmm</p>' +
      '<h1 class="page-title">Entry not found</h1>' +
      '<p class="page-intro">That one might have drifted off. Head back and pick another.</p>' +
      '<a class="back-link" href="blog.html">← Back to all entries</a>';
    document.title = "Not found — Dew's Theory";
    return;
  }

  document.title = post.title + " — Dew's Theory";

  var bodyHtml = post.body.map(function (para) {
    var p = document.createElement('p');
    p.textContent = para;
    return p.outerHTML;
  }).join('');

  var prev = sorted[index + 1]; // older
  var next = sorted[index - 1]; // newer

  var navHtml = '<a href="blog.html">← Back to all entries</a>';
  if (next) navHtml = '<a href="post.html?slug=' + encodeURIComponent(next.slug) + '">← ' + next.title + '</a>';

  var navHtmlRight = '';
  if (prev) navHtmlRight = '<a href="post.html?slug=' + encodeURIComponent(prev.slug) + '">' + prev.title + ' →</a>';
  else navHtmlRight = '<a href="blog.html">All entries →</a>';

  root.innerHTML =
    '<p class="eyebrow post-meta">' + post.dateDisplay + ' &middot; ' + post.readTime + '</p>' +
    '<h1 class="page-title">' + escapeHtml(post.title) + '</h1>' +
    '<div class="post-body">' + bodyHtml + '</div>' +
    '<nav class="post-nav">' + navHtml + navHtmlRight + '</nav>';

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
})();
