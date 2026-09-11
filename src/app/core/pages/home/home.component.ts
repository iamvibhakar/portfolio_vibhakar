import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { EducationComponent } from '../education/education.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
	selector: 'app-home',
	imports: [
		HeroComponent,
		ExperienceComponent,
		EducationComponent,
		ProjectsComponent,
		SkillsComponent,
		CertificatesComponent,
		AwardsComponent,
		ContactComponent
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
    <app-hero />
    <app-experience />
    <app-education />
    <app-projects />
    <app-skills />

    @defer (on viewport; hydrate on viewport) {
      <app-certificates />
    } @placeholder (minimum 100ms) {
      <div class="defer-placeholder">Loading certifications…</div>
    }

    @defer (on viewport; hydrate on viewport) {
      <app-awards />
    } @placeholder (minimum 100ms) {
      <div class="defer-placeholder">Loading awards…</div>
    }

    @defer (on viewport; hydrate on viewport) {
      <app-contact />
    } @placeholder (minimum 100ms) {
      <div class="defer-placeholder">Loading contact…</div>
    }
  `
})
export class HomeComponent {}
