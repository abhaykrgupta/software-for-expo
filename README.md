# UClean Expo PWA

A Next.js 14 Progressive Web App built for UClean franchise trade show events. Features a live analytics dashboard, franchise lead capture, sales rep management, and CRM integration.

## Quick Start

```bash
npm install
npm run dev
```

## Pages

| Route | Purpose |
|-------|---------|
| `/expo` | LED-style live analytics dashboard for booth TV/screen |
| `/form` | Franchise enquiry form (public-facing, NFC/QR tap) |
| `/leads` | Sales rep lead management (requires login) |
| `/franchise` | Franchise landing page |
| `/sales-login` | Sales rep login |
| `/admin-login` | Admin login |

## API Routes

| Endpoint | Purpose |
|----------|---------|
| `POST /api/auth/login` | Sales rep / admin authentication |
| `POST /api/auth/logout` | End session |
| `GET /api/auth/session` | Check current session |
| `POST /api/auth/signup` | Register new sales user |
| `GET/POST /api/leads` | List / create leads |
| `GET/PATCH/DELETE /api/leads/[id]` | Lead detail operations |
| `GET /api/leads/my` | Leads owned by current sales rep |
| `POST /api/leads/sync` | Sync leads to Zixflow CRM |
| `POST /api/webhooks/zixflow` | Zixflow inbound webhook |
| `POST /api/notifications/enqueue` | Enqueue WhatsApp notifications |
| `GET /api/admin/backup` | Export all leads + users as JSON (admin only) |

## Build & Deploy

```bash
npm run build
npm start
# or push to GitHub → import on vercel.com (zero config)
```

## Stack

- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- SQLite via better-sqlite3
- iron-session (auth)
- Framer Motion (animations)
- Zixflow CRM integration
- WhatsApp notifications
- next-pwa (offline / service worker)
- Recharts + React Simple Maps

## Environment Variables

See `next-env.d.ts` for required env vars (Zixflow API key, WhatsApp credentials, session secret, etc.).

## Brand Colors

| Token | Hex |
|-------|-----|
| Navy | `#0A2463` |
| Cyan (neon) | `#00D9FF` |
| Dark bg | `#051232` |
