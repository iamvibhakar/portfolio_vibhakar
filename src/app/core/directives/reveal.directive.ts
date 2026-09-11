import { isPlatformBrowser } from '@angular/common';
import {
	Directive,
	ElementRef,
	PLATFORM_ID,
	afterNextRender,
	inject,
	input
} from '@angular/core';

/**
 * Fades/slides an element into view the first time it crosses into the viewport.
 * Pure signal + IntersectionObserver based, so it plays nicely with zoneless change detection.
 */
@Directive({
	selector: '[appReveal]',
	host: {
		class: 'reveal'
	}
})
export class RevealDirective {
	private readonly el = inject(ElementRef<HTMLElement>);
	private readonly platformId = inject(PLATFORM_ID);

	readonly appRevealDelay = input(0, { alias: 'appRevealDelay' });

	constructor() {
		afterNextRender(() => {
			if (!isPlatformBrowser(this.platformId)) {
				return;
			}

			const node = this.el.nativeElement;

			if (typeof IntersectionObserver === 'undefined') {
				node.classList.add('is-visible');
				return;
			}

			node.style.setProperty('--reveal-delay', `${this.appRevealDelay()}ms`);

			const observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							node.classList.add('is-visible');
							observer.unobserve(node);
						}
					}
				},
				{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
			);

			observer.observe(node);
		});
	}
}
