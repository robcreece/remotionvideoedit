import React from 'react';
import {Composition} from 'remotion';
import {SkzMerchVideo} from './SkzMerchVideo';
import {FPS, HEIGHT, TOTAL_DURATION, WIDTH} from './constants';
import {T_TOTAL_DURATION} from './truck/constants';
import {TruckVideo} from './truck/TruckVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="SkzMerchTeaser"
				component={SkzMerchVideo}
				durationInFrames={TOTAL_DURATION}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
			<Composition
				id="SkzTruckPreorder"
				component={TruckVideo}
				durationInFrames={T_TOTAL_DURATION}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
		</>
	);
};
