(function () {
  var list = document.getElementById('post-list');
  if (!list || !window.POSTS) return;

  var posts = window.POSTS.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  posts.forEach(function (post) {
    var a = document.createElement('a');
    a.className = 'post-card';
    a.href = 'post.html?slug=' + encodeURIComponent(post.slug);

    a.innerHTML =
      '<span class="post-date">' + post.dateDisplay + '</span>' +
      '<h2 class="post-title"></h2>' +
      '<p class="post-dek"></p>' +
      '<span class="read-more">Read the entry →</span>';

    a.querySelector('.post-title').textContent = post.title;
    a.querySelector('.post-dek').textContent = post.dek;

    list.appendChild(a);
  });
})();
