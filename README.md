# Texas Moto Racing — team site (Next.js)

Next.js 15, App Router, TypeScript, static export. No database, no server — it builds to plain HTML in `out/`.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

**Everything editable is in `data/site.ts`** — copy, links, deadlines, subteams, sponsorship tiers.
You should not need to touch a component to change words or numbers.

Three things to set before you share the site (search `TODO` in `data/site.ts`):

| Key | Set to |
|---|---|
| `links.interestForm` | your Google interest form URL |
| `links.application` | your Google member application URL |
| `links.instagram` | your Instagram profile URL |

The header clock counts down to `nextDeadline.dueISO`. When the Team Plan is submitted, point it at the next
milestone (they're all listed in `milestones`).

## Deploy

### GitHub Pages (free, recommended)
1. Push this folder to a GitHub repo (`main` branch).
2. Repo **Settings → Pages → Source → GitHub Actions**.
3. Push again (or run the workflow manually). The included workflow builds and publishes it.
   - Repo named `texasmotoracing.github.io` → site at `https://texasmotoracing.github.io`
   - Repo named anything else (e.g. `website`) → `https://<user>.github.io/website/` — the workflow sets the base path automatically.

### Vercel
Import the repo at vercel.com. No configuration needed; it detects Next.js. Leave `NEXT_PUBLIC_BASE_PATH` unset.

## Structure

```
app/           layout (fonts, metadata) and the single page
components/    one file per section, top to bottom
data/site.ts   all copy, links, dates and lists
public/logos/  the crest, number board, speed mark, icon, UT silhouette
```

## Logos
The Longhorn silhouette in `public/logos/ut-white.png` is a UT trademark used under the team's approval.
Replace it with the vector file from UT Trademark Licensing when you have it — and don't reuse it elsewhere
without checking the usage guidelines that came with the approval.
