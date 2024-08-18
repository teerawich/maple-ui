import { Component } from '@angular/core';
import { Activity } from '../../interfaces/activity';
import { ActivityEnum } from '../../enums/activity.enum';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [TableModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  activities: Activity[] = [
    {
      createdAt: new Date('2024-08-18 10:32:11'),
      description: 'update detail to task id: 362',
      user: {
        id: '1',
        createdAt: new Date('2024-01-01 10:32:11'),
        email: 'teerawich@gmail.com',
        isActive: true,
        name: 'Teerawich',
        updatedAt: new Date(),
      },
      module: { id: '1', name: 'FWOO6' },
      act: ActivityEnum.Update,
    },
    {
      createdAt: new Date('2024-08-18 10:30:11'),
      description: 'add detail to task id: 362',
      user: {
        id: '1',
        createdAt: new Date('2024-01-01 10:32:11'),
        email: 'teerawich@gmail.com',
        isActive: true,
        name: 'Teerawich',
        updatedAt: new Date(),
      },
      module: { id: '1', name: 'FWOO6' },
      act: ActivityEnum.Create,
    },
  ];

  // constructure
  constructor() {}
}
