/* eslint-disable react/react-in-jsx-scope */
import {render, screen} from '@testing-library/react';
import Card from './index';

describe('CARD Component', () => {
	it('should render card with title and opening_crawl', () => {
		render(<Card title="Titulo Teste" opening_crawl="Descricao Teste"/>);
		expect(screen.getByText('Titulo Teste')).toBeInTheDocument();
		expect(screen.getByText('Descricao Teste')).toBeInTheDocument();
	});
});
