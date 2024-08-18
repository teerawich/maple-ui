import { Routes } from '@angular/router';
import { Fw006Component } from './pages/fw006/fw006.component';
import { UserComponent } from './pages/user/user.component';
import { InfoComponent } from './pages/info/info.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ActivityComponent } from './pages/activity/activity.component';

export const routes: Routes = [
  { path: '', component: Fw006Component },
  { path: 'activity', component: ActivityComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'fw006', component: Fw006Component },
  { path: 'info', component: InfoComponent },
  { path: 'notification', component: Notification },
  { path: 'user', component: UserComponent },
];
