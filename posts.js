/*
  HOW TO ADD A NEW POST
  ----------------------
  1. Copy one of the objects below (the { ... } block).
  2. Paste it at the top of the POSTS array.
  3. Change slug, title, date, dateDisplay, readTime, dek, and body.
     - slug: lowercase, hyphens only, must be unique (used in the URL)
     - date: YYYY-MM-DD, used for sorting (newest first)
     - body: an array of strings, one per paragraph
  4. Save the file. blog.html and post.html update automatically —
     no other files need to change.
*/

window.POSTS = [
  {
    slug: "tabbys-star",
    title: "Tabby's Star",
    date: "2026-08-12",
    dateDisplay: "August 12, 2026",
    readTime: "4 min read",
    dek: "A star that dims in ways no ordinary star should. Nobody has fully explained it. That's the whole appeal.",
    body: [
      "Most stars are boring in the best way. They burn at a steady rate, dim by a fraction of a percent when something crosses in front of them, and behave exactly as the math predicts. Then there's KIC 8462852 — Tabby's Star, named after the astronomer who first flagged it — which occasionally drops in brightness by up to twenty percent, on no fixed schedule, for reasons that still aren't fully settled.",
      "A planet passing in front of a star dims it by a predictable, tiny, regular amount. Tabby's Star doesn't do tiny, and it doesn't do regular. The dips are deep and irregular, which is exactly the kind of behavior that gets a star nicknamed the 'alien megastructure star' in every headline written about it since 2015.",
      "The megastructure idea was always the least likely explanation, and most researchers now favor something quieter: an uneven cloud of dust, or the leftover debris of a shredded comet, drifting across our line of sight in clumps instead of one clean disk. It's a less thrilling answer, but it's the one the evidence keeps pointing toward.",
      "What I like about this star isn't the mystery so much as what it reveals about how we look for answers. We built an entire vocabulary — dips, ingress, egress, forward-scattering — just to describe one star's inconsistency. Then we argued about it for the better part of a decade. That's not indecision. That's just what it looks like to take a strange thing seriously instead of explaining it away too quickly.",
    ],
  },
  {
    slug: "the-great-attractor",
    title: "The Great Attractor",
    date: "2026-07-24",
    dateDisplay: "July 24, 2026",
    readTime: "4 min read",
    dek: "Something massive is pulling our galaxy toward it at over a million miles an hour. We can't see it. We can only feel it.",
    body: [
      "Our galaxy is moving. Not drifting — moving, at roughly 1.4 million miles an hour, toward a region of space we can barely observe because our own galaxy's dust and gas sit directly in the way. Astronomers call it the Zone of Avoidance, which might be the most quietly dramatic name in all of astronomy.",
      "Whatever is pulling us has a name too: the Great Attractor, a gravitational anomaly with the mass of tens of thousands of galaxies, sitting roughly 150 million light-years away, mostly hidden behind the plane of the Milky Way. We know it's there because of how it bends the motion of everything around it — the way you'd know a large object was under a rug by watching how the fabric moves, without ever lifting the rug.",
      "For decades that was the whole story: a massive, mostly invisible thing, inferred entirely from its effects. Later surveys found something even stranger behind it — the Shapley Supercluster, an even larger structure that may be doing a share of the pulling too. The Great Attractor, it turns out, might not be the final answer. It might just be the nearest layer of a much bigger one.",
      "I think about this more than is probably useful — that we are, all of us, on a planet, in a galaxy, being quietly hauled across the universe toward something we've never directly seen and can only measure by the way it changes our trajectory. It's a strange comfort, honestly. Some pulls are real even when the source stays out of view.",
    ],
  },
  {
    slug: "the-bootes-void",
    title: "The Boötes Void",
    date: "2026-07-02",
    dateDisplay: "July 2, 2026",
    readTime: "3 min read",
    dek: "A region of space nearly 250 million light-years across, containing almost nothing. Astronomers call it the Great Nothing, without much exaggeration.",
    body: [
      "Most of the universe is not empty in any meaningful sense — even the 'empty' parts of space between galaxies are threaded with faint filaments of gas and dark matter, part of a vast cosmic web. Then there's the Boötes Void, a roughly spherical region about 250 million light-years across, containing far fewer galaxies than it should. Early surveys found only a handful where thousands were expected.",
      "For a while, the running joke among astronomers was that if a civilization existed at the center of the Boötes Void, it would have had no way of discovering astronomy at all — nothing bright enough or close enough in the sky to make anyone look up and wonder. It's since turned out to be less empty than first measured; later, more sensitive surveys found more galaxies hiding in it than the original count suggested. But it remains one of the largest known voids in the observable universe, a place where the usual scaffolding of galaxies and gas simply thins out to almost nothing.",
      "Voids like this aren't failures of the universe to fill space evenly. They're part of how structure forms in the first place — matter clumping into filaments and walls, leaving vast underdense regions in between, the same way bread dough develops both dense knots and open pockets as it rises. The Boötes Void isn't a gap in the plan. It's what the plan looks like when you zoom out far enough to see the gaps as part of the pattern.",
      "I keep coming back to it because it's one of the only things I've learned about the universe that made emptiness sound less like an absence and more like a shape.",
    ],
  },
];
