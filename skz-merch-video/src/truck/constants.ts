import {FPS} from '../constants';

// THIS & THAT packaging palette: mint, black, white, corrugated silver,
// plus the pastel keychain-tag colors from the Truck Ver. contents sheet.
export const TRUCK_COLORS = {
	mint: '#5ad6c2',
	mintDeep: '#2fae99',
	black: '#0d0d0d',
	white: '#ffffff',
	silver: '#c9ccd2',
	silverLight: '#eef0f3',
	pink: '#f6a8c5',
	blue: '#9ac8f5',
	yellow: '#f2de62',
};

// Scene boundaries synced to public/truck/voiceover.mp3 (68.13s).
export const T_HOOK_START = 0; // "STAYS! Pre-orders… ready to run it?!" 0–14.2s
export const T_HOOK_DURATION = 426;
export const T_DROP_START = T_HOOK_START + T_HOOK_DURATION; // 14.2–31.8s contents
export const T_DROP_DURATION = 528;
export const T_MOMENTUM_START = T_DROP_START + T_DROP_DURATION; // 31.8–46.7s tour hype
export const T_MOMENTUM_DURATION = 447;
export const T_CTA_START = T_MOMENTUM_START + T_MOMENTUM_DURATION; // 46.7–68.6s CTA
export const T_CTA_DURATION = 657;
export const T_TOTAL_DURATION = T_CTA_START + T_CTA_DURATION; // 2058 frames = 68.6s

export const T_FPS = FPS;

export const TRUCK_ASSETS = {
	voiceover: 'truck/voiceover.mp3',
	contents: 'truck/contents.jpg', // Truck Ver. contents infographic (418px wide — card use only)
	preorderPage: 'truck/preorder-page.jpg', // lnk.to pre-order page screenshot
	preorderVersions: 'truck/preorder-versions.jpg', // versions + pre-save screenshot
	esbGroup: 'truck/esb-group.jpg', // Empire State Building group photo
	esbLineup: 'truck/esb-lineup.jpg', // ESB lineup photo
	merchTeaser: 'teasers/group.jpg', // reused RUN IT SEOUL merch teaser
};
