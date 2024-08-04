import { Module } from '@nestjs/common';
import { TelegrafModule, TelegrafModuleOptions } from 'nestjs-telegraf';
import { AppConfigService } from '@telegram-streams/app-config';
import { session } from 'telegraf';
import { SQLite } from '@telegraf/session/sqlite';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService): TelegrafModuleOptions => {
        const store = SQLite({
          filename: config.databaseName,
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
