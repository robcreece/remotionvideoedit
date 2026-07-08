import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {FONT_STACK} from '../constants';
import {CorrugatedBackground} from './components';
import {TRUCK_ASSETS, TRUCK_COLORS as C} from './constants';

/**
 * 0–14.2s — "STAYS! Pre-orders for THIS & THAT just dropped and the limited
 * Truck Version is already breaking the internet — are you ready to run it?!"
 */
export const TruckHook: React.FC = () => {
	const frame = useCurrentFrame();
	// Slow push-in on the contents sheet.
	const zoom = interpolate(frame, [0, 426], [1, 1.14]);
	const shake = frame >= 195 && frame < 208 ? Math.sin(frame * 3.1) * 8 : 0;
	const flash = interpolate(frame, [193, 196, 204], [0, 0.8, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{background: C.silverLight}}>
			<CorrugatedBackground />

			{/* Truck Ver. contents sheet as the hero card */}
			<AbsoluteFill
				style={{transform: `scale(${zoom}) translate(${shake}px, ${-shake}px)`}}
			>
				<div
					style={{
						position: 'absolute',
						top: 300,
						left: 170,
						width: 740,
						transform: 'rotate(-2.5deg)',
						background: C.white,
						border: `7px solid ${C.black}`,
						borderRadius: 24,
						padding: 14,
						boxShadow: '14px 16px 0 #0d0d0d55',
					}}
				>
					<Img
						src={staticFile(TRUCK_ASSETS.contents)}
						style={{width: '100%', borderRadius: 12, display: 'block'}}
					/>
				</div>
			</AbsoluteFill>

			{/* flashing siren ticker on the top band */}
			<div
				style={{
					position: 'absolute',
					top: 116,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontFamily: FONT_STACK,
					fontSize: 46,
					fontWeight: 900,
					letterSpacing: 6,
					color: C.black,
					opacity: frame % 16 < 10 ? 1 : 0.25,
				}}
			>
				🚨 STAYS !! 🚨
			</div>

			<TextPop
				enterAt={125}
				fontSize={54}
				color={C.black}
				background={C.mint}
				rotate={3}
				top="12%"
			>
				PRE-ORDERS ARE LIVE 🛒
			</TextPop>

			<TextPop enterAt={195} fontSize={110} color={C.yellow} top="66%">
				TRUCK VER. 🚚
			</TextPop>

			<TextPop
				enterAt={230}
				fontSize={50}
				color={C.white}
				background={`${C.black}ee`}
				rotate={-2}
				top="78%"
			>
				breaking the internet rn 😱
			</TextPop>

			{/* "are you ready to run it?!" beat at 8.9s */}
			<TextPop
				enterAt={272}
				fontSize={62}
				color={C.black}
				background={C.pink}
				rotate={2}
				top="42%"
			>
				READY TO RUN IT?! 🏃💨
			</TextPop>

			<EmojiBurst
				startAt={130}
				seed="truck-hook"
				emojis={['🚚', '📦', '🔥', '😱', '💜']}
				count={12}
			/>

			<AbsoluteFill style={{background: C.white, opacity: flash}} />
		</AbsoluteFill>
	);
};
