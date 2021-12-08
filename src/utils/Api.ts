/* eslint-disable no-unused-vars */

class Api {
	constructor(private BASE_URL: string) {}

	get<a>(url: string): Promise<a> {
		return new Promise(async (resolve, reject) => {
			try {
				const headers = this.headers({});
				const res = await fetch(`${this.BASE_URL}${url}`, {
					method: 'GET',
					headers,
				});
				const resJson = await res.json();
				if (
					resJson.error
          || res.status.toString()[0] === '4'
          || res.status.toString()[0] === '5'
				) {
					const error = new Error(resJson.error.display_message);
					reject(error);
				}

				resolve(resJson);
			} catch (error) {
				console.log('erro original', error);
				const errorJson = new Error('Erro ao enviar informações 😞');
				reject(errorJson);
			}
		});
	}

	post<a>(url: string, params: Object): Promise<a> {
		return new Promise(async (resolve, reject) => {
			try {
				const headers = this.headers({});
				const res = await fetch(`${this.BASE_URL}${url}`, {
					method: 'POST',
					headers,
					body: JSON.stringify(params),
				});
				const resJson = await res.json();
				if (
					resJson.error
          || res.status.toString()[0] === '4'
          || res.status.toString()[0] === '5'
				) {
					const error = new Error(resJson.error.display_message);
					reject(error);
				}

				resolve(resJson.success.message);
			} catch (error: any) {
				console.log(error.message);
				const errorJson = new Error('Erro ao enviar informações 😞');
				reject(errorJson);
			}
		});
	}

	transformParams(params: any): FormData {
		const formData = new FormData();
		Object.keys(params).map((key: string) => {
			formData.append(key, params[key]);
			return true;
		});
		return formData;
	}

	put<a>(url: string, params: Object): Promise<a> {
		return new Promise(async (resolve, reject) => {
			try {
				const headers = this.headers({});
				const res = await fetch(`${this.BASE_URL}${url}`, {
					method: 'PUT',
					headers,
					body: JSON.stringify(params),
				});
				const resJson = await res.json();
				if (
					resJson.error
          || res.status.toString()[0] === '4'
          || res.status.toString()[0] === '5'
				) {
					const error = new Error(resJson.error.display_message);
					reject(error);
				}

				resolve(resJson.success.message);
			} catch (error) {
				console.log('erro original', error);
				const errorJson = new Error('Erro ao enviar informações 😞');
				reject(errorJson);
			}
		});
	}

	delete<a>(url: string, params = {}): Promise<a> {
		return new Promise(async (resolve, reject) => {
			try {
				const headers = this.headers({});
				const res = await fetch(`${this.BASE_URL}${url}`, {
					method: 'DELETE',
					headers,
					body: JSON.stringify(params),

				});
				const resJson = await res.json();
				if (
					resJson.error
          || res.status.toString()[0] === '4'
          || res.status.toString()[0] === '5'
				) {
					const error = new Error(resJson.error.display_message);
					reject(error);
				}

				resolve(resJson.success.message);
			} catch (error) {
				const errorJson = new Error('Erro ao enviar informações 😞');
				reject(errorJson);
			}
		});
	}

	headers(h: Object): any {
		const headers = {
			'Content-Type': 'application/json',
			...h,
		};
		return headers;
	}
}

export default Api;
