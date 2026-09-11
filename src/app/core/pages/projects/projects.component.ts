import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROJECTS, PROJECT_TECH_FILTERS } from '../../data/projects.data';

@Component({
	selector: 'app-projects',
	imports: [FaIconComponent, RevealDirective],
	templateUrl: './projects.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
	faExternalLink = faArrowUpRightFromSquare;

	readonly projects = PROJECTS;
	readonly techFilters = PROJECT_TECH_FILTERS;

	readonly activeTech = signal<string | null>(null);

	private readonly initialVisible = 2;
	readonly visibleCount = signal(this.initialVisible);

	readonly filteredProjects = computed(() => {
		const tech = this.activeTech();
		return tech ? this.projects.filter((project) => project.tech.includes(tech)) : this.projects;
	});

	readonly visibleProjects = computed(() => this.filteredProjects().slice(0, this.visibleCount()));

	readonly isExpanded = computed(() => this.visibleCount() >= this.filteredProjects().length);

	setTechFilter(tech: string | null): void {
		this.activeTech.set(tech);
		this.visibleCount.set(this.initialVisible);
	}

	toggleProjects(): void {
		if (this.isExpanded()) {
			this.visibleCount.set(this.initialVisible);
			return;
		}

		this.visibleCount.set(Math.min(this.visibleCount() + 4, this.filteredProjects().length));
	}
}
