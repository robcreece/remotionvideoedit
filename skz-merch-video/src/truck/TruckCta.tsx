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
import {TextPop} from '../components/TextPop';
import {FONT_STACK} from '../constants';
import {CorrugatedBackground, TagBadge} from './components';
import {TRUCK_ASSETS, TRUCK_COLORS as C} from './constants';

const SubscribeChip: React.FC<{enterAt: number}> = ({enterAt}) => {
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
				top: '76%',
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				transform: `translateY(${(1 - slide) * 300}px)`,
			}}
		>
			<div
				style={{
					background: C.black,
					borderRadius: 22,
					border: `5px solid ${C.mint}`,
					padding: '28px 64px',
					fontFamily: FONT_STACK,
					fontSize: 64,
					fontWeight: 900,
					color: C.white,
					display: 'flex',
					alignItems: 'center',
					gap: 26,
					boxShadow: '8px 10px 0 #0d0d0d55',
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
 * 46.7–68.6s — version-picker tags, comment prompt, pre-order/stream/
 * subscribe chips, and the "You Make Stray Kids Stay" sign-off.
 */
export const TruckCta: React.FC = () => {
	const frame = useCurrentFrame();
	const fadeOut = interpolate(frame, [627, 656], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{background: C.silverLight, opacity: fadeOut}}>
			<CorrugatedBackground />

			<TextPop enterAt={8} fontSize={84} color={C.black} top="12%" rotate={-2}>
				WHICH VERSION
				<br />
				ARE YOU GRABBING? 👇
			</TextPop>

			{/* version picker tags, popping as the VO lists them (~48–52s) */}
			<TagBadge
				text="TRUCK VER. 🚚"
				enterAt={55}
				top={700}
				left={95}
				color={C.mint}
				rotate={-4}
				fontSize={44}
			/>
			<TagBadge
				text="THIS VER. 🤍"
				enterAt={85}
				top={720}
				left={590}
				color={C.white}
				rotate={3}
				fontSize={44}
			/>
			<TagBadge
				text="THAT VER. 🖤"
				enterAt={115}
				top={930}
				left={95}
				color={C.black}
				textColor={C.white}
				rotate={3}
				fontSize={44}
			/>
			<TagBadge
				text="& VER. 💗"
				enterAt={145}
				top={950}
				left={590}
				color={C.pink}
				rotate={-3}
				fontSize={44}
			/>

			{/* "Drop your bias's keychain wish in the comments…" ~53s */}
			<TextPop
				enterAt={200}
				exitAt={385}
				fontSize={46}
				color={C.white}
				background={`${C.black}ee`}
				rotate={2}
				top="64%"
			>
				drop your bias's keychain wish 💬
				<br />
				+ tag a fellow STAY 🫂
			</TextPop>

			{/* "Pre-order links in bio, stream RUN IT…" ~60s */}
			<Sequence from={400}>
				<TagBadge
					text="PRE-ORDER: LINK IN BIO 🔗"
					enterAt={0}
					top={1170}
					left={165}
					color={C.yellow}
					rotate={-2}
					fontSize={38}
				/>
				<TagBadge
					text="STREAM 'RUN IT' 🎧"
					enterAt={30}
					top={1295}
					left={250}
					color={C.blue}
					rotate={2}
					fontSize={38}
				/>
			</Sequence>
			<SubscribeChip enterAt={455} />

			{/* "You Make Stray Kids Stay!" ~66.4s over the group shot */}
			<Sequence from={585}>
				<AbsoluteFill>
					<BRollSlot src={TRUCK_ASSETS.esbGroup} label="group photo" />
					<AbsoluteFill style={{background: '#000000a0'}} />
					<TextPop enterAt={0} fontSize={82} color={C.mint} top="38%">
						YOU MAKE
						<br />
						STRAY KIDS STAY 💜
					</TextPop>
				</AbsoluteFill>
			</Sequence>

			<EmojiBurst
				startAt={160}
				seed="truck-cta"
				emojis={['🔑', '💬', '🚚', '💜', '🛒']}
				count={10}
			/>
		</AbsoluteFill>
	);
};
