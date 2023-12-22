import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  @Expose()
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Keks',
  })
  @Expose()
  public lastName: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User registration date (ISO format)',
    example: '1981-03-12',
  })
  @Expose()
  public registrationDate: string;

  @ApiProperty({
    description: 'User registration publication count',
    example: 10,
  })
  @Expose()
  public publicationCount: number;

  @ApiProperty({
    description: 'User registration subscribers count',
    example: 10,
  })
  @Expose()
  public subscribersCount: number;
}
