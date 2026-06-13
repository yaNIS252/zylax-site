/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design system — monochrome strict
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-overlay': 'var(--bg-overlay)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'score-high': 'var(--score-high)',
        'score-mid': 'var(--score-mid)',
        'score-low': 'var(--score-low)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px, 7vw, 88px)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(36px, 5vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(28px, 4vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['24px', { lineHeight: '1.2' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4' }],
        overline: ['11px', { lineHeight: '1.2', letterSpacing: '0.15em' }],
      },
      maxWidth: {
        container: '1120px',
      },
      spacing: {
        section: '160px',
        'section-sm': '96px',
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
        none: '0px',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
