import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {BRollSlot} from '../components/BRollSlot';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {PhotoCard} from './components';
import {TRUCK_ASSETS, TRUCK_COLORS as C} from './constants';

const KenBurns: React.FC<{src: string; label: string}> = ({src, label}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 150], [1.05, 1.16]);
	return (
		<AbsoluteFill style={{transform: `scale(${scale})`}}>
			<BRollSlot src={src} label={label} />
		</AbsoluteFill>
	);
};

/**
 * 31.8–46.7s — tour/comeback momentum: group shots, sold-out stats, the
 * pre-order page screenshots, and a merch-teaser flash.
 */
export const TruckMomentum: React.FC = () => {
	return (
		<AbsoluteFill style={{background: C.black}}>
			<Sequence durationInFrames={150}>
				<KenBurns src={TRUCK_ASSETS.esbGroup} label="group photo" />
			</Sequence>
			<Sequence from={150} durationInFrames={150}>
				<KenBurns src={TRUCK_ASSETS.esbLineup} label="group lineup" />
			</Sequence>
			<Sequence from={300} durationInFrames={147}>
				<KenBurns src={TRUCK_ASSETS.merchTeaser} label="merch teaser" />
			</Sequence>

			{/* readability scrim */}
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(180deg, #00000088 0%, transparent 30%, transparent 60%, #00000088 100%)',
				}}
			/>

			<TextPop
				enterAt={8}
				exitAt={140}
				fontSize={58}
				color={C.black}
				background={C.mint}
				rotate={-3}
				top="10%"
			>
				comeback momentum: UNREAL 📈
			</TextPop>

			{/* "Five Seoul dates already sold out — 75,000+ STAYs…" ~33.7s */}
			<TextPop
				enterAt={62}
				exitAt={200}
				fontSize={62}
				color={C.white}
				background={`${C.black}ee`}
				rotate={2}
				top="72%"
			>
				5 SEOUL DATES
				<br />
				SOLD OUT 🔥
			</TextPop>

			<TextPop
				enterAt={115}
				exitAt={200}
				fontSize={52}
				color={C.black}
				background={C.yellow}
				rotate={-2}
				top="86%"
			>
				75,000+ STAYS going feral 😱
			</TextPop>

			{/* "Fans are scrambling for pre-orders…" ~36.6–43.9s: receipts */}
			<Sequence from={145} durationInFrames={165}>
				<PhotoCard
					src={TRUCK_ASSETS.preorderPage}
					caption="pre-orders LIVE 🛒"
					enterAt={0}
					top={330}
					left={55}
					width={460}
					height={880}
					rotate={-5}
				/>
				<PhotoCard
					src={TRUCK_ASSETS.preorderVersions}
					caption="every version 😵‍💫"
					enterAt={30}
					top={430}
					left={565}
					width={460}
					height={880}
					rotate={5}
				/>
			</Sequence>

			{/* merch teaser flash: "…serving high-fashion looks" */}
			<Sequence from={310} durationInFrames={137}>
				<TextPop
					enterAt={0}
					fontSize={56}
					color={C.black}
					background={C.pink}
					rotate={3}
					top="12%"
				>
					tour merch serving
					<br />
					HIGH FASHION ✨
				</TextPop>
			</Sequence>

			<EmojiBurst
				startAt={70}
				seed="truck-momentum"
				emojis={['🎫', '🔥', '📈', '💜', '🏟️']}
				count={9}
			/>
		</AbsoluteFill>
	);
};
