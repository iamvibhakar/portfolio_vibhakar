import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { AWARDS } from '../../data/awards.data';

@Component({
	selector: 'app-awards',
	imports: [RevealDirective],
	templateUrl: './awards.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './awards.component.scss'
})
export class AwardsComponent {
	readonly awards = AWARDS;
}
