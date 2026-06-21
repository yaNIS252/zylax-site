import { i as createAstro, j as createComponent, o as renderTemplate, n as renderSlot, l as renderHead, u as unescapeHTML, h as addAttribute } from "./astro/server.js";
import "kleur/colors";
import "clsx";
/* empty css        */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://zylax.fr");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Zylax — Automatisation du support client SaaS B2B par RAG",
    description = "Moteur IA qui lit votre documentation et automatise 65-70% des tickets Zendesk ou Intercom. Hébergement France, RGPD natif, setup en 5 jours.",
    ogImage = "https://zylax.fr/og-image.png",
    canonical = "https://zylax.fr/"
  } = Astro2.props;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Zylax",
        url: "https://zylax.fr",
        logo: "https://zylax.fr/favicon-32.png",
        email: "yanis@zylax.fr",
        description: "Automatisation du support client SaaS B2B par RAG, hébergement européen, RGPD natif.",
        address: { "@type": "PostalAddress", addressCountry: "FR" }
      },
      {
        "@type": "WebSite",
        name: "Zylax",
        url: "https://zylax.fr"
      }
    ]
  });
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Fonts preload — priorité critique pour LCP --><link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/syne-variable.woff2" as="font" type="font/woff2" crossorigin><link rel="preconnect" href="https://calendly.com" crossorigin><link rel="dns-prefetch" href="https://calendly.com"><link rel="preload" href="/_astro/index.D7v9hyZq.css" as="style"><link rel="preload" href="/_astro/index.DMVmBMwi.css" as="style"><!-- SEO --><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="Zylax"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicons --><link rel="icon" type="image/png" href="/favicon-32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- JSON-LD structured data --><script type="application/ld+json">', '<\/script><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml">', '</head> <body> <!-- Skip link accessibilité --> <a href="#main-content" class="skip-link">Aller au contenu principal</a> ', " <!-- Reveal on scroll — Intersection Observer pur, 0 lib externe -->  </body> </html> "])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(jsonLd), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/yanis/Documents/Zylax/zylax-site/src/layouts/Base.astro", void 0);
export {
  $$Base as $
};
