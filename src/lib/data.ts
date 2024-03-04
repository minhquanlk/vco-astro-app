// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../app/constants.js';
import type { Endpoint, EndpointsToOperations } from '../types/entities.js';


const handleRedirect = (response: Response) => {

	const emptyJson = [{
		name: '',
		category: '',
		technology: '',
		id: 0,
		description: '',
		price: '',
		discount: '',
	}];
	const emptyJsonString = JSON.stringify(emptyJson);
	
	if (response.status === 200) {

		const redirectUrl = new URL(response.url).pathname;
		console.log(`Redirected to: ${redirectUrl}`);
		return new Response(emptyJsonString, {
			status: 302, 
			headers: {
				'Location': redirectUrl,
				'Content-Type': 'application/json',
			},
		});
	};
	
	
	return response;
  };

export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
	const apiEndpoint = `${API_URL}${endpoint}`;

	console.info(`Fetching ${apiEndpoint}…`);
	return fetch(apiEndpoint)
		.then(handleRedirect)
		.then(
			(r) =>
				r.json() as unknown as Promise<
					ReturnType<EndpointsToOperations[Selected]>
				>,
		)
		.catch((e) => {
			console.error(e);
			throw Error('Invalid API data!');
		});
}

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
