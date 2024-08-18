import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { Topic } from '../../interfaces/topic';
import { TopicStatusEnum } from '../../enums/topic-status.enum';
import { TopicTypeEnum } from '../../enums/topic-type.enum';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { TopicPriorityEnum } from '../../enums/topic-priority.enum';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fw006',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextareaModule,
    SidebarModule,
    StyleClassModule,
    TableModule,
    TimelineModule,
  ],
  templateUrl: './fw006.component.html',
  styleUrl: './fw006.component.scss',
})
export class Fw006Component {
  addTaskBar = false;
  selectedTopic: Topic | undefined;
  taskInformation: string = '';

  // data
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
        phone: '0955922544',
        updatedAt: new Date(),
      },
      description: 'อุปกรณ์ระบายน้ำใต้ช่องจอดรถที่ 3 ไม่สามารถใช้งานได้',
      dueToAt: new Date(),
      priority: TopicPriorityEnum.High,
      status: TopicStatusEnum.Opened,
      topicType: TopicTypeEnum.Engineer,
      updatedAt: new Date(),
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
            phone: '0955922544',
            updatedAt: new Date(),
          },
          description: 'Follow JVP for magnetic',
        },
        {
          id: '2',
          createdAt: new Date(),
          createdBy: {
            id: '1',
            createdAt: new Date(),
            email: 'teerawich@gmail.com',
            isActive: true,
            name: 'teerawich',
            phone: '0955922544',
            updatedAt: new Date(),
          },
          description:
            'ฝ่ายวิศวกรรมแจ้งมีการอาร์คของอุปกรณ์แม็กเนติกในห้องไฟฟ้าใต้ที่จอดรถ',
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
        phone: '0955922544',
        updatedAt: new Date(),
      },
      description: 'คอมพ์พิวเตอร์สำนักงานเปิดไม่ติด',
      dueToAt: new Date(),
      priority: TopicPriorityEnum.Low,
      status: TopicStatusEnum.Hold,
      topicType: TopicTypeEnum.Operation,
      updatedAt: new Date(),
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
            phone: '0955922544',
            updatedAt: new Date(),
          },
          description: 'Replace computer',
        },
      ],
    },
  ];

  // functions
  addTask(topic: Topic) {
    this.addTaskBar = true;
    this.selectedTopic = topic;
  }
}
