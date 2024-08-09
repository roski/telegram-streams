import { Module } from '@nestjs/common';
import { DataAccessModule } from '@telegram-streams/data-access';

@Module({
  imports: [DataAccessModule],
})
export class UserModule {}
