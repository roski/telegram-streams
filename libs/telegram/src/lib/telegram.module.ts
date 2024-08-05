import { Module } from '@nestjs/common';
import { TelegrafModule, TelegrafModuleOptions } from 'nestjs-telegraf';
import { AppConfigService } from '@telegram-streams/app-config';
import { session } from 'telegraf';
import { Redis } from '@telegraf/session/redis';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService): TelegrafModuleOptions => {
        const store = Redis({
          url: config.redisUrl,
        });
        return {
          middlewares: [session({ store })],
          token: config.botToken,
        };
      },
    }),
  ],
})
export class TelegramModule {}
