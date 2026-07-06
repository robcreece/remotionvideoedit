import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT_STACK} from '../constants';

/**
 * Tour-date / info badge that slides in from the side with a spring.
 */
export const DateBadge: React.FC<{
	title: string;
	value: string;
	enterAt: number;
	top: number;
	accent?: string;
	fromLeft?: boolean;
}> = ({title, value, enterAt, top, accent = COLORS.yellow, fromLeft = true}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < enterAt) {
		return null;
	}
	const progress = spring({
		frame: frame - enterAt,
		fps,
		config: {damping: 13, stiffness: 120},
	});
	const x = (1 - progress) * (fromLeft ? -700 : 700);
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left: 90,
				right: 90,
				transform: `translateX(${x}px)`,
				background: '#000000cc',
				border: `4px solid ${accent}`,
				borderRadius: 28,
				padding: '26px 40px',
				boxShadow: `0 0 40px ${accent}55`,
				fontFamily: FONT_STACK,
			}}
		>
			<div
				style={{
					fontSize: 30,
					letterSpacing: 5,
					color: accent,
					textTransform: 'uppercase',
					marginBottom: 8,
				}}
			>
				{title}
			</div>
			<div style={{fontSize: 56, fontWeight: 900, color: COLORS.white, lineHeight: 1.1}}>
				{value}
			</div>
		</div>
	);
};
