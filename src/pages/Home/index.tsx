import React, {useCallback, useState, useEffect} from 'react';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Film from '../../models/Film';
import Swapi from '../../services/Swapi';
import * as S from './style';

const Home = () => {
	const [films, setFilms] = useState<Film[] | []>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = useCallback(async () => {
		try {
			setLoading(true);
			const films = await Swapi.getFilms();
			setFilms(films);
		} catch (error) {
			console.log('erro ao listar filmes', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		<S.Wrapper data-testid="home-wrapper">
			<S.Header>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="logo star wars" />
			</S.Header>
			{loading
				? (
					<S.WrapperLoading>
						<Loading />
						<span>Loading</span>
					</S.WrapperLoading>
				)
				: (
					<>
						<S.WrapperCards>
							{films?.map(film => (
								<React.Fragment key={film.episode_id}>
									<Card title={film.title} opening_crawl={film.opening_crawl}/>
								</React.Fragment>
							))}
						</S.WrapperCards>
					</>
				)}
		</S.Wrapper>
	);
};

export default Home;
