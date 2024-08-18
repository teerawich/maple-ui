import { TopicTypeEnum as TopicTypeEnum } from '../enums/topic-type.enum';
import { TopicStatusEnum as TopicStatusEnum } from '../enums/topic-status.enum';
import { TopicPriorityEnum } from '../enums/topic-priority.enum';
import { Task } from './task';
import { User } from './user';

export interface Topic {
  closedAt?: Date;
  closedBy?: User;
  createdAt: Date;
  createdBy: User;
  description: string;
  dueToAt: Date;
  id: string;
  priority?: TopicPriorityEnum;
  status: TopicStatusEnum;
  tasks?: Task[];
  topicType: TopicTypeEnum;
  updatedAt: Date;
}
