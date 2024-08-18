import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {}
