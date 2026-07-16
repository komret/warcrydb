// Mapping of missing WA card images to their alternative filenames from other sets
// Remove items from this list as images are added
const waCardFallbacks: Record<string, string> = {
	WA18: 'wm3',
	WA24: 'bd7',
	WA124: 'bd36',
	WA161: 'cd20',
	WA163: 'vt26',
	WA169: 'lc56',
	WA194: 'wm61',
	WA201: 'dh36',
	WA260: 'SM81',
	WA263: 'wm81',
	WA295: 'hw92',
	WA374: 'bd119',
	WA376: 'hw110'
};

export function getCardImageFilename(cardId: string): string {
	const fallback = waCardFallbacks[cardId];
	return fallback ? `${fallback}.jpg` : `${cardId.toLowerCase()}.jpg`;
}
