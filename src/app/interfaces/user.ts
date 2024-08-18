import { Accomplice } from './accomplice';

export interface User {
  accomplice?: Accomplice;
  createdAt: Date;
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  phone: string;
  updatedAt: Date;
}
