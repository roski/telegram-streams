import { Start, Update } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/scenes';
import { Logger } from '@nestjs/common';
import { BotScene } from '@telegram-streams/models';

@Update()
export class BotUpdate {
  @Start()
  async start(ctx: SceneContext) {
    Logger.log(ctx.session, `SESSION - START`);
    await ctx.scene.enter(BotScene.Home);
  }
}
