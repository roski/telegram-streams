import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AppConfig, AppConfigKeys } from './app-config.model';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService<AppConfig, true>) {}

  get botToken(): string {
    return this.configService.get<string>(AppConfigKeys.TelegramBotToken);
  }

  get databaseName(): string {
    return this.configService.get<string>(AppConfigKeys.DbName);
  }

  get typeOrmConfig(): DataSourceOptions {
    return {
      type: 'sqlite',
      database: this.databaseName,
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      logging: this.configService.get<boolean>(AppConfigKeys.DbLogging),
      synchronize: this.configService.get<boolean>(AppConfigKeys.DbSynchronize),
    };
  }
}
