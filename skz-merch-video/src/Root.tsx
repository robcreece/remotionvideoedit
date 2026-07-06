import React from 'react';
import {Composition} from 'remotion';
import {SkzMerchVideo} from './SkzMerchVideo';
import {FPS, HEIGHT, TOTAL_DURATION, WIDTH} from './constants';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="SkzMerchTeaser"
			component={SkzMerchVideo}
			durationInFrames={TOTAL_DURATION}
			fps={FPS}
			width={WIDTH}
			height={HEIGHT}
		/>
	);
};
