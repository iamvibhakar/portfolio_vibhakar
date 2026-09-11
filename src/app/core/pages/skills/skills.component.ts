import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RevealDirective } from '../../directives/reveal.directive';
import { SKILL_GROUPS } from '../../data/skills.data';

@Component({
	selector: 'app-skills',
	imports: [FaIconComponent, RevealDirective],
	templateUrl: './skills.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './skills.component.scss'
})
export class SkillsComponent {
	faSearch = faMagnifyingGlass;

	readonly skillGroups = SKILL_GROUPS;
	readonly query = signal('');

	readonly filteredGroups = computed(() => {
		const query = this.query().trim().toLowerCase();
		if (!query) {
			return this.skillGroups;
		}

		return this.skillGroups
			.map((group) => ({
				...group,
				items: group.items.filter((item) => item.toLowerCase().includes(query))
			}))
			.filter((group) => group.title.toLowerCase().includes(query) || group.items.length);
	});

	onQueryInput(event: Event): void {
		this.query.set((event.target as HTMLInputElement).value);
	}
}
