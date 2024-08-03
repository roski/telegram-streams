import { Global, Module } from '@nestjs/common';

import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HomeModule } from '@telegram-streams/home';
import { BotUpdate } from './bot.update';
import { session } from 'telegraf';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_KEY'),
        middlewares: [session()],
        include: [HomeModule],
      }),
      inject: [ConfigService],
    }),
    HomeModule,
  ],
  providers: [BotUpdate],
})
export class BotModule {}
