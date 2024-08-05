import { Module } from '@nestjs/common';
import { TelegrafModule, TelegrafModuleOptions } from 'nestjs-telegraf';
import { AppConfigService } from '@telegram-streams/app-config';
import { session } from 'telegraf';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService): TelegrafModuleOptions => {
        return {
          middlewares: [session()],
          token: config.botToken,
        };
      },
    }),
  ],
})
export class TelegramModule {}
