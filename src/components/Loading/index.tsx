import React from 'react';
import * as S from './style';

const Loading = function () {
	return (
		<S.Wrapper data-testid="loading">
			<S.Ring>
				<S.BallWrapper className="ball-holder">
					<S.Ball />
				</S.BallWrapper>
			</S.Ring>
		</S.Wrapper>
	);
};

export default Loading;
