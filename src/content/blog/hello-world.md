---
title: "Hello, world"
description: "A placeholder post while I build and test the blog. Mostly here to showcase how posts render on this site."
publishedAt: 2026-04-21
draft: false
featured: true
---

This is a placeholder post. I set up a blog on my personal site and wanted a real entry to look at while I iterated on layout, typography, and the reading experience, rather than staring at Lorem Ipsum.

It exists to:

- Demonstrate that the blog actually works end-to-end — content collection, routing, RSS, structured data.
- Let me eyeball the archive card, the article header, the prose styling, and the in-article table of contents with realistic content volume.
- Hold space until I have something I actually want to publish.

## What this blog will be

Short, concrete posts about building software. Things I learn shipping real products — internal tools, web apps, AI-adjacent features — written in the voice I'd use in a code review rather than a launch announcement.

Expect notes on:

- Architectural trade-offs and the reasons I picked one over another.
- Developer-experience wins that actually compound.
- The product-engineering overlap — when to push back on a spec, when to just build it.

## How it's built

The site is an Astro 6 static build. Posts are Markdown files in a content collection, rendered through a custom reading layout with an in-article TOC. The feed lives at `/rss.xml` and a `sitemap-index.xml` is generated at build time so crawlers can find everything.

No CMS, no database — the whole blog is just files in a repo. That's the point.

## Next up

Real posts. Until then, this entry is the control sample.
