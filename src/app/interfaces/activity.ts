import { MapleModule } from './maple-module';
import { User } from './user';
import { ActivityEnum } from '../enums/activity.enum';

export interface Activity {
  act: ActivityEnum;
  createdAt: Date;
  description: string;
  module: MapleModule;
  user: User;
}
