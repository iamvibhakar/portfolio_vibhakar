import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
    selector: 'app-root',
    imports: [LayoutComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<app-layout />`
})
export class AppComponent {
}
