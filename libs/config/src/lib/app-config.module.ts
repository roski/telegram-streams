import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigService } from './app.config.service';
import { AppConfigKeys } from './app-config.model';

@Global()
@Module({
  exports: [AppConfigService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        [AppConfigKeys.TelegramBotToken]: Joi.string().required(),
      }),
    }),
  ],
  providers: [AppConfigService],
})
export class AppConfigModule {}
