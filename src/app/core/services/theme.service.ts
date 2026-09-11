import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly storageKey = 'theme';

	readonly theme = signal<Theme>('dark');
	readonly isDark = () => this.theme() === 'dark';

	constructor() {
		this.initializeTheme();
	}

	toggle(): void {
		this.set(this.theme() === 'dark' ? 'light' : 'dark');
	}

	set(theme: Theme): void {
		this.theme.set(theme);

		if (!this.hasDocument()) {
			return;
		}

		document.documentElement.classList.toggle('light', theme === 'light');
		localStorage.setItem(this.storageKey, theme);
	}

	private initializeTheme(): void {
		if (!this.hasDocument()) {
			return;
		}

		const stored = localStorage.getItem(this.storageKey) as Theme | null;
		if (stored === 'light' || stored === 'dark') {
			this.set(stored);
			return;
		}

		const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
		this.set(prefersLight ? 'light' : 'dark');
	}

	private hasDocument(): boolean {
		return isPlatformBrowser(this.platformId) && typeof document !== 'undefined';
	}
}
