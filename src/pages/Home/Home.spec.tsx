import {render, screen, waitFor } from '@testing-library/react';
import Film from '../../models/Film';
import Home from './index';

const mockFilms: Film[] = [
	{episode_id: 1, title: 'Teste 1', opening_crawl: 'descricao do teste 1', director: 'Davi', producer: 'Davi', release_date: '10/10/2010', characters: ['mickey mouse'], planets: ['terra'], starships: ['corsa'], vehicles: ['bicicleta'], species: ['estranhas'], created: '10/10/2010', edited: '10/10/2010', url: 'www.google.com'},
	{episode_id: 2, title: 'Teste 2', opening_crawl: 'descricao do teste 2', director: 'Davi', producer: 'Davi', release_date: '10/10/2010', characters: ['mickey mouse'], planets: ['terra'], starships: ['corsa'], vehicles: ['bicicleta'], species: ['estranhas'], created: '10/10/2010', edited: '10/10/2010', url: 'www.google.com'},
	{episode_id: 3, title: 'Teste 3', opening_crawl: 'descricao do teste 3', director: 'Davi', producer: 'Davi', release_date: '10/10/2010', characters: ['mickey mouse'], planets: ['terra'], starships: ['corsa'], vehicles: ['bicicleta'], species: ['estranhas'], created: '10/10/2010', edited: '10/10/2010', url: 'www.google.com'},
]

describe('Home Page', () => {
	
	it(('Should render Home Page'), () => {
		render(<Home/>);
		expect(screen.getByTestId('home-wrapper')).toBeInTheDocument()
	});

	it('should render 3 cards', async () => {
		global.fetch = jest.fn(() =>
		Promise.resolve({
			status: 200,
		  json: () => Promise.resolve({results: mockFilms}),
		}),
	  ) as jest.Mock;
		render(<Home />)
		await waitFor(() => {
			expect(screen.getByText(/Teste 1/)).toBeInTheDocument();
		})
		
		expect(screen.getByText(/Teste 1/)).toBeInTheDocument();
		expect(screen.getByText(/Teste 2/)).toBeInTheDocument();
		expect(screen.getByText(/Teste 3/)).toBeInTheDocument();
	})
});
