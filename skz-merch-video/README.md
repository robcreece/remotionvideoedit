# SKZ "RUN IT SEOUL" Merch Teaser Hype Short

Two 1080×1920 (9:16) Remotion hype shorts, each synced to an ElevenLabs
voiceover:

- **`SkzMerchTeaser`** (53.5s) — "SKZ Merch Teasers Just Dropped & Stays
  Are SCREAMING 🔥" — dark neon look, RUN IT SEOUL teaser footage.
  Render: `npm run render`.
- **`SkzTruckPreorder`** (68.6s) — "THIS & THAT Truck Ver. Pre-Order
  Chaos 🚚" — mint/black/corrugated-metal look matching the THIS & THAT
  packaging, keychain-tag badges, pre-order receipts (`src/truck/`).
  Render: `npm run render:truck`.

## SkzMerchTeaser scene map (synced to public/voiceover.mp3)

| Time       | Frames     | Scene       | Content                                                                  |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------ |
| 0–5.8s     | 0–173      | `Hook`      | Zoom on the group teaser, "NEW MERCH TEASERS" slam, siren ticker          |
| 5.8–29.7s  | 174–889    | `MvDrop`    | Quick-cut teaser cards (Chan → solos → OT8) + sold-out KSPO/album card    |
| 29.7–37.3s | 890–1119   | `WorldTour` | Merch access dates over the boxing promo clip, polaroid pop-ins           |
| 37.3–53.5s | 1120–1604  | `Cta`       | "Which teaser wrecked you?", like/subscribe, "STAY STRONG" outro          |

## Getting started

```bash
cd skz-merch-video
npm install

# Live-edit in Remotion Studio
npm run dev

# Render the final MP4 to out/skz-merch-teaser.mp4
npm run render

# Export a thumbnail frame (frame 45 = the hook slam)
npm run still
```

If Chrome isn't auto-detected, pass `--browser-executable=<path-to-chrome>`
to the render command.

## Assets

All asset slots live in [`src/constants.ts`](src/constants.ts) (`ASSETS`)
and point to files in `public/`. The official RUN IT SEOUL teaser images
and the high-energy boxing promo clip are already wired in
(`public/teasers/`, `public/broll/boxing.mp4`). Slots accept images
(`.jpg/.png/.webp`) or videos; any slot set to `null` falls back to a
stylized placeholder.

**Voiceover**: record/generate the script (ElevenLabs "Brittany"), save it
as `public/voiceover.mp3`, and set `voiceover: 'voiceover.mp3'` in
`src/constants.ts`. Same for an optional `music` bed.

The music bed is automatically ducked under the voiceover and punched up at
the hook slam and the CTA (see `musicVolume` in `src/SkzMerchVideo.tsx`).

**Copyright note:** use only short transformative clips for
commentary/review purposes, keep the VO prominent, or use a royalty-free
high-energy beat for full monetization safety.

## Caption (copy-paste)

> Stays are in shambles over the NEW RUN IT SEOUL merch teaser 😭🔥 Fringe,
> reflections, Chan's tattoo, Hyunjin visuals — who's your wrecker this
> time?! Seoul dome dates loading + album soon!! Which member are you buying
> first? 👀 Drop below + tag a Stay!
>
> Stream RUN IT & save THIS & THAT! 💿 #StrayKids #SKZ #RUNIT #RUNITSEOUL
> #StrayKidsComeback #STAY #Kpop #MerchTeaser

## Posting notes

- Post to X first for quick fandom testing/reposts, then YouTube Shorts /
  TikTok / Reels; best in evening or pre-tour hype windows.
- Engagement prompt: "Bias wrecker in the merch? Predict your fave stage
  moment!"
- Challenge: "Comment your bias + one item you'd cop from this teaser. Top
  comments get featured in Part 2!"
