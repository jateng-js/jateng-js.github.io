# Jateng JS

Jateng JS is a Central Java community site for JavaScript developers, inspired by local JavaScript communities such as SurabayaJS and JogjaJS.

## Tech Stack

- [Astro](https://astro.build/)
- [Bun](https://bun.sh/)
- [Fontsource VT323](https://fontsource.org/fonts/vt323)

## Development

Install dependencies:

```sh
bun install
```

Start the local development server:

```sh
bun run dev
```

Build the static site:

```sh
bun run build
```

Preview the production build:

```sh
bun run preview
```

## Deployment

The site is deployed to GitHub Pages through GitHub Actions.

On every push to `main`, the workflow:

- Installs dependencies with Bun
- Builds the Astro site into `dist`
- Publishes `dist` to the `gh-pages` branch
- Keeps the custom domain configured as `jateng.js.org`

The custom domain is defined in:

```txt
public/CNAME
```

GitHub Pages should be configured to serve from the `gh-pages` branch.
