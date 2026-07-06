import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT_STACK} from '../constants';

/**
 * Slam-in text overlay: springs to full size with a slight rotation and a
 * heavy outline + glow, K-pop hype-edit style.
 */
export const TextPop: React.FC<{
	children: React.ReactNode;
	enterAt: number;
	color?: string;
	background?: string;
	fontSize?: number;
	rotate?: number;
	top?: number | string;
	exitAt?: number;
}> = ({
	children,
	enterAt,
	color = COLORS.yellow,
	background,
	fontSize = 88,
	rotate = -3,
	top = '40%',
	exitAt,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const scale = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 10, stiffness: 160, mass: 0.6},
	});
	const gone = exitAt !== undefined && frame >= exitAt;
	if (gone) {
		return null;
	}
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				transform: `scale(${scale}) rotate(${rotate}deg)`,
			}}
		>
			<div
				style={{
					fontFamily: FONT_STACK,
					fontWeight: 900,
					fontSize,
					color,
					textAlign: 'center',
					lineHeight: 1.05,
					padding: background ? '18px 44px' : 0,
					background,
					borderRadius: background ? 24 : 0,
					textShadow: `0 0 30px ${color}88, 4px 4px 0 #000`,
					WebkitTextStroke: background ? undefined : '3px #000',
					maxWidth: 940,
				}}
			>
				{children}
			</div>
		</div>
	);
};
