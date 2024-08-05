import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppConfigService } from './app-config.service';
import { AppConfigKeys } from './app-config.model';

@Global()
@Module({
  exports: [AppConfigService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        [AppConfigKeys.DbHost]: Joi.string().required(),
        [AppConfigKeys.DbLogging]: Joi.boolean().default(false),
        [AppConfigKeys.DbName]: Joi.string().required(),
        [AppConfigKeys.DbPassword]: Joi.string().required(),
        [AppConfigKeys.DbPort]: Joi.number().default(5432),
        [AppConfigKeys.DbSynchronize]: Joi.boolean().default(false),
        [AppConfigKeys.DbUsername]: Joi.string().required(),
        [AppConfigKeys.TelegramBotToken]: Joi.string().required(),
        [AppConfigKeys.RedisHost]: Joi.string().required(),
        [AppConfigKeys.RedisPort]: Joi.number().port().default(6379),
      }),
    }),
  ],
  providers: [AppConfigService],
})
export class AppConfigModule {}
