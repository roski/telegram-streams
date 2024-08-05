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

  get typeOrmConfig(): DataSourceOptions {
    return {
      database: this.configService.get<string>(AppConfigKeys.DbName),
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      host: this.configService.get<string>(AppConfigKeys.DbHost),
      logging: this.configService.get<boolean>(AppConfigKeys.DbLogging),
      password: this.configService.get<string>(AppConfigKeys.DbPassword),
      port: this.configService.get<number>(AppConfigKeys.DbPort),
      synchronize: this.configService.get<boolean>(AppConfigKeys.DbSynchronize),
      type: 'postgres',
      username: this.configService.get<string>(AppConfigKeys.DbUsername),
    };
  }

  get redisUrl(): string {
    const redisPort = this.configService.get<number>(AppConfigKeys.RedisPort);
    const redisHost = this.configService.get<string>(AppConfigKeys.RedisHost);
    return `redis://${redisHost}:${redisPort}`;
  }
}
