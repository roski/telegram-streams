import { Ctx, Start, Update } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/scenes';
import { Logger, UseGuards } from '@nestjs/common';
import { BotScene } from '@telegram-streams/models';
import { RegisteredUserGuard } from '@telegram-streams/guards';

@Update()
export class BotUpdate {
  @Start()
  @UseGuards(RegisteredUserGuard)
  async start(@Ctx() ctx: SceneContext) {
    Logger.log(ctx.session, `SESSION - START`);
    await ctx.scene.enter(BotScene.Home);
  }
}
