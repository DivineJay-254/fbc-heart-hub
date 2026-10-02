# FBC Website Project

Free Block Creatives is a lightweight static website built with Vite, React and TanStack Router.

## Development

```sh
npm install
npm run dev
```

## Deploying to cPanel

This project produces a static build and does not require Node.js running on the server.

1. Run `npm install` and `npm run build` on a local machine or cPanel Node.js application environment.
2. Open the generated `dist` folder.
3. Upload **the contents of `dist`** (including the hidden `.htaccess` file) into `public_html` or the domain's document root in cPanel File Manager.
4. Make sure Apache has `mod_rewrite` enabled. The included `.htaccess` preserves direct access to the site's HTML pages and routes client-side paths back to `index.html`.

If the contact or newsletter forms use Supabase, provide the public project URL and publishable key before building. Vite embeds these values into the static JavaScript bundle, so only use the publishable/anon key in this browser app; never expose the Supabase service-role key.

## Static assets

The build copies the legacy HTML pages, `styles.css`, `script.js`, images and `public/.htaccess` into `dist` so the complete site can be uploaded as one folder.
