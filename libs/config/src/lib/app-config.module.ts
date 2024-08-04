import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigService } from './app-config.service';
import { AppConfigKeys } from './app-config.model';
import { DEFAULT_DATABASE_NAME } from './app-config.constants';

@Global()
@Module({
  exports: [AppConfigService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        [AppConfigKeys.TelegramBotToken]: Joi.string().required(),
        [AppConfigKeys.DbSynchronize]: Joi.boolean().default(false),
        [AppConfigKeys.DbLogging]: Joi.boolean().default(false),
        [AppConfigKeys.DbName]: Joi.string().default(DEFAULT_DATABASE_NAME),
      }),
    }),
  ],
  providers: [AppConfigService],
})
export class AppConfigModule {}
