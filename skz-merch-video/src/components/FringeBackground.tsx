import React from 'react';
import {AbsoluteFill, interpolate, random, useCurrentFrame} from 'remotion';
import {COLORS, HEIGHT, WIDTH} from '../constants';

const STRAND_COUNT = 26;

/**
 * Animated backdrop evoking the merch teaser: swaying metallic fringe strands
 * over a dark reflective floor with a sweeping spotlight.
 */
export const FringeBackground: React.FC<{
	accent?: string;
	intensity?: number;
}> = ({accent = COLORS.red, intensity = 1}) => {
	const frame = useCurrentFrame();
	const sweep = interpolate(frame % 150, [0, 150], [-WIDTH * 0.4, WIDTH * 1.4]);

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgDeep} 70%)`,
				overflow: 'hidden',
			}}
		>
			{/* sweeping spotlight */}
			<div
				style={{
					position: 'absolute',
					left: sweep,
					top: -HEIGHT * 0.1,
					width: WIDTH * 0.5,
					height: HEIGHT * 1.2,
					background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`,
					transform: 'skewX(-12deg)',
				}}
			/>
			{/* fringe strands */}
			{Array.from({length: STRAND_COUNT}).map((_, i) => {
				const seed = random(`strand-${i}`);
				const x = (i / STRAND_COUNT) * WIDTH + seed * 20;
				const sway = Math.sin(frame / 14 + i * 0.9) * 26 * intensity;
				const len = HEIGHT * (0.35 + seed * 0.3);
				const shimmer = 0.25 + 0.5 * Math.abs(Math.sin(frame / 10 + i * 1.7));
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: x,
							top: 0,
							width: 6,
							height: len,
							transformOrigin: 'top center',
							transform: `rotate(${sway / 18}deg)`,
							background: `linear-gradient(180deg, ${COLORS.chromeBright}, ${COLORS.chrome}66 60%, transparent)`,
							opacity: shimmer,
							borderRadius: 3,
						}}
					/>
				);
			})}
			{/* reflective floor glow */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: HEIGHT * 0.35,
					background: `radial-gradient(ellipse at 50% 100%, ${accent}33, transparent 70%)`,
				}}
			/>
		</AbsoluteFill>
	);
};
