import { Global, Module } from '@nestjs/common';
import { HomeModule } from '@telegram-streams/home';
import { BotUpdate } from './bot.update';
import { AppConfigModule } from '@telegram-streams/app-config';
import { TelegramModule } from '@telegram-streams/telegram';

@Global()
@Module({
  imports: [AppConfigModule, TelegramModule, HomeModule],
  providers: [BotUpdate],
})
export class BotModule {}
