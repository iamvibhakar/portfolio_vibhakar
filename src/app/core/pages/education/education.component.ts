import { Component } from '@angular/core';

@Component({
	selector: 'app-education',
	standalone: true,
	templateUrl: './education.component.html',
	styleUrl: './education.component.scss'
})
export class EducationComponent {
	education = [
		{
			institute: 'Dev Bhoomi Group Of Institutions, Dehradun',
			degree: 'Masters of Computer Application (MCA)',
			score: '79.20%',
			period: '2019 – 2021'
		},
		{
			institute: 'Ranchi University, Ranchi',
			degree: 'Bachelors of Computer Application (BCA)',
			score: '69%',
			period: '2016 – 2019'
		}
	];
}
