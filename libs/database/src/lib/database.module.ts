import { Module } from '@nestjs/common';
import { AppConfigService } from '@telegram-streams/app-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [AppConfigService],
      useFactory(config: AppConfigService): DataSourceOptions {
        return config.typeOrmConfig;
      },
    }),
  ],
})
export class DatabaseModule {}
