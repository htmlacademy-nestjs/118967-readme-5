import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public avatar: string;

  @Expose()
  public registrationDate: string;

  @Expose()
  public publicationCount: number;

  @Expose()
  public subscribersCount: never;
}
