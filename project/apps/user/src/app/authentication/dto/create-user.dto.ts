import { ApiProperty } from '@nestjs/swagger';
import { UnAuthUser } from '@project/shared-app-types';

export class CreateUserDto implements UnAuthUser {
  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov',
  })
  public lastName: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/images/user.png',
  })
  public avatar?: string;
}
