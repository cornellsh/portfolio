---
title: "Typography and media reference"
description: "Every element the blog renders — prose, lists, code, quotes, images, video — in one post, so the design has one place to fail first."
publishedAt: 2026-04-21
draft: false
featured: true
---

This is the reference post. Every Markdown feature the blog supports lives here so I can see them all in one place and catch regressions when I change the styles.

## Body

Paragraphs wrap around 68 characters. Inline `code` uses a subtle chip. [Links](https://cornell.sh) are underlined at 1px and pick up the accent on hover. **Strong** carries weight; *emphasis* stays neutral in color, italic only.

## Lists

Unordered, nested, back to root:

- Top-level item.
- Another one.
  - Nested item.
  - Nested item.
- Back out.

Ordered:

1. First.
2. Second.
3. Third.

## Code

Block code renders against a dark slate background:

```ts
export async function getAllBlogPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}
```

## Quotes

> Write for the code-review voice, not the launch announcement. If a sentence sounds like marketing, cut it.

## Images

A single image at the column width:

<figure>
  <img src="/og-image.svg" alt="Cornell Shakh social card" width="1200" height="630" loading="lazy" decoding="async" />
  <figcaption>Single figure. Spans the prose column, rounded, light border.</figcaption>
</figure>

Two images in a grid, useful for before/after or small comparisons:

<figure class="figure--grid">
  <img src="/projects/dska.svg" alt="DSKA mark" width="245" height="208" loading="lazy" decoding="async" />
  <img src="/projects/ombra.svg" alt="Ombra mark" width="338" height="273" loading="lazy" decoding="async" />
  <figcaption>Grid figure. Collapses to a single column on narrow viewports.</figcaption>
</figure>

A plain figure, no chrome — for marks and logos that carry their own framing:

<figure class="figure--plain">
  <img src="/brand-mark.svg" alt="Cornell mark" width="120" height="120" loading="lazy" decoding="async" />
  <figcaption>Plain figure. No border, no background, no radius.</figcaption>
</figure>

## Video

HTML5 `<video>` is supported — same sizing, border, and rounding as images. When there's a real clip to embed, the markup looks like this:

```html
<figure>
  <video controls muted playsinline preload="metadata" poster="/poster.jpg">
    <source src="/clips/demo.mp4" type="video/mp4" />
  </video>
  <figcaption>Short clips render inline; longer ones get their own post.</figcaption>
</figure>
```

## Horizontal rule

---

That's the whole set. If something new lands in a future post — audio players, interactive embeds, math — it gets added here first.
