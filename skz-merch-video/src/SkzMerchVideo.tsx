import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {Cta} from './scenes/Cta';
import {Hook} from './scenes/Hook';
import {MvDrop} from './scenes/MvDrop';
import {WorldTour} from './scenes/WorldTour';
import {
	ASSETS,
	COLORS,
	CTA_DURATION,
	CTA_START,
	HOOK_DURATION,
	HOOK_START,
	MV_DROP_DURATION,
	MV_DROP_START,
	TOTAL_DURATION,
	WORLD_TOUR_DURATION,
	WORLD_TOUR_START,
} from './constants';

/**
 * White flash used as a transition between sections.
 */
const CutFlash: React.FC<{at: number}> = ({at}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [at - 2, at, at + 5], [0, 0.7, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	if (opacity <= 0) {
		return null;
	}
	return <AbsoluteFill style={{background: COLORS.white, opacity}} />;
};

export const SkzMerchVideo: React.FC = () => {
	const frame = useCurrentFrame();
	// Duck the music bed slightly whenever VO is present; punch it up at the
	// hook slam and during the CTA, per the mixing notes.
	const musicVolume = ASSETS.voiceover
		? interpolate(
				frame,
				[0, 20, 30, CTA_START, CTA_START + 30, TOTAL_DURATION],
				[0.35, 0.5, 0.18, 0.18, 0.32, 0.32],
			)
		: 0.6;

	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			<Sequence from={HOOK_START} durationInFrames={HOOK_DURATION}>
				<Hook />
			</Sequence>
			<Sequence from={MV_DROP_START} durationInFrames={MV_DROP_DURATION}>
				<MvDrop />
			</Sequence>
			<Sequence from={WORLD_TOUR_START} durationInFrames={WORLD_TOUR_DURATION}>
				<WorldTour />
			</Sequence>
			<Sequence from={CTA_START} durationInFrames={CTA_DURATION}>
				<Cta />
			</Sequence>

			<CutFlash at={MV_DROP_START} />
			<CutFlash at={WORLD_TOUR_START} />
			<CutFlash at={CTA_START} />

			{ASSETS.voiceover ? <Audio src={staticFile(ASSETS.voiceover)} /> : null}
			{ASSETS.music ? (
				<Audio src={staticFile(ASSETS.music)} volume={musicVolume} />
			) : null}
		</AbsoluteFill>
	);
};
