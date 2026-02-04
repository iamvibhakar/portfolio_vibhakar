import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLeetCode = faCode;
}
