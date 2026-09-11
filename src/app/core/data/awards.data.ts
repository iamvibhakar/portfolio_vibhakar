export interface Award {
	title: string;
	desc: string;
	date: string;
}

export const AWARDS: Award[] = [
	{
		title: 'Early Bird Award',
		desc: 'Time punctuality recognition at HashStudioz Technologies.',
		date: 'June 2025'
	},
	{
		title: 'NCC "B" Certificate',
		desc: 'Got NCC B Certificate.',
		date: 'Jul 2011'
	},
	{
		title: 'NCC Silver Medal',
		desc: '2 Silver Medals (Running and Swimming).',
		date: 'Apr 2011'
	},
	{
		title: 'NCC "A" Certificate',
		desc: 'Got NCC A Certificate.',
		date: 'Jul 2010'
	},
	{
		title: 'NCC Gold Medal',
		desc: '3 Gold Medals (1 Running, 2 Shooting).',
		date: 'Apr 2010'
	}
];
