import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivityComponent } from './pages/activity/activity.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { Fw006Component } from './pages/fw006/fw006.component';
import { InfoComponent } from './pages/info/info.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { UserComponent } from './pages/user/user.component';
import { CommonModule } from '@angular/common';
import { AccompliceComponent } from './pages/accomplice/accomplice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ActivityComponent,
    ExpenseComponent,
    Fw006Component,
    InfoComponent,
    NotificationComponent,
    UserComponent,
    AccompliceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'maple-ui';
}
