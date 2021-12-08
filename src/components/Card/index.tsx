/* eslint-disable no-alert */
import React from 'react';
import * as S from './style';

export interface CardProps {
  title: string;
  opening_crawl: string;
}

const Card = ({title, opening_crawl}:CardProps) => {
	const handleClickReadMore = () => {
		alert(title);
	};

	return (
		<S.Wrapper data-testid="card">
			<S.Title>
				{title}
			</S.Title>
			<S.Crawl>
				{opening_crawl}
			</S.Crawl>
			<S.WrapperReadMore>
				<button onClick={handleClickReadMore}>Read More...</button>
			</S.WrapperReadMore>
		</S.Wrapper>
	);
};

export default Card;
