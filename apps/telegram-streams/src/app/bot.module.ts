import { Global, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { HomeModule } from '@telegram-streams/home';
import { BotUpdate } from './bot.update';
import { session } from 'telegraf';
import {
  AppConfigModule,
  AppConfigService,
} from '@telegram-streams/app-config';

@Global()
@Module({
  imports: [
    AppConfigModule,
    TelegrafModule.forRootAsync({
      useFactory: (config: AppConfigService) => ({
        token: config.botToken,
        middlewares: [session()],
        include: [HomeModule],
      }),
      inject: [AppConfigService],
    }),
    HomeModule,
  ],
  providers: [BotUpdate],
})
export class BotModule {}
