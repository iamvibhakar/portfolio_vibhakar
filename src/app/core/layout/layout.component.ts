import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header />
    <main class="pt-20">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class LayoutComponent {}
