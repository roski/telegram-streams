import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@telegram-streams/data-access';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findUser(
    find: FindOptionsWhere<UserEntity>,
  ): Promise<UserEntity | null> {
    return this.userRepository.findOneBy(find);
  }

  createUser(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }
}
