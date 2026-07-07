# SKZ "RUN IT SEOUL" Merch Teaser Hype Short

A 38-second, 1080×1920 (9:16) Remotion video implementing the "SKZ Merch
Teaser Drops & Stays Are Selling Their Souls For It 🔥" brief: energetic
gossip/hype commentary short with quick cuts, text pops, emoji bursts, and
swappable B-roll slots.

The video renders complete out of the box using stylized fringe/reflective
placeholder visuals — no copyrighted footage is bundled. Drop in your own
teaser images, fancams, voiceover, and music bed to finish it.

## Scene map (matches the voiceover script)

| Time    | Frames    | Scene       | Content                                                                 |
| ------- | --------- | ----------- | ----------------------------------------------------------------------- |
| 0–3s    | 0–89      | `Hook`      | "STAYS, LOCK IN" siren + "MERCH TEASER JUST DROPPED" slam, dramatic zoom |
| 3–12s   | 90–359    | `MvDrop`    | Quick-cut member cards (Bang Chan / Hyunjin / OT8) + KSPO Dome dates     |
| 12–25s  | 360–749   | `WorldTour` | Early access Jul 16, pre-orders Jul 27, album Aug 7, delulu popup        |
| 25–38s  | 750–1139  | `Cta`       | "Which look wrecked you?", like/subscribe animations, STAY strong outro  |

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
