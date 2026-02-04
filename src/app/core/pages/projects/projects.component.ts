import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  faExternalLink = faArrowUpRightFromSquare;
  readonly initialVisible = 2;
  visibleCount = this.initialVisible;

  projects = [
    {
      name: 'Allen Chat Bot',
      period: 'Jan 2026 – Present',
      link: 'https://demowhatsapp.hashstudioz.us/',
      desc: 'A real-time WhatsApp messaging application enabling instant communication using sockets.',
      bullets: [
        'Built frontend using React.js with a clean and responsive UI',
        'Implemented real-time messaging using Socket.io',
        'Integrated WATI WhatsApp API to send/receive messages, documents, and images',
        'Implemented live notifications for incoming and outgoing messages',
        'Optimized message rendering and state handling for real-time updates'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Socket.io', 'WATI WhatsApp API']
    },
    {
      name: 'Funeral Print AI',
      period: 'Oct 2025 – Dec 2025',
      link: 'http://funeralprintai.com/',
      desc: 'A secure, user-friendly platform to create print-ready memorial products with AI-assisted workflows.',
      bullets: [
        'Developed responsive UI using React.js and Tailwind CSS',
        'Integrated Clerk authentication for secure user login and access control',
        'Built reusable React components for templates and print layouts',
        'Ensured clean UI, accessibility, and cross-device compatibility'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Clerk Authentication']
    },
    {
      name: 'Allen Sathi',
      period: 'Jun 2024 – Dec 2025',
      link: 'https://sathi.allen.in/login',
      desc: 'Counseling platform to help students who feel stuck, anxious, or confused with professional support.',
      bullets: [],
      tech: ['Angular 18', 'JEST', 'MUI', 'Bootstrap', 'HTML', 'SCSS']
    },
    {
      name: 'Fuel Pump Retail Outlet Management System',
      period: 'Jan 2024 – Jun 2024',
      link: 'https://iotpetroluemtest.uat.pinelabs.com/user-login',
      desc: 'Communication and control system integrating IoT devices and ATG for real-time monitoring and transactions.',
      bullets: [],
      tech: ['Angular 16', 'MUI', 'HTML', 'SCSS', 'CSS', 'Tailwind']
    },
    {
      name: 'OPAL',
      period: 'Jun 2023 – Dec 2023',
      link: 'https://usp.opaloman.om/',
      desc: 'Business society in Oman focused on Energy & Minerals sector; NGO and non-profit organization.',
      bullets: [],
      tech: ['Angular 14', 'MUI', 'HTML', 'SCSS', 'CSS', 'Tailwind CSS']
    },
    {
      name: 'Kids Care Finder',
      period: 'Dec 2022 – Jun 2023',
      link: 'https://kidscarefinder.com/home',
      desc: 'Platform connecting parents with childcare and extracurricular service providers across the US.',
      bullets: [],
      tech: ['Angular 12', 'MUI', 'HTML', 'SCSS', 'CSS', 'Bootstrap 5']
    },
    {
      name: 'Asianet News',
      period: 'Jul 2022 – Dec 2022',
      link: 'https://cms.asianetnews.com/',
      desc: 'Malayalam news channel platform with a trusted newsroom network in Kerala.',
      bullets: [],
      tech: ['Angular 8', 'MUI']
    }
  ];

  toggleProjects(): void {
    if (this.visibleCount >= this.projects.length) {
      this.visibleCount = this.initialVisible;
      return;
    }

    this.visibleCount = Math.min(this.visibleCount + 4, this.projects.length);
  }

  get isExpanded(): boolean {
    return this.visibleCount >= this.projects.length;
  }
}
