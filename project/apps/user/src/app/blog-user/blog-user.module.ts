import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';

@Module({
  imports: [BlogUserRepository],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
