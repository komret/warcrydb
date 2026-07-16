import { error } from '@sveltejs/kit';
import { cards } from '$lib/data/cards';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (!cards.some((card) => card.id === params.id)) {
		error(404, 'Card not found');
	}

	return { id: params.id };
};
