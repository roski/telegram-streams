/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { BotModule } from './app/bot.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BotModule);

  await app.init();
  Logger.log(`🚀 Bot is running`);
}

bootstrap();
