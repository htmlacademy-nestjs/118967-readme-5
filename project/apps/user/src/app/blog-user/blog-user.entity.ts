import { AuthUser, User } from '@project/shared-app-types';
import { Entity } from '@project/shared-core';

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public avatar?: string;
  public passwordHash: string;
  public registrationDate: Date;
  public publicationCount: number;
  public subscribersCount: number;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      registrationDate: this.registrationDate,
      publicationCount: this.publicationCount,
      subscribersCount: this.subscribersCount,
    };
  }

  public populate(data: User): void {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.avatar = data.avatar;
  }
}
