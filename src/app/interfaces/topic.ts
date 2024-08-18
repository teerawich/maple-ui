import { TaskTypeEnum as TopicTypeEnum } from '../enums/task-type.enum';
import { TaskEnum as TopicStatusEnum } from '../enums/task.enum';
import { Task } from './task';
import { User } from './user';

export interface Topic {
  closedAt?: Date;
  closedBy?: User;
  createdAt: Date;
  createdBy: User;
  dueToAt: Date;
  id: string;
  status: TopicStatusEnum;
  tasks?: Task[];
  topicType: TopicTypeEnum;
  updateAt: Date;
}
