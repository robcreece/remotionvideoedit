import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

const TeaserCard: React.FC<{
	src: string | null;
	label: string;
	name: string;
	tagline: string;
	accent: string;
}> = ({src, label, name, tagline, accent}) => {
	const frame = useCurrentFrame();
	const kenBurns = interpolate(frame, [0, 75], [1.05, 1.18]);
	return (
		<AbsoluteFill>
			<AbsoluteFill style={{transform: `scale(${kenBurns})`}}>
				<BRollSlot src={src} label={label} accent={accent} />
			</AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontFamily: FONT_STACK,
				}}
			>
				<div
					style={{
						display: 'inline-block',
						background: '#000000d9',
						border: `5px solid ${accent}`,
						borderRadius: 20,
						padding: '20px 50px',
						transform: `rotate(-2deg) scale(${interpolate(frame, [3, 12], [0, 1], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						})})`,
					}}
				>
					<div style={{fontSize: 76, fontWeight: 900, color: accent}}>{name}</div>
					<div style={{fontSize: 40, color: COLORS.white, marginTop: 6}}>
						{tagline}
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

/**
 * 3–12s — quick cuts through the solo teasers, then the sold-out KSPO Dome
 * dates + album card over the group shot.
 */
export const MvDrop: React.FC = () => {
	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			{/* Quick-cut teaser cards: ~2.3s each */}
			<Sequence durationInFrames={70}>
				<TeaserCard
					src={ASSETS.broll.chan}
					label="teaser: Bang Chan"
					name="BANG CHAN"
					tagline="tattooed arm REALNESS 💪"
					accent={COLORS.red}
				/>
			</Sequence>
			<Sequence from={70} durationInFrames={70}>
				<TeaserCard
					src={ASSETS.broll.solo2}
					label="solo teaser"
					name="THE VISUALS"
					tagline="full high-fashion mode 😳"
					accent={COLORS.purple}
				/>
			</Sequence>
			<Sequence from={140} durationInFrames={70}>
				<TeaserCard
					src={ASSETS.broll.solo3}
					label="solo teaser"
					name="ETHEREAL"
					tagline="cute but DEADLY 🌿"
					accent={COLORS.yellow}
				/>
			</Sequence>

			{/* Floating hype sticker across the teaser cuts */}
			<Sequence from={30} durationInFrames={180}>
				<TextPop
					enterAt={0}
					fontSize={52}
					color={COLORS.bgDeep}
					background={COLORS.yellow}
					rotate={4}
					top="10%"
				>
					SERVING LOOKS ✨
				</TextPop>
			</Sequence>

			{/* KSPO Dome dates finale of this section */}
			<Sequence from={210} durationInFrames={60}>
				<AbsoluteFill>
					<BRollSlot src={ASSETS.broll.group} label="group teaser" />
					<AbsoluteFill style={{background: '#000000a8'}} />
					<TextPop enterAt={0} fontSize={92} color={COLORS.yellow} top="20%">
						KSPO DOME
						<br />
						SOLD OUT
					</TextPop>
					<TextPop
						enterAt={10}
						fontSize={60}
						color={COLORS.white}
						rotate={0}
						top="44%"
					>
						5 NIGHTS
						<br />
						FROM JUL 25
					</TextPop>
					<TextPop
						enterAt={22}
						fontSize={54}
						color={COLORS.white}
						background={`${COLORS.red}ee`}
						rotate={-2}
						top="64%"
					>
						"THIS &amp; THAT" — 08.07 💿
					</TextPop>
					<EmojiBurst startAt={8} seed="kspo" emojis={['🔥', '🏟️', '🎫', '😱']} />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
