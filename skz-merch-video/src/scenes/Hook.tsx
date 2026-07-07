import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

/**
 * 0–3s — "Stays, PAUSE everything — Stray Kids just dropped the official
 * merch teasers for RUN IT SEOUL and the boys are looking UNREAL!!"
 * Fast zoom on the group teaser + "NEW MERCH TEASERS" slam.
 */
export const Hook: React.FC = () => {
	const frame = useCurrentFrame();
	// Fast push-in on the teaser over the whole hook.
	const zoom = interpolate(frame, [0, 90], [1.05, 1.32]);
	// Screen shake right when the big text slams in.
	const shake = frame >= 18 && frame < 30 ? Math.sin(frame * 3.1) * 8 : 0;
	// White flash on the slam.
	const flash = interpolate(frame, [16, 19, 26], [0, 0.85, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			<AbsoluteFill
				style={{transform: `scale(${zoom}) translate(${shake}px, ${-shake}px)`}}
			>
				<BRollSlot src={ASSETS.broll.hook} label="group merch teaser" />
			</AbsoluteFill>
			{/* dark scrim so the overlays read */}
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(180deg, #000000aa 0%, transparent 30%, transparent 55%, #000000cc 100%)',
				}}
			/>

			{/* siren-style top ticker */}
			<div
				style={{
					position: 'absolute',
					top: 140,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontFamily: FONT_STACK,
					fontSize: 42,
					fontWeight: 900,
					letterSpacing: 7,
					color: COLORS.red,
					textShadow: '0 0 24px #ff2d55aa, 2px 2px 0 #000',
					opacity: frame % 16 < 10 ? 1 : 0.3,
				}}
			>
				🚨 STAYS, PAUSE EVERYTHING 🚨
			</div>

			<TextPop enterAt={18} fontSize={112} color={COLORS.yellow} top="58%">
				NEW MERCH
				<br />
				TEASERS 🔥
			</TextPop>

			<TextPop
				enterAt={48}
				fontSize={58}
				color={COLORS.white}
				background={`${COLORS.red}ee`}
				rotate={2}
				top="76%"
			>
				RUN IT SEOUL — they look UNREAL 😱
			</TextPop>

			<EmojiBurst startAt={20} seed="hook" count={10} />

			<AbsoluteFill style={{background: COLORS.white, opacity: flash}} />
		</AbsoluteFill>
	);
};
