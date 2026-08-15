# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deployment (GitHub Pages)

1. Install dependencies (if you haven't):

```bash
npm install
```

2. Build and deploy to GitHub Pages (uses `gh-pages`):

```bash
npm run deploy
```

3. Notes:
- `vite.config.js` uses a relative `base` by default so the site can be deployed to GitHub Pages or served from a subpath.
- For a repository hosted at `https://<user>.github.io/<repo>/`, you can set `BASE_URL` when building:

```bash
BASE_URL=/<repo>/ npm run build
```

- The codebase uses `import.meta.env.BASE_URL` for asset/catalogue references so built assets will resolve correctly.
