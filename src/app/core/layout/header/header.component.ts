import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';
import { ScrollSpyService } from '../../services/scroll-spy.service';

interface NavLink {
	label: string;
	href: string;
	id: string;
}

const NAV_LINKS: NavLink[] = [
	{ label: 'Experience', href: '#experience', id: 'experience' },
	{ label: 'Education', href: '#education', id: 'education' },
	{ label: 'Projects', href: '#projects', id: 'projects' },
	{ label: 'Skills', href: '#skills', id: 'skills' },
	{ label: 'Certifications', href: '#certificates', id: 'certificates' },
	{ label: 'Awards', href: '#awards', id: 'awards' },
	{ label: 'Contact', href: '#contact', id: 'contact' }
];

@Component({
	selector: 'app-header',
	imports: [FaIconComponent],
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	faMoon = faMoon;
	faSun = faSun;
	faBars = faBars;
	faXmark = faXmark;

	readonly navLinks = NAV_LINKS;
	readonly menuOpen = signal(false);

	readonly theme = inject(ThemeService);
	readonly spy = inject(ScrollSpyService);

	constructor() {
		afterNextRender(() => this.spy.watch(['home', ...NAV_LINKS.map((link) => link.id)]));
	}

	toggleMenu(): void {
		this.menuOpen.update((open) => !open);
	}

	closeMenu(): void {
		this.menuOpen.set(false);
	}
}
