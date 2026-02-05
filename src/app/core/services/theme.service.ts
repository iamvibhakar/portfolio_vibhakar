import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly storageKey = 'theme';
  private darkMode = true;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  toggleDark(): void {
    if (!this.hasDocument()) {
      return;
    }

    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
    localStorage.setItem(this.storageKey, this.darkMode ? 'dark' : 'light');
  }

  enableDark(): void {
    if (!this.hasDocument()) {
      return;
    }
    this.darkMode = true;
    document.documentElement.classList.remove('light');
    localStorage.setItem(this.storageKey, 'dark');
  }

  disableDark(): void {
    if (!this.hasDocument()) {
      return;
    }
    this.darkMode = false;
    document.documentElement.classList.add('light');
    localStorage.setItem(this.storageKey, 'light');
  }

  isDark(): boolean {
    return this.darkMode;
  }

  private initializeTheme(): void {
    if (!this.hasDocument()) {
      return;
    }

    const stored = localStorage.getItem(this.storageKey);
    if (stored === 'light') {
      this.darkMode = false;
      document.documentElement.classList.add('light');
      return;
    }

    if (stored === 'dark') {
      this.darkMode = true;
      document.documentElement.classList.remove('light');
      return;
    }

    this.darkMode = true;
    document.documentElement.classList.remove('light');
  }

  private hasDocument(): boolean {
    return typeof document !== 'undefined';
  }
}
