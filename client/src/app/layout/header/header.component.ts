import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBar } from '@angular/material/progress-bar';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { BusyService } from '../../core/services/busy.service';

@Component({
    selector: 'app-header',
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        RouterLinkActive,
        MatProgressBar
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    busyService = inject(BusyService);
}
