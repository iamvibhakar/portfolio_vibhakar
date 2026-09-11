import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { EXPERIENCES } from '../../data/experience.data';

@Component({
	selector: 'app-experience',
	imports: [RevealDirective],
	templateUrl: './experience.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
	readonly experiences = EXPERIENCES;
}
