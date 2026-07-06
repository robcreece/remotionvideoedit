export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Scene boundaries in frames, matching the voiceover script timings.
export const HOOK_START = 0; // 0–3s
export const HOOK_DURATION = 3 * FPS;
export const MV_DROP_START = HOOK_START + HOOK_DURATION; // 3–12s
export const MV_DROP_DURATION = 9 * FPS;
export const WORLD_TOUR_START = MV_DROP_START + MV_DROP_DURATION; // 12–25s
export const WORLD_TOUR_DURATION = 13 * FPS;
export const CTA_START = WORLD_TOUR_START + WORLD_TOUR_DURATION; // 25–38s
export const CTA_DURATION = 13 * FPS;
export const TOTAL_DURATION = CTA_START + CTA_DURATION; // 1140 frames = 38s

export const COLORS = {
	bg: '#0a0a12',
	bgDeep: '#05050a',
	red: '#ff2d55',
	yellow: '#ffd60a',
	chrome: '#c9cdd6',
	chromeBright: '#f2f4f8',
	purple: '#8b5cf6',
	white: '#ffffff',
};

export const FONT_STACK =
	'"Arial Black", "Helvetica Neue", Arial, sans-serif';

// ---------------------------------------------------------------------------
// Asset slots — everything renders with stylized placeholders out of the box.
// Drop files into `public/` and set the paths below to swap in real footage:
//
//   voiceover: 'voiceover.mp3'   — the recorded VO from the script
//   music:     'music.mp3'       — "RUN IT" music bed (see README copyright note)
//   broll:     'broll/chan.mp4'  — fancam / teaser clips per slot
// ---------------------------------------------------------------------------
export type AssetConfig = {
	voiceover: string | null;
	music: string | null;
	broll: {
		hookFringe: string | null; // fringe detail close-up for the hook zoom
		chan: string | null; // Bang Chan teaser shot / fancam
		hyunjin: string | null; // Hyunjin teaser shot / fancam
		group: string | null; // group reflective-fringe teaser image or clip
		stage: string | null; // high-movement choreo clip for the tour section
	};
};

export const ASSETS: AssetConfig = {
	voiceover: null,
	music: null,
	broll: {
		hookFringe: null,
		chan: null,
		hyunjin: null,
		group: null,
		stage: null,
	},
};
