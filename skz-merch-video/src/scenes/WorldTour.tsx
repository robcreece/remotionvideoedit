import React from 'react';
import {
	AbsoluteFill,
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {DateBadge} from '../components/DateBadge';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

/**
 * Snapshot that spins in like a taped-up polaroid.
 */
const Polaroid: React.FC<{
	src: string | null;
	caption: string;
	enterAt: number;
	bottom: number;
	left?: number;
	right?: number;
	rotate: number;
}> = ({src, caption, enterAt, bottom, left, right, rotate}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt || !src) {
		return null;
	}
	const pop = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 11, stiffness: 140},
	});
	return (
		<div
			style={{
				position: 'absolute',
				bottom,
				left,
				right,
				width: 430,
				padding: '16px 16px 18px',
				background: COLORS.white,
				borderRadius: 10,
				boxShadow: '0 14px 50px #000000aa',
				transform: `scale(${pop}) rotate(${rotate}deg)`,
			}}
		>
			<Img
				src={staticFile(src)}
				style={{width: '100%', height: 360, objectFit: 'cover', borderRadius: 6}}
			/>
			<div
				style={{
					marginTop: 12,
					textAlign: 'center',
					fontFamily: FONT_STACK,
					fontSize: 30,
					fontWeight: 900,
					color: '#111',
				}}
			>
				{caption}
			</div>
		</div>
	);
};

/**
 * 12–25s — merch access dates over the high-movement promo clip, fan-buzz
 * stickers, and behind-the-scenes polaroids.
 */
export const WorldTour: React.FC = () => {
	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			<BRollSlot
				src={ASSETS.broll.stage}
				label="fancam: high-movement choreo"
				accent={COLORS.purple}
			/>
			{/* dark scrim so badges read over footage */}
			<AbsoluteFill style={{background: '#00000066'}} />

			{/* VO here (29.7–37.3s): "Fans are losing it… early access July 16
			    to 19 and pre-orders from the 27th… JYP knows exactly…" */}
			<Sequence from={0} durationInFrames={85}>
				<TextPop
					enterAt={0}
					fontSize={60}
					color={COLORS.bgDeep}
					background={COLORS.yellow}
					rotate={-3}
					top="47%"
				>
					STAYS ARE NOT OKAY 👀
				</TextPop>
			</Sequence>

			<DateBadge
				title="Online early access"
				value="JUL 16 – 19"
				enterAt={30}
				top={200}
				accent={COLORS.yellow}
			/>
			<DateBadge
				title="Online pre-order"
				value="JUL 27 – AUG 5"
				enterAt={60}
				top={410}
				accent={COLORS.red}
				fromLeft={false}
			/>
			<DateBadge
				title="Offline sales — show days"
				value="7.25-26 · 7.29 · 8.1-2"
				enterAt={85}
				top={620}
				accent={COLORS.purple}
			/>

			<Polaroid
				src={ASSETS.broll.selfie}
				caption="the boys rn 🥊"
				enterAt={100}
				bottom={170}
				left={60}
				rotate={-6}
			/>
			<Polaroid
				src={ASSETS.broll.bts}
				caption="BTS cam 📸"
				enterAt={125}
				bottom={200}
				right={60}
				rotate={5}
			/>

			<Sequence from={150}>
				<TextPop
					enterAt={0}
					fontSize={58}
					color={COLORS.white}
					background={`${COLORS.red}ee`}
					rotate={2}
					top="45%"
				>
					JYP knows EXACTLY
					<br />
					what they're doing 😏
				</TextPop>
			</Sequence>

			<EmojiBurst
				startAt={40}
				seed="tour"
				emojis={['📈', '💿', '🛒', '💜', '🔥']}
				count={8}
			/>
		</AbsoluteFill>
	);
};
