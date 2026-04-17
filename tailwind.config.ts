import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#07081A',
        void: '#0D0E2A',
        nebula: '#12143A',
        forge: '#7C3AED',
        crystal: '#A78BFA',
        electric: '#818CF8',
        pulse: '#C084FC',
        star: '#38BDF8',
        signal: '#34D399',
        flare: '#FBBF24',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(48px, 8vw, 96px)',
        h1: 'clamp(32px, 5vw, 56px)',
        h2: 'clamp(22px, 3.5vw, 36px)',
        h3: 'clamp(16px, 2.5vw, 22px)',
        body: 'clamp(14px, 1.5vw, 16px)',
        small: 'clamp(11px, 1.2vw, 13px)',
      },
      borderRadius: {
        glass: '16px',
        liquid: '24px',
      },
      animation: {
        'liquid-shift': 'liquid-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'liquid-shift': {
          '0%, 100%': { '--hue': '0deg' },
          '50%': { '--hue': '30deg' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
