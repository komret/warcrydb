export const keywords = [
	'Armor',
	'Beastmen',
	'Blade',
	'Bretonnian',
	'Cavalry',
	'Chaos',
	'Chaos Dwarf',
	'Character',
	'Daemon',
	'Dark Elf',
	'Dogs of War',
	'Dwarf',
	'Empire',
	'Event',
	'Flyer',
	'Fortification',
	'Halfling',
	'Harbinger',
	'High Elf',
	'Hilt',
	'Infantry',
	'Item',
	'Khemri',
	'Kislev',
	'Lizardmen',
	'Monster',
	'Ogre Kingdoms',
	'Orc',
	'Shard',
	'Skaven',
	'Standard',
	'Strategy',
	'Terrain',
	'Vampire Counts',
	'War Machine',
	'Weapon',
	'Wood Elf'
] as const;
export type Keyword = (typeof keywords)[number];

export const factions = ['Grand Alliance', 'Hordes of Darkness', 'Neutral'] as const;
export type Faction = (typeof factions)[number];

export const cardTypes = ['Attachment', 'Unit', 'Command', 'Reaction', 'Tactic'] as const;
export type Type = (typeof cardTypes)[number];

export const rarities = ['Common', 'Uncommon', 'Rare', 'Super rare'] as const;
export type Rarity = (typeof rarities)[number];

export const dieValues = [1, 2, 3, 4, 5, 6] as const;
export type Die = (typeof dieValues)[number];

export const costValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'X'] as const;
export type Cost = (typeof costValues)[number];

export const tacticPointsValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 'X'] as const;
export type TacticPoints = (typeof tacticPointsValues)[number];

export const strengthValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -1, 'X'] as const;
export type Strength = (typeof strengthValues)[number];

export const leadershipValues = [1, 2, 3, 4, 5, 6] as const;
export type Leadership = (typeof leadershipValues)[number];

export const sets = [
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
	'BD',
	'LW',
	'PW',
	'BR',
	'VT',
	'SR',
	'WA',
	'HF',
	'MP',
	'VB',
	'PA'
] as const;
export type Set = (typeof sets)[number];

export const setNames: Record<Set, string> = {
	WC: 'WarCry',
	WM: 'Winds of Magic',
	SD: 'Siege of Darkness',
	DW: 'Dogs of War',
	PG: 'Path of Glory',
	CD: 'Chivalry and Deceit',
	LC: 'Legions of Chaos',
	CC: 'Champions',
	SM: 'Siege of Middenheim',
	HW: 'Harbingers of War',
	DH: 'Death and Honour',
	BD: 'Bringers of Darkness',
	LW: 'Legends of WarCry',
	PW: 'Promo (WC)',
	BR: 'Bearers of Redemption',
	VT: 'Valor and Treachery',
	SR: 'Swords of Retribution',
	WA: 'War of Attrition',
	HF: 'Hand of Fate',
	MP: 'Marks of Power',
	VB: 'Veterans of Battle',
	PA: 'Promo (WA)'
};

export type Card = {
	id: string;
	name: string;
	cost?: Cost;
	strength?: Strength;
	tacticPoints?: TacticPoints;
	leadership?: Leadership;
	unique?: boolean;
	die?: Die;
	keywords: Keyword[];
	maxCopies: number;
	faction: Faction;
	type: Type;
	rarity?: Rarity;
	text: string;
	releases: { [set in Set]?: number };
	banned?: boolean;
	errata?: boolean | Keyword;
	faq: number[];
};

export const cards: Card[] = [
	{
		id: 'WA1',
		name: 'Archaon',
		cost: 8,
		strength: 6,
		tacticPoints: 6,
		leadership: 6,
		unique: true,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>While this unit is ready, your Chaos units get +1 leadership.</p><p><b>Combat Tactic</b>: Use the WarCry or combat tactic on any of your units.</p>',
		releases: {
			WC: 1,
			WA: 1
		},
		faq: [82]
	},
	{
		id: 'WC2',
		name: "Azyrneth's Bloodpack",
		cost: 3,
		strength: 4,
		tacticPoints: 3,
		leadership: 1,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit destroys an enemy unit, destroy 1 strategy card.</p>',
		releases: {
			WC: 2
		},
		faq: [234]
	},
	{
		id: 'WC3',
		name: "Azyrneth's Deathbringers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength vs blocking units.</p>',
		releases: {
			WC: 3
		},
		faq: [141]
	},
	{
		id: 'WA3',
		name: "Azyrneth's Skullreavers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 4</p>',
		releases: {
			WC: 4,
			WA: 3
		},
		faq: []
	},
	{
		id: 'WC5',
		name: 'Bloodwolf Axemen',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '',
		releases: {
			WC: 5
		},
		faq: []
	},
	{
		id: 'WC6',
		name: 'Bonerotters',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is in your battle line ready, your units get "<b>Terror</b>: 1".</p>',
		releases: {
			WC: 6
		},
		faq: [23]
	},
	{
		id: 'WC7',
		name: "Charon Helgor's Deathreapers",
		cost: 5,
		strength: 5,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: -5</p><p><b>WarCry</b>: This unit gets +5 strength. Only usable while attacking.</p>',
		releases: {
			WC: 7
		},
		faq: [142]
	},
	{
		id: 'WC8',
		name: "D'aggorn the Exalted",
		cost: 5,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: Your enemy discards one random card. This unit gets a strength bonus equal to the die on the discarded card.</p>',
		releases: {
			WC: 8
		},
		faq: []
	},
	{
		id: 'WC9',
		name: "D'aggorn's Husk Guard",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 5,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>You may play tactics for your cavalry units as if they were infantry.</p>',
		releases: {
			WC: 9
		},
		faq: []
	},
	{
		id: 'WA11',
		name: 'Daemonettes of Slaanesh',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After the Muster phase, move 1 enemy unit from the reserves to the battle line.</p>',
		releases: {
			WC: 10,
			WA: 11
		},
		faq: []
	},
	{
		id: 'WC11',
		name: "Dargothal's Fleshrippers",
		cost: 5,
		strength: 5,
		tacticPoints: 0,
		leadership: 2,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Play any number of combat tactics from your hand. Those cards tactic point costs are reduced to 0.</p>',
		releases: {
			WC: 11
		},
		faq: [68]
	},
	{
		id: 'WC12',
		name: 'Deathclaw Brethren',
		cost: 4,
		strength: 5,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '',
		releases: {
			WC: 12
		},
		faq: []
	},
	{
		id: 'WC13',
		name: "Ga'choran's Doomswords",
		cost: 5,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: This unit gets a tactic point bonus equal to the enemy unit's unspent tactic points.</p>",
		releases: {
			WC: 13
		},
		faq: []
	},
	{
		id: 'WC14',
		name: "Melkior's Bloodwolf Horde",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>While this unit is in your battle line ready your cavalry units attack as flyers.</p>',
		releases: {
			WC: 14
		},
		faq: [25]
	},
	{
		id: 'WC15',
		name: "Tal'gatha's Harbinger",
		cost: 3,
		strength: 1,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Destroy this unit: Discard the top 3 cards of your army deck. Your enemy chooses one unit discarded this way. That unit replaces this unit in combat. If no unit is discarded, this unit remains in the combat.</p>',
		releases: {
			WC: 15
		},
		faq: [274, 257, 260, 261]
	},
	{
		id: 'WC16',
		name: 'The Bringers of Terror',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 3</p>',
		releases: {
			WC: 16
		},
		faq: []
	},
	{
		id: 'WC17',
		name: 'The Destroyer',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable during a follow-up attack.</p>',
		releases: {
			WC: 17
		},
		faq: []
	},
	{
		id: 'WC18',
		name: 'Vargharn Melkior',
		cost: 2,
		unique: true,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Destroy the enemy unit unless it passes an unmodified leadership test.</p><p>This card may only be attached to a Chaos Unit.</p>',
		releases: {
			WC: 18
		},
		faq: [271]
	},
	{
		id: 'WC19',
		name: "Deragheth's Spirit Knives",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: If this combat is won by a difference of 1, the result is a slaughter.</p>',
		releases: {
			WC: 19
		},
		faq: []
	},
	{
		id: 'WA33',
		name: "Dhargethen's Duskreavers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If you win this combat, rout the enemy unit (no rout check needed). Only usable once per command.</p>',
		releases: {
			WC: 20,
			WA: 33
		},
		faq: [195, 145, 148, 133]
	},
	{
		id: 'WC21',
		name: 'Ebon Deathblades',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. infantry if it passes a leadership test.</p>',
		releases: {
			WC: 21
		},
		faq: []
	},
	{
		id: 'WA34',
		name: 'Fell Sisters of Clar Karond',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If this combat ends as a slaughter, this unit wins instead.</p>',
		releases: {
			WC: 22,
			WA: 34
		},
		faq: [196, 247]
	},
	{
		id: 'WC23',
		name: "Ha'asek's Twilight Ghosts",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 6</p>',
		releases: {
			WC: 23
		},
		faq: []
	},
	{
		id: 'WC24',
		name: "Ha'asek's Wraithriders",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +3 strength. Only usable while you have a ready unit that costs 6 or more gold.</p>',
		releases: {
			WC: 24
		},
		faq: []
	},
	{
		id: 'WA44',
		name: "Korhadril's Nighthaunters",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Roll. Your enemy rolls as well. Your enemy may not play any combat tactics from their hand with a die equal to either die rolled.</p>',
		releases: {
			WC: 25,
			WA: 44
		},
		faq: []
	},
	{
		id: 'WC26',
		name: 'Malus Darkblade',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength and "<b>Terror</b>: 2".</p>',
		releases: {
			WC: 26
		},
		faq: [268]
	},
	{
		id: 'WC27',
		name: 'Nightbearers',
		cost: 6,
		strength: 6,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit gets +1 tactic point for each tactic point your enemy spends.</p>',
		releases: {
			WC: 27
		},
		faq: []
	},
	{
		id: 'WA49',
		name: "Raven's Scythe",
		cost: 2,
		strength: 0,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Support Tactic</b>: Your unit gets +2 strength unless the enemy unit passes a leadership test.</p>',
		releases: {
			WC: 28,
			WA: 49
		},
		faq: []
	},
	{
		id: 'WC29',
		name: "Serakhar's Ebon Reavers",
		cost: 2,
		strength: 1,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Look at your enemy's hand. Your enemy discards a card of your choice.</p>",
		releases: {
			WC: 29
		},
		faq: []
	},
	{
		id: 'WA53',
		name: 'Spirithaunters of Hag Graef',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 5</p><p><b>Combat Tactic</b>: Commit the defending unit unless your enemy discards 2 cards.</p>',
		releases: {
			WC: 30,
			WA: 53
		},
		faq: []
	},
	{
		id: 'WC31',
		name: 'The Archon of Twilight',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 2</p><p><b>Support Tactic</b>: Choose one <span class="errata">activated</span> ability printed on any enemy unit or attachment. Your enemy may not <span class="errata">play</span> that ability.</p>',
		releases: {
			WC: 31
		},
		errata: true,
		faq: []
	},
	{
		id: 'WA56',
		name: 'The Twilight Company',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Use a combat tactic printed on any enemy unit.</p>',
		releases: {
			WC: 32,
			WA: 56
		},
		faq: [75, 82]
	},
	{
		id: 'WC33',
		name: 'Twilight Fellstalkers',
		cost: 3,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '',
		releases: {
			WC: 33
		},
		faq: []
	},
	{
		id: 'WC34',
		name: 'Twilight Painwraiths',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>While your enemy has more ready units in their reserve than in their battle line, this unit attacks as a flyer.</p>',
		releases: {
			WC: 34
		},
		faq: [25]
	},
	{
		id: 'WC35',
		name: 'Naetharion Dhargethen',
		cost: 2,
		unique: true,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. If you win this combat by a difference of 4 or more, the result is a slaughter.</p><p>This card may only be attached to a Dark Elf unit.</p>',
		releases: {
			WC: 35
		},
		faq: []
	},
	{
		id: 'WC36',
		name: 'Gurt Bigfist',
		cost: 7,
		strength: 10,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -8</p>',
		releases: {
			WC: 36
		},
		faq: []
	},
	{
		id: 'WC37',
		name: 'Soulfang Blacktalon',
		cost: 5,
		strength: 5,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: Commit the enemy unit unless it passes a leadership test.</p>',
		releases: {
			WC: 37
		},
		faq: [74]
	},
	{
		id: 'WC38',
		name: 'Stone Trolls',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b> Discard a random card: Destroy all attachments on the enemy unit.</p>',
		releases: {
			WC: 38
		},
		faq: [149]
	},
	{
		id: 'WC39',
		name: "Azfang's Boyz",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Commit one of your other Orc units: This unit gets +3 strength.</p>',
		releases: {
			WC: 39
		},
		faq: []
	},
	{
		id: 'WC40',
		name: "Big Gulgog's Maulers",
		cost: 6,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable while you have no committed units.</p>',
		releases: {
			WC: 40
		},
		faq: []
	},
	{
		id: 'WC41',
		name: "Bogbref's Bow Gitz",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 5</p><p><b>WarCry</b>: This unit gets +d6 <b>Ranged Attack</b>. If you roll 4 or higher, destroy this unit at the end of this command.</p>',
		releases: {
			WC: 41
		},
		faq: [143]
	},
	{
		id: 'WC42',
		name: "Ghulbag's Big 'Uns",
		cost: 3,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: -3</p>',
		releases: {
			WC: 42
		},
		faq: []
	},
	{
		id: 'WA63',
		name: "Gitnob's Gitz",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Destroy this unit: Your unit gets +3 strength.</p>',
		releases: {
			WC: 43,
			WA: 63
		},
		faq: []
	},
	{
		id: 'WC44',
		name: "Grubbi's Dogkart",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Commit: Exchange this unit with one of your ready units. That unit gets +2 strength.</p>',
		releases: {
			WC: 44
		},
		faq: [257, 260, 261]
	},
	{
		id: 'WC45',
		name: "Morzog's Madmob",
		cost: 4,
		strength: 5,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>When you resolve combat this unit gets -1 strength for each of its unspent tactic points.</p>',
		releases: {
			WC: 45
		},
		faq: []
	},
	{
		id: 'WC46',
		name: "Mulguk's Smashas",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only usable while you have more ready units in your battle line than your enemy.</p>',
		releases: {
			WC: 46
		},
		faq: []
	},
	{
		id: 'WA75',
		name: "Nhaga's Ladz",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Destroy this unit: Commit the enemy unit.</p>',
		releases: {
			WC: 47,
			WA: 75
		},
		faq: [5]
	},
	{
		id: 'WA76',
		name: "Ogdrag's 'Arrer Boyz",
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 5</p><p><b>Support Tactic</b>: Your unit gets +3 strength. Only usable during a follow-up attack.</p>',
		releases: {
			WC: 48,
			WA: 76
		},
		faq: []
	},
	{
		id: 'WA81',
		name: "Roklog's Tuskas",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: Discard the top card of your action deck. If that card was a playable WarCry or combat tactic, play that card without paying it's cost.</p>",
		releases: {
			WC: 49,
			WA: 81
		},
		faq: [92]
	},
	{
		id: 'WC50',
		name: "Snotfink's Dogmob",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b> Discard a random card: If the card you discarded was a playable combat tactic, play it without paying it's cost.</p>",
		releases: {
			WC: 50
		},
		faq: [92, 95, 68]
	},
	{
		id: 'WC51',
		name: "Ugbog's Big Rumbler",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable while attacking.</p>',
		releases: {
			WC: 51
		},
		faq: [142]
	},
	{
		id: 'WC52',
		name: "Urguck's Manglers",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Discard a Card: Your Orc unit gets +1 leadership.</p>',
		releases: {
			WC: 52
		},
		faq: []
	},
	{
		id: 'WC53',
		name: 'Warboss Grimgore Ironhide',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Support Tactic</b>: Your Orc unit gets +2 strength. Only usable while this unit is committed.</p>',
		releases: {
			WC: 53
		},
		faq: []
	},
	{
		id: 'WA85',
		name: 'Warboss Urguck Man-Mangler',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Terror</b>: 1</p><p><b>Reaction</b>: Before you roll for this unit's combat roll, place any card in your hand on top of your action deck.</p>",
		releases: {
			WC: 54,
			WA: 85
		},
		faq: []
	},
	{
		id: 'WC55',
		name: 'Big Boss Ghulgar Headsplitter',
		cost: 2,
		tacticPoints: 2,
		unique: true,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable during a follow-up attack.</p><p>This card may only be attached to an Orc unit.</p>',
		releases: {
			WC: 55
		},
		faq: []
	},
	{
		id: 'WC56',
		name: 'A Question of Honor',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your enemy routs one of your units with a character attachment, no follow-up may be made.</p>',
		releases: {
			WC: 56
		},
		faq: []
	},
	{
		id: 'WC57',
		name: 'Armor Break',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Destroy 1 enemy attachment on the enemy unit.</p>',
		releases: {
			WC: 57
		},
		faq: []
	},
	{
		id: 'WA110',
		name: 'Battle Omens',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 leadership.</p>',
		releases: {
			WC: 58,
			WA: 110
		},
		faq: []
	},
	{
		id: 'WA111',
		name: 'Battlefield Instinct',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Look at the top 3 cards of your action deck and replace them in any order.</p>',
		releases: {
			WC: 59,
			WA: 111
		},
		faq: [112]
	},
	{
		id: 'WC60',
		name: 'Battlefield Options',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Look at the top card of your action deck. You may discard that card.</p>',
		releases: {
			WC: 60
		},
		faq: []
	},
	{
		id: 'WC61',
		name: 'Blood of the Martyr',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 strength.</p>',
		releases: {
			WC: 61
		},
		faq: []
	},
	{
		id: 'WC62',
		name: 'Breakthrough',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your unit routs an enemy unit, choose the target of your follow-up attack.</p>',
		releases: {
			WC: 62
		},
		faq: []
	},
	{
		id: 'WA122',
		name: 'Change of Plan',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Destroy 1 strategy card.</p>',
		releases: {
			WC: 63,
			WA: 122
		},
		faq: []
	},
	{
		id: 'WC64',
		name: 'Charge!',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for every unspent tactic point the enemy unit has.</p>',
		releases: {
			WC: 64
		},
		faq: []
	},
	{
		id: 'WC65',
		name: 'Confusing Maneuver',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Your enemy's tactic cards cost 1 additional point.</p>",
		releases: {
			WC: 65
		},
		faq: []
	},
	{
		id: 'WC66',
		name: 'Countercharge',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable while blocking.</p>',
		releases: {
			WC: 66
		},
		faq: [141]
	},
	{
		id: 'WC67',
		name: 'Crushing Blow',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength.</p>',
		releases: {
			WC: 67
		},
		faq: []
	},
	{
		id: 'WA131',
		name: 'Cunning Raid',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you rout an enemy unit, your enemy discards a random card. Draw 1 card.</p>',
		releases: {
			WC: 68,
			CD: 15,
			WA: 131
		},
		faq: [228]
	},
	{
		id: 'WA134',
		name: 'Death from Afar',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 ranged attack.</p>',
		releases: {
			WC: 69,
			WA: 134
		},
		faq: []
	},
	{
		id: 'WC70',
		name: 'Dissention in the Ranks',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Move 1 enemy unit from the battle line to the reserves.</p>',
		releases: {
			WC: 70
		},
		faq: []
	},
	{
		id: 'WA140',
		name: 'Diversion',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: Before you declare an attack it may not be blocked.</p>',
		releases: {
			WC: 71,
			WA: 140
		},
		faq: []
	},
	{
		id: 'WC72',
		name: 'Dodge',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Commit this unit: This unit gets +4 strength.</p>',
		releases: {
			WC: 72
		},
		faq: []
	},
	{
		id: 'WC73',
		name: 'Effective Planning',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and +1 leadership.</p>',
		releases: {
			WC: 73
		},
		faq: []
	},
	{
		id: 'WA150',
		name: 'Fast March',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your enemy declares a non-ranged attack, block with any of your ready infantry units.</p>',
		releases: {
			WC: 74,
			WA: 150
		},
		faq: []
	},
	{
		id: 'WA161',
		name: 'Furious Charge',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable while you have more cards in your hand than your enemy.</p>',
		releases: {
			WC: 75,
			CD: 20,
			WA: 161
		},
		faq: [170]
	},
	{
		id: 'WA165',
		name: 'Grim Resolution',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Your enemy may discard 3 cards. If they do not when this combat ends, the result is a slaughter.</p>',
		releases: {
			WC: 76,
			CD: 21,
			WA: 165
		},
		faq: [3]
	},
	{
		id: 'WA167',
		name: 'Hail of Doom',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: After you win a ranged attack combat by a difference of 3 or more, your unit may make 1 additional ranged attack before committing.</p>',
		releases: {
			WC: 77,
			WA: 167
		},
		faq: [200, 207, 215, 249]
	},
	{
		id: 'WC78',
		name: 'Hasty Maneuever',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard a random card: This unit gets +4 strength.</p>',
		releases: {
			WC: 78
		},
		faq: []
	},
	{
		id: 'WC79',
		name: 'Heroic Sacrifice',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Destroy one of your other ready units: Commit the enemy unit.</p>',
		releases: {
			WC: 79
		},
		faq: []
	},
	{
		id: 'WC80',
		name: 'Hold the Line!',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>Your enemy may not attack units in your reserves.</p>',
		releases: {
			WC: 80
		},
		faq: [194, 139]
	},
	{
		id: 'WC81',
		name: 'Hurry Up!',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>Your infantry may not be blocked by cavalry.</p>',
		releases: {
			WC: 81
		},
		faq: []
	},
	{
		id: 'WC82',
		name: "It's Not Over...",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +2 strength.</p>',
		releases: {
			WC: 82
		},
		faq: []
	},
	{
		id: 'WA181',
		name: 'Lay of the Land',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to it\'s "<b>Scout</b>" rating.</p>',
		releases: {
			WC: 83,
			WA: 181
		},
		faq: []
	},
	{
		id: 'WA185',
		name: 'Look Out, Sir!',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your attachments is destroyed, move it to one of your ready units.</p>',
		releases: {
			WC: 84,
			CD: 26,
			WA: 185
		},
		faq: [122, 53]
	},
	{
		id: 'WA188',
		name: 'Low Morale',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you rout an enemy unit, commit any enemy unit unless it passes a leadership test.</p>',
		releases: {
			WC: 85,
			WA: 188
		},
		faq: [74]
	},
	{
		id: 'WC86',
		name: 'Luck Smiles Upon the Foolish',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Look at the top card of your enemy's action deck. You may discard that card.</p>",
		releases: {
			WC: 86
		},
		faq: []
	},
	{
		id: 'WC87',
		name: 'Mass March',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Commit one of your ready units: This unit gets a strength bonus equal to the strength of the unit you committed.</p>',
		releases: {
			WC: 87
		},
		faq: [89, 95]
	},
	{
		id: 'WA198',
		name: 'Mettle',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only usable while this unit is losing a combat.</p>',
		releases: {
			WC: 88,
			WA: 198
		},
		faq: [197]
	},
	{
		id: 'WA200',
		name: 'No Quarter!',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If your unit wins the combat, your enemy destroys 1 of their committed units.</p>',
		releases: {
			WC: 89,
			WA: 200
		},
		faq: [4]
	},
	{
		id: 'WA201',
		name: 'Nobody Lives Forever!',
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Your enemy may destroy one of their units. If they do not, when this combat ends, the result is a slaughter.</p>',
		releases: {
			WC: 90,
			DH: 36,
			WA: 201
		},
		faq: [3]
	},
	{
		id: 'WA202',
		name: 'Not Without a Plan',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength for each of it's attachments.</p>",
		releases: {
			WC: 91,
			WA: 202
		},
		faq: []
	},
	{
		id: 'WA207',
		name: 'Onward!',
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If your unit wins the combat, rout the enemy unit (no rout check needed). Not usable during a ranged attack.</p>',
		releases: {
			WC: 92,
			WA: 207
		},
		faq: [195, 145, 148]
	},
	{
		id: 'WA210',
		name: 'Outflank',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -2 tactic points</p>',
		releases: {
			WC: 93,
			WA: 210
		},
		faq: [168]
	},
	{
		id: 'WC94',
		name: 'Perfect Counter',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Your enemy discards 2 random cards.</p>',
		releases: {
			WC: 94
		},
		faq: []
	},
	{
		id: 'WA213',
		name: 'Plotting Revenge',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units is destroyed, play a strategy card.</p>',
		releases: {
			WC: 95,
			WA: 213
		},
		faq: []
	},
	{
		id: 'WA217',
		name: 'Prepare Yourselves!',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 leadership.</p>',
		releases: {
			WC: 96,
			WA: 217
		},
		faq: []
	},
	{
		id: 'WA218',
		name: 'Press the Advantage',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit does not make a combat roll.</p>',
		releases: {
			WC: 97,
			WA: 218
		},
		faq: [236]
	},
	{
		id: 'WC98',
		name: 'Prevailing Wind',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Before you choose a target for a ranged attack, you may choose any enemy unit, regardless of range.</p>',
		releases: {
			WC: 98
		},
		faq: []
	},
	{
		id: 'WC99',
		name: 'Reform!',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Move any number of your reserve units to the battle line.</p>',
		releases: {
			WC: 99
		},
		faq: []
	},
	{
		id: 'WA225',
		name: 'Relentless Advance',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If your unit wins the combat, destroy the enemy unit.</p>',
		releases: {
			WC: 100,
			WA: 225
		},
		faq: [66]
	},
	{
		id: 'WA238',
		name: 'Shield Wall',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each ready unit in your battle line. Only usable while defending.</p>',
		releases: {
			WC: 101,
			WA: 238
		},
		faq: []
	},
	{
		id: 'WC102',
		name: 'Smashing Attack',
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength if this is the first battle, +2 if it is the second, or +3 if it is the third batTle.</p>',
		releases: {
			WC: 102
		},
		faq: []
	},
	{
		id: 'WA246',
		name: 'Strategic Withdrawal',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit one of your units <span class="errata">not in combat</span>: After your enemy routs one of your units, no follow-up attack may be made.</p>',
		releases: {
			WC: 103,
			WA: 246
		},
		errata: true,
		faq: []
	},
	{
		id: 'WC104',
		name: 'Strength in Numbers',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b> Commit any number of your units: This unit gets +2 strength for each unit committed this way.</p>',
		releases: {
			WC: 104
		},
		faq: [95]
	},
	{
		id: 'WA247',
		name: 'Strength of Forethought',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: At the end of the tactic phase, this unit gets +1 strength for each of it's unspent tactic points.</p>",
		releases: {
			WC: 105,
			DH: 13,
			WA: 247
		},
		faq: []
	},
	{
		id: 'CD32',
		name: 'Strength of Honor',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +d6 strength if it passes a leadership test.</p>',
		releases: {
			WC: 106,
			CD: 32
		},
		faq: []
	},
	{
		id: 'WC107',
		name: 'Study the Maps',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: "<p><b>Command</b>: Choose a number, then look at your enemy's hand. Your enemy discards all cards with a die equal that number.</p>",
		releases: {
			WC: 107
		},
		faq: []
	},
	{
		id: 'WA251',
		name: 'Sudden Attack',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength.</p>',
		releases: {
			WC: 108,
			WA: 251
		},
		faq: []
	},
	{
		id: 'WC109',
		name: 'Surprise Attack',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 tactic points. Only usable while blocking.</p>',
		releases: {
			WC: 109
		},
		faq: [141]
	},
	{
		id: 'WC110',
		name: 'Surround Them',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: No more support tactics may be used in this combat.</p>',
		releases: {
			WC: 110
		},
		faq: []
	},
	{
		id: 'WC111',
		name: 'Test of Steel',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets "<b>Terror</b>: 1".</p>',
		releases: {
			WC: 111
		},
		faq: [268]
	},
	{
		id: 'WA258',
		name: 'The Conscripts Arrive',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Use the support tactic on one of your committed units or attachments, without paying it's costs.</p>",
		releases: {
			WC: 112,
			WA: 258
		},
		faq: [126, 47]
	},
	{
		id: 'WC113',
		name: 'Thundering Hooves',
		cost: 4,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: This cavalry unit gets a strength bonus equal to it's printed strength. Only usable while attacking.</p>",
		releases: {
			WC: 113
		},
		faq: [142]
	},
	{
		id: 'WA267',
		name: 'To the Last Man',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>Committed enemy units get -2 leadership.</p>',
		releases: {
			WC: 114,
			WA: 267
		},
		faq: []
	},
	{
		id: 'WA269',
		name: 'Underhanded Tricks',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Commit any enemy unit unless it passes a leadership test.</p>',
		releases: {
			WC: 115,
			WA: 269
		},
		faq: [74]
	},
	{
		id: 'WC116',
		name: 'Valorous Assault',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your enemy makes a combat roll, they re-roll.</p>',
		releases: {
			WC: 116
		},
		faq: [138]
	},
	{
		id: 'WC117',
		name: 'Armor of the Dragon',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 leadership or +1 tactic point.</p>',
		releases: {
			WC: 117
		},
		faq: []
	},
	{
		id: 'WC118',
		name: 'Bane Banner',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard your hand: This unit gets +4 strength.</p>',
		releases: {
			WC: 118
		},
		faq: []
	},
	{
		id: 'WA281',
		name: 'Banner of Terror',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Terror</b>: 2".</p>',
		releases: {
			WC: 119,
			CD: 35,
			DH: 16,
			WA: 281
		},
		faq: []
	},
	{
		id: 'WA283',
		name: 'Enchanted Armor',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If this combat ends in a slaughter, this unit wins instead.</p>',
		releases: {
			WC: 120,
			CD: 36,
			WA: 283
		},
		faq: [196, 247]
	},
	{
		id: 'WA284',
		name: 'Enchanted Shield',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit may block any non-ranged attack.</p>',
		releases: {
			WC: 121,
			WA: 284
		},
		faq: []
	},
	{
		id: 'WC122',
		name: 'Hammer of Thunder',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Super rare',
		text: "<p><b>Combat Tactic</b>: Choose one tactic or reaction ability printed on the enemy unit or it's attachments. That ability may not be used.</p>",
		releases: {
			WC: 122
		},
		faq: []
	},
	{
		id: 'WA288',
		name: 'Mighty Warhorn',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Scout</b>: 3".</p>',
		releases: {
			WC: 123,
			PW: 42,
			WA: 288
		},
		faq: []
	},
	{
		id: 'WC124',
		name: 'Mounts',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>Replace this unit\'s "Infantry" or "Flyer" keyword with "Cavalry".</p><p><b>Combat Tactic</b>: This unit gets +1 strength vs. infantry.</p>',
		releases: {
			WC: 124
		},
		faq: [282]
	},
	{
		id: 'WA289',
		name: 'Musician',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit cannot be blocked.</p>',
		releases: {
			WC: 125,
			WA: 289
		},
		faq: []
	},
	{
		id: 'WC126',
		name: 'Standard Bearer',
		cost: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Victory</b>: +3".</p>',
		releases: {
			WC: 126
		},
		faq: []
	},
	{
		id: 'WC127',
		name: 'Sword of Destiny',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Look at the top 3 cards of your enemy's action deck and replace them in any order.</p>",
		releases: {
			WC: 127
		},
		faq: [112]
	},
	{
		id: 'DH39',
		name: 'Sword of Striking',
		cost: 1,
		strength: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '',
		releases: {
			WC: 128,
			CD: 38,
			DH: 39
		},
		faq: []
	},
	{
		id: 'WA292',
		name: 'Talisman of Strength',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Destroy this card: This unit gets +2 strength or +2 leadership.</p>',
		releases: {
			WC: 129,
			WA: 292
		},
		faq: [53, 55]
	},
	{
		id: 'WC130',
		name: "Alrik's Throneguard",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is in your battle line ready, your enemy may not attack your "Unique" units.</p>',
		releases: {
			WC: 130
		},
		faq: [194, 140, 32]
	},
	{
		id: 'WC131',
		name: "Barak's Brawlers",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b> Destroy one of your strategy cards: this unit gets +3 strength. You may use this ability any number of times.</p>',
		releases: {
			WC: 131
		},
		faq: []
	},
	{
		id: 'WC132',
		name: "Barak's Strongbolts",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 6</p>',
		releases: {
			WC: 132
		},
		faq: []
	},
	{
		id: 'WC133',
		name: 'Brotherhood of Karak Azul',
		cost: 5,
		strength: 6,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>After you attack with any other unit, commit this unit.</p>',
		releases: {
			WC: 133
		},
		faq: []
	},
	{
		id: 'WC134',
		name: "Bugman's Rangers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: Look at the top card of your action deck. You may discard that card.</p>',
		releases: {
			WC: 134
		},
		faq: []
	},
	{
		id: 'WA296',
		name: "Dorgan's Ironshields",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +2</p><p>While this unit is in combat, your enemy may not use support tactics.</p>',
		releases: {
			WC: 135,
			WA: 296
		},
		faq: []
	},
	{
		id: 'WC136',
		name: "Drakk's Breath",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b> Discard a card: Your unit gets +1 strength.</p>',
		releases: {
			WC: 136
		},
		faq: []
	},
	{
		id: 'WA301',
		name: "Ganulf's Youngbeards",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +2</p>',
		releases: {
			WC: 137,
			WA: 301
		},
		faq: []
	},
	{
		id: 'WA302',
		name: 'Greyfathers of Karak-Hirn',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b>: Discard any number of cards. Draw 1 card for each card discarded this way.</p>',
		releases: {
			WC: 138,
			WA: 302
		},
		faq: []
	},
	{
		id: 'WC139',
		name: "Gripnir's Stormguard",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Only usable while this unit has a weapon attachment.</p><p><b>Combat Tactic</b>: This unit gets +1 strength. Only usable while this unit has an armor attachment.</p>',
		releases: {
			WC: 139
		},
		faq: []
	},
	{
		id: 'WC140',
		name: 'Iron Brotherhood',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +2</p>',
		releases: {
			WC: 140
		},
		faq: []
	},
	{
		id: 'WC141',
		name: 'King Alrik Ranulfsson',
		cost: 7,
		strength: 6,
		tacticPoints: 5,
		leadership: 6,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>While this unit is ready, all your other Dwarf units may play WarCry cards for 0 tactic points and get "<b>Terror</b>: 1".</p>',
		releases: {
			WC: 141
		},
		faq: [171]
	},
	{
		id: 'WC142',
		name: "King Alrik's Shieldbearers",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>While this unit is committed, your units get +1 leadership.</p>',
		releases: {
			WC: 142
		},
		faq: []
	},
	{
		id: 'WC143',
		name: 'Orcbane',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Support Tactic</b> Discard a card: If this combat ends as a slaughter your unit wins instead.</p>',
		releases: {
			WC: 143
		},
		faq: [196, 247]
	},
	{
		id: 'WA313',
		name: 'Rockgrinder',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Ranged Attack</b>: 3</p><p><b>Support Tactic</b> Discard a card: Your unit gets a strength bonus equal to the tactic point cost of the discarded card.</p>',
		releases: {
			WC: 144,
			WA: 313
		},
		faq: []
	},
	{
		id: 'WC145',
		name: "Thori's Tunnelers",
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Command</b> Commit: Play any number of strategy cards. Draw 1 card for each strategy card played this way.</p>',
		releases: {
			WC: 145
		},
		faq: []
	},
	{
		id: 'WA319',
		name: "Ulfrik's Axe-Bearers",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Discard the top 4 cards of your action deck. Add 1 combat tactic discarded this way to your hand.</p>',
		releases: {
			WC: 146,
			WA: 319
		},
		faq: []
	},
	{
		id: 'WC147',
		name: 'Barak Grimjaw',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Destroy 1 attachment on the enemy unit.</p><p>This card may only be attached to a Dwarf unit.</p>',
		releases: {
			WC: 147
		},
		faq: []
	},
	{
		id: 'WC148',
		name: 'Altdorf Halberdiers',
		cost: 3,
		strength: 4,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '',
		releases: {
			WC: 148
		},
		faq: []
	},
	{
		id: 'WC149',
		name: 'Altdorf Swordsmen',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b> Commit: Your unit gets +3 strength if it passes a leadership test.</p>',
		releases: {
			WC: 149
		},
		faq: []
	},
	{
		id: 'WC150',
		name: 'Carroburg Greatswords',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +1</p><p><b>Reaction</b>: After a tactic gives this unit a strength bonus this unit gets +1 strength.</p>',
		releases: {
			WC: 150
		},
		faq: [35, 44]
	},
	{
		id: 'WC151',
		name: 'Elector Count Theodric Gausser',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p>While this unit is in your reserves, your Empire units get +1 leadership.</p><p><b>Combat Tactic</b>: Use the support tactic on one of your committed units, without paying it's cost.</p>",
		releases: {
			WC: 151
		},
		faq: []
	},
	{
		id: 'WC152',
		name: "Fandelhoch's Yeomen",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Support Tactic</b> Commit: Your unit gets +4 strength vs. blocking units.</p>',
		releases: {
			WC: 152
		},
		faq: [141]
	},
	{
		id: 'WC153',
		name: "Gausser's Guard",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready and in the battle line, your enemy may not attack units in your reserves.</p>',
		releases: {
			WC: 153
		},
		faq: [194, 139]
	},
	{
		id: 'WA330',
		name: 'Grand Master Hans Leitdorf',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Support Tactic</b>: Play a combat tactic from your hand without paying it's cost. Only usable while one of your cavalry units is in combat.</p>",
		releases: {
			WC: 154,
			WA: 330
		},
		faq: [92, 68]
	},
	{
		id: 'WC155',
		name: "Knights of Sigmar's Blood",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only usable while blocking.</p>',
		releases: {
			WC: 155
		},
		faq: [141]
	},
	{
		id: 'WC156',
		name: 'Knights of the North Star',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +1 strength for each of your committed war machines.</p>',
		releases: {
			WC: 156
		},
		faq: []
	},
	{
		id: 'WC157',
		name: 'Middenheim Halberdiers',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b> Commit: Your unit gets +2 strength.</p>',
		releases: {
			WC: 157
		},
		faq: []
	},
	{
		id: 'WA340',
		name: 'Middenland Swordsmen',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b> Commit: Your unit gets +3 leadership.</p>',
		releases: {
			WC: 158,
			WA: 340
		},
		faq: []
	},
	{
		id: 'WA342',
		name: "Pfanelholt's Swordsmen",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Commit: After one of your units wins a combat, destroy the enemy unit.</p>',
		releases: {
			WC: 159,
			WA: 342
		},
		faq: [222, 223]
	},
	{
		id: 'WC160',
		name: 'Reik River Patrol',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Short Ranged Attack</b>: 8</p>',
		releases: {
			WC: 160
		},
		faq: []
	},
	{
		id: 'WC161',
		name: 'Reikland Militia',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b> Commit: Draw 2 cards, then discard 2 cards.</p>',
		releases: {
			WC: 161
		},
		faq: []
	},
	{
		id: 'WC162',
		name: "Riemann's Archers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p>',
		releases: {
			WC: 162
		},
		faq: []
	},
	{
		id: 'WC163',
		name: "Riemann's Halberdiers",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may block infantry.</p>',
		releases: {
			WC: 163
		},
		faq: []
	},
	{
		id: 'WA346',
		name: 'The Penitents of Altdorf',
		cost: 3,
		strength: 0,
		tacticPoints: 0,
		leadership: 5,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets +1 strength for each card in your enemy's hand.</p>",
		releases: {
			WC: 164,
			WA: 346
		},
		faq: []
	},
	{
		id: 'WC165',
		name: 'Captain Karl Riemann',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		unique: true,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Draw 1 card.</p><p>This card may only be attached to an Empire unit.</p>',
		releases: {
			WC: 165
		},
		faq: []
	},
	{
		id: 'WC166',
		name: "Aelleron's Everwatch",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: Name a card, then look at your enemy's hand. If the named card is in their hand, this unit gets +4 strength.</p>",
		releases: {
			WC: 166
		},
		faq: []
	},
	{
		id: 'WA361',
		name: "Calath's Sentinels",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your High Elf unit gets +1 strength. Only usable while this unit is in the battle line.</p>',
		releases: {
			WC: 167,
			WA: 361
		},
		faq: []
	},
	{
		id: 'WC168',
		name: "Caradril's Seekers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p>While this unit is in your battle line ready, enemy units may not block your attacks.</p>',
		releases: {
			WC: 168
		},
		faq: []
	},
	{
		id: 'WC169',
		name: "Caradril's Silver Arrows",
		cost: 3,
		strength: 2,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p>',
		releases: {
			WC: 169
		},
		faq: []
	},
	{
		id: 'WC170',
		name: 'Cothique Sapphire Company',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each strategy card you have in play.</p>',
		releases: {
			WC: 170
		},
		faq: []
	},
	{
		id: 'WC171',
		name: "Eagle's Claw",
		cost: 3,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['High Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 5</p><p><b>Support Tactic</b> Commit: Your unit gets +2 strength.</p>',
		releases: {
			WC: 171
		},
		faq: []
	},
	{
		id: 'WC172',
		name: "Elrohyr's Brighthelms",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: The defending unit is committed unless it passes a leadership test. Only usable during a ranged attack.</p>',
		releases: {
			WC: 172
		},
		faq: [74]
	},
	{
		id: 'WC173',
		name: "Fuviel's Shining Lances",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit destroys an enemy unit, you may move one enemy unit from the battle line to the reserves.</p>',
		releases: {
			WC: 173
		},
		faq: [234]
	},
	{
		id: 'WA363',
		name: "Galathel's Greycloaks",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 4</p>',
		releases: {
			WC: 174,
			WA: 363
		},
		faq: []
	},
	{
		id: 'WC175',
		name: "Gelthion's Brightblades",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>WarCry</b>: Your enemy may not play any tactic or reaction abilities printed on the enemy unit or any of it's attachments.</p>",
		releases: {
			WC: 175
		},
		faq: []
	},
	{
		id: 'WC176',
		name: "Ilthorial's Riders",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While attacking from the battle line this unit attacks as a flyer.</p>',
		releases: {
			WC: 176
		},
		faq: [25]
	},
	{
		id: 'WA365',
		name: 'Imrik, Dragon Prince of Caledor',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 5,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Reaction</b>: After your High Elf unit routs an enemy unit, choose the target of it's follow-up attack.</p>",
		releases: {
			WC: 177,
			WA: 365
		},
		faq: []
	},
	{
		id: 'WC178',
		name: "Imrik's Knights",
		cost: 6,
		strength: 4,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +3 strength. Only usable while attacking from the battle line.</p>',
		releases: {
			WC: 178
		},
		faq: [147]
	},
	{
		id: 'WC179',
		name: "Lathain's Patrol",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Long Ranged Attack</b>: 6</p>',
		releases: {
			WC: 179
		},
		faq: []
	},
	{
		id: 'WC180',
		name: 'Phoenix Guard of Asuryan',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only usable while you have no other ready units.</p>',
		releases: {
			WC: 180
		},
		faq: []
	},
	{
		id: 'WC181',
		name: 'Prince Boranhyr Geddesil',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Play up to 2 strategy cards.</p>',
		releases: {
			WC: 181
		},
		faq: []
	},
	{
		id: 'WC182',
		name: "Silanthir's Defenders",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. cavalry.</p>',
		releases: {
			WC: 182
		},
		faq: []
	},
	{
		id: 'WC183',
		name: 'Swiftwing',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +2 strength for each of your committed ranged attack units.</p>',
		releases: {
			WC: 183
		},
		faq: []
	},
	{
		id: 'WC184',
		name: 'Rylanus Evaenarion',
		cost: 2,
		tacticPoints: 2,
		unique: true,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Look at the top 2 cards of your action deck. Discard 1 of them, then place the other on top of your action deck.</p>',
		releases: {
			WC: 184
		},
		faq: [112]
	},
	{
		id: 'WA10',
		name: "D'aggorn's Deathblades",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p>While this unit is in combat, your enemy's combat roll gets -2.</p>",
		releases: {
			WM: 1,
			WA: 10
		},
		faq: [163]
	},
	{
		id: 'WM2',
		name: "D'aggorn's Hellrazers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. wizard units</p>',
		releases: {
			WM: 2
		},
		faq: [149]
	},
	{
		id: 'WA18',
		name: 'Melekh the Changer',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Reaction</b>: After you muster this unit, name a unit. Your enemy may not muster units with that name <span class="errata">during this muster phase while this unit is in play</span>.</p>',
		releases: {
			WM: 3,
			WA: 18
		},
		errata: true,
		faq: [155]
	},
	{
		id: 'WA19',
		name: "Melekh's Horrors",
		cost: 4,
		strength: 3,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 8</p><p>SpellWarCry (1): Destroy 1 enemy character attachment in this combat.</p>',
		releases: {
			WM: 4,
			WA: 19
		},
		faq: []
	},
	{
		id: 'WM5',
		name: "Melekh's Wyrdswords",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While you have 0 spell points, this unt gets "<b>Victory</b>: +2".</p>',
		releases: {
			WM: 5
		},
		faq: []
	},
	{
		id: 'WM6',
		name: "Quel'hi'liak",
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Terror</b>: 2</p><p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (3): Destroy the enemy unit. Discard the top 3 cards of your enemy's army deck. Your enemy chooses 1 unit card discarded in this way. That unit replaces the destroyed unit in combat. Only playable while attacking.</p>",
		releases: {
			WM: 6
		},
		faq: [274, 142, 257, 260, 261]
	},
	{
		id: 'WM7',
		name: "Tal'gatha the Fallen",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Combat Tactic</b> (1): The enemy unit gets -2 tactic points.</p>',
		releases: {
			WM: 7
		},
		faq: [168]
	},
	{
		id: 'WA26',
		name: 'Tzeentch Screamers',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Support Tactic</b>: The enemy unit gets -1 tactic point unless it passes a leadership test.</p>',
		releases: {
			WM: 8,
			WA: 26
		},
		faq: [168]
	},
	{
		id: 'WM9',
		name: 'Vendhal Skullwarper',
		cost: 1,
		unique: true,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell WarCry</b> (1): The enemy unit makes a leadership test. If it fails the enemy may not play spell cards or abilities.</p>',
		releases: {
			WM: 9
		},
		faq: []
	},
	{
		id: 'WM10',
		name: 'Black Ark Hunters',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable while the enemy unit has 0 tactic points.</p><p><b>Support Tactic</b>: Your unit gets +1 strength vs. High Elf units.</p>',
		releases: {
			WM: 10
		},
		faq: [167]
	},
	{
		id: 'WA35',
		name: 'Ganethia Blacksoul',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (2): Your enemy discards 1 random card.</p>',
		releases: {
			WM: 11,
			WA: 35
		},
		faq: []
	},
	{
		id: 'WM12',
		name: 'Har Ganeth Executioners',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p>While this unit is in combat your enemy's tactic cards cost 1 additional tactic point.</p>",
		releases: {
			WM: 12
		},
		faq: [105]
	},
	{
		id: 'WM13',
		name: "Kae'bhirnek's Twilight Grievers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: The enemy unit gets -2 tactic points unless your enemy discards 2 cards.</p>',
		releases: {
			WM: 13
		},
		faq: [168]
	},
	{
		id: 'WA46',
		name: "Menghil's Mankillers",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: When this combat ends, the result is a slaughter. Only playable while the enemy unit has 0 tactic points.</p>',
		releases: {
			WM: 14,
			WA: 46
		},
		faq: [3, 167]
	},
	{
		id: 'WA47',
		name: 'Morathi, the Hag Sorceress',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>WarCry</b>: Choose a number. Your enemy reveals their hand. This unit gets +1 strength for each card in their hand with a die equal to the chosen number.</p>',
		releases: {
			WM: 15,
			WA: 47
		},
		faq: []
	},
	{
		id: 'WA52',
		name: 'Saerith the Bladed',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: After your enemy discards a card from their hand, you get 1 spell point.</p>',
		releases: {
			WM: 16,
			WA: 52
		},
		faq: []
	},
	{
		id: 'WM17',
		name: 'The Scarlet Coven',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After a combat ends in a slaughter, draw 1 card.</p>',
		releases: {
			WM: 17
		},
		faq: [245]
	},
	{
		id: 'WM18',
		name: "Ellekiel, Bride of Ha'asek",
		cost: 1,
		unique: true,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (2): Your enemy discards 1 card.</p>',
		releases: {
			WM: 18
		},
		faq: []
	},
	{
		id: 'WM19',
		name: 'Baz Thunderbelly',
		cost: 6,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit is defeated in combat, your enemy destroys one of their units with strength 3 or less.</p>',
		releases: {
			WM: 19
		},
		faq: [117]
	},
	{
		id: 'WA65',
		name: 'Grubbi Hookblade',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your infantry unit gets +1 strength.</p>',
		releases: {
			WM: 20,
			WA: 65
		},
		faq: []
	},
	{
		id: 'WA67',
		name: "Grubbi's Skullcracker",
		cost: 3,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After this unit wins a ranged attack combat, commit all other enemy units with the same name as the losing unit.</p>',
		releases: {
			WM: 21,
			WA: 67
		},
		faq: [4]
	},
	{
		id: 'WM22',
		name: "Grubbi's Wolfboyz",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 3</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your committed units.</p>',
		releases: {
			WM: 22
		},
		faq: []
	},
	{
		id: 'WM23',
		name: "Moonscowler's Jabbers",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Dwarf units.</p>',
		releases: {
			WM: 23
		},
		faq: []
	},
	{
		id: 'WM24',
		name: 'Uzzag Gharkhul Skullburster',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength for each of your committed wizard units.</p>',
		releases: {
			WM: 24
		},
		faq: [149]
	},
	{
		id: 'WA86',
		name: 'Wazzi Moonscowler',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: After you rout an enemy unit you get 1 spell point.</p>',
		releases: {
			WM: 25,
			WA: 86
		},
		faq: []
	},
	{
		id: 'WM26',
		name: 'Wurrzag Ud Ura Zahabu',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (1): Destroy the enemy unit unless it passes an unmodified leadership test.</p>',
		releases: {
			WM: 26
		},
		faq: [271]
	},
	{
		id: 'WA88',
		name: 'Borgokk Bonecaster',
		cost: 1,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (1): This unit gets +2 strength. Only usable while you have more ready units than your enemy.</p>',
		releases: {
			WM: 27,
			WA: 88
		},
		faq: []
	},
	{
		id: 'WM28',
		name: 'All or Nothing',
		cost: 4,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: All your other combat tactics cost 0 tactic points.</p>',
		releases: {
			WM: 28
		},
		faq: [250, 171]
	},
	{
		id: 'WM29',
		name: 'Bane of Forged Steel',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Destroy all enemy attachments in this combat.</p>',
		releases: {
			WM: 29
		},
		faq: []
	},
	{
		id: 'WM30',
		name: 'Battle Cry',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b> Discard any number of cards: This unit gets +1 strength or each card discarded.</p>',
		releases: {
			WM: 30
		},
		faq: [95]
	},
	{
		id: 'WA109',
		name: 'Battle Hardened',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: If this <span class="errata">combat</span> ends in a slaughter, this unit wins instead.</p>',
		releases: {
			WM: 31,
			WA: 109
		},
		errata: true,
		faq: [196, 247]
	},
	{
		id: 'WA115',
		name: "Borgokk's Fog of War",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (1): Destroy all enemy strategy cards.</p>',
		releases: {
			WM: 32,
			WA: 115
		},
		faq: []
	},
	{
		id: 'WA116',
		name: 'Borrowed Power',
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell WarCry</b> (2): Play a WarCry or combat tactic ability on 1 of your units, paying all costs.</p>',
		releases: {
			WM: 33,
			WA: 116
		},
		faq: [82]
	},
	{
		id: 'WM34',
		name: 'Borrowed Steel',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): Play 1 combat tactic on any enemy attachment in this combat, paying no costs. Destroy that attachment.</p>',
		releases: {
			WM: 34
		},
		faq: [82, 83, 68]
	},
	{
		id: 'VT22',
		name: 'Buy Me Some Time',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Commit this unit: This combat ends. Return the enemy unit to the battle line ready.</p>',
		releases: {
			WM: 35,
			VT: 22
		},
		faq: [60, 186]
	},
	{
		id: 'WM36',
		name: 'Chain Casting',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength for each of your ready wizard units.</p>',
		releases: {
			WM: 36
		},
		faq: [149]
	},
	{
		id: 'WM37',
		name: 'Choices of War',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Name a card. Your enemy may not play the named card.</p>',
		releases: {
			WM: 37
		},
		faq: [184]
	},
	{
		id: 'WA125',
		name: 'Command the Heights',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>All of your units get "<b>Ranged Attack</b>: 0".</p><p><b>Support Tactic</b>: Your unit gets +2 ranged attack.</p>',
		releases: {
			WM: 38,
			VT: 23,
			WA: 125
		},
		faq: [213]
	},
	{
		id: 'WA138',
		name: "Devil's Bargain",
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> Rally 1 enemy unit in the battle line (1): This unit gets a strength bonus equal to that units gold cost.</p>',
		releases: {
			WM: 39,
			WA: 138
		},
		faq: [97]
	},
	{
		id: 'WM40',
		name: 'Disruption of Support',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All support tactics cost 1 additional spell point.</p>',
		releases: {
			WM: 40
		},
		faq: [90, 91]
	},
	{
		id: 'WA139',
		name: 'Dissipate Magic',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Spell Reaction</b> (1): After your enemy plays a spell card or ability, negate it's effects. Only playable while you have a ready wizard.</p>",
		releases: {
			WM: 41,
			WA: 139
		},
		faq: []
	},
	{
		id: 'WM42',
		name: 'Dual Casting',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (X): Play X combat tactics, paying no costs. X may be no greater than the number of your ready wizard units.</p>',
		releases: {
			WM: 42
		},
		faq: [95, 96, 149, 68]
	},
	{
		id: 'WA142',
		name: 'Duplicate',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell Combat Tactic</b> (2): Copy any combat tactic card played this combat, paying all costs.</p>',
		releases: {
			WM: 43,
			WA: 142
		},
		faq: [93, 98, 75, 76, 77, 78, 84]
	},
	{
		id: 'WM44',
		name: 'Elite Support',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 tactic point.</p>',
		releases: {
			WM: 44
		},
		faq: []
	},
	{
		id: 'WM45',
		name: 'Fearsome Opponent',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -1 tactic point for each level of "<b>Terror</b>" this unit has.</p>',
		releases: {
			WM: 45
		},
		faq: [168]
	},
	{
		id: 'WA152',
		name: 'Fiery Blast',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): This wizard unit gets +3 strength.</p>',
		releases: {
			WM: 46,
			WA: 152
		},
		faq: [149]
	},
	{
		id: 'WM47',
		name: 'Final Assault',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength.</p>',
		releases: {
			WM: 47
		},
		faq: []
	},
	{
		id: 'WM48',
		name: 'Final Challenge',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this combat is won by a difference of 2 or less, the result is a slaughter.</p>',
		releases: {
			WM: 48
		},
		faq: []
	},
	{
		id: 'WM49',
		name: 'Flank Charge',
		cost: 2,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets "<b>Terror</b>: 2".</p>',
		releases: {
			WM: 49
		},
		faq: [268]
	},
	{
		id: 'WM50',
		name: 'Flash of Insight',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Spell Combat Tactic</b> (1): This unit gets a tactic point bonus equal to the opposing unit's printed tactic points.</p>",
		releases: {
			WM: 50
		},
		faq: []
	},
	{
		id: 'WM51',
		name: 'Foresight',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After your enemy declares an attack, you play the first tactic during that combat.</p>',
		releases: {
			WM: 51
		},
		faq: [194]
	},
	{
		id: 'WM52',
		name: 'Fury from Above',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This flyer unit gets +3 strength.</p>',
		releases: {
			WM: 52
		},
		faq: []
	},
	{
		id: 'WM53',
		name: 'Guardian Light',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Move 1 attachment to this unit from another of your ready units.</p>',
		releases: {
			WM: 53
		},
		faq: [18]
	},
	{
		id: 'WM54',
		name: 'Heroic Presence',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets "<b>Terror</b>: 3".</p>',
		releases: {
			WM: 54
		},
		faq: [268]
	},
	{
		id: 'WA173',
		name: 'Hex',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After any roll is made, that roll gets -1.</p>',
		releases: {
			WM: 55,
			WA: 173
		},
		faq: [163]
	},
	{
		id: 'DH12',
		name: 'Ire of the Magus',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Spell Reaction</b> (3): After 1 of your wizard units is destroyed, commit 1 enemy unit.</p>',
		releases: {
			WM: 56,
			DH: 12
		},
		faq: [149]
	},
	{
		id: 'WM57',
		name: "Let 'Em Run",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you fail a rout check, return the destroyed enemy unit to the battle line committed. Make a follow-up attack.</p>',
		releases: {
			WM: 57
		},
		faq: [220, 60]
	},
	{
		id: 'WA189',
		name: 'Luck',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After any roll is made, that roll gets +1.</p>',
		releases: {
			WM: 58,
			WA: 189
		},
		faq: []
	},
	{
		id: 'WM59',
		name: 'Magical Aptitude',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: All spell combat tactics you play this combat cost 0 spell points.</p>',
		releases: {
			WM: 59
		},
		faq: []
	},
	{
		id: 'WA190',
		name: 'Magnify Terror',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (2): This unit gets a strength bonus equal to it\'s levels of "<b>Terror</b>".</p>',
		releases: {
			WM: 60,
			WA: 190
		},
		faq: []
	},
	{
		id: 'WA194',
		name: 'Mass Confusion',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Discard 1 card: Exchange this unit with 1 of your other ready units.</p>',
		releases: {
			WM: 61,
			WA: 194
		},
		faq: [257, 258, 260, 261, 262]
	},
	{
		id: 'WM62',
		name: 'Meet Me in the Middle',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each committed enemy unit.</p>',
		releases: {
			WM: 62
		},
		faq: []
	},
	{
		id: 'WA197',
		name: "Melkior's Gambit",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: Before you declare an attack, you may choose to attack an enemy unit in the reserves.</p>',
		releases: {
			WM: 63,
			WA: 197
		},
		faq: [194]
	},
	{
		id: 'WA208',
		name: 'Open Field',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All your ranged attack units get "<b>Long Ranged Attack</b>: 6".</p>',
		releases: {
			WM: 64,
			VT: 24,
			WA: 208
		},
		faq: [213]
	},
	{
		id: 'WA211',
		name: 'Overload',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (1): Your enemy loses 3 spell points.</p>',
		releases: {
			WM: 65,
			WA: 211
		},
		faq: [165]
	},
	{
		id: 'WM66',
		name: 'Ready the Shields',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you enemy declares a ranged attack, choose 1 of your ready units to be the target of that attack.</p>',
		releases: {
			WM: 66
		},
		faq: []
	},
	{
		id: 'WM67',
		name: 'Rune of Holding',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After your enemy plays a combat tactic from their hand, they discard 1 card.</p>',
		releases: {
			WM: 67
		},
		faq: []
	},
	{
		id: 'WA232',
		name: 'Sacrifice',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Destroy 1 of your units: Your enemy discards 3 cards.</p>',
		releases: {
			WM: 68,
			WA: 232
		},
		faq: []
	},
	{
		id: 'WM69',
		name: 'Simple Plan',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each tactic point your enemy has spent.</p>',
		releases: {
			WM: 69
		},
		faq: []
	},
	{
		id: 'WM70',
		name: 'Spell of Shielding',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (5): Exchange this unit with a unit from your army deck discard pile. That unit is destroyed at the end of this combat.</p>',
		releases: {
			WM: 70
		},
		faq: [274, 257, 258, 260, 261, 262, 265]
	},
	{
		id: 'WM71',
		name: 'Steed of Shadows',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (2): Before you declare an attack, replace 1 of your unit\'s "Infantry" or "Cavalry" keywords with "Flyer" <span class="errata">until the end of the combat</span>.</p>',
		releases: {
			WM: 71
		},
		errata: true,
		faq: [254]
	},
	{
		id: 'WA245',
		name: 'Strategems',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength, +1 tactic point and +1 leadership.</p>',
		releases: {
			WM: 72,
			WA: 245
		},
		faq: []
	},
	{
		id: 'WM73',
		name: 'Strategic Maneuver',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for each card in your hand in excess of the cards in your enemy's hand.</p>",
		releases: {
			WM: 73
		},
		faq: []
	},
	{
		id: 'WM74',
		name: 'Overmaster',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each ready unit you have in excess of the number of ready enemy units.</p>',
		releases: {
			WM: 74
		},
		faq: []
	},
	{
		id: 'WM75',
		name: 'Strength of Focus',
		die: 1,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After your enemy rolls they reroll.</p><p><b>Spell Reaction</b> (1): After any roll is made, that roll gets +1.</p>',
		releases: {
			WM: 75
		},
		faq: [242, 243, 138]
	},
	{
		id: 'WM76',
		name: 'Superior Intellect',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength for each printed tactic point in excess of the enemy unit's printed tactic points.</p>",
		releases: {
			WM: 76
		},
		faq: []
	},
	{
		id: 'WM77',
		name: 'Surprise Arms',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (1): Discard the top 5 cards of your army deck. Choose 1 attachment discarded this way and add it to this unit, if possible.</p>',
		releases: {
			WM: 77
		},
		faq: [274]
	},
	{
		id: 'WM78',
		name: "The Crow's Feast",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +2 ranged attack for each of your ready wizard units.</p>',
		releases: {
			WM: 78
		},
		faq: [149]
	},
	{
		id: 'WM79',
		name: 'The Fog of War',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Discard 1 card: After your enemy declares a non-ranged attack, block with 1 of your ready units.</p>',
		releases: {
			WM: 79
		},
		faq: []
	},
	{
		id: 'WM80',
		name: 'The Howler Wind',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (3): Commit 1 enemy unit with strength equal to or less than your spell points unless your enemy destroys 1 of their units.</p>',
		releases: {
			WM: 80
		},
		faq: [169]
	},
	{
		id: 'WA263',
		name: 'Threaten',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Commit the enemy unit unless it passes a leadership test.</p>',
		releases: {
			WM: 81,
			WA: 263
		},
		faq: [74]
	},
	{
		id: 'WM82',
		name: 'The Strength of One',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. Only playable while you have no other ready units.</p>',
		releases: {
			WM: 82
		},
		faq: [72]
	},
	{
		id: 'WM83',
		name: 'Turn of Events',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +1 strength and may play cards as if it were attacking.</p>',
		releases: {
			WM: 83
		},
		faq: [48]
	},
	{
		id: 'WM84',
		name: 'Unleashed Fury',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +4 strength.Only playable while attacking.</p>',
		releases: {
			WM: 84
		},
		faq: [142]
	},
	{
		id: 'WM85',
		name: "Warrior's Sight",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +3 tactic points.</p>',
		releases: {
			WM: 85
		},
		faq: []
	},
	{
		id: 'WA275',
		name: 'Weapons Master',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Play the combat tactic on 1 of this unit's weapon attachments, paying all costs.</p>",
		releases: {
			WM: 86,
			WA: 275
		},
		faq: []
	},
	{
		id: 'WA277',
		name: 'Wind of Death',
		cost: 'X',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell WarCry</b> (X): If you win this combat, destroy 1 enemy unit with strength equal to or less than X. You may not make a follow-up attack.</p>',
		releases: {
			WM: 87,
			WA: 277
		},
		faq: [4, 95, 96]
	},
	{
		id: 'WA278',
		name: 'Winds of Fate',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell WarCry</b> (1): When this unit makes a combat roll, roll 3 times instead of once. Your enemy picks 2 of those rollsand adds both die numbers together. This total is your combat roll.</p>',
		releases: {
			WM: 88,
			WA: 278
		},
		faq: [240, 241, 244]
	},
	{
		id: 'WM89',
		name: 'You Shall Not Pass',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Command</b> Destroy one of your strategy cards (1): Commit 1 enemy unit with strength equal to or less than the die on the destroyed card.</p>',
		releases: {
			WM: 89
		},
		faq: []
	},
	{
		id: 'WM90',
		name: 'Crystal of Seeing',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Spell Support Tactic</b> (1): Look at the top card of your action deck. You may discard that card.</p><p>This item may only be attached to a wizard unit.</p>',
		releases: {
			WM: 90
		},
		faq: [149]
	},
	{
		id: 'WM91',
		name: 'Griffon War Banner',
		cost: 2,
		unique: true,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Super rare',
		text: '<p>While this unit is ready in the battle line, your infantry units get +1 tactic point and may attack from the reserves.</p><p>After this attachment is destroyed, commit each unit in your reserves unless it passes a leadership test.</p>',
		releases: {
			WM: 91
		},
		faq: [23, 122]
	},
	{
		id: 'WA285',
		name: 'Lance of Piercing',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable while attacking.</p><p>This weapon may not be attached to infantry.</p>',
		releases: {
			WM: 92,
			CD: 37,
			WA: 285
		},
		faq: [142, 142]
	},
	{
		id: 'WM93',
		name: "Sword of Forest's Might",
		cost: 1,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): This unit gets +2 strength unless your enemy discards 2 cards.</p>',
		releases: {
			WM: 93
		},
		faq: []
	},
	{
		id: 'WM94',
		name: 'Anvil of Doom',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Runesmith</b>: 2 <i>(Counts as Wizard)</i></p><p><span class="errata">Spell</span> Support <span class="errata">Tactic</span> (1): Your enemy loses 1 spell point.</p><p><b>Reaction</b>: After 1 of your other units wins a combat, you get 1 spell point.</p>',
		releases: {
			WM: 94
		},
		errata: true,
		faq: [4, 165]
	},
	{
		id: 'WM95',
		name: "Barak's Forest Rangers",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Reaction</b> Discard 1 card: After you declare an attack with this unit, choose an enemy unit in the reserves. You attack that unit. This attack may not be blocked.</p>',
		releases: {
			WM: 95
		},
		faq: []
	},
	{
		id: 'WM96',
		name: "Barak's Slayers",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets +1 strength for each enemy unit with a support tactic.</p>',
		releases: {
			WM: 96
		},
		faq: []
	},
	{
		id: 'WM97',
		name: "Borri Durinsson's Stoutbeards",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. ranged attack units.</p>',
		releases: {
			WM: 97
		},
		faq: []
	},
	{
		id: 'WM98',
		name: 'Dwarf Gunners',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Commit: Play the support tactic on 1 of your war machines, paying all costs.</p>',
		releases: {
			WM: 98
		},
		faq: []
	},
	{
		id: 'WM99',
		name: 'Pride of Karak-Hirn',
		cost: 4,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit wins a ranged attack combat vs. an enemy unit in the battle line, declare a <b>Ranged Attack</b>: 5 attack against an enemy unit in the reserves.</p>',
		releases: {
			WM: 99
		},
		faq: [4, 217]
	},
	{
		id: 'WM100',
		name: 'Runelord Thurin Stormhammer',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p><b>Spell Reaction</b> (1): After you destroy an enemy attachment, draw 1 card.</p>',
		releases: {
			WM: 100
		},
		faq: []
	},
	{
		id: 'WA314',
		name: 'Runesmith Gottri Grimsson',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p>While this unit is in combat all you enemy's spells cost 1 additional spell point.</p>",
		releases: {
			WM: 101,
			WA: 314
		},
		faq: []
	},
	{
		id: 'WA320',
		name: 'Boldur Runestriker',
		cost: 1,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i>.</p><p><b>Spell Combat Tactic</b> (1): Your enemy loses 2 spell points.</p>',
		releases: {
			WM: 102,
			WA: 320
		},
		faq: [165]
	},
	{
		id: 'WM103',
		name: 'Balthasar Gelt',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (1): Move 1 unit from the reserves to the battle line.</p>',
		releases: {
			WM: 103
		},
		faq: []
	},
	{
		id: 'WM104',
		name: 'Carroburg City Garrison',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Commit: The enemy unit gets -2 leadership.</p>',
		releases: {
			WM: 104
		},
		faq: []
	},
	{
		id: 'WA326',
		name: 'Dieter Menschaff',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> Discard 1 card (1): This unit gets +2 strength.</p>',
		releases: {
			WM: 105,
			WA: 326
		},
		faq: []
	},
	{
		id: 'WA331',
		name: "Gunther's Carroburgers",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you muster this unit to the battle line, move 1 enemy unit to the reserves.</p>',
		releases: {
			WM: 106,
			WA: 331
		},
		faq: []
	},
	{
		id: 'WA335',
		name: 'Knight General Mikael Kobernecht',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p>While this unit is in combat, your enemy may not play WarCry cards or abilities.</p>',
		releases: {
			WM: 107,
			WA: 335
		},
		faq: [118, 120]
	},
	{
		id: 'WA336',
		name: 'Lector Wilhelm Faustus',
		cost: 5,
		strength: 4,
		tacticPoints: 1,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Your enemy rolls. This unit gets a strength bonus equal to the die rolled.</p><p><b>Combat Tactic</b>: Reveal the top card of your enemy's action deck. Only playable vs. a Chaos unit.</p>",
		releases: {
			WM: 108,
			WA: 336
		},
		faq: []
	},
	{
		id: 'WM109',
		name: 'Reiksguard Knights',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 tactic points. Only playable while you have a ready "Unique" unit.</p>',
		releases: {
			WM: 109
		},
		faq: []
	},
	{
		id: 'WM110',
		name: 'Wissen Highway Patrol',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 4</p><p><b>Support Tactic</b> Discard 1 card: Your unit gets +1 ranged attack.</p>',
		releases: {
			WM: 110
		},
		faq: []
	},
	{
		id: 'WA352',
		name: 'Gerhart Brennend, Bright Wizard',
		cost: 1,
		unique: true,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Reaction</b> (1): After the enemy unit receives a strength bonus, this unit gets +2 tactic points.</p>',
		releases: {
			WM: 111,
			WA: 352
		},
		faq: [35, 36, 41]
	},
	{
		id: 'WM112',
		name: 'Eagles of the Dawn Eyrie',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. committed units.</p>',
		releases: {
			WM: 112
		},
		faq: []
	},
	{
		id: 'WA353',
		name: 'Alarielle, the Everqueen',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Support Tactic</b>: Your unit gets +1 strength or +1 ranged attack.</p>',
		releases: {
			WM: 113,
			WA: 353
		},
		faq: []
	},
	{
		id: 'WM114',
		name: "Celethil's Swordmasters",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is in combat your tactic cards, cost 1 less tactic point.</p>',
		releases: {
			WM: 114
		},
		faq: []
	},
	{
		id: 'WM115',
		name: 'Mage Bilgarim Whitestar',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): Your unit gets +1 leadership.</p>',
		releases: {
			WM: 115
		},
		faq: []
	},
	{
		id: 'WM116',
		name: "Quenarion's Brightspears",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Dark Elf units.</p>',
		releases: {
			WM: 116
		},
		faq: []
	},
	{
		id: 'WM117',
		name: 'Teclis, High Loremaster',
		cost: 6,
		strength: 4,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 3</p><p>While Teclis is committed, you may play abilities on him or his attachments.</p><p><b>Spell WarCry</b> (2): Play the WarCry or combat tactic printed on any unit, paying all costs.</p>',
		releases: {
			WM: 117
		},
		faq: [159, 82]
	},
	{
		id: 'WM118',
		name: 'White Lions of Chrace',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>Cambat Tactic: This unit gets +1 strength and +1 leadership. Only playable while this unit has a character attachment.</p>',
		releases: {
			WM: 118
		},
		faq: []
	},
	{
		id: 'WM119',
		name: 'Yvresse White Company',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Long Ranged Attack</b>: 4</p>',
		releases: {
			WM: 119
		},
		faq: []
	},
	{
		id: 'WA381',
		name: 'Lady Ellaneil the Dawnbringer',
		cost: 1,
		unique: true,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>WarCry</b>: Play a spell combat tactic card, paying no costs.</p>',
		releases: {
			WM: 120,
			WA: 381
		},
		faq: [92, 68]
	},
	{
		id: 'SD1',
		name: 'Angkor, Father of Mammoths',
		cost: 7,
		strength: 6,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 2</p><p>While this unit is ready in the battle line, your enemy may not make follow-up attacks.</p><p><b>WarCry</b>: If you win this combat, destroy all enemy units with the same name as the losing unit.</p>',
		releases: {
			SD: 1
		},
		faq: [4, 23, 286]
	},
	{
		id: 'SD2',
		name: "Mal'angor",
		cost: 7,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 4</p><p>While this unit is in combat, you may not play spell cards or abilities.</p><p><b>WarCry</b> Discard any number of cards: This unit gets +1 strength for each card discarded.</p>',
		releases: {
			SD: 2
		},
		faq: [95]
	},
	{
		id: 'SD3',
		name: 'Bloodaxe Horde',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Empire units.</p>',
		releases: {
			SD: 3
		},
		faq: []
	},
	{
		id: 'SD4',
		name: 'Haargoth',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After your enemy plays a spell card or ability, they discard 1 card.</p><p><b>WarCry</b>: Your enemy's tactic cards cost 2 additional tactic points.</p>",
		releases: {
			SD: 4
		},
		faq: [105]
	},
	{
		id: 'WA14',
		name: "Haargoth's Bloodletters",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>:1</p><p><b>Combat Tactic</b>: Destroy 1 attachment on the enemy unit.</p>',
		releases: {
			SD: 5,
			WA: 14
		},
		faq: []
	},
	{
		id: 'SD6',
		name: "Haargoth's Blooddrinkers",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Discard 1 card: After this unit gets a strength bonus, double that strength bonus. Destroy this unit as that end of combat.</p>',
		releases: {
			SD: 6
		},
		faq: [39, 41, 44]
	},
	{
		id: 'SD7',
		name: "Haargoth's Scourge-Scythe",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If you rout the enemy unit, choose the target of your follow-up attack. Only playable while this unit has a character attachment.</p>',
		releases: {
			SD: 7
		},
		faq: []
	},
	{
		id: 'SD8',
		name: 'Korvin the Sentinel',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready, your other Chaos infantry units attack as though they were cavalry units.</p><p><b>Reaction</b>: After your enemy plays a spell card or ability, they lose 1 spell point.</p>',
		releases: {
			SD: 8
		},
		faq: [165, 25]
	},
	{
		id: 'WA25',
		name: 'The Skull Pack',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While this unit is in combat, your enemy may not play spell cards.</p><p><b>Reaction</b>: After you rout an enemy unit, draw 1 card.</p>',
		releases: {
			SD: 9,
			WA: 25
		},
		faq: []
	},
	{
		id: 'SD10',
		name: "Minotaur's Bane",
		cost: 2,
		unique: true,
		keywords: ['Chaos', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: Choose 1 of your units. This unit gets a strength bonus equal to the chosen unit's printed strength. If you lose this combat, destroy the chosen unit.</p><p>This card may only be attached to a Chaos unit.</p>",
		releases: {
			SD: 10
		},
		faq: [51, 52]
	},
	{
		id: 'WA32',
		name: 'Cauldron of Blood',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		unique: true,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Support Tactic</b>: Your Dark Elf unit gets "<b>Terror</b>: 1."</p><p><b>Reaction</b>: Before you make a combat roll, roll twice and choose the highest result.</p>',
		releases: {
			SD: 11,
			WA: 32
		},
		faq: [240, 268, 244]
	},
	{
		id: 'SD12',
		name: 'Malekith, the Witch King',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 3</p><p><b>WarCry</b>: Destroy all enemy attachments in this combat. This unit gets +1 strength for each attachment destroyed this way.</p>',
		releases: {
			SD: 12
		},
		faq: []
	},
	{
		id: 'SD13',
		name: 'Blades of Twilight',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Only playable while defending.</p>',
		releases: {
			SD: 13
		},
		faq: []
	},
	{
		id: 'SD14',
		name: 'Harpies',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +2 strength unless your enemy discards 2 cards.</p>',
		releases: {
			SD: 14
		},
		faq: []
	},
	{
		id: 'WA43',
		name: 'Keth Zarene',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Reaction</b> (2): After your enemy plays a card or ability that grants a strength bonus, they discard 1 card.</p>',
		releases: {
			SD: 15,
			WA: 43
		},
		faq: [35, 36, 39, 41, 227]
	},
	{
		id: 'SD16',
		name: "Malekith's Black Host",
		cost: 6,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit costs 2 less gold to muster if you have Malekith, The Witch King in play.</p><p><b>Combat Tactic</b> Discard 1 card: This unit gets +2 leadership.</p>',
		releases: {
			SD: 16
		},
		faq: [101]
	},
	{
		id: 'SD17',
		name: "Malekith's Executioners",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit wins a combat, commit 1 enemy unit that played a support tactic during this combat.</p>',
		releases: {
			SD: 17
		},
		faq: [4]
	},
	{
		id: 'SD18',
		name: "Sa'har the Ashen Lord",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Monster', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each unit in the enemy reserves. Only playable while attacking.</p>',
		releases: {
			SD: 18
		},
		faq: [142]
	},
	{
		id: 'SD19',
		name: 'The Hydra Blade',
		cost: 2,
		unique: true,
		keywords: ['Dark Elf', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength if it passes a leadership test.</p><p>This card may only be attached to a Dark Elf unit.</p>',
		releases: {
			SD: 19
		},
		faq: []
	},
	{
		id: 'SD20',
		name: 'Da Big Lobba',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Command</b> Commit: Discard the top card of your enemy's army deck. If that card was a unit, destroy all copies of that card in play.</p>",
		releases: {
			SD: 20
		},
		faq: []
	},
	{
		id: 'SD21',
		name: "Oglok the 'Orrible",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b> Destroy 1 of your units: This unit gets a strength bonus equal to the destroyed units gold cost.</p>',
		releases: {
			SD: 21
		},
		faq: [95, 97]
	},
	{
		id: 'SD22',
		name: "Ghulgar's Tuska Boyz",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. committed units.</p>',
		releases: {
			SD: 22
		},
		faq: []
	},
	{
		id: 'WA70',
		name: "Kurgrot's Doom Divers",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 3</p><p><b>Support WarCry</b>: Your enemy may not play WarCry cards or abilities.</p>',
		releases: {
			SD: 23,
			WA: 70
		},
		faq: [118, 120]
	},
	{
		id: 'SD24',
		name: "Urguck's Chainas",
		cost: 5,
		strength: 6,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -3</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. cavalry units.</p>',
		releases: {
			SD: 24
		},
		faq: []
	},
	{
		id: 'SD25',
		name: "Urguck's Chukka Boyz",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>Short ranged Attack: 8</p><p><b>Combat Tactic</b>: This unit gets +2 ranged attack vs. Dwarf units.</p>',
		releases: {
			SD: 25
		},
		faq: []
	},
	{
		id: 'WA87',
		name: "Wazzi's Lunatic Gitz",
		cost: 3,
		strength: 1,
		tacticPoints: 1,
		leadership: 5,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +2d6 strength. If the die numbers on the 2 cards rolled are equal, destroy this unit and commit 1 of your other ready units.</p>',
		releases: {
			SD: 26,
			WA: 87
		},
		faq: [229]
	},
	{
		id: 'SD27',
		name: "Wazzi's Netter Ladz",
		cost: 2,
		strength: 2,
		tacticPoints: 3,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Discard X cards: The enemy unit gets -X tactic points.</p>',
		releases: {
			SD: 27
		},
		faq: [95, 168]
	},
	{
		id: 'SD28',
		name: "Kleeva's Cleaver",
		cost: 2,
		unique: true,
		keywords: ['Orc', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (X): If you win this combat, rout the enemy unit. X is the printed strength of the enemy unit. Only playable once per command.</p><p>This card may only be attached to an Orc unit.</p>',
		releases: {
			SD: 28
		},
		faq: [195, 96, 145, 148]
	},
	{
		id: 'SD29',
		name: "Skcub's Gutter Runners",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p><b>Reaction</b> Discard 1 card: After setup, your enemy discards 1 random card. Only playable while this unit is in the battle line.</p>',
		releases: {
			SD: 29
		},
		faq: []
	},
	{
		id: 'SD30',
		name: 'Trolls of Blackbile Marsh',
		cost: 4,
		strength: 4,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b> Discard 1 card: Destroy all strategy cards.</p>',
		releases: {
			SD: 30
		},
		faq: []
	},
	{
		id: 'WA95',
		name: 'Vial of Unicorn Blood',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Destroy this attachment: You get 3 spell points.</p>',
		releases: {
			SD: 31,
			DH: 15,
			WA: 95
		},
		faq: [53, 55]
	},
	{
		id: 'SD32',
		name: 'Champion',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Discard the top 2 cards of your action deck. You may place 1 of the cards discarded in this way on top of your action deck.</p>',
		releases: {
			SD: 32
		},
		faq: []
	},
	{
		id: 'SD33',
		name: 'Doom Axe',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: This unit gets +2 strength.</p>',
		releases: {
			SD: 33
		},
		faq: []
	},
	{
		id: 'WA101',
		name: "Black Raven's Lurkers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>All other units cost 1 additional gold to muster.</p>',
		releases: {
			SD: 34,
			WA: 101
		},
		faq: []
	},
	{
		id: 'SD35',
		name: "Golgfag's Mercenary Ogres",
		cost: 4,
		strength: 4,
		tacticPoints: 1,
		leadership: 4,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Your enemy may not play combat tactic cards.</p>',
		releases: {
			SD: 35
		},
		faq: []
	},
	{
		id: 'WA105',
		name: 'Accurate and Precise',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: This unit gets a ranged attack bonus equal to it's printed tactic points.</p>",
		releases: {
			SD: 36,
			WA: 105
		},
		faq: []
	},
	{
		id: 'SD37',
		name: 'Against the Tide',
		cost: 4,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for each ready enemy unit.</p>',
		releases: {
			SD: 37
		},
		faq: []
	},
	{
		id: 'SD38',
		name: 'Aura of Futility',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): The enemy unit gets -2 strength.</p>',
		releases: {
			SD: 38
		},
		faq: []
	},
	{
		id: 'SD39',
		name: "Azyrneth's Battle Cry",
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength if it passes a leadership test.</p>',
		releases: {
			SD: 39
		},
		faq: []
	},
	{
		id: 'SD40',
		name: 'Blood Pact',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: When combat rolls are made for this combat, you roll from your enemy's deck and your enemy rolls from yours.</p>",
		releases: {
			SD: 40
		},
		faq: []
	},
	{
		id: 'WA114',
		name: 'Bogged Down',
		die: 1,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>Cavalry units may not make follow-up attacks.</p>',
		releases: {
			SD: 41,
			WA: 114
		},
		faq: []
	},
	{
		id: 'WA117',
		name: 'Break for Winter',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (3): Each player discards their hand and draws 5 cards.</p>',
		releases: {
			SD: 42,
			WA: 117
		},
		faq: []
	},
	{
		id: 'SD43',
		name: 'Chaos Vortex',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> Destroy 1 of your ready units (2): Discard the top 3 cards of your army deck. Your enemy chooses 1 unit discarded this way. Place the chosen unit in your battle line ready.</p>',
		releases: {
			SD: 43
		},
		faq: [274]
	},
	{
		id: 'SD44',
		name: 'Courageous Mounts',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +1 strength and "<b>Terror</b>: 1".</p>',
		releases: {
			SD: 44
		},
		faq: [268]
	},
	{
		id: 'SD45',
		name: 'Crude Measures',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your defending infantry unit gets +2 strength vs. cavalry units.</p>',
		releases: {
			SD: 45
		},
		faq: []
	},
	{
		id: 'SD46',
		name: 'Crush the Flank',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable while you have more ready units in the battle line than your enemy.</p>',
		releases: {
			SD: 46
		},
		faq: []
	},
	{
		id: 'SD47',
		name: 'Dark Horizon',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your flyer unit gets +2 strength.</p>',
		releases: {
			SD: 47
		},
		faq: []
	},
	{
		id: 'SD48',
		name: 'Dazzling Display',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): The enemy unit gets -3 tactic points unless they discard 1 card.</p>',
		releases: {
			SD: 48
		},
		faq: [168]
	},
	{
		id: 'WA143',
		name: 'Earthquake',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): Neither player makes a combat roll.</p>',
		releases: {
			SD: 49,
			WA: 143
		},
		faq: [208, 236]
	},
	{
		id: 'SD50',
		name: 'Enlightened Counsel',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Move any number of your units from the reserves to the battle line. Move any number of your units from the battle line to the reserves.</p>',
		releases: {
			SD: 50
		},
		faq: []
	},
	{
		id: 'WA149',
		name: "Fandelhoch's Folly",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: The enemy unit gets -2 strength.</p>',
		releases: {
			SD: 51,
			DH: 11,
			WA: 149
		},
		faq: []
	},
	{
		id: 'SD52',
		name: 'Gallant Death',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If you lose this combat, your enemy discards 2 random cards.</p>',
		releases: {
			SD: 52
		},
		faq: []
	},
	{
		id: 'WA162',
		name: 'Get Back Here!',
		die: 6,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you retreat, all of your units pass their leadership tests.</p>',
		releases: {
			SD: 53,
			VT: 25,
			WA: 162
		},
		faq: []
	},
	{
		id: 'WA166',
		name: "Ha'asek's Grief",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After 1 of your units is destroyed in combat, commit 1 enemy unit unless it passes a leadership test.</p>',
		releases: {
			SD: 54,
			WA: 166
		},
		faq: [58, 74]
	},
	{
		id: 'SD55',
		name: 'Haunted Fen',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Discard 1 card: Your unit gets "<b>Terror</b>: 1".</p>',
		releases: {
			SD: 55
		},
		faq: [268]
	},
	{
		id: 'WA170',
		name: 'Heavy Cavalry Charge',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +3 strength.</p>',
		releases: {
			SD: 56,
			WA: 170
		},
		faq: []
	},
	{
		id: 'SD57',
		name: 'Heroic Intervention',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. Only playable while this unit is losing a combat by 3 or more.</p>',
		releases: {
			SD: 57
		},
		faq: []
	},
	{
		id: 'WA172',
		name: 'Heroic Resolve',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only usable while this unit is attacking from the battle line.</p>',
		releases: {
			SD: 58,
			WA: 172
		},
		faq: [147]
	},
	{
		id: 'WA176',
		name: 'Increased Supplies',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability that forces you to discard 1 or more cards, draw 2 cards.</p>',
		releases: {
			SD: 59,
			WA: 176
		},
		faq: [228, 125, 252]
	},
	{
		id: 'WA178',
		name: 'Inspirational Victory',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If you win this combat, play 1 strategy card.</p>',
		releases: {
			SD: 60,
			WA: 178
		},
		faq: [4]
	},
	{
		id: 'SD61',
		name: 'Know Your Enemy',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each copy of the enemy unit that your enemy has in play.</p>',
		releases: {
			SD: 61
		},
		faq: []
	},
	{
		id: 'SD62',
		name: 'Lucky Blow',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only usable during a follow-up attack.</p>',
		releases: {
			SD: 62
		},
		faq: []
	},
	{
		id: 'WA193',
		name: 'Marsh of Morr',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b> Destroy 1 of your units: You get spell points equal to the destroyed units gold cost.</p>',
		releases: {
			SD: 63,
			WA: 193
		},
		faq: [97]
	},
	{
		id: 'WA195',
		name: 'Master of the Field',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and +2 leadership.</p>',
		releases: {
			SD: 64,
			WA: 195
		},
		faq: []
	},
	{
		id: 'WA199',
		name: 'Might of Heroes',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: This unit gets a strength bonus equal to it's leadership.</p>",
		releases: {
			SD: 65,
			WA: 199
		},
		faq: []
	},
	{
		id: 'SD66',
		name: 'Misdirection',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Exchange the enemy unit with 1 other enemy unit in the battle line. Not playable during a ranged attack.</p>',
		releases: {
			SD: 66
		},
		faq: [257, 258, 260, 261]
	},
	{
		id: 'SD67',
		name: 'Moral Victory',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If you win this combat, move 1 card from your action discard pile into your hand.</p>',
		releases: {
			SD: 67
		},
		faq: [4]
	},
	{
		id: 'SD68',
		name: 'Natural Leader',
		cost: 0,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Choose 1 of your ready units. This unit makes all leadership tests using the chosen units leadership.</p>',
		releases: {
			SD: 68
		},
		faq: [269]
	},
	{
		id: 'SD69',
		name: 'Numerical Advantage',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Choose a number. Your enemy reveals their hand. This unit gets +1 strength for each card in their hand with a die equal to the chosen number.</p>',
		releases: {
			SD: 69
		},
		faq: []
	},
	{
		id: 'WA209',
		name: 'Out Think',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Choose <span class="errata">one activated</span> ability printed on any enemy unit or attachment. Your enemy may not play that ability.</p>',
		releases: {
			SD: 70,
			WA: 209
		},
		errata: true,
		faq: []
	},
	{
		id: 'SD71',
		name: 'Overwhelming Strength',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for each card in your enemy's hand in excess of the cards in your hand.</p>",
		releases: {
			SD: 71
		},
		faq: []
	},
	{
		id: 'WA219',
		name: 'Proven Tactics',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Play a combat tactic ability printed on this unit, paying all costs.</p>',
		releases: {
			SD: 72,
			WA: 219
		},
		faq: []
	},
	{
		id: 'SD73',
		name: 'Rain of Fire',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets "<b>Terror</b>: 1" for each of your ready ranged attack units.</p>',
		releases: {
			SD: 73
		},
		faq: [268]
	},
	{
		id: 'SD74',
		name: 'Reap the Whirlwind',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit and the enemy unit each get +d6 strength.</p>',
		releases: {
			SD: 74
		},
		faq: []
	},
	{
		id: 'WA223',
		name: 'Reckless Assault',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +3 strength. If you lose this combat, discard your hand.</p>',
		releases: {
			SD: 75,
			WA: 223
		},
		faq: []
	},
	{
		id: 'SD76',
		name: 'Ruined Keep',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>Cavalry units may not attack from the reserves.</p>',
		releases: {
			SD: 76
		},
		faq: [194]
	},
	{
		id: 'WA233',
		name: 'Scatter the Ranks',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Move 1 enemy unit from the reserves to the battle line. Move 1 enemy unit from the battle line to the reserves.</p>',
		releases: {
			SD: 77,
			WA: 233
		},
		faq: []
	},
	{
		id: 'SD78',
		name: 'Sorcerous Guidance',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): This unit gets +3 ranged attack. This card costs 1 less tactic point for each of your ready wizard units.</p>',
		releases: {
			SD: 78
		},
		faq: [149]
	},
	{
		id: 'WA244',
		name: 'Stout of Heart',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After an enemy plays a card or ability that commits 1 or more of your units, rally those units.</p>',
		releases: {
			SD: 79,
			WA: 244
		},
		faq: []
	},
	{
		id: 'SD80',
		name: 'Strength of Arms',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +3 strength.</p>',
		releases: {
			SD: 80
		},
		faq: []
	},
	{
		id: 'WA248',
		name: 'Strength of Iron',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This war machine unit gets +3 strength.</p>',
		releases: {
			SD: 81,
			WA: 248
		},
		faq: []
	},
	{
		id: 'SD82',
		name: 'Strength of Will',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: If you win this combat by 4 or more, rout the enemy unit. Not playable during a follow-up attack.</p>',
		releases: {
			SD: 82
		},
		faq: []
	},
	{
		id: 'SD83',
		name: 'Surge of Faith',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> Discard 1 random card (1): This unit gets a strength bonus equal to the die on the discarded card.</p>',
		releases: {
			SD: 83
		},
		faq: [95]
	},
	{
		id: 'SD84',
		name: 'Tactical Flexibility',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Choose 1 enemy unit. Draw 1 card for each copy of that unit your enemy has.</p>',
		releases: {
			SD: 84
		},
		faq: []
	},
	{
		id: 'WA264',
		name: 'Tighten the Noose',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Name a card. Search your enemy's action deck for all copies of that card and place them in your enemy's discard pile. Then your enemy shuffles their deck.</p>",
		releases: {
			SD: 85,
			WA: 264
		},
		faq: [114]
	},
	{
		id: 'SD86',
		name: 'Trapping Maneuver',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. blocking units.</p>',
		releases: {
			SD: 86
		},
		faq: [141]
	},
	{
		id: 'SD87',
		name: 'Unrevealed Arts',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Look at your enemy's hand.</p>",
		releases: {
			SD: 87
		},
		faq: []
	},
	{
		id: 'WA276',
		name: 'When You Need It the Most',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 tactic point if it is the first battle, +2 tactic points if it is the second battle, or +3 tactic points if it is the third battle.</p>',
		releases: {
			SD: 88,
			WA: 276
		},
		faq: []
	},
	{
		id: 'WA279',
		name: 'Wings of the Harpy',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): This unit gets +2 strength and your enemy discards 1 card.</p>',
		releases: {
			SD: 89,
			WA: 279
		},
		faq: []
	},
	{
		id: 'SD90',
		name: 'Lyonesse Questing Knights',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Move 1 attachment from your discard pile to this unit, if possible.</p>',
		releases: {
			SD: 90
		},
		faq: [274]
	},
	{
		id: 'SD91',
		name: "Elli's Cannon",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Command</b> Commit: Choose 1 enemy unit. Commit that unit unless it passes a leadership test.</p>',
		releases: {
			SD: 91
		},
		faq: [74]
	},
	{
		id: 'SD92',
		name: 'Iron Thunder',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Short Ranged Attack</b>: 4</p><p><b>Reaction</b>: After setup, look at your enemy's hand.</p>",
		releases: {
			SD: 92
		},
		faq: []
	},
	{
		id: 'SD93',
		name: 'Ungrim Ironfist, the Slayer King',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Victory</b>: +2</p><p><b>WarCry</b>: If this unit wins this combat, commit one enemy unit unless it passes a leadership test.</p>',
		releases: {
			SD: 93
		},
		faq: [4, 74]
	},
	{
		id: 'WA309',
		name: "Izzumbard's Old Growlers",
		cost: 2,
		strength: 0,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Support WarCry</b>: Your unit gets +1 ranged attack for each of your war machine units in the battle line.</p>',
		releases: {
			SD: 94,
			WA: 309
		},
		faq: []
	},
	{
		id: 'WA310',
		name: 'Izzumbard Endrinkuli',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit has "<b>Victory</b>: +1" for each of your war machine units.</p><p><b>Reaction</b>: After setup, draw 2 cards. Only playable if you have more war machine units than your enemy.</p>',
		releases: {
			SD: 95,
			WA: 310
		},
		faq: []
	},
	{
		id: 'SD96',
		name: "Izzumbard's Warriors",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +1</p><p><b>WarCry</b> Commit 1 of your war machine units: This unit gets a strength bonus equal to the committed units gold cost.</p>',
		releases: {
			SD: 96
		},
		faq: [95, 97]
	},
	{
		id: 'SD97',
		name: "Miners of Thorag's Deep",
		cost: 5,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support WarCry</b> Discard 1 card: Exchange your infantry unit with one of your other ready infantry units in the battle line. Only playable while defending.</p>',
		releases: {
			SD: 97
		},
		faq: [257, 258, 260, 261]
	},
	{
		id: 'SD98',
		name: "Morglan's Shieldwall",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you muster a war machine unit, draw 1 card from your army deck.</p>',
		releases: {
			SD: 98
		},
		faq: []
	},
	{
		id: 'SD99',
		name: "Ulfson's Sharpshooters",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Combat Tactic</b>: This unit gets +1 ranged attack for each of your war machine units.</p>',
		releases: {
			SD: 99
		},
		faq: []
	},
	{
		id: 'WA321',
		name: 'Malakai Makaisson',
		cost: 1,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if you have a ready war machine unit.</p>',
		releases: {
			SD: 100,
			WA: 321
		},
		faq: []
	},
	{
		id: 'SD101',
		name: 'The Hammer of Fate',
		cost: 2,
		unique: true,
		keywords: ['Dwarf', 'Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Spell WarCry</b> (2): This unit gets a strength bonus equal to it's leadership.</p><p>This card may only be attached to a Dwarf unit.</p>",
		releases: {
			SD: 101
		},
		faq: []
	},
	{
		id: 'SD102',
		name: 'Reiksmarshall Kurt Helborg',
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>While this unit is ready, your cavalry may play WarCry cards as if they were combat tactics.</p>',
		releases: {
			SD: 102
		},
		faq: [124]
	},
	{
		id: 'SD103',
		name: "Von Boen's Steel Dragon",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>This unit may not have attachments.</p><p><b>Combat Tactic</b> Discard 1 card: This unit gets +1 strength and "<b>Terror</b>: 1". You may play this tactic any number of times.</p>',
		releases: {
			SD: 103
		},
		faq: [268]
	},
	{
		id: 'SD104',
		name: "Fandelhoch's Crossbowmen",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Support Tactic</b>: Your unit gets +1 strength vs. cavalry units.</p>',
		releases: {
			SD: 104
		},
		faq: []
	},
	{
		id: 'HF99',
		name: "Fandelhoch's Halberdiers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Chaos units.</p>',
		releases: {
			SD: 105,
			HF: 99
		},
		faq: []
	},
	{
		id: 'SD106',
		name: "Fandelhoch's Hellblaster",
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support WarCry</b>: Your unit gets +2 strength. Only playable while your enemy has another copy of the unit that is in this combat.</p>',
		releases: {
			SD: 106
		},
		faq: []
	},
	{
		id: 'SD107',
		name: "Helborg's Knights",
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Discard 1 card: Choose 1 enemy unit with strength equal to or less than the die on the discarded card. If you win this combat, commit the chosen unit.</p>',
		releases: {
			SD: 107
		},
		faq: [4, 95]
	},
	{
		id: 'SD108',
		name: "Kobernecht's Crossbowmen",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 3</p><p><b>Support Tactic</b> Commit: Your unit gets +2 ranged attack.</p>',
		releases: {
			SD: 108
		},
		faq: []
	},
	{
		id: 'SD109',
		name: "Kobernecht's Pistoliers",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +2 strength if it passes a leadership test.</p>',
		releases: {
			SD: 109
		},
		faq: []
	},
	{
		id: 'SD110',
		name: "Von Trapp's Mortars",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Long Ranged Attack</b>: 6</p><p><b>Support WarCry</b>: All units in this combat get -2 tactic points.</p>',
		releases: {
			SD: 110
		},
		faq: [168]
	},
	{
		id: 'SD111',
		name: 'The Sollen Runefang',
		cost: 2,
		unique: true,
		keywords: ['Empire', 'Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>This unit gets "<b>Terror</b> :1".</p><p><b>Combat Tactic</b>: Commit the enemy unit unless it passes a leadership test.</p><p>This card may only be attached to an Empire unit.</p>',
		releases: {
			SD: 111
		},
		faq: [74]
	},
	{
		id: 'SD112',
		name: 'Evanshol, Prince of Tiranoc',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After your enemy plays a combat tactic card from their hand, the enemy unit gets -1 strength.</p>',
		releases: {
			SD: 112
		},
		faq: []
	},
	{
		id: 'SD113',
		name: 'Tyrion, Defender of Ulthuan',
		cost: 7,
		strength: 6,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After this unit is defeated in combat, return it to the battle line committed. Your enemy may make a follow-up attack.</p>',
		releases: {
			SD: 113
		},
		faq: [219, 220, 221, 144, 117, 60]
	},
	{
		id: 'SD114',
		name: 'Archers of the Shining Sun',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While this unit is ready, all units have their "<b>Scout</b>" level reduced to 1.</p><p><b>Ranged Attack</b>: 3</p><p><b>Combat Tactic</b>: This unit gets +3 ranged attack vs. units in the reserves.</p>',
		releases: {
			SD: 114
		},
		faq: []
	},
	{
		id: 'SD115',
		name: 'Dragon Princes',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 tactic point for each of your ready cavalry units.</p>',
		releases: {
			SD: 115
		},
		faq: []
	},
	{
		id: 'SD116',
		name: 'Phoenix Guard of Ulthuan',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After you muster this unit add 1 card from your army discard pile to your hand.</p><p><b>Combat Tactic</b>: This unit gets a leadership bonus equal to the enemy unit's printed tactic points.</p>",
		releases: {
			SD: 116
		},
		faq: []
	},
	{
		id: 'WA370',
		name: 'Rhyian Dawnrider',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): Your unit gets +2 ranged attack.</p>',
		releases: {
			SD: 117,
			WA: 370
		},
		faq: []
	},
	{
		id: 'WA373',
		name: "Tyrion's Silver Riders",
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may block flyers.</p><p><b>Reaction</b>: After setup, play 1 strategy card.</p>',
		releases: {
			SD: 118,
			WA: 373
		},
		faq: [26]
	},
	{
		id: 'SD119',
		name: "Tyrion's Ulthuan Defenders",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and +1 leadership vs. Dark Elf units.</p>',
		releases: {
			SD: 119
		},
		faq: []
	},
	{
		id: 'SD120',
		name: 'The Bow of the Seafarer',
		cost: 2,
		unique: true,
		keywords: ['High Elf', 'Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): This unit gets +2 ranged attack. If you win this combat, destroy the enemy unit.</p><p>This card may only be attached to a High Elf unit.</p>',
		releases: {
			SD: 120
		},
		faq: [66]
	},
	{
		id: 'WA15',
		name: 'Herd of Skulkkoth',
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>Your enemy may not make a follow-up attack after routing this unit.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your other copies of this unit.</p>',
		releases: {
			DW: 1,
			WA: 15
		},
		faq: []
	},
	{
		id: 'DW2',
		name: 'Khazrak the One-Eye',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b>: Exchange this unit with one of your other ready Beastmen units. That unit gets +2 strength.</p>',
		releases: {
			DW: 2
		},
		faq: [257, 258, 260, 261]
	},
	{
		id: 'DW3',
		name: "Raaghra's Bestigors",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready, tactic cards cost your Beastmen units 1 less tactic point to play.</p><p><b>WarCry</b>: This unit gets +3 strength. Only usable if you have more committed units in your battle line than your enemy.</p>',
		releases: {
			DW: 3
		},
		faq: []
	},
	{
		id: 'DW4',
		name: "Raaghra's Tuskgor Chariot",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Beastmen', 'Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have another ready Beastmen unit.</p>',
		releases: {
			DW: 4
		},
		faq: []
	},
	{
		id: 'WA22',
		name: 'Skulkkoth the Defiler',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (1): Raise this unit's strength to equal the enemy unit's strength.</p>",
		releases: {
			DW: 5,
			WA: 22
		},
		faq: []
	},
	{
		id: 'WA29',
		name: 'Raaghra the Culler',
		cost: 1,
		unique: true,
		keywords: ['Beastmen', 'Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and "<b>Terror</b>: 1".</p>',
		releases: {
			DW: 6,
			WA: 29
		},
		faq: [268]
	},
	{
		id: 'WA31',
		name: 'Black Rose Coven',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit is destroyed in combat, each enemy unit gets 1 "<b>Victory</b>: -1" token.</p>',
		releases: {
			DW: 7,
			WA: 31
		},
		faq: [225, 58]
	},
	{
		id: 'DW8',
		name: 'Eldire',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Support Tactic</b> Discard 1 card with a spell point cost: Your unit gets a strength bonus equal to the spell point cost of the discarded card.</p>',
		releases: {
			DW: 8
		},
		faq: [103]
	},
	{
		id: 'WA51',
		name: "Sa'har's Ashen Wraiths",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: Commit the defending unit unless it passes a strength test.</p>',
		releases: {
			DW: 9,
			WA: 51
		},
		faq: [270, 74]
	},
	{
		id: 'DW10',
		name: 'Shadowblade',
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Destroy 1 enemy character attachment.</p><p><b>Reaction</b>: After you declare an attack with this unit, choose an enemy unit with a character attachment. You attack this unit. This attack may not be blocked.</p>',
		releases: {
			DW: 10
		},
		faq: []
	},
	{
		id: 'WA58',
		name: 'Zelekendel, Blade of Khaine',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 3</p><p>While this unit is ready in the battle line, your enemy must discard 1 card to block.</p>',
		releases: {
			DW: 11,
			WA: 58
		},
		faq: [23, 256]
	},
	{
		id: 'WA59',
		name: "Zelekendel's Blackblades",
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Remove the top card of your enemy's action deck from the game. This unit gets a strength bonus equal to the die on that card.</p>",
		releases: {
			DW: 12,
			WA: 59
		},
		faq: []
	},
	{
		id: 'WA69',
		name: 'Jezzi Poisonbite',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 1</p><p>While attacking from the battle line this unit attacks as a flyer.</p><p><b>Combat Tactic</b>: this unit gets +2 strength vs. infantry units.</p>',
		releases: {
			DW: 13,
			WA: 69
		},
		faq: [25]
	},
	{
		id: 'DW14',
		name: "Jezzi's Ambush Gang",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p>Enemy units may not play WarCry cards or abilities while in combat with this unit.</p>',
		releases: {
			DW: 14
		},
		faq: [118]
	},
	{
		id: 'DW15',
		name: "Jezzi's Git Mob",
		cost: 5,
		strength: 6,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>After this unit enters combat with a unit with "<b>Terror</b>", commit this unit.</p>',
		releases: {
			DW: 15
		},
		faq: [175]
	},
	{
		id: 'DW16',
		name: "Jezzi's Poison Herders",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units is destroyed, move 1 of your reserve units into the battle line.</p>',
		releases: {
			DW: 16
		},
		faq: [218, 224]
	},
	{
		id: 'DW17',
		name: "Jezzi's Poison Riders",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may block flyers.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. flyer units.</p>',
		releases: {
			DW: 17
		},
		faq: [26]
	},
	{
		id: 'DW18',
		name: "Jezzi's Stingers",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 8</p>',
		releases: {
			DW: 18
		},
		faq: []
	},
	{
		id: 'DW19',
		name: "Skcub's Tempest Vermin",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Discard 1 card: This unit gets a strength bonus equal to the tactic points cost of the discarded card.</p>',
		releases: {
			DW: 19
		},
		faq: [95]
	},
	{
		id: 'DW20',
		name: 'Ogres of the Chaos Wastes',
		cost: 6,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Destroy 1 of your other ready units: After this unit loses a combat, instead of destroying this unit, return it to your battle line ready.</p>',
		releases: {
			DW: 20
		},
		faq: [60]
	},
	{
		id: 'WA93',
		name: 'The Hordes of Darkness',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable while you have at least one Chaos unit, one Dark Elf unit and one Orc unit.</p>',
		releases: {
			DW: 21,
			WA: 93
		},
		faq: []
	},
	{
		id: 'DW22',
		name: "Al'Muktar's Desert Dogs",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If you lose this combat remove this unit from the game.</p>',
		releases: {
			DW: 22
		},
		faq: []
	},
	{
		id: 'DW23',
		name: "Badenov's Mercenaries",
		cost: 5,
		strength: 'X',
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit has a strength equal to the number of Dogs of War units you have in play.</p>',
		releases: {
			DW: 23
		},
		faq: [121]
	},
	{
		id: 'DW24',
		name: "Beorg's Bearmen",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. cavalry</p>',
		releases: {
			DW: 24
		},
		faq: []
	},
	{
		id: 'WA96',
		name: 'Black Fire Bandits',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After this unit wins a combat, put a gold token on it.</p><p><b>Reaction</b> Discard 1 gold token from this unit: Before you muster a unit, reduce it's gold cost by 1 gold.</p>",
		releases: {
			DW: 25,
			WA: 96
		},
		faq: [4, 100]
	},
	{
		id: 'DW26',
		name: "Braganza's Besiegers",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 2,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Command</b>: Destroy 1 enemy strategy card.</p>',
		releases: {
			DW: 26
		},
		faq: []
	},
	{
		id: 'WA97',
		name: "Carmen's Maiden Knights",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After this unit wins a non-ranged attack vs. a unit with a gold cost 3 or less, rout that unit.</p><p><b>Combat Tactic</b>: Play a WarCry printed on the enemy unit or any of its attachments.</p>',
		releases: {
			DW: 27,
			WA: 97
		},
		faq: [97, 82]
	},
	{
		id: 'WA98',
		name: "Karkov's Winged Lancers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After an enemy plays a card or ability that commits 1 or more of your units, rally those units.</p>',
		releases: {
			DW: 28,
			WA: 98
		},
		faq: [158]
	},
	{
		id: 'DW29',
		name: 'Leonus the Beastmaster',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. This unit may not make a follow-up attack.</p>',
		releases: {
			DW: 29
		},
		faq: []
	},
	{
		id: 'DW30',
		name: "Leopold's Leopard Company",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit may block cavalry.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. cavalry units.</p>',
		releases: {
			DW: 30
		},
		faq: [26]
	},
	{
		id: 'DW31',
		name: "Pasha's Caravan Guards",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Rally this unit. You may play this ability while committed.</p>',
		releases: {
			DW: 31
		},
		faq: []
	},
	{
		id: 'WA99',
		name: "Sengupta's Cobra Cult",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: The enemy unit gets a -1 strength token.</p>',
		releases: {
			DW: 32,
			WA: 99
		},
		faq: []
	},
	{
		id: 'WA100',
		name: 'The Crowmaster',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p>Spel <b>Support Tactic</b> (1): Your unit gets +2 ranged attack.</p>',
		releases: {
			DW: 33,
			WA: 100
		},
		faq: []
	},
	{
		id: 'DW34',
		name: "Ugugh's Mountain Men",
		cost: 4,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Victory</b>: -2</p><p><b>Combat Tactic</b>: Reveal the top card of your enemy's action deck.</p>",
		releases: {
			DW: 34
		},
		faq: []
	},
	{
		id: 'DW35',
		name: "Vespero's Vendetta",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>When this unit comes into play choose 1 army keyword.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. units with the chosen army keyword.</p>',
		releases: {
			DW: 35
		},
		faq: [127]
	},
	{
		id: 'DW36',
		name: 'A Better Offer',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Discard X cards: Rally 1 Dogs of War unit with a gold cost equal to or less than X.</p>',
		releases: {
			DW: 36
		},
		faq: [97, 121]
	},
	{
		id: 'DW37',
		name: 'A Good Offer',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Commit 1 Dogs of War unit unless your enemy discards 3 cards.</p>',
		releases: {
			DW: 37
		},
		faq: [121]
	},
	{
		id: 'DW38',
		name: 'Ambush',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Remove up to 2 action cards in any discard pile from the game.</p>',
		releases: {
			DW: 38
		},
		faq: []
	},
	{
		id: 'DW39',
		name: 'Armed to the Teeth',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 tactic point for each of it's attachments.</p>",
		releases: {
			DW: 39
		},
		faq: []
	},
	{
		id: 'DW40',
		name: 'Ashes to Ashes',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After you destroy an enemy unit, remove that unit from the game.</p>',
		releases: {
			DW: 40
		},
		faq: []
	},
	{
		id: 'WA126',
		name: 'Contingency Plan',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you fail a rout check, 1 of your units gets 2 "<b>Victory</b>: +1" tokens.</p>',
		releases: {
			DW: 41,
			WA: 126
		},
		faq: []
	},
	{
		id: 'DW42',
		name: 'Crush the Line',
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. At the end of combat, instead of putting this card into your discard pile, return it to your hand.</p>',
		releases: {
			DW: 42
		},
		faq: []
	},
	{
		id: 'DW43',
		name: 'Cry Havoc',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. This unit gets an additional +2 strength for each copy of this card already played this combat.</p>',
		releases: {
			DW: 43
		},
		faq: []
	},
	{
		id: 'WA144',
		name: 'Enervation',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After a unit gets a strength bonus of 3 or greater, reduce that bonus to 2.</p>',
		releases: {
			DW: 44,
			WA: 144
		},
		faq: [39, 44, 233]
	},
	{
		id: 'DW45',
		name: 'Exploited Weakness',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. Only playable if Probing Attack has been played this combat.</p>',
		releases: {
			DW: 45
		},
		faq: [57]
	},
	{
		id: 'WA147',
		name: 'Fading Winds',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After your enemy plays a spell card or ability, cancel it unless your enemy pays an additional 3 spell points.</p>',
		releases: {
			DW: 46,
			WA: 147
		},
		faq: []
	},
	{
		id: 'DW47',
		name: 'False Orders',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Play a support tactic printed on 1 enemy unit paying no costs.</p>',
		releases: {
			DW: 47
		},
		faq: [92, 81, 85]
	},
	{
		id: 'WA151',
		name: 'Feint',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your unit gets +1 strength. Your enemy may not play support tactics.</p>',
		releases: {
			DW: 48,
			WA: 151
		},
		faq: []
	},
	{
		id: 'DW49',
		name: 'Final Blow',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +4 strength. You may not play any more combat tactics this combat.</p>',
		releases: {
			DW: 49
		},
		faq: []
	},
	{
		id: 'DW50',
		name: 'Good Timing',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Choose a number. Your enemy rolls. If the roll matches the number you chose, this unit gets +3 strength.</p>',
		releases: {
			DW: 50
		},
		faq: []
	},
	{
		id: 'DW51',
		name: 'Hamstring',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength. Your enemy's combat tactic cards cost 1 additional tactic point.</p>",
		releases: {
			DW: 51
		},
		faq: [105]
	},
	{
		id: 'DW52',
		name: 'Hatred',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and "<b>Terror</b>: 1".</p>',
		releases: {
			DW: 52
		},
		faq: [268]
	},
	{
		id: 'DW53',
		name: 'Hidden Support',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each of your committed units with a support tactic ability.</p>',
		releases: {
			DW: 53
		},
		faq: []
	},
	{
		id: 'WA177',
		name: 'Inner Strength',
		cost: 1,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): This unit may play WarCry cards as combat tactics.</p>',
		releases: {
			DW: 54,
			WA: 177
		},
		faq: [124]
	},
	{
		id: 'WA182',
		name: 'Leittdorf Maneuver',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Play a support tactic printed on this unit paying all costs.</p>',
		releases: {
			DW: 55,
			WA: 182
		},
		faq: []
	},
	{
		id: 'WA183',
		name: "Leitdorf's Plan",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your enemy plays a support tactic printed on a unit, commit that unit unless it passes a leadership test.</p>',
		releases: {
			DW: 56,
			WA: 183
		},
		faq: []
	},
	{
		id: 'DW57',
		name: 'Lure of Iron',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: "<p><b>Spell Command</b> (2): Remove all attachments in the enemy's discard pile from the game.</p>",
		releases: {
			DW: 57
		},
		faq: []
	},
	{
		id: 'DW58',
		name: 'Martyrs',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If you lose this combat, commit the enemy unit unless it passes a leadership test.</p>',
		releases: {
			DW: 58
		},
		faq: [174]
	},
	{
		id: 'DW59',
		name: 'Overrun',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Discard X cards: If you win this combat, rout the enemy unit if it has printed gold cost of X or less.</p>',
		releases: {
			DW: 59
		},
		faq: [195, 95, 145, 148]
	},
	{
		id: 'DW60',
		name: 'Passing the Torch',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Move any number of attachments from this unit to 1 of your ready units.</p>',
		releases: {
			DW: 60
		},
		faq: [54, 18]
	},
	{
		id: 'DW61',
		name: 'Pillage',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: If you win this combat, remove the top 3 cards of your enemy's action deck from the game.</p>",
		releases: {
			DW: 61
		},
		faq: [4]
	},
	{
		id: 'DW62',
		name: 'Practiced Maneuver',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Your enemy may not play cards or abilities that force you to discard cards.</p>',
		releases: {
			DW: 62
		},
		faq: [160]
	},
	{
		id: 'DW63',
		name: 'Probing Attack',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength.</p>',
		releases: {
			DW: 63
		},
		faq: [57]
	},
	{
		id: 'WA220',
		name: 'Raise the Dead',
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Spell WarCry</b> (3): Remove 1 unit in your discard pile from the game. This unit gets a strength bonus equal to the removed unit's strength.</p>",
		releases: {
			DW: 64,
			WA: 220
		},
		faq: []
	},
	{
		id: 'WA221',
		name: 'Rallying Cry',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If you win this combat by 4 or more strength, return this unit to the battle line ready. You may not make a follow-up attack.</p>',
		releases: {
			DW: 65,
			WA: 221
		},
		faq: [60, 249]
	},
	{
		id: 'WA222',
		name: 'Reap the Rewards',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b>: If you win this combat, put a "<b>Victory</b>: +1" token on your unit.</p><p><b>Support Tactic</b>: Put 2 "<b>Victory</b>: +1" tokens on your Dogs of War unit.</p>',
		releases: {
			DW: 66,
			WA: 222
		},
		faq: [4, 121]
	},
	{
		id: 'DW67',
		name: 'Reap What You Sow',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (1): The player with the most cards in their hand discards 2 cards.</p>',
		releases: {
			DW: 67
		},
		faq: []
	},
	{
		id: 'DW68',
		name: 'Recruiting Drive',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Place 1 unit from your army discard pile on top of your deck.</p>',
		releases: {
			DW: 68
		},
		faq: []
	},
	{
		id: 'WA228',
		name: 'Renewal of Power',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Remove all tokens in play from the game.</p>',
		releases: {
			DW: 69,
			WA: 228
		},
		faq: []
	},
	{
		id: 'DW70',
		name: 'Returned Power',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability that forces you to discard 1 or more cards, move 1 action card from your discard pile into your hand.</p>',
		releases: {
			DW: 70
		},
		faq: [125, 252]
	},
	{
		id: 'DW71',
		name: "Saerith's Gambit",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +3 strength unless the enemy unit passes a leadership test.</p>',
		releases: {
			DW: 71
		},
		faq: []
	},
	{
		id: 'DW72',
		name: 'Salt the Earth',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: At the end of the tactics phase, remove all tactics played this combat from the game.</p>',
		releases: {
			DW: 72
		},
		faq: []
	},
	{
		id: 'WA239',
		name: 'Show of Force',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets "<b>Terror</b>" equal to the number of ready units in your battle line.</p>',
		releases: {
			DW: 73,
			WA: 239
		},
		faq: [268]
	},
	{
		id: 'DW74',
		name: 'Skirmish Combat',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +2 strength.</p>',
		releases: {
			DW: 74
		},
		faq: []
	},
	{
		id: 'DW75',
		name: 'Stand and Shoot',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 ranged attack. Only playable while this unit is in the battle line.</p>',
		releases: {
			DW: 75
		},
		faq: []
	},
	{
		id: 'DW76',
		name: 'Steady Advance',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Play 1 strategy card.</p>',
		releases: {
			DW: 76
		},
		faq: []
	},
	{
		id: 'DW77',
		name: 'Stockpile',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability which forces you to discard 1 or more cards, place 1 token on this card.</p><p><b>Support Tactic</b> Destroy this card: Draw 1 card for each token on this card.</p>',
		releases: {
			DW: 77
		},
		faq: [125, 252]
	},
	{
		id: 'DW78',
		name: 'Strategic Planning',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Move 1 action card from your discard pile to the top of your deck.</p>',
		releases: {
			DW: 78
		},
		faq: []
	},
	{
		id: 'DW79',
		name: 'Strength of Conservation',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): At the end of the tactics phase, this unit gets +1 strength for each card in your hand.</p>',
		releases: {
			DW: 79
		},
		faq: []
	},
	{
		id: 'DW80',
		name: 'Strength of Leadership',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you make a combat roll, reroll. Only playable if your unit in combat has a character attachment.</p>',
		releases: {
			DW: 80
		},
		faq: [138]
	},
	{
		id: 'DW81',
		name: 'Strength of Opposition',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Spell WarCry</b> (1): At the end of the tactics phase, this unit gets +1 strength for each card in your enemy's hand.</p>",
		releases: {
			DW: 81
		},
		faq: []
	},
	{
		id: 'DW82',
		name: 'Suicidal Charge',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +5 strength. Destroy this unit at the end of the combat.</p>',
		releases: {
			DW: 82
		},
		faq: []
	},
	{
		id: 'DW83',
		name: 'Summon the Storm',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>Units may not declare ranged attacks.</p><p><b>Command</b> Commit 1 of your units: Destroy this card. Any player may play this ability.</p>',
		releases: {
			DW: 83
		},
		faq: []
	},
	{
		id: 'DW84',
		name: 'Taking the Initiative',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After setup, if you have more tactic points in your battle line than your enemy, you take the first command during the battle.</p>',
		releases: {
			DW: 84
		},
		faq: []
	},
	{
		id: 'DW85',
		name: 'Thunderous Charge',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable while you have fewer cards in your hand than your enemy.</p>',
		releases: {
			DW: 85
		},
		faq: []
	},
	{
		id: 'DW86',
		name: 'Trample',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +3 strength vs. infantry.</p>',
		releases: {
			DW: 86
		},
		faq: []
	},
	{
		id: 'WA268',
		name: 'Triumphant Celebration',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: If you win this combat this unit gets 2 "<b>Victory</b>: +1" tokens.</p>',
		releases: {
			DW: 87,
			WA: 268
		},
		faq: [4]
	},
	{
		id: 'DW88',
		name: 'Underestimated Strength',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength if it passes a tactic point test.</p>',
		releases: {
			DW: 88
		},
		faq: [169, 270]
	},
	{
		id: 'DW89',
		name: 'Unexpected Quarter',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you declare an attack, your enemy may not draw any cards in the resulting combat. Only playable if you have a ready Dogs of War unit.</p>',
		releases: {
			DW: 89
		},
		faq: [194, 121, 293]
	},
	{
		id: 'DW90',
		name: 'Unfinished Business',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if this unit has a character attachment.</p>',
		releases: {
			DW: 90
		},
		faq: []
	},
	{
		id: 'DW91',
		name: 'Upset Balance',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if the enemy unit has a support tactic ability.</p>',
		releases: {
			DW: 91
		},
		faq: []
	},
	{
		id: 'DW92',
		name: 'Weakening Clouds',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell WarCry</b> (1): Any strength bonuses the enemy unit receives from combat tactics are reduced by 1, minimum 0.</p>',
		releases: {
			DW: 92
		},
		faq: [250, 171, 44]
	},
	{
		id: 'DW93',
		name: 'Wisdom of the Ages',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Spell Combat Tactic</b> (1): Look at the top 3 cards of your enemy's action deck and replace them in any order.</p>",
		releases: {
			DW: 93
		},
		faq: [112]
	},
	{
		id: 'DW94',
		name: 'Bloodfire Scythe',
		cost: 1,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: Reduce the enemy unit's strength to half of it's current strength, rounding down.</p>",
		releases: {
			DW: 94
		},
		faq: []
	},
	{
		id: 'DW95',
		name: 'Glorious Standard',
		cost: 2,
		unique: true,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b>: Your unit gets +2 strength and +2 leadership. If you lose this combat, commit this unit.</p>',
		releases: {
			DW: 95
		},
		faq: []
	},
	{
		id: 'DW96',
		name: 'Hellbrandt Grimm',
		cost: 1,
		unique: true,
		keywords: ['Dogs of War', 'Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Commit 1 of your units: This unit gets a strength bonus equal to the committed units gold cost.</p>',
		releases: {
			DW: 96
		},
		faq: [95, 97]
	},
	{
		id: 'DW97',
		name: 'Master Kwoh',
		cost: 1,
		unique: true,
		keywords: ['Dogs of War', 'Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p>While this unit is in combat, your tactic cards cost 1 less spell point.</p>',
		releases: {
			DW: 97
		},
		faq: []
	},
	{
		id: 'WA291',
		name: 'Steelheart Shield',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>Any strength bonuses the enemy unit receives from tactics are reduced by 1</p>',
		releases: {
			DW: 98,
			WA: 291
		},
		faq: [34, 35, 36, 39, 41, 44]
	},
	{
		id: 'DW99',
		name: 'The Jewels of Vaerkylla',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit is committed by an enemy card or ability, destroy this attachment and rally this unit.</p>',
		releases: {
			DW: 99
		},
		faq: []
	},
	{
		id: 'DW100',
		name: "Taber's Harlequins",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready in your battle line, your Bretonnian units get +1 leadership.</p><p><b>Support Tactic</b> Discard 1 card: Your unit gets +2 tactic points.</p>',
		releases: {
			DW: 100
		},
		faq: [23]
	},
	{
		id: 'DW101',
		name: 'High King Thorgrim',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b> Discard your hand: This unit gets +4 strength.</p><p><b>Support WarCry</b>: Your Dwarf unit gets +2 strength. Only usable while your unit is losing the combat.</p>',
		releases: {
			DW: 101
		},
		faq: [197]
	},
	{
		id: 'DW102',
		name: "Karfin's Hammer Lords",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Destroy the enemy unit unless your enemy discards 2 cards.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. infantry units.</p>',
		releases: {
			DW: 102
		},
		faq: []
	},
	{
		id: 'DW103',
		name: "Karfin's Ironguard",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Destroy 1 attachment on the enemy unit. This unit gets 1 "<b>Victory</b>: +1" token.</p>',
		releases: {
			DW: 103
		},
		faq: []
	},
	{
		id: 'DW104',
		name: "Thorgrim's Grim-Axes",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength if it passes a leadership test.</p>',
		releases: {
			DW: 104
		},
		faq: []
	},
	{
		id: 'WA317',
		name: "Thorgrim's Steel Hammers",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b>: Play the combat tactic on 1 of this unit's attachments paying all costs.</p>",
		releases: {
			DW: 105,
			WA: 317
		},
		faq: []
	},
	{
		id: 'DW106',
		name: "Varamir's Forest Walkers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p>While this unit is in combat, your enemy may not play combat tactic cards with a tactic point cost greater than 2.</p>',
		releases: {
			DW: 106
		},
		faq: []
	},
	{
		id: 'WA322',
		name: 'Snorri Nosebiter',
		cost: 1,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: "<p>This unit may have any number of character attachments.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of it's character attachments.</p>",
		releases: {
			DW: 107,
			WA: 322
		},
		faq: [176, 177]
	},
	{
		id: 'DW108',
		name: 'Blades of Ostland',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +1 strength for each card in your hand. The enemy unit may commit to negate the effects of this ability.</p>',
		releases: {
			DW: 108
		},
		faq: []
	},
	{
		id: 'DW109',
		name: 'Halberdiers of Ostland',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength vs. cavalry units.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. Chaos units.</p>',
		releases: {
			DW: 109
		},
		faq: []
	},
	{
		id: 'DW110',
		name: "Hearthfoot's Scouts",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Halfling', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +4 strength vs. "Unique" units.</p>',
		releases: {
			DW: 110
		},
		faq: []
	},
	{
		id: 'DW111',
		name: 'Spearmen of Ostland',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may block cavalry.</p>',
		releases: {
			DW: 111
		},
		faq: [26]
	},
	{
		id: 'DW112',
		name: 'Valmir von Raukov',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready, all of your infantry units gets +1 tactic point.</p><p><b>Combat Tactic</b>: Play the support tactic on 1 of your committed units. Destroy that unit.</p>',
		releases: {
			DW: 112
		},
		faq: []
	},
	{
		id: 'DW113',
		name: 'Valten',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>This unit gets "<b>Victory</b>: +1" for each of your other Empire units.</p><p><b>Reaction</b>: After you muster this unit, search your deck for an Empire unit. Add that unit to your hand.</p>',
		releases: {
			DW: 113
		},
		faq: [115]
	},
	{
		id: 'WA355',
		name: "Alith's Ghost Bows",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +d6 ranged attack. Remove the card you rolled from the game.</p>',
		releases: {
			DW: 114,
			WA: 355
		},
		faq: []
	},
	{
		id: 'DW115',
		name: "Alith's Shadow Warriors",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 3</p><p><b>Combat Tactic</b>: Your enemy discards 1 random card.</p>',
		releases: {
			DW: 115
		},
		faq: []
	},
	{
		id: 'DW116',
		name: "Alith's Shadowed Steeds",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Terror</b>: 2" while attacking.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. Dark Elf units.</p>',
		releases: {
			DW: 116
		},
		faq: [142]
	},
	{
		id: 'DW117',
		name: "Belannaer's Swordbrethren",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Reaction</b>: After a spell combat tactic is played, this unit gets +2 strength.</p>',
		releases: {
			DW: 117
		},
		faq: []
	},
	{
		id: 'DW118',
		name: 'Eltharion',
		cost: 5,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Discard 1 random card from your hand. If that card was a playable combat tactic, play it paying no costs. You may play this ability any number of times.</p>',
		releases: {
			DW: 118
		},
		faq: [92, 68]
	},
	{
		id: 'DW119',
		name: 'The Shadow King',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>All High Elf units in your battle line get "<b>Scout</b>: 1."</p><p><b>Support Tactic</b>: Your High Elf unit gets "<b>Terror</b>: 1".</p>',
		releases: {
			DW: 119
		},
		faq: [268]
	},
	{
		id: 'WA386',
		name: 'The Grand Alliance',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable while you have at least one Empire unit, one High Elf unit, and one Dwarf unit.</p>',
		releases: {
			DW: 120,
			WA: 386
		},
		faq: []
	},
	{
		id: 'PG1',
		name: "Ni'nnanuam the Afflicted",
		cost: 6,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p>While this unit is in combat, reduce any strength bonus the enemy unit receives to 1.</p>',
		releases: {
			PG: 1
		},
		faq: [39, 41, 171, 44]
	},
	{
		id: 'WA4',
		name: 'Bilerot Plagueflesh',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: After one of your units is destroyed, this unit gets a -1 strength plague token.</p><p><b>Spell WarCry</b> (2): Move all -1 strength plague tokens from this unit to the enemy unit.</p>',
		releases: {
			PG: 2,
			WA: 4
		},
		faq: []
	},
	{
		id: 'PG3',
		name: "Bileth's Marauders",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit attacks as a flyer.</p>',
		releases: {
			PG: 3
		},
		faq: []
	},
	{
		id: 'PG4',
		name: "Festerheart's Plagueswords",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: The enemy unit gets -2 strength unless they pass a leadership test.</p>',
		releases: {
			PG: 4
		},
		faq: []
	},
	{
		id: 'WA12',
		name: 'Feytor',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 2</p><p><b>WarCry</b>: Your enemy may discard 3 cards. If they do not the enemy gets -3 tactic points.</p>',
		releases: {
			PG: 5,
			WA: 12
		},
		faq: [168]
	},
	{
		id: 'WA13',
		name: 'Gibbering Hordes',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Both units in combat get a -1 strength plague token. You may play this ability twice per combat.</p>',
		releases: {
			PG: 6,
			WA: 13
		},
		faq: []
	},
	{
		id: 'PG7',
		name: 'Maggotkin',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>:If you win this combat and the enemy's strength is 1 or less, that unit is routed.</p>",
		releases: {
			PG: 7
		},
		faq: [195, 145, 148]
	},
	{
		id: 'PG8',
		name: 'Tallymen of Plagues',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: The enemy unit gets -2 strength. Only playable if one of your units has a standard attachment.</p>',
		releases: {
			PG: 8
		},
		faq: []
	},
	{
		id: 'PG9',
		name: "Sa'har's Ashen Raiders",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Combat Tactic</b> Commit: This unit gets +3 strength.</p>',
		releases: {
			PG: 9
		},
		faq: []
	},
	{
		id: 'PG10',
		name: "Morbeth's Corsairs",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -2 tactic points.</p><p>Only playable if you have a ready Chaos unit.</p>',
		releases: {
			PG: 10
		},
		faq: [168]
	},
	{
		id: 'PG11',
		name: "Morbeth's Dread Knights",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your Dark Elf Cavalry unit gets +3 strength. Only usable vs. non-flyer units.</p>',
		releases: {
			PG: 11
		},
		faq: []
	},
	{
		id: 'WA48',
		name: "Morbeth's Hellblades",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: At the end of the tactic phase, if your enemy has 5 or more cards in their hand, your unit gains +2 strength.</p>',
		releases: {
			PG: 12,
			WA: 48
		},
		faq: []
	},
	{
		id: 'WA50',
		name: "Rikhaine's Black Legion",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: If the enemy unit's strength is equal to or less than this unit's strength when the combat ends, the result is a slaughter.</p>",
		releases: {
			PG: 13,
			WA: 50
		},
		faq: [59]
	},
	{
		id: 'PG14',
		name: "T'aelira Morbeth",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell WarCry</b> (1): Exchange one unit in the enemy battle line with one unit in the enemy reserves.</p>',
		releases: {
			PG: 14
		},
		faq: []
	},
	{
		id: 'PG15',
		name: "Gorgut's Ladz",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit routs an enemy unit, make a tactic point test. If successful you may choose the target of your follow-up attack.</p>',
		releases: {
			PG: 15
		},
		faq: []
	},
	{
		id: 'PG16',
		name: "Moggit's Savage Wazboyz",
		cost: 5,
		strength: 6,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready, your other units get -1 strength.</p>',
		releases: {
			PG: 16
		},
		faq: []
	},
	{
		id: 'PG17',
		name: 'Kaltorg Skinripper',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell WarCry</b> (1): This unit gets +3 strength. Only playable while this unit is losing a combat.</p>',
		releases: {
			PG: 17
		},
		faq: [197]
	},
	{
		id: 'PG18',
		name: 'Pigstikkas',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if you have a ready Chaos unit.</p>',
		releases: {
			PG: 18
		},
		faq: []
	},
	{
		id: 'WA82',
		name: "Rotfang's Brawlerz",
		cost: 4,
		strength: 5,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -2</p>',
		releases: {
			PG: 19,
			WA: 82
		},
		faq: []
	},
	{
		id: 'PG20',
		name: "Skraggi's Wolf Riders",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Reaction</b>: After the end of the muster phase, destroy this unit and replace it with a unit from your discard pile with a gold cost of 4 or less.</p>',
		releases: {
			PG: 20
		},
		faq: [97]
	},
	{
		id: 'PG21',
		name: "Skullgrinder's Pigkart",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b> Commit one of your Orc units. This unit gets a strength bonus equal to the committed unit's strength.</p>",
		releases: {
			PG: 21
		},
		faq: [95]
	},
	{
		id: 'PG22',
		name: "Wazzi's Night Raiderz",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength.Only playable while you have no cards in your hand.</p>',
		releases: {
			PG: 22
		},
		faq: []
	},
	{
		id: 'PG23',
		name: "Sniktnit's Warp Cannon",
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		unique: true,
		keywords: ['Skaven', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>Spell <b>Ranged Attack</b> (X): X+3</p><p><b>Reaction</b>: After this unit wins a combat, commit 1 enemy unit with a strength less than the amount you won by.</p>',
		releases: {
			PG: 23
		},
		faq: [203, 204, 96]
	},
	{
		id: 'PG24',
		name: 'Screaming Bell of Clan Skryre',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Skaven', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><p><b>Wizard</b>: 2</p><p><b>Support WarCry</b>: Roll.</p><p>1 or less: If you win this combat, rout the enemy unit.</p><p>2-4: Your unit gets +1 strength.</p><p>5+: Destroy your unit.</p></p>',
		releases: {
			PG: 24
		},
		faq: [195, 145, 148]
	},
	{
		id: 'PG25',
		name: 'Snikluk Fellpest',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Discard 1 card: The enemy unit gets -2 strength.</p>',
		releases: {
			PG: 25
		},
		faq: []
	},
	{
		id: 'PG26',
		name: 'Vermintide',
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may block infantry.</p><p><b>Reaction</b> Commit this unit: After you roll, change the roll to a 1.</p>',
		releases: {
			PG: 26
		},
		faq: []
	},
	{
		id: 'PG27',
		name: 'Giants of Albion',
		cost: 8,
		strength: 11,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dogs of War', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: -5</p><p>Your enemy may not target this unit with ranged attacks. During setup, you draw one less card.</p>',
		releases: {
			PG: 27
		},
		faq: []
	},
	{
		id: 'PG28',
		name: "Kreuger's Cursed Company",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p>This unit has it\'s strength, leadership and "<b>Terror</b>" reduced by the enemy unit\'s "<b>Faith</b>".</p>',
		releases: {
			PG: 28
		},
		faq: []
	},
	{
		id: 'PG29',
		name: 'A Taste of Their Own Tactics',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If this unit passes a tactic point test, play one WarCry or combat tactic printed on the enemy unit, without cost.</p>',
		releases: {
			PG: 29
		},
		faq: [169, 270]
	},
	{
		id: 'PG30',
		name: 'Arrows from the Hills',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b>: Your unit gets +2 ranged attack. If you win this combat, draw 1 card.</p>',
		releases: {
			PG: 30
		},
		faq: [4]
	},
	{
		id: 'WA108',
		name: 'Back Them Up',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b> Commit a unit in your battle line: This unit gets a strength bonus equal to the committed unit's strength and a tactic point bonus equal to the committed unit's tactic points. Your enemy may do the same.</p><p>If the loser of the combat committed a unit in this way, that unit is destroyed.</p>",
		releases: {
			PG: 31,
			WA: 108
		},
		faq: [95]
	},
	{
		id: 'PG32',
		name: 'Battlefield Spies',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Spell WarCry</b> (1): Look at your enemy's hand and choose one card. Your enemy discards that card.</p>",
		releases: {
			PG: 32
		},
		faq: []
	},
	{
		id: 'PG33',
		name: 'Bring Them to Us',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable during a follow-up attack by an enemy unit.</p><p><b>WarCry</b> Commit your unit: This combat ends and both units are returned to their battle lines committed. Only playable during a follow-up attack by an enemy unit.</p>',
		releases: {
			PG: 33
		},
		faq: [60]
	},
	{
		id: 'WA121',
		name: 'Chain Lightning',
		cost: 0,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (X): This unit gets +X strength. X may not exceed the number of your wizard units.</p>',
		releases: {
			PG: 34,
			WA: 121
		},
		faq: [95, 96, 149]
	},
	{
		id: 'PG35',
		name: 'Cunning Plan',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. You may immediately play another combat tactic or support tactic, paying all costs.</p>',
		releases: {
			PG: 35
		},
		faq: []
	},
	{
		id: 'WA141',
		name: 'Diversity of Arms',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +3 strength.Only playable while you have at least one Grand Alliance or Hordes Of Darkness unit and at least one neutral unit.</p>',
		releases: {
			PG: 36,
			WA: 141
		},
		faq: []
	},
	{
		id: 'PG37',
		name: 'Empowered Strike',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +3 strength. Only playable while you have as many spell points as your enemy.</p>',
		releases: {
			PG: 37
		},
		faq: [170]
	},
	{
		id: 'PG38',
		name: 'Everwatch Technique',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: Name a card, then look at your enemy's hand. If the named card is in their hand this unit gets +4 strength.</p>",
		releases: {
			PG: 38
		},
		faq: []
	},
	{
		id: 'PG39',
		name: 'Feed the Earth',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: <span class="errata">You may</span> destroy 1 enemy strategy card. <span class="errata">If you do,</span> draw 1 card.</p>',
		releases: {
			PG: 39
		},
		errata: true,
		faq: [180]
	},
	{
		id: 'PG40',
		name: 'Feint East, Strike West',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength unless your opponent discards 1 card.</p>',
		releases: {
			PG: 40
		},
		faq: []
	},
	{
		id: 'WA155',
		name: 'Fire as They Come',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to half of it's ranged attack (rounded down).</p>",
		releases: {
			PG: 41,
			WA: 155
		},
		faq: []
	},
	{
		id: 'WA157',
		name: 'Flanking Charge',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Commit one of your units not in the combat: Commit the enemy unit. Only playable during a ranged attack.</p>',
		releases: {
			PG: 42,
			WA: 157
		},
		faq: []
	},
	{
		id: 'PG43',
		name: 'For the Fallen!',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +5 strength. Only playable during a follow-up attack.</p>',
		releases: {
			PG: 43
		},
		faq: []
	},
	{
		id: 'PG44',
		name: 'Force the Skirmish',
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: Play during a ranged attack. Replace the attacking unit's ranged attack with it's strength. The loser of this combat is destroyed.</p>",
		releases: {
			PG: 44
		},
		faq: [205, 66]
	},
	{
		id: 'PG45',
		name: 'Forest Cover',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +2 strength. Only playable during a ranged attack.</p>',
		releases: {
			PG: 45
		},
		faq: []
	},
	{
		id: 'PG46',
		name: 'Frost Covered Hills',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Destroy this strategy card: After you make a rout check, add +2 to the roll.</p>',
		releases: {
			PG: 46
		},
		faq: []
	},
	{
		id: 'WA163',
		name: 'Glory Favors the Brave',
		die: 6,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you roll, if the card rolled is Glory Favors The Brave, you may add +2 or subtract -4 from the roll.</p>',
		releases: {
			PG: 47,
			VT: 26,
			WA: 163
		},
		faq: []
	},
	{
		id: 'PG48',
		name: "Gausser's Return",
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you fail a rout check, reroll. Only playable if this unit has a character attachment.</p>',
		releases: {
			PG: 48
		},
		faq: [138]
	},
	{
		id: 'PG49',
		name: "He's Mine",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +4 strength. Only playable vs. "Unique" units or units with a "Unique" character attachment.</p>',
		releases: {
			PG: 49
		},
		faq: []
	},
	{
		id: 'WA174',
		name: 'High Winds',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All cards have the "Flyer" keyword replaced with the "Infantry" keyword.</p>',
		releases: {
			PG: 50,
			WA: 174
		},
		faq: [254]
	},
	{
		id: 'WA179',
		name: 'Intervention',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (3): Name a card. Search your action deck and discard pile for all copies of the named card. Add one of them to your hand and remove all other copies from the game. Reshuffle your action deck.</p>',
		releases: {
			PG: 51,
			WA: 179
		},
		faq: [114]
	},
	{
		id: 'PG52',
		name: 'Into the Heart of the Enemy',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: If you win this combat, rout the enemy unit if this unit's current strength is at least double the enemy unit's printed strength.</p>",
		releases: {
			PG: 52
		},
		faq: [195, 178, 145, 148]
	},
	{
		id: 'PG53',
		name: 'Know the Terrain',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +2 tactic points and the enemy unit gets -2 tactic points. Only playable if you have a Terrain card in play.</p>',
		releases: {
			PG: 53
		},
		faq: [168]
	},
	{
		id: 'PG54',
		name: 'Last Ditch Effort',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Choose a number. If your enemy's combat roll equals the chosen number, change the roll to a 1.</p>",
		releases: {
			PG: 54
		},
		faq: [291]
	},
	{
		id: 'PG55',
		name: 'Let Them Come',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +3 strength. Only playable while defending.</p>',
		releases: {
			PG: 55
		},
		faq: []
	},
	{
		id: 'WA184',
		name: 'Level the Field',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Destroy all tokens on the enemy unit.</p>',
		releases: {
			PG: 56,
			WA: 184
		},
		faq: []
	},
	{
		id: 'WA186',
		name: 'Look Them in the Eyes',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -2 leadership.</p>',
		releases: {
			PG: 57,
			WA: 186
		},
		faq: []
	},
	{
		id: 'WA191',
		name: 'Make Something from Nothing',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If you win this combat, attach this card to this unit. While this card is attached, this unit has +1 strength.</p>',
		releases: {
			PG: 58,
			WA: 191
		},
		faq: [4, 11]
	},
	{
		id: 'PG59',
		name: 'Make Their Strengths Yours',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each attachment on the enemy unit.</p>',
		releases: {
			PG: 59
		},
		faq: []
	},
	{
		id: 'PG60',
		name: 'Marsh Land',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All players get -X to their combat rolls, to a minimum of 1. X equals the number of cards in their hand.</p>',
		releases: {
			PG: 60
		},
		faq: []
	},
	{
		id: 'PG61',
		name: 'Norse Tactics',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: At the end of the tactic phase, both units get -1 strength for each unit in their reserves.</p>',
		releases: {
			PG: 61
		},
		faq: []
	},
	{
		id: 'PG62',
		name: 'Not Without a Fight',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. Only playable if your unit is losing the combat. Remove this card from the game.</p>',
		releases: {
			PG: 62
		},
		faq: [197]
	},
	{
		id: 'PG63',
		name: 'Planned Diversion',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Discard 1 card: After one of your units gets a strength bonus of 3 or more, increase that bonus by 2. If you win the combat, draw 1 card.</p>',
		releases: {
			PG: 63
		},
		faq: [39, 4]
	},
	{
		id: 'WA216',
		name: 'Prepare for the Worst',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability that forces you to discard, commit the enemy unit. Only playable during combat.</p>',
		releases: {
			PG: 64,
			WA: 216
		},
		faq: [125, 252]
	},
	{
		id: 'PG65',
		name: 'Rear Charge',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (X): Choose up to X enemy units. Move any chosen units in the battle line to the reserves and any chosen units in the reserves to the battle line. Only playable if you have a ready wizard.</p>',
		releases: {
			PG: 65
		},
		faq: [96]
	},
	{
		id: 'PG66',
		name: 'Reinforced Supply Lines',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: Search your army deck for one attachment with a gold cost of 1 or less and attach it to this unit, if possible. Reshuffle your army deck.</p>',
		releases: {
			PG: 66
		},
		faq: [274, 114]
	},
	{
		id: 'PG67',
		name: 'Research',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (X): Draw X cards, then discard X cards.</p>',
		releases: {
			PG: 67
		},
		faq: [96]
	},
	{
		id: 'PG68',
		name: 'Scout the Terrain',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After setup, if you have a higher "<b>Scout</b>" total then your enemy, discard the top card of your action deck until you reveal a terrain card or run out of cards. Put that Terrain into play.</p>',
		releases: {
			PG: 68
		},
		faq: []
	},
	{
		id: 'PG69',
		name: 'Scramble for a Solution',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Discard the top 3 cards of your action deck. Add one of those cards to your hand. Remove this card from the game.</p>',
		releases: {
			PG: 69
		},
		faq: []
	},
	{
		id: 'WA237',
		name: 'See Through the Diversion',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After a unit gets a bonus of 3 or more, reduce that bonus to 2. Only playable during combat.</p>',
		releases: {
			PG: 70,
			WA: 237
		},
		faq: [44, 233]
	},
	{
		id: 'PG71',
		name: 'Snow Burdened Hill',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When this card comes into play, choose one enemy unit.</p><p><b>Support Tactic</b> Destroy this card: The chosen unit gets -4 strength.</p>',
		releases: {
			PG: 71
		},
		faq: []
	},
	{
		id: 'PG72',
		name: 'Spectral Divination',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (1): Name a card. Reveal the top 7 cards of your action deck. If you reveal the named card, put one copy of that card into your hand. Discard the other cards and shuffle your action deck.</p>',
		releases: {
			PG: 72
		},
		faq: [112, 114]
	},
	{
		id: 'WA249',
		name: 'Strike as They Are Falling',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength.Draw 1 card.</p>',
		releases: {
			PG: 73,
			WA: 249
		},
		faq: []
	},
	{
		id: 'PG74',
		name: 'Suffer Not the Witch',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +3 strength. Only usable vs. daemon or monster units.</p><p><b>Spell Combat Tactic</b> (X): Choose a daemon or monster unit with a gold cost less than X. If you win this combat, the chosen unit is destroyed.</p>',
		releases: {
			PG: 74
		},
		faq: [4, 95, 96, 97]
	},
	{
		id: 'PG75',
		name: 'The Charge of 1000 Horses',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This cavalry unit gets +1 strength for each of your other ready cavalry units.</p>',
		releases: {
			PG: 75
		},
		faq: []
	},
	{
		id: 'PG76',
		name: 'Tides of Battle',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Both players roll. The unit controlled by the player with the highest roll gets +2 strength.</p>',
		releases: {
			PG: 76
		},
		faq: [238]
	},
	{
		id: 'PG77',
		name: 'To the Teeth',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets "<b>Terror</b>: 1" for each of it’s attachments.</p>',
		releases: {
			PG: 77
		},
		faq: []
	},
	{
		id: 'PG78',
		name: 'Trapping Attack',
		cost: 'X',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: This unit gets +X strength if it passes a leadership test. X equals this unit's printed tactic points.</p>",
		releases: {
			PG: 78
		},
		faq: [95]
	},
	{
		id: 'PG79',
		name: 'Unexpected Strike',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Your enemy's combat tactic cards cost 1 additional tactic point. Draw 1 card</p>",
		releases: {
			PG: 79
		},
		faq: [105]
	},
	{
		id: 'PG80',
		name: 'Unity of Arms',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +3 strength. Only playable if you have no neutral units in play.</p>',
		releases: {
			PG: 80
		},
		faq: []
	},
	{
		id: 'PG81',
		name: 'Until You Have Nothing Left',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Destroy one attachment on this unit: This unit gets +3 strength.</p>',
		releases: {
			PG: 81
		},
		faq: []
	},
	{
		id: 'WA274',
		name: "Warrior's Rage",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your unit receives a strength bonus double that bonus. If you do not rout the enemy unit at the end of the combat, destroy this unit. You can only play one copy of this card each combat.</p>',
		releases: {
			PG: 82,
			WA: 274
		},
		faq: [39, 41, 44]
	},
	{
		id: 'PG83',
		name: 'We Claim This Territory',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): Attach this card to this unit. This unit gets "<b>Victory</b>: +1".</p>',
		releases: {
			PG: 83
		},
		faq: []
	},
	{
		id: 'PG84',
		name: 'We Have Nothing to Fear',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Remove this card from the game.</p>',
		releases: {
			PG: 84
		},
		faq: []
	},
	{
		id: 'PG85',
		name: "When It's All You've Got",
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength for each card in your enemy's hand in excess of 5.</p>",
		releases: {
			PG: 85
		},
		faq: []
	},
	{
		id: 'PG86',
		name: 'Wipe Them Out',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p>This unit gets +3 strength. Only playable during a follow-up attack.</p>',
		releases: {
			PG: 86
		},
		faq: []
	},
	{
		id: 'PG87',
		name: 'Word of Pain',
		cost: 'X',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (X): If this combat is won by a difference of X or less, the result is a slaughter. Only playable while you have a ready wizard.</p>',
		releases: {
			PG: 87
		},
		faq: [95, 96]
	},
	{
		id: 'PG88',
		name: "You'll Be Dead Before You Bleed",
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. blocking units.</p>',
		releases: {
			PG: 88
		},
		faq: [141]
	},
	{
		id: 'PG89',
		name: 'Hilt of the Norn Sword',
		cost: 1,
		unique: true,
		keywords: ['Hilt'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: Combat tactic cards you play have their tactic point cost reduced by 1.</p>',
		releases: {
			PG: 89
		},
		faq: [164]
	},
	{
		id: 'PG90',
		name: 'Ring of Stealth',
		cost: 2,
		tacticPoints: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Remove this card from the game: After this unit has been targeted for an attack, choose another ready unit in your battle line. The chosen unit becomes the target of the attack. If you lose the combat, commit this unit.</p>',
		releases: {
			PG: 90
		},
		faq: []
	},
	{
		id: 'PG91',
		name: 'Scribe',
		cost: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Spell WarCry</b> (1): Discard the top card of your action deck. If it is a spell WarCry or spell combat tactic, you may play it paying no costs.</p><p>May only be attached to a wizard unit.</p>',
		releases: {
			PG: 91
		},
		faq: [92]
	},
	{
		id: 'WA290',
		name: 'Standard of Faith',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit gets "<b>Faith</b>: 2".</p>',
		releases: {
			PG: 92,
			DH: 38,
			WA: 290
		},
		faq: []
	},
	{
		id: 'PG93',
		name: 'The Green Knight',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>While this unit is in combat, any strength bonuses the enemy unit receives are reduced by 2, minimum 1.</p><p><b>WarCry</b>: This unit gets +1 strength for each of your units with <b>Faith</b>.</p>',
		releases: {
			PG: 93
		},
		faq: [36, 39, 41, 279, 171, 44]
	},
	{
		id: 'PG94',
		name: "The Damsel's Guard",
		cost: 5,
		strength: 2,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +2</p><p><b>WarCry</b>: All of your combat tactics have their tactic point cost reduced by 2, to a minimum of 1.</p>',
		releases: {
			PG: 94
		},
		faq: []
	},
	{
		id: 'PG95',
		name: 'Theolind Adaltrud',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: This unit gets "<b>Terror</b>: X". X equals this unit\'s "<b>Faith</b>". Only playable vs. monster units.</p><p><b>Combat Tactic</b>: This attacking unit gets +2 strength.</p>',
		releases: {
			PG: 95
		},
		faq: [142]
	},
	{
		id: 'PG96',
		name: 'Trebuchet',
		cost: 4,
		strength: 1,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Bretonnian', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Long Ranged Attack</b>: 8</p><p><b>Command</b> Commit: Destroy one war machine unit.</p>',
		releases: {
			PG: 96
		},
		faq: []
	},
	{
		id: 'PG97',
		name: "Thorgrim's Trollslayers",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. monster units.</p>',
		releases: {
			PG: 97
		},
		faq: []
	},
	{
		id: 'PG98',
		name: 'Forest Stalkers',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 1</p><p><b>Combat Tactic</b>: This unit gets a strength bonus equal to it\'s "<b>Scout</b>".</p>',
		releases: {
			PG: 98
		},
		faq: []
	},
	{
		id: 'PG99',
		name: 'Greybeard Thunderers',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Long Ranged Attack</b>: 4</p><p><b>Victory</b>: +2</p><p><b>Support Tactic</b>: Your unit gets +1 ranged attack. Only playable during a ranged attack.</p>',
		releases: {
			PG: 99
		},
		faq: []
	},
	{
		id: 'PG100',
		name: 'Thagrund the Greybeard',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Support Tactic</b>: Your unit gets +1 strength. Only playable if your unit has a weapon attachment.</p>',
		releases: {
			PG: 100
		},
		faq: []
	},
	{
		id: 'PG101',
		name: "Thagrund's Gold Miners",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: Destroy all enemy strategy cards. This unit gets +1 strength for each strategy card destroyed.</p>',
		releases: {
			PG: 101
		},
		faq: []
	},
	{
		id: 'PG102',
		name: "Thagrund's Longbeards",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +1</p><p><b>Combat Tactic</b>: This unit gets +1 strength if this is the first battle, +2 strength if it is the second battle, or +3 strength if it is the third battle.</p>',
		releases: {
			PG: 102
		},
		faq: []
	},
	{
		id: 'PG103',
		name: "Thagrund's Stone Thrower",
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Spell Support Tactic</b> (1): Your unit gets +1 strength. Only playable while you have an Empire wizard unit.</p>',
		releases: {
			PG: 103
		},
		faq: []
	},
	{
		id: 'WA316',
		name: "Thagrund's War Cannon",
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 8</p><p><b>Support Tactic</b>: Both units in the combet get -3 tactic points.</p>',
		releases: {
			PG: 104,
			WA: 316
		},
		faq: [168]
	},
	{
		id: 'PG105',
		name: 'Valten, Champion of Sigmar',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Valten</p><p>While this unit is in your battle line ready, your other Grand Alliance units get +1 strength and +1 leadership.</p><p><b>WarCry</b>: This unit gets +4 strength vs. Hordes Of Darkness units.</p>',
		releases: {
			PG: 105
		},
		faq: []
	},
	{
		id: 'PG106',
		name: 'Ophelia Grundheim',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 5,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Reaction</b>: After a unit with <b>Faith</b> passes a test, draw 1 card, then discard 1 card.</p>',
		releases: {
			PG: 106
		},
		faq: []
	},
	{
		id: 'PG107',
		name: "Ratai's Frost Riders",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Play two WarCry cards or <b>Support WarCry</b> abilities, paying all costs.</p>',
		releases: {
			PG: 107
		},
		faq: []
	},
	{
		id: 'WA344',
		name: "Ratai's Horse Archers",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Short Ranged Attack</b>: 7</p><p><b>Reaction</b>: After this unit wins a ranged attack, it may make a follow-up attack as though it had routed the enemy unit. Use this unit's strength for the follow-up attack.</p>",
		releases: {
			PG: 108,
			WA: 344
		},
		faq: [215, 216]
	},
	{
		id: 'PG109',
		name: 'Tamisalv Ratai',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: The enemy unit gets -X strength. X equals this unit\'s "<b>Terror</b>".</p>',
		releases: {
			PG: 109
		},
		faq: []
	},
	{
		id: 'WA349',
		name: 'Tzarina Katarin the Ice Queen',
		cost: 6,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p>If Tzarina is destroyed, your enemy may rally up to two of their units.</p><p><b>Spell Support Tactic</b> (3): Commit one enemy unit.</p>',
		releases: {
			PG: 110,
			WA: 349
		},
		faq: []
	},
	{
		id: 'WA350',
		name: 'White Plain Kossars',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Kislev', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Ranged Attack</b>: X. X equals this unit's strength +1.</p>",
		releases: {
			PG: 111,
			WA: 350
		},
		faq: [201, 202]
	},
	{
		id: 'PG112',
		name: 'Korhil, Captain of the White Lions',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>This unit may block any attack.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your other "Unique" units.</p>',
		releases: {
			PG: 112
		},
		faq: [208]
	},
	{
		id: 'WA354',
		name: "Alarielle's Maidenguard",
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p>This unit gets +2 leadership while you have Allarielle the Everqueen in play.</p><p><b>Combat Tactic</b>: Look at your enemy's hand and choose one card. Your enemy places that card on top of their deck.</p>",
		releases: {
			PG: 113,
			WA: 354
		},
		faq: []
	},
	{
		id: 'PG114',
		name: "Eataine's Coastal Protectors",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>While ready this unit may block attacks that target units in your reserves (including ranged attacks).</p>',
		releases: {
			PG: 114
		},
		faq: []
	},
	{
		id: 'PG115',
		name: "Ellerion's Ghost Blades",
		cost: 3,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p>',
		releases: {
			PG: 115
		},
		faq: []
	},
	{
		id: 'WA366',
		name: 'Keepers of the Flame',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each strategy card you have in play. If your enemy has no strategy cards in play, this unit gets +2 strength for each strategy card instead.</p>',
		releases: {
			PG: 116,
			WA: 366
		},
		faq: []
	},
	{
		id: 'PG117',
		name: 'Luril Ellerion',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (1): This unit gets "<b>Terror</b>: 1" for each of your other wizard units.</p>',
		releases: {
			PG: 117
		},
		faq: [268, 149]
	},
	{
		id: 'PG118',
		name: "Luril's Guardians",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit is destroyed, move any character attachments on it to any of your other units without character attachments.</p><p><b>Support WarCry</b> Commit your unit: Exchange this unit with your unit in combat.</p>',
		releases: {
			PG: 118
		},
		faq: [225, 257, 258, 260, 261, 262, 18]
	},
	{
		id: 'PG119',
		name: "Rhyian's Emerald Company",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: This unit gets +2 ranged attack. Only playable if you have an Empire unit.</p>',
		releases: {
			PG: 119
		},
		faq: []
	},
	{
		id: 'PG120',
		name: 'Zarahadron, Hydra of War',
		cost: 5,
		strength: 5,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: This unit gets a +1 strength token.</p>',
		releases: {
			PG: 120
		},
		faq: []
	},
	{
		id: 'CD1',
		name: 'Clanrats of the Warlord Clans',
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 12,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>You may have up to 12 of this card in your deck.</p>',
		releases: {
			CD: 1
		},
		faq: []
	},
	{
		id: 'CD2',
		name: "Clawspeck's Night Runners",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p>This unit may block infantry.</p><p><b>Combat Tactic</b> Commit or destroy one of your units in your battle line: This unit gets a strength or leadership bonus equal to the committed or destroyed unit's leadership.</p>",
		releases: {
			CD: 2
		},
		faq: [95]
	},
	{
		id: 'CD3',
		name: 'Grey Seer Thanquol Boneripper',
		cost: 6,
		strength: 3,
		tacticPoints: 7,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p>This unit may play <b>Spell WarCry</b> cards as combat tactics.</p><p><b>WarCry</b>: This unit gets +4 strength and "<b>Terror</b>: 2".</p>',
		releases: {
			CD: 3
		},
		faq: [268, 124]
	},
	{
		id: 'CD4',
		name: "Queekpest's Stenchmonks",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b>: This defending unit gets +3 strength. If this unit wins, rout the enemy unit.Only playable during a follow-up attack.</p>',
		releases: {
			CD: 4
		},
		faq: []
	},
	{
		id: 'CD5',
		name: 'Stikstik Bloodbone',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Support Tactic</b>: Your Skaven unit gets +1 strength, +1 leadership and +1 tactic point. Only playable while you have more units in your battle line than your enemy.</p>',
		releases: {
			CD: 5
		},
		faq: []
	},
	{
		id: 'CD6',
		name: "Stikstik's Giant Rats",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and +1 leadership. Only playable if your enemy has less than 4 cards in their hand.</p>',
		releases: {
			CD: 6
		},
		faq: []
	},
	{
		id: 'CD7',
		name: "Stikstik's Throat Rippers",
		cost: 4,
		strength: 6,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Skaven', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Victory</b>: -2</p>',
		releases: {
			CD: 7
		},
		faq: []
	},
	{
		id: 'CD8',
		name: 'Warlock Skriskrivet',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: After you muster this unit, each player gets an additional 5 gold to spend during this muster phase <span class="errata">while this unit remains in play</span>. Players who have passed may continue to muster.</p><p><b>Spell Reaction</b> (1): After any roll, that roll gets +1.</p>',
		releases: {
			CD: 8
		},
		errata: true,
		faq: [243]
	},
	{
		id: 'CD9',
		name: 'Sacred Standard of the Horned Rat',
		cost: 2,
		keywords: ['Skaven', 'Standard'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p>This unit gets "<b>Terror</b>: 2".</p><p><b>WarCry</b>: This unit gets a strength bonus equal to it\'s <b>Terror</b> rating.</p><p>This card may only be attached to a Skaven unit.</p>',
		releases: {
			CD: 9
		},
		faq: []
	},
	{
		id: 'CD10',
		name: 'Battle Plan',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b> Commit one of your units: This unit gets a strength bonus equal to the committed unit's tactic points up to the committed unit's gold cost +1.</p>",
		releases: {
			CD: 10
		},
		faq: [95, 97]
	},
	{
		id: 'CD11',
		name: 'Battlefield Orders',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 tactic point for each unit in your reserves.</p>',
		releases: {
			CD: 11
		},
		faq: []
	},
	{
		id: 'CD12',
		name: 'Blessings of the Lady',
		cost: 2,
		die: 2,
		keywords: ['Bretonnian'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This Bretonnian unit gets +3 strength.</p><p><b>WarCry</b>: This Bretonnian unit gets +4 strength when attacking from the reserves.</p>',
		releases: {
			CD: 12
		},
		faq: [147]
	},
	{
		id: 'CD13',
		name: 'Boundless Faith',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If this unit passes a leadership test, play a combat tactic or WarCry card from your hand paying no costs.</p>',
		releases: {
			CD: 13
		},
		faq: [92]
	},
	{
		id: 'WA128',
		name: 'Critical Strike',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. You may destroy one attachment on the enemy unit.</p>',
		releases: {
			CD: 14,
			WA: 128
		},
		faq: []
	},
	{
		id: 'CD16',
		name: 'Empower Weapon',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +2 strength. Only playable if this unit has a weapon attachment.</p>',
		releases: {
			CD: 16
		},
		faq: []
	},
	{
		id: 'WA148',
		name: 'Faithful Devotion',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to it's <b>Faith</b> rating.</p>",
		releases: {
			CD: 17,
			WA: 148
		},
		faq: []
	},
	{
		id: 'CD18',
		name: 'Fireball',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength.</p>',
		releases: {
			CD: 18
		},
		faq: []
	},
	{
		id: 'WA160',
		name: 'Full Charge',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This non-infantry unit gets +4 strength. Only playable while attacking from the battle line.</p><p><b>Combat Tactic</b>: This non-infantry unit gets +2 strength.</p>',
		releases: {
			CD: 19,
			WA: 160
		},
		faq: [147]
	},
	{
		id: 'CD22',
		name: 'Hold Your Ground',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets a tactic point bonus equal to the number of units in your battle line with a gold cost greater than 2.</p>',
		releases: {
			CD: 22
		},
		faq: [97]
	},
	{
		id: 'CD23',
		name: 'Immortal Charge',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +2 strength. Only playable if you have less units in your battle line than your enemy.</p>',
		releases: {
			CD: 23
		},
		faq: []
	},
	{
		id: 'CD24',
		name: 'Iron Fist',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Draw 2 cards. If you lose this combat destroy one of your other units. You may only play one copy of this card per combat.</p>',
		releases: {
			CD: 24
		},
		faq: []
	},
	{
		id: 'VT27',
		name: 'Life Is Cheap',
		cost: 2,
		die: 2,
		keywords: ['Skaven'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This Skaven unit gets +3 strength.</p><p><b>WarCry</b>: This Skaven unit gets a leadership bonus equal to the number of Skaven in your battle line.</p>',
		releases: {
			CD: 25,
			VT: 27
		},
		faq: []
	},
	{
		id: 'CD27',
		name: 'One for One',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Your enemy discards 1 random card.</p>',
		releases: {
			CD: 27
		},
		faq: []
	},
	{
		id: 'WA204',
		name: 'One Last Charge',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +2 strength. Remove this card from the game.</p>',
		releases: {
			CD: 28,
			WA: 204
		},
		faq: []
	},
	{
		id: 'CD29',
		name: 'Overwhelming Numbers',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if you have more units in your battle line than your enemy has in their battle line.</p>',
		releases: {
			CD: 29
		},
		faq: []
	},
	{
		id: 'CD30',
		name: 'Sacrificial Unit',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Draw 2 cards. If you win this combat, return the enemy unit to the battle line committed. You may not make a follow-up attack. You may only play one copy of this card per combat.</p>',
		releases: {
			CD: 30
		},
		faq: [220, 60, 66]
	},
	{
		id: 'WA241',
		name: 'Stare into the Face of Death',
		cost: 1,
		die: 6,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 leadership.</p>',
		releases: {
			CD: 31,
			VT: 28,
			WA: 241
		},
		faq: []
	},
	{
		id: 'WA255',
		name: 'Sweeping Flank Maneuver',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -2 tactic points. Draw 1 card.</p>',
		releases: {
			CD: 33,
			WA: 255
		},
		faq: []
	},
	{
		id: 'CD34',
		name: 'When They Least Expect It',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b> Discard 2 cards: This unit gets +5 strength.</p>',
		releases: {
			CD: 34
		},
		faq: []
	},
	{
		id: 'CD39',
		name: "Adaltrud's Scrappers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 6</p><p>While this unit is in combat, players subtract their combat rolls instead of adding them.</p>',
		releases: {
			CD: 39
		},
		faq: []
	},
	{
		id: 'CD40',
		name: "Angelburg's Volunteers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if this unit has an attachment.</p>',
		releases: {
			CD: 40
		},
		faq: []
	},
	{
		id: 'CD41',
		name: 'King Louen Leoncouer',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Bretonnian', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 3</p><p>While this unit is ready, your other Bretonnian units get "<b>Faith</b>: 1".</p><p><b>WarCry</b>: This unit gets a strength bonus equal to it\'s <b>Faith</b> rating.</p>',
		releases: {
			CD: 41
		},
		faq: []
	},
	{
		id: 'CD42',
		name: "Knights of the Lady's Banner",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: Search your enemy's discard pile for an attachment and remove it from the game. This unit gets +1 strength.</p>",
		releases: {
			CD: 42
		},
		faq: [180]
	},
	{
		id: 'CD43',
		name: 'Knights of Winged Valor',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Bretonnian', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Support Tactic</b>: Your cavalry unit gets +1 tactic point. If your unit in the combat is a Bretonnian, you may use this ability while this unit is committed.</p>',
		releases: {
			CD: 43
		},
		faq: []
	},
	{
		id: 'CD44',
		name: "Leoncouer's Defenders of the Realm",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +d6 strength. You do not make a combat roll.</p>',
		releases: {
			CD: 44
		},
		faq: [236]
	},
	{
		id: 'CD45',
		name: "Leoncouer's Lancers",
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +3 strength if it passes a leadership test.</p>',
		releases: {
			CD: 45
		},
		faq: []
	},
	{
		id: 'CD46',
		name: 'The Battle Pilgrims',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Faith</b>: 3</p><p><b>Support Tactic</b> Commit this unit: Your unit gets a strength bonus equal to this unit's <b>Faith</b> rating.</p>",
		releases: {
			CD: 46
		},
		faq: []
	},
	{
		id: 'CD47',
		name: 'The White Mistress',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p>When determining who goes first, you may add the <b>Wizard</b> levels of your units to your total tactic points.</p><p><b>Spell Reaction</b> (1): After any roll, that roll gets -1.</p>',
		releases: {
			CD: 47
		},
		faq: [243]
	},
	{
		id: 'CD48',
		name: 'The Grail Shield',
		cost: 2,
		unique: true,
		keywords: ['Bretonnian', 'Armor'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p>This unit gets "<b>Faith</b>: 1"."</p><p><b>WarCry</b>: This unit gets +2 strength and "<b>Terror</b>: X". X equals this units <b>Faith</b> rating.</p><p>This card may only be attached to a Bretonnian unit.</p>',
		releases: {
			CD: 48
		},
		faq: [268]
	},
	{
		id: 'LC1',
		name: "Archaon's Blood Horde",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After the enemy unit plays a combat tactic, this unit gets +1 tactic point.</p>',
		releases: {
			LC: 1
		},
		faq: []
	},
	{
		id: 'WA2',
		name: "Archaon's Vanguard",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Reaction</b>: When this unit is destroyed, remove 1 card in your enemy's army discard pile from the game.</p>",
		releases: {
			LC: 2,
			WA: 2
		},
		faq: [225]
	},
	{
		id: 'WA5',
		name: "Bilith's Madmen",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. units with a higher gold cost.</p>',
		releases: {
			LC: 3,
			WA: 5
		},
		faq: [97]
	},
	{
		id: 'WA8',
		name: "Crom's Chosen",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b> Commit this unit: If your Chaos unit passes a leadership test it gets +2 strength. If it wins the combat, return it to the battle line ready. Not playable during a follow-up attack.</p>',
		releases: {
			LC: 4,
			WA: 8
		},
		faq: [4, 60]
	},
	{
		id: 'LC5',
		name: "D'aggorn's Chosen",
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p>Units with a strength less than this unit's printed strength may not declare an attack against this unit unless there are no other units that may be targeted for attacks in the battle line.</p>",
		releases: {
			LC: 5
		},
		faq: [194]
	},
	{
		id: 'LC6',
		name: 'Grunt Trollskinner',
		cost: 8,
		strength: 9,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Monster', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Victory</b>: -4</p><p><b>Reaction</b>: After this unit loses a combat the enemy must pass an unmodified leadership test or be destroyed.</p>',
		releases: {
			LC: 6
		},
		faq: [271]
	},
	{
		id: 'WA20',
		name: 'Rack of the Damned',
		cost: 4,
		strength: 0,
		tacticPoints: 0,
		leadership: 6,
		keywords: ['Chaos', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +5</p><p><b>Reaction</b>: When this unit is targeted for an attack, select one of your ready Chaos infantry units to block the attack.</p><p><b>Support Tactic</b>: Your Chaos Unit gets "<b>Terror</b>: 2".</p>',
		releases: {
			LC: 7,
			WA: 20
		},
		faq: [208, 268]
	},
	{
		id: 'LC8',
		name: 'Styrkaar of the Sortsvinaer',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: The enemy unit must make a leadership test. If they fail, the enemy unit may not play any cards or abilities this combat.</p><p><b>Reaction</b>: After your enemy fails a test, draw 1 card.</p>',
		releases: {
			LC: 8
		},
		faq: [156]
	},
	{
		id: 'LC9',
		name: 'Swords of Chaos',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and +2 tactic points. Only playable during a follow-up attack.</p>',
		releases: {
			LC: 9
		},
		faq: []
	},
	{
		id: 'LC10',
		name: 'The Brides of Styrkaar',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While this unit is ready in your battle line, your non-daemon units may not be targeted with attacks.</p>',
		releases: {
			LC: 10
		},
		faq: []
	},
	{
		id: 'LC11',
		name: 'Zoekarl, Bringer of Darkness',
		cost: 9,
		strength: 6,
		tacticPoints: 8,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Terror</b>: 3</p><p><b>WarCry</b> Discard 2 cards: Once per battle, destroy an enemy unit in the battle line. This unit's strength is reduced by the destroyed unit's gold cost.</p>",
		releases: {
			LC: 11
		},
		faq: [97, 133]
	},
	{
		id: 'WA30',
		name: 'Archers of Nightbreeze',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Short Ranged Attack</b>: 5</p><p><b>Reaction</b>: Once per battle, after this unit has performed a ranged attack, declare a "<b>Short Ranged Attack</b>: 4" attack against an enemy unit.</p>',
		releases: {
			LC: 12,
			WA: 30
		},
		faq: [133]
	},
	{
		id: 'LC13',
		name: 'Beastlord Rakarth of Karrond Kar',
		cost: 2,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength for each of your ready monster units.</p><p><b>Support Tactic</b>: Your monster unit gets +2 tactic points.</p>',
		releases: {
			LC: 13
		},
		faq: []
	},
	{
		id: 'LC14',
		name: "Rikhaine's Black Maidens",
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dark Elf', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may not declare an attack.</p><p><b>Combat Tactic</b>: If this unit wins the combat, rout the enemy unit. Only playable during a follow-up attack and only once per battle.</p>',
		releases: {
			LC: 14
		},
		faq: [194, 140, 133]
	},
	{
		id: 'LC15',
		name: "Rikhaine's Dark Sisters",
		cost: 3,
		strength: 3,
		tacticPoints: 0,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: Play a WarCry card from your hand, paying no costs.</p><p><b>Reaction</b>: After your enemy plays a combat tactic or support tactic while this unit is in combat, this unit gets +2 tactic points.</p>',
		releases: {
			LC: 15
		},
		faq: [92]
	},
	{
		id: 'LC16',
		name: "Rikhaine's Foot",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: The enemy unit gets -2 tactic points.</p><p><b>Combat Tactic</b>: This unit gets +1 strength. Only playable while this unit is losing a combat.</p>',
		releases: {
			LC: 16
		},
		faq: [197, 168]
	},
	{
		id: 'LC17',
		name: "Rikhaine's Vengeance",
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: Before the enemy unit plays it's first combat tactic in a combat with this unit, you may play 1 WarCry or combat tactic paying no costs.</p>",
		releases: {
			LC: 17
		},
		faq: [92, 69]
	},
	{
		id: 'LC18',
		name: "Rikhaine's Wrath",
		cost: 4,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit may not make a follow-up attack unless it passes an unmodified leadership test.</p>',
		releases: {
			LC: 18
		},
		faq: [271]
	},
	{
		id: 'LC19',
		name: 'Saerith, Bride of Haasek',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1): After your enemy plays a Spell combat tactic, your unit in the combat gets +1 strength.</p>',
		releases: {
			LC: 19
		},
		faq: []
	},
	{
		id: 'LC20',
		name: 'Da Pump Pump Truck',
		cost: 3,
		strength: 1,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Replace this unit\'s "Infantry" keyword with "Cavalry."</p><p><b>Reaction</b>: This attacking unit roll 3d6 for it\'s combat roll. Replace this units "Cavalry" keyword with "Infantry." Only playable while this unt has the "Cavalry" keyword.</p>',
		releases: {
			LC: 20
		},
		faq: [229, 241, 142, 282]
	},
	{
		id: 'LC21',
		name: "Facebeater's Big Stick Smashaz",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After an enemy unit is destroyed in combat with this unit, the enemy unit and all attached cards are removed from the game.</p>',
		releases: {
			LC: 21
		},
		faq: [224]
	},
	{
		id: 'WA64',
		name: 'Gobbo Elfchasers',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Commit this unit: After another of your Orc units routs an enemy unit, do not make a follow-up attack. Your unit returns to the battle line ready.</p>',
		releases: {
			LC: 22,
			WA: 64
		},
		faq: [60]
	},
	{
		id: 'LC23',
		name: "Grimgor's Spikey Boyz",
		cost: 5,
		strength: 6,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Victory</b>: -1</p><p><b>Reaction</b>: After this unit routs an enemy unit, remove the top card of the enemy's action deck from the game.</p>",
		releases: {
			LC: 23
		},
		faq: []
	},
	{
		id: 'WA77',
		name: "Ozol's Netterboyz",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit or destroy this unit: After your enemy routs one of your units with a card effect, no follow-up attack may be made. You may play this ability while committed.</p>',
		releases: {
			LC: 24,
			WA: 77
		},
		faq: []
	},
	{
		id: 'LC25',
		name: "Ozol's Snotling Swarm",
		cost: 3,
		strength: 4,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +3 tactic points. Only playable if you have another ready Orc unit.</p>',
		releases: {
			LC: 25
		},
		faq: []
	},
	{
		id: 'WA78',
		name: "Ozol's Squig Chasers",
		cost: 2,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -1</p><p><b>Combat Tactic</b>: This unit gets +d6 tactic points.</p>',
		releases: {
			LC: 26,
			WA: 78
		},
		faq: []
	},
	{
		id: 'LC27',
		name: 'Zahubu, Exalted of Gork',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Wurrzag Ud Ura Zahubu</p><p><b>Wizard</b>: 2</p><p><b>Combat Tactic</b>: If the enemy unit\'s combat roll is 4 or more, then the roll is reduced to 0. Only playable vs. "Monster", "<b>Wizard</b>", or "Unique" units.</p>',
		releases: {
			LC: 27
		},
		faq: []
	},
	{
		id: 'LC28',
		name: 'Throt the Unclean',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 5,
		unique: true,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>While this unit is ready all of your other Skaven units gets +1 leadership.</p><p><b>Reaction</b> Discard 1 card: When this unit gets a strength bonus of 4 or less, incresae that bonus by 2.</p>',
		releases: {
			LC: 28
		},
		faq: [35, 36, 39, 41]
	},
	{
		id: 'LC29',
		name: 'Summon Daemon',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> Commit one of your ready Chaos "<b>Wizard</b>" units (4): If you have no other copies of this card in play, this card enters play as a unit with the keywords: Chaos,Daemon,Infantry, 3 strength, 3 tactic points, 3 leadership and a gold cost of 0.</p>',
		releases: {
			LC: 29
		},
		faq: [132]
	},
	{
		id: 'LC30',
		name: 'And Then Comes Darkness',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with "<b>Terror</b>" get "<b>Victory</b>: +1".</p>',
		releases: {
			LC: 30
		},
		faq: []
	},
	{
		id: 'LC31',
		name: 'Armed and Dangerous',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength if it has a weapon and an armor attachment.</p><p><b>Combat Tactic</b>: This Dwarf unit gets +3 strength if it has a weapon and an armor attachment.</p>',
		releases: {
			LC: 31
		},
		faq: []
	},
	{
		id: 'LC32',
		name: 'As Heroes Kill Flags Fall',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -X strength. X equals that unit\'s positive "<b>Victory</b>." If the unit has a "<b>Victory</b>" penalty this card has no effect.</p>',
		releases: {
			LC: 32
		},
		faq: []
	},
	{
		id: 'LC33',
		name: 'Attack the Scouts',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Choose one enemy unit. This unit gets a strength bonus equal to the target unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			LC: 33
		},
		faq: []
	},
	{
		id: 'LC34',
		name: 'Battlefield Veteran',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: All action cards attached to the enemy unit are discarded.</p><p><b>Combat Tactic</b>: The enemy unit gets -1 tactic point.</p>',
		releases: {
			LC: 34
		},
		faq: [11, 168]
	},
	{
		id: 'WA113',
		name: 'Blessing',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (2): Attach this card to one of your ready units. This unit gets +2 strength.</p>',
		releases: {
			LC: 35,
			WA: 113
		},
		faq: []
	},
	{
		id: 'LC36',
		name: 'Breaking Their Spirit',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with a positive "<b>Victory</b>" bonus have their positive bonus replaced with a negative bonus (I.e. a unit with "<b>Victory</b>: +3", now has "<b>Victory</b>: -3" instead).</p>',
		releases: {
			LC: 36
		},
		faq: [123]
	},
	{
		id: 'LC37',
		name: 'Bretonnian Resolve',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit with "<b>Faith</b>" gets +1 leadership.</p><p><b>Combat Tactic</b>: This Bretonnian unit with "<b>Faith</b>" gets +1 leadership and it may not be routed this combat.</p>',
		releases: {
			LC: 37
		},
		faq: []
	},
	{
		id: 'LC38',
		name: 'Call in the Reserves',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Command</b>: Return all of your cards removed from the game to their discard piles.</p>',
		releases: {
			LC: 38
		},
		faq: []
	},
	{
		id: 'WA123',
		name: 'Channel Your Power',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets a strength bonus equal to it\'s current "<b>Wizard</b>" level.</p>',
		releases: {
			LC: 39,
			WA: 123
		},
		faq: []
	},
	{
		id: 'LC40',
		name: 'Charge of the Knights Panther',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +4 strength. Only playable if you have a ready infantry unit in play. If you lose this <span class="errata">combat</span>, commit one of your infantry units.</p>',
		releases: {
			LC: 40
		},
		errata: true,
		faq: []
	},
	{
		id: 'LC41',
		name: 'Clean Up the Dead',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After a player shuffles their discard pile into their deck, go through that player's deck and remove all copies of any one card from the game. You may not play this ability again until your enemy has used this ability.</p><p>Either player may play this ability.</p>",
		releases: {
			LC: 41
		},
		faq: [114]
	},
	{
		id: 'LC42',
		name: 'Coordinated Battle Plans',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength if you have three or more units with a printed gold cost of 5 or more.</p><p><b>Combat Tactic</b>: This Orc unit gets +4 strength if you have three or more units with a printed gold cost of 5 or more.</p>',
		releases: {
			LC: 42
		},
		faq: []
	},
	{
		id: 'LC43',
		name: 'Cunning Battle Plans',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Before the <span class="errata">first command is played</span>, take up to 2 commands. These commands may not be attacks <span class="errata">or ranged attacks</span>.</p>',
		releases: {
			LC: 43
		},
		errata: true,
		faq: [232]
	},
	{
		id: 'LC44',
		name: 'Cutting Through The Reserves',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If you win this combat, rout the enemy unit. Only playable vs. an enemy unit with a "<b>Victory</b>" bonus.</p>',
		releases: {
			LC: 44
		},
		faq: [195, 145, 148, 123]
	},
	{
		id: 'WA136',
		name: 'Defence of the Empire',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If this combat ends in a slaughter, this unit wins instead. Only playable while defending.</p>',
		releases: {
			LC: 45,
			WA: 136
		},
		faq: [196, 247]
	},
	{
		id: 'WA146',
		name: 'Epic Duel',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Command</b>: Both you and then your enemy choose one of the other player's units. Both players discard their hands, draw 5 cards and rally the chosen units. Only playable if there are no ready units in play.</p>",
		releases: {
			LC: 46,
			WA: 146
		},
		faq: []
	},
	{
		id: 'LC47',
		name: 'Escape Through The Sewers',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If you lose this combat, instead of being destroyed, your unit is returned to your battle line committed.</p><p><b>Combat Tactic</b>: If this Skaven unit loses this combat, instead of being destroyed, your unit is returned to your battle line committed and the enemy unit may not make a follow-up attack.</p>',
		releases: {
			LC: 47
		},
		faq: [60, 66]
	},
	{
		id: 'WA154',
		name: 'Fight Until Dawn',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Rally one enemy unit: Your enemy chooses one of your committed units. Rally that unit.</p>',
		releases: {
			LC: 48,
			WA: 154
		},
		faq: []
	},
	{
		id: 'WA156',
		name: 'Fire on Them Both',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Choose one enemy unit not in this combat. The enemy unit gets a strength and tactic point bonus equal to those of the chosen unit. If you win this combat, the chosen unit suffers the same result as the enemy unit.</p><p>Only playable during a ranged attack by the attacker.</p>',
		releases: {
			LC: 49,
			WA: 156
		},
		faq: []
	},
	{
		id: 'LC50',
		name: 'Follow My Lead',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Whenever this unit makes a leadership test, the result is automatically a 1. No roll necessary.</p>',
		releases: {
			LC: 50
		},
		faq: []
	},
	{
		id: 'LC51',
		name: "Franz's Charge",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a combat, attach this card to that unit. While attached that unit gets "<b>Victory</b>: +2." Only playable during a follow-up attack.</p>',
		releases: {
			LC: 51
		},
		faq: [4]
	},
	{
		id: 'LC52',
		name: "Franz's Regroup",
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Move any number of your units in the battle line to the reserves. Only playable by an infantry unit.</p>',
		releases: {
			LC: 52
		},
		faq: []
	},
	{
		id: 'LC53',
		name: 'Glorious Melee',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: All rolls made during this combat, except rout checks, get +3.</p>',
		releases: {
			LC: 53
		},
		faq: []
	},
	{
		id: 'LC54',
		name: 'Hordes of the North',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with "<b>Scout</b>" get "<b>Victory</b>: +1".</p>',
		releases: {
			LC: 54
		},
		faq: []
	},
	{
		id: 'LC55',
		name: "Huss' Arrival",
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +4 strength. Only playable if you have a ready cavalry unit in play. If you lose the <span class="errata">combat</span> commit one of your cavalry units.</p>',
		releases: {
			LC: 55
		},
		errata: true,
		faq: []
	},
	{
		id: 'WA169',
		name: 'Heart of Darkness',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to it's printed strength. After the combat, attach this card to this unit. While attached this unit's printed strength is reduced to 0.</p>",
		releases: {
			LC: 56,
			WA: 169
		},
		faq: []
	},
	{
		id: 'LC57',
		name: 'Into The Fray',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: Choose one enemy unit not in this combat. The enemy unit gets a strength bonus equal to the chosen unit's strength and a tactic point bonus equal to the chosen unit's tactic points. If you win this combat, destroy the chosen unit.</p><p>Only playable by an attacking infantry unit during a non-ranged attack.</p>",
		releases: {
			LC: 57
		},
		faq: [4, 142]
	},
	{
		id: 'LC58',
		name: "It's Not The Blade, But The Soldier",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If you control more units with support tactics than your enemy, this unit gets +3 strength.</p><p><b>Combat Tactic</b>: If you control more units with support tactics than your enemy, this Dark Elf unit gets +4 strength.</p>',
		releases: {
			LC: 58
		},
		faq: []
	},
	{
		id: 'LC59',
		name: "Jasenland's Rolling Charge",
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +2 strength vs infantry units.</p><p><b>Combat Tactic</b>: This Empire cavalry unit gets +2 strength and "<b>Terror</b>: 2" vs. infantry units.</p>',
		releases: {
			LC: 59
		},
		faq: [268]
	},
	{
		id: 'LC60',
		name: 'Keep Them Pinned',
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +4 strength. Only playable if you have a ready unit in play with a <b>Ranged Attack</b>. If you lose this <span class="errata">combat</span> commit one of your units with a <b>Ranged Attack</b>.</p>',
		releases: {
			LC: 60
		},
		errata: true,
		faq: [188]
	},
	{
		id: 'LC61',
		name: 'Magic Currents',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with "<b>Wizard</b>" get "<b>Victory</b>: +1".</p>',
		releases: {
			LC: 61
		},
		faq: []
	},
	{
		id: 'WA192',
		name: 'March of the Damned',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: "<p>When combat rolls are made, the rolls are subtracted from each unit's strength instead of added to each unit's strength.</p>",
		releases: {
			LC: 62,
			WA: 192
		},
		faq: [209]
	},
	{
		id: 'LC63',
		name: 'Overtake Them!',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a combat as the defender, attach this card to that unit. While attached, that unit gets "<b>Victory</b>: +2".</p>',
		releases: {
			LC: 63
		},
		faq: [4]
	},
	{
		id: 'LC64',
		name: 'Own The Battlefield',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable if you have a higher <b>Scout</b> total than your enemy.</p><p><b>Combat Tactic</b>: This High Elf unit gets +3 strength. Only playable if you have a higher <b>Scout</b> total than your enemy.</p>',
		releases: {
			LC: 64
		},
		faq: []
	},
	{
		id: 'LC65',
		name: 'Rain Hell Upon Them!',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a ranged attack as the attacker and destroys the enemy unit, attach this card to your unit. While attached, that unit gets "<b>Victory</b>: +2".</p>',
		releases: {
			LC: 65
		},
		faq: []
	},
	{
		id: 'LC66',
		name: 'Re-equip',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Both you and then your enemy reveal the top 5 cards of your deck. Any attachments revealed in this way may be attached to a legal unit.</p>',
		releases: {
			LC: 66
		},
		faq: [274, 112, 116]
	},
	{
		id: 'WA226',
		name: 'Relentless March',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Declare a non-ranged attack with one of your committed units.</p>',
		releases: {
			LC: 67,
			WA: 226
		},
		faq: []
	},
	{
		id: 'LC68',
		name: 'Remember Your Training!',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: At the end of the tactics phase, this infantry unit gets a strength bonus equal to the number of bonuses it received in this combat to it's strength, leadership or tactic points.</p>",
		releases: {
			LC: 68
		},
		faq: [35, 36, 40, 41, 44]
	},
	{
		id: 'LC69',
		name: 'Scouting Skirmish',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your opponent may allow you to draw 3 cards. If they do not, when this combat ends, the result is a slaughter.</p>',
		releases: {
			LC: 69
		},
		faq: [3]
	},
	{
		id: 'LC70',
		name: 'Siphoned Power',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (4): After one of your units becomes committed, make a leadership test for one of your other units. If successful, commit the other unit instead.</p>',
		releases: {
			LC: 70
		},
		faq: []
	},
	{
		id: 'LC71',
		name: 'Strike When They Are Weak',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If the enemy unit is committed at the end of the combat, and your unit has a printed strength of 3 or more, the result is a slaughter. Not playable during a ranged attack.</p>',
		releases: {
			LC: 71
		},
		faq: [182]
	},
	{
		id: 'WA257',
		name: 'Take Up the Charge',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you rout an enemy unit, exchange this unit with one of your other ready units. The new unit performs the follow-up attack.</p>',
		releases: {
			LC: 72,
			WA: 257
		},
		faq: []
	},
	{
		id: 'LC73',
		name: 'Taunting Tactics',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Choose one enemy unit in the reserves. Move that unit to the battle line. Your enemy may commit the chosen unit to cancel this effect.</p>',
		releases: {
			LC: 73
		},
		faq: []
	},
	{
		id: 'LC74',
		name: 'The Bretonnian Fields of Battle',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with "<b>Faith</b>" get "<b>Victory</b>: +1".</p>',
		releases: {
			LC: 74
		},
		faq: []
	},
	{
		id: 'LC75',
		name: 'The Faithful Fear Not',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Choose one enemy unit. This unit gets a strength bonus equal to the target unit\'s "<b>Terror</b>" level.</p>',
		releases: {
			LC: 75
		},
		faq: []
	},
	{
		id: 'LC76',
		name: 'The Fight Belongs To The Soldier',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +3 strength. If this combat ends in a slaughter this unit wins instead. Only playable while you have another ready infantry unit in your battle line.</p>',
		releases: {
			LC: 76
		},
		faq: [196, 247]
	},
	{
		id: 'LC77',
		name: 'The Hand of Chaos',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (2): Your enemy may pay 3 spell points. If they do not, when this combat ends the result is a slaughter.</p>',
		releases: {
			LC: 77
		},
		faq: [3]
	},
	{
		id: 'LC78',
		name: 'The Judgement of Sigmar',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit one of your units: After your enemy retreats, remove all units in play from the game.</p>',
		releases: {
			LC: 78
		},
		faq: []
	},
	{
		id: 'WA261',
		name: 'The Triumph of Huss',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to its "<b>Victory</b>." If the unit has a "<b>Victory</b>" penalty this card has no effect.</p>',
		releases: {
			LC: 79,
			WA: 261
		},
		faq: []
	},
	{
		id: 'WA265',
		name: 'To Our Last Man',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your unit wins a follow-up combat, you make a rout check against the enemy unit. Only playable if you have fewer units in play than your opponent. Only playable once per command.</p>',
		releases: {
			LC: 80,
			WA: 265
		},
		faq: [133]
	},
	{
		id: 'LC81',
		name: 'Unexpected Assault',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: At the end of the combat, if you rout the enemy unit, target another enemy unit with a gold cost less than the routed unit's gold cost. The target unit is destroyed. This unit may not make a follow-up attack.</p>",
		releases: {
			LC: 81
		},
		faq: [97]
	},
	{
		id: 'LC82',
		name: 'Victory!',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a combat, attach this card to that unit. While attached, that unit gets "<b>Victory</b>: +1".</p>',
		releases: {
			LC: 82
		},
		faq: [4]
	},
	{
		id: 'LC83',
		name: 'Leave Nothing Alive',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This cavalry unit gets +4 strength. Only playable if you have ready flyer unit in play. If you lose this <span class="errata">combat</span> commit one of your flyer units.</p>',
		releases: {
			LC: 83
		},
		errata: true,
		faq: []
	},
	{
		id: 'LC84',
		name: 'Banner of Fortitude',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Destroy this card: After this unit wins a combat, return one of your action cards played during that combat to your hand.</p>',
		releases: {
			LC: 84
		},
		faq: [4]
	},
	{
		id: 'WA282',
		name: 'Cache of Scrolls',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>This unit gets "<b>Wizard</b>: 1".</p>',
		releases: {
			LC: 85,
			WA: 282
		},
		faq: [151]
	},
	{
		id: 'LC86',
		name: 'Lucas Volkmann, Middenheim Spy',
		cost: 2,
		tacticPoints: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Target a card with a combat tactic in your opponent's discard pile (army or action). Play that ability, paying all costs. Your enemy may then choose to remove that card from the game.</p>",
		releases: {
			LC: 86
		},
		faq: [22, 68]
	},
	{
		id: 'WA287',
		name: 'Maximillion Gluttonfist',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: This unit attacks a committed unit with a printed positive "<b>Victory</b>" bonus. The loser of this combat is destroyed. You may play this ability while this unit is committed.</p>',
		releases: {
			LC: 87,
			WA: 287
		},
		faq: [253, 66]
	},
	{
		id: 'WA293',
		name: 'Ward of Wisdom',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Name two action cards. The named cards may not be played during this combat.</p><p><b>Combat Tactic</b>: Choose and reveal a random card in your enemy's hand. Cards of that name may not be played during this combat.</p>",
		releases: {
			LC: 88,
			WA: 293
		},
		faq: [184]
	},
	{
		id: 'LC89',
		name: 'Brotherhood of Grimnir',
		cost: 4,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Victory</b>: +1</p><p>At the end of the tactics phase, raise or lower this unit's strength to equal that of the opposing unit.</p><p><b>Combat Tactic</b>: If this combat ends in a slaughter, this unit wins instead. This unit may not make a follow-up attack.</p>",
		releases: {
			LC: 89
		},
		faq: [196, 247, 45, 255]
	},
	{
		id: 'LC90',
		name: "Grimjaw's Hammers",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit this unit: When one of your Dwarf units declares an attack, the enemy unit may not make a combat roll at the end of the combat.</p>',
		releases: {
			LC: 90
		},
		faq: [194, 236]
	},
	{
		id: 'LC91',
		name: 'Guildmaster Burlock Damminson',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Support Tactic</b>: Play a support tactic on one of your committed War Machines paying all costs.</p><p><b>Support Tactic</b>: Your War Machine unit gets +2 strength and +2 tactic points.</p>',
		releases: {
			LC: 91
		},
		faq: []
	},
	{
		id: 'LC92',
		name: "Ironbrow's Digger Company",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit this unit: After an enemy unit is destroyed in combat, the enemy unit and all attached cards are removed from the game.</p>',
		releases: {
			LC: 92
		},
		faq: [58]
	},
	{
		id: 'LC93',
		name: "Ironfist's Disciples",
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: This unit gets +X strength vs. monster units. X equals the enemy unit's gold cost.</p>",
		releases: {
			LC: 93
		},
		faq: [97]
	},
	{
		id: 'LC94',
		name: "Ironfist's Doomseekers",
		cost: 5,
		strength: 3,
		tacticPoints: 3,
		leadership: 5,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p>This unit's leadership may not be reduced.</p><p><b>Combat Tactic</b>: This unit gets +X strength. X equals the number of your enemy's infantry units.</p>",
		releases: {
			LC: 94
		},
		faq: []
	},
	{
		id: 'WA311',
		name: "Makaisson's Belly of Fire",
		cost: 3,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 9</p><p><b>Combat Tactic</b>: If this unit is destroyed in a slaughter, your enemy must destroy another one of their units.</p>',
		releases: {
			LC: 95,
			WA: 311
		},
		faq: []
	},
	{
		id: 'WA312',
		name: "Malakai Makaisson's Goblin-Hewer",
		cost: 4,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After this unit destroys a unit during a ranged attack, your enemy must destroy another of their units.</p>',
		releases: {
			LC: 96,
			WA: 312
		},
		faq: [46, 234]
	},
	{
		id: 'LC97',
		name: 'Ambassador Kasper Von Velten',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Once per battle, discard the top 3 cards of your army deck. If one of those cards is a Kislev unit, you may immediately destroy one of your other ready units in your army and replace it with that Kislev unit.</p>',
		releases: {
			LC: 97
		},
		faq: [274, 133]
	},
	{
		id: 'LC98',
		name: 'Boris Todbringer',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Command</b>: If this unit passes a leadership test, rally this unit. Your next command may not be an attack. If your enemy passes as their next command, the battle ends immediately. This ability may be played while committed and only once per battle.</p>',
		releases: {
			LC: 98
		},
		faq: [133]
	},
	{
		id: 'LC99',
		name: "Bremen's Knights Panther",
		cost: 4,
		strength: 2,
		tacticPoints: 6,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the number of your infantry nuits in the battle line. Only playable while attacking or defending from the battle line.</p>',
		releases: {
			LC: 99
		},
		faq: [147]
	},
	{
		id: 'LC100',
		name: 'Emperor Karl Franz',
		cost: 6,
		strength: 4,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Support WarCry</b>: Your Empire unit gets +3 leadership.</p><p><b>Reaction</b>: After mustering a unit, instead of drawing a card from your army deck, add one unit card from your army discard pile to your hand.</p>',
		releases: {
			LC: 100
		},
		faq: []
	},
	{
		id: 'WA332',
		name: "Heralds of Sigmar's Blood",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Commit or destroy this unit: After an enemy unit routs one of your units with a card effect, cancel that follow-up attack. You may play this ability while committed.</p>',
		releases: {
			LC: 101,
			WA: 332
		},
		faq: []
	},
	{
		id: 'WA334',
		name: 'Kirenwulf Jasenland',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b> Discard 1 card: After your enemy plays a <b>Reaction</b>, negate it's effects.</p>",
		releases: {
			LC: 102,
			WA: 334
		},
		banned: true,
		faq: [226, 159]
	},
	{
		id: 'WA337',
		name: "Leitdorf's Blood-Oathed",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Reaction</b>: After an enemy's card effect forces you to discard, roll. If the roll is a 3 or more, draw 2 cards.</p>",
		releases: {
			LC: 103,
			WA: 337
		},
		faq: [125, 252]
	},
	{
		id: 'WA339',
		name: 'Middenland Battalion',
		cost: 4,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not declare an attack.</p><p>This unit may block infantry.</p>',
		releases: {
			LC: 104,
			WA: 339
		},
		faq: [194, 140]
	},
	{
		id: 'LC105',
		name: 'Rein Volkhard',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b> Commit one of your Empire units: This unit gets a strength bonus equal to the committed unit's strength. This combat tactic may be played any number of times.</p>",
		releases: {
			LC: 105
		},
		faq: [95]
	},
	{
		id: 'WA343',
		name: "Piotr's Gryphon Legion",
		cost: 4,
		strength: 4,
		tacticPoints: 0,
		leadership: 3,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +5 tactic points.</p>',
		releases: {
			LC: 106,
			WA: 343
		},
		faq: []
	},
	{
		id: 'LC107',
		name: 'Swords of the Reiksguard',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: When one of your units begins a combat with a blocking unit, exchange this unit with your unit in combat.</p>',
		releases: {
			LC: 107
		},
		faq: [141, 260, 261]
	},
	{
		id: 'WA345',
		name: 'The Black Raiders of Middenland',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 5,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Once per battle, after this unit wins a combat, roll. If the roll is equal to or less than the number of enemy units in play you may attempt to rout the enemy unit.</p>',
		releases: {
			LC: 108,
			WA: 345
		},
		faq: [195, 145, 148, 133]
	},
	{
		id: 'LC109',
		name: 'Ambassador of the Empire',
		cost: 2,
		strength: 1,
		unique: true,
		keywords: ['Character', 'Empire'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>May only be attached to an Empire or Kislev unit.</p><p><b>Reaction</b>: After a command has concluded in which one of your Empire or Kislev units was destroyed in a combat, this unit may immediately declare an attack.</p>',
		releases: {
			LC: 109
		},
		faq: [194]
	},
	{
		id: 'LC110',
		name: 'Ludwig Scharzelm',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		unique: true,
		keywords: ['Character', 'Empire'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>May only be attached to an Empire unit.</p><p><b>Combat Tactic</b>: If you destroy the enemy unit in combat, the enemy unit and all attached cards are removed from the game.</p>',
		releases: {
			LC: 110
		},
		faq: []
	},
	{
		id: 'WA357',
		name: 'Archers of the Weeping Skies',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 5</p><p><b>Command</b> Discard 2 cards: This unit declares a ranged attack. You may play this ability while this unit is committed.</p>',
		releases: {
			LC: 111,
			WA: 357
		},
		faq: []
	},
	{
		id: 'WA358',
		name: "Aveldan's Sea Rangers",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Ranged Attack</b>: 4</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. Dark Elf units.</p>',
		releases: {
			LC: 112,
			WA: 358
		},
		faq: []
	},
	{
		id: 'WA362',
		name: "Elduranel's Brilliant Lancers",
		cost: 5,
		strength: 5,
		tacticPoints: 6,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After this unit rolls a 1 for it's combat roll, that roll gets +5.</p>",
		releases: {
			LC: 113,
			WA: 362
		},
		faq: []
	},
	{
		id: 'WA364',
		name: "Glory's Fading",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: When this unit blocks an attack, change the combat to a ranged attack with this unit as the attacker. If you lose the combat, this unit is destroyed and the enemy unit may make a rout check.</p>',
		releases: {
			LC: 114,
			WA: 364
		},
		faq: [211, 66]
	},
	{
		id: 'LC115',
		name: "Indomril's Sea Rangers",
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Rout the enemy unit if you win this combat. Only playable while the enemy unit is committed.</p>',
		releases: {
			LC: 115
		},
		faq: []
	},
	{
		id: 'WA368',
		name: "Lindanel's Seeking Blades",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 1</p><p><b>Reaction</b>: After this unit is mustered, destroy an enemy unit with "<b>Scout</b>". Your enemy gets an amount of gold equal to the destroyed unit\'s gold cost plus the cost of any attachments on the destroyed unit. Your enemy may continue to muster units.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. "<b>Scout</b>" units.</p>',
		releases: {
			LC: 116,
			WA: 368
		},
		faq: []
	},
	{
		id: 'LC117',
		name: "Sorrow's Song",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['High Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 5</p><p><b>Support Tactic</b> Commit this unit: The enemy unit gets -2 strength and -1 tactic point. If the enemy unit is a monster, it gets an additional -2 strength and -1 tactic point.</p>',
		releases: {
			LC: 117
		},
		faq: [168]
	},
	{
		id: 'LC118',
		name: 'Yrlis Bluestorm',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: When one of your other units begins a follow-up attack, exchange that unit with this unit.</p>',
		releases: {
			LC: 118
		},
		faq: [261]
	},
	{
		id: 'LC119',
		name: 'Anyone But Them!',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When this card enters play, choose an enemy unit. While this card is in play, that unit may not attack. If your enemy has no units in play that may attack, destroy this card.</p>',
		releases: {
			LC: 119
		},
		faq: [194, 32]
	},
	{
		id: 'LC120',
		name: 'Helm of Dominion',
		cost: 1,
		unique: true,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Destroy this card: Your unit gets +4 leadership and is immune to "<b>Terror</b>".</p>',
		releases: {
			LC: 120
		},
		faq: [268]
	},
	{
		id: 'CC1',
		name: "Be'lakor the Darkmaster",
		cost: 7,
		strength: 5,
		tacticPoints: 4,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 3</p><p><b>Wizard</b>: 3</p><p>All your infantry units get "<b>Victory</b>: +1."</p><p><b>Support Tactic</b>: Roll. Your Chaos unit gets "<b>Terror</b>: X", where X is equal to the roll.</p>',
		releases: {
			CC: 1
		},
		faq: [268]
	},
	{
		id: 'CE1',
		name: 'Garagrim Ironfist',
		cost: 6,
		strength: 7,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Victory</b>: -2</p><p><b>Support Tactic</b>: Your Dwarf unit gets +2 strength vs. monster and daemon units.</p><p><b>Combat Tactic</b>: This unit gets +2 strength if you have 3 or more cards in your hand.</p>',
		releases: {
			CC: 1
		},
		faq: []
	},
	{
		id: 'CC2',
		name: 'Vardek Crom, the Conqueror',
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may only be mustered in the first muster phase.</p><p><b>Support Tactic</b>: Your Chaos unit gets +2 strength if this is the second battle and +4 strength if this is the third battle.</p>',
		releases: {
			CC: 2
		},
		faq: [284]
	},
	{
		id: 'CE2',
		name: 'Thorek Ironbrow',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Runesmith</b>: 2 <i>(Counts as Wizard)</i></p><p><b>Spell Support Tactic</b> (1): Your Dwarf unit gets "<b>Terror</b>: 2".</p>',
		releases: {
			CC: 2
		},
		faq: [268]
	},
	{
		id: 'CC3',
		name: 'Rikhaine Blackblade',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Support Tactic</b>: Your unit with a printed gold cost of 5 or more gets +1 strength.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your other ready Dark Elf units with a printed gold cost of 5 or more.</p>',
		releases: {
			CC: 3
		},
		faq: []
	},
	{
		id: 'CE3',
		name: 'Luthor Huss',
		cost: 6,
		strength: 5,
		tacticPoints: 2,
		leadership: 5,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: If this unit passes a tactic point test, play a combat tactic from your hand paying no costs.</p><p><b>Reaction</b> Discard 1 card: After your enemy plays a Spell card or ability, negate it's effects if this unit passes a tactic point test.</p>",
		releases: {
			CC: 3
		},
		faq: [92, 159, 270, 68]
	},
	{
		id: 'CC4',
		name: 'Tullaris of Har Geneth',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>WarCry</b>: Choose a number and roll from your enemy's deck. If the roll matches the chosen number, destroy both units. If the roll does not match that number this unit gets -1 strength.</p>",
		releases: {
			CC: 4
		},
		faq: []
	},
	{
		id: 'CE4',
		name: 'Valten, Exalted of Sigmar',
		cost: 8,
		strength: 5,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Veteran</b>: Valten/Valten, Champion Of Sigmar</p><p>While this unit is ready your Empire units are immune to "<b>Terror</b>".</p><p><b>Reaction</b>: After you muster this unit, search your deck and discard pile for up to three attachments with a gold cost of 4 or less. Play those attachments on Valten, paying no costs.</p>',
		releases: {
			CC: 4
		},
		faq: [115]
	},
	{
		id: 'WA60',
		name: 'Borgut Facebeata',
		cost: 6,
		strength: 7,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Victory</b>: -2</p><p><b>Combat Tactic</b>: Place 1 card from either of your discard piles on top of your deck.</p>',
		releases: {
			CC: 5,
			WA: 60
		},
		faq: []
	},
	{
		id: 'CE5',
		name: 'Elduranel Aellian',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p><b>Command</b> Discard 1 card: You get a number of spell points equal to the die number on the discarded card. Only playable once per battle.</p>',
		releases: {
			CC: 5
		},
		faq: [133]
	},
	{
		id: 'CC6',
		name: 'Effigies of Gork and Mork',
		cost: 4,
		strength: 1,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 5</p><p>All of your Orc <b>Wizard</b>s get +1 to their "<b>Wizard</b>" level.</p><p><b>Support Tactic</b>: Your Orc unit gets "<b>Faith</b>: 3".</p>',
		releases: {
			CC: 6
		},
		faq: []
	},
	{
		id: 'CE6',
		name: 'Brothers of the Fallen Tree',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Combat Tactic</b>: Destroy the enemy unit. Only playable if you have already played a combat tactic or WarCry this combat, and only if your unit's strength is at least 3 more than the enemy's strength.</p>",
		releases: {
			CC: 6
		},
		faq: []
	},
	{
		id: 'SM1',
		name: "Archaon's Judgement",
		cost: 4,
		strength: 1,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Chaos Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: +2</p><p><b>Long Ranged Attack</b>: 7</p><p><b>Support Tactic</b>: Commit this unit. Play a WarCry or combat tactic card from your hand paying no costs.</p>',
		releases: {
			SM: 1
		},
		faq: [92]
	},
	{
		id: 'WA6',
		name: 'Bloodcrushers',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not be carried over to another battle.</p><p><b>Reaction</b>: After an enemy unit is destroyed in combat, this unit gets a +1 strength token.</p>',
		releases: {
			SM: 2,
			WA: 6
		},
		faq: [58]
	},
	{
		id: 'SM3',
		name: 'Changebringers',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Spell WarCry</b> (1): Commit the enemy unit unless it passes a tactic point test.</p>',
		releases: {
			SM: 3
		},
		faq: [270, 74]
	},
	{
		id: 'SM4',
		name: 'Chaos Furies',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. a unit with a support tactic ability.</p>',
		releases: {
			SM: 4
		},
		faq: []
	},
	{
		id: 'WA9',
		name: "D'aggorn the Exalted – Veteran of Chaos",
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Veteran</b>: D'aggorn The Exalted</p><p><b>Combat Tactic</b>: Look at your enemy's hand. Your enemy discards a card of your choice. This unit gets a strength bonus equal to the die on the discarded card.</p>",
		releases: {
			SM: 5,
			WA: 9
		},
		faq: []
	},
	{
		id: 'SM6',
		name: 'Bile Rot, Daemonic Herald',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>While this unit is ready, your other Daemon units get +1 strength and +1 tactic point.</p><p><b>Reaction</b>: After one of your other Daemon units is destroyed, draw 1 card.</p>',
		releases: {
			SM: 6
		},
		faq: []
	},
	{
		id: 'SM7',
		name: 'Flayerkin',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Commit the enemy unit if it is a fortification.</p>',
		releases: {
			SM: 7
		},
		faq: []
	},
	{
		id: 'WA16',
		name: 'Kordel Shogaar, Standard Bearer',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>When you muster this unit, search your army deck for a unique Chaos unit and add it to your hand.</p><p><b>Support WarCry</b>: Your Chaos cavalry unit gets +2 strength. If you lose this combat, commit this unit.</p>',
		releases: {
			SM: 8,
			WA: 16
		},
		faq: [115]
	},
	{
		id: 'SM9',
		name: 'Sorrowbringers',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may block cavalry.</p><p><b>Combat Tactic</b>: This unit gets +1 strength while blocking.</p>',
		releases: {
			SM: 9
		},
		faq: [141]
	},
	{
		id: 'SM10',
		name: 'Plagueriders',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: The enemy unit's tactic points are reduced to 0 unless it passes a strength test.</p>",
		releases: {
			SM: 10
		},
		faq: [270]
	},
	{
		id: 'SM11',
		name: 'Pleasureseekers',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: The enemy unit gets -2 leadership.</p><p><b>Combat Tactic</b>: This unit gets +2 tactic points. Only playable if the enemy unit has leadership 1 or less.</p>',
		releases: {
			SM: 11
		},
		faq: []
	},
	{
		id: 'WA21',
		name: 'Regiment of Khorne',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Place 1 card from your discard pile on top of your action deck.</p>',
		releases: {
			SM: 12,
			WA: 21
		},
		faq: []
	},
	{
		id: 'SM13',
		name: 'Siege Tower',
		cost: 2,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Chaos', 'Fortification'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not attack.</p><p>While this unit is ready in your battle line, your infantry may attack from the reserves.</p><p><b>Command</b> Commit one of your infantry units: Destroy a fortification unit.</p>',
		releases: {
			SM: 13
		},
		faq: [194, 140, 32]
	},
	{
		id: 'SM14',
		name: 'Siryk Silver Tongue',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Terror</b>: 2</p><p><b>Wizard</b>: 2</p><p><b>WarCry</b>: Reduce the enemy unit's strength to 0 unless it passes an unmodified leadership test.</p>",
		releases: {
			SM: 14
		},
		faq: [271]
	},
	{
		id: 'SM15',
		name: "Narsin's Black Guard",
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +2 strength and +2 leadership. Only playable while you are losing a combat.</p>',
		releases: {
			SM: 15
		},
		faq: [197]
	},
	{
		id: 'SM16',
		name: 'Death Dealer',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit routs an enemy unit choose the target of your follow-up attack.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. committed units.</p>',
		releases: {
			SM: 16
		},
		faq: [291]
	},
	{
		id: 'SM17',
		name: "Blacktear's Brigands",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Reveal the top card of your action deck. If that card is a playable combat tactic, play that card, paying all costs.</p>',
		releases: {
			SM: 17
		},
		faq: [68]
	},
	{
		id: 'SM18',
		name: 'The Serrated',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. High Elf units.</p>',
		releases: {
			SM: 18
		},
		faq: []
	},
	{
		id: 'SM19',
		name: 'Black Riders',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you rout an enemy unit, your enemy discards 1 card.</p>',
		releases: {
			SM: 19
		},
		faq: []
	},
	{
		id: 'SM20',
		name: 'The Gates of Karond Kar',
		cost: 3,
		strength: 4,
		tacticPoints: 0,
		leadership: 1,
		unique: true,
		keywords: ['Dark Elf', 'Fortification'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit may not attack.</p><p>Any ready infantry unit may block an attack targeting this unit.</p><p><b>Support Tactic</b>: If your Dark Elf unit wins this combat, you get +1 to your rout check.</p>',
		releases: {
			SM: 20
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'SM21',
		name: 'Coven of Sorrows',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After a tactic gives this unit a strength bonus, the enemy unit gets -1 strength.</p>',
		releases: {
			SM: 21
		},
		faq: []
	},
	{
		id: 'SM22',
		name: 'Loukhane Nightblade',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		unique: true,
		keywords: ['Character', 'Dark Elf'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Super rare',
		text: '<p>May only be attached to a Dark Elf unit.</p><p><b>Combat Tactic</b>: Destroy a character attachment on the enemy unit or this unit gets +2 strength vs. "Unique" units.</p>',
		releases: {
			SM: 22
		},
		faq: []
	},
	{
		id: 'SM23',
		name: 'Ardug the Unbreakable',
		cost: 5,
		strength: 6,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: -1</p><p>Enemy units destroyed in a combat vs. this unit must pass a leadership test or be removed from the game.</p>',
		releases: {
			SM: 23
		},
		faq: []
	},
	{
		id: 'WA61',
		name: "Facebeata's Big 'Uns",
		cost: 4,
		strength: 5,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Destroy one attachment on the enemy unit.</p>',
		releases: {
			SM: 24,
			WA: 61
		},
		faq: []
	},
	{
		id: 'WA62',
		name: "Facebeata's Dark Boyz",
		cost: 4,
		strength: 6,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -3</p><p><b>Reaction</b>: After one of your units is routed, if this unit passes a tactic point test the enemy unit may not make a follow-up attack.</p>',
		releases: {
			SM: 25,
			WA: 62
		},
		faq: []
	},
	{
		id: 'WA84',
		name: "Skinripper's Horde of Greenies",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>When you muster this unit you may search your deck for another copy of this card and add it to your hand.</p><p><b>Support Tactic</b> Commit: Your unit gets +1 strength for each of your other copies of this unit.</p>',
		releases: {
			SM: 26,
			WA: 84
		},
		faq: [115]
	},
	{
		id: 'SM27',
		name: "Facebeata's 'Ard House",
		cost: 2,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Orc', 'Fortification'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not attack.Any ready infantry unit may block an attack targeting this unit.</p><p>After you muster a unit, instead of drawing a card you may place this card into your hand from your discard pile.</p><p><b>Reaction</b>: After one of your Orc units is routed, draw 1 card.</p>',
		releases: {
			SM: 27
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'SM28',
		name: 'Farell Bloodfist',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1): After you play a <b>Spell Command</b>, draw 1 card.</p>',
		releases: {
			SM: 28
		},
		faq: []
	},
	{
		id: 'WA83',
		name: "Skinripper's Hoppin' Boyz",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>When attacking from the battle line, this unit may attack the enemy reserves.</p><p><b>Reaction</b>: After this unit declares an attack, choose 1 enemy unit, that unit may not block this attack.</p>',
		releases: {
			SM: 29,
			WA: 83
		},
		faq: []
	},
	{
		id: 'SM30',
		name: 'Taugrek the Throttler',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p>Any standard attached to this unit has it's gold cost reduced to 0.</p><p><b>Support Tactic</b>: Your unit gets +1 leadership. Only playable while this unit has a standard attachment.</p>",
		releases: {
			SM: 30
		},
		faq: [99, 101, 102]
	},
	{
		id: 'SM31',
		name: 'Blood for the Blood God',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your attacking Chaos unit gets +2 strength.</p>',
		releases: {
			SM: 31
		},
		faq: [142]
	},
	{
		id: 'SM32',
		name: 'Last Waaagh!',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Support WarCry</b> (1): Your Orc wizard unit or your unit with an Orc wizard attachment gets +1 strength for each of your opponents spell points.</p>',
		releases: {
			SM: 32
		},
		faq: []
	},
	{
		id: 'SM33',
		name: 'Standard of Darkness',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 strength vs. Grand Alliance units.</p><p><b>Reaction</b> Discard 1 card: After this unit loses a combat, move this attachment to one of your ready units.</p>',
		releases: {
			SM: 33
		},
		faq: []
	},
	{
		id: 'WA104',
		name: 'Watch Tower',
		cost: 2,
		strength: 2,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Fortification'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may not attack. Any ready infantry unit may block an attack targeting this unit.</p><p><b>Scout</b>: 2</p><p><b>Support Tactic</b>: Your unit gets +1 strength.</p>',
		releases: {
			SM: 34,
			WA: 104
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'SM35',
		name: 'Join the Fray',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: Choose one of your ready units. This unit gets a strength bonus equal to the chosen unit's strength and a tactic point bonus equal to the chosen unit's tactic points. If you lose the combat, destroy the chosen unit.</p>",
		releases: {
			SM: 35
		},
		faq: [51, 52]
	},
	{
		id: 'WA227',
		name: 'Reliable Support',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Play a support tactic on one of your ready units, paying all costs.</p>',
		releases: {
			SM: 36,
			WA: 227
		},
		faq: [47]
	},
	{
		id: 'SM37',
		name: 'Deadly Attrition',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Your opponent discards 2 cards.</p>',
		releases: {
			SM: 37
		},
		faq: []
	},
	{
		id: 'SM38',
		name: 'Awakening',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Rally one of your units with strength X or less. X equals the number of ready enemy units. X may not equal 0.</p>',
		releases: {
			SM: 38
		},
		faq: []
	},
	{
		id: 'SM39',
		name: 'Blind Fury',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Each player selects any number of cards from their hand and sets the rest aside. Only the selected cards may be played in this combat. Cards set aside may not be used until after this combat.</p><p>Any selected cards not played in this combat are discarded after the resolution. After this combat return the cards set aside to your hand.</p>',
		releases: {
			SM: 39
		},
		faq: [289, 189]
	},
	{
		id: 'SM40',
		name: 'Clinch',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: <span class="errata">You may</span> remove all attached cards and tokens <span class="errata">from both units</span> in this combat. <span class="errata">If you do,</span> return both units to their printed strength.</p>',
		releases: {
			SM: 40
		},
		errata: true,
		faq: [180, 13]
	},
	{
		id: 'SM41',
		name: 'Close Support',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Play a support tactic printed on one of your units in the battle line, paying all costs.</p>',
		releases: {
			SM: 41
		},
		faq: []
	},
	{
		id: 'WA129',
		name: 'Crush the Weak',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -2 strength and -2 tactic points. Only playable if the enemy units printed strength is 2 or less.</p>',
		releases: {
			SM: 42,
			WA: 129
		},
		faq: [168]
	},
	{
		id: 'SM43',
		name: 'Twister',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (2): At the end of the tactics phase, both players draw 1 card for each card they played.</p>',
		releases: {
			SM: 43
		},
		faq: []
	},
	{
		id: 'WA132',
		name: 'Danger to the Wind',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +1 strength. If you win this combat, attach this card to your unit.</p><p>While attached, the unit gets the ability WarCry: "Double all strength bonuses this unit receives. Remove all attached cards at the end of the combat."</p>',
		releases: {
			SM: 44,
			WA: 132
		},
		faq: [39, 41, 42, 43, 4, 142, 11, 13]
	},
	{
		id: 'SM45',
		name: 'Desperate Gamble',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Discard the top card of your action deck. If that card is a playable combat tactic, play that card paying no costs.</p>',
		releases: {
			SM: 45
		},
		faq: [92, 68]
	},
	{
		id: 'WA137',
		name: 'Destiny Now',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +6 strength. You do not make a combat roll.</p>',
		releases: {
			SM: 46,
			WA: 137
		},
		faq: [236]
	},
	{
		id: 'SM47',
		name: 'Destruction',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (X): Destroy X units with a strength of 1 or less.</p>',
		releases: {
			SM: 47
		},
		faq: [96]
	},
	{
		id: 'SM48',
		name: 'Dirty Fighting',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Any combat tactics played this combat ignore all restrictions regarding keywords and whether or not the units are attacking or defending.</p>',
		releases: {
			SM: 48
		},
		faq: [285]
	},
	{
		id: 'SM49',
		name: 'Divine Guidance',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: Before you take a test, your unit gets "<b>Faith</b>: 3" for the duration of the roll.</p>',
		releases: {
			SM: 49
		},
		faq: []
	},
	{
		id: 'SM50',
		name: 'Equipment Master',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Play the combat tactic printed on one of this unit's attachments, paying all costs.</p>",
		releases: {
			SM: 50
		},
		faq: []
	},
	{
		id: 'WA120',
		name: 'Calm Before the Storm',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your next combat tactic card is played at no cost.</p>',
		releases: {
			SM: 51,
			WA: 120
		},
		faq: [92]
	},
	{
		id: 'SM52',
		name: 'Fast Strike',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +1 strength.</p>',
		releases: {
			SM: 52
		},
		faq: [142]
	},
	{
		id: 'SM53',
		name: "Fate's Hand",
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After you make a combat roll, reroll.</p>',
		releases: {
			SM: 53
		},
		faq: [138]
	},
	{
		id: 'SM54',
		name: 'Another Day',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: At the end of the tactics phase return 1 card you played to your hand.</p>',
		releases: {
			SM: 54
		},
		faq: []
	},
	{
		id: 'WA158',
		name: 'For the Greater Glory',
		cost: 1,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. If this unit is attacking it gets an additional +2 strength.</p>',
		releases: {
			SM: 55,
			WA: 158
		},
		faq: [142]
	},
	{
		id: 'WA168',
		name: 'Hail of Fire',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Commit the enemy unit unless it passes a strength test. Only playable by a ranged attack unit.</p>',
		releases: {
			SM: 56,
			WA: 168
		},
		faq: [270, 74]
	},
	{
		id: 'SM57',
		name: 'Karma',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your enemy commits one of your units with a card or ability, commit one of their units.</p>',
		releases: {
			SM: 57
		},
		faq: []
	},
	{
		id: 'SM58',
		name: 'Last Chance',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you fail a test, reroll.</p>',
		releases: {
			SM: 58
		},
		faq: [138]
	},
	{
		id: 'WA180',
		name: 'Lasting Sting',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Your enemy\'s tactic cards cost 1 additional tactic point. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: Your enemy discards 1 random card."</p>',
		releases: {
			SM: 59,
			WA: 180
		},
		faq: [4, 11, 105]
	},
	{
		id: 'WA164',
		name: 'Great Leadership',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Attach one character attachment from your army discard pile to this unit. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: This unit gets +2 tactic points."</p>',
		releases: {
			SM: 60,
			WA: 164
		},
		faq: [274, 4, 11]
	},
	{
		id: 'WA187',
		name: 'Look to the Sky',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. flyers. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: Draw 1 card."</p>',
		releases: {
			SM: 61,
			WA: 187
		},
		faq: [4, 11]
	},
	{
		id: 'SM62',
		name: 'Battlefield Presence',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After you fail a rout check, reroll.</p>',
		releases: {
			SM: 62
		},
		faq: [138]
	},
	{
		id: 'SM63',
		name: 'Magnetism',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Commit the enemy unit if it has an attachment. Your opponent may destroy all attachments on the unit to negate this effect.</p>',
		releases: {
			SM: 63
		},
		faq: []
	},
	{
		id: 'SM64',
		name: 'Measure Your Opponent',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. If the enemy unit has a gold cost of 5 or more, draw 1 card.</p>',
		releases: {
			SM: 64
		},
		faq: [97]
	},
	{
		id: 'SM65',
		name: 'Phalanx',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +2 strength. Only playable vs. cavalry units. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: The enemy unit gets -2 tactic points."</p>',
		releases: {
			SM: 65
		},
		faq: [4, 11, 168]
	},
	{
		id: 'SM66',
		name: 'Purity of Arms',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Name one keyword other than infantry, cavalry or flyer. This unit gets +1 strength for each of your units with that keyword.</p>',
		releases: {
			SM: 66
		},
		faq: []
	},
	{
		id: 'SM67',
		name: 'Ration',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If you lose this combat return this card to your hand.</p>',
		releases: {
			SM: 67
		},
		faq: []
	},
	{
		id: 'SM68',
		name: 'Reinforcements!',
		die: 2,
		keywords: [],
		maxCopies: 1,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Each player chooses one unit in their discard pile with a gold cost of 5 or less and places the chosen unit in their reserves.</p><p><span class="errata">You can only include one copy of this card in your deck.</span></p>',
		releases: {
			SM: 68
		},
		errata: true,
		faq: [274, 190]
	},
	{
		id: 'SM69',
		name: 'Ready and Willing',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Reveal the top 3 cards of your action deck and place them in your discard pile. Add 1 combat tactic revealed this way to your hand.</p>',
		releases: {
			SM: 69
		},
		faq: [112]
	},
	{
		id: 'SM70',
		name: 'Resistance',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Reaction</b> Discard 1 card: After you make a combat roll, exchange your combat roll with your enemy's. Only playable while you have a ready High Elf unit.</p>",
		releases: {
			SM: 70
		},
		faq: []
	},
	{
		id: 'WA231',
		name: 'Rush the Flank',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each enemy unit with a support tactic ability.</p>',
		releases: {
			SM: 71,
			WA: 231
		},
		faq: []
	},
	{
		id: 'SM72',
		name: 'Rust',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (X): Destroy any number of attachment cards with a combined gold cost of X or less. Only playable while you have a ready <b>Wizard</b> unit.</p>',
		releases: {
			SM: 72
		},
		faq: [96, 149]
	},
	{
		id: 'SM73',
		name: 'Second Wind',
		cost: 3,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Rally this unit. Not playable during a ranged attack.</p>',
		releases: {
			SM: 73
		},
		faq: []
	},
	{
		id: 'SM74',
		name: 'Sink Hole',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: If your Dark Elf unit loses this combat by a difference of X or less, the result is a slaughter. X equals the number of Sink Hole cards in play.</p>',
		releases: {
			SM: 74
		},
		faq: []
	},
	{
		id: 'WA240',
		name: 'Siphon Strength',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (2): The enemy unit gets -2 strength. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: This unit gets +2 strength. Remove all of this unit\'s attached tactic cards at the end of the combat."</p>',
		releases: {
			SM: 75,
			WA: 240
		},
		faq: [4, 11]
	},
	{
		id: 'SM76',
		name: "Spy's Lament",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Command</b>: Look at your enemy's hand. Your enemy discards a card of your choice.</p>",
		releases: {
			SM: 76
		},
		faq: []
	},
	{
		id: 'SM77',
		name: 'Steel Rain',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to the number of ready ranged attack units you control.</p>',
		releases: {
			SM: 77
		},
		faq: []
	},
	{
		id: 'WA250',
		name: 'Stunning Blast',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (X): The enemy unit gets -X tactic points.</p>',
		releases: {
			SM: 78,
			WA: 250
		},
		faq: [95, 96, 168]
	},
	{
		id: 'SM79',
		name: 'Siege',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: If you win this combat, destroy one enemy fortification.</p>',
		releases: {
			SM: 79
		},
		faq: [4]
	},
	{
		id: 'WA253',
		name: 'Supporting Fire',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b> Commit one of your units: This unit gets a ranged attack bonus equal to the committed unit's ranged attack.</p>",
		releases: {
			SM: 80,
			WA: 253
		},
		faq: [95]
	},
	{
		id: 'WA260',
		name: 'The Time Is Not Right',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Discard 1 card: Draw 2 cards.</p><p><b>Spell Command</b> (1): All action cards attached to units are discarded.</p>',
		releases: {
			SM: 81,
			WA: 260
		},
		faq: []
	},
	{
		id: 'WA271',
		name: 'Unfortunate News',
		cost: 4,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: For this combat, your enemy subtracts their combat roll from their unit's strength instead of adding it.</p>",
		releases: {
			SM: 82,
			WA: 271
		},
		faq: [209]
	},
	{
		id: 'WA273',
		name: 'Veteran',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +1 strength. If you win this combat, attach this card to your unit.</p><p>While attached, this unit gets the ability "<b>Combat Tactic</b>: This unit gets +1 strength and "<b>Terror</b>: 1"."</p>',
		releases: {
			SM: 83,
			WA: 273
		},
		faq: [4, 268]
	},
	{
		id: 'WA280',
		name: "Winter's Chill",
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Commit one enemy unit unless your enemy discards 2 cards.</p>',
		releases: {
			SM: 84,
			WA: 280
		},
		faq: []
	},
	{
		id: 'WA286',
		name: 'Maps',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Command</b>: Place 1 card from your hand under this attachment face down. If this item is destroyed, all cards under it are discarded.</p><p><b>Combat Tactic</b>: Return all cards under this attachment to their owner's hands.</p>",
		releases: {
			SM: 85,
			WA: 286
		},
		faq: []
	},
	{
		id: 'SM86',
		name: 'The Fey Enchantress',
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Reaction</b>: When an enemy plays a card or ability to draw 1 or more cards, draw 2 cards. Not playable during the muster phase.</p>',
		releases: {
			SM: 86
		},
		faq: [135, 252]
	},
	{
		id: 'WA297',
		name: "Drong's Slayer Pirates",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Roll. If the roll is lower than the die on the discarded card, this unit gets +2 strength. This combat tactic may be played multiple times.</p>',
		releases: {
			SM: 87,
			WA: 297
		},
		faq: [95]
	},
	{
		id: 'SM88',
		name: 'Gates of Karaz-a-Karak',
		cost: 4,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		unique: true,
		keywords: ['Dwarf', 'Fortification'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit may not attack. Any ready infantry unit may block an attack targeting this unit.</p><p><b>Victory</b>: +2</p><p><b>Support Tactic</b>: Your Dwarf unit gets +1 strength.</p>',
		releases: {
			SM: 88
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'WA305',
		name: "Grimjaw's Grey Veterans",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may not make a follow-up attack.</p><p><b>Reaction</b> Discard 1 card: After you win a combat by 4 or more, return this unit to the battle line ready.</p>',
		releases: {
			SM: 89,
			WA: 305
		},
		faq: [60, 249]
	},
	{
		id: 'WA318',
		name: "Thunderhead's Air Cavalry",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +1</p><p><b>Support Tactic</b> Discard 1 card: The enemy unit gets -2 tactic points.</p>',
		releases: {
			SM: 90,
			WA: 318
		},
		faq: [168]
	},
	{
		id: 'SM91',
		name: "Grimjaw's Personal Bodyguard",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Choose one activated ability on the enemy unit. Your enemy may not play that ability.</p>',
		releases: {
			SM: 91
		},
		faq: []
	},
	{
		id: 'SM92',
		name: "Grimjaw's Excavators",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support WarCry</b>: Your enemy may not play Support tactics.</p>',
		releases: {
			SM: 92
		},
		faq: []
	},
	{
		id: 'WA315',
		name: 'Runesmith Morangrin',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p><b>Spell Reaction</b> (2): Before you make a rout check, that roll is 4 (no roll necessary).</p>',
		releases: {
			SM: 93,
			WA: 315
		},
		faq: [237]
	},
	{
		id: 'SM94',
		name: 'The Spirit of Grungni',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: +2</p><p><b>Support WarCry</b>: Roll. If the roll is odd, your enemy may not play combat tactics from their hand with an odd die number. If the roll is even, your enemy may not play combat tactics from their hand with an even die number.</p>',
		releases: {
			SM: 94
		},
		faq: []
	},
	{
		id: 'SM95',
		name: 'Prophets of Doom',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>If you lost the previous battle, this unit\'s gold cost is reduced by 1.</p><p><b>Command</b>: This unit declares an attack and gets the ability "<b>Reaction</b>: If this unit wins the combat , the result is a slaughter". These abilities may only be played while this unit is committed.</p>',
		releases: {
			SM: 95
		},
		faq: [99, 101]
	},
	{
		id: 'SM96',
		name: 'The Great Cannon of Middenheim',
		cost: 4,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Empire', 'Fortification'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit may not attack.</p><p><b>Command</b> Commit this unit and discard X cards: Destroy 1 enemy unit with strength X or less. Only playable while you have a ready infantry unit.</p>',
		releases: {
			SM: 96
		},
		faq: [194]
	},
	{
		id: 'SM97',
		name: 'Grand Theogonist Volkmar',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 2,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Reaction</b>: When one of your Empire units plays a combat tactic card, reduce the tactic point cost by 1, to a minimum of 1.</p>',
		releases: {
			SM: 97
		},
		faq: []
	},
	{
		id: 'WA325',
		name: 'Black Hand Pistoliers',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Ranged Attack</b>: 4</p><p><b>Reaction</b>: After this unit gets a ranged attack bonus, increase this unit's strength by the same amount.</p>",
		releases: {
			SM: 98,
			WA: 325
		},
		faq: []
	},
	{
		id: 'WA323',
		name: "Ar-Ulric's Teutogen Guard",
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 1</p><p><b>Support Tactic</b>: Your Empire unit gets +2 strength. Only playable if the enemy printed leadership of 2 or less.</p>',
		releases: {
			SM: 99,
			WA: 323
		},
		faq: []
	},
	{
		id: 'SM100',
		name: 'Hunt Master Ethlich',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After this unit destroys an enemy unit in combat, make an immediate follow-up attack into another unit with the same name.</p>',
		releases: {
			SM: 100
		},
		faq: []
	},
	{
		id: 'SM101',
		name: 'Knights of Twin Tailed Comet',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If you win this combat, rout the enemy unit. Only playable while defending.</p>',
		releases: {
			SM: 101
		},
		faq: [195, 145, 148]
	},
	{
		id: 'SM102',
		name: "Jasenland's Imperial Defenders",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Attach this unit to your unit. While attached your unit gets +1 strength, +1 Tactic points, and gets the ability "<b>Support Tactic</b> Discard 1 card: Return Jasenland\'s Imperial Defenders to your battle line ready. You may use this ability while committed."</p>',
		releases: {
			SM: 102
		},
		faq: [85, 17]
	},
	{
		id: 'WA333',
		name: 'High Priest Udo Latnehr',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Faith</b>: 1</p><p><b>Combat Tactic</b>: If this unit passes a strength test, draw 1 card.</p>',
		releases: {
			SM: 103,
			WA: 333
		},
		faq: [270]
	},
	{
		id: 'SM104',
		name: 'Senechal Valdric Gathowe',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Play a WarCry card from your hand paying all costs.</p>',
		releases: {
			SM: 104
		},
		faq: []
	},
	{
		id: 'SM105',
		name: 'Vorn Thugenheim, Standard Bearer',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: If your combat roll is 2 or less, that roll gets +2.</p>',
		releases: {
			SM: 105
		},
		faq: []
	},
	{
		id: 'SM106',
		name: 'Warriors of Ulfric',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each of your committed units.</p>',
		releases: {
			SM: 106
		},
		faq: []
	},
	{
		id: 'WA351',
		name: 'Wolf Kin Skirmishers',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Discard 1 card: When choosing the target of a follow-up attack, you may choose one of your committed units.</p>',
		releases: {
			SM: 107,
			WA: 351
		},
		faq: []
	},
	{
		id: 'WA356',
		name: 'Archers of Nightfall',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Support Tactic</b>: Your unit gets +1 strength vs. cavalry units.</p>',
		releases: {
			SM: 108,
			WA: 356
		},
		faq: [4]
	},
	{
		id: 'SM109',
		name: 'Vanguard of the Silver Lord',
		cost: 5,
		strength: 2,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: +4</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your spell points. Only playable if you have Teclis, High Loremaster inplay.</p>',
		releases: {
			SM: 109
		},
		faq: []
	},
	{
		id: 'SM110',
		name: 'Riders of the Golden Star',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. cavalry units.</p>',
		releases: {
			SM: 110
		},
		faq: []
	},
	{
		id: 'WA372',
		name: 'The Fair Maiden of Ulthuan',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Command</b> (1): Destroy an enemy attachment. Only playable while this unit is in the battle line.</p>',
		releases: {
			SM: 111,
			WA: 372
		},
		faq: []
	},
	{
		id: 'SM112',
		name: 'Sea Guard of the Northern Ports',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. flyer units.</p>',
		releases: {
			SM: 112
		},
		faq: []
	},
	{
		id: 'WA371',
		name: 'Spearmen of the Golden Star',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your defending infantry unit gets +2 strength. If you lose this combat, commit this unit.</p>',
		releases: {
			SM: 113,
			WA: 371
		},
		faq: []
	},
	{
		id: 'SM114',
		name: 'Sword Maidens of Hoeth',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this unit passes a leadership test, draw 1 card.</p>',
		releases: {
			SM: 114
		},
		faq: []
	},
	{
		id: 'SM115',
		name: 'Ward Tower',
		cost: 2,
		strength: 3,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['High Elf', 'Fortification'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not attack. Any ready infantry unit may block an attack targeting this unit.</p><p>While ready, all units with the keyword Monster or Daemon have -1 strength.</p>',
		releases: {
			SM: 115
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'SM116',
		name: 'Defend the Walls',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your defending Empire unit gets +2 strength.</p>',
		releases: {
			SM: 116
		},
		faq: []
	},
	{
		id: 'SM117',
		name: 'Nerves of Steel',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Put a "<b>Victory</b>: +1" token on your Dwarf unit.</p>',
		releases: {
			SM: 117
		},
		faq: []
	},
	{
		id: 'SM118',
		name: 'For the Empire!',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: The enemy unit may not play WarCry cards or abilities.</p>',
		releases: {
			SM: 118
		},
		faq: [118]
	},
	{
		id: 'SM119',
		name: 'Stand Your Ground',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +3 strength vs. cavalry units.</p>',
		releases: {
			SM: 119
		},
		faq: []
	},
	{
		id: 'SM120',
		name: 'Standard of Light',
		cost: 1,
		unique: true,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 strength vs. Hordes of Darkness units.</p><p><b>Reaction</b> Discard 1 card: After this unit loses a combat, move this attachment to one of your ready units.</p>',
		releases: {
			SM: 120
		},
		faq: []
	},
	{
		id: 'WA7',
		name: 'Bull Lords of Pain',
		cost: 4,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		keywords: ['Chaos', 'Beastmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -2</p><p><b>Terror</b>: 3</p><p>This unit may not make follow-up attacks.</p><p><b>WarCry</b>: This unit gets +3 strength and +3 tactic points. Only playable while attacking.</p>',
		releases: {
			HW: 1,
			WA: 7
		},
		faq: []
	},
	{
		id: 'WA17',
		name: 'Korvin, Champion of Khorne',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Harbinger', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Korvin The Sentinel</p><p><b>Combat Tactic</b>: You lose all of your spell points.</p><p><b>Combat Tactic</b>: Your enemy may choose to lose any number of their spell points. This unit gets +1 strength for each spell point that player has remaining.</p>',
		releases: {
			HW: 2,
			WA: 17
		},
		faq: []
	},
	{
		id: 'HW3',
		name: "Korvin's Raging Centigors",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Chaos', 'Beastmen', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units wins a combat, move this unit from the reserves to the battle line.</p>',
		releases: {
			HW: 3
		},
		faq: [4]
	},
	{
		id: 'HW4',
		name: 'Pahadiel, the Mammoth Drawn Fortress',
		cost: 7,
		strength: 6,
		tacticPoints: 5,
		leadership: 6,
		keywords: ['Chaos', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +2</p><p>This unit may not block.</p><p><b>Reaction</b>: If you commit an enemy unit with a ranged attack and he combat was won by a difference of 2 or more, destroy that unit.</p>',
		releases: {
			HW: 4
		},
		faq: [249]
	},
	{
		id: 'HW5',
		name: 'Servants of Itmon',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Chaos', 'Beastmen', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Reaction</b>: After this unit wins a combat, move an enemy unit from the battle line to the reserves.</p>',
		releases: {
			HW: 5
		},
		faq: [4]
	},
	{
		id: 'HW6',
		name: 'Urmas, Champion of the Khorngor',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Beastmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Victory</b>: -1</p><p><b>Reaction</b> Commit this unit: Instead of mustering a unit or attachment, your enemy must commit a number of their units with a total gold cost equal to or greater than this unit's gold cost.</p>",
		releases: {
			HW: 6
		},
		faq: [97]
	},
	{
		id: 'WA36',
		name: "Ha'asek, the Archon of Twilight",
		cost: 8,
		strength: 5,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Harbinger', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Reaction</b>: After this unit is mustered, take the top 2 cards from your army deck and put them face down adjacent to this unit. These cards are treated as Dark Elf flyer units with 2 strength, 3 tactic points, 2 leadership, and a gold cost of 0.</p><p>If Ha'asek leaves play, remove these units from play.</p>",
		releases: {
			HW: 7,
			WA: 36
		},
		faq: []
	},
	{
		id: 'HW8',
		name: "Ha'asek's Black Arrows",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Scout</b>: 1</p><p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: Once per battle, after your enemy has rallied an enemy unit with a gold cost equal to or greater than this unit's gold cost with a card effect, rally this unit as well. You may use this ability while committed.</p>",
		releases: {
			HW: 8
		},
		faq: [97, 133]
	},
	{
		id: 'WA37',
		name: "Ha'asek's Black Riders",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If your enemy has 4 or more cards in their hand, they discard 2 cards.</p><p><b>Combat Tactic</b>: If your enemy has no cards in their hand, this unit gets +3 strength and "<b>Terror</b>: 2".</p>',
		releases: {
			HW: 9,
			WA: 37
		},
		faq: [268]
	},
	{
		id: 'WA38',
		name: "Ha'asek's Bolt Slinger",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After this unit performs a ranged attack targeting a unit in the battle line, perform another ranged attack targeting a unit in the reserves.</p>',
		releases: {
			HW: 10,
			WA: 38
		},
		faq: [290]
	},
	{
		id: 'HW11',
		name: "Ha'asek's Devil Brides",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Command</b> Commit: Choose a flyer unit. While this unit remains in play and committed, after the chosen unit declares an attack, you may discard 1 card from your hand to prevent the attack and end the enemy's command.</p>",
		releases: {
			HW: 11
		},
		faq: [194]
	},
	{
		id: 'WA39',
		name: "Ha'asek's Hands of Retribution",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Command</b> Commit: If you win this battle, your enemy may only draw a hand of 4 cards to begin the next muster phase.</p>',
		releases: {
			HW: 12,
			WA: 39
		},
		faq: []
	},
	{
		id: 'WA40',
		name: "Ha'asek's Knights of Terror",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Support Tactic</b>: Your unit gets "<b>Terror</b>: 1".</p>',
		releases: {
			HW: 13,
			WA: 40
		},
		faq: [268]
	},
	{
		id: 'WA41',
		name: "Ha'asek's Standing Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If you rout the enemy unit, your enemy may not draw a card at the start of the follow-up attack.</p>',
		releases: {
			HW: 14,
			WA: 41
		},
		faq: []
	},
	{
		id: 'WA42',
		name: "Ha'asek's Personal Guard",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After this unit is mustered you may look at the top 5 cards of your action deck. You may choose to discard these cards or place them back on top of your deck in any order.</p>',
		releases: {
			HW: 15,
			WA: 42
		},
		faq: [112]
	},
	{
		id: 'HW16',
		name: "Ha'asek's Wild Ones",
		cost: 2,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Command</b>: Once per battle, rally an enemy unit.</p>',
		releases: {
			HW: 16
		},
		faq: [133]
	},
	{
		id: 'HW17',
		name: "Ha'asek's Witch Elves",
		cost: 4,
		strength: 5,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength for each unit it has routed this command.</p>',
		releases: {
			HW: 17
		},
		faq: []
	},
	{
		id: 'HW18',
		name: "Grubbi's Fast Fast Kart",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit is moved into a combat via an exchange with another of your units, this unit gets +3 strength.</p>',
		releases: {
			HW: 18
		},
		faq: []
	},
	{
		id: 'WA71',
		name: "Manmangler's Armoured Orcs",
		cost: 4,
		strength: 7,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -5</p>',
		releases: {
			HW: 19,
			WA: 71
		},
		faq: []
	},
	{
		id: 'HW20',
		name: "Manmangler's Big Chukka",
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Support WarCry</b>: Your enemy may not play support tactics printed on their war machine units.</p>',
		releases: {
			HW: 20
		},
		faq: []
	},
	{
		id: 'HW21',
		name: "Manmangler's Boarboyz",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Both units in the combat get a tactic point bonus equal to their printed tactic points.</p>',
		releases: {
			HW: 21
		},
		faq: []
	},
	{
		id: 'WA72',
		name: "Manmangler's Brute Boyz",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Play a combat tactic from your hand without cost. Only playable while you have an infantry unit in combat vs. a cavalry or flyer unit.</p>',
		releases: {
			HW: 22,
			WA: 72
		},
		faq: [68]
	},
	{
		id: 'WA73',
		name: "Manmangler's Flailing Gobbos",
		cost: 3,
		strength: 3,
		tacticPoints: 0,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Command</b>: If this unit passes a leadership test, it may immediately declare an attack against any unit in the enemy's reserves. This attack may not be blocked.</p><p><b>Combat Tactic</b>: Reveal the top card of your deck. Add that card's die to this unit's strength. If that card's die is 5 or more, destroy this unit after the combat.</p>",
		releases: {
			HW: 23,
			WA: 73
		},
		faq: []
	},
	{
		id: 'HW24',
		name: "Manmangler's Hench Boyz",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Commit: Instead of mustering a unit or attachment, you gain an additional 3 gold to muster.</p>',
		releases: {
			HW: 24
		},
		banned: true,
		faq: []
	},
	{
		id: 'WA74',
		name: "Manmangler's River Trolls",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 5,
		keywords: ['Orc', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. units with a gold cost less than this unit's gold cost.</p>",
		releases: {
			HW: 25,
			WA: 74
		},
		faq: [97]
	},
	{
		id: 'HW26',
		name: "Manmangler's Savage Killaz",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If this unit wins the combat and the enemy unit is committed, rout the enemy unit (no roll necessary).</p>',
		releases: {
			HW: 26
		},
		faq: []
	},
	{
		id: 'HW27',
		name: 'Nazall the Nasty',
		cost: 2,
		strength: 1,
		tacticPoints: 0,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (2): Your unit gets +2 tactic points.</p>',
		releases: {
			HW: 27
		},
		faq: []
	},
	{
		id: 'HW28',
		name: 'Urguck Manmangler, Orc Overlord',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Harbinger', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b> Discard a card: After you roll, add the card rolled to your hand.</p><p><b>Reaction</b>: Once per battle, after your enemy declares an attack, choose one of your committed units to block the attack. The chosen unit remains committed.</p>',
		releases: {
			HW: 28
		},
		faq: [208, 133]
	},
	{
		id: 'WA28',
		name: 'Anelia, Mistress of Slaanesh',
		cost: 2,
		strength: 1,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Discard a card from your hand: Your enemy discards a card. This unit gets a strength bonus equal to the difference of the lowest die from the highest die of the cards discarded.</p><p><b>Combat Tactic</b>: If this combat ends in a slaughter, this unit wins instead.</p>',
		releases: {
			HW: 29,
			WA: 28
		},
		faq: [196, 95, 247]
	},
	{
		id: 'HW30',
		name: 'A Dangerous Game',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Count the number of cards in your action deck. This unit gets +1 strength for every 5 cards in your action deck (not counting cards in your discard pile or removed from the game). Shuffle your action deck.</p>',
		releases: {
			HW: 30
		},
		faq: [114]
	},
	{
		id: 'HW31',
		name: 'A Deadly Game',
		cost: 4,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Count the number of cards in your action deck. This unit gets +2 strength for every 5 cards in your action deck (not counting cards in your discard pile or removed from the game). Shuffle your action deck.</p>',
		releases: {
			HW: 31
		},
		faq: [114]
	},
	{
		id: 'HW32',
		name: 'A Fortunate Wind',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>While one or more copies of this card are in play, after each command is completed each player discards 1 card then draws 1 card.</p>',
		releases: {
			HW: 32
		},
		faq: []
	},
	{
		id: 'HW33',
		name: 'A Shift in Morale',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Attach this card to one of your committed units: After one of your units destroys an enemy unit with a gold cost of 6 or more in combat, rally this unit. While attached, this unit may not make follow-up attacks.</p>',
		releases: {
			HW: 33
		},
		faq: [97]
	},
	{
		id: 'HW34',
		name: 'Act Foolish, Be Smart',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After an enemy unit gets a strength bonus of 5 or more, draw 2 cards. Your enemy discards 1 card.</p>',
		releases: {
			HW: 34
		},
		faq: [39, 228]
	},
	{
		id: 'HW35',
		name: 'Aerial Support',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +4 strength. Only playable if you have a ready flyer unit in play. If you lose this combat, commit one of your flyer units.</p>',
		releases: {
			HW: 35
		},
		faq: []
	},
	{
		id: 'WA107',
		name: 'Attack the Neighbor with Impunity',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>Any player may use this ability (but it may only be used once per combat):</p><p><b>Reaction</b>: After a combat ends, place a "<b>Victory</b>: -1" token on each surviving unit that was in the combat.</p>',
		releases: {
			HW: 36,
			WA: 107
		},
		faq: [133]
	},
	{
		id: 'HW37',
		name: 'Beat the Grass to Startle the Snakes',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If this unit has the highest "<b>Scout</b>" rating in this combat, the enemy unit gets -2 strength and -2 tactic points.</p>',
		releases: {
			HW: 37
		},
		faq: [168]
	},
	{
		id: 'WA119',
		name: 'Calculated Reserves',
		cost: 0,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p>Before the game begins, if this card is in your deck, you may reveal it to your enemy. If you do, take any 3 cards out of your deck and place them in a sideboard.</p><p>After you place any cards in your sideboard, you must still have at least 30 cards in your deck. Shuffle this card back into your deck.</p><p><b>Combat Tactic</b> Remove this card from the game: Choose one card from your sideboard and place it into your hand.</p>',
		releases: {
			HW: 38,
			WA: 119
		},
		faq: []
	},
	{
		id: 'HW39',
		name: 'Catch the Leader to Nab the Bandits',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units with at least one attachment get "<b>Victory</b>: -X". X equals the number of attachments attached to the unit.</p>',
		releases: {
			HW: 39
		},
		faq: []
	},
	{
		id: 'HW40',
		name: 'Charge Under a Blackened Sky',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p>This cavalry unit gets +4 strength. Only playable if you have a ready ranged attack unit. If you lose this combat commit one of your ranged attack units.</p>',
		releases: {
			HW: 40
		},
		faq: []
	},
	{
		id: 'HW41',
		name: 'Costly Tactics',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b> Remove the top 3 cards of your action deck from the game: This unit gets a +2 strength bonus.</p>',
		releases: {
			HW: 41
		},
		faq: []
	},
	{
		id: 'WA127',
		name: 'Counter Spell',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> Remove this card from the game (3): After the cost for any reaction is paid, negate the effects of that reaction.</p>',
		releases: {
			HW: 42,
			WA: 127
		},
		faq: [109]
	},
	{
		id: 'HW43',
		name: 'Counter-Attack',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this unit wins this combat the enemy unit is routed. Only playable during a follow-up attack as the defender. May not be played during a ranged attack.</p>',
		releases: {
			HW: 43
		},
		faq: []
	},
	{
		id: 'HW44',
		name: 'Dawn of a New Day',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Remove this card and all copies of this card in your deck and discard pile from the game: Rally all units in play.</p>',
		releases: {
			HW: 44
		},
		banned: true,
		faq: []
	},
	{
		id: 'HW45',
		name: 'Dawn Raid',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Commit one of your units: After one of your units enters a combat, no support tactics may be played for the remainder of this command. Your enemy may discard 3 cards to cancel this effect.</p>',
		releases: {
			HW: 45
		},
		faq: []
	},
	{
		id: 'HW46',
		name: 'Drive Them to the Skies',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This flyer unit gets +4 strength. Only playable if you have a ready infantry unit in play. If you lose this combat, commit one of your infantry units.</p>',
		releases: {
			HW: 46
		},
		faq: []
	},
	{
		id: 'HW47',
		name: 'Dwarven Victory',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p>You may not play this card if you have another copy of this card attached to one of your units. If this card is played without using it's WarCry ability, destroy it.</p><p><b>WarCry</b>: reduce this unit's printed strength to 0. If this unit wins the combat, attach this card to your unit. Not playable during a ranged attack.</p>",
		releases: {
			HW: 47
		},
		faq: [4]
	},
	{
		id: 'HW48',
		name: 'Elven Victory',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p>You may not play this card if you have another copy of this card attached to one of your units. If this card is played without using it's WarCry ability, destroy it.</p><p><b>WarCry</b>: This unit's text box is considered blank for this combat. This unit retains all keywords. Your combat roll for this combat is a 2 (no roll necessary). If this unit wins this combat attach this card to your unit.</p><p>Not playable during a ranged attack.</p>",
		releases: {
			HW: 48
		},
		faq: [4, 237]
	},
	{
		id: 'HW49',
		name: 'End Game Maneuvers',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gains +X strength. X equals 6 minus the number of cards in your enemy's hand (minimum 0).</p>",
		releases: {
			HW: 49
		},
		faq: []
	},
	{
		id: 'WA145',
		name: 'Enough!',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After an enemy unit has gained a strength bonus of 3 or more, attach this card to one of your units. This unit gets +2 strength while this card is attached.</p>',
		releases: {
			HW: 50,
			WA: 145
		},
		faq: [39]
	},
	{
		id: 'HW51',
		name: 'Face the Weary in a Condition of Ease',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets -2 strength. The enemy unit gets -3 leadership.</p>',
		releases: {
			HW: 51
		},
		faq: []
	},
	{
		id: 'HW52',
		name: 'Feint One Way, Strike Another',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p>This unit gets -1 strength and +4 tactic points.</p>',
		releases: {
			HW: 52
		},
		faq: []
	},
	{
		id: 'HW53',
		name: 'Final Wave',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>Only playable by either player once per battle.</p><p><b>Command</b>: Both you and your enemy may muster 7 gold from your army deck. This command is played as a normal muster phase, although no units in play may be rallied during this muster phase.</p>',
		releases: {
			HW: 53
		},
		banned: true,
		faq: []
	},
	{
		id: 'HW54',
		name: 'Force a Change in Fate',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (2): After a roll is made, change that roll to X. X equals 6 minus the original roll.</p>',
		releases: {
			HW: 54
		},
		faq: []
	},
	{
		id: 'WA159',
		name: 'Fortune Favours the Brave',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit with a gold cost of 6 or more gets a +2 strength bonus.</p>',
		releases: {
			HW: 55,
			WA: 159
		},
		faq: [97]
	},
	{
		id: 'HW56',
		name: 'Hide a Sword in a Smile',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Place a +1 strength token on one of your units and a "<b>Victory</b>: +1" token on an enemy unit of your enemy\'s choosing.</p>',
		releases: {
			HW: 56
		},
		errata: 'Strategy',
		faq: []
	},
	{
		id: 'HW57',
		name: 'High and Low Charge',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This flyer unit gets +4 strength. Only playable if you have a ready cavalry unit in play. If you lose this combat, commit one of your cavalry units.</p>',
		releases: {
			HW: 57
		},
		faq: []
	},
	{
		id: 'HW58',
		name: 'High Pressure Tactics',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your unit enters a combat, neither player draws any cards for starting a combat. Draw 1 card.</p>',
		releases: {
			HW: 58
		},
		faq: []
	},
	{
		id: 'WA175',
		name: 'Hold Nothing Back',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this unit has played a WarCry combat tactic in this combat (either from hand, an inherent ability or from an attached card), this unit gets +3 strength.</p>',
		releases: {
			HW: 59,
			WA: 175
		},
		faq: [13]
	},
	{
		id: 'HW60',
		name: 'Homeland Victories',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a combat as the defender, attach this card to that unit.</p><p>While attached, that unit gets "<b>Victory</b>: +3".</p><p>May not be played during a follow-up attack.</p>',
		releases: {
			HW: 60
		},
		faq: [4]
	},
	{
		id: 'HW61',
		name: 'Imperial Victory',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p>You may not play this card if you have another copy of this card attached to one of your units. If this card is played without using it's WarCry ability, destroy it.</p><p><b>WarCry</b>: Reduce this unit's printed tactic points to 0. If this unit wins the combat, attach this card to your unit. Not playable during a ranged attack.</p>",
		releases: {
			HW: 61
		},
		faq: [4]
	},
	{
		id: 'HW62',
		name: 'Kill with a Borrowed Sword',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This neutral unit gets +2 strength. Only playable if you have a Hordes of Darkness unit or Grand Alliance unit in play.</p>',
		releases: {
			HW: 62
		},
		faq: []
	},
	{
		id: 'HW63',
		name: 'Lock the Gates to Catch the Bandits',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: Before the first tactic is played this combat, switch the strength and tactic points values for each unit in the combat. Any bonuses or penalties to the strength or tactic points of the units will affect the new values.</p>',
		releases: {
			HW: 63
		},
		faq: []
	},
	{
		id: 'HW64',
		name: 'Magical Overload',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (X): Your enemy gains X spell points.</p>',
		releases: {
			HW: 64
		},
		faq: [96]
	},
	{
		id: 'HW65',
		name: 'Make Allies at a Distance, Attack Nearby',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +2 strength.If this combat ends in a slaughter, this unit wins instead. Only playable if you have more units in your army discard pile than your enemy.</p>',
		releases: {
			HW: 65
		},
		faq: [196, 247]
	},
	{
		id: 'HW66',
		name: 'Dogged Determination',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Draw 3 cards. Only playable if this is the only card in your hand.</p>',
		releases: {
			HW: 66
		},
		faq: []
	},
	{
		id: 'HW67',
		name: 'Offer a Brick in Exchange for Gold',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Your enemy discards 2 random cards and then draws 1 card. Draw 1 card.</p>',
		releases: {
			HW: 67
		},
		faq: []
	},
	{
		id: 'WA203',
		name: 'One Defeat Follows Another',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: "<p><b>Reaction</b>: After you win a combat, destroy a strategy card.</p><p><b>Reaction</b>: After you win a combat, place any one card in your enemy's action discard pile on top of their action deck.</p>",
		releases: {
			HW: 68,
			WA: 203
		},
		faq: [4]
	},
	{
		id: 'WA205',
		name: 'One Tree Falls for Another',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Attach this card to this unit. While attached this unit gets the ability "<b>Combat Tactic</b>: This unit gets +2 strength. Only playable during a follow-up attack." This card may not be played or attached during a follow-up attack.</p>',
		releases: {
			HW: 69,
			WA: 205
		},
		faq: []
	},
	{
		id: 'HW70',
		name: 'Path of the Arrow',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This flyer unit gets +4 strength. Only playable if you have a ready ranged attack unit. If you lose this combat commit one of your ranged attack units.</p>',
		releases: {
			HW: 70
		},
		faq: []
	},
	{
		id: 'WA212',
		name: "Pick a Fight in the Enemy's Home",
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>Neutral units may not attack or block while their controller has one or more ready Hordes of Darkness or Grand Alliance units.</p>',
		releases: {
			HW: 71,
			WA: 212
		},
		faq: [194, 140, 32]
	},
	{
		id: 'HW72',
		name: 'Point at One to Scold Another',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: If this unit wins the combat, the enemy unit is routed. Only playable during a follow-up attack where the previous unit was routed without a card effect.</p>',
		releases: {
			HW: 72
		},
		faq: []
	},
	{
		id: 'HW73',
		name: 'Rally Up',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Remove a card in your hand from the game: Choose 2 of your units. Make a leadership test for each of the chosen units with a -1 modifier to their leadership. If both units succeed, rally one of those units. Remove this card from the game.</p>',
		releases: {
			HW: 73
		},
		faq: []
	},
	{
		id: 'HW74',
		name: 'Replace Beams with Pillars',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>War machines have +1 strength while ready.</p><p>All infantry with 4 or more tactic points may attack and block as flyers.</p>',
		releases: {
			HW: 74
		},
		faq: [25]
	},
	{
		id: 'WA230',
		name: 'Rob a Burning House',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Command</b> Commit one of your units: Remove any number of attachments from your enemy's discard pile from the game.</p>",
		releases: {
			HW: 75,
			WA: 230
		},
		faq: []
	},
	{
		id: 'HW76',
		name: 'Run Far Away',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: Before the combat roll is made, your unit loses the combat and is routed. Return it to the battle line committed instead of destroying it. If your enemy makes a follow-up attack, the unit that is attacked gets +1 strength.</p>',
		releases: {
			HW: 76
		},
		faq: [60, 212, 231]
	},
	{
		id: 'HW77',
		name: 'Save Something for Later',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If this unit has a printed WarCry ability, this unit gets +X strength. X equals the number of your units in your army with a printed WarCry ability +2.</p>',
		releases: {
			HW: 77
		},
		faq: []
	},
	{
		id: 'WA235',
		name: 'Scheme with Beauties',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Command</b>: This card begins a combat between an enemy unit and this card. This card is considered an infantry unit with 2 strength, 4 tactic points, 1 leadership, and a gold cost of 0.</p><p>This unit may not rout enemy units, but may be routed and is discarded after the combat. If you lose this combat, the enemy unit returns to its reserves without committing, unless it chooses to follow-up.</p>',
		releases: {
			HW: 78,
			WA: 235
		},
		banned: true,
		faq: [27, 28, 132]
	},
	{
		id: 'HW79',
		name: 'Scheme with Double Agents',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Destroy any number of your attachments: Commit a unit with a gold cost of X or less. X equals the total gold cost of the destroyed attachments.</p>',
		releases: {
			HW: 79
		},
		faq: [97]
	},
	{
		id: 'WA236',
		name: 'Scheme with Self Inflicted Wounds',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b> Destroy one of your units not in this combat: This unit gets a strength bonus equal to the destroyed unit's strength.</p>",
		releases: {
			HW: 80,
			WA: 236
		},
		faq: [95]
	},
	{
		id: 'HW81',
		name: 'Take and Hold',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a combat as the attacker, attach this card to that unit. While attached, that unit gets "<b>Victory</b>: +3". Only playable during a follow-up attack.</p>',
		releases: {
			HW: 81
		},
		faq: [4]
	},
	{
		id: 'WA256',
		name: 'Take the Firewood from under the Pot',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units has destroyed a committed unit, your unit is returned to your battle line ready.</p>',
		releases: {
			HW: 82,
			WA: 256
		},
		faq: [60]
	},
	{
		id: 'HW83',
		name: 'The Fall of the Mighty',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units without <b>Victory</b>" wins a combat, attach this card to that unit. While attached that unit gets "<b>Victory</b>: +3." Only playable if the losing unit had a gold cost greater than your unit."</p>',
		releases: {
			HW: 83
		},
		faq: [4, 97]
	},
	{
		id: 'WA259',
		name: 'The Silver Serpent Sheds Its Skin',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After both players have passed their actions in the battle, declare an attack with one of your units. If this attacking unit is committed, the losing unit in this combat is destroyed.</p><p>Follow-up attacks may not be made though units may be routed.</p>',
		releases: {
			HW: 84,
			WA: 259
		},
		faq: [194]
	},
	{
		id: 'WA262',
		name: 'The Weak Fall, the Strong Stand',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Choose a unit with a strength of 0 (or less). That unit is destroyed.</p>',
		releases: {
			HW: 85,
			WA: 262
		},
		faq: []
	},
	{
		id: 'WA266',
		name: 'To the Bone',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: The loser of this combat is automatically routed (no roll necessary).</p><p><b>WarCry</b>: Both units in this combat get a strength bonus equal to their printed strength.</p>',
		releases: {
			HW: 86,
			WA: 266
		},
		faq: [195, 145, 148]
	},
	{
		id: 'HW87',
		name: 'Victory at Any Cost',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Destroy one of your ready units with Elven <b>Victory</b> attached, one of your ready units with Dwarven <b>Victory</b> attached, one of your ready units with Imperial <b>Victory</b> attached, and remove this card from the game</p><p>(the cards must be attached using their own text): You win this battle.</p>',
		releases: {
			HW: 87
		},
		faq: [107]
	},
	{
		id: 'HW88',
		name: 'Amulet of the Southern Hand',
		cost: 2,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your wizards plays a non-spell combat tactic action card in a combat or you play a command action card, you get 1 spell point.</p>',
		releases: {
			HW: 88
		},
		faq: []
	},
	{
		id: 'HW89',
		name: 'Banner of Warding',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After an enemy unit has rallied, put a "<b>Victory</b>: +1" token on this unit. You may use this ability while this unit is committed.</p>',
		releases: {
			HW: 89
		},
		faq: []
	},
	{
		id: 'HW90',
		name: 'Flying Mounts',
		cost: 2,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit has their "Cavalry" or "Infantry" keyword replaced with the keyword "Flyer".</p>',
		releases: {
			HW: 90
		},
		faq: []
	},
	{
		id: 'HW91',
		name: 'Standard of the Harbinger',
		cost: 1,
		unique: true,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>If attached to a Harbinger this card\'s gold cost is reduced by 1 (minimum 0).</p><p><b>Command</b>: Put a "<b>Victory</b>: +1" token on this unit. If your enemy passes their next command, the battle ends.</p>',
		releases: {
			HW: 91
		},
		faq: [99, 101, 102]
	},
	{
		id: 'WA295',
		name: 'Barak Grimjaw, Hammer of the Dwarfs',
		cost: 6,
		strength: 6,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Harbinger', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Barak Grimjaw</p><p>All of your other Dwarf units get "<b>Victory</b>: +1".</p><p><b>Reaction</b>: After this unit enters a combat, both players discard their hands and draw 4 cards from their deck.</p>',
		releases: {
			HW: 92,
			WA: 295
		},
		faq: []
	},
	{
		id: 'WA303',
		name: "Grimjaw's Dwarfs of Vigilance",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: When your enemy places any number of tokens on this card due to a card effect, place an equal number of "<b>Victory</b>: +1" tokens on this unit.</p>',
		releases: {
			HW: 93,
			WA: 303
		},
		faq: []
	},
	{
		id: 'HW94',
		name: "Grimjaw's Enchanted Bolt Thrower",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: This unit gets +2 strength and +2 <b>Ranged Attack</b>. If this unit loses this combat, your enemy gets 3 spell points.</p><p><b>Combat Tactic</b>: This unit gets +4 <b>Ranged Attack</b> vs. monster units.</p>',
		releases: {
			HW: 94
		},
		faq: []
	},
	{
		id: 'HW95',
		name: "Grimjaw's Honour Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>While you have one or more copies of this unit in play, your combat tactic action cards with a tactic point cost of 4 or more have their tactic point cost reduced by 1 when played by a Dwarf unit.</p>',
		releases: {
			HW: 95
		},
		faq: []
	},
	{
		id: 'HW96',
		name: "Grimjaw's Iron Lords",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit is immune to "<b>Terror</b>" and its leadership may not be reduced.</p><p><b>Reaction</b>: After your second unit has been routed this command, this unit becomes the defender of the next follow-up attack. You may use this ability while committed.</p>',
		releases: {
			HW: 96
		},
		faq: []
	},
	{
		id: 'HW97',
		name: "Grimjaw's Loners",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After another of your Dwarf units gets a strength bonus, that Dwarf unit gets +1 tactic points.</p>',
		releases: {
			HW: 97
		},
		faq: [35, 36, 41]
	},
	{
		id: 'WA306',
		name: "Grimjaw's Stouthearts",
		cost: 3,
		strength: 'X',
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p>This unit's strength is equal to half the number of your enemy's spell points (rounded up).</p>",
		releases: {
			HW: 98,
			WA: 306
		},
		faq: []
	},
	{
		id: 'WA307',
		name: "Grimjaw's Undying Slayers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Once per battle, this unit may block any attack. This ability may be used while this unit is committed.</p>',
		releases: {
			HW: 99,
			WA: 307
		},
		faq: [208, 133]
	},
	{
		id: 'HW100',
		name: "Grimjaw's Valorous Veterans",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Instead of mustering a unit or attachment, destroy one of your <span class="errata">other Dwarf</span> units. You gain additional gold to muster equal to the gold cost paid for the destroyed unit and its attachments. Only playable once per Muster Phase.</p>',
		releases: {
			HW: 100
		},
		errata: true,
		banned: true,
		faq: [133]
	},
	{
		id: 'WA308',
		name: "Grimjaw's Woodland Rangers",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 1</p><p>While this unit is ready, it may block any unit with less tactic points.</p>',
		releases: {
			HW: 101,
			WA: 308
		},
		faq: []
	},
	{
		id: 'WA329',
		name: "Gausser's Veterans",
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After an attack is declared against a unit in your reserves, this unit may block that attack.</p><p><b>Reaction</b>: After this unit wins a combat, make a leadership test. If successful this unit does not commit. Only playable while blocking.</p>',
		releases: {
			HW: 102,
			WA: 329
		},
		faq: [208, 4, 141]
	},
	{
		id: 'HW103',
		name: "Gausser's Hellblaster",
		cost: 4,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +2</p><p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: Once per battle, after this unit has won a ranged attack, immediately select a new target and perform another ranged attack.</p>',
		releases: {
			HW: 103
		},
		faq: [133]
	},
	{
		id: 'HW104',
		name: "Gausser's Young Guns",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p><b>Short Ranged Attack</b>: 7</p><p><b>Reaction</b>: After you have performed a command, move this unit from the reserves to the battle line or vice versa.</p>',
		releases: {
			HW: 104
		},
		faq: []
	},
	{
		id: 'WA338',
		name: 'Lifeguard of Frote',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 5,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +1</p><p><b>Reaction</b>: After this unit destroys a wizard unit in combat, you get 3 spell points.</p>',
		releases: {
			HW: 105,
			WA: 338
		},
		faq: [149]
	},
	{
		id: 'WA347',
		name: 'Theodric Gausser, Guardian of the Empire',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Empire', 'Harbinger', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Elector Count Theodric Gausser.</p><p><b>Reaction</b>: After this unit is mustered, name 2 different action cards. Search your deck and discard pile for 1 copy of each of the named cards. Then shuffle your deck and put those 2 cards on top of your deck in any order.</p>',
		releases: {
			HW: 106,
			WA: 347
		},
		faq: [114]
	},
	{
		id: 'HW107',
		name: 'Xavier, Transcriber of Wind',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b> Commit this unit: Instead of mustering a unit or attachment, your attachments have their gold cost reduced by 1 (minimum of 1) until the end of this muster phase.</p>',
		releases: {
			HW: 107
		},
		faq: [102]
	},
	{
		id: 'WA360',
		name: 'Bilgarim Whitestar, Elven Lord',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Harbinger', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 2</p><p>While this unit is in combat your spells cost 2 less spell points (minimum 0).</p><p>If this unit is in play at the end of the battle, you may choose to have any number of your strategy cards remain in play.</p>',
		releases: {
			HW: 108,
			WA: 360
		},
		faq: []
	},
	{
		id: 'WA375',
		name: "Whitestar's Archers of the White Pillar",
		cost: 3,
		strength: 0,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b> Discard a card from your hand: This unit gets +X <b>Ranged Attack</b>. X equals half the die of the discarded card (rounded up). You may play this ability any number of times per combat.</p>',
		releases: {
			HW: 109,
			WA: 375
		},
		faq: [95]
	},
	{
		id: 'WA376',
		name: "Whitestar's Coastal Guardians",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Place a +1 tactic point token on any unit or place a -1 tactic point token on any unit. If your enemy passes as their next command the battle ends.</p>',
		releases: {
			HW: 110,
			WA: 376
		},
		faq: [168]
	},
	{
		id: 'WA377',
		name: "Whitestar's Guardians",
		cost: 3,
		strength: 1,
		tacticPoints: 6,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>If you have a wizard in play when you start the battle you receive 1 extra spell point for the battle.</p><p><b>Combat Tactic</b>: You and your opponent each gain 2 spell points.</p><p><b>WarCry</b>: Put a strategy card into play.</p>',
		releases: {
			HW: 111,
			WA: 377
		},
		faq: [291]
	},
	{
		id: 'WA378',
		name: "Whitestar's Guardians of the Sky",
		cost: 3,
		strength: 0,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Commit: Remove your unit from the combat and place it in the same line as this unit. If the enemy unit passes a leadership test, that unit may make a follow-up attack following this combat.</p>',
		releases: {
			HW: 112,
			WA: 378
		},
		banned: true,
		faq: [144, 6, 7, 8]
	},
	{
		id: 'HW113',
		name: "Whitestar's Old Spears",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: When this unit enters a combat, the enemy unit gets -2 tactic points.</p>',
		releases: {
			HW: 113
		},
		faq: [168]
	},
	{
		id: 'HW114',
		name: "Whitestar's Order of the Black Rose",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b> Commit this unit: Instead of mustering a unit or attachment, name a unit or attachment and search your enemy's deck for that card and place all copies of that unit in your enemy's discard pile. Shuffle your enemy's deck.</p>",
		releases: {
			HW: 114
		},
		faq: [114]
	},
	{
		id: 'WA379',
		name: "Whitestar's Silverhelms",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After this unit wins a combat, search your discard pile for a strategy card and put it into play.</p>',
		releases: {
			HW: 115,
			WA: 379
		},
		faq: [4]
	},
	{
		id: 'WA380',
		name: "Whitestar's White Lions",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this unit is mustered, place the top two cards of your action deck under this unit face down (you may look at the cards).</p><p><b>Combat Tactic</b>: Put the facedown cards attached for this unit into your hand.</p>',
		releases: {
			HW: 116,
			WA: 380
		},
		faq: []
	},
	{
		id: 'HW117',
		name: "Whitestar's White Reavers",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: Once per muster phase, instead of mustering a unit or attachment, draw 2 cards from your army deck.</p>',
		releases: {
			HW: 117
		},
		faq: [133]
	},
	{
		id: 'HW118',
		name: "Whitestar's Youngheart Spearmen",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Commit: After an enemy unit has destroyed one of your units in an attack, place two -1 tactic point tokens on that unit.</p>',
		releases: {
			HW: 118
		},
		faq: [168]
	},
	{
		id: 'HW119',
		name: 'Doramin Gimragson',
		cost: 2,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p>While attached to Logrok Gimragson, this attachment's <b>Runesmith</b> rating is increased by 1.</p><p><b>Spell WarCry</b> (2): This unit gets a strength bonus equal to its tactic points.</p>",
		releases: {
			HW: 119
		},
		faq: []
	},
	{
		id: 'HW120',
		name: 'Otwin Salenholt',
		cost: 2,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Reaction</b>: When you play a spell action card, the spell point cost is reduced by 1 (minimum 1). If you have another ready Empire wizard, you may use this ability while this unit is committed.</p>',
		releases: {
			HW: 120
		},
		faq: []
	},
	{
		id: 'DH1',
		name: 'Black Hand of Death',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		text: "<p>All units have their leadership reduced by 1 (minimum 1).</p><p><b>Spell Command</b> Commit one of your Vampire Counts units (0): You gain a number of spell points equal to the committed unit's printed strength.</p>",
		releases: {
			DH: 1
		},
		faq: []
	},
	{
		id: 'DH2',
		name: 'Curse of the Immortal',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Spell WarCry</b> (0): You gain a number of spell points equal to this wizard unit's leadership plus it's <b>Wizard</b> rating. Remove this card from the game.</p>",
		releases: {
			DH: 2
		},
		faq: [149]
	},
	{
		id: 'WA89',
		name: 'Curse of Years',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): The enemy unit must make 3 leadership tests. For each failed test the unit gets -1 strength.</p>',
		releases: {
			DH: 3,
			WA: 89
		},
		faq: []
	},
	{
		id: 'WA90',
		name: "From Hell's Heart",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (1): This unit may not be routed unless the enemy unit has <b>Faith</b>.</p><p><b>Spell Combat Tactic</b> (0): Destroy 1 strategy card.</p>',
		releases: {
			DH: 4,
			WA: 90
		},
		faq: []
	},
	{
		id: 'WA91',
		name: 'Gaze of Nagash',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Command</b> (2): One of your ready wizard units gets "<b>Ranged Attack</b>: 6" and immediately performs a ranged attack. This wizard does not commit after the combat is completed if it wins the combat.</p>',
		releases: {
			DH: 5,
			WA: 91
		},
		faq: [4, 149]
	},
	{
		id: 'DH6',
		name: 'Hand of Dust',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): The enemy unit may only play 1 more tactic in this combat. You may not play any more combat or support tactics in this combat.</p>',
		releases: {
			DH: 6
		},
		faq: []
	},
	{
		id: 'WA92',
		name: 'Hellish Vigor',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell WarCry</b> (1): You may play any number of combat tactics before your enemy plays any more tactics.</p>',
		releases: {
			DH: 7,
			WA: 92
		},
		faq: [68]
	},
	{
		id: 'DH8',
		name: 'Invocation of Nehek',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (3): Choose a Vampire Counts or Khemri unit with a gold cost less than 4 in your discard pile and attach it to this unit. While attached this unit gets +X strength and "<b>Victory</b>: -X". X equals the attached units strength.</p>',
		releases: {
			DH: 8
		},
		faq: [106, 20]
	},
	{
		id: 'DH9',
		name: 'That Which Does Not Die',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Play a combat tactic on one of your other units in play with the same keyword as this unit.</p>',
		releases: {
			DH: 9
		},
		faq: [75]
	},
	{
		id: 'WA94',
		name: "Vanhel's Danse Macabre",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (0): Move one of your units from the reserve line to the battle line and declare an attack with that unit.</p>',
		releases: {
			DH: 10,
			WA: 94
		},
		faq: [194]
	},
	{
		id: 'DH14',
		name: 'The Carstein Ring',
		cost: 2,
		unique: true,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: "<p>May only be attached to a Vampire Counts unit.</p><p><b>Spell Reaction</b> (2): After this unit is destroyed, exchange this unit with another of your units. The other unit is destroyed instead. This unit takes on the status of the other unit (committed or ready).</p><p><b>Spell Command</b> (0): Gain 2 spell points. If your enemy's next command is a pass, the battle is over.</p>",
		releases: {
			DH: 14
		},
		faq: [21]
	},
	{
		id: 'DH17',
		name: 'Adolphus Krieger',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Vampire Counts', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p><b>Combat Tactic</b> Discard a spell card from your hand: Gain 2 spell points. You may play this ability any number of times per combat.</p><p><b>Spell Combat Tactic</b> (2): This unit gets +3 strength vs. units with a gold cost of 5 or more. You may play this ability any number of times per combat.</p>',
		releases: {
			DH: 17
		},
		faq: [97]
	},
	{
		id: 'DH18',
		name: 'Banshees of Nightfall',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 1</p><p><b>Command</b> Commit: Once per battle, all non-Hordes of Darkness units in a battleline must make a leadership and strength test. Any units failing one or more of the tests are committed. Only playable from the battleline.</p>',
		releases: {
			DH: 18
		},
		faq: [133]
	},
	{
		id: 'DH19',
		name: "Carstein's Black Hand",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Reaction</b>: After this unit routs an enemy unit, gain 2 spell points.</p><p><b>WarCry</b>: If the enemy unit has "<b>Faith</b>", for the duration of this combat, that unit does not have "<b>Faith</b>".</p>',
		releases: {
			DH: 19
		},
		faq: []
	},
	{
		id: 'DH20',
		name: "Carstein's Black Knights",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Vampire Counts', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. Grand Alliance units.</p><p><b>Reaction</b>: After this unit plays a WarCry, play another WarCry.</p>',
		releases: {
			DH: 20
		},
		faq: []
	},
	{
		id: 'DH21',
		name: "Carstein's Flesh Eaters",
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Reaction</b> Remove this unit from the game: After this unit is destroyed, you gain 3 spell points.</p><p><b>WarCry</b> Discard a card from your hand: Your enemy must discard a card from their hand. This unit gets a strength bonus equal to the die of your enemy's discarded card.</p>",
		releases: {
			DH: 21
		},
		faq: [225]
	},
	{
		id: 'DH22',
		name: "Carstein's Grave Guard",
		cost: 2,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>You may not muster this unit unless you have a wizard in play. If you ever do not have a wizard in play this unit is destroyed.</p>',
		releases: {
			DH: 22
		},
		faq: [277]
	},
	{
		id: 'DH23',
		name: "Carstein's Wights",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>Weapons with a gold cost of 2 or less attached to this unit have their gold cost reduced to 0.</p><p><b>WarCry</b>: this unit gets +2 strength vs. Grand Alliance units.</p>',
		releases: {
			DH: 23
		},
		faq: [99, 101, 102]
	},
	{
		id: 'DH24',
		name: 'Gothard, the Undying Knight',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Vampire Counts', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and "<b>Terror</b>: 1" for each card attached to this unit.</p><p><b>Combat Tactic</b>: You and your enemy each get 1 spell point.</p>',
		releases: {
			DH: 24
		},
		faq: [268]
	},
	{
		id: 'DH25',
		name: 'Manfred von Carstein',
		cost: 6,
		strength: 5,
		tacticPoints: 7,
		leadership: 3,
		unique: true,
		keywords: ['Vampire Counts', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (X): After one of your other Hordes of Darkness units is destroyed as a result of combat, return that unit to the battle line committed. You may use this ability once per command. X equals the target unit's gold cost.</p>",
		releases: {
			DH: 25
		},
		faq: [96, 60, 21]
	},
	{
		id: 'DH26',
		name: 'A Good Death to Save Another',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		text: '<p><b>Reaction</b> Remove this card and one of your units from the game: When one of your units is destroyed by a card effect, that unit is not destroyed.</p><p><b>Reaction</b> Destroy one of your units: After you make a roll, that roll gets +2.</p>',
		releases: {
			DH: 26
		},
		faq: [248, 67]
	},
	{
		id: 'WA382',
		name: 'Blood Precedes Glory',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>You may put this card into play as a combat tactic for 3 tactic points.</p><p><b>Support Tactic</b> Remove up to 2 units in your discard pile from the game: This unit gets +X strength. X equals the number of units removed from the game.</p>',
		releases: {
			DH: 27,
			WA: 382
		},
		faq: [292, 134]
	},
	{
		id: 'DH28',
		name: 'Death Comes to All',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: If this combat ends in a slaughter, this unit and the enemy unit are removed from the game.</p>',
		releases: {
			DH: 28
		},
		faq: [245]
	},
	{
		id: 'WA383',
		name: 'Devotion to a Cause',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets a strength bonus equal to the number of units in your battle line. This number may not exceed the number of units in your reserves.</p>',
		releases: {
			DH: 29,
			WA: 383
		},
		faq: [142]
	},
	{
		id: 'WA384',
		name: 'Freedom Is Not Free',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If this unit wins the combat, after this combat ends this unit is destroyed and you may rally one of your other units.</p>',
		releases: {
			DH: 30,
			WA: 384
		},
		faq: [4]
	},
	{
		id: 'DH31',
		name: 'That Which Does Not Kill Us...',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p>You may put this card into play as a combat tactic for 2 tactic points.</p><p>All of your Empire units without <b>Faith</b> have "<b>Faith</b>: 1".</p>',
		releases: {
			DH: 31
		},
		faq: [134]
	},
	{
		id: 'DH32',
		name: 'The Battle Goes to the Vigilant',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p>You may put this card into play as a combat tactic for 2 tactic points. When this card is removed from play remove it from the game.</p><p><b>Reaction</b>: After your unit with <b>Faith</b> makes a combat roll, make a leadership test. If passed, add 1 to the roll.</p>',
		releases: {
			DH: 32
		},
		faq: [134]
	},
	{
		id: 'WA385',
		name: 'The Enemy Is Ours',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>You may put this card into play as a combat tactic for 2 tactic points.</p><p><b>Support Tactic</b>: Your units attacking or defending from the battle line get +1 strength.</p>',
		releases: {
			DH: 33,
			WA: 385
		},
		faq: [147, 134]
	},
	{
		id: 'WA387',
		name: 'Valor and Vigilance',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: If this unit loses the combat and this unit's combat roll is at least 2 more than the enemy unit's combat roll, this combat is a slaughter instead. Effects that would allow this unit to win the combat instead of being slaughtered have no effect.</p>",
		releases: {
			DH: 34,
			WA: 387
		},
		faq: []
	},
	{
		id: 'WA388',
		name: 'War Is Cruelty',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. If this unit wins the combat, after this combat ends this unit is destroyed. Remove this card from the game.</p>',
		releases: {
			DH: 35,
			WA: 388
		},
		faq: [4]
	},
	{
		id: 'DH37',
		name: 'Grand Theogonist Kurt III',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		unique: true,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p><b>Wizard</b>: 2</p><p>This unit has <b>Faith</b>: 2</p><p><b>Spell WarCry</b> (X): The enemy may not play any spell tactics and spell reactions with a spell point cost less than X during the battle.</p>',
		releases: {
			DH: 37
		},
		faq: [95, 96]
	},
	{
		id: 'DH40',
		name: 'Axelbrand, Archelector of Taal',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 2</p><p><b>Reaction</b>: Once per battle, before paying the spell cost of a spell action card, reduce that cost to 0.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. infantry units.</p>',
		releases: {
			DH: 40
		},
		faq: [133]
	},
	{
		id: 'DH41',
		name: 'Knights of the Divine Sword',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Faith</b>: 1</p><p><b>Combat Tactic</b>: Reduce the enemy unit's leadership by 2. Only playable vs. Hordes of Darkness units.</p>",
		releases: {
			DH: 41
		},
		faq: []
	},
	{
		id: 'DH42',
		name: 'Martin, Elector of Stirland',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Reaction</b>: After one of your Empire units is destroyed, put that card on top of your army deck instead of in your discard pile.</p><p><b>Combat Tactic</b>: Return the enemy unit's strength to it's printed strength. Restore that units tactic points (printed and provided by permanent bonuses).</p>",
		releases: {
			DH: 42
		},
		faq: [224]
	},
	{
		id: 'DH43',
		name: "Martin's War Hounds",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>While this unit is in your battle line ready, your Empire infantry units may target units in your enemy's reserves for attacks and may not be blocked by cavalry.</p>",
		releases: {
			DH: 43
		},
		faq: []
	},
	{
		id: 'DH44',
		name: 'Ostermark Vampire Hunters',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After this unit destroys an enemy unit, your enemy loses 3 spell points.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. Hordes of Darkness units.</p>',
		releases: {
			DH: 44
		},
		faq: [165, 234]
	},
	{
		id: 'DH45',
		name: 'Priests of Taal',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 2</p><p><b>Reaction</b> Commit: After a roll, add 1 to the roll for every 2 points of this unit\'s "<b>Faith</b>" rating.</p>',
		releases: {
			DH: 45
		},
		faq: []
	},
	{
		id: 'DH46',
		name: 'Stirland Crossbowmen of the Stake',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After this unit commits a Vampire Counts unit with a ranged attack, draw 1 card.</p>',
		releases: {
			DH: 46
		},
		faq: []
	},
	{
		id: 'DH47',
		name: 'Woeful Flagellants',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After a spell is played by an enemy unit or player while this unit is in combat, this unit gets +1 strength and +1 leadership.</p>',
		releases: {
			DH: 47
		},
		faq: []
	},
	{
		id: 'DH48',
		name: 'Zealots of Taal',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 1</p><p><b>Reaction</b>: After this unit destroys a Hordes of Darkness unit as the defender, if this unit passes a leadership test, this unit does not commit as a result of the combat.</p>',
		releases: {
			DH: 48
		},
		faq: [234]
	},
	{
		id: 'BD1',
		name: 'Anelia, Harridan of Slaanesh',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Veteran</b>: Anelia, Mistress of Slaanesh</p><p><b>Reaction</b> Commit: After set-up, commit an enemy unit with a gold cost equal to or less than this unit's gold cost.</p>",
		releases: {
			BD: 1
		},
		faq: [97, 278]
	},
	{
		id: 'BD2',
		name: 'Brotherhood of Carnage',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b> Commit an attachment on this unit: This unit gets +1 strength. This ability may be used any number of times per combat. Activated abilities on committed attachments may not be used.</p>',
		releases: {
			BD: 2
		},
		faq: []
	},
	{
		id: 'BD3',
		name: 'Itmon, the Mountain That Breathes',
		cost: 8,
		strength: 7,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Beastmen', 'Monster', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 3</p><p><b>Combat Tactic</b>: The enemy unit must pass an unmodified leadership test or be committed.</p>',
		releases: {
			BD: 3
		},
		faq: [271, 74]
	},
	{
		id: 'WA23',
		name: "Styrkaar's Bearers of Enigma",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After you play a combat tactic from your hand while this unit is in a combat, your enemy discards 1 card from their hand.</p>',
		releases: {
			BD: 4,
			WA: 23
		},
		faq: []
	},
	{
		id: 'BD5',
		name: "Styrkaar's Blissful Spawn",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Terror</b>: 3</p><p><b>Spell Reaction</b> (2): If this unit is destroyed in a slaughter, your enemy discards 2 cards.</p>',
		releases: {
			BD: 5
		},
		faq: [225]
	},
	{
		id: 'BD6',
		name: "Styrkaar's Blood Sisters",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Support WarCry</b>: Your unit wih the "<b>Scout</b>" ability gets a strength bonus equal to its printed "<b>Scout</b>" rating. Not playable during a follow-up attack.</p>',
		releases: {
			BD: 6
		},
		faq: []
	},
	{
		id: 'WA24',
		name: "Styrkaar's Chariot of Sisters",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this combat ends in slaughter, this unit wins instead. Only playable during a follow-up attack.</p>',
		releases: {
			BD: 7,
			WA: 24
		},
		faq: [196, 247]
	},
	{
		id: 'BD8',
		name: "Styrkaar's Daughters of Bloodlust",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: If you have fewer cards in your hand than your opponent draw 1 card. Your unit gets -1 strength.</p>',
		releases: {
			BD: 8
		},
		faq: []
	},
	{
		id: 'WA27',
		name: 'Xaphen Kell, Keeper of Secrets',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: Move an enemy unit to the battle line. This unit gets a strength bonus equal to the target unit's printed strength unless the target unit passes a leadership test.</p>",
		releases: {
			BD: 9,
			WA: 27
		},
		faq: []
	},
	{
		id: 'BD10',
		name: "Ha'asek's Shadow Assassins",
		cost: 4,
		strength: 1,
		tacticPoints: 6,
		leadership: 2,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p>This unit may block any attack targeting a unit in your reserves, even while committed.</p><p><b>Combat Tactic</b>: This unit gets +X strength vs. infantry units. X equals the number of cards in your hand.</p>',
		releases: {
			BD: 10
		},
		faq: [208]
	},
	{
		id: 'WA45',
		name: 'Lukhdror Fastdoom',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: When one of your units loses a combat, that unit is routed and this unit becomes the target of the follow-up attack (which the enemy may not opt out of). The loser of the next battle is routed (no roll necessary).</p>',
		releases: {
			BD: 11,
			WA: 45
		},
		faq: []
	},
	{
		id: 'BD12',
		name: 'Ryneys Sharpwing',
		cost: 5,
		strength: 3,
		tacticPoints: 6,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support WarCry</b> (2): If your Dark Elf unit has a higher printed tactic points than the enemy unit, this combat ends in a slaughter.</p>',
		releases: {
			BD: 12
		},
		faq: [3]
	},
	{
		id: 'BD13',
		name: 'The Black Hand of Twilight',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Orc units.</p>',
		releases: {
			BD: 13
		},
		faq: []
	},
	{
		id: 'BD14',
		name: 'The Black Sky of Twilight',
		cost: 3,
		strength: 0,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 7</p><p><b>Support WarCry</b> Discard 1 card: The enemy unit may only play a number of tactics in this combat equal to its leadership -1 ("<b>Terror</b>" does not affect this).</p>',
		releases: {
			BD: 14
		},
		faq: []
	},
	{
		id: 'WA54',
		name: 'The Dread Knights of Twilight',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After this unit routs an enemy unit, before a follow-up attack begins, move up to 2 units in your enemy's batle line to their reserves.</p>",
		releases: {
			BD: 15,
			WA: 54
		},
		faq: []
	},
	{
		id: 'WA55',
		name: 'The Silent Brothers of Twilight',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Scout</b>: 4</p><p><b>Reaction</b>: After initiative is determined, move this unit from the battle line to reserves.</p><p><b>Support Tactic</b>: Look at the top card of your enemy's action deck. You may choose to have your enemy draw that card or leave it on top of the deck.</p>",
		releases: {
			BD: 16,
			WA: 55
		},
		faq: []
	},
	{
		id: 'BD17',
		name: "Twilight's Mistresses of Murder",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Choose a number. Youre enemy may not play cards that have a printed tactic point cost of that number.</p>',
		releases: {
			BD: 17
		},
		faq: []
	},
	{
		id: 'WA57',
		name: 'Yrleth Soaringvale',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> Discard 1 card (1): After an action card is played in a combat with this unit, negate the effects of the action card if it's die is equal to the die on the card discarded to pay this ability's cost.</p>",
		releases: {
			BD: 18,
			WA: 57
		},
		faq: [159]
	},
	{
		id: 'BD19',
		name: 'Gotti Skullcrusher',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Support WarCry</b>: Your attacking "<b>Scout</b>" unit gets a strength bonus equal to its "<b>Scout</b>" level. Then reduce your unit\'s "<b>Scout</b>" level to 0.</p>',
		releases: {
			BD: 19
		},
		faq: [142]
	},
	{
		id: 'WA66',
		name: "Grubbi's High Boys",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Destroy this unit: After an enemy unit gets a strength bonus of 3 or more, reduce that bonus to 0.</p>',
		releases: {
			BD: 20,
			WA: 66
		},
		faq: [39, 44, 233]
	},
	{
		id: 'BD21',
		name: "Grubbi's Net Tossers",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 1</p><p><b>Support Tactic</b> Destroy or commit this unit: Your unit gets +X strength. X equals this unit\'s "<b>Scout</b>" level. You may play this ability while this unit is committed.</p>',
		releases: {
			BD: 21
		},
		faq: []
	},
	{
		id: 'BD22',
		name: "Grubbi's Savage Riders",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Reaction</b>: After this unit wins a combat, destroy a unit not in this combat. Only playable if the enemy has more gold in play than prescribed by the battle (20 in the 1st battle, 25 in the 2nd, etc.).</p>',
		releases: {
			BD: 22
		},
		faq: []
	},
	{
		id: 'WA68',
		name: "Grubbi's Wolf Raiders",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Play a support tactic on one of your committed units, paying all costs. If the support tactic requires the unit to commit, destroy the committed unit instead of committing it.</p>',
		releases: {
			BD: 23,
			WA: 68
		},
		faq: [68]
	},
	{
		id: 'BD24',
		name: "Manmangler's Black Orcs",
		cost: 3,
		strength: 5,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: -4</p><p>This unit\'s "<b>Victory</b>:-4" is negated if you have 4 or more other Orc units in your battle line.</p>',
		releases: {
			BD: 24
		},
		faq: []
	},
	{
		id: 'WA79',
		name: 'Ozzi Batchewer',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 3</p><p><b>Command</b>: Once per battle, attach a reaction card to this unit.</p><p><b>Reaction</b> Discard 1 card: When a <b>Reaction</b> attached to this unit could be played, play that <b>Reaction</b>, paying all costs. You may only use any one attached card once per trigger effect.</p>',
		releases: {
			BD: 25,
			WA: 79
		},
		faq: [133]
	},
	{
		id: 'WA80',
		name: "Ozzi's Night Guard",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>WarCry</b>: The enemy unit may not play action cards with a die equal to or less than this unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			BD: 26,
			WA: 80
		},
		faq: [184]
	},
	{
		id: 'BD27',
		name: 'Rokki Blood Spitter',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Wizard</b>: 1</p><p><b>Support Tactic</b>: Play a combat tactic from your hand, reducing the tactic point cost to 0. Only playable if your unit has a printed tactic points of 0.</p>',
		releases: {
			BD: 27
		},
		faq: [68]
	},
	{
		id: 'WA102',
		name: "Grunson's Marauders",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Wizard</b>: 2</p><p><b>Scout</b>: 2 <b>Terror</b>: 2</p><p><b>Faith</b>: 2</p>',
		releases: {
			BD: 28,
			WA: 102
		},
		faq: []
	},
	{
		id: 'WA103',
		name: "Voland's Venerators",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After an enemy unit gets a strength bonus from a combat tactic card, if the strength bonus was greater than the tactic point cost of the card, the bonus is reduced to the tactic point cost of the card.</p>',
		releases: {
			BD: 29,
			WA: 103
		},
		faq: [44, 233]
	},
	{
		id: 'WA106',
		name: 'Animosity',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength if your enemy has another unit in their reserve or battle line with a different army keyword than the enemy unit.</p>',
		releases: {
			BD: 30,
			WA: 106
		},
		faq: [127]
	},
	{
		id: 'WA112',
		name: 'Best Laid Plans',
		cost: 5,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +6 strength.</p>',
		releases: {
			BD: 31,
			WA: 112
		},
		faq: []
	},
	{
		id: 'BD32',
		name: 'Bitterness',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength if your enemy unit has another unit in their reserve or battle line with a different army keyword than the enemy unit.</p>',
		releases: {
			BD: 32
		},
		faq: [127]
	},
	{
		id: 'BD33',
		name: 'Blessings of Steel',
		die: 2,
		keywords: ['Event', 'Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p>After this card is rolled, put it into play as a strategy card.</p><p>All units with 1 or more attachments get +1 strength.</p><p>If this card is rolled as a combat roll, this card will not effect the strengths of the units until after the loser is destroyed.</p>',
		releases: {
			BD: 33
		},
		faq: [136]
	},
	{
		id: 'WA118',
		name: 'Brilliant Intellect',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength if this unit's printed tactic points are greater than the enemy unit's printed tactic points.</p>",
		releases: {
			BD: 34,
			WA: 118
		},
		faq: []
	},
	{
		id: 'BD35',
		name: 'Cautious Advance',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Your enemy may not play cards that create or may create a slaughter for this combat.</p>',
		releases: {
			BD: 35
		},
		faq: []
	},
	{
		id: 'WA124',
		name: 'Choosing a General',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Commit one of your units: Attach this card to any one of your units. While attached this unit does not commit after attacking, but may not perform follow-up attacks.</p><p>Additionally, if your enemy passes after this unit completes an attack, the battle is over.You may not put this card into play if you have another copy of it in play.</p>',
		releases: {
			BD: 36,
			WA: 124
		},
		faq: []
	},
	{
		id: 'BD37',
		name: 'Command',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Spell WarCry</b> (1): Look at your enemy's hand. You may choose one card that can be legally played by the enemy unit as their next tactic. If you do, that card must be played by the enemy unit as their next tactic.</p>",
		releases: {
			BD: 37
		},
		faq: []
	},
	{
		id: 'BD38',
		name: 'Confusion in Command',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When a player wishes to play a combat tactic from their hand, the enemy player selects one card at random from their hand. If this card is a combat tactic that can legally be played, it must be played (paying all costs). If the card cannot be played legally as a combat tactic, then that card is played as a combat tactic that costs 1 tactic point and has the text "<b>Combat Tactic</b>: This unit gets +1 strength". If the card\'s cost cannot be paid the card is discarded.</p>',
		releases: {
			BD: 38
		},
		faq: [251]
	},
	{
		id: 'BD39',
		name: 'Countrymen Stand Together',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets a strength bonus equal to its leadership. Only playable vs. a unit of a different faction than this unit.</p>',
		releases: {
			BD: 39
		},
		faq: []
	},
	{
		id: 'WA130',
		name: 'Crushing Tactics',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: This unit gets +3 strength if this unit's printed gold cost is greater than the enemy unit's printed gold cost.</p>",
		releases: {
			BD: 40,
			WA: 130
		},
		faq: []
	},
	{
		id: 'BD41',
		name: 'Cunning Tactics',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: This unit gets +2 strength if this unit's printed tactic points are greater than the enemy unit's printed tactic points.</p>",
		releases: {
			BD: 41
		},
		faq: []
	},
	{
		id: 'BD42',
		name: 'Darkness Falls',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: If all of the enemy units are committed, the battle is over.</p>',
		releases: {
			BD: 42
		},
		faq: []
	},
	{
		id: 'WA133',
		name: 'Deadly Games',
		die: 3,
		keywords: ['Event', 'Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p>After this card is rolled, put it into play as a strategy card.</p><p>All units have the ability: "<b>Combat Tactic</b>: If this unit wins the combat, the enemy unit is routed (no roll necessary). You may play this ability once per command."</p>',
		releases: {
			BD: 43,
			WA: 133
		},
		faq: [195, 145, 148, 133, 136]
	},
	{
		id: 'BD44',
		name: 'Death Mark',
		die: 3,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p>After this card is rolled outside of a combat, target any unit. The target unit attaches the top card of their action deck. While attached that unit gets a strength and tactic point bonus equal to the die of that card and gets the keyword "Bounty."</p><p>Then, attach this card to a ready unit controlled by another player. While attached this unit gets the ability "Command Commit: Commit a Bounty unit."</p>',
		releases: {
			BD: 44
		},
		faq: []
	},
	{
		id: 'WA135',
		name: 'Death of a Hero',
		die: 4,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p>After this card is rolled, destroy your unit with the highest gold cost (your choice if there is a tie). All of your other units with the same army keyword(s) have +1 strength and +1 leadership until the end of the battle.</p>',
		releases: {
			BD: 45,
			WA: 135
		},
		faq: [97, 127]
	},
	{
		id: 'BD46',
		name: 'Departing the Field of Battle',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Command</b> Return all of an enemy player's cards removed from the game back to their deck: Only playable if all of your enemy's cards have been removed from the game.</p>",
		releases: {
			BD: 46
		},
		faq: []
	},
	{
		id: 'BD47',
		name: 'Detestation',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength if your enemy has another unit in their reserve or battle line with a different army keyword than the enemy unit.</p>',
		releases: {
			BD: 47
		},
		faq: [127]
	},
	{
		id: 'BD48',
		name: 'Divine the Future',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>All players play with the top card of both decks (army and action) face up.</p>',
		releases: {
			BD: 48
		},
		faq: []
	},
	{
		id: 'BD49',
		name: 'Establishing Dominance',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: This unit gets +2 strength if this unit's printed gold cost is greater than the enemy unit's printed gold cost.</p>",
		releases: {
			BD: 49
		},
		faq: []
	},
	{
		id: 'BD50',
		name: 'Falsified Orders',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: Before you play your first tactic, look at your enemy's hand. You may select one combat tactic. Your unit may play that card (paying all costs), however the card is not discarded and remains in the player's hand</p><p>(effects that would cause that card to leave the enemy player's hand are negated).</p>",
		releases: {
			BD: 50
		},
		faq: [69]
	},
	{
		id: 'WA153',
		name: 'Fight as One',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength if you have another unit in your reserve or battle line that has the same army keyword as this unit.</p>',
		releases: {
			BD: 51,
			WA: 153
		},
		faq: [127]
	},
	{
		id: 'BD52',
		name: 'Guarded Coffers',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>This card is not discarded after the battle it comes into play. Discard all other copies of this card when it enters play.</p><p>Either player may use this ability once per muster phase.</p><p><b>Reaction</b>: Instead of mustering a unit or attachment, both players discard their hands and draw the same number of cards that they discarded.</p>',
		releases: {
			BD: 52
		},
		faq: []
	},
	{
		id: 'WA171',
		name: 'Heavy Rains',
		die: 4,
		keywords: ['Event', 'Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p>After this card is rolled put it into play as a strategy card.</p><p>All units in play get -1 tactic point.</p>',
		releases: {
			BD: 53,
			WA: 171
		},
		faq: [136, 168]
	},
	{
		id: 'BD54',
		name: 'Hide Your Strength',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for each card your enemy played from their hand during this combat.</p>',
		releases: {
			BD: 54
		},
		faq: []
	},
	{
		id: 'WA196',
		name: 'Matter of Honor',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>You may put this card into play as a combat tactic for 1 tactic point.</p><p><b>Reaction</b>: After an enemy unit gets a strength bonus from a <b>Combat Tactic</b> action card, if the strength bonus was greater than the printed tactic point cost of the card, the bonus is reduced to the tactic point cost of the card.</p>',
		releases: {
			BD: 55,
			WA: 196
		},
		faq: [44, 233, 134]
	},
	{
		id: 'BD56',
		name: 'Might Wins the Skirmish',
		die: 2,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p>After this card is rolled as a combat roll, your opponent's combat roll is negated and is considered equal to this roll.</p>",
		releases: {
			BD: 56
		},
		faq: []
	},
	{
		id: 'BD57',
		name: 'Mirror Tactics',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p>If another copy of this card enters play, discard this card.</p><p>All of your opponent's strategy cards are considered to be your strategy cards.</p>",
		releases: {
			BD: 57
		},
		faq: []
	},
	{
		id: 'WA206',
		name: 'Only One Shall Fall',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability that creates or may create a slaughter, destroy the enemy unit (the combat does not end in a slaughter). Your unit may make a follow-up attack after this combat is completed (no rout check needed).</p>',
		releases: {
			BD: 58,
			WA: 206
		},
		faq: [144, 135]
	},
	{
		id: 'BD59',
		name: 'Overpower',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength if this unit's printed gold cost is greater than the enemy unit's printed gold cost.</p>",
		releases: {
			BD: 59
		},
		faq: []
	},
	{
		id: 'WA214',
		name: 'Point Blank Shot',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 <b>Ranged Attack</b>.</p><p><b>Combat Tactic</b>: This unit gets +2 strength.</p>',
		releases: {
			BD: 60,
			WA: 214
		},
		faq: []
	},
	{
		id: 'WA215',
		name: 'Possession',
		die: 2,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p>After this card is rolled, any one unit in play gets the following until the end of the combat: +2 strength, -2 leadership and the Keywords "Daemon" and "Monster".</p>',
		releases: {
			BD: 61,
			WA: 215
		},
		faq: []
	},
	{
		id: 'WA224',
		name: 'Relent or We Both Die!',
		die: 2,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p>After this card is rolled as a combat roll or during a combat the result of this combat is a slaughter, unless your enemy immediately commits their unit in this combat.</p>',
		releases: {
			BD: 62,
			WA: 224
		},
		faq: [185]
	},
	{
		id: 'BD63',
		name: 'Resourceful Management',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: Before you discard 1 card as the cost of an ability, you may roll. If the roll is a 1 you do not need to discard a card. If not, discard the card as normal. Only playable once per combat.</p>',
		releases: {
			BD: 63
		},
		faq: [133]
	},
	{
		id: 'BD64',
		name: 'Restrained Power',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (0): If the enemy player has more than 6 spell points, that player loses all but 6 of their spell points. You gain a number of spell points equal to the number of spell points that the enemy player lost.</p>',
		releases: {
			BD: 64
		},
		faq: []
	},
	{
		id: 'WA229',
		name: 'Rivalry',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength if your enemy has another unit in their reserve or battle line with a different army keyword than the enemy unit.</p>',
		releases: {
			BD: 65,
			WA: 229
		},
		faq: [127]
	},
	{
		id: 'WA234',
		name: 'Scheme with an Empty Castle',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Super rare',
		text: "<p><b>Reaction</b> Remove this card from the game: After a unit declares an attack, that unit must pass a tactic point test or be returned to their battle line ready and the player's command is over.</p>",
		releases: {
			BD: 66,
			WA: 234
		},
		faq: [194, 60]
	},
	{
		id: 'WA242',
		name: 'Steal a Sheep in Passing',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After your enemy declares an attack with a unit, select one of their other ready units to make the attack. Your enemy may then choose one of your ready units as the target of the attack.</p><p>The chosen unit must be one that could normally be targeted by the attacking unit. Only playable while both you and your enemy have a ready unit.</p>',
		releases: {
			BD: 67,
			WA: 242
		},
		faq: [194, 30]
	},
	{
		id: 'WA243',
		name: 'Stomach for the Fight',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +5 strength. Only playable if this is the last card in your hand.</p>',
		releases: {
			BD: 68,
			WA: 243
		},
		faq: []
	},
	{
		id: 'WA252',
		name: 'Sunrise',
		die: 2,
		keywords: ['Event'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p>After this card is rolled, draw 2 cards. Remove this card from the game.</p>',
		releases: {
			BD: 69,
			WA: 252
		},
		faq: [137]
	},
	{
		id: 'BD70',
		name: 'Superior Strategies',
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: This unit gets +3 strength if this unit's printed tactic points are greater than the enemy unit's printed tactic points.</p>",
		releases: {
			BD: 70
		},
		faq: []
	},
	{
		id: 'WA254',
		name: 'Surge of Power',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (0): All players gain a number of spell points equal to half the number of spell points they currently have. Other copies of this card may not be played this battle.</p>',
		releases: {
			BD: 71,
			WA: 254
		},
		faq: [287]
	},
	{
		id: 'BD72',
		name: 'The Ties That Bind',
		cost: 4,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength if you have another unit in your reserve or battle line that has the same army keyword as this unit.</p>',
		releases: {
			BD: 72
		},
		faq: [127]
	},
	{
		id: 'BD73',
		name: 'To the Last',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This ready unit gets +5 strength. Only playable if you have no other ready units.</p>',
		releases: {
			BD: 73
		},
		faq: []
	},
	{
		id: 'WA270',
		name: 'Unexpected Turn of Events',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (X): Your enemy must destroy X number of their strategy cards in play.</p>',
		releases: {
			BD: 74,
			WA: 270
		},
		faq: [95, 96]
	},
	{
		id: 'WA272',
		name: 'Unity',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength if you have another unit in your reserve or battle line that has the same army keyword as this unit.</p>',
		releases: {
			BD: 75,
			WA: 272
		},
		faq: [127]
	},
	{
		id: 'BD76',
		name: 'Victory Has a Price',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: Infinity,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p>You may have any number of this card in your deck.</p><p><b>WarCry</b> Discard X copies of this card: This unit gets a strength bonus equal to X times X.</p>',
		releases: {
			BD: 76
		},
		faq: [95]
	},
	{
		id: 'BD77',
		name: "When It's All You Have",
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: At the end of the tactics phase, this unit gets +1 strength for each card you played during this combat.</p>',
		releases: {
			BD: 77
		},
		faq: []
	},
	{
		id: 'BD78',
		name: 'When You Stand with Your Brother',
		cost: 3,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength if you have another unit in your reserve or battle line that has the same army keyword as this unit.</p>',
		releases: {
			BD: 78
		},
		faq: [127]
	},
	{
		id: 'BD79',
		name: 'Winds of Attrition',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>3 or less: The enemy must roll. If the roll is 2 or less, when this combat ands the result is a slaughter.</p><p>4: No effect.</p><p>5+: Destroy this unit. The enemy may make a follow-up attack.</p></p>',
		releases: {
			BD: 79
		},
		faq: [3, 144]
	},
	{
		id: 'BD80',
		name: 'Winds of Destruction',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>1 or less: The enemy unit gets -3 strength.</p><p>2: The enemy unit gets -2 strength.</p><p>3: The enemy unit gets -1 strength.</p><p>4: The enemy unit gets +1 strength.</p><p>5: Commit this unit.</p><p>6+: Destroy this unit.</p></p>',
		releases: {
			BD: 80
		},
		faq: []
	},
	{
		id: 'BD81',
		name: 'Winds of Destiny',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>1 or less: When this combat ends the result is a slaughter.</p><p>2: Commit both units.</p><p>3: Both units get a strength bonus equal to their gold cost.</p><p>4: Both units get +4 tactic points.</p><p>5+: Destroy this unit.</p><p>The enemy unit may make a follow-up attack.</p></p>',
		releases: {
			BD: 81
		},
		faq: [3, 97, 144]
	},
	{
		id: 'BD82',
		name: 'Winds of Domination',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>3 or less: This unit gets +3 strength. If this combat ends in a slaughter this unit wins instead.</p><p>4+: Destroy this unit. The enemy unit may make a follow-up attack.</p></p>',
		releases: {
			BD: 82
		},
		faq: [196, 247, 144]
	},
	{
		id: 'BD83',
		name: 'Winds of Luck',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>2 or less: Draw 2 cards.</p><p>3: Both players draw 1 card.</p><p>4: Your enemy may draw 1 card.</p><p>5+: Discard your hand.</p></p>',
		releases: {
			BD: 83
		},
		faq: []
	},
	{
		id: 'BD84',
		name: 'Winds of Power',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>1 or less: This unit gets +3 strength.</p><p>2: This unit gets +2 strength.</p><p>3: This unit gets +1 strength.</p><p>4: This unit gets -1 strength.</p><p>5: Commit this unit.</p><p>6+: Destroy this unit. The enemy unit may make a follow-up attack.</p></p>',
		releases: {
			BD: 84
		},
		faq: [144]
	},
	{
		id: 'BD85',
		name: 'Winds of Salvation',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>2 or less: Both players may put the top card of their army deck into play without cost (if the card is an attachment it may be attached to any legal unit). Remove this card from the game.</p><p>3+: This unit gets -3 strength.</p></p>',
		releases: {
			BD: 85
		},
		faq: []
	},
	{
		id: 'BD86',
		name: 'Winds of Suffering',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>Combat Tactic</b>: Roll.</p><p>2 or less: if you win this combat the enemy unit is routed (no roll necessary).</p><p>3: If you win this combat you may not make a follow-up attack.</p><p>4: If you lose this combat your unit is routed (no roll necessary).</p><p>5+: Destroy this unit.</p><p>The enemy unit may make a follow-up attack.</p></p>',
		releases: {
			BD: 86
		},
		faq: [195, 144, 145, 148]
	},
	{
		id: 'BD87',
		name: 'Winds of War',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><p><b>WarCry</b>: Roll.</p><p>1 or less: Commit the enemy unit.</p><p>2: The enemy unit gets -2 strength.</p><p>3: The enemy unit gets -2 tactic points.</p><p>4: The enemy unit gets -2 leadership.</p><p>5+: Destroy this unit. The enemy unit may make a follow-up attack.</p></p>',
		releases: {
			BD: 87
		},
		faq: [144, 168]
	},
	{
		id: 'BD88',
		name: 'Ancestral Tablet',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this card is mustered draw two cards from your army deck.</p>',
		releases: {
			BD: 88
		},
		faq: []
	},
	{
		id: 'BD89',
		name: 'Cavalry Banner',
		cost: 2,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>May only be attached to a cavalry unit.</p><p><b>Support Tactic</b>: Your cavalry unit gets +1 strength.</p>',
		releases: {
			BD: 89
		},
		faq: []
	},
	{
		id: 'BD90',
		name: 'Enchanted Halberd',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit may play tactics as if it were blocking or being blocked.</p><p><b>Combat Tactic</b>: This unit gets +1 strength.</p>',
		releases: {
			BD: 90
		},
		faq: []
	},
	{
		id: 'BD91',
		name: "General's Standard",
		cost: 2,
		tacticPoints: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit has "<b>Victory</b>: +X". X equals the number of non-duplicated unit you have in play.</p>',
		releases: {
			BD: 91
		},
		faq: [297]
	},
	{
		id: 'BD92',
		name: 'Shadow Guide',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +1</p><p>This unit cannot attack or block without a card effect.</p><p><b>Spell Command</b> (2): This unit declares an attack against an enemy unit of your choice.</p>',
		releases: {
			BD: 92
		},
		faq: [194, 140, 32]
	},
	{
		id: 'BD93',
		name: 'The Seventh Spear of the Fallen',
		cost: 2,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Support Tactic</b>: Your unit gets a strength bonus equal to this unit's strength. If your unit is destroyed this unit is destroyed as well. After the combat, this unit makes a leadership test. If this unit fails the test this unit is committed.</p>",
		releases: {
			BD: 93
		},
		faq: []
	},
	{
		id: 'WA294',
		name: "Alrik's Hunting Rangers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Scout</b>: 2</p><p><b>Command</b>: If all of your enemy's units are committed, the battle ends.</p>",
		releases: {
			BD: 94,
			WA: 294
		},
		faq: []
	},
	{
		id: 'BD95',
		name: "Barak's Iron Wall",
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Empire units.</p><p><b>Support WarCry</b>: Destroy an attachment on the enemy unit.</p>',
		releases: {
			BD: 95
		},
		faq: []
	},
	{
		id: 'BD96',
		name: "Barak's Pipers",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 7</p><p><b>Command</b> Discard 3 cards: Rally this unit. Only playable if this unit performed a ranged attack this battle. If your enemy passes as their next action, the battle is over.</p>',
		releases: {
			BD: 96
		},
		faq: []
	},
	{
		id: 'WA298',
		name: "Ganulf's Crack Shots",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After this unit destroys another unit with a ranged attack, make a leadership test with one of your other units. If passed rally that unit.</p>',
		releases: {
			BD: 97,
			WA: 298
		},
		faq: []
	},
	{
		id: 'WA299',
		name: "Ganulf's Forest Walkers",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: The enemy unit may not play any more action cards with a die equal to or less than this unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			BD: 98,
			WA: 299
		},
		faq: []
	},
	{
		id: 'WA300',
		name: "Ganulf's Ironworkers",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After your enemy completes a command, move one of your war machine units to or from the battle line.</p><p><b>Support Tactic</b>: Your war machine unit gets +2 leadership and "<b>Terror</b>: 2".</p>',
		releases: {
			BD: 99,
			WA: 300
		},
		faq: [268]
	},
	{
		id: 'WA304',
		name: "Grimjaw's Flying Hammers",
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: When an enemy unit gets a strength bonus of 4 or more, reduce that bonus by 3. Not playable while this unit is in combat.</p>',
		releases: {
			BD: 100,
			WA: 304
		},
		faq: [39, 44, 233]
	},
	{
		id: 'BD101',
		name: 'Hargum Ganulf',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: When an enemy unit is destroyed in a combat, put a "<b>Victory</b>: +1" token on this unit.</p>',
		releases: {
			BD: 101
		},
		faq: []
	},
	{
		id: 'BD102',
		name: 'Logtok Gimragson',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p>While "Doramin Gimragson" is attached this unit\'s <b>Runesmith</b> rating is increased by 1.</p><p><b>Spell Combat Tactic</b> (1): This unit gets +1 strength for every 3 of your spell points.</p>',
		releases: {
			BD: 102
		},
		faq: []
	},
	{
		id: 'WA324',
		name: "Barthelm's Harriers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 1</p><p><b>Reaction</b>: Before one of your other units makes a rout check, add this unit\'s "<b>Scout</b>" level to the roll. You may only use one copy of this ability per rout check.</p>',
		releases: {
			BD: 103,
			WA: 324
		},
		faq: []
	},
	{
		id: 'BD104',
		name: 'Carroburg Swordguard',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>WarCry</b>: This unit gets a strength bonus equal to its "<b>Scout</b>" level.</p>',
		releases: {
			BD: 104
		},
		faq: []
	},
	{
		id: 'WA327',
		name: "Fandelhoch's Huntsmen",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Ranged Attack</b>: 6</p><p><b>Support Tactic</b>: Your unit gets a strength bonus equal to this unit\'s "<b>Scout</b>" level. Commit this unit unless it passes a leadership test.</p>',
		releases: {
			BD: 105,
			WA: 327
		},
		faq: []
	},
	{
		id: 'BD106',
		name: "Gausser's Foresters",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 3</p><p><b>Ranged Attack</b>: 6</p><p><b>WarCry</b>: This unit gets +1 strength or +1 ranged attack for each of your other "<b>Scout</b>" units.</p>',
		releases: {
			BD: 106
		},
		faq: []
	},
	{
		id: 'WA328',
		name: "Gausser's Lead Breather",
		cost: 4,
		strength: 0,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Ranged Attack</b>: 8</p><p><b>Command</b> Commit: Target one enemy unit in the battle line and up to one enemy unit in the reserves. Roll for the unit in the battle line and then roll for the unit in the reserves.</p><p>If a target unit's strength plus the roll is less than this unit's <b>Ranged Attack</b>, the target unit is committed.</p>",
		releases: {
			BD: 107,
			WA: 328
		},
		faq: []
	},
	{
		id: 'BD108',
		name: 'Gunter Braunschaft',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Both you and your enemy draw 2 cards or discard 2 cards (your choice).</p>',
		releases: {
			BD: 108
		},
		faq: []
	},
	{
		id: 'BD109',
		name: 'Harman Barthelm',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Attach one attachment in your discard pile to this unit without cost.</p>',
		releases: {
			BD: 109
		},
		faq: [274]
	},
	{
		id: 'WA341',
		name: 'Old Reliable',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit performs a <b>Ranged Attack</b>, this unit makes a leadership test. If it passes, rally this unit at the end of the combat.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. infantry units.</p>',
		releases: {
			BD: 110,
			WA: 341
		},
		faq: []
	},
	{
		id: 'WA348',
		name: "Theodric's Sharp Shooters",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>Combat Tactic</b> Discard 1 card: This unit gets a ranged attack bonus equal to the die on the discarded card.</p>',
		releases: {
			BD: 111,
			WA: 348
		},
		faq: [95]
	},
	{
		id: 'WA359',
		name: 'Bearers of the Sacred Flame',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you play a strategy card as a command, this unit declares an attack.</p><p><b>Combat Tactic</b>: This unit gets +2 tactic points if you have 3 or less cards in your hand.</p>',
		releases: {
			BD: 112,
			WA: 359
		},
		faq: [230]
	},
	{
		id: 'WA367',
		name: "Korrim's Grey Avengers",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +3 strength. Only playable during a follow-up attack. If you lose this combat your unit is routed.</p>',
		releases: {
			BD: 113,
			WA: 367
		},
		faq: []
	},
	{
		id: 'WA369',
		name: 'Lord Korrim Swifteagle',
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 1</p><p><b>Support Tactic</b>: Your unit gets +2 tactic points and both players draw 1 card.</p><p><b>Support Tactic</b>: Your unit gets a strength bonus equal to the number of "<b>Scout</b>" units in your reserves.</p>',
		releases: {
			BD: 114,
			WA: 369
		},
		faq: []
	},
	{
		id: 'BD115',
		name: "Luril's Seafarers",
		cost: 3,
		strength: 0,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Scout</b>: 2</p><p><b>Reaction</b>: At the beginning of the battle phase, once both players have drawn their hands but before initiative has been decided, this unit may make a ranged attack. Only playable if you have more tactic points in your battle line than your enemy.</p>',
		releases: {
			BD: 115
		},
		faq: [187]
	},
	{
		id: 'BD116',
		name: 'Spears of the Fallen Tree',
		cost: 4,
		strength: 3,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a combat tactic in a combat with this unit, the tactic point cost of your next combat tactic is reduced to 0.</p>',
		releases: {
			BD: 116
		},
		faq: []
	},
	{
		id: 'BD117',
		name: 'Talaefanil Peacebringer',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Reaction</b>: After this unit is mustered, destroy any one attachment. That attachment's player may muster gold equal to that attachments gold cost.</p><p><b>Combat Tactic</b>: Put a strategy card into play.</p>",
		releases: {
			BD: 117
		},
		faq: []
	},
	{
		id: 'BD118',
		name: 'Tormeclis Keensight',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p>Before you take a command action (or pass), if this unit has any +1 strength tokens on it remove one of them.</p><p><b>Spell Command</b> (X): This unit gets X +1 strength tokens. X may not exceed the number of cards in your hand.</p>',
		releases: {
			BD: 118
		},
		faq: [96]
	},
	{
		id: 'WA374',
		name: 'Warriors of the Fallen Tree',
		cost: 4,
		strength: 4,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 4</p><p><b>WarCry</b>: Your enemy discards their hand and draws the same number of cards.</p><p><b>Support WarCry</b>: Target unit\'s "<b>Scout</b>" level is reduced to 0.</p>',
		releases: {
			BD: 119,
			WA: 374
		},
		faq: []
	},
	{
		id: 'BD120',
		name: "Whitestar's Guardians",
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each tactic point it has spent this combat. Only playable while blocking.</p>',
		releases: {
			BD: 120
		},
		faq: [141, 291]
	},
	{
		id: 'LW1',
		name: 'Asavar Kul, the Anointed',
		cost: 8,
		strength: 6,
		tacticPoints: 7,
		leadership: 6,
		unique: true,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Terror</b>: 4</p><p><b>Combat Tactic</b>: Play the combat tactic or WarCry on any action card in any discard pile, paying all costs. That card is placed at the bottom of the owner's deck.</p><p><b>Reaction</b>: Instead of mustering a unit or attachment, get a Daemon from your deck and add it to your hand. Shuffle your army deck.</p>",
		releases: {
			LW: 1
		},
		faq: [114]
	},
	{
		id: 'LW2',
		name: 'Hotek, Weaponsmith of Vaul',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b>: Instead of mustering a unit or attachment get up to one amor, item, standard, and weapon from your army deck and attach those to one of your Dark Elf units (paying all costs). Shuffle your army deck.</p>',
		releases: {
			LW: 2
		},
		faq: [114]
	},
	{
		id: 'LW3',
		name: 'Grom the Paunch of Misty Mountain',
		cost: 7,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b> Discard 2 cards: When this unit is destroyed in combat after losing a combat, return it to your battle line, ready. This unit is not destroyed (you may not use this ability if this unit is committed).</p><p><b>Combat Tactic</b>: This attacking unit gets +3 strength.</p>',
		releases: {
			LW: 3
		},
		faq: [142, 60]
	},
	{
		id: 'LW4',
		name: 'Snorri Whitebeard of Karaz-A-Karak',
		cost: 7,
		strength: 5,
		tacticPoints: 4,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Command</b> Commit: One by one, attach the top card of your deck to each of your Dwarf units. Those units have "<b>Victory</b>: +X". X equals the die of the attached card. While this unit remains in play, your units may not declare attacks. Discard all cards attached this way if this unit leaves play or after battle resolution. Only playable as your first command.</p>',
		releases: {
			LW: 4
		},
		faq: [194, 140]
	},
	{
		id: 'LW5',
		name: 'Magnus the Pious, Bane of Chaos',
		cost: 9,
		strength: 6,
		tacticPoints: 6,
		leadership: 5,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 4</p><p><b>Combat Tactic</b>: Play a WarCry or combat tactic ability on any unit or attachment in play, paying no cost.</p>',
		releases: {
			LW: 5
		},
		faq: [82]
	},
	{
		id: 'LW6',
		name: 'Tethlis the Slayer',
		cost: 6,
		strength: 5,
		tacticPoints: 8,
		leadership: 5,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>While this unit is committed all of your other High Elf units get +1 strength.</p><p><b>Reaction</b>: When one of your High Elf units is making a rout check, add their unspent tactic points to the roll.</p>',
		releases: {
			LW: 6
		},
		faq: []
	},
	{
		id: 'PW1',
		name: 'WarCry',
		cost: 3,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If you win this combat, draw 3 cards.</p>',
		releases: {
			PW: 1
		},
		faq: [4]
	},
	{
		id: 'PW2',
		name: 'Gherin Azyrneth',
		cost: 5,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b> Destroy this unit: Destroy the enemy unit. Only usable while attacking.</p>',
		releases: {
			PW: 2
		},
		faq: [142]
	},
	{
		id: 'PW3',
		name: 'The Twilight Coven',
		cost: 4,
		strength: 4,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b> Discard your hand: When this combat ends, the result is a slaughter.</p>',
		releases: {
			PW: 3
		},
		faq: [3]
	},
	{
		id: 'PW4',
		name: "Gribbit's Wildboyz",
		cost: 3,
		strength: 0,
		tacticPoints: 0,
		leadership: 6,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b>: This unit gets +1 strength for each card in your hand.</p>',
		releases: {
			PW: 4
		},
		faq: []
	},
	{
		id: 'PW5',
		name: 'Survey the Battlefield',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 tactic points.</p>',
		releases: {
			PW: 5
		},
		faq: []
	},
	{
		id: 'PW6',
		name: 'Blade of Soul Stealing',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: <span class="errata">Play</span> any <span class="errata">combat tactic</span> printed on the enemy unit or <span class="errata">one</span> of it\'s attachments<span class="errata">, paying all costs</span>.</p>',
		releases: {
			PW: 6
		},
		errata: true,
		faq: [82, 68]
	},
	{
		id: 'PW7',
		name: 'The Dragonhelm',
		cost: 1,
		unique: true,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>WarCry</b>: Discard the top card of your action deck until you discard a playable combat tactic or run out of cards. Play that card for free.</p>',
		releases: {
			PW: 7
		},
		faq: [92, 94, 68]
	},
	{
		id: 'PW8',
		name: 'Aranauch the Fangheart',
		cost: 6,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 3</p><p>This unit may play WarCry cards as if they were combat tactics.</p>',
		releases: {
			PW: 8
		},
		faq: [124]
	},
	{
		id: 'PW9',
		name: "Bel-Aenor's Grey Kindred",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p>After you draw your command hand, whichever player has the highest "<b>Scout</b>" total draws 2 cards.</p>',
		releases: {
			PW: 9
		},
		faq: []
	},
	{
		id: 'PW10',
		name: 'The White Dwarf',
		cost: 1,
		tacticPoints: 2,
		unique: true,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: Put any number of cards from your hand on top of your deck.</p>',
		releases: {
			PW: 10
		},
		faq: []
	},
	{
		id: 'PW11',
		name: 'Gotrek and Felix',
		cost: 5,
		strength: 2,
		tacticPoints: 9,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit cannot be blocked.</p><p><b>WarCry</b> this unit gets +4 strength. Only playable while this unit is in combat with the enemy unit with the highest strength.</p>',
		releases: {
			PW: 11
		},
		faq: [49, 50]
	},
	{
		id: 'PW12',
		name: "Snorri's Stormshooters",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: Commit any enemy unit in the battle line unless it pases a leadership test. Only usable during this unit's ranged attack.</p>",
		releases: {
			PW: 12
		},
		faq: [74]
	},
	{
		id: 'PW13',
		name: 'Knights of the White Wolf',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p>',
		releases: {
			PW: 13
		},
		faq: []
	},
	{
		id: 'PW14',
		name: "Evaenarion's Silver Company",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 tactic point.</p>',
		releases: {
			PW: 14
		},
		faq: []
	},
	{
		id: 'PW15',
		name: 'Winds of Magic',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: You get 3 spell points.</p>',
		releases: {
			PW: 15
		},
		faq: []
	},
	{
		id: 'PW16',
		name: 'Fires of Change',
		cost: 3,
		die: 1,
		keywords: ['Chaos'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Spell WarCry</b> (X): Destroy the enemy unit if it has strength X or less. Replace that unit in combat with any unit from your enemy's army discard pile. Only playable while you have a ready Chaos wizard.</p>",
		releases: {
			PW: 16
		},
		faq: [95, 96, 257, 260, 261, 262]
	},
	{
		id: 'PW17',
		name: 'Doom Bolt',
		cost: 2,
		die: 2,
		keywords: ['Dark Elf'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>Spell WarCry</b> (2): Commit the enemy unit if it has a strength less than your spell points. Only usable while you have a ready Dark Elf wizard.</p>',
		releases: {
			PW: 17
		},
		faq: [169]
	},
	{
		id: 'PW18',
		name: 'Foot of Gork',
		die: 3,
		keywords: ['Orc'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		text: '<p><b>Spell Command</b> (2): You and your enemy both roll. If your roll is higher, commit 1 enemy unit. Only playable while you have a ready Orc wizard.</p>',
		releases: {
			PW: 18
		},
		faq: [244]
	},
	{
		id: 'PW19',
		name: 'Rune of Adamant',
		cost: 2,
		die: 3,
		keywords: ['Dwarf'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (X): Destroy X enemy attachments in this combat. This unit gets +X strength. Only playable while you have a ready Dwarf runesmith.</p>',
		releases: {
			PW: 19
		},
		faq: [95, 96]
	},
	{
		id: 'PW20',
		name: "Gelt's Golden Glyph",
		cost: 3,
		die: 1,
		keywords: ['Empire'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: "<p><b>Spell WarCry</b> (2): This unit gets a strength bonus equal to the enemy unit's gold cost. Only playable if you have a ready Empire wizard.</p>",
		releases: {
			PW: 20
		},
		faq: [97]
	},
	{
		id: 'PW21',
		name: 'Flames of the Phoenix',
		cost: 1,
		die: 3,
		keywords: ['High Elf'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Spell WarCry</b> (1): At the end of the tactics phase, this unit gets +1 strength for each combat tactic played this combat. Only playable if you have a ready High Elf wizard.</p>',
		releases: {
			PW: 21
		},
		faq: [56]
	},
	{
		id: 'PW22',
		name: 'Siege of Darkness',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each of your ready war machine units.</p>',
		releases: {
			PW: 22
		},
		faq: []
	},
	{
		id: 'PW23',
		name: "Azyrneth's Chosen",
		cost: 6,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets +1 strength for each of your other daemon units.</p>',
		releases: {
			PW: 23
		},
		faq: []
	},
	{
		id: 'PW24',
		name: 'Heralds of Twilight',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b>: Your enemy discards 2 cards.</p>',
		releases: {
			PW: 24
		},
		faq: []
	},
	{
		id: 'PW25',
		name: "Bogrot's Savage 'Uns",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b>: If the enemy unit has strength 3 or less, this unit gets +3 strength.</p>',
		releases: {
			PW: 25
		},
		faq: []
	},
	{
		id: 'PW26',
		name: 'Stone Lords of Karak-Norn',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>The first attachment played on this unit has it's gold cost reduced to 0.</p>",
		releases: {
			PW: 26
		},
		faq: [99, 101, 102]
	},
	{
		id: 'PW27',
		name: "Reinhold's Middenheimers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Copy any combat tactic card played by the enemy paying all costs.</p>',
		releases: {
			PW: 27
		},
		faq: [93, 75, 76]
	},
	{
		id: 'PW28',
		name: "Evaenarion's Silver Blades",
		cost: 6,
		strength: 6,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>WarCry</b>: Draw 1 card.</p><p><b>Combat Tactic</b> Discard 1 card: This unit gets +2 tactic points.</p>',
		releases: {
			PW: 28
		},
		faq: []
	},
	{
		id: 'PW29',
		name: "Shagroth's Gors",
		cost: 4,
		strength: 5,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b> Discard 1 card: This unit gets a tactic point bonus equal to the die on the discarded card.</p>',
		releases: {
			PW: 29
		},
		faq: [95]
	},
	{
		id: 'PW30',
		name: "Houton Red's Mercenaries",
		cost: 4,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b> Discard 1 card: This unit gets +X or -X strength where X is the die of the discarded card. This combat tactic may be played multiple times. Either player may play this combat tactic.</p>',
		releases: {
			PW: 30
		},
		faq: [95]
	},
	{
		id: 'PW31',
		name: 'Lord Xili-Quncani',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p>This unit gets "<b>Victory</b>: +1" for each of your enemy\'s spell points.</p>',
		releases: {
			PW: 31
		},
		faq: []
	},
	{
		id: 'PW32',
		name: 'Decisive Maneuver',
		cost: 0,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Play up to 2 combat or support tactics, paying all costs.</p>',
		releases: {
			PW: 32
		},
		faq: [80, 68]
	},
	{
		id: 'PW33',
		name: 'Defend Against the Siege',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After your enemy plays a support tactic, draw 2 cards.</p>',
		releases: {
			PW: 33
		},
		faq: [228]
	},
	{
		id: 'PW34',
		name: 'From the Hands of Defeat...',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (2): Raise this units strength to equal the enemy units strength.</p>',
		releases: {
			PW: 34
		},
		faq: []
	},
	{
		id: 'PW35',
		name: 'Blade of the Assassin',
		cost: 3,
		die: 3,
		keywords: ['Dark Elf'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p>You may play this card before the attackers first tactic.</p><p><b>Combat Tactic</b>: This Dark Elf unit gets +2 strength and the enemy unit gets -2 tactic points.</p>',
		releases: {
			PW: 35
		},
		faq: [168, 69]
	},
	{
		id: 'PW36',
		name: 'Chaos Mutation',
		cost: 3,
		die: 1,
		keywords: ['Chaos'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: This Chaos unit gets +4 strength and "<b>Terror</b>: 2".</p>',
		releases: {
			PW: 36
		},
		faq: [268]
	},
	{
		id: 'PW37',
		name: 'Might of the Orc Horde',
		cost: 2,
		die: 2,
		keywords: ['Orc'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If you win this combat rout the enemy unit. Only playable by an Orc unit.</p>',
		releases: {
			PW: 37
		},
		faq: [195, 145, 148]
	},
	{
		id: 'PW38',
		name: 'Rune of Fortitude',
		cost: 1,
		die: 3,
		keywords: ['Dwarf'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): This Dwarf unit gets +3 strength if it has an armor attachment.</p>',
		releases: {
			PW: 38
		},
		faq: []
	},
	{
		id: 'PW39',
		name: "Gausser's Maneuver",
		cost: 1,
		die: 2,
		keywords: ['Empire'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: "<p><b>WarCry</b>: Your units' support tactics do not require them to commit. Only playable by an Empire unit.</p>",
		releases: {
			PW: 39
		},
		faq: []
	},
	{
		id: 'PW40',
		name: 'Perfect Timing',
		cost: 1,
		die: 3,
		keywords: ['High Elf'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This High Elf unit gets +1 strength. Play 1 strategy card.</p>',
		releases: {
			PW: 40
		},
		faq: []
	},
	{
		id: 'PW41',
		name: 'Dogs of War',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This Dogs of War unit gets +2 strength.</p>',
		releases: {
			PW: 41
		},
		faq: [121]
	},
	{
		id: 'PW43',
		name: "Melkior's Warband",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>When you muster this unit, search your deck for Vargharn Melkior and add it to your hand.</p><p><b>Reaction</b>: After an enemy unit passes a leadership test, draw 1 card.</p>',
		releases: {
			PW: 43
		},
		faq: [113, 115]
	},
	{
		id: 'PW44',
		name: "Dhargethen's Bloodkith",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>When you muster this unit, search your deck for Naetharion Dhargethen and add it to your hand.</p><p><b>WarCry</b>: If this combat ends in a slaughter, this unit wins instead.</p>',
		releases: {
			PW: 44
		},
		faq: [196, 247, 113, 115]
	},
	{
		id: 'PW45',
		name: "Headsplitter's Big 'Uns",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>When you muster this unit search your deck for Big Boss Ghulgar Headsplitter and ad it to your hand.</p><p><b>WarCry</b>: This unit gets +2 strength. Not playable during a follow-up attack.</p>',
		releases: {
			PW: 45
		},
		faq: [113, 115]
	},
	{
		id: 'PW46',
		name: "Skriskrivet's Jezzails",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Long Ranged Attack</b>: 5</p><p><b>Support Tactic</b>: Destroy 1 character attachment on the enemy unit.</p>',
		releases: {
			PW: 46
		},
		faq: []
	},
	{
		id: 'PW47',
		name: "Skriskrivet's Skyre Globethrowers",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: Commit 1 enemy unit in the reserves unless it passes a strength test.</p>',
		releases: {
			PW: 47
		},
		faq: [270, 74]
	},
	{
		id: 'PW48',
		name: 'Gaston Balduhild',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +d6 strength if it passes a leadership test.</p>',
		releases: {
			PW: 48
		},
		faq: []
	},
	{
		id: 'PW49',
		name: "Sigigard's Grail Knights",
		cost: 6,
		strength: 4,
		tacticPoints: 6,
		leadership: 3,
		unique: true,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Faith</b>: 2</p><p><b>WarCry</b>: This unit gets +1 strength for each of it's attachments if it passes a leadership test.</p>",
		releases: {
			PW: 49
		},
		faq: []
	},
	{
		id: 'PW50',
		name: "Grimjaw's Clanbrothers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>When you muster this unit, search your deck for Barak Grimjaw and add it to your hand.</p><p><b>WarCry</b>: This unit gets +1 strength for each attachment on the enemy unit.</p>',
		releases: {
			PW: 50
		},
		faq: [113, 115]
	},
	{
		id: 'PW51',
		name: "Riemann's Elites",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>When you muster this unit, search your deck for Captain Karl Riemann and add it to your hand.</p><p><b>WarCry</b>: Look at the top 4 cards of your action deck and replace them in any order.</p>',
		releases: {
			PW: 51
		},
		faq: [112, 113, 115]
	},
	{
		id: 'PW52',
		name: "Evaenarion's Companions",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>When you muster this unit, search your deck for Rylanus Evaenarion and add it to your hand.</p><p><b>WarCry</b>: This unit gets +1 strength for each of your strategy cards.</p>',
		releases: {
			PW: 52
		},
		faq: [113, 115]
	},
	{
		id: 'PW53',
		name: 'Saauthrilast',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: The enemy unit must pass a leadership test. If they fail, they may not play combat tactic cards or abilities during this combat.</p>',
		releases: {
			PW: 53
		},
		faq: []
	},
	{
		id: 'PW54',
		name: 'Dauntless Reckoning',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If you win this combat, destroy all units that played support tactics on the combat.</p>',
		releases: {
			PW: 54
		},
		faq: [4, 81, 10]
	},
	{
		id: 'PW55',
		name: 'Path of Glory',
		cost: 1,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Double all bonuses this unit receives this combat.</p><p><b>WarCry</b>: Halve all bonuses the enemy receives this combat, rounding down.</p>',
		releases: {
			PW: 55
		},
		faq: [39, 41, 42, 43, 44]
	},
	{
		id: 'PW56',
		name: 'Baron Porthos the Outcast',
		cost: 0,
		tacticPoints: 1,
		unique: true,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p>After you muster this attachment do not draw to replace it.</p>',
		releases: {
			PW: 56
		},
		faq: []
	},
	{
		id: 'PW57',
		name: 'Blade of the Norn Sword',
		cost: 1,
		leadership: 2,
		unique: true,
		keywords: ['Blade'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 leadership.</p>',
		releases: {
			PW: 57
		},
		faq: []
	},
	{
		id: 'PW58',
		name: 'Kyral-Tor, the Norn Sword',
		cost: 1,
		strength: 1,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength, +1 tactic point and +1 leadership.</p>',
		releases: {
			PW: 58
		},
		faq: []
	},
	{
		id: 'PW59',
		name: 'Shard of the Norn Sword',
		cost: 1,
		unique: true,
		keywords: ['Shard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p><b>Combat Tactic</b>: This unit gets +1 strength for each of it's attachments.</p>",
		releases: {
			PW: 59
		},
		faq: []
	},
	{
		id: 'PW60',
		name: 'Mage Gerhart Brennend',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Veteran</b>: Gerhart Brennend, Bright <b>Wizard</b></p><p><b>Wizard</b>: 2</p><p>This unit may use tactic points as spell points.</p>',
		releases: {
			PW: 60
		},
		faq: []
	},
	{
		id: 'PW61',
		name: "Alya's Thorn Patrol",
		cost: 4,
		strength: 2,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Ranged Attack</b>: 4</p><p><b>Reaction</b>: After this unit receives a strength bonus increase it's ranged attack by the same amount.</p>",
		releases: {
			PW: 61
		},
		faq: [41]
	},
	{
		id: 'PW62',
		name: 'Liche Priest Amuntahk',
		cost: 4,
		strength: 1,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p><b>Victory</b>: +2</p><p><b>Reaction</b> Discard 1 card: After one of your units commits a unit with a ranged attack, destroy the committed unit.</p>',
		releases: {
			PW: 62
		},
		faq: []
	},
	{
		id: 'PW63',
		name: "Nekhesh's Eternity Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After an enemy unit gets a strength bonus while in vombat with this unit, this unit gets +1 strength.</p>',
		releases: {
			PW: 63
		},
		faq: [36, 39, 41]
	},
	{
		id: 'PW64',
		name: 'Deathmaster Snikch',
		cost: 7,
		strength: 0,
		tacticPoints: 7,
		leadership: 2,
		unique: true,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Command</b>: Discard any number of cards from your hand: Once per battle, destroy a committed unit with a gold cost less than the discarded card's total dice.</p>",
		releases: {
			PW: 64
		},
		faq: [97, 133]
	},
	{
		id: 'PW65',
		name: 'Tomb Guard of Nekhesh',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may not perform follow-up attacks.</p><p><b>Reaction</b>: After this unit destroys an enemy unit in a combat, attach the top card of your action deck to this unit. While attached this unit has a "<b>Victory</b>" bonus equal to the die number on the card.</p>',
		releases: {
			PW: 65
		},
		faq: []
	},
	{
		id: 'PW66',
		name: 'Plague Truck',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Skaven', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Veteran</b>: Sigismund, Steam Tank of the Empire</p><p><b>Terror</b>: 2</p><p><b>Ranged Attack</b>: 8</p><p><b>WarCry</b>: At the end of the combat this unit gets +1 strength for each combat tactic played by the enemy.</p>',
		releases: {
			PW: 66
		},
		faq: []
	},
	{
		id: 'PW67',
		name: 'The Dark Axe of the North',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Grand Alliance units. If the enemy unit is an Empire unit, this unit gets +3 strength and "<b>Terror</b>: 2" instead.</p>',
		releases: {
			PW: 67
		},
		faq: [268]
	},
	{
		id: 'PW68',
		name: 'Chariots of Alkhazzar',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Khemri', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit commits a unit with a ranged attack, do not commit this unit. This unit immediately declares a non-ranged attack against that enemy unit.</p>',
		releases: {
			PW: 68
		},
		faq: []
	},
	{
		id: 'PW69',
		name: "Eternity's Sentinel",
		cost: 6,
		strength: 6,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: If this unit's strength is greater than the enemy unit's strength, play a combat tactic from your hand without paying it's tactic point cost.</p>",
		releases: {
			PW: 69
		},
		faq: [68]
	},
	{
		id: 'PW70',
		name: 'King Nekhesh of the First Dynasty',
		cost: 7,
		strength: 6,
		tacticPoints: 6,
		leadership: 5,
		unique: true,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Command</b> Discard 1 card and destroy one of your units: Search your discard pile for another Khemri unit with a gold cost equal to or less than the destroyed units gold cost and put it in play. Only playable while the enemy has a ready unit.</p><p><b>Support Tactic</b> Remove X Khemri units in your army discard pile from the game: Your unit gets +X strength.</p>',
		releases: {
			PW: 70
		},
		faq: [97]
	},
	{
		id: 'PW71',
		name: 'Liche Priest Ahkaten',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Reaction</b>: Once per battle, after a Khemri unit with a gold cost of 3 or less is destroyed, roll. If the roll is greater than the unit's leadership, return the unit to play in your reserves, committed.</p>",
		releases: {
			PW: 71
		},
		faq: [97, 133, 288]
	},
	{
		id: 'PW72',
		name: 'Riders of Nekhesh',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Khemri', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: Discard the top card of your army deck. If that card is a Khemri unit, you may remove that card from the game to give this unit +3 strength.</p>',
		releases: {
			PW: 72
		},
		faq: []
	},
	{
		id: 'PW73',
		name: 'Soldiers of Nekhesh',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: Infinity,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>You may have any number of this card in your deck.</p><p><b>Support Tactic</b>: Your Khemri infantry unit gets +1 strength. Only playable while this unit is in the battle line.</p>',
		releases: {
			PW: 73
		},
		faq: []
	},
	{
		id: 'PW74',
		name: 'Sun Chariots of Ptaph',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Khemri', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Support WarCry</b>: Your infantry unit gets +2 strength and -1 tactic points. Only playable while this unit is in the battle line.</p>',
		releases: {
			PW: 74
		},
		faq: [168]
	},
	{
		id: 'PW75',
		name: 'Valiant Dead of Ptaph',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: The defending unit gets +1 strength. Only playable if you have a <b>Wizard</b> in play.</p>',
		releases: {
			PW: 75
		},
		faq: []
	},
	{
		id: 'PW76',
		name: 'Daggers of the Dead',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Khemri', 'Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p>May only be attached to a Khemri unit.</p><p><b>Support Tactic</b>: If your attacking Khemri unit loses this combat, the enemy may not make a follow-up attack. If you lose this combat, destroy this card.</p>',
		releases: {
			PW: 76
		},
		faq: []
	},
	{
		id: 'PW77',
		name: 'Destroyer of Eternities',
		cost: 2,
		strength: 1,
		unique: true,
		keywords: ['Khemri', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: "<p>May only be attached to a Khemri unit.</p><p><b>WarCry</b>: If you win this non-ranged attack combat, remove the defeated unit from the game. Search your enemy's army discard pile for all copies of the defeated unit and remove those from the game.</p>",
		releases: {
			PW: 77
		},
		faq: [4]
	},
	{
		id: 'PW78',
		name: 'Staff of Mastery',
		cost: 2,
		strength: 1,
		unique: true,
		keywords: ['Khemri', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p>May only be attached to a wizard unit.</p><p>All of your Khemri units have "<b>Terror</b>: 1."</p><p><b>Spell Reaction</b> (2): After you rout an enemy unit, do not make a follow-up attack. Choose a Khemri unit in your army discard pile with a gold cost of 3 or less and put that into play.</p>',
		releases: {
			PW: 78
		},
		faq: [149]
	},
	{
		id: 'PW79',
		name: 'The Birdmen of Catrazza',
		cost: 5,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Flyer'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: "<p><b>Reaction</b>: After your enemy plays a card or ability to draw 1 or more cards or to force you to discard 1 or more cards, negate it's effect. Attach a combat tactic card from your hand to this unit face up.</p><p><b>Combat Tactic</b> Discard 1 attached card: Play that card, paying no costs.</p>",
		releases: {
			PW: 79
		},
		faq: [157, 179, 15, 16, 135, 252, 161, 162]
	},
	{
		id: 'PW80',
		name: 'Fires from Within',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell WarCry</b> (1): At The end of the tactics phase, this unit gets a strength bonus equal to the number of tactic cards played by the enemy unit.</p>',
		releases: {
			PW: 80
		},
		faq: []
	},
	{
		id: 'PW81',
		name: 'Formulate a Plan',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Command</b>: Name a card. Reveal your hand and shuffle all copies of that card in your hand and discard pile into your deck. Draw 1 card.</p>',
		releases: {
			PW: 81
		},
		faq: [114]
	},
	{
		id: 'PW82',
		name: 'Hold and Do Not Be Lured',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After routing an enemy unit as a defender. If your unit has a higher printed strength than the enemy unit, return your unit to the battle line ready. You may not make a follow-up attack.</p>',
		releases: {
			PW: 82
		},
		faq: [60]
	},
	{
		id: 'PW83',
		name: 'Legions of Chaos',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>This card is not destroyed after the battle in which it was brought into play.</p><p><b>Reaction</b> Destroy this card: When you are mustering a "Unique" unit, reduce the unit\'s gold cost by 2.</p>',
		releases: {
			PW: 83
		},
		faq: [100, 101, 102, 164]
	},
	{
		id: 'PW84',
		name: 'Siege of Middenheim',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Command</b>: Place up to 3 cards from your army discard pile on top of your deck.</p>',
		releases: {
			PW: 84
		},
		faq: []
	},
	{
		id: 'PW85',
		name: 'Unrelenting Horde',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: Before you make a rout check, rout the enemy unit. You may only play this card if your unit has a printed gold cost of 5 or more.</p>',
		releases: {
			PW: 85
		},
		faq: []
	},
	{
		id: 'PW86',
		name: 'Coffer of Gold',
		cost: 0,
		strength: -1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p>You get 1 extra gold during the muster phase.</p><p><b>Combat Tactic</b>: This unit gets +1 leadership.</p>',
		releases: {
			PW: 86
		},
		faq: [22]
	},
	{
		id: 'PW87',
		name: 'Crown of the Champion',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p><b>Reaction</b>: After this unit plays its first WarCry card in combat, reduce the WarCry's tactic point cost to 0.</p>",
		releases: {
			PW: 87
		},
		faq: []
	},
	{
		id: 'PW88',
		name: 'Sceptre of Sovereignty',
		cost: 1,
		unique: true,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Support WarCry</b>: Your unit gets +4 strength. You do not make a combat roll this combat.</p>',
		releases: {
			PW: 88
		},
		faq: [236]
	},
	{
		id: 'PW89',
		name: 'Coatlcol',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Reaction</b>: Before you muster this unit, you may increase this unit's gold cost by 1 and make a leadership test. If you pass the test, attach the top card of your action deck to this unit. While attached this unit has <b>Scout</b> equal to the die number.</p>",
		releases: {
			PW: 89
		},
		faq: []
	},
	{
		id: 'PW90',
		name: 'Cupped Hands of the Old Ones',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Lizardmen', 'Item'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p>May only be attached to a Lizardmen unit.</p><p><b>Support Tactic</b>: Your unit in a ranged attack gets +2 strength or your unit in a non-ranged attack gets +1 leadership.</p>',
		releases: {
			PW: 90
		},
		faq: []
	},
	{
		id: 'PW91',
		name: 'Dawn Spawn of Hexoatl',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b> Rally an enemy unit: This unit gets +3 strength and "<b>Terror</b>: 2".</p>',
		releases: {
			PW: 91
		},
		faq: [268]
	},
	{
		id: 'PW92',
		name: 'Guard of the Ziggurat',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Reaction</b> Destroy this unit: After one of your other units loses a combat, return it to your battle line committed.</p>',
		releases: {
			PW: 92
		},
		faq: [60]
	},
	{
		id: 'PW93',
		name: 'Zacharias the Everlasting',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Vampire Counts', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p>This unit may play spell WarCry cards as normal spell combat tactics.</p><p><b>Combat Tactic</b>: Reveal your hand. If you do not have a spell in your hand, search your deck for a spell and add it to your hand.</p>',
		releases: {
			PW: 93
		},
		faq: [115, 124]
	},
	{
		id: 'PW94',
		name: 'Barku',
		cost: 6,
		strength: 6,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit commits a unit using its ranged attack, make a leadership test. If this unit passes that test, destroy the committed unit.</p><p><b>Support Tactic</b> Commit: Destroy the enemy unit if the enemy unit has an ability to generate tokens.</p>',
		releases: {
			PW: 94
		},
		faq: []
	},
	{
		id: 'PW95',
		name: 'Lord Botl-Xlotac',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 5,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1) Discard 1 card: After your enemy plays a support tactic, negate it's effects.</p>",
		releases: {
			PW: 95
		},
		faq: [159]
	},
	{
		id: 'PW96',
		name: 'Lord Mazdamundi',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 5,
		keywords: ['Lizardmen', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p><b>Victory</b>: +2</p><p>While this unit is ready all of your lizardmen have "<b>Faith</b>: 1".</p><p><b>Spell Support Tactic</b> (1): Play or destroy a terrain card.</p>',
		releases: {
			PW: 96
		},
		faq: []
	},
	{
		id: 'PW97',
		name: 'Gnoblars of the Black Hills',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Reaction</b> Commit: After a support tactic is played, destroy the unit that played that support tactic.</p>',
		releases: {
			PW: 97
		},
		faq: [83]
	},
	{
		id: 'PW98',
		name: "Rokanquol's Terradon",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Lizardmen', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: This combat ends immediately. No further actions may be taken and no roll is made. Both units are rallied if committed, the enemy unit is returned to the battle line and this unit is returned to the reserves ready.</p><p>Only playable while attacking.</p>',
		releases: {
			PW: 98
		},
		banned: true,
		faq: [142, 186]
	},
	{
		id: 'PW99',
		name: 'Nisroch, the Beast of the Hills',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Reaction</b>: If a copy of this unit is not in play, after your enemy rolls an unmodified 6, search your army deck (not discard pile) for a copy of this card and put it into your reserves. Shuffle your army deck.</p><p>This ability may be played from your army deck.</p>',
		releases: {
			PW: 99
		},
		faq: [114]
	},
	{
		id: 'PW100',
		name: 'Spawning of Kolquetz',
		cost: 3,
		strength: 1,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Scout</b>: 3</p><p>This unit attacks as cavalry.</p><p><b>Short Ranged Attack</b>: 4</p><p><b>Reaction</b>: After this unit wins a ranged attack destroy the enemy unit.</p>',
		releases: {
			PW: 100
		},
		faq: [25]
	},
	{
		id: 'PW101',
		name: 'The Thunder that Walks',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Lizardmen', 'Monster', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Command</b>: Once per battle, this unit may perform a "<b>Ranged Attack</b>: 6" attack without committing.</p><p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable during a follow-up attack.</p>',
		releases: {
			PW: 101
		},
		faq: [133]
	},
	{
		id: 'PW102',
		name: "Tekoq-Koq's Spawn",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Scout</b>: 2</p><p>This unit attacks as cavalry.</p><p><b>Reaction</b>: After an enemy unit rallies, draw 1 card.</p>',
		releases: {
			PW: 102
		},
		faq: [25]
	},
	{
		id: 'PW103',
		name: 'Tzurel, Hunter for the Kingdoms',
		cost: 5,
		strength: 4,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Command</b>: Once per battle, take the top card of your army deck and put it into play face down adjacent to this unit as a monster cavalry unit with 2 strength, 2 tactic points, 2 leadership, "<b>Terror</b>: 1", and a gold cost of 0. The new unit must immediately declare an attack. Once this command is over, put the new unit into your army discard pile.</p>',
		releases: {
			PW: 103
		},
		faq: [133]
	},
	{
		id: 'PW104',
		name: 'Tzahuan the Lurker',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit attacks as cavalry.</p><p><b>Combat Tactic</b>: Reveal the top card of your army deck. If that unit is another copy of this card, put that card in your battle line.</p>',
		releases: {
			PW: 104
		},
		faq: [25]
	},
	{
		id: 'PW105',
		name: 'Lupus Halfwulf',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Scout</b>: 5</p><p><b>Terror</b>: 2</p>',
		releases: {
			PW: 105
		},
		faq: []
	},
	{
		id: 'PW106',
		name: 'The Hammer of the Southern Realm',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength vs. Hordes of Darkness units. If the enemy unit is a Chaos unit, this unit gets +3 strength and +2 leadership instead.</p>',
		releases: {
			PW: 106
		},
		faq: []
	},
	{
		id: 'PW107',
		name: 'Bringers of Darkness',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b>: If you rout the enemy unit, commit the enemy unit instead of destroying it. Choose another unit in the enemy's battle line and commit that unit as well. This unit may still perform a follow-up attack.</p>",
		releases: {
			PW: 107
		},
		faq: [144]
	},
	{
		id: 'PW108',
		name: 'Harbingers of War',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b> Remove this card from the game: One of your other ready units may declare an attack. Units already involved in combat may not play abilities or be targeted during this attack. Resolve the new attack and all follow-ups before returning to this combat. If you win the new combat, this unit gets a +2 strength bonus. You may not play another copy of this card for the rest of the battle.</p>',
		releases: {
			PW: 108
		},
		faq: [194, 4]
	},
	{
		id: 'PW109',
		name: 'Shift in Balance',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Command</b>: Choose an enemy unit with at least one attached action card. Destroy all attached action cards on the target unit and rally one of your units with a gold cost of 3 or less.</p>',
		releases: {
			PW: 109
		},
		faq: [97]
	},
	{
		id: 'PW110',
		name: 'Take Away the Ladder',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Spell Reaction</b> (2): Choose a reaction printed on one of your cards in play and activate it without paying any costs. The chosen reaction must be one that can be played at this time, but it may be on a committed unit and/</p><p>or a reaction that has already been played.</p>',
		releases: {
			PW: 110
		},
		faq: []
	},
	{
		id: 'PW111',
		name: 'Take One Path While Pretending to Take Another',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>After an attack is declared, the defending player chooses the defending unit to be attacked and may ignore infantry, cavalry, and flyer restrictions.</p>',
		releases: {
			PW: 111
		},
		faq: [194, 31]
	},
	{
		id: 'PW112',
		name: 'The Guest Becomes the Host',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b>: Your enemy replaces this unit with any of your other units. You replace your enemy's unit with one of their other units. Ready units remain ready and committed units remain committed.</p><p>All bonuses and effects applied to the previous units are now applied to the new units.</p>",
		releases: {
			PW: 112
		},
		faq: [257, 258, 259, 263, 264, 265, 266, 267]
	},
	{
		id: 'PW113',
		name: 'Under Concealment of Broad Daylight',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: Name a die number. Your enemy draws and reveals 3 cards. If any of the revealed cards have the named die number, those cards are removed from the game, the others are discarded and your unit gets +2 strength.</p><p>If none of the revealed cards have the named die number, your enemy adds those cards to their hand.</p>',
		releases: {
			PW: 113
		},
		faq: []
	},
	{
		id: 'PW114',
		name: 'Watch the Fire from Across the River',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>WarCry</b> Discard two cards from your hand: Rally one of your units with a gold cost less than this unit's gold cost.</p>",
		releases: {
			PW: 114
		},
		faq: [97]
	},
	{
		id: 'PW115',
		name: 'Armour of the Harbinger',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p>If attached to a Harbinger this card's gold cost is reduced by 1 (minimum 0).</p><p><b>Reaction</b>: After this unit enters a combat, instead of drawing a card this unit gets +3 strength.</p>",
		releases: {
			PW: 115
		},
		faq: [99, 101, 102]
	},
	{
		id: 'PW116',
		name: 'Champion of the Harbinger',
		cost: 2,
		tacticPoints: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p>If attached to a Harbinger this card's gold cost is reduced by 1 (minimum 0).</p><p><b>Reaction</b>: After this unit gets a strength bonus, that bonus is increased by +1.</p>",
		releases: {
			PW: 116
		},
		faq: [35, 36, 39, 41, 99, 101, 102, 44]
	},
	{
		id: 'PW117',
		name: 'Horn of the Harbinger',
		cost: 2,
		tacticPoints: 1,
		unique: true,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p>If attached to a Harbinger this card's gold cost is reduced by 1 (minimum 0).</p><p><b>Combat Tactic</b>: Draw 1 card. You may not use this ability if you have 4 or more cards in your hand.</p>",
		releases: {
			PW: 117
		},
		faq: [99, 101, 102]
	},
	{
		id: 'PW118',
		name: 'Sword of the Harbinger',
		cost: 2,
		strength: 2,
		unique: true,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p>If attached to a Harbinger this card\'s gold cost is reduced by 1 (minimum 0).</p><p><b>Combat Tactic</b>: This unit gets +2 leadership. If this takes this unit\'s leadership over 6, this unit gets "<b>Terror</b>: 3".</p>',
		releases: {
			PW: 118
		},
		faq: [99, 101, 102, 268]
	},
	{
		id: 'PW119',
		name: 'Mistress Chloee',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Command</b> (2): While this unit remains in play all units with ranged attack or long ranged attack have short ranged attack instead.</p><p><b>Spell Command</b> Commit one of your other wizards (0): Gain 3 spell points.</p>',
		releases: {
			PW: 119
		},
		faq: []
	},
	{
		id: 'PW120',
		name: 'Sigismund, Steam Tank of the Empire',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Ranged Attack</b>: 8</p><p><b>WarCry</b>: This unit gets +1 strength or +1 <b>Ranged Attack</b> for each card in your enemy's hand.</p><p><b>Reaction</b>: After you draw a card for this unit entering a combat, discard that card and draw another card.</p>",
		releases: {
			PW: 120
		},
		faq: []
	},
	{
		id: 'PW121',
		name: 'Toq-Zat, Rage of the Earth',
		cost: 6,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Lizardmen', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After this unit has won a combat against an enemy unit with a gold cost of 3 or less, target and destroy another unit with a gold cost of 3 or less. Then, if your enemy has any committed units you must rally an enemy unit.</p>',
		releases: {
			PW: 121
		},
		faq: [97]
	},
	{
		id: 'PW122',
		name: 'Tzar Boris',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p>If this unit routs the enemy unit it must make a follow-up attack.</p><p><b>WarCry</b>: No more tactics may be played during this combat.</p>',
		releases: {
			PW: 122
		},
		faq: [144]
	},
	{
		id: 'PW123',
		name: 'Savour the Victory',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If this unit wins this combat, attach this card to this unit. While attached this unit gets the ability "Command Discard this card: Rally this unit. This may be played while the unit is committed."</p>',
		releases: {
			PW: 123
		},
		faq: [4]
	},
	{
		id: 'PW124',
		name: 'Gar-Oax Oldblood',
		cost: 2,
		strength: 1,
		keywords: ['Lizardmen', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: "<p>May only be attached to a Lizardmen unit.</p><p><b>Combat Tactic</b> Rally an enemy unit: This unit gets +X strength. X equals this unit's printed strength. If this combat ends in a slaughter, this unit wins instead.</p>",
		releases: {
			PW: 124
		},
		faq: [196, 95, 247]
	},
	{
		id: 'PW125',
		name: 'Horde of Hexoatl',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After a Hordes of Darkness unit is destroyed, put a +1 strength token on this unit.</p>',
		releases: {
			PW: 125
		},
		faq: []
	},
	{
		id: 'PW126',
		name: 'Hexoatl Temple Guard',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit may block any non-ranged attack targeting one of your Lizardmen units.</p><p><b>Combat Tactic</b> Rally an enemy unit: This unit gets +6 strength. Only playable while defending.</p>',
		releases: {
			PW: 126
		},
		faq: []
	},
	{
		id: 'PW127',
		name: 'Tepoc-Kroq',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit is immune to "<b>Terror</b>".</p><p><b>Combat Tactic</b>: This unit gets +2 leadership. Only playable while attacking.</p>',
		releases: {
			PW: 127
		},
		faq: [142]
	},
	{
		id: 'PW128',
		name: 'Moon Spawn of Hexoatl',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Command</b> Discard 3 cards: Rally this unit and declare an attack on a committed Hordes of Darkness unit. You may only use this ability while committed. Only playable once per battle.</p>',
		releases: {
			PW: 128
		},
		faq: [133]
	},
	{
		id: 'PW129',
		name: 'Scar-veteran Raq-goq',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Command</b> Commit this unit: While this unit remains committed, all of your Lizardmen have the keyword "Infantry" replaced with the keyword "Cavalry".</p>',
		releases: {
			PW: 129
		},
		faq: []
	},
	{
		id: 'PW130',
		name: "Ptaph's Tomb Scorpion",
		cost: 5,
		strength: 6,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Khemri', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Victory</b>: -2</p><p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: If you have a wizard in play and this combat ends in a slaughter, this unit wins instead. You may use this ability up to 2 times per combat.</p>',
		releases: {
			PW: 130
		},
		faq: [196, 247]
	},
	{
		id: 'PW131',
		name: 'Razutt the Angry',
		cost: 3,
		strength: 4,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 1</p><p><b>Combat Tactic</b>: This unit gets +1 strength unless the enemy unit passes a leadership test.</p><p><b>Command</b>: Once per battle, exchange an enemy unit in the battle line with an enemy unit in the reserves. You may immediately declare an attack with this unit.</p>',
		releases: {
			PW: 131
		},
		faq: [133]
	},
	{
		id: 'PW132',
		name: 'Dugurth the Rowdy',
		cost: 4,
		strength: 5,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: The enemy unit gets -X tactic points. X equals this units level of "<b>Terror</b>".</p><p><b>Reaction</b> Destroy this unit: After an enemy unit uses an ability printed on a unit or attached card to commit one of your units, destroy that enemy unit. You may play this ability while committed.</p>',
		releases: {
			PW: 132
		},
		faq: [168]
	},
	{
		id: 'PW133',
		name: 'Face the Danger',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>This card may be put into play as a combat tactic for 1 point.</p><p><b>Reaction</b>: When your enemy plays a card that removes itself from the game as a cost or effect, they must also discard 1 random card from their hand.</p>',
		releases: {
			PW: 133
		},
		faq: [134]
	},
	{
		id: 'PW134',
		name: 'A Question of Morale',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>WarCry</b>: The enemy unit's leadership is reduced by your unit's printed tactic points.</p>",
		releases: {
			PW: 134
		},
		faq: []
	},
	{
		id: 'PW135',
		name: 'Battle Yell',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>WarCry</b>: The enemy unit's tactic points are reduced by your unit's printed leadership.</p>",
		releases: {
			PW: 135
		},
		faq: []
	},
	{
		id: 'PW136',
		name: "Jasenland's Entrenchment",
		cost: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: This ready unit gets +7 strength. If this unit wins the combat, return both units to the battle line ready instead of any units being destroyed; you may not make a follow-up attack. You may not play any other cards in this combat.</p>',
		releases: {
			PW: 136
		},
		faq: [4, 60, 66]
	},
	{
		id: 'PW137',
		name: 'The Strong Survive',
		cost: 6,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +7 strength.</p>',
		releases: {
			PW: 137
		},
		faq: []
	},
	{
		id: 'PW138',
		name: 'Stalemate',
		cost: 3,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Neither unit may be destroyed nor committed as a result of this combat (card effects in the combat may still destroy or commit units). Units may still be routed and follow-up attacks may be made as normal, as if the loser had been destroyed.</p>',
		releases: {
			PW: 138
		},
		faq: [248, 66]
	},
	{
		id: 'PW139',
		name: 'Narrow Pass',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Support Tactic</b>: Players may not play combat tactic cards with a tactic point cost greater than 1.</p>',
		releases: {
			PW: 139
		},
		faq: []
	},
	{
		id: 'PW140',
		name: 'Two Hands, Two Swords',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Attach this card to your unit. While attached this unit may have 2 weapons attached. Get up to 2 weapons from your discard pile and attach them to this unit without cost. Only playable by a unique unit or a unit with a character attachment.</p>',
		releases: {
			PW: 140
		},
		faq: [274]
	},
	{
		id: 'PW141',
		name: 'Bearers of Redemption',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Reaction</b> Discard 1 card: After your enemy rolls, that roll is negated and your enemy must re-roll from your deck.</p>',
		releases: {
			PW: 141
		},
		faq: [138]
	},
	{
		id: 'PW142',
		name: 'Swords of Retribution',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. If this combat ends in a slaughter this unit wins instead. Only playable if one of your units was destroyed in this command.</p>',
		releases: {
			PW: 142
		},
		faq: [196, 247, 143]
	},
	{
		id: 'PW143',
		name: 'Dragonhide Armor',
		cost: 2,
		unique: true,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p>This unit may play non-spell WarCry cards as combat tactics.</p>',
		releases: {
			PW: 143
		},
		faq: [124]
	},
	{
		id: 'PW144',
		name: 'Golden Kite Shield',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Reaction</b>: While in combat, when this unit gets a <b>Ranged Attack</b> bonus, this unit gets a strength bonus equal to the <b>Ranged Attack</b> bonus.</p><p><b>Combat Tactic</b>: This unit gets +1 leadership.</p>',
		releases: {
			PW: 144
		},
		faq: []
	},
	{
		id: 'PW145',
		name: 'Scroll of Dispelling',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Spell Reaction</b> Destroy this item (1): When your enemy plays a spell card or ability, negate its effects.</p>',
		releases: {
			PW: 145
		},
		faq: []
	},
	{
		id: 'PW146',
		name: 'Enchanted Axe',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: If you have fewer cards in your hand than your opponent, draw 1 card.</p>',
		releases: {
			PW: 146
		},
		faq: []
	},
	{
		id: 'PW147',
		name: 'Sentinel of Ages',
		cost: 8,
		strength: 8,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Khemri', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may block flyers.</p>',
		releases: {
			PW: 147
		},
		faq: [26]
	},
	{
		id: 'PW148',
		name: 'Warlock Triklok',
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b> Remove this unit from the game: After a Grand Alliance war machine is destroyed you may put that war machine into play as your unit until the end of the battle.</p>',
		releases: {
			PW: 148
		},
		faq: []
	},
	{
		id: 'PW149',
		name: 'The Black Coach of Malroth',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Vampire Counts', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (0): This unit gets +3 strength and +3 leadership. Only playable if this unit has destroyed another unit in combat this battle.</p>',
		releases: {
			PW: 149
		},
		faq: []
	},
	{
		id: 'PW150',
		name: 'Strigoi Blood Murder',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 5,
		keywords: ['Vampire Counts', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may not be committed with ranged attacks.</p><p><b>Support WarCry</b>: If your unit in the combat has a lower gold cost than this unit, replace your unit in combat with this unit. The loser of this combat is routed. Not playable during a ranged attack.</p>',
		releases: {
			PW: 150
		},
		faq: [97, 257, 258, 260, 261]
	},
	{
		id: 'PW151',
		name: "Anglinus's Fighting Lancers",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Faith</b>:1</p><p><b>Victory</b>:-X. X equals the number of action cards attached to this unit.</p><p><b>Combat Tactic</b>: This unit gets +3 strength. Attach the top card of your action deck to this unit. Only playable while attacking.</p>',
		releases: {
			PW: 151
		},
		faq: [142]
	},
	{
		id: 'PW152',
		name: "Anglinus's Valiant Fighters",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Bretonnian', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit may block cavalry.</p><p><b>Combat Tactic</b>: This unit gets +X leadership. X equals the number of cavalry units in your reserves.</p>',
		releases: {
			PW: 152
		},
		faq: [26]
	},
	{
		id: 'PW153',
		name: 'Xanax-Qol, the Rage That Burns',
		cost: 6,
		strength: 6,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Lizardmen', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>Rection: After this unit loses a combat, if the combat was lost by 3 or less, this unit is not destroyed and a new combat between this and the enemy unit begins (before rout check is made for the last combat). Only playable once per battle.</p>',
		releases: {
			PW: 153
		},
		faq: [133, 249]
	},
	{
		id: 'PW154',
		name: "Rokanquol's Thunder Riders",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Lizardmen', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>Any WarCry action card played by this unit has its tactic point cost reduced by 2 (minimum 0).</p>',
		releases: {
			PW: 154
		},
		faq: []
	},
	{
		id: 'PW155',
		name: 'Willhelm the Explorer',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Scout</b>: 4</p><p><b>Reaction</b>: After set-up, if you are the only player with this card in play, you draw 1 additional card. After the battle, remove a copy of this card from the game (either from play, your deck, or discard pile). If you remove this unit from your deck,</p><p>shuffle your deck.</p>',
		releases: {
			PW: 155
		},
		faq: [114]
	},
	{
		id: 'PW156',
		name: 'Borgio the Beseiger',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: "<p><b>WarCry</b> Discard 1 card with a die greater than the enemy unit's gold cost: This unit gets a strength bonus equal to the discarded card's die.</p>",
		releases: {
			PW: 156
		},
		faq: [95, 97]
	},
	{
		id: 'PW157',
		name: "Bronzino's Galloping Guns",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Dogs of War', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Command</b>: Move this unit to or from your battle line. You may declare a ranged attack with this unit.</p><p><b>Reaction</b>: When your enemy declares an attack against this unit or this unit blocks an enemy attack, this combat becomes a ranged attack with this unit as the attacker.</p>',
		releases: {
			PW: 157
		},
		faq: [194, 211]
	},
	{
		id: 'PW158',
		name: 'Lorenzo Lupo',
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Support Tactic</b>: Your Dogs of War unit gets +2 tactic points and "<b>Terror</b>: 2". Only playable in a Hordes of Darkness army.</p><p><b>Support Tactic</b>: Your Dogs of War unit gets +2 strength and "<b>Faith</b>: 2". Only playable in a Grand Alliance army.</p>',
		releases: {
			PW: 158
		},
		faq: [268, 121]
	},
	{
		id: 'PW159',
		name: 'Marksmen of Miragliano',
		cost: 4,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b> Discard 1 card: This card gets +X <b>Ranged Attack</b>. X equals the die on the discarded card.</p><p><b>Reaction</b>: After this unit commits a unit with a ranged attack, if this unit passes a leadership test this unit does not commit as a result of the combat.</p>',
		releases: {
			PW: 159
		},
		faq: [95]
	},
	{
		id: 'PW160',
		name: 'Where Is Your God Now?',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Until the next command, all units with "<b>Faith</b>" have their "<b>Faith</b>" level reduced to 0.</p>',
		releases: {
			PW: 160
		},
		faq: []
	},
	{
		id: 'PW161',
		name: 'Until the Last Moment',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: When a non-ranged attack is declared against one of your units with ranged attack, immediately resolve a ranged attack between the two units with your unit sa the attacker. You may not play tactics during this combat.</p><p>Continue with the original attack after this effect has resolved.</p>',
		releases: {
			PW: 161
		},
		faq: [211]
	},
	{
		id: 'PW162',
		name: "Oi! Dat's My Leg",
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p><b>WarCry</b>: Choose a unit in this combat. That unit's strength is reduced to 0. That unit gains a tactic point bonus equal to the strength lost and it's controller draws a card for every 2 points of strength lost. Not playable during a ranged attack.</p>",
		releases: {
			PW: 162
		},
		faq: []
	},
	{
		id: 'PW163',
		name: 'Loss of Faith',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: The enemy unit has it\'s "<b>Faith</b>" level reduced by X. X equals this unit\'s "<b>Terror</b>" level minus 2 (minimum 0).</p>',
		releases: {
			PW: 163
		},
		faq: []
	},
	{
		id: 'PW164',
		name: 'Lying in Wait',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: "<p>This card may be played before the attacker's first combat tactic is played.</p><p><b>WarCry</b>: Play a combat tactic costing X tactic points or less without paying the card's tactic point cost. X equals this unit's \"<b>Scout</b>\" level. Only playable while defending.</p>",
		releases: {
			PW: 164
		},
		faq: [68, 69]
	},
	{
		id: 'BR1',
		name: 'Vayj-Nar, Lord of Change',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 2</p><p><b>Wizard</b>: 3</p><p><b>Combat Tactic</b>: Reveal the top card of your army deck. If that card is a Daemon unit or Daemon attachment, this unit gets +4 strength and you get 2 spell points. Place that card in your discard pile.</p>',
		releases: {
			BR: 1
		},
		faq: []
	},
	{
		id: 'BR2',
		name: "Tzadiqel's Screamers",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>Reaction</b> Destroy this unit: After a unit gets a strength bonus, negate that bonus.</p>',
		releases: {
			BR: 2
		},
		faq: [39, 41]
	},
	{
		id: 'BR3',
		name: "Tzadiqel's Horrors",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Roll. This unit gets +X tactic points and the enemy unit gets -X tactic points. X equals the roll. If the roll is 4 or greater, commit this unit.</p>',
		releases: {
			BR: 3
		},
		faq: [168]
	},
	{
		id: 'BR4',
		name: "Tzadiqel's Enchanted Warriors",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets +1 strength for every 3 spell points that you have.</p>',
		releases: {
			BR: 4
		},
		faq: []
	},
	{
		id: 'BR5',
		name: "Tzadiqel's Screaming Chariot",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit gets +1 strength for each of your Orc units.</p>',
		releases: {
			BR: 5
		},
		faq: []
	},
	{
		id: 'BR6',
		name: 'Iyar, Lord of Tzeentch',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>WarCry</b>: Your enemy discards their hand and draws 1 card for each card they discarded.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Dark Elf units.</p>',
		releases: {
			BR: 6
		},
		banned: true,
		faq: []
	},
	{
		id: 'BR7',
		name: "Tzadiqel's Marauder Horsemen",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Command</b>: Once per battle, choose an enemy unit. If that unit is still in play at the end of the battle, that unit may not be carried over.</p>',
		releases: {
			BR: 7
		},
		faq: [133]
	},
	{
		id: 'BR8',
		name: 'Requiel, Exalted of Tzeentch',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (0): When your enemy plays a card effect to draw one or more cards, choose a number of cards in your enemy's discard pile equal to the number of cards they are about to draw. Add the chosen cards to your enemy's hand instead.</p><p>Only playable while your enemy has at least as many cards in their discard pile as they are attempting to draw.</p>",
		releases: {
			BR: 8
		},
		faq: [135, 252]
	},
	{
		id: 'BR9',
		name: 'Tzadiqel, Prince of Change',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (3): Move the unit in the current combat to the battle line (if it is committed, it stays committed). Move one of your other ready units to take the moved unit's place in the current combat.</p>",
		releases: {
			BR: 9
		},
		faq: []
	},
	{
		id: 'BR10',
		name: 'Tyamal Dancer',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support WarCry</b> (2): If this combat ends in a slaughter, the enemy player must discard 2 cards.</p>',
		releases: {
			BR: 10
		},
		faq: [245]
	},
	{
		id: 'BR11',
		name: 'Fera Ebonheart',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Reaction</b> Discard 1 card (3): When a combat ends in a slaughter, choose a unit with a gold cost less than the number of cards in your hand and destroy that unit.</p>',
		releases: {
			BR: 11
		},
		faq: [97, 245]
	},
	{
		id: 'BR12',
		name: 'Twilight Daughters of the Blade',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 1</p><p><b>Combat Tactic</b>: If this unit passes a <b>Scout</b> test, commit the enemy unit.</p>',
		releases: {
			BR: 12
		},
		faq: [74]
	},
	{
		id: 'BR13',
		name: "Ha'asek's Twilight Cauldron",
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 2</p><p>While this unit is in the battle line, all of your Dark Elf units in combat get "<b>Terror</b>: 1".</p><p><b>Reaction</b>: When one of your Dark Elf units gets a strength bonus, that bonus is increased by 1.</p>',
		releases: {
			BR: 13
		},
		faq: [35, 36, 39, 41, 23, 44]
	},
	{
		id: 'BR14',
		name: 'The Mothers of Twilight',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Scout</b>: 1</p><p><b>Reaction</b>: When your enemy uses a card effect to draw 1 or more cards, you may look at your enemy's hand.</p>",
		releases: {
			BR: 14
		},
		faq: []
	},
	{
		id: 'BR15',
		name: 'Lillet Nightwind',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Scout</b>: 1</p><p><b>Combat Tactic</b>: When this combat ends, the result is a slaughter. Only playable if your enemy has no cards in their hand.</p>',
		releases: {
			BR: 15
		},
		faq: [3]
	},
	{
		id: 'BR16',
		name: 'Twilight Sisters of Khaine',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Support WarCry</b>: Your unit gets +X strength unless the enemy passes a tactic point test. X equals the enemy unit's printed tactic points.</p>",
		releases: {
			BR: 16
		},
		faq: [270]
	},
	{
		id: 'BR17',
		name: "Kor'rin Blackheart",
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b> Rally any number of enemy units: Once per battle, rally one of your units with the monster keyword and a gold cost equal to or less than X. X equals the combined gold cost of the rallied enemy units.</p>',
		releases: {
			BR: 17
		},
		faq: [97, 133]
	},
	{
		id: 'BR18',
		name: "Ha'asek's Feral Daughters",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: When this unit is destroyed in a slaughter, you may draw 1 card.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Chaos units.</p>',
		releases: {
			BR: 18
		},
		faq: [225]
	},
	{
		id: 'BR19',
		name: 'Togurg the Filthy',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): The enemy unit gets -2 tactic points. Only playable if your unit has a higher printed strength than the enemy unit in this combat.</p><p><b>Command</b>: If all of your enemy's units are committed, the battle ends.</p>",
		releases: {
			BR: 19
		},
		faq: [168]
	},
	{
		id: 'BR20',
		name: "Bartog's Savage Rippas",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may play tactics as if it were blocking or being blocked.</p>',
		releases: {
			BR: 20
		},
		faq: [4]
	},
	{
		id: 'BR21',
		name: "Bartog's Boyz of the Bloody Fang",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: You and your enemy roll. If your roll is higher, this unit gets "<b>Terror</b>: X". X equals your enemy\'s roll.</p>',
		releases: {
			BR: 21
		},
		faq: [268, 244]
	},
	{
		id: 'BR22',
		name: 'Black Orcs of the Conqueror',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card effect that allows them to win a slaughter, negate its effects.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Chaos units.</p>',
		releases: {
			BR: 22
		},
		faq: [157, 123]
	},
	{
		id: 'BR23',
		name: "Bartog's Savage Boar Boyz",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Commit: Your unit with 4 or more strength gets +1 strength. If this unit passes a leadership test you may rally this unit.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Dark Elf units.</p>',
		releases: {
			BR: 23
		},
		faq: []
	},
	{
		id: 'BR24',
		name: "The Conqueror's Smashin' Boyz",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 6,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>You may have up to 6 copies of this card in your deck.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each copy of this card in your discard pile.</p>',
		releases: {
			BR: 24
		},
		faq: []
	},
	{
		id: 'BR25',
		name: 'Razalt Skineater',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> Discard 1 card (3): After one of your other Orc units is routed, the enemy unit may not make a follow-up attack.</p>',
		releases: {
			BR: 25
		},
		faq: []
	},
	{
		id: 'BR26',
		name: 'Blagark the Colossal',
		cost: 6,
		strength: 7,
		tacticPoints: 4,
		leadership: 5,
		keywords: ['Orc', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -2</p><p><b>Terror</b>: 3</p><p><b>Support Tactic</b>: Your unit with a negative victory bonus gets +1 strength.</p>',
		releases: {
			BR: 26
		},
		faq: [123]
	},
	{
		id: 'BR27',
		name: 'Bartog the Conqueror',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: If the enemy unit has a negative amount of tactic points, destroy that unit. Your unit may make a follow-up attack following the end of the combat.</p>',
		releases: {
			BR: 27
		},
		banned: true,
		faq: [144]
	},
	{
		id: 'BR28',
		name: 'Rise from the Ashes',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Destroy one of your ready units and attach this card to one of your other units. Put a number of gold tokens on that unit equal to the gold cost of the destroyed unit. While attached this unit gets "<b>Reaction</b> Remove all gold tokens, discard this action card: While mustering a unit, reduce the mustered unit\'s gold cost by the number of gold tokens removed (minimum 0)."</p>',
		releases: {
			BR: 28
		},
		faq: [97]
	},
	{
		id: 'BR29',
		name: 'Conscripts',
		cost: 1,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -1</p><p>Attachments may not be attached to this unit.</p><p>If this unit loses a combat, it is routed (no roll necessary).</p>',
		releases: {
			BR: 29
		},
		faq: []
	},
	{
		id: 'BR30',
		name: "Pirazzo's Lost Legion",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Ranged Attack</b>: 5</p><p><b>Reaction</b>: When this unit is mustered, raise this unit's gold cost by any amount (paying the cost to bring this unit into play). Put a number of gold tokens on this unit equal to the amount of additional gold paid.</p><p><b>Reaction</b>: While mustering a unit, remove any number of gold tokens on this unit to reduce the mustered unit's cost by the number of tokens removed.</p>",
		releases: {
			BR: 30
		},
		faq: [100, 101, 102, 164]
	},
	{
		id: 'BR31',
		name: 'Mercenary General Madinlich',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Dogs of War', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Victory</b>: +2</p><p><b>Reaction</b>: After this unit routs an enemy unit, if your enemy has a unit with a support tactic printed on it, you may choose that unit as the target of this unit's follow-up attack.</p>",
		releases: {
			BR: 31
		},
		faq: []
	},
	{
		id: 'BR32',
		name: "You're Next",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b>: This unit gets +1 strength. If you win this combat and rout the enemy unit, you may select the target of your follow-up attack.</p>',
		releases: {
			BR: 32
		},
		faq: []
	},
	{
		id: 'BR33',
		name: "It Can't End This Way",
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b>: If this combat ends in a slaughter, each player may rally one of their units.</p>',
		releases: {
			BR: 33
		},
		faq: [245]
	},
	{
		id: 'BR34',
		name: 'Keep Them Under Fire',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units without "<b>Victory</b>" wins a ranged attack as the attacker, attach this card to that unit. While attached, that unit gets "<b>Victory</b>: +1".</p>',
		releases: {
			BR: 34
		},
		faq: []
	},
	{
		id: 'BR35',
		name: "Gausser's Camouflage",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your "<b>Scout</b>" units is targeted for an attack, that unit makes a "<b>Scout</b>" test. If passed, you may choose another one of your ready units as the target of the attack.</p>',
		releases: {
			BR: 35
		},
		faq: []
	},
	{
		id: 'BR36',
		name: 'Second Wave Charge',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit with a support tactic gets +2 strength.</p>',
		releases: {
			BR: 36
		},
		faq: []
	},
	{
		id: 'BR37',
		name: 'Knowing the Field of Battle',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +X tactic points. X equals this unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			BR: 37
		},
		faq: []
	},
	{
		id: 'BR38',
		name: 'Command Decisions',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: This unit gets +X tactic points. X equals this unit's leadership.</p>",
		releases: {
			BR: 38
		},
		faq: []
	},
	{
		id: 'BR39',
		name: 'Divine Intervention',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +X tactic points. X equals this unit\'s "<b>Faith</b>" level.</p>',
		releases: {
			BR: 39
		},
		faq: []
	},
	{
		id: 'BR40',
		name: 'Tactics of Fright',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +X tactic points. X equals this unit\'s "<b>Terror</b>" level.</p>',
		releases: {
			BR: 40
		},
		faq: []
	},
	{
		id: 'BR41',
		name: 'Ancient Knowledge',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +X tactic points. X equals this unit\'s "<b>Wizard</b>" level.</p>',
		releases: {
			BR: 41
		},
		faq: []
	},
	{
		id: 'BR42',
		name: 'News from the Front',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b> Commit one of your other <b>Scout</b> units in your battle line: This unit gets +X strength. X equals the "<b>Scout</b>" level of the committed unit.</p>',
		releases: {
			BR: 42
		},
		faq: [95]
	},
	{
		id: 'BR43',
		name: 'The Unseen Advantage',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the number of your other <b>Scout</b> units.</p>',
		releases: {
			BR: 43
		},
		faq: []
	},
	{
		id: 'BR44',
		name: 'Test of Resolve',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: The result of this combat is a slaughter unless your enemy passes at least one of 3 leadership tests.</p>',
		releases: {
			BR: 44
		},
		faq: []
	},
	{
		id: 'BR45',
		name: 'Rally Against the Unjust',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units has been destroyed in a combat where the enemy played a card to create a slaughter you may rally one of your units.</p>',
		releases: {
			BR: 45
		},
		faq: [135]
	},
	{
		id: 'BR46',
		name: "Fate's Cyclical Wheel",
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After one of your units has been destroyed in a combat where the enemy played a card effect to create a slaughter, draw 4 cards.</p>',
		releases: {
			BR: 46
		},
		faq: [228, 135]
	},
	{
		id: 'BR47',
		name: 'Trump',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After the enemy unit in combat gets a strength bonus of 4 or more, your unit gets the same strength bonus.</p>',
		releases: {
			BR: 47
		},
		faq: [39]
	},
	{
		id: 'BR48',
		name: 'Take Control',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>You may put this card into play as a combat tactic for 3 tactic points.</p><p>All strength bonuses of 4 or more are reduced to 3.</p>',
		releases: {
			BR: 48
		},
		faq: [39, 171, 44, 134]
	},
	{
		id: 'BR49',
		name: 'Everything Has a Price',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>You may put this card into play as a combat tactic for 2 tactic points.</p><p>All combat tactic cards with a printed tactic point cost of 0, have their tactic point cost increased by 2.</p>',
		releases: {
			BR: 49
		},
		faq: [104, 134]
	},
	{
		id: 'BR50',
		name: 'Back to Basics',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: During this combat, as a combat tactic for 2 tactic points, either player may reveal the top card of their deck and gain a strength bonus equal to the die of the revealed card.</p>',
		releases: {
			BR: 50
		},
		faq: [65]
	},
	{
		id: 'BR51',
		name: 'Risky Proposition',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +2 strength and if this unit wins the combat the enemy unit is routed (no roll needed). Only playable by an attacking unit being blocked. Additionally, should this unit win the follow-up attack it may attempt to rout the enemy unit</p><p>(rolling as normal).</p>',
		releases: {
			BR: 51
		},
		faq: [141]
	},
	{
		id: 'BR52',
		name: 'Making a Name...',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Attach this card to your unit. While this card is attached, this unit has the ability: "WarCry Remove this action card from the game: If you win the combat, rout the enemy unit (no roll necessary)."</p>',
		releases: {
			BR: 52
		},
		faq: [4]
	},
	{
		id: 'BR53',
		name: 'Preparations',
		cost: 0,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: None of your card effects generated during this combat may be cancelled or negated.</p>',
		releases: {
			BR: 53
		},
		faq: []
	},
	{
		id: 'BR54',
		name: 'Bait and Strike',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p>Combat Tacitc: Your enemy may play any number of consecutive tactics (paying all costs). That player may not play any more tactics this combat. Only playable while attacking.</p>',
		releases: {
			BR: 54
		},
		faq: [142]
	},
	{
		id: 'BR55',
		name: 'Suicide Mission',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 leadership and the enemy unit gets -2 strength. Only playable while attacking.</p>',
		releases: {
			BR: 55
		},
		faq: [142]
	},
	{
		id: 'BR56',
		name: 'Experience of the Veteran',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each action card attached to it. You only get the strength bonus for cards attached by their own abilities.</p>',
		releases: {
			BR: 56
		},
		faq: []
	},
	{
		id: 'BR57',
		name: 'Inflation',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>This strategy card is not discarded after the battle in which it was brought into play.</p><p>Discard this card after another copy of it enters play.</p><p>All units have their gold cost increased by 1.</p>',
		releases: {
			BR: 57
		},
		faq: []
	},
	{
		id: 'BR58',
		name: 'Stand Against the Giants',
		cost: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: If this attacking unit's strength is less than the enemy unit's strength, this unit gets +1 tactic points, +1 strength, and you may draw 1 card.</p>",
		releases: {
			BR: 58
		},
		faq: [142]
	},
	{
		id: 'BR59',
		name: "Jasenland's Justice",
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Destroy one unit not in this combat. Only playable if your enemy has more gold in play than was prescribed by the battle and you do not (i.e. 20 in the 1st, 25 in the 2nd, etc.)</p>',
		releases: {
			BR: 59
		},
		faq: []
	},
	{
		id: 'BR60',
		name: 'The Iron Hand',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your enemy may immediately play any number of consecutive tactics (paying all costs). That player may not play any more tactics this combat. Only playable while defending.</p>',
		releases: {
			BR: 60
		},
		faq: []
	},
	{
		id: 'BR61',
		name: 'Use the Terrain to Your Advantage',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets "<b>Terror</b>: X" and the enemy unit gets -X tactic points, X equals this unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			BR: 61
		},
		faq: [268, 168]
	},
	{
		id: 'BR62',
		name: 'Deadly Gamble',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Combat rolls for this combat are substracted instead of added.</p><p><b>Combat Tactic</b>: This unit gets +d6 strength. If this bonus is 4 or more, this unit is destroyed after the combat.</p>',
		releases: {
			BR: 62
		},
		faq: []
	},
	{
		id: 'BR63',
		name: 'Test of Strength',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Support Tactic</b> (2): No combat rolls are made for this combat.</p>',
		releases: {
			BR: 63
		},
		faq: [236]
	},
	{
		id: 'BR64',
		name: 'A Wall of Arrows',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: Raise this unit's strength to equal this unit's printed <b>Ranged Attack</b>. Only playable while defending and if this unit's strength is less than it's ranged attack.</p>",
		releases: {
			BR: 64
		},
		faq: []
	},
	{
		id: 'BR65',
		name: 'Devious Tactics',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Attach this card to your unit. While attached and this unit is in combat, rolls are subtracted instead of added.</p>',
		releases: {
			BR: 65
		},
		faq: []
	},
	{
		id: 'BR66',
		name: 'On Your Own',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Target one of your character attachments and attach that character to this card. This card becomes an <span class="errata">infantry</span> unit with a Strength, Tactic Points, and Leadership equal to twice the characters gold cost <span class="errata">and a gold cost of 0</span>.</p><p>This card is placed in the same rank as the unit the character was attached to.</p>',
		releases: {
			BR: 66
		},
		errata: true,
		faq: [132, 87, 18, 19]
	},
	{
		id: 'BR67',
		name: 'I Live!',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: After an enemy's card effect has destroyed one of your units during a combat, that unit is not destroyed. Your unit gets +2 strength until the end of the combat.</p>",
		releases: {
			BR: 67
		},
		faq: []
	},
	{
		id: 'BR68',
		name: 'Heroic Example',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If this unit has a character attachment, this unit gets +2 strength.</p>',
		releases: {
			BR: 68
		},
		faq: []
	},
	{
		id: 'BR69',
		name: 'All I Have',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +4 strength. Only playable if this is the last card in your hand.</p>',
		releases: {
			BR: 69
		},
		faq: []
	},
	{
		id: 'BR70',
		name: "Fate's Fortune",
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): Both players roll. Both players gain spell points equal to their respective rolls.</p>',
		releases: {
			BR: 70
		},
		faq: []
	},
	{
		id: 'BR71',
		name: "Thieves' Tactics",
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: "<p>All players make their combat rolls from their enemy's deck.</p>",
		releases: {
			BR: 71
		},
		faq: []
	},
	{
		id: 'BR72',
		name: 'Overextended',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After a unit gets a strength bonus of 6 or more, commit that unit.</p>',
		releases: {
			BR: 72
		},
		faq: [39]
	},
	{
		id: 'BR73',
		name: "Gausser's Gambit",
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Both players roll 3 times. The player with the highest single roll gives their unit in this combat a strength bonus equal to the highest roll. If a tie occurs then both players' units get the bonus.</p>",
		releases: {
			BR: 73
		},
		faq: [244]
	},
	{
		id: 'BR74',
		name: 'Give It Your Best',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: The enemy unit's next strength bonus in this combat is reduced to 0.</p>",
		releases: {
			BR: 74
		},
		faq: [39, 41, 44]
	},
	{
		id: 'BR75',
		name: 'Inner Conflict',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Choose a non-unique enemy unit. This card becomes a copy of the chosen unit. Declare an attack on the chosen unit with this card. This unit may not make follow-up attacks. Once the combat and all follow-ups are resolved,</p><p>your enemy chooses one of your units and this card becomes a copy of the new chosen unit. Your enemy declares an attack on the chosen unit with this card. This unit may not make follow-up attacks.</p>',
		releases: {
			BR: 75
		},
		faq: [194, 276, 132, 29, 86]
	},
	{
		id: 'BR76',
		name: 'The Sun Sets',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your enemy shuffles a discard pile into its respective deck, commit one of their units.</p>',
		releases: {
			BR: 76
		},
		faq: [110]
	},
	{
		id: 'BR77',
		name: 'Dueling Master',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: Starting with you, both players take turns playing cards from their hand face down. Once either player passes, no more cards may be played face down. No combat rolls are made this combat. Instead, when the combat rolls would be made,</p><p>the cards are revealed and the total of the dice is considered each player's combat roll.</p>",
		releases: {
			BR: 77
		},
		faq: [63, 64]
	},
	{
		id: 'BR78',
		name: 'Sustained Assault',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After one of your Daemon units with a gold cost 3 or less is destroyed, roll. If the roll is equal to or greater than the unit's gold cost, you may place that unit back in your reserves. If the roll is less than the gold cost of the unit,</p><p>your enemy may rally one of their committed units.</p>",
		releases: {
			BR: 78
		},
		faq: []
	},
	{
		id: 'BR79',
		name: 'Caught in the Bog',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this card enters play, place a sludge token on all units in play without a sludge token.</p><p>Units with one or more sludge tokens may not block without a card effect.</p><p><b>Command</b>: Remove all sludge tokens on one of your units in play. Both players may use this ability.</p>',
		releases: {
			BR: 79
		},
		faq: []
	},
	{
		id: 'BR80',
		name: 'Stuck in the Bog',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this card enters play, place a sludge token on all units in play without a sludge token.</p><p>Units with one or more sludge tokens have -1 leadership.</p><p><b>Command</b>: Remove all sludge tokens on one of your units in play. Both players may use this ability.</p>',
		releases: {
			BR: 80
		},
		faq: []
	},
	{
		id: 'BR81',
		name: 'Trapped in the Bog',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this card enters play, place a sludge token on all units in play without a sludge token.</p><p>Units with one or more sludge tokens have -1 tactic point.</p><p><b>Command</b>: Remove all sludge tokens on one of your units in play. Both players may use this ability.</p>',
		releases: {
			BR: 81
		},
		faq: [168]
	},
	{
		id: 'BR82',
		name: 'Mired in the Bog',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After this card enters play, place a sludge token on all units in play without a sludge token.</p><p>Units with one or more sludge tokens may not perform follow-up attacks.</p><p><b>Command</b>: Remove all sludge tokens on one of your units in play. Both players may use this ability.</p>',
		releases: {
			BR: 82
		},
		faq: []
	},
	{
		id: 'BR83',
		name: 'Unsurpassed Strength',
		cost: 0,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Players may play any action card as a combat tactic for 1 tactic point. Their unit gets a strength bonus equal to the die on the card. Players may use this ability any number of times during the combat.</p>',
		releases: {
			BR: 83
		},
		faq: []
	},
	{
		id: 'BR84',
		name: 'Unsurpassed Loyalty',
		cost: 'X',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b> Discard X cards: Your unit gets a strength bonus equal to the combined dice on the discarded cards.</p>',
		releases: {
			BR: 84
		},
		faq: [95]
	},
	{
		id: 'BR85',
		name: 'Confined in the Bog',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After this card enters play, place a sludge token on all units in play without a sludge token.</p><p>Units with one or more sludge token may not declare an attack without a card effect.</p><p><b>Command</b>: Remove all sludge tokens on one of your units in play. Both players may play this ability.</p>',
		releases: {
			BR: 85
		},
		banned: true,
		faq: [194, 140]
	},
	{
		id: 'BR86',
		name: 'Virtue of the Small',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>Units with a strength of 2 or less get +1 strength.</p>',
		releases: {
			BR: 86
		},
		faq: [171]
	},
	{
		id: 'BR87',
		name: 'Hidden Reserves',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: If you discard this card as a result of your enemy's card effect, draw 4 cards.</p>",
		releases: {
			BR: 87
		},
		faq: [252]
	},
	{
		id: 'BR88',
		name: 'The Horror',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After one of your units enters a combat, roll. That unit gets "<b>Terror</b>: X". X equals the roll.</p>',
		releases: {
			BR: 88
		},
		faq: [268]
	},
	{
		id: 'BR89',
		name: 'Treasured Armour',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit passes a leadership test in a combat, this unit gets a strength bonus equal to the difference between the printed leadership and the roll.</p>',
		releases: {
			BR: 89
		},
		faq: []
	},
	{
		id: 'BR90',
		name: 'Witch Hunter',
		cost: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Faith</b>: 1."</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. wizard, monster, Vampire Counts, or Khemri units.</p>',
		releases: {
			BR: 90
		},
		faq: []
	},
	{
		id: 'BR91',
		name: 'Unity Stone',
		cost: 1,
		unique: true,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your unit with the same army keyword as this unit gets +1 strength.</p>',
		releases: {
			BR: 91
		},
		faq: [127]
	},
	{
		id: 'BR92',
		name: 'Shadow Cloak',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>This unit gets "<b>Scout</b>: 2"</p><p><b>WarCry</b>: This unit gets a shadow token. Only playable if this unit\'s "<b>Scout</b>" level is greater than the enemy unit\'s strength.</p><p><b>Reaction</b> Discard a shadow token from this unit: If this unit is destroyed in a battle, return it to the battle line committed and reduce its printed strength to 0 until after the end of the battle.</p>',
		releases: {
			BR: 92
		},
		faq: [60]
	},
	{
		id: 'BR93',
		name: 'Enchanted Spear',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: "<p><b>Support Tactic</b> Commit this unit: Your unit gets a strength bonus equal to this unit's printed strength.</p><p><b>Support Tactic</b>: Remove up to 2 tokens from play.</p>",
		releases: {
			BR: 93
		},
		faq: [95]
	},
	{
		id: 'BR94',
		name: 'Dumin Rockbrow',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: If this unit destroys an enemy unit with a higher gold cost in a combat, attach the top card of your deck to this unit. This unit gets "<b>Victory</b>: +X." X equals the die of the attached card.</p>',
		releases: {
			BR: 94
		},
		faq: [97]
	},
	{
		id: 'BR95',
		name: "Droken's Slayers of Skaven",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +1</p><p><b>Reaction</b>: When this unit enters play, commit a unit with a "<b>Scout</b>" level of 5 or more.</p><p><b>Combat Tactic</b>: This unit gets +3 strength vs. Skaven units.</p>',
		releases: {
			BR: 95
		},
		faq: []
	},
	{
		id: 'BR96',
		name: 'Halrig Bloodstone',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Terror</b>: 1</p><p><b>Command</b> Destroy this unit: Roll. Destroy a unit with a gold cost equal to or less than the roll.</p><p><b>Combat Tactic</b>: This unit gets a strength bonus equal to the number of tactic points spent by the enemy unit. You may not play this ability after your enemy has passed in the combat.</p>',
		releases: {
			BR: 96
		},
		faq: [97]
	},
	{
		id: 'BR97',
		name: "Stoneheart's Doomseekers",
		cost: 4,
		strength: 1,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Victory</b>: +4</p><p><b>Combat Tactic</b>: Roll. If the roll is equal to or greater than this unit's strength, this unit gets +1 strength. If the roll is less than this unit's strength, this unit is destroyed and the enemy unit may make a follow-up attack.</p><p>You may play this ability any number of times per combat.</p>",
		releases: {
			BR: 97
		},
		faq: []
	},
	{
		id: 'BR98',
		name: 'Droken Stoneheart',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Double this unit's strength. You may not play any more tactics this combat.</p>",
		releases: {
			BR: 98
		},
		faq: []
	},
	{
		id: 'BR99',
		name: "Grimjaw's Volunteer Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Destroy a strategy card in play.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your High Elf units.</p>',
		releases: {
			BR: 99
		},
		faq: []
	},
	{
		id: 'BR100',
		name: 'Gnollen Stoneheart',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p><b>Spell Combat Tactic</b> (1): Play a combat tactic or WarCry printed on an attachment attached to this unit.</p>',
		releases: {
			BR: 100
		},
		faq: []
	},
	{
		id: 'BR101',
		name: "Stoneheart's Slayers of the Cursed",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +2</p><p><b>Reaction</b>: After an enemy unit in a combat with this unit plays a combat tactic from their hand, roll. If the roll is greater than the die on the card played, this unit gets +2 strength.</p><p><b>Combat Tactic</b>: This unit gets +2 strength vs. Vampire Counts or Khemri units.</p>',
		releases: {
			BR: 101
		},
		faq: []
	},
	{
		id: 'BR102',
		name: 'Skollan Stoneheart',
		cost: 5,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: This unit gets a strength bonus equal to the enemy unit's printed strength.</p>",
		releases: {
			BR: 102
		},
		faq: []
	},
	{
		id: 'BR103',
		name: 'The Implacable',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Terror</b>: 2</p><p><b>Combat Tactic</b>: Begin a ranged attack with this unit targeting a unit not in this combat. If this unit wins the ranged attack it does not become committed as a result. Only playable once per command.</p>',
		releases: {
			BR: 103
		},
		faq: [4]
	},
	{
		id: 'BR104',
		name: "Gausser's Huntsmen of the North",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 2</p><p><b>Ranged Attack</b>: 5</p><p><b>Reaction</b>: You may reroll a combat roll if this unit passes a <b>Ranged Attack</b> test.</p>',
		releases: {
			BR: 104
		},
		faq: [138]
	},
	{
		id: 'BR105',
		name: 'Inner Circle of the Knights Panther',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Discard a card: When one of your units is making a leadership test, the die on the discarded card is used for the test (no roll needed).</p>',
		releases: {
			BR: 105
		},
		faq: []
	},
	{
		id: 'BR106',
		name: "Gausser's Huntsmen of the South",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 3</p><p><b>Ranged Attack</b>: 7</p><p><b>Reaction</b>: When a card effect calls for you to reroll a roll, that reroll is a 4 (no roll needed).</p>',
		releases: {
			BR: 106
		},
		faq: [237]
	},
	{
		id: 'BR107',
		name: 'Knights of the Bared Fang',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit passes a test in a combat, this unit gets +1 strength.</p>',
		releases: {
			BR: 107
		},
		faq: []
	},
	{
		id: 'BR108',
		name: 'Leon Trolmann',
		cost: 4,
		strength: 1,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support WarCry</b>: If your war machine unit wins this non-ranged attack combat, that unit does not commit as a result of this combat.</p>',
		releases: {
			BR: 108
		},
		faq: [4]
	},
	{
		id: 'BR109',
		name: "Knights of the Panther's Claw",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +1 strength.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Dwarf units.</p>',
		releases: {
			BR: 109
		},
		faq: [142]
	},
	{
		id: 'BR110',
		name: 'Knights of the Savage Cat',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may block flyers while ready.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your High Elf units.</p>',
		releases: {
			BR: 110
		},
		faq: [26]
	},
	{
		id: 'BR111',
		name: 'Grand Master Denhaus of the Knights Panther',
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Support WarCry</b>: If the enemy unit has a higher gold cost than your unit, you may put one card from your discard pile on top of your deck.</p>',
		releases: {
			BR: 111
		},
		faq: [97]
	},
	{
		id: 'BR112',
		name: "Whitestar's Thundering Hooves",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Short Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit wins a ranged attack, move this unit to the reserves.</p>',
		releases: {
			BR: 112
		},
		faq: []
	},
	{
		id: 'BR113',
		name: "Whitestar's Shooting Star",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Long Ranged Attack</b>: 5</p><p><b>Support Tactic</b>: Roll. 3 or less: Your unit gets +2 strength or +2 ranged attack. 4+: Commit this unit.</p>',
		releases: {
			BR: 113
		},
		faq: []
	},
	{
		id: 'BR114',
		name: "Whitestar's Whirling Blades",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +3 strength and you draw 1 card. Only playable vs. <b>Scout</b> units.</p>',
		releases: {
			BR: 114
		},
		faq: []
	},
	{
		id: 'BR115',
		name: "Whitestar's Silvertips",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Scout</b>: 2</p><p><b>Ranged Attack</b>: 6</p><p><b>Support WarCry</b>: Roll. If the roll is 4 or more the roll is reduced to 0. Subtract the roll from the enemy unit's strength.</p>",
		releases: {
			BR: 115
		},
		faq: []
	},
	{
		id: 'BR116',
		name: "Bilgarim's Archers of Nightfall",
		cost: 4,
		strength: 1,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Ranged Attack</b>: 9</p><p><b>Reaction</b>: After this unit wins a combat, if you have no cards in your hand, you may draw 2 cards.</p>',
		releases: {
			BR: 116
		},
		faq: []
	},
	{
		id: 'BR117',
		name: 'Calamir Truedance',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support WarCry</b> (3): Your unit gets a strength bonus equal to its tactic points.</p><p><b>Spell WarCry</b> (2): This unit gets a strength bonus equal to its tactic points.</p>',
		releases: {
			BR: 117
		},
		faq: []
	},
	{
		id: 'BR118',
		name: 'Ryndaire Goldenleaf',
		cost: 4,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: When your enemy's card effect causes you to discard 1 or more cards, you may draw a number of cards equal to the number of cards discarded.</p>",
		releases: {
			BR: 118
		},
		faq: [252]
	},
	{
		id: 'BR119',
		name: "Bilgarim's Silvercrests",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +2 tactic points and you draw 1 card. Only playable vs. units with lower gold costs.</p>',
		releases: {
			BR: 119
		},
		faq: [97]
	},
	{
		id: 'BR120',
		name: "Whitestar's Protectorate",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b> Commit: This unit gets +6 strength.</p><p><b>Support Tactic</b> Commit: Your unit gets +3 strength.</p>',
		releases: {
			BR: 120
		},
		faq: []
	},
	{
		id: 'VT1',
		name: 'Clickclick Bangbang',
		cost: 3,
		strength: 0,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>Ranged Attack</b>: X. X equals 3D6. If you roll duplicates or triplicates of a number for this roll, this unit is destroyed. Roll before you draw a card for this combat.</p><p><b>Reaction</b>: If the roll used to determine this unit's <b>Ranged Attack</b> totals 13, destroy the enemy unit. This unit stays ready and this command ends.</p>",
		releases: {
			VT: 1
		},
		faq: [229]
	},
	{
		id: 'VT2',
		name: "Headtaker's Censer Bearers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may not attack until one of your other units has declared an attack.</p><p><b>WarCry</b>: This unit gets +1 strength and your enemy discards 1 card.</p><p><b>Combat Tactic</b>: This attacking unit gets +2 strength.</p>',
		releases: {
			VT: 2
		},
		faq: [194, 140, 142, 32]
	},
	{
		id: 'VT3',
		name: "Headtaker's Ratmen",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Skaven', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>If this unit has a Skaven character attached, it gets +2 strength and +1 leadership.</p><p><b>Reaction</b>: Before this unit would be committed by a card effect or a ranged attack, roll. If the roll is greater than 4, destroy one attachment on this unit instead.</p>',
		releases: {
			VT: 3
		},
		faq: []
	},
	{
		id: 'VT4',
		name: "Queek's Foul Monks",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -1 strength. If that unit is a Grand Alliance unit, it also gets -1 leadership.</p>',
		releases: {
			VT: 4
		},
		faq: []
	},
	{
		id: 'VT5',
		name: "Queek's Vile Ratkin",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Skaven', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Terror</b>: 1</p><p>If this unit has a Skaven character attachment attached, this unit gets +2 strength and +1 leadership.</p>',
		releases: {
			VT: 5
		},
		faq: []
	},
	{
		id: 'VT6',
		name: 'Skaven Tunnels',
		cost: 2,
		strength: 1,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Skaven', 'Fortification'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit may not attack. Any ready unit may block an attack on this unit.</p><p><b>Command</b> Commit: If this unit is in your battle line, one of your Skaven units may declare an attack against an enemy unit in the reserves. This attack may not be blocked.</p>',
		releases: {
			VT: 6
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'VT7',
		name: 'Swarm of Skavenblight',
		cost: 2,
		strength: 3,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p>This unit costs one less gold for each copy of this unit you have in play.</p><p>This unit must be placed in your battle line. If this unit and/or copies of this unit are the only ready units in your battle line your enemy may attack your reserves.</p>',
		releases: {
			VT: 7
		},
		faq: []
	},
	{
		id: 'VT8',
		name: 'Warlock Quiksnak',
		cost: 5,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (X): This unit gets X+1 strength. You must spend at least 1 spell point to activate this ability.</p><p><b>Spell Support Tactic</b> (X): Your unit gets X+2 leadership. You must spend at least 1 spell point to activate this ability.</p>',
		releases: {
			VT: 8
		},
		faq: [96]
	},
	{
		id: 'VT9',
		name: 'Warlord Queek Headtaker',
		cost: 6,
		strength: 6,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After this unit wins a combat as the defender, it rallies if committed and immediately declares an attack on the unit that attacked it. You may use this ability while committed.</p>',
		releases: {
			VT: 9
		},
		faq: [4]
	},
	{
		id: 'VT10',
		name: 'Cloak of Shadows',
		cost: 1,
		keywords: ['Skaven', 'Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p><b>Skaven Only</b></p><p><b>Reaction</b>: After your enemy declares a ranged attack against this unit, they must roll. If the roll is less than 5, they must choose a different unit to be the target of the ranged attack if there is another legal target.</p>',
		releases: {
			VT: 10
		},
		faq: []
	},
	{
		id: 'VT11',
		name: 'Packmaster Teekteek',
		cost: 1,
		unique: true,
		keywords: ['Skaven', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p><b>Support Tactic</b> Commit this attachment: Your Skaven unit gets +3 tactic point.</p><p><b>Combat Tactic</b> Commit this attachment: This unit gets +2 strength.</p>',
		releases: {
			VT: 11
		},
		faq: []
	},
	{
		id: 'VT12',
		name: 'Weeping Blade',
		cost: 2,
		strength: 1,
		unique: true,
		keywords: ['Skaven', 'Weapon'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		text: '<p><b>Skaven Only</b></p><p><b>Reaction</b>: After the enemy unit plays a WarCry ability or card <i>(including Spell and Support WarCries)</i>, this unit gets +3 strength.</p>',
		releases: {
			VT: 12
		},
		faq: []
	},
	{
		id: 'VT13',
		name: 'Death Frenzy',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Spell WarCry</b> (1): If you win this combat, attach this card to this unit. This unit may continue to make rout checks and follow-up attacks. This unit gets a -1 strength token at the start of each follow-up after the first.</p><p><b>Reaction</b>: After this card is rolled, if you have more units in the battle line than your enemy, this card's die is considered to be a 5. Only playable if you have units in your reserves and battle line.</p>",
		releases: {
			VT: 13
		},
		faq: [4, 144]
	},
	{
		id: 'VT14',
		name: 'Expendable',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b>: This unit gets +2 strength and -3 leadership.</p><p><b>Reaction</b>: After this card is rolled as a test or rout check, it's die is considered to be a 7. Either player may use this ability.</p>",
		releases: {
			VT: 14
		},
		faq: []
	},
	{
		id: 'VT15',
		name: 'He Who Runs Away...',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If this unit loses this combat, return it to the battle line ready instead of being destroyed; then your opponent may rally one of his units in the reserves at the end of this combat.</p>',
		releases: {
			VT: 15
		},
		faq: [60, 66]
	},
	{
		id: 'VT16',
		name: 'Lead from the Rear',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: If you win this combat, attach this card to one of your unique units in the reserves. While this card is in play, your other units gain +1 strength and +1 leadership.</p><p>Destroy this card if the unit it is attached to enters the battlefield or the battle line.</p>',
		releases: {
			VT: 16
		},
		faq: [4]
	},
	{
		id: 'VT17',
		name: 'Make Them Fear Us',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b>: The enemy unit gets -1 strength. If this unit's strength is double the enemy unit's strength, this unit gets <b>Terror</b>: 2.</p>",
		releases: {
			VT: 17
		},
		faq: [268]
	},
	{
		id: 'VT18',
		name: 'Plague',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		text: "<p><b>Spell Command</b> (3) Choose one enemy unit. That unit must pass a strength test or be destroyed. Roll.<p>2 or less: Your enemy may choose one of your unit's to make a strength test as above. Roll again.</p><p>3-4: The command ends.</p><p>5+: You may choose another enemy unit and it must make a strength test as above. Roll again.</p>",
		releases: {
			VT: 18
		},
		banned: true,
		faq: []
	},
	{
		id: 'VT19',
		name: 'Skavenblight',
		die: 2,
		keywords: ['Skaven', 'Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		text: '<p>This strategy is not discarded after a battle.</p><p><b>Spell Reaction</b> (1): After you make a roll reroll.</p>',
		releases: {
			VT: 19
		},
		faq: [138]
	},
	{
		id: 'VT20',
		name: 'Swarm Them!',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>WarCry</b>: This unit gets +1 strength for every unit you have in play with a printed gold cost of less than 3.</p><p><b>Reaction</b>: After this card is rolled, it's a die is considered equal to the number of units you have in play with a gold cost of greater than 3.</p>",
		releases: {
			VT: 20
		},
		faq: []
	},
	{
		id: 'VT21',
		name: 'Warpstone Mutation',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: "<p><b>Combat Tactic</b>: This unit gets +2 strength. You may destroy any number of attachments on this unit. This unit gets an additional +2 strength for each attachment destroyed. This unit may not follow-up.</p><p><b>Reaction</b>: After this card is rolled, if you do not have any attachments in play, this card's die is considered to be a 4.</p>",
		releases: {
			VT: 21
		},
		faq: []
	},
	{
		id: 'VT29',
		name: "Athel Loren's Eternal Guard",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: The enemy unit gets -1 strength. If the enemy unit is a Hordes of Darkness unit, it also gets -1 tactic point.</p>',
		releases: {
			VT: 29
		},
		faq: [168]
	},
	{
		id: 'VT30',
		name: 'Callaen Strongblade',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>The following abilities may be played while committed.</p><p><b>WarCry</b>: This unit gets <b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets +1 strength for each terrain card you have in play.</p><p><b>Combat Tactic</b>: If this unit's combat roll is an unmodified 6, this unit wins the combat instead.</p>",
		releases: {
			VT: 30
		},
		faq: [268]
	},
	{
		id: 'VT31',
		name: 'Forest Lookout',
		cost: 2,
		strength: 0,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Wood Elf', 'Fortification'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit may not attack (however it may declare a ranged attack). Ready infantry units may block an attack on this unit.</p><p><b>Short Ranged Attack</b>: 4</p><p><b>Support Tactic</b> Discard 1 card: Your unit gets +2 ranged attack.</p>',
		releases: {
			VT: 31
		},
		faq: [208, 140, 32]
	},
	{
		id: 'VT32',
		name: 'Naieth the Prophetess',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support WarCry</b> (2): Draw 1 card, then place 1 card in your hand on top of your deck.</p>',
		releases: {
			VT: 32
		},
		faq: []
	},
	{
		id: 'VT33',
		name: 'Orion',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Terror</b>: 2</p><p><b>Reaction</b>: After setup, put a Terrain card into play.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your other units with ranged attack.</p>',
		releases: {
			VT: 33
		},
		faq: []
	},
	{
		id: 'VT34',
		name: "Orion's Forest Guard",
		cost: 3,
		strength: 1,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Ranged Attack</b>: 7</p><p><b>Combat Tactic</b> Discard a terrain card: This unit gets +1 strength or +1 leadership. You may use this any number of times per combat.</p>',
		releases: {
			VT: 34
		},
		faq: []
	},
	{
		id: 'VT35',
		name: 'Treekin of Athel Loren',
		cost: 4,
		strength: 6,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Wood Elf', 'Daemon', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>At the end of the muster phase, your opponent may put two +1 strength tokens on one of his units.</p>',
		releases: {
			VT: 35
		},
		faq: []
	},
	{
		id: 'VT36',
		name: 'Warhawks of Kurnous',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Wood Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>WarCry</b>: this unit gets +2 strength vs. committed units. If this unit loses the combat, destroy this unit.</p>',
		releases: {
			VT: 36
		},
		faq: [66]
	},
	{
		id: 'VT37',
		name: 'Wild Riders of Kurnous',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Wood Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>WarCry</b>: Reveal the top 5 cards of your action deck. Put any terrain cards revaled into play and discard the rest.</p>',
		releases: {
			VT: 37
		},
		faq: [112]
	},
	{
		id: 'VT38',
		name: 'Winter Guard',
		cost: 4,
		strength: 'X',
		tacticPoints: 'X',
		leadership: 3,
		keywords: ['Wood Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>X equals the number of other <b>Ranged Attack</b> units you have in play</p>',
		releases: {
			VT: 38
		},
		faq: []
	},
	{
		id: 'VT39',
		name: 'A Murder of Spites',
		cost: 0,
		tacticPoints: -1,
		keywords: ['Wood Elf', 'Item'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p><b>Wood Elf Only</b></p><p><b>WarCry</b>: This unit gets +d6 strength. If this roll is 5 or higher, destroy this unit at the end of the combat.</p>',
		releases: {
			VT: 39
		},
		faq: []
	},
	{
		id: 'VT40',
		name: 'Bow of Loren',
		cost: 2,
		unique: true,
		keywords: ['Wood Elf', 'Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		text: '<p><b>Wood Elf Only</b></p><p>This unit has <b>Ranged Attack</b>: 4</p><p><b>Command</b>: Once per battle, this unit may make a ranged attack and does not commit after the combat.</p>',
		releases: {
			VT: 40
		},
		faq: [133]
	},
	{
		id: 'VT41',
		name: 'Athel Loren Territories',
		die: 2,
		keywords: ['Wood Elf', 'Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p><b>Reaction</b> Discard 1 card: After your Wood Elf unit wins a ranged attack, destroy the enemy unit.</p>',
		releases: {
			VT: 41
		},
		faq: []
	},
	{
		id: 'VT42',
		name: 'Point Blank Fighting',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After your Wood Elf unit gets a ranged attack bonus, raise your strength by double that amount. Only playable while your Wood Elf unit is losing a combat.</p>',
		releases: {
			VT: 42
		},
		faq: [197, 44]
	},
	{
		id: 'VT43',
		name: 'Rally Behind the Arrows',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		text: '<p><b>Spell Reaction</b> Remove this card from the game (2): After your unit destroys a unit during a <b>Ranged Attack</b>, rally one of your units.</p>',
		releases: {
			VT: 43
		},
		faq: []
	},
	{
		id: 'VT44',
		name: 'Seize the Battle',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p><b>Command</b>: Play 2 strategy cards. If this is your first command play 3 strategy cards.</p>',
		releases: {
			VT: 44
		},
		faq: []
	},
	{
		id: 'VT45',
		name: 'Strength in the Bow',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit with a <b>Ranged Attack</b> gets +2 strength.</p>',
		releases: {
			VT: 45
		},
		faq: []
	},
	{
		id: 'VT46',
		name: 'Strength in the Woods',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each terrain card you have in play.</p>',
		releases: {
			VT: 46
		},
		faq: []
	},
	{
		id: 'VT47',
		name: 'Taking Aim from on High',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p><b>Reaction</b>: After you pass as a command, draw 1 card. Only playable while you have a ready ranged attack unit.</p>',
		releases: {
			VT: 47
		},
		faq: []
	},
	{
		id: 'VT48',
		name: 'Tighten the Ranks',
		cost: 2,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Your unit gets +1 ranged attack for every unit you have in play. The enemy unit gets +1 strength for every unit they have in play.</p>',
		releases: {
			VT: 48
		},
		faq: []
	},
	{
		id: 'VT49',
		name: 'Woodlands',
		die: 4,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p><b>Spell Support Tactic</b> (2): Your attacking unit gets +2 strength or +2 ranged attack.</p>',
		releases: {
			VT: 49
		},
		faq: [142]
	},
	{
		id: 'SR1',
		name: 'Zevael, Greater Daemon of Khorne',
		cost: 6,
		strength: 3,
		tacticPoints: 3,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Victory</b>: +2</p><p><b>Terror</b>: 3</p><p>Neither player may play spell cards or abilities while this unit is in a combat.</p><p><b>Reaction</b>: After this unit or the enemy unit in combat with this unit gets a strength bonus, increase that bonus by 2 or reduce that bonus to 1, your choice.</p>',
		releases: {
			SR: 1
		},
		faq: [35, 36, 39, 41, 44, 233]
	},
	{
		id: 'SR2',
		name: "Bilerot's Marauders",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b> Commit or destroy this unit: Draw 1 card. You may use this ability while committed.</p>',
		releases: {
			SR: 2
		},
		faq: []
	},
	{
		id: 'SR3',
		name: "C'ulvan the Decayed",
		cost: 9,
		strength: 9,
		tacticPoints: 9,
		leadership: 6,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +25</p><p>This unit may not attack (including ranged attacks), block, or follow-up. This unit does not commit after it wins a combat.</p><p>After mustering this unit destroy all of your other units in play (you get the gold back for those destroyed units and attachments). You may not muster units or bring other units into play. This unit may only enter play during the muster phase.</p>',
		releases: {
			SR: 3
		},
		faq: []
	},
	{
		id: 'SR4',
		name: "C'ulvan's Chosen",
		cost: 4,
		strength: 7,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -5</p><p><b>Combat Tactic</b>: This unit gets a number of +1 victory tokens equal to the enemy unit\'s "<b>Victory</b>" bonus.</p>',
		releases: {
			SR: 4
		},
		faq: [123]
	},
	{
		id: 'SR5',
		name: "C'ulvan's Pestilence Swarm",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p>This unit may attack the enemy's reserves.</p>",
		releases: {
			SR: 5
		},
		faq: []
	},
	{
		id: 'SR6',
		name: 'Plague Bearers',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p><b>WarCry</b>: This unit gets a strength bonus equal to it\'s "<b>Terror</b>".</p>',
		releases: {
			SR: 6
		},
		faq: []
	},
	{
		id: 'SR7',
		name: "Tai'Ir the Putrid",
		cost: 5,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your Daemon unit gets +2 strength if this unit passes a leadership test.</p>',
		releases: {
			SR: 7
		},
		faq: []
	},
	{
		id: 'SR8',
		name: 'Kurlon the Rotten, Trumpeter of Decay',
		cost: 1,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Chaos Only</b></p><p><b>Support WarCry</b>: Your Chaos unit gets +3 strength. Only playable if you have a Daemon unit and a Beastman unit in play.</p>',
		releases: {
			SR: 8
		},
		faq: []
	},
	{
		id: 'SR9',
		name: 'Plague Banner',
		cost: 2,
		unique: true,
		keywords: ['Chaos', 'Standard'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Support Tactic</b>: Roll. Subtract this roll from the enemy unit's strength. You do not make a combat roll.</p><p><b>Reaction</b>: If the enemy's strength plus combat roll total is less than 1, rout the enemy unit.</p>",
		releases: {
			SR: 9
		},
		faq: [195, 236, 145, 148]
	},
	{
		id: 'SR10',
		name: 'Khron Nightglade',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: When one of your card effects calls for an enemy to discard a card, they must discard a random card instead.</p>',
		releases: {
			SR: 10
		},
		faq: []
	},
	{
		id: 'SR11',
		name: "Blackspear's Sacrificers",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b>: Once per battle, target an enemy unit. If that unit is still in play at the end of the battle, it must be carried over.</p>',
		releases: {
			SR: 11
		},
		faq: [133]
	},
	{
		id: 'SR12',
		name: 'Death Reapers',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b> Destroy this unit: This combat ends in a slaughter.</p>',
		releases: {
			SR: 12
		},
		faq: [3]
	},
	{
		id: 'SR13',
		name: 'Death Swords',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each of your Dark Elf infantry units.</p>',
		releases: {
			SR: 13
		},
		faq: []
	},
	{
		id: 'SR14',
		name: "Ha'asek's Blackswords",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: If you played an ability which could create a slaughter and that ability offers a way to negate the slaughter with an another effect, if your enemy did not negate the slaughter, raise this unit's strength to equal the enemy unit's strength.</p><p>Only playable while this unit is attacking.</p>",
		releases: {
			SR: 14
		},
		faq: [142]
	},
	{
		id: 'SR15',
		name: 'Nordhil Blackspear',
		cost: 8,
		strength: 5,
		tacticPoints: 6,
		leadership: 5,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Destroy any number of your units: Before you muster this unit, reduce the gold cost of this unit by the gold cost of the destroyed units and attachments.</p><p><b>Reaction</b>: After your Dark Elf unit wins a combat, it may make a rout check to make a follow-up attack. Your enemy may discard 2 cards to negate this effect.</p>',
		releases: {
			SR: 15
		},
		faq: [195, 100, 102, 164, 144, 145]
	},
	{
		id: 'SR16',
		name: 'Ryna Bloodraven',
		cost: 5,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After you muster this unit make a leadership test. If passed, destroy one of your enemy's unique units. Your enemy receives gold equal to the destroyed units gold cost plus the gold cost of any attachments.</p><p>That player may continue to muster, and neither player may muster another copy of that unit this muster phase.</p>",
		releases: {
			SR: 16
		},
		faq: []
	},
	{
		id: 'SR17',
		name: 'Hydra Banner',
		cost: 2,
		tacticPoints: 2,
		unique: true,
		keywords: ['Dark Elf', 'Standard'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Dark Elf Only</b></p><p><b>Reaction</b>: Before the attacker plays his first tactic in a combat with this unit, this unit may play a tactic. Only playable as the defender.</p>',
		releases: {
			SR: 17
		},
		faq: [69]
	},
	{
		id: 'SR18',
		name: 'Khardil, Herald of Naggaroth',
		cost: 1,
		tacticPoints: 2,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Dark Elf Only</b></p><p><b>Support WarCry</b>: Your Dark Elf unit gets +2 strength if you control more units with support tactics and attachments with support tactics than your enemy.</p>',
		releases: {
			SR: 18
		},
		faq: []
	},
	{
		id: 'SR19',
		name: 'Vorott the Masher',
		cost: 5,
		strength: 8,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Victory</b>: -4</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your other units with a printed strength greater than their gold cost.</p><p><b>Reaction</b> Discard 1 card: When an enemy unit gets a strength bonus greater than it's gold cost, destroy that unit. Your unit may make a follow-up attack after this combat is completed.</p>",
		releases: {
			SR: 19
		},
		banned: true,
		faq: [39, 97, 144]
	},
	{
		id: 'SR20',
		name: "Grimgore's Spider Riders",
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your Orc unit gets +2 tactic points if it has more strength than tactic points.</p>',
		releases: {
			SR: 20
		},
		faq: []
	},
	{
		id: 'SR21',
		name: "Grubbi's Goblin Elfsnappers",
		cost: 3,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you take a command that is not an attack with this unit, place a token on this unit.</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each token on this unit. Remove all tokens from this unit.</p>',
		releases: {
			SR: 21
		},
		faq: []
	},
	{
		id: 'SR22',
		name: "Urguck's 'Eadloppas",
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>WarCry</b>: Roll. Commit the enemy unit if the roll is equal to or greater than the enemy's strength.</p>",
		releases: {
			SR: 22
		},
		faq: []
	},
	{
		id: 'SR23',
		name: "Urguck's Manstompas",
		cost: 4,
		strength: 0,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit has +1 strength for each of your other Orc units.</p>',
		releases: {
			SR: 23
		},
		faq: []
	},
	{
		id: 'SR24',
		name: "Urguck's Sneaky Shootaz",
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 5</p><p><b>Support Tactic</b>: Play the WarCry or combat tactic printed on one of your Orc units in the current combat, paying all costs, even if that ability has already been played.</p>',
		releases: {
			SR: 24
		},
		faq: []
	},
	{
		id: 'SR25',
		name: 'Vagar Dwarfstomper',
		cost: 6,
		strength: 8,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: -4</p><p><b>Reaction</b>: After this unit is mustered, destroy all other units in play. Both players get all of the gold back for all units and attachments destroyed and may continue mustering.</p>',
		releases: {
			SR: 25
		},
		banned: true,
		faq: []
	},
	{
		id: 'SR26',
		name: 'Conductor of the Waaagh',
		cost: 1,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b>: If your Orc unit wins the combat, rout the enemy unit. May not be played during a follow-up attack.</p>',
		releases: {
			SR: 26
		},
		faq: [195, 145, 149]
	},
	{
		id: 'SR27',
		name: 'Raggedy Banner',
		cost: 2,
		strength: 1,
		unique: true,
		keywords: ['Orc', 'Standard'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Orc Only</b></p><p>Your Orc units get +1 leadership.</p>',
		releases: {
			SR: 27
		},
		faq: []
	},
	{
		id: 'SR28',
		name: 'War Banner',
		cost: 2,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>While this unit is ready all of your combat rolls get +1.</p>',
		releases: {
			SR: 28
		},
		faq: []
	},
	{
		id: 'SR29',
		name: 'All We Have to Give',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit with no printed abilities or text in their text box gets +3 strength.</p>',
		releases: {
			SR: 29
		},
		faq: []
	},
	{
		id: 'SR30',
		name: 'Altered Orders',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +2 strength.</p><p><b>WarCry</b>: This attacking unit gets +4 strength.</p>',
		releases: {
			SR: 30
		},
		faq: [142]
	},
	{
		id: 'SR31',
		name: 'Altered Strategies',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +3 strength.</p><p><b>WarCry</b>: This attacking unit gets +5 strength.</p>',
		releases: {
			SR: 31
		},
		faq: [142]
	},
	{
		id: 'SR32',
		name: "I'm Coming for You",
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If you win this combat and rout the enemy unit, you may select the target for your follow-up attack.</p>',
		releases: {
			SR: 32
		},
		faq: []
	},
	{
		id: 'SR33',
		name: 'Last Ditch Effort',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Super rare',
		text: '<p><b>Reaction</b>: After you resolve a command, take another command. After the second command you may not declare any more attacks without a card effect this battle.</p>',
		releases: {
			SR: 33
		},
		banned: true,
		faq: [194, 291]
	},
	{
		id: 'SR34',
		name: 'Altered Tactics',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +1 strength.</p><p><b>WarCry</b>: This attacking unit gets +3 strength.</p>',
		releases: {
			SR: 34
		},
		faq: [142]
	},
	{
		id: 'SR35',
		name: 'Applied Knowledge',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 to one of their Macro abilities (I.e. <b>Scout</b>, <b>Terror</b>, <b>Wizard</b>, etc.) except <b>Ranged Attack</b>.</p>',
		releases: {
			SR: 35
		},
		faq: []
	},
	{
		id: 'SR36',
		name: 'Change in the Currents',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: When you are paying the spell point cost of a spell ability, reduce that cost by 1 (minimum 0).</p>',
		releases: {
			SR: 36
		},
		faq: []
	},
	{
		id: 'SR37',
		name: 'Changes in the Plan of Attack',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you have played an ability to force your enemy to discard one or more cards during a combat, and your enemy has no cards in hand at that time, your unit gets +2 strength for each card that should have been discarded.</p>',
		releases: {
			SR: 37
		},
		faq: []
	},
	{
		id: 'SR38',
		name: 'Clarity in the Veteran',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units has played a WarCry ability in a combat, that unit gets +3 tactic points.</p>',
		releases: {
			SR: 38
		},
		faq: []
	},
	{
		id: 'SR39',
		name: 'Empowerment',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>Either player may use the following ability:</p><p><b>Spell Support Tactic</b> (2): Place the top card of your deck in your discard pile. Your unit gets a strength bonus equal to the die of the card.</p>',
		releases: {
			SR: 39
		},
		faq: []
	},
	{
		id: 'SR40',
		name: 'End Game Maneuvering',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +X strength. X equals the number of your action cards that are removed from the game.</p>',
		releases: {
			SR: 40
		},
		faq: []
	},
	{
		id: 'SR41',
		name: 'Extended to Your Limits',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After your unit gets a strength bonus from a combat tactic (or WarCry) ability printed on their card, the loser of this battle is automatically routed (no roll needed).</p>',
		releases: {
			SR: 41
		},
		faq: [35, 195, 145, 148]
	},
	{
		id: 'SR42',
		name: 'Quick Strike',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: When a unit gets a bonus from a WarCry ability, that bonus is doubled. You may not further increase this bonus.</p>',
		releases: {
			SR: 42
		},
		faq: [44]
	},
	{
		id: 'SR43',
		name: 'Fill the Gaps in the Line',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units has been destroyed during a combat (before combat resolution), put one of your units into the combat to replace that unit. The combat continues as normal; any previous routing effects are ignored.</p>',
		releases: {
			SR: 43
		},
		faq: [257, 260, 261, 262]
	},
	{
		id: 'SR44',
		name: 'Forest',
		die: 3,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>All ranged attack units in play have +2 to their <b>Ranged Attack</b> rating.</p>',
		releases: {
			SR: 44
		},
		faq: []
	},
	{
		id: 'SR45',
		name: 'Fortune on the Winds',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>When an effect\'s cost calls for either player to spend "X" spell points, each spell point spent counts as two spell points.</p>',
		releases: {
			SR: 45
		},
		faq: []
	},
	{
		id: 'SR46',
		name: 'Full Pull and Release',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: This unit gets +X <b>Ranged Attack</b>. X equals this unit's strength.</p>",
		releases: {
			SR: 46
		},
		faq: []
	},
	{
		id: 'SR47',
		name: 'Get It Right This Time',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the number of copies of this unit in your army discard pile.</p>',
		releases: {
			SR: 47
		},
		faq: []
	},
	{
		id: 'SR48',
		name: 'Herd of Wild Horses',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All infantry units have their "Infantry" keyword replaced with "Cavalry".</p>',
		releases: {
			SR: 48
		},
		faq: []
	},
	{
		id: 'SR49',
		name: 'Herd of Wild Pegasi',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>All cavalry units have their "Cavalry" keyword replaced with "Flyer".</p>',
		releases: {
			SR: 49
		},
		faq: []
	},
	{
		id: 'SR50',
		name: 'Influence Fate',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After a roll is made that roll gets +1 or -1. Only playable if you have a <b>Wizard</b> unit in play.</p>',
		releases: {
			SR: 50
		},
		faq: [163, 149]
	},
	{
		id: 'SR51',
		name: 'Ingrained Tactics',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +3 strength. You may place this card on top of your action deck instead of placing it in your discard pile at the end of the combat.</p>',
		releases: {
			SR: 51
		},
		faq: []
	},
	{
		id: 'SR52',
		name: "Jasenland's Probing Tactics",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your unit gets +2 strength.</p><p><b>WarCry</b>: Your unit gets +2 strength and your enemy must reveal two random cards from their hand.</p>',
		releases: {
			SR: 52
		},
		faq: []
	},
	{
		id: 'SR53',
		name: 'Lead by Example',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Play the combat tactic or WarCry on one of your character attachments.</p>',
		releases: {
			SR: 53
		},
		faq: []
	},
	{
		id: 'SR54',
		name: 'Lessons Learned',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>You may put this card into play as a WarCry for 2 tactic points.</p><p><b>Support Tactic</b>: Your unit that has played a WarCry on an action card gets +2 strength.</p>',
		releases: {
			SR: 54
		},
		faq: [134]
	},
	{
		id: 'SR55',
		name: 'Master of the Battlefield',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Play the combat tactic or WarCry on one of this unit's weapon or item attachments, paying all costs.</p>",
		releases: {
			SR: 55
		},
		faq: []
	},
	{
		id: 'SR56',
		name: 'Maximise Resources',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>When an effect\'s cost calls for either player to "discard X cards," each card discarded counts as two cards.</p>',
		releases: {
			SR: 56
		},
		faq: []
	},
	{
		id: 'SR57',
		name: 'Misguided Tactics',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Target a unit and name an army keyword. Until the end of the battle, that unit has the named army keyword.</p>',
		releases: {
			SR: 57
		},
		faq: [127]
	},
	{
		id: 'SR58',
		name: 'Moving On',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: After your enemy's unit in the combat has been destroyed during the combat (before combat resolution), that unit is considered routed and you may make a follow-up attack.</p>",
		releases: {
			SR: 58
		},
		faq: [144]
	},
	{
		id: 'SR59',
		name: 'Never Stop',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. If you win this combat, you may return this card to your hand instead of discarding it.</p>',
		releases: {
			SR: 59
		},
		faq: [4]
	},
	{
		id: 'SR60',
		name: 'Nothing Left',
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After you have played an action card or ability that reduces an enemy unit's leadership below 0 during a combat, destroy that unit. Your unit may make a follow-up attack. Remove this card from the game.</p>",
		releases: {
			SR: 60
		},
		faq: [144, 294]
	},
	{
		id: 'SR61',
		name: 'Nothing Saved',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and your unit may play tactics as if they were in a follow-up attack.</p>',
		releases: {
			SR: 61
		},
		faq: []
	},
	{
		id: 'SR62',
		name: 'Plan Twice, Attack Once',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you put a strategy card into play (as a command), you may declare an attack.</p>',
		releases: {
			SR: 62
		},
		faq: [194]
	},
	{
		id: 'SR63',
		name: 'Power Drain',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Spell Reaction</b> (X): When a player is paying a spell point cost, that player must pay X additional spell points or the spell is negated.</p>',
		releases: {
			SR: 63
		},
		faq: [95, 96]
	},
	{
		id: 'SR64',
		name: 'Rally to the Banner',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit with an attached standard may not be routed.</p>',
		releases: {
			SR: 64
		},
		faq: []
	},
	{
		id: 'SR65',
		name: 'Recon Reports',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Name a number of cards equal to the number of cards in your enemy's hand. You may then look at your enemy's hand. This unit gets a strength bonus equal to the number of named cards that were in that hand</p><p>(duplicate cards need to be named in multiple).</p>",
		releases: {
			SR: 65
		},
		faq: []
	},
	{
		id: 'SR66',
		name: 'Redistribution',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Move all of your tokens from one of your units to another of your units.</p>',
		releases: {
			SR: 66
		},
		faq: []
	},
	{
		id: 'SR67',
		name: 'Sacred Ground',
		die: 5,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units have -1 strength and <b>Victory</b>:+2.</p><p>Destroy this strategy if another copy of it enters play.</p>',
		releases: {
			SR: 67
		},
		faq: []
	},
	{
		id: 'SR68',
		name: 'Shift in Power',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>You may put this card into play as a WarCry for 2 tactic points.</p><p>All units have their strength reduced by 1 (minimum 0) while in a combat.</p>',
		releases: {
			SR: 68
		},
		faq: [134]
	},
	{
		id: 'SR69',
		name: 'Stand Together as One',
		cost: 0,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Each player chooses a unit in their battle line. Both units receive a strength bonus equal to the chosen unit's strength.</p>",
		releases: {
			SR: 69
		},
		faq: [296]
	},
	{
		id: 'SR70',
		name: 'Strategies of Sacrifice',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>Either player may use the following ability any number of times per trigger effect.</p><p><b>Reaction</b>: When a unit is paying the tactic point cost of a card, that player may reduce the strength of their unit by 1 (if their unit has at least 1 strength) to reduce the tactic point cost by 1 (minimum 0).</p>',
		releases: {
			SR: 70
		},
		faq: []
	},
	{
		id: 'SR71',
		name: 'Supply Line Confusion',
		cost: 2,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Combat Tactic</b>: Move one of your enemy's attachments from one of their units to another of their legal ready units.</p>",
		releases: {
			SR: 71
		},
		faq: [18]
	},
	{
		id: 'SR72',
		name: 'Sweeping Flank',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: Declare an attack with one of your ready infantry units in your reserves.</p>',
		releases: {
			SR: 72
		},
		faq: [194]
	},
	{
		id: 'SR73',
		name: 'Take Their Place',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you have committed an enemy unit with a card effect during a combat tactic phase, move any unit you have in the combat to your battle line ready and then move one of your other units into the combat.</p>',
		releases: {
			SR: 73
		},
		faq: []
	},
	{
		id: 'SR74',
		name: 'Test of Faith',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit makes a number of leadership tests equal to the number of units with "<b>Faith</b>" you have in play. This unit gets +X strength. X equals the number of leadership tests passed.</p>',
		releases: {
			SR: 74
		},
		faq: []
	},
	{
		id: 'SR75',
		name: 'Test of Will',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (2): Both units have their tactic points reduced to 0. Each unit (starting with the attacker) makes a number of leadership tests equal to the number of tactic points lost. Units gets +X strength.</p><p>X equals the number of leadership tests passed.</p>',
		releases: {
			SR: 75
		},
		faq: []
	},
	{
		id: 'SR76',
		name: 'Testing Fate',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After a unit rolls for their combat roll and the result is less than 1, that unit automatically loses the combat.</p>',
		releases: {
			SR: 76
		},
		faq: []
	},
	{
		id: 'SR77',
		name: 'The Face of Horror',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit with "<b>Terror</b>" gets X+2 strength. X equals this units "<b>Terror</b>" rating.</p>',
		releases: {
			SR: 77
		},
		faq: []
	},
	{
		id: 'SR78',
		name: 'The Price Has Been Paid',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Spell Reaction</b> Discard 1 card (2): After paying the cost of an effect that requires destroying one of your units, that destroyed unit is placed in your reserves committed. Remove this card from the game.</p>',
		releases: {
			SR: 78
		},
		faq: []
	},
	{
		id: 'SR79',
		name: 'Tightened Ranks',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All units have the ability: "<b>Support Tactic</b>: Your unit gets +1 leadership."</p>',
		releases: {
			SR: 79
		},
		faq: []
	},
	{
		id: 'SR80',
		name: 'Troubles Come Not Single Spies',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After a unit gets a token, that unit gets another token of the same type.</p>',
		releases: {
			SR: 80
		},
		faq: []
	},
	{
		id: 'SR81',
		name: 'Unexpected Backlash',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Spell Reaction</b> (3): After your enemy pays the cost of a spell effect, roll:</p><p>1 or less: Your opponent's spell gets played as normal, then again without costs.</p><p>2-5: The spell is negated.</p><p>6: The spell is negated and then you may commit one enemy unit</p><p>7+: The spell is negated and you may destroy one enemy unit.</p>",
		releases: {
			SR: 81
		},
		faq: []
	},
	{
		id: 'SR82',
		name: 'Unexpected Tactics',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This infantry unit gets +3 strength and if this unit wins the combat the enemy unit is routed (no roll needed). Only playable when attacking from the reserves.</p>',
		releases: {
			SR: 82
		},
		faq: [147]
	},
	{
		id: 'SR83',
		name: 'Watch and Learn',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit with a character attached gets +2 strength, +2 tactic points and +2 leadership.</p>',
		releases: {
			SR: 83
		},
		faq: []
	},
	{
		id: 'SR84',
		name: 'Weaken the Ranks',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After you have committed a unit with a <b>Long Ranged Attack</b> or a <b>Short Ranged Attack</b>, declare a non-ranged attack with one of your other ready units. That unit gets +2 strength for the duration of the combat.</p>',
		releases: {
			SR: 84
		},
		faq: []
	},
	{
		id: 'SR85',
		name: 'When We Need It the Most',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p>If this card is placed in the discard pile from the top of your deck (via a roll or other card effect) you may place this card in your hand.</p><p><b>Combat Tactic</b>: Your unit gets +2 strength.</p>',
		releases: {
			SR: 85
		},
		faq: []
	},
	{
		id: 'SR86',
		name: 'You Get What You Invest In',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: When one of your units with a gold cost greater than 6 declares an attack, you may name any two action cards <span class="errata">other than this card</span> and search your deck and discard pile for those cards (shuffling the discard pile into the deck when you are done) and add those cards to your hand.</p>',
		releases: {
			SR: 86
		},
		errata: true,
		faq: [194, 97]
	},
	{
		id: 'SR87',
		name: 'Abandoned Fort',
		cost: 2,
		strength: 2,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Fortification'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not attack. Ready units may block attacks on this unit.</p><p><b>Support Tactic</b>: Your unit gets +1 ranged attack.</p>',
		releases: {
			SR: 87
		},
		faq: [194, 208, 140, 32]
	},
	{
		id: 'SR88',
		name: 'Dark Emissary',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (1): Your unit gets "<b>Terror</b>: 2".</p>',
		releases: {
			SR: 88
		},
		faq: [268]
	},
	{
		id: 'SR89',
		name: 'Earthworks',
		cost: 2,
		strength: 1,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['Fortification'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may not attack. Ready units in your battle line may block an attack targeting this unit.</p><p>Your battle line units get <b>Scout</b>: 1.</p>',
		releases: {
			SR: 89
		},
		faq: [194, 140, 32]
	},
	{
		id: 'SR90',
		name: 'Ebonfang',
		cost: 4,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		unique: true,
		keywords: ['Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Your Dogs of War unit gets +2 strength. If your unit loses this combat, commit this unit.</p>',
		releases: {
			SR: 90
		},
		faq: [121]
	},
	{
		id: 'SR91',
		name: 'Furgut',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Terror</b>: 1</p><p>While this unit is in combat, your enemy may not play abilities or cards without cost.</p>',
		releases: {
			SR: 91
		},
		faq: [108]
	},
	{
		id: 'SR92',
		name: "Morrigan's Mercenaries",
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>After set up, any player with more gold in play than was prescribed by the battle (I.e. 20 in the 1st, 25 in the 2nd, etc.), must destroy any number of units and/or attachments so that they have less gold in play than was prescribed by the battle.</p>',
		releases: {
			SR: 92
		},
		faq: []
	},
	{
		id: 'SR93',
		name: 'Truthsayer',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (2): Your unit gets a +1 strength token.</p>',
		releases: {
			SR: 93
		},
		faq: []
	},
	{
		id: 'SR94',
		name: 'Varadin Redbeard',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p>Spell Support Tactic (1): Your war machine unit gets +2 strength.</p><p><b>Spell WarCry</b> (2): If this unit wins the combat this unit is not committed, but it may not make a follow-up attack. Only playable while defending.</p>',
		releases: {
			SR: 94
		},
		faq: [4]
	},
	{
		id: 'SR95',
		name: "Barak's Ironbeards",
		cost: 4,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After you play a strategy card, this unit gets a +1 strength token.</p>',
		releases: {
			SR: 95
		},
		faq: [130, 131]
	},
	{
		id: 'SR96',
		name: 'Dokkenrok Whitebeard',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p><b>Support Tactic</b>: Put a spell token on this unit.</p><p><b>WarCry</b>: This unit gets a strength bonus equal to the number of spell tokens on this unit.</p>',
		releases: {
			SR: 96
		},
		faq: []
	},
	{
		id: 'SR97',
		name: "Grimjaw's Drillers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Attach an attachment from your discard pile to this unit. Only playable if you have less gold in play then prescribed by the battle.</p>',
		releases: {
			SR: 97
		},
		faq: [274]
	},
	{
		id: 'SR98',
		name: "Grimjaw's Flying Cannons",
		cost: 4,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Short Ranged Attack</b>: 4</p><p><b>Reaction</b>: After this unit is mustered, name one action card. Search your opponent's deck and discard pile for all copies of that card and remove them from the game until the end of the battle. Shuffle your enemy's discard pile into their deck.</p>",
		releases: {
			SR: 98
		},
		faq: []
	},
	{
		id: 'SR99',
		name: "Grimjaw's Grudgebearers",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +2 strength. Only playable if this unit has a standard attached.</p>',
		releases: {
			SR: 99
		},
		faq: []
	},
	{
		id: 'SR100',
		name: "Makaisson's Bellows",
		cost: 3,
		strength: 0,
		tacticPoints: 0,
		leadership: 4,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +X</p><p><b>Short Ranged Attack</b>: 6</p><p>X equals the number of units with attachments you have in play.</p>',
		releases: {
			SR: 100
		},
		faq: []
	},
	{
		id: 'SR101',
		name: 'Bolok Rocksmasher, Drummer of Karaz-a-Karak',
		cost: 1,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Dwarf Only</b></p><p><b>Support WarCry</b>: Your Dwarf unit gets +3 strength. Only playable if you have a war machine and a fortification in play.</p>',
		releases: {
			SR: 101
		},
		faq: []
	},
	{
		id: 'SR102',
		name: 'Standard of Taunting',
		cost: 2,
		unique: true,
		keywords: ['Dwarf', 'Standard'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Dwarf Only</b></p><p><b>Victory</b>: +1</p><p><b>Reaction</b>: After set-up, choose one enemy unit. That unit must attack this unit as your enemies first command (if it may). Your enemy may commit the chosen unit to negate this effect.</p>',
		releases: {
			SR: 102
		},
		faq: []
	},
	{
		id: 'SR103',
		name: 'Axelbrand Rainultz',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (X): Look at your enemy's hand. If the total sum of the dice on the cards in their hand is equal to or less than X, the enemy unit is destroyed and your unit may make a follow-up attack (no rout test needed).</p><p>You may not use this ability in a follow-up attack after a combat in which you used this ability.</p>",
		releases: {
			SR: 103
		},
		faq: [95, 96]
	},
	{
		id: 'SR104',
		name: 'Boris Mikhail',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Kislev', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your Kislev unit gets +2 strength. If you lose this combat, commit this unit.</p>',
		releases: {
			SR: 104
		},
		faq: []
	},
	{
		id: 'SR105',
		name: "Boris's Griffon Legion",
		cost: 3,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not make follow-up attacks or be selected as the target of a follow-up attack.</p>',
		releases: {
			SR: 105
		},
		faq: []
	},
	{
		id: 'SR106',
		name: 'Katarin, Bringer of Winter',
		cost: 7,
		strength: 5,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Veteran</b>: Tzarina Katarin The Ice Queen</p><p><b>Wizard</b>: 2</p><p><b>Spell WarCry</b> (2): Destroy the enemy unit unless it passes a strength test, you may make a rout check against that unit before that unit is destroyed.</p>',
		releases: {
			SR: 106
		},
		faq: [270, 186, 9]
	},
	{
		id: 'SR107',
		name: "Katarin's Kossars",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Kislev', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Command</b>: Once per battle, make a <b>Long Ranged Attack</b>: 3 without committing.</p>',
		releases: {
			SR: 107
		},
		faq: [133]
	},
	{
		id: 'SR108',
		name: "Katarin's Lancers",
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +4 strength vs. infantry</p>',
		releases: {
			SR: 108
		},
		faq: []
	},
	{
		id: 'SR109',
		name: 'Tzar Brodski',
		cost: 4,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Kislev', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your unit plays a tactic, it gets +1 strength. Only playable if your unit is losing a combat.</p>',
		releases: {
			SR: 109
		},
		faq: [197]
	},
	{
		id: 'SR110',
		name: 'Banner of Ursun',
		cost: 2,
		unique: true,
		keywords: ['Empire', 'Kislev', 'Standard'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Empire Only</b></p><p><b>Reaction</b>: When this unit targeted for an attack, the attacking unit must pass a leadership test. If the test is not passed, the enemy player must target another legal unit for the attack (if one exists) or forfeit their command (this is not considered "passing").</p>',
		releases: {
			SR: 110
		},
		faq: []
	},
	{
		id: 'SR111',
		name: 'Mikhail Alekhsko',
		cost: 1,
		keywords: ['Empire', 'Kislev', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Empire Only</b></p><p><b>Support WarCry</b>: Play 2 support tactics printed on your Empire units, paying all costs.</p>',
		releases: {
			SR: 111
		},
		faq: [79]
	},
	{
		id: 'SR112',
		name: 'Glorenlil Suregrace',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Support Tactic</b> Discard 1 card: Your High Elf unit gets +2 tactic points. Only playable if your High Elf unit has at least 1 tactic point.</p><p><b>Command</b>: Once per battle, put a strategy card from your discard pile into play. You may then immediately declare an attack with one of your units.</p>',
		releases: {
			SR: 112
		},
		faq: [194, 133]
	},
	{
		id: 'SR113',
		name: 'Aethrilmar, Prince of Ulthuan',
		cost: 6,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>WarCry</b> Commit one of your ranged attack units: This unit gets a strength bonus equal to that unit's <b>Ranged Attack</b>.</p>",
		releases: {
			SR: 113
		},
		faq: [95]
	},
	{
		id: 'SR114',
		name: 'Eldorion Brightwood',
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell WarCry</b> (X): This unit gets +X strength.</p>',
		releases: {
			SR: 114
		},
		faq: [95, 96]
	},
	{
		id: 'SR115',
		name: 'Swiftstrike',
		cost: 4,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['High Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Long Ranged Attack</b>: 7</p><p><b>Support Tactic</b>: Put a +1 strength token on one of your units. Only playable during a ranged attack.</p>',
		releases: {
			SR: 115
		},
		faq: []
	},
	{
		id: 'SR116',
		name: "Whitestar's Defenders",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may play cards as if it was attacking.</p>',
		releases: {
			SR: 116
		},
		faq: [48]
	},
	{
		id: 'SR117',
		name: "Whitestar's Skirmishers",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 1</p><p>While you have more <b>Wizard</b> levels then your enemy, this unit has +3 <b>Scout</b>.</p>',
		releases: {
			SR: 117
		},
		faq: []
	},
	{
		id: 'SR118',
		name: "Whitestar's Swordmasters",
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: Before this unit rolls for combat that result is a 6 (no roll is made).</p>',
		releases: {
			SR: 118
		},
		faq: []
	},
	{
		id: 'SR119',
		name: 'Banner of the World Dragon',
		cost: 2,
		unique: true,
		keywords: ['High Elf', 'Standard'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>High Elf Only</b></p><p>This unit may not be chosen or targeted by spell effects generated by your enemy.</p>',
		releases: {
			SR: 119
		},
		faq: []
	},
	{
		id: 'SR120',
		name: 'Tylith Puresong',
		cost: 1,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>High Elf Only</b></p><p><b>Support WarCry</b>: Your High Elf unit gets +1 strength. If your High Elf unit has at least twice as many printed tactic points than the enemy unit, it gets +3 strength instead.</p>',
		releases: {
			SR: 120
		},
		faq: []
	},
	{
		id: 'HF1',
		name: 'Blood Reavers',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support Tactic</b>: Any Daemon unit gets +2 tactic points. If your unit loses this combat, destroy this unit.</p>',
		releases: {
			HF: 1
		},
		faq: []
	},
	{
		id: 'HF2',
		name: 'Blood Scythes',
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit: After your enemy gains spell points, those spell points are discarded without effect. Put two +1 strength tokens on any of your units in play.</p>',
		releases: {
			HF: 2
		},
		faq: []
	},
	{
		id: 'HF3',
		name: 'Kurt Virhoch, Chosen of the Blood God',
		cost: 6,
		strength: 4,
		tacticPoints: 3,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Terror</b>:2</p><p><b>Reaction</b>: After this unit gets a tactic point bonus from a tactic card or ability, add that bonus to this unit's strength instead.</p>",
		releases: {
			HF: 3
		},
		faq: []
	},
	{
		id: 'HF4',
		name: 'Life Drinkers',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After a token is put into play, discard another token of your choice.</p>',
		releases: {
			HF: 4
		},
		faq: []
	},
	{
		id: 'HF5',
		name: 'The Blood Sworn',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After one of your other Chaos units routs an enemy unit, put a +1 strength token on this unit.</p>',
		releases: {
			HF: 5
		},
		faq: []
	},
	{
		id: 'HF6',
		name: 'The Blooded',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: After this unit gets a tactic point bonus from a tactic card or ability, add that bonus to this unit's leadership instead.</p>",
		releases: {
			HF: 6
		},
		faq: []
	},
	{
		id: 'HF7',
		name: 'The Skull Taker',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. If this unit wins the combat, the enemy unit is routed (no roll necessary). Only playable if you started the battle with less printed gold in play than your enemy. You may not use this ability in your next combat</p>',
		releases: {
			HF: 7
		},
		faq: [195, 145, 148]
	},
	{
		id: 'HF8',
		name: "Virhoch's Blood Riders",
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit: When a unit is making a rout check, that check is automatically successful (no roll necessary). The unit making the rout check must make a follow-up attack.</p>',
		releases: {
			HF: 8
		},
		faq: []
	},
	{
		id: 'HF9',
		name: "Virhoch's Blood Trackers",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: The enemy unit\'s leadership is reduced by this unit\'s "<b>Scout</b>" level.</p>',
		releases: {
			HF: 9
		},
		faq: []
	},
	{
		id: 'HF10',
		name: "Virhoch's Hounds",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Chaos', 'Daemon', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. If this unit wins the combat, any rout check made gets a -3 penalty to the roll.</p>',
		releases: {
			HF: 10
		},
		faq: []
	},
	{
		id: 'HF11',
		name: "Ebonkin's Line Breaker",
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dark Elf', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Roll. This unit gets a strength bonus equal to the roll minus 2 (minimum 0).</p>',
		releases: {
			HF: 11
		},
		faq: []
	},
	{
		id: 'HF12',
		name: 'Hag Queen Hellebron',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: This attacking unit gets +d6 strength.</p>',
		releases: {
			HF: 12
		},
		faq: [142]
	},
	{
		id: 'HF13',
		name: "Hellebron's Witches",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>Spell cards and abilities cost one additional spell point while this unit is in combat.</p>',
		releases: {
			HF: 13
		},
		faq: []
	},
	{
		id: 'HF14',
		name: "Khaine's Will",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: Commit the enemy unit unless it passes a strength test.</p>',
		releases: {
			HF: 14
		},
		faq: [270, 74]
	},
	{
		id: 'HF15',
		name: 'Lolisithi Coldwind',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Any Dark Elf infantry unit in this combat gets +2 strength. Commit this unit if you lose combat.</p>',
		releases: {
			HF: 15
		},
		faq: []
	},
	{
		id: 'HF16',
		name: "Makdhaine's Corsairs",
		cost: 5,
		strength: 2,
		tacticPoints: 6,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b> Discard 1 card: After an enemy unit in combat with this unit receives a strength bonus, this unit gets a strength bonus equal to double the enemy unit's bonus. Only playable once per combat.</p>",
		releases: {
			HF: 16
		},
		faq: [44]
	},
	{
		id: 'HF17',
		name: 'Reapers of Khaine',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength unless your enemy discards 1 card.</p>',
		releases: {
			HF: 17
		},
		faq: []
	},
	{
		id: 'HF18',
		name: 'Shadow Wind',
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Command</b> Commit: While this unit remains committed and in play, strategy cards may not be put into play. You may not rally this unit during clean-up (before the muster phase).</p>',
		releases: {
			HF: 18
		},
		faq: []
	},
	{
		id: 'HF19',
		name: 'Makdhaine Ebonkin',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Any monster unit gets +1 tactic point.</p>',
		releases: {
			HF: 19
		},
		faq: []
	},
	{
		id: 'HF20',
		name: 'Rynsethryn Cruelheart',
		cost: 2,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>While this unit is in combat, neither player may play cards that change the result of a slaughter.</p>',
		releases: {
			HF: 20
		},
		faq: []
	},
	{
		id: 'HF21',
		name: 'Azraz Humiesplitter',
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This attacking unit gets +3 strength.</p><p><b>Reaction</b>: After you rout an enemy unit using a card effect, draw a card.</p>',
		releases: {
			HF: 21
		},
		faq: [142]
	},
	{
		id: 'HF22',
		name: "Azraz's Bashers",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: After you make a combat roll, if your enemy did not make a combat roll, your enemy's unit in this combat gets -4 strength.</p>",
		releases: {
			HF: 22
		},
		faq: []
	},
	{
		id: 'HF23',
		name: "Azraz's Boyz",
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Any Orc unit gets +1 strength. Only playable from the battle line.</p>',
		releases: {
			HF: 23
		},
		faq: []
	},
	{
		id: 'HF24',
		name: "Azraz's Savage Manglers",
		cost: 4,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>If this unit is ready, you may not take any command other than passing, moving this unit from the reserves to the battle line or declaring an attack with any copy of this unit you have in play.</p>',
		releases: {
			HF: 24
		},
		faq: []
	},
	{
		id: 'HF25',
		name: 'Dargur the Insane',
		cost: 5,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Command</b> (X) Commit this unit: Starting with one of your units and alternating between your and your enemy's units, each unit must pass a strength test made from your deck or be committed. If the unit is already committed, destroy it instead.</p><p>X equals the total number of units in play.</p>",
		releases: {
			HF: 25
		},
		faq: [96]
	},
	{
		id: 'HF26',
		name: "Humiesplitter's Hackers",
		cost: 3,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Victory</b>: -4</p><p><b>Support Tactic</b> Remove this card from the game, discard 1 card: Roll. Your copy of this unit gets +X strength and the enemy unit's leadership is reduced by X. X equals the roll.</p>",
		releases: {
			HF: 26
		},
		faq: []
	},
	{
		id: 'HF27',
		name: 'Humiesplitters Big Uns',
		cost: 4,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -X. X equals the number of weapons attached to this unit.</p><p>This unit may have any number of weapon attachments.</p>',
		releases: {
			HF: 27
		},
		faq: []
	},
	{
		id: 'HF28',
		name: 'The Impaler',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Support Tactic</b>: Any unit gets +1 ranged attack.</p>',
		releases: {
			HF: 28
		},
		faq: []
	},
	{
		id: 'HF29',
		name: 'Kogkog the Dangerous',
		cost: 1,
		strength: 2,
		tacticPoints: 1,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Victory</b>: -3".</p>',
		releases: {
			HF: 29
		},
		faq: []
	},
	{
		id: 'HF30',
		name: 'Zagzog Gobbothrottler',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Any unit gets +1 leadership.</p>',
		releases: {
			HF: 30
		},
		faq: []
	},
	{
		id: 'HF31',
		name: 'Druchii Ascendancy',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This Dark Elf unit gets +3 strength. Only playable if your unit has a higher printed tactic points than the enemy unit.</p>',
		releases: {
			HF: 31
		},
		faq: []
	},
	{
		id: 'HF32',
		name: 'Gorks Warpath',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Spell Command</b> (3): Choose one enemy unit. Both players roll. If your roll is higher, commit the chosen unit. After this ability is resolved, you may pay 2 spell points, choose another unit and play this ability again.</p><p>If your roll is lower, your enemy may select one of your units to commit and this command ends. Only playable while you have an Orc <b>Wizard</b>.</p>',
		releases: {
			HF: 32
		},
		faq: []
	},
	{
		id: 'HF33',
		name: 'Insidious Insinuation',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: When your enemy plays a support tactic ability, cancel its effects.</p>',
		releases: {
			HF: 33
		},
		faq: []
	},
	{
		id: 'HF34',
		name: "Khorne's Blessing",
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If you do not have any wizards in play, this unit gets +2 strength. You may not play any spell abilities for the rest of this combat.</p>',
		releases: {
			HF: 34
		},
		faq: []
	},
	{
		id: 'HF35',
		name: 'Malicious Intent',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Any Hordes of Darkness unit in this combat gets "<b>Terror</b>:1".</p>',
		releases: {
			HF: 35
		},
		faq: [268]
	},
	{
		id: 'HF36',
		name: 'Baleful Sorcery',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have a "<b>Wizard</b>" unit and a "<b>Terror</b>" unit in play.</p>',
		releases: {
			HF: 36
		},
		faq: []
	},
	{
		id: 'HF37',
		name: 'Berzerker Fury',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b>: This unit gets +2 strength and "<b>Terror</b>: 2". If you win this combat, attach this card to this unit. While attached, this unit gets the Monster keyword and the ability "WarCry: This attacking unit gets "<b>Terror</b>: 2", -2 tactic points, and +2 strength."</p>',
		releases: {
			HF: 37
		},
		faq: [4, 142, 268, 168]
	},
	{
		id: 'HF38',
		name: 'Bestial Rage',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This monster or Beastmen unit gets +3 strength.</p>',
		releases: {
			HF: 38
		},
		faq: []
	},
	{
		id: 'HF39',
		name: 'Blackened Skies',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +3 strength. Only playable while all of your units have the "Flyer" keyword.</p>',
		releases: {
			HF: 39
		},
		faq: []
	},
	{
		id: 'HF40',
		name: 'Blind Faith',
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Choose one enemy unit. Your unit gets a strength bonus equal to that units "<b>Faith</b>" level.</p>',
		releases: {
			HF: 40
		},
		faq: []
	},
	{
		id: 'HF41',
		name: 'Devotional Sorcery',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have a "<b>Wizard</b>" unit and a "<b>Faith</b>" unit in play.</p>',
		releases: {
			HF: 41
		},
		faq: []
	},
	{
		id: 'HF42',
		name: 'Disarmament',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Command</b> Destroy one of your ready units: Your enemy must destroy any number of their units and attachments with a gold cost equal to X or more. X equals the combined gold cost of your destroyed unit and any attached attachments.</p><p>Only playable once per battle.</p><p><b>Command</b>: Destroy 1 attachment on any enemy unit.</p>',
		releases: {
			HF: 42
		},
		faq: []
	},
	{
		id: 'HF43',
		name: 'Done Deal',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Both players halve (rounding down) their combat rolls for this combat. This card has no effect if either player is rolling more than once for the combat.</p>',
		releases: {
			HF: 43
		},
		faq: [43]
	},
	{
		id: 'HF44',
		name: 'Echoes of the Distant Past',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 tactic points. Only playable by a unit with Dwarf, Elf, or Daemon as part of their keywords.</p>',
		releases: {
			HF: 44
		},
		faq: []
	},
	{
		id: 'HF45',
		name: 'Erode Their Position',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: If this unit loses the combat, your enemy must discard a number of cards from their hand with a total dice value equal to or greater than this unit's gold cost.</p>",
		releases: {
			HF: 45
		},
		faq: [97]
	},
	{
		id: 'HF46',
		name: 'Extensive Preparation',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (2): This unit gets +2 strength. Effects that would exchange a unit in this combat with another unit, that would end this combat before resolution,</p><p>or that would destroy a unit in this combat before resolution may not be played.</p>',
		releases: {
			HF: 46
		},
		faq: []
	},
	{
		id: 'HF47',
		name: 'Forewarning',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: You may move any number of your units to or from the battle line.</p><p><b>Command</b>: Target an enemy "<b>Scout</b>" unit. That unit is committed unless your enemy discards 2 cards.</p>',
		releases: {
			HF: 47
		},
		faq: []
	},
	{
		id: 'HF48',
		name: 'Fortitude',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If your enemy wins the combat by a difference of 3 or less, or by a card effect, instead of being destroyed, your unit returns to your battle line committed. Rout checks, if any, may still be made.</p>',
		releases: {
			HF: 48
		},
		faq: [60, 66]
	},
	{
		id: 'HF49',
		name: 'Glorious Charge',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +3 strength. Only playable while all of your units have the "Cavalry" keyword.</p>',
		releases: {
			HF: 49
		},
		faq: []
	},
	{
		id: 'HF50',
		name: 'Here Be Dragons',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p>All monster units get "<b>Victory</b>: +1".</p>',
		releases: {
			HF: 50
		},
		faq: []
	},
	{
		id: 'HF51',
		name: 'I Give You This Sword',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (1): Move 1 attachment from one of your committed units to this unit.</p>',
		releases: {
			HF: 51
		},
		faq: [18]
	},
	{
		id: 'HF52',
		name: 'Inspiring Leadership',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>WarCry</b>: This unit with a character attachment gets +2 strength.</p><p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have a Harbinger unit in play.</p><p><b>Combat Tactic</b>: This Harbinger unit gets +4 strength.</p>',
		releases: {
			HF: 52
		},
		faq: []
	},
	{
		id: 'HF53',
		name: 'Iron Constitution',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your enemy plays a card or ability that would reduce your strength, tactic points, or leadership, negate its effects.</p>',
		releases: {
			HF: 53
		},
		faq: [157]
	},
	{
		id: 'HF54',
		name: "It's Good to Be King",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable while your unit is winning the combat.</p>',
		releases: {
			HF: 54
		},
		faq: []
	},
	{
		id: 'HF55',
		name: "Kick 'Em While They're Down",
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable while your unit is winning the combat.</p>',
		releases: {
			HF: 55
		},
		faq: []
	},
	{
		id: 'HF56',
		name: 'Lap Around!',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 tactic point and the enemy unit gets -1 tactic point. Only playable while your unit is winning the combat.</p>',
		releases: {
			HF: 56
		},
		faq: [198, 168]
	},
	{
		id: 'HF57',
		name: 'Lightning Reflexes',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After the defending enemy unit in a combat gets a strength bonus, your attacking unit gets +1 strength.</p>',
		releases: {
			HF: 57
		},
		faq: [35, 39, 41, 142]
	},
	{
		id: 'HF58',
		name: 'Make the Most of What You Have',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Spell Reaction</b> (2): After a unit gets a strength bonus, increase that bonus by 3.</p>',
		releases: {
			HF: 58
		},
		faq: [35, 39, 41]
	},
	{
		id: 'HF59',
		name: 'Making Sure',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. Only playable while your unit is winning the combat.</p>',
		releases: {
			HF: 59
		},
		faq: []
	},
	{
		id: 'HF60',
		name: 'Never Again',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After a unit plays an ability printed on the unit or an attached card for the second time this battle, that unit must pass 2 leadership test or be committed.</p>',
		releases: {
			HF: 60
		},
		faq: [295]
	},
	{
		id: 'HF61',
		name: 'Never Say Die',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b>: If you have less than 3 cards in your hand, draw a number of cards so that you have 3 cards in your hand.</p>',
		releases: {
			HF: 61
		},
		faq: []
	},
	{
		id: 'HF62',
		name: 'One Shall Fall',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After a combat roll, if the result is a tie, both players re-roll.</p>',
		releases: {
			HF: 62
		},
		faq: [138]
	},
	{
		id: 'HF63',
		name: 'One Shall Stand',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: The unit losing this combat is destroyed. Not playable during a ranged attack.</p>',
		releases: {
			HF: 63
		},
		faq: [66]
	},
	{
		id: 'HF64',
		name: 'Opening Their Guard',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p><b>Reaction</b>: After your enemy pays the cost for a card or ability that would negate or cancel the effects of one of your cards or abilities, your enemy's effect is negated.</p>",
		releases: {
			HF: 64
		},
		faq: []
	},
	{
		id: 'HF65',
		name: 'Overwhelming Horror',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Reduce the enemy unit\'s leadership by this unit\'s "<b>Terror</b>" level.</p>',
		releases: {
			HF: 65
		},
		faq: []
	},
	{
		id: 'HF66',
		name: 'Petty Reprisal',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If you win this combat, destroy one enemy unit that gave any bonuses to the unit in combat.</p>',
		releases: {
			HF: 66
		},
		faq: [10, 33]
	},
	{
		id: 'HF67',
		name: 'Price of War',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Your enemy must commit one of your units. Then, you may commit one of their units with a gold cost less than your committed unit's gold cost. Only playable if you have at least one ready unit.</p>",
		releases: {
			HF: 67
		},
		faq: [97]
	},
	{
		id: 'HF68',
		name: 'Regimental Tactics',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +3 strength. Only playable while all of your units have the "Infantry" keyword.</p>',
		releases: {
			HF: 68
		},
		faq: []
	},
	{
		id: 'HF69',
		name: 'Riposte',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After the attacking enemy unit in a combat gets a strength bonus, your defending unit gets +1 strength.</p>',
		releases: {
			HF: 69
		},
		faq: [35, 39, 41, 142]
	},
	{
		id: 'HF70',
		name: 'Ruthless Expenditure',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b> Discard 1 card: Exchange this unit with one of your committed units in the battle line.</p>',
		releases: {
			HF: 70
		},
		faq: [257, 258, 260, 261, 262]
	},
	{
		id: 'HF71',
		name: 'See How It Feels',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell WarCry</b> (2): Play a WarCry or combat tactic printed on an enemy unit, paying all costs.</p>',
		releases: {
			HF: 71
		},
		faq: []
	},
	{
		id: 'HF72',
		name: 'Sigmar Protects',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have a "<b>Faith</b>" unit and a "<b>Scout</b>" unit in play.</p>',
		releases: {
			HF: 72
		},
		faq: []
	},
	{
		id: 'HF73',
		name: 'Stack the Deck',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When this strategy enters play name any action card. Discard this strategy if you put another copy of it into play.</p><p><b>Reaction</b>: When the named action card is rolled (by either player), change the die on that card to either a 1 or a 6 for the roll.</p>',
		releases: {
			HF: 73
		},
		faq: []
	},
	{
		id: 'HF74',
		name: 'Stampede',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Choose one of your Monster units. Immediately rally (if committed) and declare an attack with that unit. For the duration of the command your unit gets "<b>Terror</b>: 2". Destroy the chosen unit at the end of this command.</p>',
		releases: {
			HF: 74
		},
		faq: [194]
	},
	{
		id: 'HF75',
		name: 'Stand Firm',
		cost: 'X',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +X leadership.</p>',
		releases: {
			HF: 75
		},
		faq: [95, 96]
	},
	{
		id: 'HF76',
		name: 'Steadfast',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>WarCry</b>: This unit's strength, tactic points, and leadership may not be reduced by your enemy's cards or abilities.</p>",
		releases: {
			HF: 76
		},
		faq: []
	},
	{
		id: 'HF77',
		name: 'Tactical Denial',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Choose a number. Your enemy may not play action cards with a die equal to the chosen number during this combat.</p>',
		releases: {
			HF: 77
		},
		faq: [184]
	},
	{
		id: 'HF78',
		name: 'Tactics of Intimidation',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if you have a "<b>Scout</b>" unit and a "<b>Terror</b>" unit in play.</p>',
		releases: {
			HF: 78
		},
		faq: []
	},
	{
		id: 'HF79',
		name: '...There Is a Way',
		cost: 0,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Any cards that are removed from the game during this combat or as a result of combat are returned to their respective discard piles.</p>',
		releases: {
			HF: 79
		},
		faq: []
	},
	{
		id: 'HF80',
		name: 'To Me!',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Commit one of your units with a character attachment: Before one of your units is destroyed in combat, return that unit to the battle line committed instead.</p>',
		releases: {
			HF: 80
		},
		faq: [60]
	},
	{
		id: 'HF81',
		name: 'To the Victor Go the Spoils',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: The winner of this combat may search their army deck for one attachment, attach it to one of their units without cost, and then shuffle their deck.</p>',
		releases: {
			HF: 81
		},
		faq: [4, 114]
	},
	{
		id: 'HF82',
		name: 'To the Wire',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Both players double their combat rolls for this combat. This card has no effect if either player is rolling more than once for combat.</p>',
		releases: {
			HF: 82
		},
		faq: [43]
	},
	{
		id: 'HF83',
		name: 'Trick Shot',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If you win this combat, destroy the enemy unit. Only playable during a ranged attack.</p>',
		releases: {
			HF: 83
		},
		faq: [66]
	},
	{
		id: 'HF84',
		name: 'Undermine',
		cost: 0,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Any cards or abilities that may target a unit outside of combat must do so if a legal target exists.</p>',
		releases: {
			HF: 84
		},
		faq: []
	},
	{
		id: 'HF85',
		name: 'Unreliable',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: Commit a war machine or monster unit.</p>',
		releases: {
			HF: 85
		},
		faq: []
	},
	{
		id: 'HF86',
		name: 'Where There Is a Will...',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Remove an action card in your discard pile from the game: This unit gets +X strength. X equals the die of the card removed from the discard pile.</p>',
		releases: {
			HF: 86
		},
		faq: [95]
	},
	{
		id: 'HF87',
		name: 'Tunnel Fighter',
		cost: 1,
		keywords: ['Character'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Skaven and Dwarf only</b></p><p><b>Reaction</b> Destroy this card: Before this unit declares an attack, target an enemy unit in the reserves. This attack may not be blocked.</p>',
		releases: {
			HF: 87
		},
		faq: [194]
	},
	{
		id: 'HF88',
		name: 'Dorgan Darkeye',
		cost: 3,
		strength: 2,
		tacticPoints: 1,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Command</b> Commit this unit: Declare an attack with one of your infantry units in the reserves. This attack may not be blocked.</p><p><b>Reaction</b>: If your enemy passes or takes any command that is not an attack, rally this unit. You may use this ability while committed.</p>',
		releases: {
			HF: 88
		},
		faq: [194]
	},
	{
		id: 'HF89',
		name: "Dorgan's Digger Crew",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After this unit enters a combat as the defender, destroy any one attachment in play.</p>',
		releases: {
			HF: 89
		},
		faq: []
	},
	{
		id: 'HF90',
		name: "Dorgan's Disgraced",
		cost: 3,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -4</p><p><b>Reaction</b> Remove this card from the game, discard 1 card: After one of your units wins a combat, the enemy unit is routed (no roll necessary). Only playable from your discard pile.</p>',
		releases: {
			HF: 90
		},
		faq: [195, 145, 148]
	},
	{
		id: 'HF91',
		name: "Dorgan's Hammers of Spite",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit gets +2 strength while it has a character attached.</p><p><b>Reaction</b>: Before this unit is destroyed, attach any characters attached to this unit to another of your units.</p>',
		releases: {
			HF: 91
		},
		faq: []
	},
	{
		id: 'HF92',
		name: "Dorgan's Iron Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. Skaven units.</p>',
		releases: {
			HF: 92
		},
		faq: []
	},
	{
		id: 'HF93',
		name: "Dorgan's Iron Warriors",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit gets "<b>Victory</b>: +2" while there are no terrain cards in play.</p>',
		releases: {
			HF: 93
		},
		faq: []
	},
	{
		id: 'HF94',
		name: "Dorgan's Rangers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 6</p><p><b>Reaction</b>: When your enemy pays the cost for a command printed on a war machine, negate the effects of that command.</p>',
		releases: {
			HF: 94
		},
		faq: []
	},
	{
		id: 'HF95',
		name: 'Throndil Starhammerer',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Runesmith</b>: 2 <i>(Counts as Wizard)</i></p><p><b>Spell Reaction</b> Discard 1 card (1): When your enemy plays a card or ability that destroys at least one of your attachments, negate its effects.</p>',
		releases: {
			HF: 95
		},
		faq: [157]
	},
	{
		id: 'HF96',
		name: 'Sons of Grungni',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: Your enemy may not play cards or abilities that would create a slaughter.</p>',
		releases: {
			HF: 96
		},
		faq: [135]
	},
	{
		id: 'HF97',
		name: 'Black Knights of Morr',
		cost: 5,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>This unit is immune to "<b>Terror</b>" while in combat with Khemri and Vampire Counts units.</p><p><b>Combat Tactic</b>: This unit gets +2 strength and +2 leadership.</p>',
		releases: {
			HF: 97
		},
		faq: []
	},
	{
		id: 'HF98',
		name: 'Fabian Techlich',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Faith</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. Khemri or Vampire Counts units.</p>',
		releases: {
			HF: 98
		},
		faq: []
	},
	{
		id: 'HF100',
		name: "Fandelhoch's New Machine",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 9</p><p><b>Support Tactic</b> Remove this card from the game, discard 1 card: Your unit gets +1 strength. You may play this ability from your discard pile.</p>',
		releases: {
			HF: 100
		},
		faq: []
	},
	{
		id: 'HF101',
		name: "Fandelhoch's Outriders",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Commit: After your enemy puts a strategy card into play, remove that strategy card from play.</p>',
		releases: {
			HF: 101
		},
		faq: []
	},
	{
		id: 'HF102',
		name: "Fandelhoch's Riders",
		cost: 4,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Short Ranged Attack</b>: 5</p><p><b>Reaction</b>: After this unit is targeted for an attack, move this unit and the attacking unit to their respective battle lines. The combat is changed to a ranged attack with this unit as the attacker.</p><p>If this unit loses the combat, destroy this unit.</p>',
		releases: {
			HF: 102
		},
		faq: [66]
	},
	{
		id: 'HF103',
		name: 'Ivan Fandelhoch',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Faith</b>: 1</p><p><b>Support Tactic</b>: Any unit gets +2 strength. Only playable vs. "<b>Wizard</b>" units.</p>',
		releases: {
			HF: 103
		},
		faq: []
	},
	{
		id: 'HF104',
		name: 'The Hunters of Hochland',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Long Ranged Attack</b>: 6</p><p><b>Command</b>: Destroy 1 character attachment on any enemy unit.</p>',
		releases: {
			HF: 104
		},
		faq: []
	},
	{
		id: 'HF105',
		name: 'Erwin Fandelhoch',
		cost: 1,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This war machine unit gets +2 strength and +1 tactic point.</p>',
		releases: {
			HF: 105
		},
		faq: []
	},
	{
		id: 'HF106',
		name: 'Toby Rutzpold',
		cost: 1,
		tacticPoints: 1,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b> Destroy this card: If this unit wins this combat, destroy the enemy unit. Only playable during a ranged attack.</p>',
		releases: {
			HF: 106
		},
		faq: [66]
	},
	{
		id: 'HF107',
		name: 'Aetholbrin Eldenstar',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +1 strength for each of your ranged attack units.</p>',
		releases: {
			HF: 107
		},
		faq: []
	},
	{
		id: 'HF108',
		name: "Aislinn's Sea Guard",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b> Commit: Before one of your High Elf units plays a combat tactic card during a ranged attack, reduce the tactic point cost of that card to 0.</p>',
		releases: {
			HF: 108
		},
		faq: []
	},
	{
		id: 'HF109',
		name: "Aislinn's Sea Rangers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Short Ranged Attack</b>: 4</p><p><b>Command</b> Remove this card from the game: Declare an attack with another copy of this unit in play (committed or ready). You may play this ability from your discard pile.</p>',
		releases: {
			HF: 109
		},
		faq: [194]
	},
	{
		id: 'HF110',
		name: 'Cython Menlui',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['High Elf', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Terror</b>: 2</p><p><b>Reaction</b>: When this unit enters combat, commit a unit in the enemy\'s battle line unless it passes a leadership test. Only playable while you have a "<b>Wizard</b>" in play.</p>',
		releases: {
			HF: 110
		},
		faq: [74]
	},
	{
		id: 'HF111',
		name: 'Eothrilion True Eye',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: Once per combat, after a unit gets a strength bonus from a support tactic, that unit gets a bonus to their tactic points instead.</p>',
		releases: {
			HF: 111
		},
		faq: [133]
	},
	{
		id: 'HF112',
		name: 'Kyrlranlaer Silvershore',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p>Spell Raction (1): Before you make a ranged attack, you may target any enemy unit, regardless of range.</p>',
		releases: {
			HF: 112
		},
		faq: []
	},
	{
		id: 'HF113',
		name: 'Sea Lord Aislinn',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Terror</b>: 1</p><p><b>Reaction</b>: Before the player with who takes the first command is declared, the player with the most tactic points in their battle line takes the first command.</p>',
		releases: {
			HF: 113
		},
		faq: []
	},
	{
		id: 'HF114',
		name: 'Ships Company of the Pernicious',
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Ranged Attack</b>: 5</p><p><b>Reaction</b> Commit or remove this card from the game: After an enemy unit declares an attack against a unit in your reserves, reduce the enemy unit's strength by this unit's ranged attack.</p><p>You may play this ability from your discard pile.</p>",
		releases: {
			HF: 114
		},
		faq: [194]
	},
	{
		id: 'HF115',
		name: 'Gaensofir Swiftfoot',
		cost: 1,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>High Elf <b>Scout</b> units only</p><p>This unit may not be targeted for an attack if there is another legal target.</p>',
		releases: {
			HF: 115
		},
		faq: []
	},
	{
		id: 'HF116',
		name: 'Loremaster',
		cost: 2,
		tacticPoints: 2,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Reveal the top card of your deck until you reveal a card with a spell point cost. Add that card to your hand and discard the others.</p>',
		releases: {
			HF: 116
		},
		faq: []
	},
	{
		id: 'HF117',
		name: 'Detachment Training',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Reaction</b>: When one of your Empire units with a gold cost of five or more enters combat, choose another Empire unit with a gold cost of 2 or less.</p><p>Add that unit's strength or half of its ranged attack (your choice) to your unit's strength.</p>",
		releases: {
			HF: 117
		},
		faq: [97, 287]
	},
	{
		id: 'HF118',
		name: 'Dwarfen Pride',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This Dwarf unit cannot be routed.</p>',
		releases: {
			HF: 118
		},
		faq: []
	},
	{
		id: 'HF119',
		name: 'Pure of Heart',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Attach this card to any of your High Elf units. While attached, this unit is immune to the effects of "<b>Terror</b>". If this unit is destroyed, you must commit another of your units.</p>',
		releases: {
			HF: 119
		},
		faq: []
	},
	{
		id: 'HF120',
		name: 'Unshakable Resolve',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Support Tactic</b>: Any Grand Alliance unit in this combat gets "<b>Faith</b>: 2".</p>',
		releases: {
			HF: 120
		},
		faq: []
	},
	{
		id: 'MP1',
		name: "Ch'kal Prince of Lies",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Daemon', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Wizard</b>: 3</p><p><b>Terror</b>: 1</p><p><b>Spell Support Tactic</b> (0): Gain 2 spell points.</p>',
		releases: {
			MP: 1
		},
		faq: []
	},
	{
		id: 'MP2',
		name: 'Diamante, Warp Caller',
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Command</b> Destroy this unit: Move a daemon unit with a gold cost of X or less from your discard pile into your reserves. X equals the total gold cost of this unit and its attachments.</p>',
		releases: {
			MP: 2
		},
		faq: [274]
	},
	{
		id: 'MP3',
		name: "Eb'boala Contagion's Host",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (3): Remove a token from any card in play to put two -1 strength plague tokens no any unit.</p>',
		releases: {
			MP: 3
		},
		faq: []
	},
	{
		id: 'MP4',
		name: "Ka'wile, Deception Weaver",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1): After you fail a test, re-roll.</p>',
		releases: {
			MP: 4
		},
		faq: [138]
	},
	{
		id: 'MP5',
		name: "Ka'wile's Horrors",
		cost: 5,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Daemon', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If you win this combat, move another copy of this unit from your discard to your battle line. Not playable during a follow-up attack.</p>',
		releases: {
			MP: 5
		},
		faq: [4]
	},
	{
		id: 'MP6',
		name: 'Ishini, Champion of the Changer',
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After any roll, re-roll. Either player may play this ability. Only playable while this unit is in combat.</p>',
		releases: {
			MP: 6
		},
		faq: [138]
	},
	{
		id: 'MP7',
		name: 'The Company of Change',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (2): Roll: You or your opponent either gain or lose spell points equal to the amount of the roll.</p>',
		releases: {
			MP: 7
		},
		faq: [165]
	},
	{
		id: 'MP8',
		name: 'Vanisius the Fair',
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): The enemy unit gets -1 leadership.</p>',
		releases: {
			MP: 8
		},
		faq: []
	},
	{
		id: 'MP9',
		name: 'Bilious Vomitongue',
		cost: 1,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Chaos Only</b></p><p><b>Combat Tactic</b>: The enemy unit gets -2 strength unless your enemy discards 1 card.</p>',
		releases: {
			MP: 9
		},
		faq: []
	},
	{
		id: 'MP10',
		name: 'Sintar the Touched',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Chaos Only</b></p><p>This unit gets "<b>Wizard</b>: 1".</p><p><b>Spell Combat Tactic</b> (1): Both players roll. Both units get a strength bonus equal to their roll.</p>',
		releases: {
			MP: 10
		},
		faq: [151]
	},
	{
		id: 'MP11',
		name: 'Zorgoam the Ecstatic',
		cost: 1,
		tacticPoints: 2,
		keywords: ['Chaos', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Chaos Only</b></p><p>This unit is immune to "<b>Terror</b>".</p>',
		releases: {
			MP: 11
		},
		faq: []
	},
	{
		id: 'MP12',
		name: "Darkblade's Highborn",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength. Only playable while you have more unique Dark Elf units than non-unique units.</p>',
		releases: {
			MP: 12
		},
		faq: []
	},
	{
		id: 'MP13',
		name: 'Eldire, Mother of the Drachau',
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Veteran</b>: Eldire</p><p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (0): You get +1 or -1 spell point.</p><p><b>Spell Support Tactic</b> Discard 1 card (1): Your unit gets a strength bonus equal to the discarded card's die. Only playable while you have the same number of spell points as your enemy.</p>",
		releases: {
			MP: 13
		},
		faq: [170]
	},
	{
		id: 'MP14',
		name: "Eldire's Arrows",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 8</p><p><b>Combat Tactic</b>: If you win this combat, gain or lose spell points until you have the same number as your enemy. Only playable during a ranged attack.</p>',
		releases: {
			MP: 14
		},
		faq: [4]
	},
	{
		id: 'MP15',
		name: 'Keth Zarene, Mistress of the Skies',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Veteran</b>: Keth Zarene</p><p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (2): After your enemy declares a ranged or non-ranged attack, your enemy discards 1 card. If you and your enemy have the same number of spell points they discard 2 cards instead.</p>',
		releases: {
			MP: 15
		},
		faq: [169]
	},
	{
		id: 'MP16',
		name: 'Malus Darkblade, Drachau of Hag Graef',
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Malus Darkblade</p><p><b>Spell Combat Tactic</b> (1): This unit gets +2 strength and "<b>Terror</b>: 1".</p><p><b>Command</b>: Rally any Dark Elf unit. You may play this ability while committed. Only playable while you and your enemy have the same number of spell points.</p>',
		releases: {
			MP: 16
		},
		faq: [268]
	},
	{
		id: 'MP17',
		name: "Malus's Black Guard",
		cost: 5,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 strength.</p>',
		releases: {
			MP: 17
		},
		faq: []
	},
	{
		id: 'MP18',
		name: "Malus's Spearmen",
		cost: 3,
		strength: 2,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your enemy discards 1 card.</p>',
		releases: {
			MP: 18
		},
		faq: []
	},
	{
		id: 'MP19',
		name: 'Naggarythe Dark Spears',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and +1 tactic point. Only playable while defending.</p>',
		releases: {
			MP: 19
		},
		faq: []
	},
	{
		id: 'MP20',
		name: 'Crystal of Midnight',
		cost: 1,
		keywords: ['Dark Elf', 'Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Dark Elf Only</b></p><p>When this card comes in to play, choose an ability printed on another card in play. While this card is in play the chosen ability has no effect and may not be played or activated.</p>',
		releases: {
			MP: 20
		},
		faq: []
	},
	{
		id: 'MP21',
		name: 'Rubric of Dark Dimensions',
		cost: 2,
		unique: true,
		keywords: ['Dark Elf', 'Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: "<p><b>Dark Elf Only</b></p><p><b>Spell Command</b> Destroy this unit (3): Choose three units in your enemy's battle line. Each of these units is destroyed unless they pass a strength test.</p>",
		releases: {
			MP: 21
		},
		faq: []
	},
	{
		id: 'MP22',
		name: 'Crusha Cart',
		cost: 5,
		strength: 7,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -1</p><p>While ready, if you have fewer units in your battle line than in your reserves, your next command must be to attack with this unit.</p>',
		releases: {
			MP: 22
		},
		faq: []
	},
	{
		id: 'MP23',
		name: 'Gobbo Lobba',
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Support Tactic</b>: Your unit gets +1 strength.</p>',
		releases: {
			MP: 23
		},
		faq: []
	},
	{
		id: 'MP24',
		name: 'Greenskin Mob',
		cost: 3,
		strength: 4,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. Grand Alliance units.</p>',
		releases: {
			MP: 24
		},
		faq: []
	},
	{
		id: 'MP25',
		name: 'Snotling Swarm',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -1</p><p>This unit may block any attack that targets one of your Orc units.</p>',
		releases: {
			MP: 25
		},
		faq: [208]
	},
	{
		id: 'MP26',
		name: 'Vazrag Brainbuster and the Wolfie Boyz',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1): After you roll, if the roll is less than this unit's strength you may re-roll.</p>",
		releases: {
			MP: 26
		},
		faq: [138]
	},
	{
		id: 'MP27',
		name: "Vazrag's Fetching Boyz",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>While you have fewer spell points than your enemy this unit may not be blocked.</p><p><b>Combat Tactic</b>: This unit gets +1 strength. Only playable vs. Dwarf units.</p>',
		releases: {
			MP: 27
		},
		faq: []
	},
	{
		id: 'MP28',
		name: "Yazrag's Pointy Stickers",
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 1,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 leadership. Only playable while you have fewer spell points than your enemy.</p>',
		releases: {
			MP: 28
		},
		faq: []
	},
	{
		id: 'MP29',
		name: "Wazzi Moonscowler, Gork's Speaker",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		unique: true,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Wizard</b>: 1</p><p><b>Reaction</b>: After a combat roll where you rolled 3 or less, gain 1 spell point.</p><p><b>Spell Command</b> Destroy this unit (2): Gain spell points equal to this unit's tactic points. After this spell point bonus, if you have fewer spell points than your enemy, commit one of their <b>Wizard</b> units.</p>",
		releases: {
			MP: 29
		},
		faq: [149]
	},
	{
		id: 'MP30',
		name: 'Ugbrag the Lucky',
		cost: 1,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Combat Tactic</b> (1): You unit gets +2 tactic points.</p>',
		releases: {
			MP: 30
		},
		faq: []
	},
	{
		id: 'MP31',
		name: "Ugbrag's Lucky Shield",
		cost: 1,
		keywords: ['Orc', 'Item'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p>Orc <b>Wizard</b> Only</p><p><b>Reaction</b>: After this unit would be destroyed, you may destroy this attachment instead. You may play this ability while committed.</p>',
		releases: {
			MP: 31
		},
		faq: []
	},
	{
		id: 'MP32',
		name: "Arnizipal's Black Horror",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (5): Place this card in your battle line. While in play, treat this card as an 8 strength, 0 tactic point, 0 leadership infantry unit that may not have cards attached to it. This card does not count for victory and may not be carried over.</p><p>Only playable while you have a Dark Elf <b>Wizard</b>.</p>',
		releases: {
			MP: 32
		},
		faq: [132]
	},
	{
		id: 'MP33',
		name: 'Ere We Go Ere We Go Ere We Go',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (3): Rally a committed Orc unit. Only playable while you have an Orc <b>Wizard</b>.</p>',
		releases: {
			MP: 33
		},
		faq: []
	},
	{
		id: 'MP34',
		name: 'Favoured Poxes',
		die: 1,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>You may put this card into play as a <b>Combat Tactic</b> for 2 tactic points. When you play this card, pay 3 spell points or discard it. Only playable while you have a Chaos <b>Wizard</b>.</p><p>While this card is in play all non-Chaos units get -1 strength and -1 leadership.</p>',
		releases: {
			MP: 34
		},
		faq: [131, 134]
	},
	{
		id: 'MP35',
		name: "Khorne's Favor",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit gets +1 strength and no player may play spell abilities or cards for the rest of the combat. If the opposing unit is a <b>Wizard</b> or has a <b>Wizard</b> attachment, you get +4 strength instead. Only playable while you have no <b>Wizard</b> units.</p>',
		releases: {
			MP: 35
		},
		faq: []
	},
	{
		id: 'MP36',
		name: 'Orange Fire of Transition',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (1): You may re-roll any roll you make during this combat. Only playable while you have a Chaos <b>Wizard</b>.</p>',
		releases: {
			MP: 36
		},
		faq: [138]
	},
	{
		id: 'MP37',
		name: 'Titillating Delusions',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After setup, move one enemy unit from the reserves to the battle line. Only playable if you have a Chaos <b>Wizard</b>.</p>',
		releases: {
			MP: 37
		},
		faq: []
	},
	{
		id: 'MP38',
		name: "Amshu's Blinding Light",
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Spell Reaction</b> (3): After your enemy declares an attack, block with any ready unit. The enemy unit's strength is halved, rounding up.</p>",
		releases: {
			MP: 38
		},
		faq: [208]
	},
	{
		id: 'MP39',
		name: 'Break Their Momentum',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Command</b>: Destroy all tokens and attached cards.</p>',
		releases: {
			MP: 39
		},
		faq: [13]
	},
	{
		id: 'MP40',
		name: 'Burning Head',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (4): Your <b>Wizard</b> unit gets "<b>Ranged Attack</b>: 6" and declares an immediate attack targeting a unit in your enemy\'s battle line. After the combat is over, your <b>Wizard</b> unit immediately declares another "<b>Ranged Attack</b>: 6" targeting a unit in your enemy\'s reserves.</p>',
		releases: {
			MP: 40
		},
		faq: [149]
	},
	{
		id: 'MP41',
		name: 'Commandment of Brass',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (2): Commit any War Machine unit.</p>',
		releases: {
			MP: 41
		},
		faq: []
	},
	{
		id: 'MP42',
		name: 'Conflagration of Doom',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p><b>Spell Command</b> (3): Roll. Choose a number of enemy units equal to your roll. Commit each chosen unit unless it passes a tactic point test.</p>',
		releases: {
			MP: 42
		},
		faq: [74]
	},
	{
		id: 'MP43',
		name: 'Creeping Death',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): Your unit gets +2 strength.</p>',
		releases: {
			MP: 43
		},
		faq: []
	},
	{
		id: 'MP44',
		name: 'Dark Hand of Death',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: "<p><b>Spell Command</b> (X): Choose one unit in your enemy's battle line. Destroy the chosen unit. X equals double the chosen unit's strength.</p>",
		releases: {
			MP: 44
		},
		faq: [96]
	},
	{
		id: 'MP45',
		name: 'Death Dealer',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (2): If you lose this combat, commit the enemy unit unless it passes a leadership test.</p>',
		releases: {
			MP: 45
		},
		faq: [174, 291]
	},
	{
		id: 'MP46',
		name: 'Distillation of Molten Silver',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Your unit gets +3 strength. If your unit is a <b>Wizard</b> unit it gets +4 strength instead.</p>',
		releases: {
			MP: 46
		},
		faq: [149]
	},
	{
		id: 'MP47',
		name: 'Doom and Darkness',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (3): Choose any unit and attach this card to it. While this card is attached the chosen unit gets -3 leadership. After any command, the chosen unit may take a leadership test. If it passes discard this card.</p>',
		releases: {
			MP: 47
		},
		faq: []
	},
	{
		id: 'MP48',
		name: 'Drain Life',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Spell Command</b> (4): One at a time, both you and your enemy roll for each unit in your enemy's battle line. If you roll higher than your enemy, you may either commit the unit you were rolling for or rally one of your units.</p>",
		releases: {
			MP: 48
		},
		faq: [244]
	},
	{
		id: 'MP49',
		name: 'Eldritch Tempest',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p>When you play this card pay 4 spell points or discard it. If at any time you have 0 spell points discard this card.</p><p>While this card is in play your units may not be targeted by ranged attacks.</p>',
		releases: {
			MP: 49
		},
		faq: [131]
	},
	{
		id: 'MP50',
		name: 'Father of the Thorn',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When you play this card pay 3 spell points or discard it.</p><p>While this card is in play neither player may move units from the reserves to the battle line as a command and attacks may not be declared from the reserves.</p><p><b>Spell Command</b> (5): Destroy this strategy. Either player may play this ability.</p>',
		releases: {
			MP: 50
		},
		faq: [194, 131]
	},
	{
		id: 'MP51',
		name: 'Forked Lightning',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (3): Your unit gets +3 strength.</p>',
		releases: {
			MP: 51
		},
		faq: []
	},
	{
		id: 'MP52',
		name: 'Gather Your Power',
		cost: 2,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Spell WarCry</b> (0): You get +4 spell points.</p>',
		releases: {
			MP: 52
		},
		faq: []
	},
	{
		id: 'MP53',
		name: "Karu's Guardian Radiance",
		die: 1,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p>When you play this card pay 4 spell points or discard it. If at any time you have 0 spell points discard this card.</p><p>While this card is in play your units are unaffected by "<b>Terror</b>" and can\'t be routed.</p>',
		releases: {
			MP: 53
		},
		faq: [131]
	},
	{
		id: 'MP54',
		name: 'Law of Gold',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><p><b>Spell Command</b> (2): Roll.</p><p>1 or less: No effect.</p><p>2-3: Destroy one attachment with a printed spell ability on it.</p><p>4-5: Destroy two attachments with printed spell abilities on them.</p><p>6+: For each <b>Wizard</b> unit you have in play, destroy either one attachment with a printed spell ability or one action card that has been attached to a unit.</p></p>',
		releases: {
			MP: 54
		},
		faq: [149]
	},
	{
		id: 'MP55',
		name: 'Master of Stone',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p>You may put this card into play as a combat tactic for 3 tactic points. When you play this card pay 3 spell points or discard it.</p><p>Your enemy's units must pass a strength test to declare an attack. If a unit fails this test, your enemy may draw 1 card and their Command ends.</p>",
		releases: {
			MP: 55
		},
		faq: [194, 131, 134]
	},
	{
		id: 'MP56',
		name: 'Master of the Wood',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: "<p><b>Spell Reaction</b> (3): After your enemy declares an attack, put this card into play as a 2 strength, 1 tactic point, 4 leadership unit which then blocks the attack. If this unit wins the combat, your enemy's unit is committed instead of being destroyed.</p><p>This card is discarded at the end of combat regardless of the resolution.</p>",
		releases: {
			MP: 56
		},
		faq: [208, 132]
	},
	{
		id: 'MP57',
		name: 'Mistress of the Marsh',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (1): The enemy unit gets -2 leadership.</p><p><b>Spell Reaction</b> (1): After your enemy declares an attack with an infantry or cavalry unit, block with one of your ready units.</p>',
		releases: {
			MP: 57
		},
		faq: [208]
	},
	{
		id: 'MP58',
		name: 'Nullify Magic',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Spell WarCry</b> (2): Both players get -2 spell points. Spell cards or abilities may not be played for the rest of the command.</p>',
		releases: {
			MP: 58
		},
		faq: [165]
	},
	{
		id: 'MP59',
		name: 'Overwhelming Power',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (3): Your unit gets +5 strength. If your unit passes a tactic point test, it gets +7 strength instead.</p>',
		releases: {
			MP: 59
		},
		faq: [169, 270]
	},
	{
		id: 'MP60',
		name: 'Pelt of Midnight',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: "<p><b>Spell Command</b> (2): Attach this card to one of your units. While attached your enemy's unit must pass a tactic point test to target this unit with an attack. If the test fails, the unit must choose another legal target for their attack.</p><p>If there is no other legal target, your enemy's command ends.</p>",
		releases: {
			MP: 60
		},
		faq: []
	},
	{
		id: 'MP61',
		name: "Phal's Illumination",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: "<p><b>Spell Combat Tactic</b> (3): Your <b>Wizard</b> unit gets +2 strength and abilities printed on the enemy's unit or its attachments may not be played this combat.</p>",
		releases: {
			MP: 61
		},
		faq: [149]
	},
	{
		id: 'MP62',
		name: 'Pit of Shades',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Command</b> (1): One of your <b>Wizard</b> units gets "<b>Ranged Attack</b>: 6" and immediately declares a ranged attack. If the <b>Wizard</b> unit wins this combat, the losing unit is moved to the reserves at the end of the combat.</p>',
		releases: {
			MP: 62
		},
		faq: [149]
	},
	{
		id: 'MP63',
		name: 'Portent of Far',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): If you roll a 1 for this combat, re-roll.</p>',
		releases: {
			MP: 63
		},
		faq: [138]
	},
	{
		id: 'MP64',
		name: 'Rule of Burning Iron',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (1): Your unit gets +1 strength. If the enemy unit has a gold cost of 5 your unit gets +2 strength instead. If the enemy unit has a gold cost of 6 or more your unit gets +3 strength instead.</p>',
		releases: {
			MP: 64
		},
		faq: [97]
	},
	{
		id: 'MP65',
		name: 'Second Sign of Amul',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b> (1): After you roll, re-roll.</p>',
		releases: {
			MP: 65
		},
		faq: []
	},
	{
		id: 'MP66',
		name: 'Shades of Death',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Command</b> (1): Attach this card to one of your units. While attached your unit gets "<b>Terror</b>: 3".</p>',
		releases: {
			MP: 66
		},
		faq: []
	},
	{
		id: 'MP67',
		name: "Shem's Burning Gaze",
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Spell WarCry</b> (2): Your unit gets a strength bonus equal to the enemy unit's strength.</p>",
		releases: {
			MP: 67
		},
		faq: []
	},
	{
		id: 'MP68',
		name: 'Soldiers Carry the Day',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your unit gets +1 strength. Until the end of this combat, whenever a spell card or ability is played your unit gets gets an additional +1 strength.</p>',
		releases: {
			MP: 68
		},
		faq: []
	},
	{
		id: 'MP69',
		name: 'Steal Soul',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: '<p><b>Spell Command</b> (7): Commit one enemy unit and rally one of your units. Not playable vs. Khemri, Vampire Counts or daemon units.</p>',
		releases: {
			MP: 69
		},
		faq: []
	},
	{
		id: 'MP70',
		name: 'Storm of Cronos',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p><b>Spell Command</b> (X): Draw X cards. X equals the number of units in you and your enemy's battle line.</p>",
		releases: {
			MP: 70
		},
		faq: [96]
	},
	{
		id: 'MP71',
		name: "The Bear's Anger",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (2): Your <b>Wizard</b> gets +5 strength.</p>',
		releases: {
			MP: 71
		},
		faq: []
	},
	{
		id: 'MP72',
		name: 'The Beast Cowers',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Spell Combat Tactic</b> (2): Your unit gets +3 strength. Only playable vs. cavalry, flyer, or monster units.</p>',
		releases: {
			MP: 72
		},
		faq: []
	},
	{
		id: 'MP73',
		name: 'The Comet of Casandora',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: "<p>When you play this card put 1 comet token on it.</p><p><b>Spell Support Tactic</b> (1): Add 1 comet token to or remove 1 comet token from this card. Either player may play this ability.</p><p><b>Spell Command</b> Destroy this card (1): Each unit in your enemy's battle line must take a strength test. For each comet token on this card add +1 to the roll for each test. If a unit fails this strength test, commit it.</p><p>If the unit is already committed, destroy it instead.</p>",
		releases: {
			MP: 73
		},
		faq: []
	},
	{
		id: 'MP74',
		name: "The Eagle's Cry",
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (2): Attach this card to any cavalry or flyer unit and put 4 confusion tokens on that unit. While attached, if this unit has any confusion tokens on it, the unit may not attack or block.</p><p>After any Command ends, remove a confusion token from this unit. If this unit has no confusion tokens on it, discard this card.</p>',
		releases: {
			MP: 74
		},
		faq: [194, 140, 32]
	},
	{
		id: 'MP75',
		name: 'The Oxen Stands',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (2): After your enemy routs one of your units, they may not follow up.</p>',
		releases: {
			MP: 75
		},
		faq: []
	},
	{
		id: 'MP76',
		name: 'The Rain Lord',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (2): After you win a combat, commit a unit that has a ranged attack ability unless it passes a strength test.</p>',
		releases: {
			MP: 76
		},
		faq: [4, 74]
	},
	{
		id: 'MP77',
		name: 'The Wolf Hunts',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: "<p><b>Spell Reaction</b> (2): After you declare an attack with a cavalry, flyer, or monster unit, this attack can't be blocked and your enemy may not play reactions this combat.</p>",
		releases: {
			MP: 77
		},
		faq: [194, 184]
	},
	{
		id: 'MP78',
		name: 'Transmutation of Lead',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Spell Combat Tactic</b> (1): Your enemy's unit gets -2 strength and may not play abilities printed on its attachments.</p>",
		releases: {
			MP: 78
		},
		faq: []
	},
	{
		id: 'MP79',
		name: "Ulzah's Healing Hand",
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> Discard 1 card (X): Rally a unit with a gold cost of X or less. Not playable on Khemri, Vampire Count or daemon units.</p>',
		releases: {
			MP: 79
		},
		faq: [96, 97]
	},
	{
		id: 'MP80',
		name: 'Unseen Lurker',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Common',
		text: "<p><b>Spell Command</b> (2): Declare an attack with one of your units targeting any enemy unit. This attack can't be blocked.</p>",
		releases: {
			MP: 80
		},
		faq: [194]
	},
	{
		id: 'MP81',
		name: "Uranon's Thunderbolt",
		cost: 2,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell WarCry</b> (X): Your unit gets +X strength.</p>',
		releases: {
			MP: 81
		},
		faq: [95, 96]
	},
	{
		id: 'MP82',
		name: "Urru'z Dazzling Brightness",
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Spell Combat Tactic</b> (2): The enemy's unit gets -4 tactic points. If this would take that unit below 0 tactic points, your unit gets +1 tactic point as well.</p>",
		releases: {
			MP: 82
		},
		faq: [168]
	},
	{
		id: 'MP83',
		name: 'Wall of Fire',
		die: 2,
		keywords: ['Strategy', 'Terrain'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When you put this card into play pay 2 spell points or discard it. Choose one enemy unit. While this card is in play the chosen unit gets -3 strength.</p><p><b>Spell Combat Tactic</b> (4): Destroy this card. Either player may play this ability.</p>',
		releases: {
			MP: 83
		},
		faq: []
	},
	{
		id: 'MP84',
		name: 'Flaming Sword of Rhiun',
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Wizard</b> Only</p><p>After setup, pay 2 spell points or discard this card.</p><p><b>Spell Combat Tactic</b> (3): Your unit gets +2 strength.</p>',
		releases: {
			MP: 84
		},
		faq: []
	},
	{
		id: 'MP85',
		name: "Ancestor's Breath",
		cost: 3,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Ranged Attack</b>: 8</p><p><b>Reaction</b>: After this unit declares a ranged attack on a unit in your enemy's battle line, choose another unit in your enemy's battle line. The target of the ranged attack gets a strength bonus equal to the chosen units strength. If you win this combat,</p><p>commit the chosen unit.</p>",
		releases: {
			MP: 85
		},
		faq: [4]
	},
	{
		id: 'MP86',
		name: "Silverhammer's Blooded Beards",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +1</p><p><b>Combat Tactic</b>: Both you and your enemy get -2 spell points.</p>',
		releases: {
			MP: 86
		},
		faq: [165]
	},
	{
		id: 'MP87',
		name: "Silverhammer's Eagle Eyes",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Combat Tactic</b>: Pay one spell point; if you do this unit gets +2 ranged attack.</p>',
		releases: {
			MP: 87
		},
		faq: []
	},
	{
		id: 'MP88',
		name: "Silverhammer's Hammers",
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: +2</p><p><b>Reaction</b>: After your enemy gets a spell point bonus, they lose spell points equal to that bonus. Only playable while you have no spell points.</p>',
		releases: {
			MP: 88
		},
		faq: []
	},
	{
		id: 'MP89',
		name: "Silverhammer's Ironbreakers",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. Orc or Monster units.</p>',
		releases: {
			MP: 89
		},
		faq: []
	},
	{
		id: 'MP90',
		name: "Silverhammer's Lead Casters",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>WarCry</b>: If you win this combat, this unit does not commit as a result of the combat. Only playable while you have no spell points and only during a ranged attack.</p>',
		releases: {
			MP: 90
		},
		faq: [4]
	},
	{
		id: 'MP91',
		name: 'Skoramin Silverhammer and Anvil of Doom',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Runesmith</b>: 2 <i>(Counts as Wizard)</i></p><p><b>Spell Command</b> (3) Commit: While this unit remains committed your Dwarf units get "<b>Terror</b>: 2" and "<b>Faith</b>: 2".</p><p><b>Spell Command</b> (3): Rally this unit. This ability may be played while committed and only by your enemy.</p>',
		releases: {
			MP: 91
		},
		faq: []
	},
	{
		id: 'MP92',
		name: 'Svenador Flametamer',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 4,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Runesmith</b>: 1 <i>(Counts as Wizard)</i></p><p><b>Spell Combat Tactic</b> (1): Choose one attachment with a spell ability from your discard and move it to any of your other ready units.</p>',
		releases: {
			MP: 92
		},
		faq: []
	},
	{
		id: 'MP93',
		name: 'Master Runic Talisman of Spite',
		cost: 1,
		keywords: ['Dwarf', 'Item'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>Dwarf Only</b></p><p><b>Spell Combat Tactic</b> (1): Your unit gets +2 strength and if this combat ends in a slaughter, you win instead. Only playable while losing a combat.</p>',
		releases: {
			MP: 93
		},
		faq: [196, 197, 247]
	},
	{
		id: 'MP94',
		name: 'Rune Axe of Might',
		cost: 2,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Dwarf', 'Weapon'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable vs. units with a higher gold cost than your unit.</p>',
		releases: {
			MP: 94
		},
		faq: [97]
	},
	{
		id: 'MP95',
		name: "Altdorf's Favored Sons",
		cost: 3,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b> Discard 2 cards: After your enemy routs one of your units, they may not follow up.</p>',
		releases: {
			MP: 95
		},
		faq: []
	},
	{
		id: 'MP96',
		name: 'Balthasar Gelt, Patriarch of the Colleges of Magic',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Balthasar Gelt</p><p><b>Wizard</b>: 3</p><p><b>Spell Support Tactic</b> (1): Move any unit not in combat to the reserves or battle line.</p><p><b>Combat Tactic</b>: If this unit passes a tactic points test, your enemy may not play spell cards or abilities.</p>',
		releases: {
			MP: 96
		},
		faq: [270]
	},
	{
		id: 'MP97',
		name: 'Defenders of Altdorf',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>This unit may block attacks that target your "<b>Wizard</b>" units.</p>',
		releases: {
			MP: 97
		},
		faq: [208]
	},
	{
		id: 'MP98',
		name: 'Favored Knights of the Corona',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Spell Combat Tactic</b> (3): If you win this combat, take a spell point test. If you pass this test, rout the enemy unit (no roll necesssary). Only playable during a follow-up attack.</p>',
		releases: {
			MP: 98
		},
		faq: []
	},
	{
		id: 'MP99',
		name: "Gausser's War Wagon",
		cost: 5,
		strength: 3,
		tacticPoints: 5,
		leadership: 3,
		keywords: ['Empire', 'War Machine', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 8</p><p>While this unit is ready in your battle line units in the reserves may not be targeted with attacks.</p><p><b>Reaction</b>: After this unit wins a non-ranged combat but does not rout the enemy unit, return this unit to the battle line and declare a ranged attack with this unit.</p>',
		releases: {
			MP: 99
		},
		faq: [194, 4, 60]
	},
	{
		id: 'MP100',
		name: 'Knights of the Gleaming Shield',
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p>If your enemy only has infantry in their battle line, this unit attacks as a flyer.</p>',
		releases: {
			MP: 100
		},
		faq: [25]
	},
	{
		id: 'MP101',
		name: 'Sebastion Vorbach, Bright Wizard',
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Command</b> (3): This unit gets "<b>Ranged Attack</b>: 6" and immediately performs a ranged attack. If this unit wins, it does not commit at the end of the combat.</p>',
		releases: {
			MP: 101
		},
		faq: [4]
	},
	{
		id: 'MP102',
		name: 'Tobias Vorbach, Amethyst Wizard',
		cost: 4,
		strength: 0,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Command</b> Commit one of your units (3): Choose an enemy unit. the chosen unit makes X strength tests. After it fails one of these tests, commit the chosen unit. If this chosen unit is committed when it fails one of these tests, destroy it instead.</p><p>X equals the strength of the committed unit.</p>',
		releases: {
			MP: 102
		},
		faq: []
	},
	{
		id: 'MP103',
		name: 'Marcell Drexner, Jade Wizard',
		cost: 1,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): Your unit gets +2 strength and -1 leadership. Only playable while you have a strategy card in play.</p>',
		releases: {
			MP: 103
		},
		faq: []
	},
	{
		id: 'MP104',
		name: "Wizard's Apprentice",
		cost: 1,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b> Only</p><p><b>Wizard</b>: 1</p><p><b>Reaction</b> Destroy this card: After this unit is committed to pay a cost or by a card effect, rally it.</p>',
		releases: {
			MP: 104
		},
		faq: []
	},
	{
		id: 'MP105',
		name: 'Archers of Swift Deliverance',
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Ranged Attack</b>: 8</p><p><b>Combat Tactic</b>: If you win this combat, move one of your enemy's units from the battle line to the reserves.</p>",
		releases: {
			MP: 105
		},
		faq: [4]
	},
	{
		id: 'MP106',
		name: 'Archers of the Breaking Dawn',
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Reaction</b>: After your enemy declares an attack with a flyer unit, block with this unit. The attack is changed to a ranged attack with this unit as the attacker and the flyer unit as the defender.</p>',
		releases: {
			MP: 106
		},
		faq: [208, 211]
	},
	{
		id: 'MP107',
		name: 'Glorsildaen Shiningmorn',
		cost: 4,
		strength: 2,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Reaction</b> (1): After your enemy pays the cost of a spell card or ability, cancel its effects unless your enemy pays an additional 2 spell points. Only playable while you have more spell points than your enemy.</p>',
		releases: {
			MP: 107
		},
		faq: [159]
	},
	{
		id: 'MP108',
		name: 'Guardians of the Tower',
		cost: 4,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>This unit may not declare attacks.</p><p>This unit may block any attack or ranged attack targeting your High Elf "<b>Wizard</b>" units.</p>',
		releases: {
			MP: 108
		},
		faq: [194, 208, 140]
	},
	{
		id: 'MP109',
		name: 'Saphery Shining Spears',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each High Elf infantry unit in your battle line. Only playable while you have 7 or more spell points.</p>',
		releases: {
			MP: 109
		},
		faq: []
	},
	{
		id: 'MP110',
		name: "Shiningmorn's Ellyrian Harriers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 2</p><p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable while you have a higher "<b>Scout</b>" total than your enemy.</p>',
		releases: {
			MP: 110
		},
		faq: []
	},
	{
		id: 'MP111',
		name: "Shiningmorn's Ellyrian Outriders",
		cost: 3,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Scout</b>: 1</p><p><b>Reaction</b>: After the muster phase, you may move any number of your units from the battle line to the reserves or from the reserves to the battle line.</p>',
		releases: {
			MP: 111
		},
		faq: []
	},
	{
		id: 'MP112',
		name: "Shiningmorn's Gleaming Blades",
		cost: 4,
		strength: 3,
		tacticPoints: 5,
		leadership: 4,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable while you have more spell points than your enemy.</p>',
		releases: {
			MP: 112
		},
		faq: []
	},
	{
		id: 'MP113',
		name: "Shiningmorn's Valiant Spears",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. Only playable vs. cavalry units.</p>',
		releases: {
			MP: 113
		},
		faq: []
	},
	{
		id: 'MP114',
		name: 'Teclis, Master of High Magic',
		cost: 6,
		strength: 3,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Teclis, High Loremaster</p><p><b>Wizard</b>: 3</p><p><b>Spell Reaction</b> (3): After your enemy plays a spell card or ability, cancel its effects.</p><p><b>Spell Command</b> (1): Return any spell card from your discard pile to your hand.</p>',
		releases: {
			MP: 114
		},
		faq: []
	},
	{
		id: 'MP115',
		name: 'Drain Magic',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Uncommon',
		text: '<p><b>Spell Command</b> (2): Your enemy gets -4 spell points. Only playable while you have a High Elf <b>Wizard</b>.</p>',
		releases: {
			MP: 115
		},
		faq: [165]
	},
	{
		id: 'MP116',
		name: 'Fortune Is Fickle',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Spell Reaction</b> (2): Any roll gets +1 or -1. Only playable while you have a High Elf <b>Wizard</b>.</p>',
		releases: {
			MP: 116
		},
		faq: [163]
	},
	{
		id: 'MP117',
		name: 'Grudge Rune',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Rare',
		text: '<p>When you play this card you must have a Dwarf <b>Runesmith</b> in play and pay 2 spell points or discard it. When you play this card choose an army keyword.</p><p><b>Spell Combat Tactic</b> (1): Your unit gets +1 strength, +1 tactic point, and +1 leadership. Only playable vs. units with the chosen army keyword.</p>',
		releases: {
			MP: 117
		},
		faq: [127, 131]
	},
	{
		id: 'MP118',
		name: 'Master Rune of Swiftness',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Spell Reaction</b> (1): After you draw a card for entering a combat, your unit gets +2 tactic points and gets to play the first tactic in the tactics phase. Only playable while you have a Dwarf <b>Runesmith</b> in play.</p>',
		releases: {
			MP: 118
		},
		faq: []
	},
	{
		id: 'MP119',
		name: "Phoenix's Wrath",
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Spell Combat Tactic</b> (2): Your unit gets +3 strength or +4 ranged attack. Only playable while you have a High Elf <b>Wizard</b>.</p>',
		releases: {
			MP: 119
		},
		faq: []
	},
	{
		id: 'MP120',
		name: 'Spell Eater Rune',
		die: 2,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		rarity: 'Uncommon',
		text: "<p>After your enemy plays a spell card or ability, you may put this card into play as a Reaction for 3 spell points.</p><p><b>Spell Reaction</b> (2): After your enemy plays a spell card or ability, make a tactic point test with one of your Dwarf Runesmiths. If you pass the test, cancel the spell card or ability's effect.</p>",
		releases: {
			MP: 120
		},
		faq: [228, 270]
	},
	{
		id: 'VB1',
		name: 'Fandar Warptouched',
		cost: 4,
		strength: 7,
		tacticPoints: 1,
		leadership: 1,
		keywords: ['Chaos', 'Infantry', 'Monster'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: "<p><b>Victory</b>: -4</p><p><b>Combat Tactic</b>: This unit gets a strength bonus equal to the number of cards in your hand minus this unit's victory modifier.</p>",
		releases: {
			VB: 1
		},
		faq: []
	},
	{
		id: 'VB2',
		name: "Korvin, Khorne's Chosen",
		cost: 7,
		strength: 6,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Korvin, Champion of Khorne/Korvin The Sentinel</p><p>You start the battle with 0 spell points and may not gain any spell points while this unit is in play.</p><p><b>Support WarCry</b>: Your enemy must either discard their hand or lose all therir spell points. Your unit gets +1 strength.</p>',
		releases: {
			VB: 2
		},
		faq: []
	},
	{
		id: 'VB3',
		name: "Korvin's Chosen Knights",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Chaos', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Reaction</b> Discard 2 cards: After you declare an attack with a non-infantry Chaos unit, that attack may not be blocked and the attacking unit gets +2 strength.</p>',
		releases: {
			VB: 3
		},
		faq: [194]
	},
	{
		id: 'VB4',
		name: "Korvin's Northern Warriors",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Your non-infantry unit gets +1 strength.</p>',
		releases: {
			VB: 4
		},
		faq: []
	},
	{
		id: 'VB5',
		name: 'Morghur, Master of Skulls',
		cost: 7,
		strength: 4,
		tacticPoints: 5,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Beastmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Terror</b>: 3</p><p><b>WarCry</b>: The enemy unit gets -X tactic points. X equals this unit's leadership. If this reduces the enemy's tactic points below 0, this unit gets either +1 strength or may attach a weapon from your discard pile at no cost.</p>",
		releases: {
			VB: 5
		},
		faq: [168]
	},
	{
		id: 'VB6',
		name: "Morghur's Horde",
		cost: 3,
		strength: 3,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +X strength. X equals the tactic points printed on your highest leadership unit.</p>',
		releases: {
			VB: 6
		},
		faq: []
	},
	{
		id: 'VB7',
		name: "Morghur's Ogres",
		cost: 4,
		strength: 6,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Chaos', 'Infantry', 'Monster'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b> Commit any of your attachments in play: Your unit gets a strength bonus equal to the gold cost of the committed attachments.</p>',
		releases: {
			VB: 7
		},
		faq: []
	},
	{
		id: 'VB8',
		name: "Raaghra's Wild Herd",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Beastmen', 'Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support WarCry</b> Destroy this unit: Draw 1 card. Your unit gets +1 strength. You may play this ability while committed.</p>',
		releases: {
			VB: 8
		},
		faq: []
	},
	{
		id: 'VB9',
		name: 'Mark of the Chosen',
		cost: 1,
		strength: 1,
		tacticPoints: 1,
		keywords: ['Chaos'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This <b>Veteran</b> unit gets +1 leadership or +1 strength.</p>',
		releases: {
			VB: 9
		},
		faq: []
	},
	{
		id: 'VB10',
		name: 'Arrows of Twilight',
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p><b>Ranged Attack</b>: 3</p><p><b>Combat Tactic</b>: This unit gets +X ranged attack. X equals the number of units you have with support tactics printed on them. If this unit's ranged attack becomes 11 or more because of this ability, your enemy also discards 2 cards.</p>",
		releases: {
			VB: 10
		},
		faq: []
	},
	{
		id: 'VB11',
		name: "Kyleth's Fellstalkers",
		cost: 3,
		strength: 3,
		tacticPoints: 4,
		leadership: 2,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b> Discard X cards: Your enemy discards X cards.</p>',
		releases: {
			VB: 11
		},
		faq: [95]
	},
	{
		id: 'VB12',
		name: "Kyleth's Reavers",
		cost: 2,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Command</b>: If you have more total gold in play than your enemy, this ready unit declares an attack from the reserves. If the attack is not blocked, your enemy discards 1 card.</p>',
		releases: {
			VB: 12
		},
		faq: []
	},
	{
		id: 'VB13',
		name: 'Nightbolt',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Dark Elf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your enemy discards 1 card unless they pass a tactic point test.</p>',
		releases: {
			VB: 13
		},
		faq: [270]
	},
	{
		id: 'VB14',
		name: "The Archon's Black Riders",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit declares an attack from the reserves, your enemy discards 1 card.</p>',
		releases: {
			VB: 14
		},
		faq: []
	},
	{
		id: 'VB15',
		name: "Twilight's Harbinger",
		cost: 7,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Dark Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Veteran</b>: Ha'asek, The Archon of Twilight</p><p><b>Support WarCry</b>: Choose 2 abilities printed on any of the enemy's units or attachments. Those abilities may not be played. Your enemy may discard 3 cards to cancel this effect.</p>",
		releases: {
			VB: 15
		},
		faq: []
	},
	{
		id: 'VB16',
		name: "Twilight's Steeds",
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: Your enemy discards 2 cards. This combat ends and both units are returned to their battle line committed. Only playable while attacking.</p>',
		releases: {
			VB: 16
		},
		faq: [142, 60, 186]
	},
	{
		id: 'VB17',
		name: "Tz'arthi, Beast of Har Ganeth",
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry', 'Monster'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit routs an enemy unit, your enemy discards 1 card.</p>',
		releases: {
			VB: 17
		},
		faq: []
	},
	{
		id: 'VB18',
		name: 'Kyleth the Cruel',
		cost: 3,
		keywords: ['Dark Elf', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): Your enemy discards 1 card.</p>',
		releases: {
			VB: 18
		},
		faq: []
	},
	{
		id: 'VB19',
		name: "Da Overlord's Black Orcs",
		cost: 4,
		strength: 5,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Victory</b>: -2</p><p><b>Support Tactic</b>: Your Orc unit with a negative victory modifier cannot be routed.</p>',
		releases: {
			VB: 19
		},
		faq: []
	},
	{
		id: 'VB20',
		name: "Manmangler's Wild Boar Boyz",
		cost: 5,
		strength: 9,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: -6</p><p><b>Reaction</b>: After an enemy unit gets a strength bonus, any unit gets -1 strength.</p>',
		releases: {
			VB: 20
		},
		faq: [35, 36, 39, 41]
	},
	{
		id: 'VB21',
		name: "Urguck's Arrer Boyz",
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Long Ranged Attack</b>: 5</p><p><b>Support Tactic</b> Discard 1 card: The enemy unit gets -1 tactic point.</p>',
		releases: {
			VB: 21
		},
		faq: [168]
	},
	{
		id: 'VB22',
		name: "Urguck's Boyz",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If this unit passes a tactic point test, it gets +2 strength.</p>',
		releases: {
			VB: 22
		},
		faq: [270]
	},
	{
		id: 'VB23',
		name: "Urguck's Sneaky Gits",
		cost: 2,
		strength: 2,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If this unit passes a leadership test, it gets +3 tactic points.</p>',
		releases: {
			VB: 23
		},
		faq: []
	},
	{
		id: 'VB24',
		name: 'Warboss Man-mangler',
		cost: 7,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Orc', 'Flyer'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Urguck Manmangler, Orc Overlord</p><p><b>Reaction</b>: At the end of the Tactic Phase, choose any tactic card played by either player and place it on top of their deck.</p>',
		releases: {
			VB: 24
		},
		faq: []
	},
	{
		id: 'VB25',
		name: "Wuzzag's Arrer Boyz",
		cost: 2,
		strength: 1,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Ranged Attack</b>: 7</p><p><b>Support Tactic</b>: If this unit passes a leadership test, your unit gets +1 tactic point.</p>',
		releases: {
			VB: 25
		},
		faq: []
	},
	{
		id: 'VB26',
		name: "Wuzzag's Gobbo Mob",
		cost: 2,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: If this unit passes a tactic point test, it gets +3 leadership.</p>',
		releases: {
			VB: 26
		},
		faq: [270]
	},
	{
		id: 'VB27',
		name: 'Whirly "Skinripper"',
		cost: 1,
		strength: 2,
		keywords: ['Orc', 'Character'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: If your Orc unit is attacking or defending from the battle line, move this attachment to the attacking or defending unit.</p>',
		releases: {
			VB: 27
		},
		faq: [147, 18]
	},
	{
		id: 'VB28',
		name: 'Aura of Fear',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: This unit gets +2 strength for each of your <b>Terror</b> units.</p>',
		releases: {
			VB: 28
		},
		faq: []
	},
	{
		id: 'VB29',
		name: 'Strength in Deception',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Command</b>: Choose one of your units and make a leadership test. If passed, you may declare an attack with that unit (if it legally could do so) on any enemy unit. If you do, your unit gets +1 strength.</p>',
		releases: {
			VB: 29
		},
		faq: [194]
	},
	{
		id: 'VB30',
		name: 'Hunters of the Eyebiter Tribe',
		cost: 4,
		strength: 3,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Cavalry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p>This unit may attack the enemy's reserves, even if the enemy has ready units in the battle line.</p><p><b>Reaction</b>: After this unit destroys and routs an enemy War Machine unit, if your enemy has another War Machine unit in play, you may choose that unit as the target of the follow-up attack.</p>",
		releases: {
			VB: 30
		},
		faq: []
	},
	{
		id: 'VB31',
		name: 'Armor of Deflection',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p>This unit may not be targeted with ranged attacks.</p>',
		releases: {
			VB: 31
		},
		faq: []
	},
	{
		id: 'VB32',
		name: 'Arrows of Seeking',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>This unit gets +2 ranged attack to all its ranged attack values.</p>',
		releases: {
			VB: 32
		},
		faq: []
	},
	{
		id: 'VB33',
		name: 'Power Stone',
		cost: 0,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Common',
		text: '<p><b>Wizard</b> Only</p><p>You may attach this card to a unit that already has an item attachment.</p><p>You begin the battle with 1 extra spell point.</p>',
		releases: {
			VB: 33
		},
		faq: []
	},
	{
		id: 'VB34',
		name: 'Staff of Sorcery',
		cost: 1,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p>Your spell reactions cost 1 less spell point.</p>',
		releases: {
			VB: 34
		},
		faq: []
	},
	{
		id: 'VB35',
		name: 'Sword of Battle',
		cost: 3,
		strength: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: If you win this combat, rout the enemy unit (no rout check necessary).</p>',
		releases: {
			VB: 35
		},
		faq: [195, 145, 148]
	},
	{
		id: 'VB36',
		name: 'Armored Protection',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +10 strength. Only playable if it has at least 1 character, weapon, armor, item, and standard attached.</p>',
		releases: {
			VB: 36
		},
		faq: []
	},
	{
		id: 'VB37',
		name: 'Ashes of the Fallen',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +X strength. X equals half the number of units in your discard pile (rounded up). Remove all units in your discard pile from the game.</p>',
		releases: {
			VB: 37
		},
		faq: []
	},
	{
		id: 'VB38',
		name: 'Back Up Your Brothers',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength and +2 leadership. Only playable during a follow-up attack.</p>',
		releases: {
			VB: 38
		},
		faq: []
	},
	{
		id: 'VB39',
		name: 'Battle Scream',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b> Discard any number of cards: This unit gets +2 strength for each card discarded. If no cards were discarded, this unit gets +1 strength.</p>',
		releases: {
			VB: 39
		},
		faq: [95]
	},
	{
		id: 'VB40',
		name: 'Behind the Scenes',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. You may choose to destroy one enemy strategy card.</p>',
		releases: {
			VB: 40
		},
		faq: []
	},
	{
		id: 'VB41',
		name: 'Brute Force',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. You may pay 2 extra tactic points when playing this card to get +5 strength instead.</p>',
		releases: {
			VB: 41
		},
		faq: []
	},
	{
		id: 'VB42',
		name: 'Choose Your Allies Well',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +1 strength for either each committed unit or each ready unit in your army (you choose).</p>',
		releases: {
			VB: 42
		},
		faq: []
	},
	{
		id: 'VB43',
		name: 'Confidence',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the difference between this unit and the enemy unit. Only playable while your unit has a higher strength than the enemy unit.</p>',
		releases: {
			VB: 43
		},
		faq: []
	},
	{
		id: 'VB44',
		name: 'Embark On A Quest',
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		rarity: 'Super rare',
		text: '<p><b>Command</b> Commit a <b>Veteran</b> unit: Attach this card to one of your <b>Veteran</b> units. While attached, this unit gets +1 strength and the following abilities: "<b>Reaction</b>: After a command has resolved, draw 1 card." and "<b>Reaction</b> Discard 3 cards: After a command has resolved, ready this unit." These abilities are only playable while committed.</p>',
		releases: {
			VB: 44
		},
		faq: []
	},
	{
		id: 'VB45',
		name: 'Examine Your Strategy',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength for each strategy card you have in play.</p>',
		releases: {
			VB: 45
		},
		faq: []
	},
	{
		id: 'VB46',
		name: 'Experience Has Its Rewards',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your <b>Veteran</b> unit gets +3 strength.</p><p><b>Combat Tactic</b>: Your <b>Veteran</b> unit gets +3 leadership.</p><p><b>Combat Tactic</b>: If your unit is a <b>Veteran</b> unit, draw 2 cards.</p>',
		releases: {
			VB: 46
		},
		faq: []
	},
	{
		id: 'VB47',
		name: 'Explosion of Power',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. You may pay 5 extra tactic points when playing this card to get +8 strength instead.</p>',
		releases: {
			VB: 47
		},
		faq: []
	},
	{
		id: 'VB48',
		name: 'Feigned Weakness',
		cost: 1,
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This committed unit gets +2 strength.</p>',
		releases: {
			VB: 48
		},
		faq: []
	},
	{
		id: 'VB49',
		name: 'Fleet of Foot',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +3 Strength if it was not blocked.</p>',
		releases: {
			VB: 49
		},
		faq: []
	},
	{
		id: 'VB50',
		name: 'Force Their Hand',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: This unit gets +2 strength. When your enemy makes their combat roll for this combat, they roll twice and you choose which die is used as their combat roll.</p>',
		releases: {
			VB: 50
		},
		faq: [244]
	},
	{
		id: 'VB51',
		name: 'Gigantic Weakness',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This ranged attack unit gets +4 strength vs. monster units.</p>',
		releases: {
			VB: 51
		},
		faq: []
	},
	{
		id: 'VB52',
		name: 'Give and Take',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: "<p><b>Combat Tactic</b>: Both units get a strength bonus equal to the cards in their controller's hand.</p>",
		releases: {
			VB: 52
		},
		faq: []
	},
	{
		id: 'VB53',
		name: 'Gutsy Move',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Roll. You may choose to remove up to X cards from the top of your deck from the game. You get +1 strength for each card removed this way. X equals the number you rolled.</p>',
		releases: {
			VB: 53
		},
		faq: []
	},
	{
		id: 'VB54',
		name: 'Hasty Move',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b> Discard 1 card: This unit gets a strength bonus equal to the tactic point cost of the discarded card</p>',
		releases: {
			VB: 54
		},
		faq: [95]
	},
	{
		id: 'VB55',
		name: 'Hidden Arms',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>WarCry</b>: Attach a weapon card from your discard pile to this unit. Only playable if your unit is a <b>Veteran</b> unit.</p>',
		releases: {
			VB: 55
		},
		faq: []
	},
	{
		id: 'VB56',
		name: 'Hold Your Aim',
		cost: 2,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit with "<b>Ranged Attack</b>: 5" or higher gets +3 strength.</p>',
		releases: {
			VB: 56
		},
		faq: []
	},
	{
		id: 'VB57',
		name: 'Holding Ground',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit in the reserves gets +3 strength.</p>',
		releases: {
			VB: 57
		},
		faq: []
	},
	{
		id: 'VB58',
		name: 'Immediate Weakness',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -3 strength. This unit gets -2 strength.</p>',
		releases: {
			VB: 58
		},
		faq: []
	},
	{
		id: 'VB59',
		name: 'Integrity',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the difference in leadership between this unit and the enemy unit. Only playable while your unit has a higher leadership than the enemy unit.</p>',
		releases: {
			VB: 59
		},
		faq: []
	},
	{
		id: 'VB60',
		name: 'Keep Pace',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Common',
		text: '<p><b>Spell Reaction</b>(X): After an enemy unit gets a strength bonus, you get a strength bonus equal to that bonus. X equals the strength bonus.</p>',
		releases: {
			VB: 60
		},
		faq: [39, 41, 95, 96]
	},
	{
		id: 'VB61',
		name: 'Know Their Formations',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit with "<b>Scout</b>: 3" or higher gets +3 strength.</p>',
		releases: {
			VB: 61
		},
		faq: []
	},
	{
		id: 'VB62',
		name: 'Make Them Cow Before You',
		cost: 4,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your enemy discards 2 random cards. If your enemy now has less than 2 cards in their hand, your unit gets +3 strength.</p>',
		releases: {
			VB: 62
		},
		faq: []
	},
	{
		id: 'VB63',
		name: 'Manipulation',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Rare',
		text: '<p><b>Reaction</b>: After a roll is modified, any unit gets +2 strength. Not playable if the modified roll is a combat roll.</p>',
		releases: {
			VB: 63
		},
		faq: []
	},
	{
		id: 'VB64',
		name: 'Money Equals Power',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the difference in gold cost between this unit and the enemy unit. Only playable if your unit has a higher gold cost than the enemy unit.</p>',
		releases: {
			VB: 64
		},
		faq: [97]
	},
	{
		id: 'VB65',
		name: 'No Rest for the Weary',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After your committed unit routs a unit, it may make a follow-up attack and gets +2 strength.</p>',
		releases: {
			VB: 65
		},
		faq: []
	},
	{
		id: 'VB66',
		name: 'On the Line',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This infantry unit gets +2 strength for each of your ready non-infantry units.</p>',
		releases: {
			VB: 66
		},
		faq: []
	},
	{
		id: 'VB67',
		name: 'Past Knowledge',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b> Remove a copy of your unit in your discard pile from the game: This unit gets +2 strength.</p>',
		releases: {
			VB: 67
		},
		faq: []
	},
	{
		id: 'VB68',
		name: 'Poison the Well',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: The enemy unit gets -2 strength unless it passes a tactic point test.</p>',
		releases: {
			VB: 68
		},
		faq: [270]
	},
	{
		id: 'VB69',
		name: 'Power Over Those Who Fear',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: this unit with "<b>Terror</b>: 3" or higher gets +3 strength.</p>',
		releases: {
			VB: 69
		},
		faq: []
	},
	{
		id: 'VB70',
		name: 'Predict Their Moves',
		cost: 0,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Choose a number and reveal the top 3 cards of your enemy's action deck. This unit gets +1 strength for each card with a die that matches the chosen number.</p>",
		releases: {
			VB: 70
		},
		faq: [112]
	},
	{
		id: 'VB71',
		name: 'Recycling Your Decisions',
		cost: 4,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the total dice value printed on the combat tactic cards you have played this combat.</p>',
		releases: {
			VB: 71
		},
		faq: []
	},
	{
		id: 'VB72',
		name: 'Resolute',
		cost: 1,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength. You may pay 1 extra tactic point when playing this card to get +3 strength instead.</p>',
		releases: {
			VB: 72
		},
		faq: []
	},
	{
		id: 'VB73',
		name: 'Stalwart',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit gets +2 strength. You may pay 1 extra tactic point when playing this card to get +4 strength instead.</p>',
		releases: {
			VB: 73
		},
		faq: []
	},
	{
		id: 'VB74',
		name: 'Stand Alone',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b> Commit your unit: After your enemy plays an ability that grants a strength bonus, reduce that bonus to 0.</p>',
		releases: {
			VB: 74
		},
		faq: [41, 44, 233]
	},
	{
		id: 'VB75',
		name: 'Stay On Target',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +4 strength vs. blocking units.</p>',
		releases: {
			VB: 75
		},
		faq: [141]
	},
	{
		id: 'VB76',
		name: 'Sting of the Sword',
		cost: 0,
		die: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: The enemy unit gets -1 strength. You get +1 tactic point.</p>',
		releases: {
			VB: 76
		},
		faq: []
	},
	{
		id: 'VB77',
		name: 'Strength From the Line',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This non-infantry unit gets +2 strength for each of your ready infantry units.</p>',
		releases: {
			VB: 77
		},
		faq: []
	},
	{
		id: 'VB78',
		name: 'Strength in Your Faith',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit with "<b>Faith</b>: 2" or higher gets +3 strength.</p>',
		releases: {
			VB: 78
		},
		faq: []
	},
	{
		id: 'VB79',
		name: 'Strength on the Winds',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: This unit with "<b>Wizard</b>: 2" or higher gets +3 strength.</p>',
		releases: {
			VB: 79
		},
		faq: []
	},
	{
		id: 'VB80',
		name: 'Strike Before They Do',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>WarCry</b>: This unit gets a strength bonus equal to the enemy unit's tactic points. If the enemy unit has 0 tactic points at the end of the tactics phase, it gets a strength bonus equal to double it's printed tactic points.</p>",
		releases: {
			VB: 80
		},
		faq: [167]
	},
	{
		id: 'VB81',
		name: 'Strike With Your Sword',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: If this unit has had its strength modified by an abiity printed on an attachment this combat, it gets +2d6 strength. This unit does not roll for combat.</p>',
		releases: {
			VB: 81
		},
		faq: [229, 236]
	},
	{
		id: 'VB82',
		name: 'The Knowledge of Your Allies',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b> Commit one of your units: This unit gets a strength bonus equal to the tactic points of the committed unit.</p>',
		releases: {
			VB: 82
		},
		faq: [89, 95]
	},
	{
		id: 'VB83',
		name: 'The Weak Stand Up',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This strength 0 unit gets +5 strength.</p>',
		releases: {
			VB: 83
		},
		faq: [167]
	},
	{
		id: 'VB84',
		name: 'The Tide Comes In',
		cost: 0,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: Your unit gets +1 strength. Any player with 4 or fewer cards in their hand draws 5 cards. Only playable if your unit is a <b>Veteran</b> unit.</p>',
		releases: {
			VB: 84
		},
		faq: []
	},
	{
		id: 'VB85',
		name: 'Use Their Weapons Against Them',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: "<p><b>Combat Tactic</b>: Search your enemy's discard pile for an attachment and remove it from the game. This unit gets a strength bonus equal to the gold cost of the attachment removed from the game.</p>",
		releases: {
			VB: 85
		},
		faq: []
	},
	{
		id: 'VB86',
		name: 'Utilize Your Resources',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +5 strength. Only playable while you have more cards in your hand than your enemy has in their hand.</p>',
		releases: {
			VB: 86
		},
		faq: [170]
	},
	{
		id: 'VB87',
		name: 'Variety of Options',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +X strength. X equals the difference in tactic points between this unit and the enemy unit. Only playable while you have more tactic points than the enemy unit.</p>',
		releases: {
			VB: 87
		},
		faq: []
	},
	{
		id: 'VB88',
		name: 'Wait for It',
		cost: 1,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>Combat Tactic</b>: Your unit in the battle line gets +3 strength.</p>',
		releases: {
			VB: 88
		},
		faq: []
	},
	{
		id: 'VB89',
		name: 'Well-Rested',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After one of your units is routed, choose one of your committed units to be the target of the follow-up attack. That unit gets +1 strength.</p>',
		releases: {
			VB: 89
		},
		faq: []
	},
	{
		id: 'VB90',
		name: 'Barak Grimjaw, Harbinger of Pride',
		cost: 7,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Barak Grimjaw, Hammer of The Dwarfs/Barak Grimjaw</p><p><b>Victory</b>: +5 while committed</p><p><b>Combat Tactic</b>: This unit gets +X strength. Destroy X attachments. X equals the number of attachments on the enemy unit.</p>',
		releases: {
			VB: 90
		},
		faq: []
	},
	{
		id: 'VB91',
		name: "Barak's Ironbreakers",
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Reaction</b>: After you win a ranged attack, this unit gets one "<b>Victory</b>: +1" token.</p>',
		releases: {
			VB: 91
		},
		faq: []
	},
	{
		id: 'VB92',
		name: 'Cannons of Silverspear',
		cost: 3,
		strength: 0,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Victory</b>: +3</p><p><b>Long Ranged Attack</b>: 10</p>',
		releases: {
			VB: 92
		},
		faq: []
	},
	{
		id: 'VB93',
		name: 'Defender of Karak-Kadrin',
		cost: 2,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Short Ranged Attack</b>: 4</p><p><b>Support Tactic</b> Commit: Your unit gets two "<b>Victory</b>: +1" tokens.</p>',
		releases: {
			VB: 93
		},
		faq: []
	},
	{
		id: 'VB94',
		name: "Grimjaw's Flamethrower",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Ranged Attack</b>: 1</p><p><b>WarCry</b>: This unit gets +X ranged attack. X equals your current total victory bonus.</p>',
		releases: {
			VB: 94
		},
		faq: [123]
	},
	{
		id: 'VB95',
		name: "Grimjaw's Longbeards",
		cost: 4,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Reaction</b>: After this unit wins a combat, this unit gets one "<b>Victory</b>: +1" token. If this unit defeated an Orc unit, it gets three "<b>Victory</b>: +1" tokens instead.</p>',
		releases: {
			VB: 95
		},
		faq: [4]
	},
	{
		id: 'VB96',
		name: "Grimjaw's Stonethrower",
		cost: 3,
		strength: 0,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'War Machine', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Long Ranged Attack</b>: 6</p><p><b>Victory</b>: +6 while ready.</p><p><b>Reaction</b>: After this unit wins a ranged attack, destroy the enemy unit.</p>',
		releases: {
			VB: 96
		},
		faq: []
	},
	{
		id: 'VB97',
		name: "Grimjaw's Thunderers",
		cost: 4,
		strength: 1,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Ranged Attack</b>: 6</p><p><b>Victory</b>: +1</p><p><b>Combat Tactic</b>: This unit gets +X ranged attack. X equals the <b>Victory</b> level on one of your units.</p>',
		releases: {
			VB: 97
		},
		faq: []
	},
	{
		id: 'VB98',
		name: 'Damakrin Giantbreaker',
		cost: 1,
		tacticPoints: -1,
		keywords: ['Dwarf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: "<p><b>Victory</b>: +2</p><p><b>Combat Tactic</b> Commit: Double this unit's strength. Only playable vs. units with gold cost higher than this unit's gold cost.</p>",
		releases: {
			VB: 98
		},
		faq: [97]
	},
	{
		id: 'VB99',
		name: 'Averland Halberdiers',
		cost: 4,
		strength: 4,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Any unit gets +4 strength. Only playable vs. Chaos cavalry units.</p>',
		releases: {
			VB: 99
		},
		faq: []
	},
	{
		id: 'VB100',
		name: 'Count Theodric Gausser',
		cost: 6,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: "<p><b>Veteran</b>: Theodric Gausser, Guardian of the Empire/Elector Count Theodric Gausser.</p><p><b>Support WarCry</b>: Exchange this unit with the unit in combat. This unit gets a strength bonus equal to the exchanged unit's tactic points.</p>",
		releases: {
			VB: 100
		},
		faq: [257, 258, 260, 261, 262]
	},
	{
		id: 'VB101',
		name: 'Edwin Offmeir',
		cost: 5,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Support Tactic</b> (2): Your combat roll this combat gets +2.</p>',
		releases: {
			VB: 101
		},
		faq: []
	},
	{
		id: 'VB102',
		name: 'Friedrich Ruerhart',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Faith</b>: 2</p><p><b>Support WarCry</b>: If this unit passes a leadership test, commit any Chaos unit unless it also passes a leadership test.</p>',
		releases: {
			VB: 102
		},
		faq: [74]
	},
	{
		id: 'VB103',
		name: "Gausser's Protectors",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: "<p>This unit may block any attack or ranged attack targeting one of your unique units.</p><p><b>Support Tactic</b> Commit: Your unit gets +X strength. X equals this unit's strength.</p>",
		releases: {
			VB: 103
		},
		faq: []
	},
	{
		id: 'VB104',
		name: 'Halberdiers of Norland',
		cost: 3,
		strength: 3,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p><b>Support WarCry</b>: Destroy the enemy unit unless it passes a tactic point test. Only playable vs. cavalry units.</p>',
		releases: {
			VB: 104
		},
		faq: [270]
	},
	{
		id: 'VB105',
		name: 'Marienburg Swordsmen',
		cost: 2,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: Any unit gets +2 strength. Only playable vs. Chaos units.</p>',
		releases: {
			VB: 105
		},
		faq: []
	},
	{
		id: 'VB106',
		name: 'Wissenburg Greatswords',
		cost: 2,
		strength: 3,
		tacticPoints: 1,
		leadership: 2,
		keywords: ['Empire', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p>Infantry may block this unit when it declares an attack.</p><p><b>Support Tactic</b>: Your unit gets +2 strength. Destroy it at the end of this command.</p>',
		releases: {
			VB: 106
		},
		faq: [143]
	},
	{
		id: 'VB107',
		name: 'Anton Lutrecht',
		cost: 1,
		tacticPoints: 3,
		keywords: ['Empire', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Support Tactic</b>: Your unit gets +1 tactic point.</p>',
		releases: {
			VB: 107
		},
		faq: []
	},
	{
		id: 'VB108',
		name: "Bilgarim's Silverhelms",
		cost: 4,
		strength: 2,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>WarCry</b>: This unit gets +X strength. X equals the strength of the High Elf unit with the most tactic points.</p>',
		releases: {
			VB: 108
		},
		faq: []
	},
	{
		id: 'VB109',
		name: 'Eagles of Ulthuan',
		cost: 3,
		strength: 2,
		tacticPoints: 3,
		leadership: 2,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Support Tactic</b>: If this unit passes a tactic point test, replace your unit in combat with this unit.</p>',
		releases: {
			VB: 109
		},
		faq: [257, 258, 259, 260, 261, 262]
	},
	{
		id: 'VB110',
		name: 'Helms of Caladai',
		cost: 4,
		strength: 3,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: If this unit passes a tactic point test, replace this unit with a High Elf infantry unit. That unit gets +2 strength.</p>',
		releases: {
			VB: 110
		},
		faq: [257, 258, 260, 261, 270]
	},
	{
		id: 'VB111',
		name: "Lathain's Phoenix Guard",
		cost: 5,
		strength: 5,
		tacticPoints: 5,
		leadership: 5,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Victory</b>: -3</p><p><b>Combat Tactic</b>: If this unit passes a tactic point test, it gets +2 strength and <b>Terror</b>: 1"."</p>',
		releases: {
			VB: 111
		},
		faq: [268, 270]
	},
	{
		id: 'VB112',
		name: 'Lord Whitestar, Mage of Ulthuan',
		cost: 6,
		strength: 5,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Super rare',
		text: '<p><b>Veteran</b>: Bilgarim Whitestar, Elven Lord</p><p><b>Wizard</b>: 2</p><p>If there is a terrain card in play, your units may not be blocked and your infantry may attack from the reserves.</p><p><b>Spell Reaction</b> (1): After setup, put a terrain card into play.</p><p><b>Spell Reaction</b> (2): After a card or ability is played which would destroy one of your strategy cards, negate its effects.</p>',
		releases: {
			VB: 112
		},
		faq: [157]
	},
	{
		id: 'VB113',
		name: 'Sarathai, Dragon of Caledor',
		cost: 6,
		strength: 4,
		tacticPoints: 5,
		leadership: 5,
		unique: true,
		keywords: ['High Elf', 'Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>Your units may play Support WarCries as support tactics.</p><p><b>Reaction</b>: After a spell card or ability is played, any unit gets +1 strength.</p>',
		releases: {
			VB: 113
		},
		faq: []
	},
	{
		id: 'VB114',
		name: "Whitestar's Shadow Warriors",
		cost: 3,
		strength: 3,
		tacticPoints: 0,
		leadership: 3,
		keywords: ['High Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Common',
		text: '<p><b>Scout</b>: 6</p>',
		releases: {
			VB: 114
		},
		faq: []
	},
	{
		id: 'VB115',
		name: "Whitestar's Truespear",
		cost: 2,
		strength: 1,
		tacticPoints: 0,
		leadership: 1,
		keywords: ['High Elf', 'Infantry', 'War Machine'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		rarity: 'Rare',
		text: '<p>You must discard 1 card when mustering this unit.</p><p>Your ready units get +1 tactic point for each copy of this unit in play.</p><p><b>Short Ranged Attack</b>: X. X equals the total number of tactic points in your battle line.</p>',
		releases: {
			VB: 115
		},
		faq: []
	},
	{
		id: 'VB116',
		name: 'Kourdhir Brazenlight',
		cost: 1,
		tacticPoints: 2,
		unique: true,
		keywords: ['High Elf', 'Character'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Attachment',
		rarity: 'Uncommon',
		text: '<p><b>Wizard</b>: 1</p><p><b>Spell Support Tactic</b> (1): Your unit gets +1 strength or +1 ranged attack. If your unit is a High Elf unit it gets +2 strength or +2 ranged attack instead.</p>',
		releases: {
			VB: 116
		},
		faq: []
	},
	{
		id: 'VB117',
		name: "Bugman's Brew",
		cost: 0,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Super rare',
		text: '<p><b>Combat Tactic</b>: Your unit gets -1 strength and is immune to <b>Terror</b>. If your unit is a Dwarf unit, rally it if it is committed and it cannot be routed this combat.</p>',
		releases: {
			VB: 117
		},
		faq: [268]
	},
	{
		id: 'VB118',
		name: 'Impressive Might',
		cost: 3,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Rare',
		text: '<p><b>Combat Tactic</b>: Your unit gets a strength bonus equal to its gold cost.</p>',
		releases: {
			VB: 118
		},
		faq: [97]
	},
	{
		id: 'VB119',
		name: 'Strength Versus the Weak',
		cost: 1,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		rarity: 'Uncommon',
		text: '<p><b>Combat Tactic</b>: This unit gets +3 strength vs. committed units.</p>',
		releases: {
			VB: 119
		},
		faq: []
	},
	{
		id: 'VB120',
		name: 'Virtue of Heroism',
		cost: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Tactic',
		rarity: 'Common',
		text: '<p><b>WarCry</b>: If your <b>Faith</b> unit is losing the combat, it gets X+1 strength. X equals how much you are losing the combat by.</p>',
		releases: {
			VB: 120
		},
		faq: []
	},
	{
		id: 'PA1',
		name: 'Blade of Attrition',
		cost: 1,
		unique: true,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: "<p><b>Reaction</b>: After both players have passed ending the battle, destroy any enemy unit with a gold cost equal to or less than this unit's printed gold cost. Put X -1 strength tokens on this unit. X equals the opposing unit's strength.</p><p>This reaction is playable while committed.</p>",
		releases: {
			PA: 1
		},
		faq: [22]
	},
	{
		id: 'PA2',
		name: 'War of Attrition',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: Remove this card from the game: After one of your units is destroyed in combat, put a number of -1 strength tokens on the enemy unit equal to the printed strength of your unit plus any bonuses or penalties from attached cards and tokens.</p>',
		releases: {
			PA: 2
		},
		faq: [58]
	},
	{
		id: 'PA3',
		name: 'Hand of Fate',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>While there are 1 or more copies of this card in play, before each combat, each player discards their hand and draws a new hand of 5 cards.</p>',
		releases: {
			PA: 3
		},
		faq: []
	},
	{
		id: 'PA4',
		name: 'Alignment of the Heavens',
		die: 1,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Command',
		text: '<p>When you play this card choose strength, tactic points or leadership.</p><p><b>Spell Command</b> (6): If you and your enemy have the same total of the chosen stat in play, you immediately win the battle.</p>',
		releases: {
			PA: 4
		},
		faq: []
	},
	{
		id: 'PA5',
		name: 'Lethphaos',
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 4,
		unique: true,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: Rout the enemy unit if you win this combat (no roll necessary). Only playable while the opposing unit is infantry.</p>',
		releases: {
			PA: 5
		},
		faq: [195, 145, 148]
	},
	{
		id: 'PA6',
		name: 'Slaahadum',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Chaos', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>: 2</p><p><b>Spell Combat Tactic</b> (3): Commit the enemy unit unless it passes a tactic point test.</p>',
		releases: {
			PA: 6
		},
		faq: [270, 74]
	},
	{
		id: 'PA7',
		name: 'Yrmaldrel Blackcrown',
		cost: 5,
		strength: 2,
		tacticPoints: 7,
		leadership: 3,
		unique: true,
		keywords: ['Dark Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>WarCry</b>: Your enemy discards 2 cards.</p><p><b>Combat Tactic</b> Discard 1 card: This unit gets +X strength. X equals the die on the card discarded for this ability.</p>',
		releases: {
			PA: 7
		},
		faq: [95]
	},
	{
		id: 'PA8',
		name: "Yrmaldrel's Corsairs",
		cost: 4,
		strength: 2,
		tacticPoints: 5,
		leadership: 2,
		keywords: ['Dark Elf', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: "<p><b>WarCry</b>: This unit gets +X strength. X equals the number of cards in your hand in excess of the number of cards in your enemy's hand.</p>",
		releases: {
			PA: 8
		},
		faq: []
	},
	{
		id: 'PA9',
		name: 'Nuznar the Destroyer',
		cost: 4,
		strength: 8,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Orc', 'Cavalry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Victory</b>: -5</p><p><b>Support WarCry</b>: If your Orc unit wins this combat and it passes a leadership test, it may attempt to rout the enemy unit.</p>',
		releases: {
			PA: 9
		},
		faq: [195, 145, 272]
	},
	{
		id: 'PA10',
		name: 'Zazerg the Wierd',
		cost: 4,
		strength: 2,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Orc', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Wizard</b>:3</p><p><b>Spell WarCry</b> (1): Play an evil spell combat tactic card (including WarCries) from your discard pile as though it were in your hand, paying no costs.</p>',
		releases: {
			PA: 10
		},
		faq: [92]
	},
	{
		id: 'PA11',
		name: "Siksik's Plague Monks",
		cost: 3,
		strength: 1,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Skaven', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After your enemy discards a card this unit gets +1 strength.</p>',
		releases: {
			PA: 11
		},
		faq: []
	},
	{
		id: 'PA12',
		name: "Rakash's Royal Regiment",
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Khemri', 'Infantry'],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Unit',
		text: '<p><b>Reaction</b>: After this unit gets a tactic point bonus, the enemy unit gets -1 leadership.</p>',
		releases: {
			PA: 12
		},
		faq: []
	},
	{
		id: 'PA13',
		name: 'The Red Thirst',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Hordes of Darkness',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Your unit gets +6 strength. Only playabe while your unit has a higher printed strength and tactic points than the enemy unit.</p>',
		releases: {
			PA: 13
		},
		faq: []
	},
	{
		id: 'PA14',
		name: "Kineater's Ironguts",
		cost: 8,
		strength: 10,
		tacticPoints: 2,
		leadership: 3,
		keywords: ['Ogre Kingdoms', 'Monster', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Victory</b>:-4</p><p><b>Combat Tactic</b> Discard 2 cards: If this unit wins this combat, rout the enemy unit (no roll necessary). Only playable once per command.</p>',
		releases: {
			PA: 14
		},
		faq: [195, 145, 148, 133]
	},
	{
		id: 'PA15',
		name: 'Catastrophic Miscalculation',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Spell Command</b> (2): Destroy an enemy unit. Only playable while your enemy has at least double the number of spell points they started the battle with.</p>',
		releases: {
			PA: 15
		},
		faq: []
	},
	{
		id: 'PA16',
		name: 'Convocation of Power',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Spell Command</b> (0): One of your <b>Wizard</b> units takes a leadership test. If the test is passed, any one player gets +1 spell point. You must repeat this process until you fail a leadership test or you shuffle your action deck. If you shuffle your action deck during this command, your enemy may destroy any one of your units.</p>',
		releases: {
			PA: 16
		},
		faq: [149]
	},
	{
		id: 'PA17',
		name: 'Dark Destiny',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>When this strategy enters play, destroy all other versions of this card in play.</p><p><b>Reaction</b>: After an enemy unit takes a test (whether it passes or fails), place a Doom token on this strategy.</p><p><b>Support Tactic</b> Remove X Doom tokens from this strategy: Your unit gets a strength bonus equal to X.</p>',
		releases: {
			PA: 17
		},
		faq: []
	},
	{
		id: 'PA18',
		name: 'Death Is My Mistress',
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After you rout a unit, draw two cards.</p>',
		releases: {
			PA: 18
		},
		faq: [228]
	},
	{
		id: 'PA19',
		name: 'Defensive Measures',
		die: 5,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>During follow-up attacks, the attacking unit gets -1 strength and the defending unit gets +1 strength.</p>',
		releases: {
			PA: 19
		},
		faq: []
	},
	{
		id: 'PA20',
		name: 'Enchantment Amplification',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Spell Reaction</b> (0): After one of your attachments gives you a non-permanent bonus (strength, tactic point, etc.), double that bonus. That bonus may not be modified again.</p><p><b>Spell Reaction</b> (0): After one of your attachments is destroyed during a combat, return that attachment to the unit it was attached to.</p>',
		releases: {
			PA: 20
		},
		faq: [122, 53, 44]
	},
	{
		id: 'PA21',
		name: 'Everyone Loves a Winner',
		cost: 2,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: This unit gets +2 strength. If this unit wins the combat, draw 2 cards.</p>',
		releases: {
			PA: 21
		},
		faq: [4]
	},
	{
		id: 'PA22',
		name: 'Inner Fire',
		cost: 2,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Spell Combat Tactic</b> (1): This unit gets +2 strength. Instead of placing this card into your discard pile after you play it, you may discard 1 card from your hand to return this card to your hand.</p>',
		releases: {
			PA: 22
		},
		faq: []
	},
	{
		id: 'PA23',
		name: 'Inspired Courage',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>This strategy is not discarded after the battle it entered play.</p><p>Units may not be committed with card effects by enemy players.</p>',
		releases: {
			PA: 23
		},
		faq: []
	},
	{
		id: 'PA24',
		name: 'Lost Wisdom',
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Command</b>: Choose 5 cards from either your army or action discard pile and then put them on top of their respective decks in any order.</p>',
		releases: {
			PA: 24
		},
		faq: []
	},
	{
		id: 'PA25',
		name: 'Master Assassins',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: "<p><b>Reaction</b>: After one of your units has been destroyed in combat, put 1 poison token on the enemy unit and return this card to your hand (you may not react to the same trigger again with any copy of this card).</p><p><b>Reaction</b>: After one of your units enters combat against a unit with at least X poison tokens, rout and destroy that unit. X equals the enemy unit's printed strength plus 1.</p>",
		releases: {
			PA: 25
		},
		faq: [58]
	},
	{
		id: 'PA26',
		name: 'Masterful Maneuvering',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: "<p><b>Reaction</b>: After victory is determined for the current battle, target. one of your enemy's units. That unit must be carried over to the next battle or the chosen card may not be carried over (your choice).</p>",
		releases: {
			PA: 26
		},
		faq: []
	},
	{
		id: 'PA27',
		name: 'Narrowed Options',
		cost: 1,
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: The enemy unit may only play a number of tactics equal to its leadership minus 1. ("<b>Terror</b>" does not affect this)</p>',
		releases: {
			PA: 27
		},
		faq: []
	},
	{
		id: 'PA28',
		name: 'No Substitute for Experience',
		die: 5,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After victory is determined for the current battle, attach this card to one of your units. While attached, this unit gets +1 strength and +1 tactic point.</p>',
		releases: {
			PA: 28
		},
		faq: []
	},
	{
		id: 'PA29',
		name: 'Pessimistic Planning',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: "<p><b>Reaction</b>: After one of your units is committed by an enemy's card effect, rally the committed unit.</p><p><b>Reaction</b>: After an enemy unit gets a strength bonus of 4 or more during a combat, reduce that bonus to 3.</p>",
		releases: {
			PA: 29
		},
		faq: [39, 44, 233]
	},
	{
		id: 'PA30',
		name: 'Superstition',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p><b>Reaction</b>: After your enemy plays a spell card or ability, commit any unit unless it passes a leadership test.</p>',
		releases: {
			PA: 30
		},
		faq: [74]
	},
	{
		id: 'PA31',
		name: 'Tireless Defense',
		die: 4,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Reaction',
		text: '<p><b>Reaction</b>: After your defending unit in a follow-up attack wins the combat, your unit is not committed.</p>',
		releases: {
			PA: 31
		},
		faq: [4]
	},
	{
		id: 'PA32',
		name: 'Total Mastery',
		cost: 10,
		die: 3,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>Combat Tactic</b>: This combat ends. Your unit wins this combat and no combat roll is made by either player. The enemy unit is routed (no roll necessary). If this card is played for free or for a reduced cost, your unit loses and is routed instead (no roll necessary).</p>',
		releases: {
			PA: 32
		},
		faq: [195, 94, 145, 148, 186]
	},
	{
		id: 'PA33',
		name: 'War Is My Master',
		cost: 3,
		die: 2,
		keywords: [],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Tactic',
		text: '<p><b>WarCry</b>: Your unit gets +4 strength. Only playable while you are attacking and only if this strength bonus gives you a higher total strength than the enemy unit. If you wn this combat rout the opposing unit automatically (no roll necessary).</p>',
		releases: {
			PA: 33
		},
		faq: [195, 142, 145, 148]
	},
	{
		id: 'PA34',
		name: 'Gilded Armor',
		cost: 1,
		keywords: ['Armor'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: If this combat ends in a slaughter, this unit wins instead. Only playable while attacking.</p><p><b>Combat Tactic</b>: This unit gets +3 strength and may not follow-up. Only playable while defending.</p>',
		releases: {
			PA: 34
		},
		faq: [196, 247, 142]
	},
	{
		id: 'PA35',
		name: 'Sword of Might',
		cost: 1,
		keywords: ['Weapon'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength or +1 tactic point. This ability may be played twice per combat.</p>',
		releases: {
			PA: 35
		},
		faq: []
	},
	{
		id: 'PA36',
		name: 'Talisman of Might',
		cost: 1,
		unique: true,
		keywords: ['Item'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p><b>Reaction</b>: After any player musters a unit with a lower gold cost than the unit in play with the highest cost, they discard one card. Either player may play this ability.</p>',
		releases: {
			PA: 36
		},
		faq: [97]
	},
	{
		id: 'PA37',
		name: "Balduhild's Knights of the Shield",
		cost: 5,
		strength: 4,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Bretonnian', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>While you have more units in your reserve than your enemy, this unit attacks as a flyer.</p><p><b>Combat Tactic</b>: Move any unit from the reserves to its controller's battle line.</p>",
		releases: {
			PA: 37
		},
		faq: [25]
	},
	{
		id: 'PA38',
		name: 'Furendrin Goldeneye',
		cost: 4,
		strength: 4,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p><b>Ranged Attack</b>: 4</p><p><b>Combat Tactic</b>: Destroy an attachment. This unit gets +X ranged attack. X equals the destroyed attachment's gold cost. Only playable during a ranged attack.</p>",
		releases: {
			PA: 38
		},
		faq: []
	},
	{
		id: 'PA39',
		name: 'Lord Furzin Goldeneye',
		cost: 5,
		strength: 5,
		tacticPoints: 3,
		leadership: 5,
		unique: true,
		keywords: ['Dwarf', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>While ready, this unit gets "<b>Victory</b>: +1" for each other Dwarf unit with a gold cost of 4 or more you have in play.</p><p><b>Support WarCry</b>: Any unit gets +X strength. X equals this unit\'s "<b>Victory</b>" level.</p>',
		releases: {
			PA: 39
		},
		faq: [97]
	},
	{
		id: 'PA40',
		name: 'Kurt Helborg, Grand Master of the Reiksguard',
		cost: 6,
		strength: 5,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>Veteran</b>: Reiksmarshall Kurt Helborg</p><p>Your cavalry units may play WarCry cards as if they were combat tactics (even while this unit is committed).</p><p><b>Combat Tactic</b>: If this unit passes a tactic point test, draw 1 card.</p>',
		releases: {
			PA: 40
		},
		faq: [270, 124]
	},
	{
		id: 'PA41',
		name: 'Shield of the Emperor',
		cost: 6,
		strength: 6,
		tacticPoints: 4,
		leadership: 3,
		keywords: ['Empire', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>When you muster this unit, reveal your hand. If you have more unique cards than non-unique cards, this unit's gold cost is reduced by 2.</p><p><b>Combat Tactic</b>: The Tactic Phase ends. Only playable while your unit's strength is at least double the enemy unit's strength.</p>",
		releases: {
			PA: 41
		},
		faq: [99, 101]
	},
	{
		id: 'PA42',
		name: 'Gaenrifir Hawkgrace, Silver Helm Champion',
		cost: 5,
		strength: 6,
		tacticPoints: 3,
		leadership: 3,
		unique: true,
		keywords: ['High Elf', 'Cavalry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p>This unit may not block.</p><p><b>WarCry</b>: Commit the enemy unit unless it passes a leadership test.</p>',
		releases: {
			PA: 42
		},
		faq: [74]
	},
	{
		id: 'PA43',
		name: 'Prince Khadrynir Pureflight and Swiftwing',
		cost: 5,
		strength: 4,
		tacticPoints: 6,
		leadership: 4,
		unique: true,
		keywords: ['High Elf', 'Flyer'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: "<p>While this unit is ready, all of your High Elf units get +1 leadership.</p><p><b>Combat Tactic</b>: This unit gets +3 strength. Only playable if your enemy's unit played a WarCry this combat.</p>",
		releases: {
			PA: 43
		},
		faq: []
	},
	{
		id: 'PA44',
		name: 'Blessed Spawn of Huanchi',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Lizardmen', 'Infantry'],
		maxCopies: 3,
		faction: 'Grand Alliance',
		type: 'Unit',
		text: '<p><b>WarCry</b>: This unit gets +X strength. X equals one of your other units "<b>Victory</b>" level.</p>',
		releases: {
			PA: 44
		},
		faq: []
	},
	{
		id: 'PA45',
		name: 'Standard of War',
		cost: 1,
		keywords: ['Standard'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Attachment',
		text: '<p>You may have any number of copies of this card in your deck.</p><p><b>Combat Tactic</b> Destroy any copy of this card attached to one of your units: This unit gets +2 strength. You may play this ability any number of times per combat.</p>',
		releases: {
			PA: 45
		},
		faq: [53, 55]
	},
	{
		id: 'PA46',
		name: 'Resrauch Goldenscale',
		cost: 6,
		strength: 4,
		tacticPoints: 0,
		leadership: 3,
		unique: true,
		keywords: ['Monster', 'Flyer'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Terror</b>: 3</p><p><b>Combat Tactic</b>s played by this unit have their tactic point cost reduced to 0.</p>',
		releases: {
			PA: 46
		},
		faq: []
	},
	{
		id: 'PA47',
		name: 'Luthor Drauwulf',
		cost: 3,
		strength: 3,
		tacticPoints: 2,
		leadership: 2,
		keywords: ['Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Combat Tactic</b>: This unit gets +1 strength and "<b>Faith</b>:2". Only playable while you are playing the Grand Alliance.</p><p><b>Combat Tactic</b>: This unit gets +2 strength and "<b>Terror</b>:1". Only playable while you are playing the Hordes of Darkness.</p>',
		releases: {
			PA: 47
		},
		faq: [268]
	},
	{
		id: 'PA48',
		name: 'Marks of Power',
		die: 4,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>You may put this card into play as a combat tactic for 2 tactic points.</p><p><b>Support Tactic</b>: You get spell points equal to the tactic points of your unit in combat. Commit that unit unless it passes a leadership test.</p>',
		releases: {
			PA: 48
		},
		faq: [134]
	},
	{
		id: 'PA49',
		name: 'Stewards of the Land',
		cost: 4,
		strength: 2,
		tacticPoints: 3,
		leadership: 3,
		keywords: ['Dogs of War', 'Infantry'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Unit',
		text: '<p><b>Scout</b>: 3</p><p><b>Reaction</b>: After your enemy plays an ability that destroys one of your strategy cards, negate its effects.</p>',
		releases: {
			PA: 49
		},
		faq: [157]
	},
	{
		id: 'PA50',
		name: 'Veterans of Battle',
		die: 3,
		keywords: ['Strategy'],
		maxCopies: 3,
		faction: 'Neutral',
		type: 'Command',
		text: '<p>If you have won a battle this game, your units get +1 strength.</p><p><b>Command</b> Discard your hand: Destroy this card. Your enemy may play this ability.</p>',
		releases: {
			PA: 50
		},
		faq: []
	}
] as const;
