import type { Card, Set } from '#lib/data/cards.ts';

// Format set definitions
const warcryFormatSets: Set[] = [
	'WC',
	'WM',
	'SD',
	'DW',
	'PG',
	'CD',
	'LC',
	'CC',
	'SM',
	'HW',
	'DH',
	'LW',
	'PW'
];
const attritionFormatSets: Set[] = ['BR', 'VT', 'SR', 'WA', 'HF', 'MP', 'VB', 'PA'];
const oldSchoolBaseSets: Set[] = ['WC', 'WM', 'SD'];

// Check if a card matches a specific format
export function cardMatchesFormat(
	card: Card,
	format: 'warcry' | 'attrition' | 'oldschool'
): boolean {
	const cardReleases = card.releases;
	const releaseSets = Object.keys(cardReleases) as Set[];

	switch (format) {
		case 'warcry':
			return releaseSets.some((set) => warcryFormatSets.includes(set));

		case 'attrition':
			return releaseSets.some((set) => attritionFormatSets.includes(set));

		case 'oldschool':
			return (
				releaseSets.some((set) => oldSchoolBaseSets.includes(set)) ||
				(cardReleases['PW'] !== undefined && cardReleases['PW']! <= 40)
			);

		default:
			return true; // Open format accepts all cards
	}
}
