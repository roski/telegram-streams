import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const entities = [UserEntity];

const typeOrmModule = TypeOrmModule.forFeature(entities);

@Module({
  imports: [typeOrmModule],
  exports: [typeOrmModule],
})
export class DatabaseModule {}
