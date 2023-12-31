import { AuthUser } from '@project/shared-app-types';
import { Entity } from '@project/shared-core';
import { SALT_ROUNDS } from './blog-user.constant';
import { compare, genSalt, hash } from 'bcrypt';

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

  public populate(data: AuthUser): void {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.avatar = data.avatar;
    this.registrationDate = data.registrationDate;
    this.publicationCount = data.publicationCount;
    this.subscribersCount = data.subscribersCount;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const saltRounds = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, saltRounds);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
