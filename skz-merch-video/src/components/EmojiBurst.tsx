import React from 'react';
import {interpolate, random, useCurrentFrame} from 'remotion';
import {HEIGHT, WIDTH} from '../constants';

/**
 * Fan-reaction emoji rising and fading, spawned deterministically so renders
 * are reproducible.
 */
export const EmojiBurst: React.FC<{
	emojis?: string[];
	startAt: number;
	count?: number;
	seed?: string;
}> = ({emojis = ['😭', '🔥', '💜', '✨', '😱'], startAt, count = 10, seed = 'burst'}) => {
	const frame = useCurrentFrame();
	if (frame < startAt) {
		return null;
	}
	return (
		<>
			{Array.from({length: count}).map((_, i) => {
				const r1 = random(`${seed}-x-${i}`);
				const r2 = random(`${seed}-d-${i}`);
				const r3 = random(`${seed}-s-${i}`);
				const delay = startAt + Math.floor(r2 * 20);
				if (frame < delay) {
					return null;
				}
				const t = frame - delay;
				const y = interpolate(t, [0, 60], [HEIGHT * 0.85, HEIGHT * 0.15]);
				const opacity = interpolate(t, [0, 10, 45, 60], [0, 1, 1, 0], {
					extrapolateRight: 'clamp',
				});
				const x = r1 * WIDTH * 0.9 + Math.sin(t / 8 + i) * 40;
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: x,
							top: y,
							fontSize: 60 + r3 * 50,
							opacity,
							transform: `rotate(${Math.sin(t / 10 + i) * 15}deg)`,
						}}
					>
						{emojis[i % emojis.length]}
					</div>
				);
			})}
		</>
	);
};
