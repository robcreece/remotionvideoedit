import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {EmojiBurst} from '../components/EmojiBurst';
import {TextPop} from '../components/TextPop';
import {CorrugatedBackground, TagBadge} from './components';
import {TRUCK_ASSETS, TRUCK_COLORS as C} from './constants';

/**
 * 14.2–31.8s — album preview + pre-order dates, then the Truck Ver.
 * contents called out as dangling keychain tags, closing on the sold-out
 * KSPO shows line.
 */
export const TruckDrop: React.FC = () => {
	const frame = useCurrentFrame();
	const drift = interpolate(frame, [0, 528], [0, -30]);

	return (
		<AbsoluteFill style={{background: C.silverLight}}>
			<CorrugatedBackground band={C.pink} />

			{/* dates on top */}
			<TagBadge
				text="PRE-ORDERS: JUL 8 🛒"
				enterAt={15}
				top={170}
				left={60}
				color={C.mint}
				rotate={-3}
				fontSize={36}
			/>
			<TagBadge
				text="RELEASE: AUG 7 💿"
				enterAt={55}
				top={210}
				left={560}
				color={C.yellow}
				rotate={3}
				fontSize={36}
			/>

			{/* contents sheet on the left */}
			<div
				style={{
					position: 'absolute',
					top: 430 + drift,
					left: 45,
					width: 590,
					transform: 'rotate(-2deg)',
					background: C.white,
					border: `6px solid ${C.black}`,
					borderRadius: 22,
					padding: 12,
					boxShadow: '10px 12px 0 #0d0d0d44',
				}}
			>
				<Img
					src={staticFile(TRUCK_ASSETS.contents)}
					style={{width: '100%', borderRadius: 10, display: 'block'}}
				/>
			</div>

			{/* component tags dangle in on the right as the VO lists them */}
			<TagBadge
				text="PHOTOBOOK 📖"
				enterAt={185}
				top={470}
				left={620}
				color={C.white}
				rotate={4}
				fontSize={34}
			/>
			<TagBadge
				text="MINI CD-R ×2 💿"
				enterAt={230}
				top={640}
				left={600}
				color={C.pink}
				rotate={-3}
				fontSize={34}
			/>
			<TagBadge
				text="KEYCHAINS 1/8 🔑"
				enterAt={275}
				top={810}
				left={590}
				color={C.mint}
				rotate={3}
				fontSize={34}
			/>
			<TagBadge
				text="PHOTOCARDS ✨"
				enterAt={320}
				top={980}
				left={620}
				color={C.blue}
				rotate={-4}
				fontSize={34}
			/>
			<TagBadge
				text="STICKERS + MORE 🎁"
				enterAt={360}
				top={1150}
				left={545}
				color={C.yellow}
				rotate={2}
				fontSize={34}
			/>

			<TextPop
				enterAt={400}
				exitAt={465}
				fontSize={54}
				color={C.black}
				background={C.mint}
				rotate={-2}
				top="78%"
			>
				massive COLLECTOR energy 😤
			</TextPop>

			{/* "…sold-out RUN IT Seoul shows at KSPO Dome!" ~27.6s */}
			<TextPop
				enterAt={470}
				fontSize={58}
				color={C.white}
				background={`${C.black}ee`}
				rotate={2}
				top="76%"
			>
				KSPO DOME — SOLD OUT 🔥
			</TextPop>

			<EmojiBurst
				startAt={200}
				seed="truck-drop"
				emojis={['🔑', '💿', '📖', '✨', '📦']}
				count={9}
			/>
		</AbsoluteFill>
	);
};
