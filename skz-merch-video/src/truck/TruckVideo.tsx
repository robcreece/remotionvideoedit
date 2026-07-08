import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {TruckCta} from './TruckCta';
import {TruckDrop} from './TruckDrop';
import {TruckHook} from './TruckHook';
import {TruckMomentum} from './TruckMomentum';
import {
	TRUCK_ASSETS,
	TRUCK_COLORS as C,
	T_CTA_DURATION,
	T_CTA_START,
	T_DROP_DURATION,
	T_DROP_START,
	T_HOOK_DURATION,
	T_HOOK_START,
	T_MOMENTUM_DURATION,
	T_MOMENTUM_START,
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
	return <AbsoluteFill style={{background: C.white, opacity}} />;
};

export const TruckVideo: React.FC = () => {
	return (
		<AbsoluteFill style={{background: C.silverLight}}>
			<Sequence from={T_HOOK_START} durationInFrames={T_HOOK_DURATION}>
				<TruckHook />
			</Sequence>
			<Sequence from={T_DROP_START} durationInFrames={T_DROP_DURATION}>
				<TruckDrop />
			</Sequence>
			<Sequence from={T_MOMENTUM_START} durationInFrames={T_MOMENTUM_DURATION}>
				<TruckMomentum />
			</Sequence>
			<Sequence from={T_CTA_START} durationInFrames={T_CTA_DURATION}>
				<TruckCta />
			</Sequence>

			<CutFlash at={T_DROP_START} />
			<CutFlash at={T_MOMENTUM_START} />
			<CutFlash at={T_CTA_START} />

			<Audio src={staticFile(TRUCK_ASSETS.voiceover)} />
		</AbsoluteFill>
	);
};
