import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FONT_STACK, HEIGHT, WIDTH} from '../constants';
import {TRUCK_COLORS as C} from './constants';

/**
 * Corrugated truck-panel backdrop with mint polka-dot bands, matching the
 * THIS & THAT Truck Ver. packaging.
 */
export const CorrugatedBackground: React.FC<{band?: string}> = ({
	band = C.mint,
}) => {
	const frame = useCurrentFrame();
	const sheen = interpolate(frame % 210, [0, 210], [-WIDTH * 0.6, WIDTH * 1.3]);
	const dots = Array.from({length: 14});
	return (
		<AbsoluteFill style={{background: C.silverLight, overflow: 'hidden'}}>
			{/* corrugated metal ridges */}
			<AbsoluteFill
				style={{
					background: `repeating-linear-gradient(90deg, #cfd3d9 0px, #f4f5f7 16px, #b8bcc4 34px, #e8eaee 52px)`,
					opacity: 0.9,
				}}
			/>
			{/* moving sheen */}
			<div
				style={{
					position: 'absolute',
					left: sheen,
					top: -100,
					width: 380,
					height: HEIGHT + 200,
					transform: 'skewX(-14deg)',
					background:
						'linear-gradient(90deg, transparent, #ffffffb0, transparent)',
				}}
			/>
			{/* mint bands with polka dots, top and bottom */}
			{[
				{top: 0},
				{bottom: 0},
			].map((pos, i) => (
				<div
					key={i}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						height: 86,
						...pos,
						background: band,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					{dots.map((_, d) => (
						<div
							key={d}
							style={{
								width: 26,
								height: 26,
								borderRadius: '50%',
								background: C.black,
								opacity: 0.85,
							}}
						/>
					))}
				</div>
			))}
		</AbsoluteFill>
	);
};

/**
 * Keychain-style tag (like the Truck Ver. member keychains): colored tag
 * with a punched hole, springing in and gently dangling.
 */
export const TagBadge: React.FC<{
	text: string;
	enterAt: number;
	top: number;
	left?: number;
	right?: number;
	width?: number;
	color?: string;
	textColor?: string;
	rotate?: number;
	fontSize?: number;
}> = ({
	text,
	enterAt,
	top,
	left,
	right,
	width,
	color = C.mint,
	textColor = C.black,
	rotate = -3,
	fontSize = 40,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const pop = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 10, stiffness: 150},
	});
	const dangle = Math.sin((frame - enterAt) / 9) * 1.6;
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left,
				right,
				width: width ?? 'max-content',
				transform: `scale(${pop}) rotate(${rotate + dangle}deg)`,
				transformOrigin: 'left center',
				background: color,
				border: `5px solid ${C.black}`,
				borderRadius: 18,
				padding: '18px 24px 18px 20px',
				display: 'flex',
				alignItems: 'center',
				gap: 18,
				boxShadow: '6px 8px 0 #0d0d0d55',
				fontFamily: FONT_STACK,
			}}
		>
			{/* punched keyring hole */}
			<div
				style={{
					width: 30,
					height: 30,
					borderRadius: '50%',
					background: C.silverLight,
					border: `5px solid ${C.black}`,
					flexShrink: 0,
				}}
			/>
			<div
				style={{
					fontSize,
					fontWeight: 900,
					color: textColor,
					lineHeight: 1.1,
					whiteSpace: 'nowrap',
				}}
			>
				{text}
			</div>
		</div>
	);
};

/**
 * Screenshot/photo card with a bold packaging-style frame that springs in.
 */
export const PhotoCard: React.FC<{
	src: string;
	caption?: string;
	enterAt: number;
	top: number;
	left?: number;
	right?: number;
	width: number;
	height: number;
	rotate?: number;
}> = ({src, caption, enterAt, top, left, right, width, height, rotate = 0}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const pop = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 12, stiffness: 120},
	});
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left,
				right,
				width,
				transform: `scale(${pop}) rotate(${rotate}deg)`,
				background: C.white,
				border: `6px solid ${C.black}`,
				borderRadius: 22,
				padding: 12,
				boxShadow: '10px 12px 0 #0d0d0d44',
			}}
		>
			<Img
				src={staticFile(src)}
				style={{
					width: '100%',
					height,
					objectFit: 'cover',
					objectPosition: 'top',
					borderRadius: 12,
					display: 'block',
				}}
			/>
			{caption ? (
				<div
					style={{
						marginTop: 10,
						textAlign: 'center',
						fontFamily: FONT_STACK,
						fontSize: 28,
						fontWeight: 900,
						color: C.black,
					}}
				>
					{caption}
				</div>
			) : null}
		</div>
	);
};
