import { UnAuthUser } from '@project/shared-app-types';

export class CreateUserDto implements UnAuthUser {
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public avatar?: string;
}
