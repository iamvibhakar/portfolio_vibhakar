import { isPlatformBrowser } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	PLATFORM_ID,
	afterNextRender,
	inject,
	signal
} from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

const ROLES = ['Frontend Engineer', 'Angular Developer', 'React Developer', 'UI Craftsman'];

@Component({
	selector: 'app-hero',
	imports: [RevealDirective],
	templateUrl: './hero.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './hero.component.scss'
})
export class HeroComponent {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly destroyRef = inject(DestroyRef);

	readonly roles = ROLES;
	readonly roleIndex = signal(0);

	constructor() {
		afterNextRender(() => {
			if (!isPlatformBrowser(this.platformId)) {
				return;
			}

			const timer = setInterval(() => {
				this.roleIndex.update((index) => (index + 1) % ROLES.length);
			}, 2600);

			this.destroyRef.onDestroy(() => clearInterval(timer));
		});
	}
}
