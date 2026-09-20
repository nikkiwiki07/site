/*
  HOW TO ADD A NEW POST
  ----------------------
  1. Copy one of the objects below (the { ... } block).
  2. Paste it at the top of the POSTS array.
  3. Change slug, title, date, dateDisplay, readTime, dek, and body.
     - slug: lowercase, hyphens only, must be unique (used in the URL)
     - date: YYYY-MM-DD, used for sorting (newest first)
     - body: an array of strings, one per paragraph
       IMPORTANT: every paragraph must end with a comma, like this:
         body: [
           "First paragraph.",
           "Second paragraph.",
         ],
  4. Save the file. blog.html and post.html update automatically —
     no other files need to change.
*/

window.POSTS = [
  {
    slug: "fermi-paradox",
    title: "Fermi Paradox",
    date: "2026-09-20",
    dateDisplay: "September 20, 2026",
    readTime: "4 min read",
    dek: "Are we really alone in the Universe?",
    body: [
      "When you look up at the night sky and look at its being, it makes you feel very small, insignificant, your problems seem lost in a busy Universe. You are just one person out of the gazillions of beings scattered all over all the galaxies, right? Maybe not, maybe you're just one of the billions on Earth. That can't be right, the Universe is infinite, there has to be other living entities out there. But if that's the case, where are they?",
      "My dear reader, I present to you the Fermi Paradox.",
      "What Exactly Is the Fermi Paradox?",
      "The Fermi Paradox is the apparent contradiction between the high statistical likelihood that intelligent civilizations exist elsewhere in the universe and the complete lack of evidence for them.",
      "It all began with a casual conversation that happened in 1950 at the Los Alamos National Laboratory in New Mexico. Enrico Fermi and his colleagues — Edward Teller, Emil Konopinski, and Herbert York — were talking about a cartoon that had run in the newspaper, which led Fermi to arrive at a question: \u201CWhere is everybody?\u201D",
      "There are a lot of theories that try to explain this, many of which can be broken down into broad categories.",
      "Are we really alone?",
      "Theories that fall into this category agree that we really are all alone in the Universe. We are the only civilisation that was lucky (or unlucky) enough to experience what we call life. There comes the Rare Earth Hypothesis. Earth is so incredibly unique, so perfect that against all odds, we made it. We all know that we came about due to incredibly specific combinations of everything. We are special, we are the exception.",
      "They just can't.",
      "Maybe they exist and want to meet us but they are just unable to. The most popular is the Great Filter Hypothesis, in simple terms, it suggests that there is a great impenetrable barrier that stops life from evolving into space travellers. Now let's get back to Earth. What was the greatest discovery of the Paleolithic Period? A very angry little fellow, called Fire. It might seem a little silly to say that aliens don't exist because of fire, but it's not. The Rare Fire theory suggests that fire has enabled a lot of technological advancements for humanity due to the specific requirement of oxygen — maybe other planets with different levels of oxygen haven't discovered fire yet, leaving them without the innovations fire makes possible.",
      "Our planet has fire. Makes me think what the other planets have — what is their fire?",
      "Do they just not want to meet us?",
      "There are theories that suggest we aren't the only civilisation, and that extraterrestrial entities exist and just stay away from us for some reason. We could look at this from two perspectives. First the Zoo Hypothesis, which suggests that we are looked at like zoo animals by all the other aliens in the Universe — they are observing us and do not interact, in order to let us learn things on our own. Doesn't seem so bad. So basically aliens are just a bit nonchalant.",
      "OR we could look at it from another, much less amicable perspective. If we try to understand alien life by looking inward at life on Earth: what reason could there possibly be for why we haven't been reached out to? Maybe the same reason a deer doesn't say hello to a lion. This is the Dark Forest Hypothesis, which looks at the cosmos like a dark forest where predators hunt victims — the difference being that instead of trees we'll have stars. I don't blame aliens. We've all seen the state of the world. We live in a world where man hunts man; aliens shouldn't trust us at all.",
      "So...",
      "What is real? Are we alone? Do aliens exist? I don't know, nobody does. It's a scary thought, thinking that we are alone out here on this floating rock so full of life. Maybe there isn't someone out there on another floating rock to hear our screams when our world comes to an end. Are we the only people wondering if there is something else out there? Or is another entity, equivalent to a weird teenage girl, wondering about us? There can come many theories, but without a hello from the other side, we will never know. And I think that's beautiful. Because if you don't know, it can't hurt.",
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
