import { Global, Module } from '@nestjs/common';
import { HomeModule } from '@telegram-streams/home';
import { BotUpdate } from './bot.update';
import {
  AppConfigModule,
  AppConfigService,
} from '@telegram-streams/app-config';
import { TelegramModule } from '@telegram-streams/telegram';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@telegram-streams/user';

@Global()
@Module({
  imports: [
    AppConfigModule,
    TelegramModule,
    TypeOrmModule.forRootAsync({
      inject: [AppConfigService],
      useFactory(config: AppConfigService) {
        return { ...config.typeOrmConfig, autoLoadEntities: true };
      },
    }),
    UserModule,
    HomeModule,
  ],
  providers: [BotUpdate],
})
export class BotModule {}
