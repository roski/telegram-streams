import { Module } from '@nestjs/common';
import { DataAccessModule } from '@telegram-streams/data-access';
import { UserService } from './user.service';

@Module({
  imports: [DataAccessModule],
  providers: [UserService],
})
export class UserModule {}