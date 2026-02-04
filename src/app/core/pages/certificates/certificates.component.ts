import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-certificates',
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: './certificates.component.html',
	styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
	faExternalLink = faArrowUpRightFromSquare;

	certificates = [
		{
			title: 'Angular (The Complete Guide)',
			link: 'https://www.linkedin.com/posts/vibhakarkumar_angular-angulardeveloper-developerlife-activity-6953314564696391680-jRC9/'
		},
		{
			title: 'JavaScript Essential Training',
			link: 'https://www.linkedin.com/posts/vibhakarkumar_connections-linkedinlearning-javascript-activity-6962343561899978752-OYcn/'
		},
		{
			title: 'JavaScript Project',
			link: 'https://www.mygreatlearning.com/certificate/YGSLQTMR'
		}
	];
}
