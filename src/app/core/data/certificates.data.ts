export interface Certificate {
	id: string;
	title: string;
	issuer?: string;
	category: string;
	skills: string[];
	link: string;
}

export const CERTIFICATES: Certificate[] = [
	{
		id: 'angular-complete-guide',
		title: 'Angular (The Complete Guide)',
		category: 'Frontend Development',
		skills: ['Angular', 'TypeScript', 'RxJS'],
		link: 'https://www.linkedin.com/posts/vibhakarkumar_angular-angulardeveloper-developerlife-activity-6953314564696391680-jRC9/'
	},
	{
		id: 'javascript-essential-training',
		title: 'JavaScript Essential Training',
		issuer: 'LinkedIn Learning',
		category: 'Programming Languages',
		skills: ['JavaScript', 'ES6+'],
		link: 'https://www.linkedin.com/posts/vibhakarkumar_connections-linkedinlearning-javascript-activity-6962343561899978752-OYcn/'
	},
	{
		id: 'javascript-project',
		title: 'JavaScript Project',
		issuer: 'Great Learning',
		category: 'Programming Languages',
		skills: ['JavaScript', 'DOM'],
		link: 'https://www.mygreatlearning.com/certificate/YGSLQTMR'
	}
];

export const CERTIFICATE_CATEGORIES = [
	'All',
	...Array.from(new Set(CERTIFICATES.map((cert) => cert.category)))
];
