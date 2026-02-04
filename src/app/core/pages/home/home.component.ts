import { Component } from '@angular/core';
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
  standalone: true,
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
  template: `
    <app-hero />
    <app-experience />
    <app-education />
    <app-projects />
    <app-skills />
    <app-certificates />
    <app-awards />
    <app-contact />
  `
})
export class HomeComponent {}
