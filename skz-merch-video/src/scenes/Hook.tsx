import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {FringeBackground} from '../components/FringeBackground';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

/**
 * 0–3s — "Stays, lock in because JYP just dropped the RUN IT SEOUL merch
 * teaser and we are NOT okayyy!" Dramatic zoom on the fringe detail + big
 * "MERCH TEASER JUST DROPPED" slam.
 */
export const Hook: React.FC = () => {
	const frame = useCurrentFrame();
	// Dramatic push-in over the whole hook.
	const zoom = interpolate(frame, [0, 90], [1, 1.18]);
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
				{ASSETS.broll.hookFringe ? (
					<BRollSlot
						src={ASSETS.broll.hookFringe}
						label="teaser fringe close-up"
					/>
				) : (
					<FringeBackground accent={COLORS.red} intensity={1.4} />
				)}

				{/* siren-style top ticker */}
				<div
					style={{
						position: 'absolute',
						top: 140,
						left: 0,
						right: 0,
						textAlign: 'center',
						fontFamily: FONT_STACK,
						fontSize: 44,
						fontWeight: 900,
						letterSpacing: 8,
						color: COLORS.red,
						textShadow: '0 0 24px #ff2d55aa',
						opacity: frame % 16 < 10 ? 1 : 0.3,
					}}
				>
					🚨 STAYS, LOCK IN 🚨
				</div>

				<TextPop enterAt={18} fontSize={118} color={COLORS.yellow} top="34%">
					MERCH TEASER
					<br />
					JUST DROPPED
				</TextPop>

				<TextPop
					enterAt={48}
					fontSize={62}
					color={COLORS.white}
					background={`${COLORS.red}ee`}
					rotate={2}
					top="60%"
				>
					WE ARE NOT OKAYYY 😭
				</TextPop>

				<EmojiBurst startAt={20} seed="hook" count={12} />
			</AbsoluteFill>

			<AbsoluteFill style={{background: COLORS.white, opacity: flash}} />
		</AbsoluteFill>
	);
};
