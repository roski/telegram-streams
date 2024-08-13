import { Ctx, Start, Update } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/scenes';
import { Logger } from '@nestjs/common';
import { BotScene } from '@telegram-streams/shared';

@Update()
export class BotUpdate {
  @Start()
  async start(@Ctx() ctx: SceneContext) {
    Logger.log(ctx.session, `SESSION - START`);
    await ctx.scene.enter(BotScene.Home);
  }
}
