import { User } from './user';

export interface Task {
  createdAt: Date;
  createdBy: User;
  description: string;
  id: string;
}
