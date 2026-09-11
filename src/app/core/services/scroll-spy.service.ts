import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
	private readonly platformId = inject(PLATFORM_ID);
	private observer?: IntersectionObserver;
	private readonly visibleSections = new Map<string, number>();

	readonly activeSection = signal<string>('home');
	readonly scrolled = signal(false);
	readonly scrollY = signal(0);

	watch(sectionIds: string[]): void {
		if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
			return;
		}

		this.observer?.disconnect();
		this.visibleSections.clear();

		this.observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						this.visibleSections.set(entry.target.id, entry.intersectionRatio);
					} else {
						this.visibleSections.delete(entry.target.id);
					}
				}

				const [topSection] = [...this.visibleSections.entries()].sort((a, b) => b[1] - a[1]);
				if (topSection) {
					this.activeSection.set(topSection[0]);
				}
			},
			{ threshold: [0.15, 0.3, 0.5, 0.75], rootMargin: '-96px 0px -40% 0px' }
		);

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) {
				this.observer.observe(el);
			}
		}

		window.addEventListener(
			'scroll',
			() => {
				this.scrollY.set(window.scrollY);
				this.scrolled.set(window.scrollY > 12);
			},
			{ passive: true }
		);
	}
}
