export type FAQ = {
	id: number;
	question: string;
	answer: string;
	source: string;
};

export const faq: FAQ[] = [
	{
		id: 1,
		question: 'What is an aborted combat?',
		answer:
			'An aborted combat is when, after both players have passed on playing tactics in a combat, there is only one unit left in combat (or no units at all).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 2,
		question:
			'If a card/ability sends both units back to their battle/reserve lines, is it considered an aborted combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 3,
		question: 'What happens if an aborted combat was going to be a forced slaughter?',
		answer:
			'Since the combat is ended as soon as both players pass, no resolution (including forced slaughters) takes place.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 4,
		question: 'Is the remaining unit in an aborted combat considered to win the combat?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 5,
		question:
			'Can you use an ability that rallies your unit when committed by a card/ability, if the card/ability caused an aborted combat?',
		answer:
			'Yes, however, because aborted combats continue until both players pass on playing tactics, the unit will be rallied immediately but will be committed again when both players pass.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 6,
		question:
			"What happens if I play Leitdorf Maneuver while Whitestar's Guardians of the Sky are in combat?",
		answer: 'You cannot play the support tactic as the Guardians are not in any line.',
		source:
			'https://web.archive.org/web/20050418163844/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2890&PN=1'
	},
	{
		id: 7,
		question:
			"What happens if I play False Orders to use the support tactic on my enemy's Whitestar's Guardians of the Sky?",
		answer: "You cannot play the support tactic as your unit cannot enter your enemy's lines.",
		source:
			'https://web.archive.org/web/20050418163844/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2890&PN=1'
	},
	{
		id: 8,
		question:
			"If a ready unit is removed from combat by the support tactic on Whitestar's Guardians of the Sky, does it commit?",
		answer: 'No, the unit goes back in whatever state it was in whilst in the combat.',
		source:
			'https://web.archive.org/web/20050418163844/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2890&PN=1'
	},
	{
		id: 9,
		question:
			'Does the WarCry on Katarin, Bringer of Winter create an aborted combat where players continue playing tactis until both of them pass, or does the combat end immediately?',
		answer: 'The combat ends immediately.',
		source:
			'https://web.archive.org/web/20060117155645/http://sabertoothgames.com/forum/forum_posts.asp?TID=5865&PN=2'
	},
	{
		id: 10,
		question:
			'When you use a tactic on one of your attachments, which is considered to have used the tactic: the unit or the attachment? Will Dauntless Reckoning destroy an attachment that uses a Support Tactic?',
		answer:
			'The attachment is considered to have used the tactic. Dauntless Reckoning will not destroy the attachment, since it only affects units.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 11,
		question:
			"For action cards that attach themselves to units, can you play the first tactic on that card after it's attached?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 12,
		question: 'Do action cards that attach themselves to units count as attachments?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 13,
		question: 'Do attachments count as “attached cards”?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 14,
		question: 'Do action cards that attach themselves to units carry over between battles?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 15,
		question:
			'If you use Birdmen of Catrazza’s Reaction to attach an action card to them, do they get the benefits from cards that say “while this card is attached …”?',
		answer:
			'Not if the attached effect is part of a Combat Tactic (i.e. there is no paragraph break between the Combat Tactic text and the attached effect).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 16,
		question:
			'If you play an action card that attaches itself to a unit, can you use the Birdmen of Catrazza’s Combat Tactic to discard and play the attached card?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 17,
		question:
			'What happens if you play an attachment on Jasenland’s Imperial Defenders and then attach them to another unit?',
		answer:
			'The attachment remains on Jasenland’s Imperial Defenders, but it still affects them, not the unit they are attached to.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 18,
		question:
			'When a committed attachment is moved from one unit to another, does it stay committed?',
		answer: 'No, the attachment inherits the state of the unit it is attached to.',
		source:
			'https://web.archive.org/web/20051103215025/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4394&PN=1'
	},
	{
		id: 19,
		question: 'What happens if the character attachment attached to On Your Own is destroyed?',
		answer:
			'On Your Own becomes a unit with Strength, Tactic Points and Leadership 0. This does not change even if you re-attach the attachment.',
		source:
			'https://web.archive.org/web/20051103215025/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4394&PN=1'
	},
	{
		id: 20,
		question:
			"Does a unit attached to Invocation of Nehek count as an attachment or as a unit for the puposes of card effects? For example, can I use the reaction on attached Carstein's Flesh Eaters when they are destroyed?",
		answer:
			"It counts as a unit. Whether a card is a unit or not is determined by it's card layout. The fact that they it is attached to another unit means that it has most of the usual rules for being a unit suspended. Carstein's Flesh Eaters' reaction can be used.",
		source:
			'https://web.archive.org/web/20050418160714/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2853&PN=1'
	},
	{
		id: 21,
		question:
			'If a reaction is played to return a unit to play after it is destroyed, does it retain its attachments?',
		answer: 'Only if the reaction uses the word "instead", such as The Carstein Ring.',
		source:
			'https://web.archive.org/web/20050506085021/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3174&PN=1'
	},
	{
		id: 22,
		question:
			'If an attachment has no attachment keywords, is it free from restrictions on the amount of attachments on a unit?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050128032957/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=966&PN=1'
	},
	{
		id: 23,
		question:
			'If one of your units has the static ability: "When this unit is in your battle line ready, ...", does it benefit from its ability when making a non-ranged attack?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 24,
		question:
			'Do units attacking from the reserves return to the reserves after the attack is resolved?',
		answer: 'No, they return to the Battle Line.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 25,
		question: 'What does it mean to "attack as" a certain speed?',
		answer:
			'They use the attacking procedure of the specified speed, but they may not play cards/abilities specific to that speed, and may be blocked as if they had their printed speed.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 26,
		question:
			'If a unit is allowed to block units of a certain speed, can they block slower units as well?',
		answer: 'Not unless they would be able to normally.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 27,
		question: 'Can Scheme with Beauties target a unit in the reserves? Can it be blocked?',
		answer:
			'Yes to the first question. No to the second question. The attack declaration is skipped as the card "begins combat". Both players draw a card at the beginning of combat as normal.',
		source:
			'https://web.archive.org/web/20060102113655/http://sabertoothgames.com/forum/forum_posts.asp?TID=4150&PN=1'
	},
	{
		id: 28,
		question:
			'When I initiate an attack with Scheme with Beauties, is my unit considered to be an attacker and the enemy unit a defender?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051018031949/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4805&PN=1'
	},
	{
		id: 29,
		question:
			'When I play Inner Conflict, can I choose an infantry unit in the reserves as the target of the attack?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051226084904/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=5067&PN=1'
	},
	{
		id: 30,
		question:
			'When I play Steal a Sheep in Passing, can I select an enemy unit which cannot legally declare an attack?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051030200155/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4809&PN=1'
	},
	{
		id: 31,
		question:
			'When Take One Path While Pretending to Take Another is in play, does choosing the defending unit count as blocking? Can other units block the attack?',
		answer: 'No to the first question. Yes to the second question.',
		source:
			'https://web.archive.org/web/20050418160725/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2923&PN=1'
	},
	{
		id: 32,
		question: 'Is there a difference between "may not attack" and "may not declare an attack"?',
		answer: 'No.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2262372037443826/'
	},
	{
		id: 33,
		question: 'What is a bonus?',
		answer:
			"A bonus is anything that is added to a unit's Strength, Ranged Attack, Tactic Points or Leadership. It does not count additions to other things, such as Terror.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 34,
		question:
			'Can a bonus be modified below zero so that it subtracts from a value, rather than adding to it?',
		answer: 'Yes. Note that at this point it no longer becomes a bonus.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 35,
		question: 'Is something that adds +0, considered a bonus?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 36,
		question: 'Does something that increases a bonus count as a new bonus?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 37,
		question: 'Does something that modifies a die roll count as a bonus?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 38,
		question: "Does something that sets a unit's Strength to a specific value count as a bonus?",
		answer: 'Yes, if it raises the strength.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 39,
		question: 'Do combat rolls count as strength bonuses?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 40,
		question: 'Does a card/ability that increases several statistics count as a single bonus?',
		answer: 'No, it counts as a separate bonus for each statistic it increases.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 41,
		question: 'Does a static increase of a statistic count as a bonus?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 42,
		question:
			'If you are somehow allowed to play Path of Glory as a Combat Tactic, does it retroactively double/halve bonuses already played that combat?',
		answer: 'No. Except for Reactions, nothing in WarCry can retroactively affect something else.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 43,
		question:
			'If you are somehow allowed to play Path of Glory as a Combat Tactic, what happens if you play two copies of Path of Glory?',
		answer: 'They stack, so your bonuses are quadrupled.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 44,
		question:
			'If I get e.g. "+1 strength for each...", does this count as a single bonus or multiple bonuses?',
		answer: 'A single bonus.',
		source:
			'https://web.archive.org/web/20051020092939/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4731&PN=1'
	},
	{
		id: 45,
		question:
			"Does Brotherhood of Grimnir's static ability increses their strength, does it count as a bonus? Can it be mofied by card effects?",
		answer: 'Yes to both questions.',
		source:
			'https://web.archive.org/web/20051020093003/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4756&PN=1'
	},
	{
		id: 46,
		question:
			"If your Malakai Makaisson's Goblin-Hewer is in a ranged combat, and you play a card that kills an enemy unit, can you use its reaction?",
		answer:
			"Yes. However, if the ability is on another unit, you may not use the hewer's reaction.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 47,
		question: 'Can The Conscripts Arrive be used to play a Support Tactic from the unit in combat?',
		answer:
			'No. Cards break the fewest number of rules possible to accomplish their stated effect.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 48,
		question: 'Can Turn of Events allow you to use abilities as if you were attacking?',
		answer: 'No, only cards.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 49,
		question:
			'Does the ability on Gotrek and Felix compare the modified strength or the base strength of enemy units?',
		answer: 'Modified strength.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 50,
		question:
			'Can Gotrek and Felix use their ability if the opponent has another unit with the same strength as the one they are fighting (but no units with higher strength)?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 51,
		question:
			"When using the WarCry on Minotaur's Bane, can you nominate the unit it's attached to?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 52,
		question:
			"What happens if you use the WarCry on Minotaur's Bane, nominate the unit it's attached to and lose the combat?",
		answer: 'Your unit is destroyed. The enemy may follow-up as normal.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 53,
		question:
			'Can Look Out, Sir be used after playing the Combat Tactic on Talisman of Strength? Can it be returned to the same unit? Can the Combat Tactic be used again?',
		answer: 'Yes to all.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 54,
		question:
			'If I use the combat tactic on an attachment on my unit in combat, that attachment is moved out of combat, and then moved back in; can I play the combat tactic again?',
		answer: 'No, because the attachment never left play, it is still considered the same card.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 55,
		question:
			"If you somehow use the Combat Tactic on the enemy's Talisman of Strength, is it destroyed?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 56,
		question:
			'Does Flames of the Phoenix count itself towards the total number of Combat Tactics played that combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 57,
		question:
			'Can you play Exploited Weakness if your opponent has played Probing Attack earlier that combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 58,
		question:
			"Can Ha'asek's Grief be used if a unit is destroyed during combat, but is not actually one of the units in combat?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 59,
		question:
			"Does Rikhaine's Black Legion compare strength values immediately, or at the end of combat?",
		answer: 'At the end of combat.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 60,
		question:
			'Do cards that "return" a unit to the battle line work even if the unit didn\'t come from the battle line, or if it is currently in the reserves?',
		answer:
			'Yes, the unit is moved to the battle line, regardless of where it came from or currently is.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 61,
		question:
			'If a unit or attachment contains multiple abilities, can you use each of them in a combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 62,
		question:
			'If an action card contains multiple Combat Tactics, can you use each of them in a combat?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 63,
		question: 'Does Dueling Master prevent players from playing regular tactics?',
		answer:
			'No. Once either player passes while playing cards face down, tactics phase continues as normal.',
		source:
			'https://web.archive.org/web/20051020084908/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4601&PN=1'
	},
	{
		id: 64,
		question: 'How does Dueling Master interact with effects to skip combat rolls?',
		answer:
			'If a player does not make a combat roll, any cards played face down are discarded at the end of the combat without effect.',
		source:
			'https://web.archive.org/web/20051020084908/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4601&PN=1'
	},
	{
		id: 65,
		question: 'Can the combat tactic granted by Back to Basics be used more than once per combat?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051030001846/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4570&PN=1'
	},
	{
		id: 66,
		question:
			'If two delayed triggers cause a unit to be destroyed and prevent it from being destroyed at the same time (e.g. Bow of the Seafarer and Sacrificial Unit), what happens to the unit?',
		answer: 'Preservation effect takes precedence.',
		source:
			'https://web.archive.org/web/20050418162758/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2898&PN=1'
	},
	{
		id: 67,
		question:
			'What happens when I play A Good Death to Save Another as a reaction to a combat roll and destroy my unit in combat to pay its cost while I am losing the combat by 1, 2 or 3, respectively?',
		answer:
			'In either case, your unit does not count as either winning or losing the combat. If you were losing by 1: the enemy unit counts losing the combat; 2: the result counts as a slaughter; 3: the enemy unit counts as the winner. In cases 1 and 2, the enemy unit returns to the battle line committed. In either case, there is no rout check.',
		source:
			'https://web.archive.org/web/20050505233829/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3074&PN=1'
	},
	{
		id: 68,
		question:
			'If my first tactic in combat instructs me to play another combat tactic (e.g., The Dragonhelm), can I play a WarCry?',
		answer:
			'No, unless the effect specifically addresses WarCries or some other effect allows you to play WarCries as if they were combat tactics.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2524399747907719/'
	},
	{
		id: 69,
		question:
			'If I play a tactic via a card effect which allows me to play it before the first tactic is played (e.g. Hydra Banner), can I play a WarCry later?',
		answer: 'No, as it would not be the first tactic anymore.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2526048981076129'
	},
	{
		id: 70,
		question:
			'Can a committed unit be the target of tactics cards/abilities? Can a committed unit use its tactics abilities?',
		answer: 'Yes to the first question. No to the second question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 71,
		question:
			'Can committed units be re-committed by an effect? Can they be re-committed as part of a cost?',
		answer: 'No to both.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 72,
		question:
			'If a card is playable only "while you have no other ready units", does the unit in combat have to be ready?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 73,
		question:
			'Can a unit use its Reaction ability if it is committed? What about static abilities and Macros (Scout, Terror and Victory)?',
		answer: 'No to the first question. Yes to the second question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 74,
		question:
			'Can I play a card committing a unit and choose a committed unit as its target? For example, can I target a committed unit with Low Morale to trigger a reaction on Styrkaar of the Sortsvinaer?',
		answer: 'No, that is not a legal target.',
		source:
			'https://web.archive.org/web/20041226210517/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=561&PN=1'
	},
	{
		id: 75,
		question: 'Can a card/ability that copies a Combat Tactic be used to copy a WarCry?',
		answer: 'Only if the card/ability specifically states that it can.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 76,
		question:
			'If Duplicate is used to copy a card with multiple tactics on it, do you have to choose the same tactic that was chosen when the card was first played?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 77,
		question:
			'Can Duplicate be used to copy a Duplicate that had been played previously that combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 78,
		question:
			'Can Duplicate be used to copy a card that says you may only play it once per combat?',
		answer:
			'Copying a card with Duplicate counts as playing it, so you may only copy those cards if your opponent played them.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 79,
		question:
			'Do cards/abilities that activate an ability prevent that ability from being used again that combat?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 80,
		question:
			'Does Decisive Maneuver allow you to use abilities an additional time (like Weapons Master) or on committed units (like The Conscripts Arrive)?',
		answer: 'No to both questions.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 81,
		question:
			'If I play Dauntless Reckoning and False Orders, is the supporting enemy unit destroyed?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 82,
		question:
			'What happens if you use Borrowed Power to copy a tactic that refers to "this unit"? What if the tactic refers to the unit by name?',
		answer:
			'"This unit" refers to the unit that activated the ability, so in this case it would refer to your unit in combat. However, if the tactic refers to the unit by name, it always refers to them.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 83,
		question:
			"Can you use Borrowed Steel on an attachment that doesn't have a Combat Tactic that you can use?",
		answer: "Yes, but it won't destroy the attachment.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 84,
		question:
			'If you Duplicate a card that contains the text "this card ...", which card does it refer to?',
		answer: "The card it's printed on.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 85,
		question: 'What happens if I play False Orders on Jasenland’s Imperial Defenders?',
		answer:
			'They do get attached to your unit but you do not take control of them. You cannot attack with them. They do not count as a unit in your battle line for purposes of holding the line. You can attack them. They count for victory for your opponent.  Your opponent can declare an attack with them. Your opponent may use their support tactic.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 86,
		question:
			'If the target of Inner Conflict is committed, is its copy considered to be committed as well?',
		answer: "No, only a card's statistics and text are copied.",
		source:
			'https://web.archive.org/web/20051226084904/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=5067&PN=1'
	},
	{
		id: 87,
		question:
			'If the attachment targetted by On Your Own is committed, is the unit newly created unit committed as well?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051030193002/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4529&PN=1'
	},
	{
		id: 88,
		question: 'What is the cost of an action card?',
		answer: 'The tactic point cost, plus anything before the colon in the card text.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 89,
		question:
			"Can the unit that's in combat be used to satisfy the cost of Mass March? If so, will this double the effects of previously played strength-increasing effects?",
		answer: 'Yes to both questions.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 90,
		question: 'Does Disruption of Support make normal Support Tactics cost 1 spell point?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 91,
		question: 'Does Disruption of Support make normal Support Tactics count as spell ability?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 92,
		question:
			'What happens if one effect makes something (e.g. the cost of a combat tactic card) free and another effect modifies the cost?',
		answer: 'They are still free.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 93,
		question:
			'If Duplicate is used to copy a tactic with a variable cost, do you have to use the same cost?',
		answer: 'No, you can specify a new cost.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 94,
		question:
			'What is the difference between "play something for free" and "play something, paying no costs"?',
		answer: 'None. They are equivalent.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 95,
		question:
			'What happens if you play a card or ability for free, and that card/ability has an effect that is dependent on the cost? What if the effect is dependent on the cost, and the cost is dependent on something else?',
		answer:
			'In the first case, you do not get the effect (if it has X in the cost, X is considered to be 0). In the second case, you get the effect without having to pay the cost.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 96,
		question:
			'If a card has a cost involving X, and something modifies that cost (other than making it free) is X considered to be modified?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 97,
		question: "Do attachments increase the gold cost of the unit they're attached to?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 98,
		question:
			'If a card/ability allows you to play Duplicate for free, do you have to pay the cost of the duplicated card?',
		answer: "Yes, but you don't have to pay the spell point cost for Duplicate itself.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 99,
		question:
			'If a static ability reduces the cost of a unit or attachment, do you have to pay the full cost if you carry it over between battles?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 100,
		question:
			'If a reaction reduces the cost of a unit or attachment, do you have to pay the full cost if you carry it over between battles?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 101,
		question:
			"Can you play a unit or attachment that you don't have enough gold to pay for, if you could then reduce the cost enough so that you could afford it?",
		answer: 'Only if the reduction is due to a static effect.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 102,
		question:
			'If something reduces the cost of a card and later that card gets bounced, how much gold do you get back?',
		answer: 'You get back however much you actually paid.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 103,
		question:
			"Can you discard a strategy with a spell ability to satisfy Eldire's ability? What if that strategy has multiple spell abilities?",
		answer: 'Yes to the first question. You may choose the cost for any one of the abilities.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 104,
		question:
			'Does Everything Has a Price affect cards without a printed tactic point cost, i.e. tactics adding tactic points?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051226085333/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4840&PN=1'
	},
	{
		id: 105,
		question:
			'Can the tactic point cost of a combat tactic card without a printed tactic point cost be modified by card effects?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051226085333/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4840&PN=1'
	},
	{
		id: 106,
		question:
			'What happens if a unit with another unit attached to it via Invocation of Nehek is carried over to the next battle?',
		answer:
			'The attached unit stays attached and keeps the same effects. Its controller does not pay does not pay any gold cost for it.',
		source:
			'https://web.archive.org/web/20050418160714/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2853&PN=1'
	},
	{
		id: 107,
		question:
			'Can I destroy a single unit with the Elven Victory, Dwarven Victory and Imperial Victory attached to pay the cost of Victory at Any Cost?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20050505233920/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3114&PN=1'
	},
	{
		id: 108,
		question:
			'Does Furgut prevent from playing tactic cards for 0 tactic points and spell abilities for 0 spell points?',
		answer: 'No.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2264241497256880/'
	},
	{
		id: 109,
		question: 'Can Counter Spell be triggered by a reaction without cost?',
		answer: 'Yes.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2264241983923498/'
	},
	{
		id: 110,
		question: 'When do you reshuffle your deck?',
		answer: 'As soon as it becomes empty.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 111,
		question:
			"If you have to reshuffle your deck during combat, do you reshuffle combat tactic cards you've played during that combat? How about reaction cards?",
		answer: 'No to the first question. Yes to the second question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 112,
		question:
			"What happens if you have to look at the top N cards of your deck, but don't have that many remaining?",
		answer:
			'You take the remaining cards from your deck, shuffle your discard pile, take remaining cards you need, look at them, and place them on top of your deck.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 113,
		question:
			"When you muster Dhargethen's Bloodkith, do you have to draw Naetharion Dhargethen if you find it? Can you look through your discard pile as well? Do you shuffle your deck afterwards?",
		answer: 'No to the first question. No to the second question. Yes to the third question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 114,
		question:
			'When something tells you to shuffle your deck, do you combine your deck and discard pile before shuffling?',
		answer: 'No, not unless you are specifically told to.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 115,
		question:
			"What happens when a card/ability allows a player to search through a deck and doesn't require them to shuffle the deck afterwards?",
		answer:
			"Even if the card/ability doesn't specifically say so, the deck must be shuffled afterwards.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 116,
		question: 'When Re-equip is played, what happens to the cards that do not get attached?',
		answer: 'They are returned to the top of the deck in the same order.',
		source:
			'https://web.archive.org/web/20051226104110/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4883&PN=1'
	},
	{
		id: 117,
		question: 'What does it mean to be "defeated in combat"?',
		answer:
			'It means losing a combat, which does not include slaughters or cards/abilities that destroy a unit outright.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 118,
		question: 'What does it "WarCry cards and abilities" mean?',
		answer: 'It is short for WarCry cards and WarCry abilities.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 119,
		question:
			'Is a Spell Combat Tactic considered a Combat Tactic for the purposes of things that affect Combat Tactics?',
		answer:
			'Yes, the "Spell" versions of WarCries, Combat Tactics, Support Tactics and Reactions can be affected by things that refer to their normal equivalent.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 120,
		question:
			'Is a Support WarCry considered a WarCry for the purposes of things that affect WarCries?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 121,
		question: 'Are all neutral units considered to be "Dogs of War" units?',
		answer: 'No, "Dogs of War" units are ones that have the "Dogs of War" keyword.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 122,
		question:
			'When a unit is destroyed, are attachments on that unit considered to be destroyed as well?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 123,
		question:
			"Do Victory tokens count for cards that refer to a unit's Victory bonus? If it is a negative token and takes the unit's Victory down to 0 or lower, does the unit still count as having Victory?",
		answer: 'Yes to both questions.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 124,
		question: 'What WarCries can Aranauch the Fangheart play as Combat Tactics?',
		answer:
			'WarCry cards played from your hand normally. His ability does not apply to WarCry abilities.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 125,
		question:
			'Do cards/abilities that give you a choice between discarding and some other effect, count as "forcing" you to discard?',
		answer: 'Yes, but only if you choose the discard option.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 126,
		question: 'Does The Conscripts Arrive count as using a Support Tactic?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 127,
		question: 'What are army keywords?',
		answer:
			'The current keywords are: Fortification, Infantry, Cavalry, Flyer, Monster, War Machine, Beastmen, Bretonnian, Chaos, Chaos Dwarf, Dark Elf, Daemon, Dogs of War, Dwarves, Empire, High Elf, Khemri, Kislev, Lizardmen, Orc, Skaven, Vampire Counts, and Wood Elf.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 128,
		question: 'Are there any other keywords than army keywords?',
		answer: 'Armor, Item, Standard, Character, Weapon, Strategy, Terrain, Event.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 129,
		question: 'Does “Remove from play” mean the same thing as “destroy”?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 130,
		question:
			"Can Barak's Ironbeards use their ability when a strategy is put into play via an event?",
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20060108130040/http://sabertoothgames.com/forum/forum_posts.asp?TID=5715&PN=1'
	},
	{
		id: 131,
		question: 'Is "put into play" equivalent to "play"?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20060108130040/http://sabertoothgames.com/forum/forum_posts.asp?TID=5715&PN=1'
	},
	{
		id: 132,
		question: 'Do initial statistics on units created by card effects count as printed?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051226110656/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4882&PN=1'
	},
	{
		id: 133,
		question:
			'If an ability on a card in play states that it can be used only once per a game phase, can other instances of that ability be played? If the ability is used, the card leaves play and enters play again, can the ability be used again?',
		answer: 'Yes to both questions.',
		source:
			'https://web.archive.org/web/20050418163915/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2852&PN=1'
	},
	{
		id: 134,
		question:
			'Does using an ability on a strategy card to put it into play as a combat tactic count as playing a combat tactic? For example, can I use the support tactic on Lessons Learned after I put it into play as a WarCry?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20060117155210/http://sabertoothgames.com/forum/forum_posts.asp?TID=5840&PN=2'
	},
	{
		id: 135,
		question: 'Does rolling an event count as playing a card or ability by the controlling player?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20060108130040/http://sabertoothgames.com/forum/forum_posts.asp?TID=5715&PN=1'
	},
	{
		id: 136,
		question:
			"Can event strategies be put into play as normal command or only as they've been rolled?",
		answer: 'Yes, they can be played as a command as well.',
		source:
			'https://web.archive.org/web/20050505233723/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3025&PN=2'
	},
	{
		id: 137,
		question: 'What happens if Sunrise is rolled during the Muster Phase?',
		answer:
			'Its controller draws two army cards. However, if it was rolled to determine who fields the first unit, its effect is ignored as the player does not have a hand yet.',
		source:
			'https://web.archive.org/web/20050505233723/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3025&PN=2'
	},
	{
		id: 138,
		question:
			'If an event card is rolled but it is re-rolled by a card effect, does the event trigger?',
		answer: 'Yes. It triggers before any reactions can be used.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2273508162996880/'
	},
	{
		id: 139,
		question:
			"If a unit making a follow-up attack can choose their target, can they choose an enemy unit from the reserves? What if they are prevented from attacking the opponent's reserves?",
		answer:
			"Yes in either case. You can still target a unit in their reserves with a follow-up attack, since a follow-up attack doesn't count as an attack.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 140,
		question:
			'If a unit is prevented from declaring an attack, can they follow-up after winning a combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 141,
		question: 'Is the defender in a follow-up attack considered to be blocking?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 142,
		question:
			'Is it possible to block during a follow-up attack? Does the unit making a follow-up attack count as attacking?',
		answer: 'No to the first question. Yes to the second question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 143,
		question: 'Does a follow-up attack count as a new Command?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 144,
		question:
			'Can a committed unit make a follow-up attack if a card/ability specifically grants a follow-up attack?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 145,
		question: 'What happens if I play Onward! on a committed unit and it wins combat?',
		answer:
			'You rout the enemy unit, but it is not destroyed, and you cannot make a follow-up attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 146,
		question: 'Can a committed unit rout an enemy unit?',
		answer: 'Yes, but the enemy unit is not destroyed and you cannot make a follow-up attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 147,
		question:
			'If a unit attacks from the battle line, routs and makes a follow-up attack, do they still count as attacking from the battle line (and similarly if they attacked from the reserves)?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 148,
		question:
			"Can Onward! or Dhargethen's Duskreavers be used to make more than one follow-up attack?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 149,
		question: 'If a unit has a wizard attachment, does it count as a wizard unit?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 150,
		question:
			'If a wizard unit or attachment is brought into play during a battle, does the controlling player gain spell points?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 151,
		question:
			"Does the Wizard level from Cache of Scrolls stack with Wizard levels on the unit it is attached to? If the unit doesn't have any Wizard levels, do they become a Wizard unit?",
		answer: 'Yes to both questions.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 152,
		question:
			'If a card/ability prevents something from being played, can it negate something that has already been played?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 153,
		question: 'Can an effect be changed after it is used?',
		answer: 'No. Effects are set once they are used, unless specifically noted otherwise.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 154,
		question:
			"What happens if a reaction negates a card/ability? How about reactions that don't negate cards/abilities?",
		answer:
			"For the first question: the reaction takes effect after any costs for the card/ability have been paid, but before its effects have been carried out. For the second question: reactions that don't negate the event that triggered them cannot be played until after the event has been completed.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 155,
		question:
			'If you play Melekh the Changer and name a unit, is your opponent prevented from mustering that unit in future muster phases?',
		answer: 'No, the effect only lasts for the current muster phase.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 156,
		question:
			"What does Styrkaar of the Sortsvinaer's WarCry prevent the opponent from doing, if they fail the test?",
		answer:
			'They may not play activated abilities from the unit itself, they may not play Combat Tactic cards from their hand, and they may not play abilities granted to the unit by attached action cards. They may play Support Tactics, abilities on attachments, reactions from their hands and reactions from other units.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 157,
		question: 'Is it possible to negate part of a card/ability?',
		answer: 'No, if you negate a card/ability, you cancel all of its effects.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 158,
		question:
			'Can Karkov’s Winged Lancers use their reaction to rally themselves after a card/ability commits them?',
		answer:
			'No, since their reaction doesn’t actually negate the card/ability, they would be committed before they could react.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 159,
		question: 'Can Luthor Huss use his reaction to negate a spell card/ability that commits him?',
		answer:
			'Yes, because the reaction actually negates the card/ability, it triggers after the cost has been paid but before the effects are resolved.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 160,
		question:
			'Does Practiced Maneuver prevent cards that optionally discard cards, e.g. Grim Resolution?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050418155619/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2950&PN=1'
	},
	{
		id: 161,
		question:
			'Can The Birdmen of Catrazza negate a card effect that optionally discards cards, e.g. Grim Resolution?',
		answer:
			'Yes, but only if their controller has enough cards in their hand to discard (i.e. at least 3 cards in case of Grim Resolution).',
		source:
			'https://web.archive.org/web/20050418155619/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2950&PN=1'
	},
	{
		id: 162,
		question:
			'Can The Birdmen of Catrazza negate Under Concealment of Broad Daylight? Can they negate Twister?',
		answer: 'Yes to both questions.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/1703784889969213/'
	},
	{
		id: 163,
		question: 'Is it possible for a roll to be negative (because of modifiers)?',
		answer: 'Yes',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 164,
		question: 'Is it possible for a cost to be negative (because of modifiers)?',
		answer: "No, a cost is something you must pay, and so it can't be negative.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 165,
		question: "Is it possible for a player's spell point total to become negative?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 166,
		question: "Can a unit's statistics be reduced below 0?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 167,
		question:
			'If an ability has a specified effect when some statistic/total is at 0, does it have that effect if the statistic/total is negative?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 168,
		question:
			'If a unit has a negative amount of tactic points due to card effects, can it play combat tactic cards costing 0 tactic points?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050128033005/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=968&PN=1'
	},
	{
		id: 169,
		question:
			"When playing The Howler Wind do you compare your spell points to the enemy unit's strength before or after paying the cost of the card?",
		answer: 'After.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 170,
		question:
			'When playing Furious Charge do you compare hand sizes before or after playing the card?',
		answer: 'Before.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 171,
		question:
			'What happens when multiple static abilities or reactions would take effect at the same time?',
		answer:
			'Static effects are resolved in the following order: 1. The attacker chooses the order in which to activate all static effects they have in play and resolve them. 2. The defender chooses the order to activate all static effects they have in play and resolve them. 3. Reactions may then be played alternating turns beginning with the attacker.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 172,
		question: 'What are the rules for determining whether a card is playable?',
		answer:
			'If a card includes the phrase "only playable when/if ...", that condition must be satisfied. Otherwise the card must have a legal target. Cards almost always target either your unit or the enemy unit. Even cards that don\'t directly affect a unit, such as Armor Break or Borrowed Steel are considered to target a unit.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 173,
		question: 'What is the order of the steps in combat resolution?',
		answer:
			'1. Combat Roll; 2. Slaughter/Winner/Loser determined; 3. Rout Check; 4. Destroy/Commit Losing unit based on readiness of winning unit at time of combat roll; 5. Commit/Follow-up',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 174,
		question:
			'If your unit loses a combat, you play Martyrs, and the enemy unit fails their leadership test and becomes committed, is your unit destroyed?',
		answer:
			'Yes, whether or not the winning unit is capable of destroying the losing unit is determined at the end of the tactics phase, before the combat roll.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 175,
		question: "Does Jezzi's Git Mob become committed if the enemy unit gains Terror during combat?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 176,
		question: 'Can Snorri Nosebiter be attached to a unit that already has a character attachment?',
		answer: "No, his static ability doesn't take effect until after he is attached to a unit.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 177,
		question:
			'What happens if Snorri Nosebiter and one or more other characters are attached to a unit and Snorri Nosebiter is destroyed?',
		answer: 'The other characters remain on the unit, but no new characters may be attached.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 178,
		question:
			'When playing Into the Heart of the Enemy, are the relative strength values checked immediately, or at the end of combat?',
		answer: 'At the end of combat.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 179,
		question:
			'How do cards/abilities that take up multiple sentences work? What if one of the sentences includes a "may ..." disclaimer?',
		answer:
			'Resolve each sentence in order. If a sentence is not, or cannot, be resolved, it attempts to do as much as possible. Optional sentences do not need to be resolved in order to move on. Sentences that involve playing cards from your hand, or otherwise putting them in play (e.g. Birdmen of Catrazza) are also considered optional.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 180,
		question:
			'Does the second sentence on Clinch take effect if there are no attached cards or tokens in the combat?',
		answer:
			'No, if one of the effects on a card/ability doesn’t do anything it is considered to be unresolved, and further effects in that card/ability are ignored.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 181,
		question: 'What steps are involved in playing a tactic card?',
		answer:
			'1. Ensure the card is playable. 2. Lay the card down so your opponent can see it. 3. Declare the target. 4. Pay the cost. 5. Implement effects.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 182,
		question:
			'Does Strike When They are Weak take effect before or after the winning unit is committed during Combat Clean-up?',
		answer: 'Before. Strike When They are Weak should read "at the end of the tactics phase".',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 183,
		question:
			'Do abilities that take effect after the current combat happen before or after Combat Clean-up?',
		answer: 'They take effect after Combat Clean-up.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 184,
		question:
			'Can Choices of War be used to prevent cards played after the Tactics Phase (e.g. Strategic Withdrawal)?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 185,
		question:
			'What happens if Relent or We Both DIe! is rolled after combat resolution, e.g. as a rout check?',
		answer: 'It has no effect.',
		source:
			'https://web.archive.org/web/20051101105513/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4528&PN=1'
	},
	{
		id: 186,
		question:
			'If a card effect end combat immediately (e.g. Buy Me Some Time), do effects that trigger "at the end of the tactics phase" (e.g. Another Day) still trigger?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20050505233801/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3045&PN=2'
	},
	{
		id: 187,
		question: "Can Luril's Seafarers trigger their reaction before setup is over?",
		answer: 'Yes. Any reactions triggerring "after setup" can be played later.',
		source:
			'https://web.archive.org/web/20051018031856/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4743&PN=1'
	},
	{
		id: 188,
		question:
			'If I play Keep Them Pinned on a ranged attack unit and lose the combat, can I choose to commit the unit in combat?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050505233821/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3068&PN=1'
	},
	{
		id: 189,
		question: 'When Blind Fury is played, who decides first which cards to select?',
		answer: 'The attacker must select their cards first.',
		source:
			'https://web.archive.org/web/20050505233934/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3119&PN=1'
	},
	{
		id: 190,
		question: 'When Reinforcements is played, who chooses their unit first?',
		answer: 'The player whose command it is chooses their unit first.',
		source:
			'https://web.archive.org/web/20050129111503/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=318'
	},
	{
		id: 191,
		question:
			'Does a unit with Ranged Attack have to shoot exactly two lines away, or can they choose to shoot enemies only one line away?',
		answer: 'They can shoot enemies that are one or two lines away.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 192,
		question: 'Does the defender get to add a roll to their strength in a ranged attack?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 193,
		question:
			'What happens if your unit initiates a ranged attack, becomes committed during the combat, and ends up winning the combat?',
		answer: 'The enemy unit is committed/destroyed as usual.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 194,
		question: 'Does a Ranged Attack count as an attack?',
		answer:
			'Yes, only for the purposes in that you draw a card at the beginning and playing cards that say “Only playable while attacking.”',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 195,
		question:
			"Can the Warcry on Dhargethen's Duskreavers be used during a ranged attack? If Dhargethen's Duskreavers wins, do they rout the ranged attacker? Do they destroy the ranged attacker? Can they make a follow-up attack?",
		answer:
			'It can be used and they will rout the ranged attacker, but they do not destroy the attacker and cannot make a follow-up attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 196,
		question:
			'If a card forces a slaughter in a Ranged Attack, but one side uses a card/ability that makes them win instead, is the enemy unit destroyed?',
		answer:
			'No, treat the combat as you would normally (i.e. nothing happens if the defending unit won, and the defender is committed/destroyed if the attacker won).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 197,
		question:
			'In a ranged attack, is the defender considered to be losing the combat if his strength is equal to the attacker’s ranged attack?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 198,
		question:
			'In a ranged combat, if the attacker\'s ranged attack is equal to the defender\'s strength, does the attacker count as "winning"?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 199,
		question: 'In the "Ties are for the weak" tie-breaker, is it possible to make a ranged attack?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 200,
		question:
			'If one of my units initiates a ranged attack, plays Hail of Doom, becomes comitted during the combat and wins the combat by three or more, can it make the additional attack?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 201,
		question: 'When is the ranged attack value for White Plain Kossars established?',
		answer:
			'It is established at the start of combat, and is updated every time their strength changes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 202,
		question: 'What happens if the White Plain Kossars receive a ranged attack bonus?',
		answer: 'Their ranged attack would increase by that bonus.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 203,
		question: "When is the ranged attack value for Sniktnit's Warp Cannon established?",
		answer:
			'You pay the cost, and establish the ranged attack value, when you declare the ranged attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 204,
		question:
			"Can Sniktnit's Warp Cannon ranged attack be negated with Dissipate Magic? What is its ranged attack value when not using its ranged attack?",
		answer: 'No. Ranged Attacks are a static ability',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 205,
		question:
			"If I declare a ranged attack and my opponent plays Force the Skirmish, do cards that increase my unit's ranged attack affect the outcome of the combat? Does my unit still win in a tie?",
		answer:
			'No, to the first question, it must play cards that increase its strength value. Yes to the second question.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 206,
		question:
			'What happens if, during a ranged attack, the attacking unit is moved from the battle line to the reserves, and could no longer normally reach the enemy unit with its ranged attack?',
		answer: 'Nothing, the ranged attack continues normally.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 207,
		question:
			'If you use the Command on Thunder that Walks to make a ranged attack and use Hail of Doom, does Thunder that Walks commit?',
		answer:
			"If you win the original ranged attack by three or more and make the extra attack from Hail of Doom, then it commits. However, if it doesn't make the extra attack, it doesn't become committed.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 208,
		question:
			'Can a card/ability that allows you to block an attack, allow you to block a ranged attack?',
		answer: 'Not unless it specifically mentions that it can be used to block ranged attacks.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 209,
		question: 'How does March of the Damned work in a Ranged Attack?',
		answer:
			'It always subtracts your roll from your combat total (be it Strength or Ranged Attack).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 210,
		question:
			'What happens if, during the course of a ranged attack, your unit is given a better base Ranged Attack value?',
		answer:
			'You must continue to use the base Ranged Attack that you had when you started the attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 211,
		question:
			"When Glory's Fading blocks an attack and uses its reaction, where do the units fight? When combat is over where do the units go?",
		answer:
			'The units fight in the battlefield and surviving units return to the battle line when combat is over.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 212,
		question: 'What happens when the defender plays Run Far Away during a ranged attack?',
		answer:
			'The defending unit is routed and returns to the battle line committed. There is no follow-up attack.',
		source:
			'https://web.archive.org/web/20051226105200/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4884&PN=1'
	},
	{
		id: 213,
		question:
			'If a ranged attack unit gets a Ranged Attack value by a card affect, does it affect printed Ranged Attack?',
		answer:
			'No, it gains an additional Ranged Attack value. Unlike other macro abilities, Ranged Attack is not cumulative.',
		source:
			'https://web.archive.org/web/20051031051118/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4818&PN=1'
	},
	{
		id: 214,
		question:
			'What happens if a ranged attack is aborted or one of the units is removed from combat?',
		answer:
			'A defending unit stays ready in the same line. An attacking unit is committed and stays in the same line.',
		source:
			'https://web.archive.org/web/20050416214416/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2690&PN=1'
	},
	{
		id: 215,
		question:
			"If Ratai's Horse Archers declare a ranged attack, play Hail of Doom and win by three or more, how many attacks do they make and in what order?",
		answer:
			'They make two ranged attacks. If they win the second attack, they may make one follow-up (normal) attack.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 216,
		question:
			"If the enemy declares a ranged attack against Ratai's Horse Archers and I win, can I use their reaction to make a follow-up attack?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 217,
		question:
			"I make a ranged attack with Pride of Karak-Hirn against the only unit in my enemy's battle line, and destroy that unit. Can I make the additional attack before my enemy's reserves fall forward?",
		answer: 'Yes, because the reaction triggers before the unit is actually destroyed.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 218,
		question:
			"Can I use the reaction on Jezzi's Poison Herders after the only unit in my battle line is destroyed, but before my reserves fall forward?",
		answer:
			'No, static abilities and game rules take effect before reactions can be used (and unlike the Pride of Karak-Hirn, their reaction is triggered by the destruction of a unit, not simply a unit losing combat).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 219,
		question:
			'If Tyrion, Defender of Ulthuan loses a combat and uses his reaction, does the opponent make a rout check? How about in a follow-up?',
		answer:
			'For the first question: the winning unit must make a rout test in order to play rout-triggered reactions, but may follow-up regardless of the result. No to the second question (but the winning unit may still follow-up).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 220,
		question:
			'If Tyrion, Defender of Ulthuan loses a combat and uses his reaction, does he lose his attachments?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 221,
		question:
			'If Tyrion, Defender of Ulthuan loses a combat and uses his reaction in a "Ties are for the Weak" tie-breaker, can the enemy make a follow-up attack? Can it be into Tyrion again?',
		answer: 'Yes to both questions.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 222,
		question:
			"If my unit wins a combat but a card/ability prevents the enemy unit from being destroyed, can I use Pfanelholt's Swordsmen to destroy the enemy unit anyway?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 223,
		question:
			"If Pfanelholt's Swordsmen make a ranged attack and win, can they use their reaction to destroy the enemy unit?",
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 224,
		question:
			"Can you use a unit's reaction if that unit wasn't in play when the trigger occurred?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 225,
		question:
			'Can the Black Rose Coven use their reaction if they were committed before being destroyed? What if the opponent blocked their reaction during combat?',
		answer:
			'Yes in both cases. This is true for all reactions that say "after this unit is destroyed ...".',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 226,
		question: 'Can Kirenwulf Jasenland use his reaction during the muster phase?',
		answer: 'Yes, you just have to discard one of your army cards.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 227,
		question:
			'Can you use a reaction triggered by a card/ability that grants a strength bonus, if the card/ability sets up a static ability that grants the bonus at some point in the future?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 228,
		question:
			'Can you play multiple copies of Cunning Raid after routing a unit? How about if you draw one of those copies from an earlier Cunning Raid?',
		answer: 'Yes to both.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 229,
		question: 'Is it possible to react to individual die rolls when rolling 2d6 (or 3d6)?',
		answer:
			'Yes, each die is rolled one at a time, and each player may react before the next die is rolled.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 230,
		question:
			'What happens if I use the abilitiy on multiple copies of Bearers of the Sacred Flame?',
		answer:
			'Reactions resolve one at a time. Perform an attack with one of them, including any follow-up attacks, before proceeding to the next one.',
		source:
			'https://web.archive.org/web/20060108014824/http://sabertoothgames.com/forum/forum_posts.asp?TID=5685&PN=1'
	},
	{
		id: 231,
		question:
			'How is the effect on Run Far Away resolved if another card effect states that my unit cannot be routed?',
		answer: 'The unit returns to the battle line committed and it is not routed.',
		source:
			'https://web.archive.org/web/20050505233739/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3034&PN=1'
	},
	{
		id: 232,
		question: 'Can I play multiple copies of Cunning Battle Plans at the start of the battle?',
		answer: 'No, because after the first one resolves, the first command is already over.',
		source:
			'https://web.archive.org/web/20050505233833/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3076&PN=1'
	},
	{
		id: 233,
		question:
			'After the enemy unit receives a strength bonus of 4 or more, can I copy that bonus by Trump and then reduce it by See Through the Diversion?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051020093003/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4756&PN=1'
	},
	{
		id: 234,
		question:
			"If I play Nobody Lives Forever and may enemy destroys a unit, does it count as my unit destroying an enemy unit? For example, will it trigger the reaction on Malakai Makaisson's Goblin-Hewer?",
		answer:
			'No, because the unit is destroyed by your enemy. This is different from cards like Wind of Death or Fire on Them Both.',
		source:
			'https://web.archive.org/web/20041225153733/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=383&PN=1'
	},
	{
		id: 235,
		question:
			'What happens if you are required to roll, but cannot (you don’t have any cards in action deck and action discard pile)?',
		answer: 'You do not make the roll and automatically fail all tests.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 236,
		question: 'What happens if something prevents you from making a combat roll?',
		answer: "Your roll is considered to be zero, and doesn't trigger roll-related reactions.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 237,
		question:
			'If something stops you from rolling and instead says you count as having rolled a specific number, can you use a roll-triggered reaction to modify that number?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 238,
		question: 'What happens if both players roll the same for Tides of Battle?',
		answer: 'Both rolls are considered to be "the highest roll", so both units get +2 strength.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 239,
		question: 'Can a card\'s "die number" be modified?',
		answer:
			'Yes, if you had an ability that specifically says "change a die number".  An ability that modifies a roll will not modify the die number.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 240,
		question:
			'What happens if I use Winds of Fate and the Cauldron of Blood ability in the same combat?',
		answer:
			'You get two "rolls". The first is the Winds of Fate roll (roll three dice and choose two). The second is the Cauldron of Blood roll, which is a single die. You may choose which of the "rolls" to accept.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 241,
		question:
			'What happens if Da Pump Pump Truck is in combat, you play Winds of Fate and then use its reaction?',
		answer: 'Before you roll, you choose which of the roll variants to use.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 242,
		question:
			'Can you use Strength of Focus to re-roll a re-roll caused by Strength of Focus? Do modifiers to the original roll apply to a re-roll? Can you use the +1 reaction on Strength of Focus on a re-roll if you used it on the original roll?',
		answer: 'No, unless you have another copy of Strength of Focus in Play. No. Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 243,
		question: 'Can you use the +1 from Strength of Focus more than once on a given roll?',
		answer: 'No. You cannot use a single reaction multiple times per trigger.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 244,
		question:
			'When multiple rolls are made (either by one player or both) do I have to modify each roll as its made or can i wait until all rolls are made to choose which ones to modify?',
		answer: 'You can modify after each roll separately.',
		source:
			'https://web.archive.org/web/20051101105944/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4667&PN=1'
	},
	{
		id: 245,
		question:
			'If a combat ends in a slaughter, but one side used a card/ability that makes them win instead, can you use reactions that are triggered by a slaughter?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 246,
		question:
			'If an ability ends a combat immediately does it skip the combat resolution step (e.g. avoiding a forced slaughter)?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 247,
		question:
			'What happens if both players play cards/abilities that allow them to win slaughters?',
		answer: 'The card/ability that is played last takes effect.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 248,
		question:
			'If a card effect creates a slaughter, does it count as destroying a unit by a card effect?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051226111258/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=5027&PN=1'
	},
	{
		id: 249,
		question:
			'If a card effect creates a slaughter and another card effect makes one unit to win instead, how is the difference the unit has won by determined for the purposes of card effects that take the difference into account, e.g. Xanax-Qol, the Rage That Burns?',
		answer:
			'The combat is won by the actual difference in strength, so the reaction on Xanax-Qol, the Rage That Burns can be used if the difference is 3 or less in either direction.',
		source:
			'https://web.archive.org/web/20060117154644/http://sabertoothgames.com/forum/forum_posts.asp?TID=5635&PN=2'
	},
	{
		id: 250,
		question:
			'Is it considered a static ability when an action card affects certain things that are played for the rest of combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 251,
		question:
			'If I use a card effect to play a combat tactic card while Confusion in Command is in play, is the combat tactic affected by Confusion in Command?',
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051226100030/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4910&PN=1'
	},
	{
		id: 252,
		question:
			"What kind of reactions can I trigger when I discard cards or when my opponent draws cards as a result of an opponent's static ability?",
		answer:
			"Because static abilities are not played, you can only play reactions to cards being discarded by an enemy card effect, but not reactions to an enemy playing an ability to discard cards. For example, when the abiility on A Fortunate Wind triggers, you can use  Leitdorf's Blood-oathed, but not The Birdmen of Catrazza.",
		source:
			'https://web.archive.org/web/20050418163922/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2894&PN=1'
	},
	{
		id: 253,
		question:
			'If a unit is granted Victory by a static ability on its card (e.g. Lord Xili-Quncani), does it count as printed Victory?',
		answer: 'No. Unlike "Victory: +X", which is considered a printed Victory.',
		source:
			'https://web.archive.org/web/20051030002438/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4564&PN=1'
	},
	{
		id: 254,
		question: 'How does Steed of Shadow interact with High Winds?',
		answer: "The unit's keyword instantly changes back to Infantry before it declares the attack.",
		source:
			'https://web.archive.org/web/20050506085005/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3164&PN=1'
	},
	{
		id: 255,
		question:
			'How does Brotherhood of Grimnir interact with effects modifying strength at the end of the tactics phase, e.g. Flames of the Phonenix?',
		answer: 'The attacker triggers their effects before the defender triggers theirs.',
		source:
			'https://web.archive.org/web/20050128033008/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=995&PN=1'
	},
	{
		id: 256,
		question:
			'If I have multiple copies of Zelekendel, Blade of Khaine ready in the battle line, does my enemy have to discard multiple cards to block?',
		answer: 'Yes.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2277502892597407/'
	},
	{
		id: 257,
		question:
			'If you use switch a new unit into combat, can you use a WarCry card/ability on the new unit?',
		answer: "No, it's still treated as the same combat.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 258,
		question:
			'If a unit in combat is exchanged with another unit, does the unit that was in combat become committed? Do any of the tactics used on the side that swapped units remain in effect?',
		answer:
			'No to the first question. Any tactics that specifically targeted the unit that was removed are lost, the rest remain.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 259,
		question:
			'If a unit is switched out of combat and later switched back in, does it regain the abilities/cards that had previously been played?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 260,
		question:
			'When a unit is switched in to combat, does it count as blocking (if the unit it replaced was blocking)?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 261,
		question:
			'When a unit is switched in to combat, does it retain the attacking/defending state of the previous unit?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 262,
		question:
			'What happens if a unit initiates a ranged attack and then gets switched out of combat for a unit without ranged attack?',
		answer:
			'The combat remains a ranged attack, and the new unit is considered to have "Ranged Attack: 0".',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 263,
		question:
			'When a unit enters combat via the effect on The Guest Becomes the Host, does it pay tactic points for the combat tactics played by the unit it was exchanged with?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20051020090353/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2573&PN=1'
	},
	{
		id: 264,
		question:
			'What happens to cards and tokens attached to a unit during a combat when the unit is exchanged with another unit via the effect on The Guest Becomes the Host later during the same combat?',
		answer: 'They are transfered to the new unit.',
		source:
			'https://web.archive.org/web/20051020090353/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2573&PN=1'
	},
	{
		id: 265,
		question: 'How does The Guest Becomes the Host interact with Spell of Shielding?',
		answer:
			'The effect of Spell of Shielding is applied to the new unit instead. The unit which entered play via Spell of Shielding stays in play while the new unit is destroyed at the end of the combat.',
		source:
			'https://web.archive.org/web/20051020090353/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2573&PN=1'
	},
	{
		id: 266,
		question:
			'What happens if a unit commits or readies during combat and is later exchanged with another unit via the effect on The Guest Becoms the Host?',
		answer:
			'As the card states, "ready units remain ready and committed units remain committed". This is an exception from other effects.',
		source:
			'https://web.archive.org/web/20050418162348/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2924&PN=1'
	},
	{
		id: 267,
		question:
			'Can I play The Guest Becomes The Host when there is only one unit left in combat or when either player only has a single unit in the play?',
		answer: 'No.',
		source:
			'https://web.archive.org/web/20050416214416/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2690&PN=1'
	},
	{
		id: 268,
		question:
			'If a unit gains Terror while in combat with an enemy unit that causes Terror, does it regain the Leadership it lost at the start of combat?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 269,
		question:
			"If I play Natural Leader, is my unit's leadership modified by terror for leadership tests?",
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 270,
		question: 'Do tactic point tests and strength tests use the printed or modified values?',
		answer:
			'Modified unless otherwise stated (tactic point tests are taken against your remaining tactic points).',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 271,
		question: 'What does an unmodified test mean?',
		answer:
			"You test against the unit's printed attribute, not their modified attribute. The roll can be modified as normal.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 272,
		question:
			'If a unit with Terror is defeated in combat, do the effects of Terror go away immediately?',
		answer: 'No, they last until the end of combat resolution.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 273,
		question: 'Can you play a unique card from your hand if you have a copy of that card in play?',
		answer: 'No.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 274,
		question:
			"If I use the WarCry on Quel'hi'liak can my opponent play a unique unit he already has in play? How about a unit I have in play? In either case, does the previous unique unit get bounced?",
		answer:
			'A player can never choose to bring a unique unit into play, if they already have a copy of that unit in play. So the answers are: no to the first question and yes to the second question. In the second case, your unit gets bounced.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 275,
		question:
			'When a unique unit gets bounced, does the controlling player get refunded gold for any lost attachments?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 276,
		question:
			'What if I play Inner Conflict and my enemy chooses my Unique unit as the target of their attack?',
		answer: 'Your unit is bounced (destroyed) and the combat is aborted.',
		source:
			'https://web.archive.org/web/20051112090939/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4362&PN=1'
	},
	{
		id: 277,
		question:
			"If Carstein's Grave Guard is destroyed during the Muster Phase as a result of its controller's only wizard being bounced, does the player get their gold back?",
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050505233810/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3061&PN=1'
	},
	{
		id: 278,
		question:
			'What happens when Anelia, Harridan of Slaanesh enters play while Anelia, Mistress of Slaanesh is in play?',
		answer:
			'Nothing happens because Anelia, Mistress of Slaanesh is not Unique, and thus the Veteran rule does not affect her.',
		source:
			'https://web.archive.org/web/20050505233956/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3133&PN=1'
	},
	{
		id: 279,
		question:
			'In the static ability on The Green Knight, does "minimum 1" refer to the bonus or the amount the bonus is reduced by?',
		answer: 'It refers to the bonus, so the static ability cannot reduce the bonus below +1.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 280,
		question:
			'When something targets an ability, does it affect all instances of that ability or only the one on the given card?',
		answer:
			'Only the targeted ability is affected, other instances of the same ability are unaffected.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 281,
		question:
			'Who wins if, at the end of a battle, one player has no units and the other player has units with a victory total of zero or less?',
		answer: 'The player with units remaining wins.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 282,
		question: 'What happens if you attach Mounts to Da Pump Pump Truck?',
		answer:
			"It starts out as Cavalry, so you don't need to use the command, but after it uses its reaction it is treated as an Infantry unit. At the start of each battle it is reset to Cavalry.",
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 283,
		question:
			'If I muster all of my units in the reserves, do they fall forward before or after calculating who gets the first command?',
		answer: 'Before.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 284,
		question:
			'Can Vardek Crom be brought into play after the first battle, if he is brought into play through some other means than mustering?',
		answer: 'Yes.',
		source: 'https://web.archive.org/web/20071015175836/http://sabertoothgames.com/warcry/faq.asp'
	},
	{
		id: 285,
		question: 'What kind of card effects does Dirty Fighting interact with?',
		answer:
			'It only affects restrictions to whether a card can be played or not, e.g. "Only playable..." or "This X unit...".',
		source:
			'https://web.archive.org/web/20051105125614/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4149&PN=1'
	},
	{
		id: 286,
		question:
			"If I somehow play Angkor, Father of Mammoths' WarCry during a ranged attack as an attacker, is the enemy unit destroyed?",
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20051018030829/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4575&PN=1'
	},
	{
		id: 287,
		question:
			'If a card effect halves a value without further specification, is the result rounded up or down?',
		answer: 'It is rounded up.',
		source:
			'https://web.archive.org/web/20050505233723/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3025&PN=2'
	},
	{
		id: 288,
		question: "Can Liche Priest Ahkaten's reaction target enemy Khemri units?",
		answer: 'No, because an enemy unit cannot enter your your reserves.',
		source:
			'https://web.archive.org/web/20050505233447/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=2869&PN=2'
	},
	{
		id: 289,
		question:
			"If I draw any cards in a combat after Blind Fury has been played, can I play them? If I don't play them, are they discarded after the resolution? Which cards can be discarded by card effects?",
		answer:
			'Yes. Yes. Any cards drawn or discarded during the combat will be added to or removed from the "selected cards" as it is currently "your hand".',
		source:
			'https://web.archive.org/web/20050505233934/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3119&PN=1'
	},
	{
		id: 290,
		question:
			"If Ha'asek's Bolt Slinger performs a ranged attack against a unit in the reserves and that unit is moved to the battle line by a card effect during combat, can its reaction be played after the combat?",
		answer: 'Yes.',
		source:
			'https://web.archive.org/web/20050505233912/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3111&PN=1'
	},
	{
		id: 291,
		question:
			'When there are two different card with the same name, how does it affect deckbuilding restrictions? Do they count as copies of each other?',
		answer:
			'They count as the same card for all purposes. You can only include a total of three of these cards in your deck.',
		source:
			'https://web.archive.org/web/20050505233929/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=3118&PN=1'
	},
	{
		id: 292,
		question:
			'Does the support tactic on Blood Precedes Glory add count the total amount of units removed from the game or only the units removed to pay its cost?',
		answer: 'Only the units removed to pay its cost.',
		source:
			'https://web.archive.org/web/20060117160612/http://sabertoothgames.com/forum/forum_posts.asp?TID=5943&PN=2'
	},
	{
		id: 293,
		question:
			'What hapens if I play Unexpected Quarter followed by a card effect forcing the enemy to dicard and draw cards, e.g. Warriors of the Fallen Tree?',
		answer: 'They discard and do not draw.',
		source:
			'https://web.archive.org/web/20051020092141/http://www.sabertoothgames.com/forum/forum_posts.asp?TID=4545&PN=1'
	},
	{
		id: 294,
		question:
			"Can I use Nothing Left after I reduce the enemy unit's leadership by playing a card effect to gain Terror? ",
		answer: 'Yes.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2262370907443939/'
	},
	{
		id: 295,
		question:
			'Can I use Never Again after my enemy uses an ability for a third or subsequent time?',
		answer: 'No.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2262622994085397/'
	},
	{
		id: 296,
		question: 'Can I play Stand Together as One when my enemy has no units in their battle line?',
		answer: 'Yes. The enemy unit will not get a strength bonus.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2263657927315237/'
	},
	{
		id: 297,
		question:
			'If I have multiple copies of a unit in play, do they count as +1 "Victory" for General\'s Standard?',
		answer: 'Not until you have a single copy of that unit you have in play.',
		source: 'https://www.facebook.com/groups/1172505629763811/posts/2267260710288292/'
	}
];
