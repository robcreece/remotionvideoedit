import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {FringeBackground} from '../components/FringeBackground';
import {TextPop} from '../components/TextPop';
import {ASSETS, COLORS, FONT_STACK} from '../constants';

const MemberCard: React.FC<{
	src: string | null;
	label: string;
	name: string;
	tagline: string;
	accent: string;
}> = ({src, label, name, tagline, accent}) => {
	const frame = useCurrentFrame();
	const kenBurns = interpolate(frame, [0, 75], [1.05, 1.15]);
	return (
		<AbsoluteFill>
			<AbsoluteFill style={{transform: `scale(${kenBurns})`}}>
				<BRollSlot src={src} label={label} accent={accent} />
			</AbsoluteFill>
			<div
				style={{
					position: 'absolute',
					bottom: 320,
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
					<div style={{fontSize: 84, fontWeight: 900, color: accent}}>{name}</div>
					<div style={{fontSize: 42, color: COLORS.white, marginTop: 6}}>
						{tagline}
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

/**
 * 3–12s — quick cuts: Bang Chan, Hyunjin, group fringe fits, then the KSPO
 * Dome dates takeover.
 */
export const MvDrop: React.FC = () => {
	return (
		<AbsoluteFill style={{background: COLORS.bgDeep}}>
			{/* Quick-cut member cards: ~2.3s each */}
			<Sequence durationInFrames={70}>
				<MemberCard
					src={ASSETS.broll.chan}
					label="fancam: Bang Chan teaser look"
					name="BANG CHAN"
					tagline="tattooed arm REALNESS 💪"
					accent={COLORS.red}
				/>
			</Sequence>
			<Sequence from={70} durationInFrames={70}>
				<MemberCard
					src={ASSETS.broll.hyunjin}
					label="fancam: Hyunjin teaser look"
					name="HYUNJIN"
					tagline="a whole PRINCE 👑"
					accent={COLORS.purple}
				/>
			</Sequence>
			<Sequence from={140} durationInFrames={70}>
				<MemberCard
					src={ASSETS.broll.group}
					label="teaser: group reflective fringe fits"
					name="OT8"
					tagline="reflective fringe DOMINATION"
					accent={COLORS.yellow}
				/>
			</Sequence>

			{/* Floating hype sticker across the member cuts */}
			<Sequence from={30} durationInFrames={180}>
				<TextPop
					enterAt={0}
					fontSize={54}
					color={COLORS.bgDeep}
					background={COLORS.yellow}
					rotate={4}
					top="12%"
				>
					Fringe serving LOOKS ✨
				</TextPop>
			</Sequence>

			{/* KSPO Dome dates finale of this section */}
			<Sequence from={210} durationInFrames={60}>
				<AbsoluteFill>
					<FringeBackground accent={COLORS.yellow} />
					<TextPop enterAt={0} fontSize={96} color={COLORS.yellow} top="22%">
						KSPO DOME
						<br />
						TAKEOVER
					</TextPop>
					<TextPop
						enterAt={10}
						fontSize={66}
						color={COLORS.white}
						rotate={0}
						top="46%"
					>
						JUL 25 · 26 · 29
						<br />
						AUG 1 · 2
					</TextPop>
					<TextPop
						enterAt={22}
						fontSize={52}
						color={COLORS.white}
						background={`${COLORS.red}ee`}
						rotate={-2}
						top="66%"
					>
						5 NIGHTS OF PURE CHAOS 🔥
					</TextPop>
					<EmojiBurst startAt={8} seed="kspo" emojis={['🔥', '🏟️', '🎫', '😱']} />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
