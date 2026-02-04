import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'HashStudioz Technologies Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'May 2022 – Present',
      desc: 'I am an experienced Angular developer at Hashstudioz, specializing in building dynamic, scalable and user-friendly web applications.I excel in designing responsive front- end solutions, creating reusable components, and integrating APIs for seamless backend communication.Proficient in Typescript, RxJS, Angular Material, and Bootstrap, I ensure optimized performance and maintainable code.Collaborating closely with cross - functional teams, I focus on delivering projects aligned with client expectations and timelines.Passionate about innovation and continuous learning, I stay updated with the latest technologies to enhance project outcomes.My expertise in debugging, state management, and testing drives reliable, high - quality applications for diverse industries. ',
      tech: ['Angular', 'RxJS', 'TypeScript', 'React', 'REST API', 'MUI', 'Bootstrap', 'Jest', 'Git', 'Agile', 'JIRA', 'Teamwork']
    },
    {
      company: 'Grazitti Interactive',
      role: 'Software Engineer Trainee',
      period: 'Mar 2022 – May 2022',
      desc: 'During my training at Grazitti Interactive, I gained hands-on experience in front-end development, working with HTML, CSS, Bootstrap, and JavaScript to create responsive and visually appealing web interfaces. I also explored the fundamentals of Angular, learning how to build dynamic web applications with structured code. This training enhanced my understanding cross-browser compatibility, and code optimization. Collaborating with experienced developers, I improved my problem-solving skills and development efficiency. My time at Grazitti provided me with a strong foundation in front-end technologies, preparing me for more advanced web development challenges. ',
      tech: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    }
  ];
}
