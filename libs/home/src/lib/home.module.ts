import { Module } from '@nestjs/common';
import { HomeScene } from './home.scene';

@Module({
  providers: [HomeScene],
  exports: [HomeScene],
})
export class HomeModule {}
