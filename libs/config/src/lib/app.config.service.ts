import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AppConfig, AppConfigKeys } from './app-config.model';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService<AppConfig, true>) {}

  get botToken(): string {
    return this.configService.get<string>(AppConfigKeys.TelegramBotToken);
  }
}
