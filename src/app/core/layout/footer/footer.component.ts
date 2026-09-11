import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
	selector: 'app-footer',
	imports: [FaIconComponent],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	faGithub = faGithub;
	faLinkedin = faLinkedin;
	faLeetCode = faCode;
	faArrowUp = faArrowUp;

	readonly year = new Date().getFullYear();

	private readonly spy = inject(ScrollSpyService);
	readonly showBackToTop = computed(() => this.spy.scrollY() > 400);

	scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
