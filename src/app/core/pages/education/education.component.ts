import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { EDUCATION } from '../../data/education.data';

@Component({
	selector: 'app-education',
	imports: [RevealDirective],
	templateUrl: './education.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './education.component.scss'
})
export class EducationComponent {
	readonly education = EDUCATION;
}
