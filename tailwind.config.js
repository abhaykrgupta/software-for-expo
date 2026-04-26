/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          500: '#94A3B8',
          400: '#CBD5E1',
          300: '#E2E8F0',
          200: '#F1F5F9',
          100: '#F8FAFC',
        },
        // UClean brand — Green primary
        brand: {
          DEFAULT: '#15803D',
          light: '#16A34A',
          dark: '#14532D',
          green: '#22C55E',
        },
        // Primary accent: green replaces cyan
        green: {
          DEFAULT: '#16A34A',
          500: '#22C55E',
          400: '#4ADE80',
          300: '#86EFAC',
          200: '#BBF7D0',
          glow: 'rgba(22, 163, 74, 0.15)',
          'glow-strong': 'rgba(22, 163, 74, 0.30)',
        },
        // Neon palette — toned down, tech sections only
        neon: {
          green:  '#00D664',
          blue:   '#0066FF',
          violet: '#9F00FF',
          amber:  '#FFB700',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger:  '#EF4444',
        info:    '#3B82F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display':  ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'display-2':['5rem',   { lineHeight: '1.0',  letterSpacing: '-0.04em', fontWeight: '900' }],
        'h1':       ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2':       ['2rem',   { lineHeight: '1.2',  fontWeight: '700' }],
        'h3':       ['1.5rem', { lineHeight: '1.3',  fontWeight: '600' }],
        'body-lg':  ['1.125rem', { lineHeight: '1.6', fontWeight: '500' }],
        'body':     ['1rem',   { lineHeight: '1.6' }],
        'sm':       ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'xs':       ['0.75rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        // Brand (light) gradients
        'gradient-hero':     'linear-gradient(160deg, #F0FDF4 0%, #FFFFFF 55%, #DCFCE7 100%)',
        'gradient-hero-dark':'linear-gradient(135deg, #16A34A 0%, #14532D 100%)',
        'gradient-card':     'radial-gradient(circle at top, rgba(22, 163, 74, 0.10), transparent 70%)',
        'gradient-border':   'linear-gradient(90deg, #16A34A, #15803D)',
        // Text gradients (green)
        'gradient-text':     'linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)',
        'gradient-radial':   'radial-gradient(ellipse at center, #1E293B 0%, #0F172A 100%)',
        // Tech gradient (for dark sections — green accent)
        'gradient-tech':     'linear-gradient(135deg, #00D664 0%, #0066FF 50%, #9F00FF 100%)',
        'gradient-scan':     'linear-gradient(180deg, transparent 0%, rgba(22,163,74,0.04) 50%, transparent 100%)',
        'gradient-command':  'linear-gradient(180deg, rgba(22,163,74,0.05) 0%, rgba(15,23,42,0) 100%)',
        // Background patterns — green tinted
        'grid-dots':  'radial-gradient(circle at 1px 1px, rgba(22, 163, 74, 0.07) 1px, transparent 0)',
        'grid-fine':  'radial-gradient(circle at 1px 1px, rgba(22, 163, 74, 0.04) 1px, transparent 0)',
        'circuit':    'linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(22,163,74,0.04) 1px, transparent 1px)',
        'mesh-hero': `
          radial-gradient(at 20% 20%, rgba(22,163,74,0.15) 0px, transparent 50%),
          radial-gradient(at 80% 10%, rgba(21,128,61,0.20) 0px, transparent 50%),
          radial-gradient(at 50% 90%, rgba(22,163,74,0.08) 0px, transparent 50%)
        `,
        'mesh-command': `
          radial-gradient(at 0%   0%,   rgba(0,214,100,0.06) 0px, transparent 40%),
          radial-gradient(at 100% 0%,   rgba(0,102,255,0.08) 0px, transparent 40%),
          radial-gradient(at 50%  100%, rgba(22,163,74,0.05) 0px, transparent 40%)
        `,
        // Brand light section backgrounds
        'brand-light':  'linear-gradient(160deg, #F0FDF4 0%, #FFFFFF 60%, #DCFCE7 100%)',
        'brand-subtle': 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)',
      },
      backgroundSize: {
        'grid':    '40px 40px',
        'circuit': '60px 60px',
      },
      boxShadow: {
        // Green base glows — reduced intensity vs old cyan
        'glow-sm':  '0 0 16px rgba(22, 163, 74, 0.15)',
        'glow':     '0 0 30px rgba(22, 163, 74, 0.22)',
        'glow-lg':  '0 0 50px rgba(22, 163, 74, 0.32)',
        'glow-xl':  '0 0 80px rgba(22, 163, 74, 0.38)',
        // Cards (dark sections)
        'card':      '0 8px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(22,163,74,0.08) inset',
        'card-hover':'0 20px 56px rgba(0,0,0,0.55), 0 0 32px rgba(22,163,74,0.15)',
        // Cards (light sections)
        'card-light':     '0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(22,163,74,0.12) inset',
        'card-light-hover':'0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(22,163,74,0.25)',
        // Buttons
        'button':       '0 4px 18px rgba(22,163,74,0.35)',
        'button-hover': '0 8px 32px rgba(22,163,74,0.50)',
        // Neon (tech sections — softer)
        'neon-green':  '0 0 4px #00D664, 0 0 14px rgba(0,214,100,0.40), 0 0 32px rgba(0,214,100,0.15)',
        'neon-blue':   '0 0 4px #0066FF, 0 0 14px rgba(0,102,255,0.40), 0 0 32px rgba(0,102,255,0.15)',
        'neon-violet': '0 0 4px #9F00FF, 0 0 14px rgba(159,0,255,0.40), 0 0 32px rgba(159,0,255,0.15)',
        // Holographic card (tech)
        'holo':       '0 0 48px rgba(22,163,74,0.12), 0 0 96px rgba(21,128,61,0.08), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(22,163,74,0.06)',
        'holo-hover': '0 0 64px rgba(22,163,74,0.20), 0 0 128px rgba(21,128,61,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
        // Edge lighting
        'edge-top':    'inset 0 1px 0 rgba(22,163,74,0.4)',
        'edge-bottom': 'inset 0 -1px 0 rgba(22,163,74,0.15)',
      },
      animation: {
        'pulse-glow':    'pulseGlow 2.5s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'ticker':        'ticker 35s linear infinite',
        'gradient-shift':'gradientShift 8s ease infinite',
        'slide-in-right':'slideInRight 0.4s ease-out',
        'fade-up':       'fadeUp 0.5s ease-out',
        'shimmer':       'shimmer 2s linear infinite',
        'border-spin':   'borderSpin 4s linear infinite',
        'particle':      'particle 8s ease-in-out infinite',
        'scan':          'scan 4s linear infinite',
        'scan-fast':     'scan 2s linear infinite',
        'streak':        'streak 5s ease-in-out infinite',
        'radar':         'radar 4s linear infinite',
        'data-flow':     'dataFlow 3s linear infinite',
        'pulse-neon':    'pulseNeon 2s ease-in-out infinite',
        'flicker':       'flicker 0.15s ease-in-out infinite',
        'type':          'type 0.5s steps(20) forwards',
        'glow-border':   'glowBorder 3s linear infinite',
        'bg-pan':        'bgPan 20s linear infinite',
        'grid-move':     'gridMove 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(22,163,74,0.15)' },
          '50%':      { boxShadow: '0 0 64px rgba(22,163,74,0.45), 0 0 128px rgba(22,163,74,0.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        borderSpin: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        particle: {
          '0%,100%': { transform: 'translateY(0) translateX(0) scale(1)',    opacity: '0.3' },
          '33%':     { transform: 'translateY(-30px) translateX(15px) scale(1.1)', opacity: '0.6' },
          '66%':     { transform: 'translateY(-10px) translateX(-10px) scale(0.9)', opacity: '0.4' },
        },
        scan: {
          '0%':   { top: '-2%',   opacity: '1' },
          '80%':  { opacity: '1' },
          '100%': { top: '102%',  opacity: '0' },
        },
        streak: {
          '0%':   { transform: 'translateX(-100%)', opacity: '0' },
          '10%':  { opacity: '0.6' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateX(400%)', opacity: '0' },
        },
        radar: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        dataFlow: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 60px' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%':      { opacity: '1',   filter: 'brightness(1.3)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.88' },
        },
        glowBorder: {
          '0%':   { borderColor: 'rgba(22,163,74,0.25)' },
          '50%':  { borderColor: 'rgba(22,163,74,0.70)' },
          '100%': { borderColor: 'rgba(22,163,74,0.25)' },
        },
        bgPan: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        gridMove: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        'xs':  '2px',
        'sm':  '4px',
        DEFAULT: '8px',
        'md':  '12px',
        'lg':  '16px',
        'xl':  '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
