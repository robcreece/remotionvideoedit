import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {DateBadge} from '../components/DateBadge';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

/**
 * Playful "delulu fan theory" chat-bubble popup.
 */
const DeluluPopup: React.FC<{enterAt: number}> = ({enterAt}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const pop = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 9, stiffness: 150},
	});
	const wobble = Math.sin((frame - enterAt) / 7) * 2;
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 260,
				left: 70,
				right: 70,
				transform: `scale(${pop}) rotate(${wobble}deg)`,
				background: COLORS.white,
				borderRadius: 32,
				padding: '30px 40px',
				fontFamily: FONT_STACK,
				boxShadow: '0 12px 50px #00000088',
			}}
		>
			<div style={{fontSize: 30, color: '#888', marginBottom: 8}}>
				💬 delulu fan theories dept.
			</div>
			<div style={{fontSize: 44, fontWeight: 900, color: '#111', lineHeight: 1.2}}>
				"petition to sell the MEMBERS as the merch 😭✋"
			</div>
		</div>
	);
};

/**
 * 12–25s — merch access dates, album news, hype stats over high-movement
 * stage B-roll.
 */
export const WorldTour: React.FC = () => {
	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			<BRollSlot
				src={ASSETS.broll.stage}
				label="fancam: high-movement choreo (God's Menu / Chk Chk Boom)"
				accent={COLORS.purple}
			/>
			{/* dark scrim so badges read over footage */}
			<AbsoluteFill style={{background: '#00000055'}} />

			<DateBadge
				title="Online early access"
				value="JULY 16"
				enterAt={10}
				top={220}
				accent={COLORS.yellow}
			/>
			<DateBadge
				title="Pre-orders open"
				value="JULY 27"
				enterAt={35}
				top={430}
				accent={COLORS.red}
				fromLeft={false}
			/>
			<DateBadge
				title={`Full album "THIS & THAT"`}
				value="AUGUST 7"
				enterAt={60}
				top={640}
				accent={COLORS.purple}
			/>

			<Sequence from={120}>
				<TextPop
					enterAt={0}
					fontSize={58}
					color={COLORS.bgDeep}
					background={COLORS.yellow}
					rotate={-3}
					top="48%"
				>
					"RUN IT" TOPPING
					<br />
					PRE-VOTES 📈
				</TextPop>
			</Sequence>

			<DeluluPopup enterAt={200} />

			<Sequence from={300}>
				<TextPop
					enterAt={0}
					fontSize={64}
					color={COLORS.white}
					background={`${COLORS.red}ee`}
					rotate={2}
					top="10%"
				>
					STAYS ARE EATING GOOD
					<br />
					THIS ERA 🍽️
				</TextPop>
			</Sequence>

			<EmojiBurst
				startAt={130}
				seed="tour"
				emojis={['📈', '💿', '🛒', '💜', '🔥']}
				count={8}
			/>
		</AbsoluteFill>
	);
};
