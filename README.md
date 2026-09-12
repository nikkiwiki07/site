# Dew's Theory — site files

## How to add a new blog post (no HTML editing needed)

1. Open **posts.js** in any text editor.
2. Copy one whole post block — everything from the opening `{` to the closing `},`.
3. Paste it near the top of the `POSTS` array.
4. Edit the fields:
   - `slug` — a short unique id, lowercase with hyphens (e.g. `"europa-ocean"`). This becomes part of the post's URL.
   - `title` — the post title.
   - `date` — `"YYYY-MM-DD"`, used to sort posts (newest first). Doesn't need to match `dateDisplay`.
   - `dateDisplay` — the human-readable date shown on the page (e.g. `"August 21, 2026"`).
   - `readTime` — e.g. `"3 min read"`.
   - `dek` — the one-line teaser shown on the blog list page.
   - `body` — an array of paragraphs. Each item in the list is one paragraph. Add or remove as many as you like.
5. Save the file.

That's it — `blog.html` and `post.html` both read from `posts.js` automatically, so the new post will show up on the blog list and be viewable at `post.html?slug=your-slug` with no other changes.

## Files

- `index.html` — homepage
- `blog.html` — auto-generated list of all posts (reads `posts.js`)
- `post.html` — template that renders a single post based on the `?slug=` in the URL (reads `posts.js`)
- `about.html` — About Me page
- `contact.html` — Contact Me page
- `privacy.html` — Privacy Policy page
- `posts.js` — **edit this to add/change/remove posts**
- `styles.css` — all site styling
- `script.js` — starfield animation
- `blog-list.js` / `post-render.js` — render the blog list / single post from `posts.js`
- `bg-art.svg` — decorative background illustration

## Note on opening the site

Because posts load via JavaScript, some browsers (mainly Chrome) block local `file://` scripts from working perfectly straight off disk in rare cases. If a page looks broken when double-clicked open, the safest fix is to serve the folder locally, e.g. from a terminal inside the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser. Firefox and Safari generally open the files directly without this step.
