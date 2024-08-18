import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { Topic } from '../../interfaces/topic';
import { TaskEnum } from '../../enums/task.enum';
import { TaskTypeEnum } from '../../enums/task-type.enum';

@Component({
  selector: 'app-fw006',
  standalone: true,
  imports: [TableModule, DividerModule],
  templateUrl: './fw006.component.html',
  styleUrl: './fw006.component.scss',
})
export class Fw006Component {
  topics: Topic[] = [
    {
      id: '1',
      createdAt: new Date(),
      createdBy: {
        id: '2',
        createdAt: new Date(),
        email: 'pleng@thenine.com',
        isActive: true,
        name: 'pleng',
        updatedAt: new Date(),
      },
      dueToAt: new Date(),
      status: TaskEnum.Opened,
      topicType: TaskTypeEnum.Operation,
      updateAt: new Date(),
      closedAt: undefined,
      closedBy: undefined,
      tasks: [
        {
          id: '1',
          createdAt: new Date(),
          createdBy: {
            id: '1',
            createdAt: new Date(),
            email: 'teerawich@gmail.com',
            isActive: true,
            name: 'teerawich',
            updatedAt: new Date(),
          },
          description: 'Follow JVP for magnetic',
        },
      ],
    },
    {
      id: '2',
      createdAt: new Date(),
      createdBy: {
        id: '1',
        createdAt: new Date(),
        email: 'teerawich@gmail.com',
        isActive: true,
        name: 'pleng',
        updatedAt: new Date(),
      },
      dueToAt: new Date(),
      status: TaskEnum.Hold,
      topicType: TaskTypeEnum.Operation,
      updateAt: new Date(),
      closedAt: undefined,
      closedBy: undefined,
      tasks: [
        {
          id: '1',
          createdAt: new Date(),
          createdBy: {
            id: '1',
            createdAt: new Date(),
            email: 'teerawich@gmail.com',
            isActive: true,
            name: 'teerawich',
            updatedAt: new Date(),
          },
          description: 'Replace computer',
        },
      ],
    },
  ];
}
