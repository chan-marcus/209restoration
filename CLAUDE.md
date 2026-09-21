# 209 Restoration

Astro static site, deployed to Cloudflare Pages on every push to `main`.

## Writing rules

- **No em dashes, anywhere.** Not in blog posts, page copy, alt text, SVG text,
  meta descriptions, or code comments. Do not type `--` or `---` in prose as a
  substitute either. Rewrite with a comma, colon, period, or parentheses.
- `npm run build` runs `scripts/check-no-em-dashes.mjs` afterward and fails the
  build (and the Cloudflare deploy) if one slips through. Run
  `npm run check:dashes` to check without building.

## Blog posts

- Markdown in `src/content/blog/`, SVG diagrams in `public/images/blog/`.
- Title under 60 characters and description under 155 (the layout appends
  " | 209 Restoration" to the title).
- Pick topics from Search Console queries with real impressions and an average
  position of 25 or better.
