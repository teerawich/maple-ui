import { ExpenseEnum } from '../enums/expense.enum';
import { Accomplice } from './accomplice';
import { User } from './user';

export interface Expense {
  createdAt: Date;
  createdBy: User;
  deposite: number;
  description: string;
  destination: Accomplice;
  expentType: ExpenseEnum;
  id: string;
  source: Accomplice;
  status: boolean;
  withdraw: number;
}
