import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

const CONTACT_EMAIL = 'mcavkpathak@gmail.com';

@Component({
	selector: 'app-contact',
	imports: [ReactiveFormsModule, RevealDirective],
	templateUrl: './contact.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	private readonly fb = inject(FormBuilder);

	readonly form = this.fb.nonNullable.group({
		name: ['', [Validators.required, Validators.minLength(2)]],
		email: ['', [Validators.required, Validators.email]],
		message: ['', [Validators.required, Validators.minLength(10)]]
	});

	readonly submitted = signal(false);

	submit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { name, email, message } = this.form.getRawValue();
		const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

		this.submitted.set(true);
		this.form.reset();
	}
}
