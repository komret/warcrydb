// Color configuration for consistent theming across components
export const colors = {
	// Faction colors
	factions: {
		neutral: '#723820',
		hordesOfDarkness: '#3F5146',
		grandAlliance: '#D7DCD5'
	},

	// Card type colors
	types: {
		unit: '#FC922B',
		attachment: '#FC922B', // Same as unit
		tactic: '#C6C144',
		command: '#538DB2',
		reaction: '#BD362C'
	},

	// Special card indicators
	unique: '#FC922B' // Same as unit/attachment
} as const;
