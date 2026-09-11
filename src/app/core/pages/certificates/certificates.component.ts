import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faAward, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RevealDirective } from '../../directives/reveal.directive';
import { CERTIFICATES, CERTIFICATE_CATEGORIES } from '../../data/certificates.data';

@Component({
	selector: 'app-certificates',
	imports: [FaIconComponent, RevealDirective],
	templateUrl: './certificates.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
	faExternalLink = faArrowUpRightFromSquare;
	faAward = faAward;
	faSearch = faMagnifyingGlass;

	readonly certificates = CERTIFICATES;
	readonly categories = CERTIFICATE_CATEGORIES;

	readonly activeCategory = signal('All');
	readonly query = signal('');

	readonly filtered = computed(() => {
		const category = this.activeCategory();
		const query = this.query().trim().toLowerCase();

		return this.certificates.filter((cert) => {
			const matchesCategory = category === 'All' || cert.category === category;
			const matchesQuery =
				!query ||
				cert.title.toLowerCase().includes(query) ||
				cert.skills.some((skill) => skill.toLowerCase().includes(query)) ||
				(cert.issuer?.toLowerCase().includes(query) ?? false);

			return matchesCategory && matchesQuery;
		});
	});

	setCategory(category: string): void {
		this.activeCategory.set(category);
	}

	onQueryInput(event: Event): void {
		this.query.set((event.target as HTMLInputElement).value);
	}
}
