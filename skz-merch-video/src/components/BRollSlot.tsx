import React from 'react';
import {
	AbsoluteFill,
	Img,
	OffthreadVideo,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {COLORS, FONT_STACK} from '../constants';

const IMAGE_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * A swappable footage slot. When `src` (a path inside `public/`) is set it
 * shows the image or plays the clip; otherwise it renders a stylized
 * stage-energy placeholder labeled with the footage that belongs there.
 */
export const BRollSlot: React.FC<{
	src: string | null;
	label: string;
	accent?: string;
}> = ({src, label, accent = COLORS.red}) => {
	const frame = useCurrentFrame();

	if (src) {
		const cover = {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		} as const;
		return (
			<AbsoluteFill>
				{IMAGE_RE.test(src) ? (
					<Img src={staticFile(src)} style={cover} />
				) : (
					<OffthreadVideo src={staticFile(src)} muted style={cover} />
				)}
			</AbsoluteFill>
		);
	}

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(160deg, ${COLORS.bgDeep}, #14141f 60%, ${COLORS.bgDeep})`,
				overflow: 'hidden',
			}}
		>
			{/* animated diagonal light streaks */}
			{Array.from({length: 5}).map((_, i) => {
				const offset = ((frame * 6 + i * 260) % 1600) - 300;
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: offset,
							top: -200,
							width: 90,
							height: '140%',
							transform: 'rotate(18deg)',
							background: `linear-gradient(90deg, transparent, ${
								i % 2 === 0 ? accent : COLORS.chrome
							}2e, transparent)`,
						}}
					/>
				);
			})}
			<div
				style={{
					position: 'absolute',
					bottom: 40,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontFamily: FONT_STACK,
					fontSize: 26,
					letterSpacing: 4,
					color: `${COLORS.chrome}99`,
					textTransform: 'uppercase',
				}}
			>
				{label}
			</div>
		</AbsoluteFill>
	);
};
