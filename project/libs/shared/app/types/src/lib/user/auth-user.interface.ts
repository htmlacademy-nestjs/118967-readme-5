import { User } from './user.interface';

export interface AuthUser extends User {
  id: string;
  passwordHash: string;
  registrationDate: Date;
  publicationCount: number;
  subscribersCount: number;
}
