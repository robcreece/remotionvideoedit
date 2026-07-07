import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {FringeBackground} from '../components/FringeBackground';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

/**
 * Like button that gets "smashed": springs in, then pulses.
 */
const LikeSmash: React.FC<{enterAt: number}> = ({enterAt}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const enter = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 8, stiffness: 180},
	});
	const pulse = 1 + Math.max(0, Math.sin((frame - enterAt) / 6)) * 0.15;
	return (
		<div
			style={{
				position: 'absolute',
				top: '56%',
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				gap: 60,
				transform: `scale(${enter * pulse})`,
			}}
		>
			{/* thumbs-up chip */}
			<div
				style={{
					background: COLORS.white,
					borderRadius: 60,
					padding: '26px 54px',
					fontSize: 64,
					fontFamily: FONT_STACK,
					fontWeight: 900,
					color: '#111',
					boxShadow: `0 0 50px ${COLORS.yellow}66`,
				}}
			>
				👍 LIKE
			</div>
			{/* heart chip */}
			<div
				style={{
					background: COLORS.red,
					borderRadius: 60,
					padding: '26px 54px',
					fontSize: 64,
					fontFamily: FONT_STACK,
					fontWeight: 900,
					color: COLORS.white,
					boxShadow: `0 0 50px ${COLORS.red}88`,
				}}
			>
				❤️ 4.04M
			</div>
		</div>
	);
};

const SubscribePill: React.FC<{enterAt: number}> = ({enterAt}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const slide = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 12, stiffness: 130},
	});
	const bell = Math.sin((frame - enterAt) / 4) * 14;
	return (
		<div
			style={{
				position: 'absolute',
				top: '70%',
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				transform: `translateY(${(1 - slide) * 300}px)`,
			}}
		>
			<div
				style={{
					background: COLORS.red,
					borderRadius: 24,
					padding: '30px 70px',
					fontFamily: FONT_STACK,
					fontSize: 70,
					fontWeight: 900,
					color: COLORS.white,
					display: 'flex',
					alignItems: 'center',
					gap: 28,
					boxShadow: `0 0 60px ${COLORS.red}aa`,
				}}
			>
				SUBSCRIBE
				<span style={{display: 'inline-block', transform: `rotate(${bell}deg)`}}>
					🔔
				</span>
			</div>
		</div>
	);
};

/**
 * 25–38s — "Which member's look is wrecking you the most?" + like/subscribe
 * animations and the STAY strong sign-off.
 */
export const Cta: React.FC = () => {
	const frame = useCurrentFrame();
	const fadeOut = interpolate(frame, [360, 389], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{background: COLORS.bgDeep, opacity: fadeOut}}>
			<BRollSlot src={ASSETS.broll.group} label="group teaser" />
			<AbsoluteFill style={{background: '#000000b8'}} />
			<FringeBackground accent={COLORS.purple} intensity={0.5} />

			<TextPop enterAt={5} fontSize={92} color={COLORS.yellow} top="16%">
				WHICH TEASER
				<br />
				WRECKED YOU? 👇
			</TextPop>

			<TextPop
				enterAt={30}
				exitAt={195}
				fontSize={48}
				color={COLORS.white}
				background="#000000cc"
				rotate={2}
				top="38%"
			>
				drop your bias in the comments 💬
			</TextPop>

			<LikeSmash enterAt={60} />
			<SubscribePill enterAt={90} />

			<Sequence from={200} durationInFrames={95}>
				<TextPop
					enterAt={0}
					fontSize={54}
					color={COLORS.bgDeep}
					background={COLORS.yellow}
					rotate={-2}
					top="40%"
				>
					STREAM "RUN IT" 🎧
					<br />
					DAILY SKZ TEA ☕
				</TextPop>
			</Sequence>

			<Sequence from={300}>
				<TextPop enterAt={0} fontSize={100} color={COLORS.purple} top="34%">
					STAY STRONG 💜
				</TextPop>
			</Sequence>

			<EmojiBurst
				startAt={70}
				seed="cta"
				emojis={['💬', '❤️', '👇', '💜', '🔔']}
				count={10}
			/>
		</AbsoluteFill>
	);
};
