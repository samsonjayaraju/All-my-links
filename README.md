# All My Links

A mobile-friendly link page for Samson (@codexsamm). Visitors can open his LinkedIn, YouTube, and Instagram profiles from a single page. The YouTube button uses an Open-in-App URL that targets the @codexsamm channel.

## Tech stack

Next.js App Router, React, and TypeScript render the page as a static site. Plain CSS handles the responsive layout and avatar animation. The font (DM Sans), platform icons (React Icons), and WebP avatar ship with the site.

## Run locally

Use Node.js 24 and npm. From a terminal, run the following commands.

```sh
git clone https://github.com/samsonjayaraju/All-my-links.git
cd All-my-links
npm ci
npm run dev
```

Open the local URL printed by Next.js, usually [localhost on port 3000](http://localhost:3000).

## Customize the page

| To change | Edit |
| --- | --- |
| Social links and their order | Update the `links` array in [app/page.tsx](app/page.tsx). Each entry has a name, destination URL, icon, and optional account label. Array order sets button order. |
| Display name and handle | Edit the profile header in [app/page.tsx](app/page.tsx). |
| Browser title and page description | Update the metadata in [app/layout.tsx](app/layout.tsx). |
| Profile picture | Replace [public/avatar.webp](public/avatar.webp) with a square WebP image. It also serves as the site icon. |
| Colors, spacing, and motion | Edit [app/globals.css](app/globals.css). The avatar animation follows the visitor’s reduced-motion preference. |

## Check and build

```sh
npm run typecheck
npm run build
```

The build writes the static site to `out/`. To preview those files with Python 3, run the command below and open [localhost on port 8080](http://localhost:8080).

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory out
```
