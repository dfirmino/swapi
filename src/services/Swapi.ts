import Film from '../models/Film';
import Api from '../utils/Api';

interface FilmsResponse {
  count: number,
  next?: number,
  previous?: number,
  results: Film[]
}

class Swapi {
	private apiInstance: Api;
	constructor() {
		this.apiInstance = new Api('https://swapi.dev/api');
	}

	async getFilms(): Promise<Film[]> {
		const {results} = await this.apiInstance.get<FilmsResponse>('/films');
		return results;
	}
}

const swapi = new Swapi();
export default swapi;
