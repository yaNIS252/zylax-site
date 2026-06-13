# Zylax — Site Web V1

Site statique Astro pour [zylax.fr](https://zylax.fr) — automatisation du support client SaaS B2B par RAG.

## Stack

- **Framework** : [Astro 4](https://astro.build) — génère du HTML pur, zéro JS par défaut
- **Styling** : [Tailwind CSS v3](https://tailwindcss.com)
- **Fonts** : Inter + Syne auto-hébergées en `.woff2` (dans `public/fonts/`)
- **Hébergement** : [Cloudflare Pages](https://pages.cloudflare.com)
- **Domaine** : zylax.fr

## Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:4321
```

## Build et prévisualisation

```bash
# Build de production
npm run build
# → output dans dist/

# Prévisualiser le build local
npm run preview
# → http://localhost:4321
```

## Déployer sur Cloudflare Pages

1. Pousser le repo sur GitHub (privé)
2. Dans Cloudflare Pages → "Create a project" → connecter le repo
3. Paramètres de build :
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Node.js version** : 18 (ou 20)
4. Cloudflare déploie automatiquement à chaque push sur `main`

## Configuration DNS (zylax.fr → Cloudflare)

1. Dans Cloudflare Pages, copier le domaine Pages (`*.pages.dev`)
2. Dans le registrar de `zylax.fr` : pointer les NS vers Cloudflare
3. Dans Cloudflare DNS : ajouter un CNAME `@` → domaine Pages
4. Dans Cloudflare Pages → Custom domains : ajouter `zylax.fr` + `www.zylax.fr`

## Structure du projet

```
zylax-site/
├── public/
│   ├── fonts/              # Inter + Syne .woff2 auto-hébergées
│   ├── favicon.svg         # Monogramme Z (LogoC mark)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Logo.astro      # Logo actif (changer ACTIVE_LOGO pour A/B/C)
│   │   ├── LogoA.astro     # Wordmark géométrique pur
│   │   ├── LogoB.astro     # Pictogramme + wordmark
│   │   ├── LogoC.astro     # Monogramme Z + zylax minuscules
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       └── Card.astro
│   ├── layouts/
│   │   └── Base.astro      # Layout principal (meta, fonts, SEO, reveal script)
│   ├── pages/
│   │   └── index.astro     # One-pager (page de test en Phase 1)
│   └── styles/
│       └── global.css      # Tokens CSS + reset + animations
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Changer de logo

Dans [`src/components/Logo.astro`](src/components/Logo.astro) :

```js
export const ACTIVE_LOGO = 'A'; // ← changer ici : 'A' | 'B' | 'C'
```

## Personnaliser le lien Calendly

Dans les composants qui contiennent `Réserver une démo`, remplacer :
```
https://calendly.com/zylax/demo-20min
```
par votre URL Calendly réelle.

## Pages à compléter avant mise en ligne

- `src/pages/mentions-legales.astro` → remplir les placeholders `[À_REMPLIR : ...]`
- `src/pages/conditions-generales-de-vente.astro` → faire relire par un juriste
- `src/pages/politique-confidentialite.astro` → remplir les dates

## Phases de livraison

- [x] **Phase 1** — Foundation : design system, fonts, logos, composants UI
- [ ] **Phase 2** — Hero, Problème, Comment ça marche, Routing
- [ ] **Phase 3** — ICP, Comparatif, Pricing, Souveraineté, About
- [ ] **Phase 4** — FAQ, CTA final, Footer, pages légales
- [ ] **Phase 5** — Polish Lighthouse, responsive, déploiement Cloudflare
