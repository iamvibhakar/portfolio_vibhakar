import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faCode,
  faCodeBranch,
  faComments,
  faDatabase,
  faFlask,
  faMicrochip,
  faPalette,
  faPuzzlePiece,
  faWandSparkles
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups = [
    {
      icon: faPuzzlePiece,
      title: 'Frameworks',
      items: ['Angular (8–19)', 'React.js', 'Redux']
    },
    {
      icon: faCode,
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      icon: faPalette,
      title: 'Styling & UI',
      items: ['Bootstrap 5', 'Tailwind CSS', 'Material-UI (MUI)']
    },
    {
      icon: faCircleCheck,
      title: 'Integration Testing',
      items: ['Jest']
    },
    {
      icon: faMicrochip,
      title: 'Runtime',
      items: ['Node.js (Basic)', 'REST APIs']
    },
    {
      icon: faDatabase,
      title: 'Database',
      items: ['MySQL']
    },
    {
      icon: faComments,
      title: 'Real-Time & Messaging',
      items: ['Socket.io', 'WhatsApp API (WATI)']
    },
    {
      icon: faFlask,
      title: 'API Testing',
      items: ['Postman', 'Swagger', 'Manual & UI Testing']
    },
    {
      icon: faCodeBranch,
      title: 'Version Control',
      items: ['Git', 'GitLab']
    },
    {
      icon: faWandSparkles,
      title: 'Other',
      items: ['Photoshop', 'Excel', 'Word', 'Advance Excel']
    }
  ];

}
