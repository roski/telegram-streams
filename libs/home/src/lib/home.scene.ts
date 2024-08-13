import { Ctx, Scene, SceneEnter } from 'nestjs-telegraf';
import { BotScene } from '@telegram-streams/shared';
import { SceneContext } from 'telegraf/scenes';

/** Home scene keyboard */
const HOME_KEYBOARD = [
  [{ text: 'Add Channel', callback_data: 'add_channel' }],
  [{ text: 'Edit Channels', callback_data: 'edit_channel' }],
];

/** Home scene */
@Scene(BotScene.Home)
export class HomeScene {
  @SceneEnter()
  async start(@Ctx() ctx: SceneContext) {
    await ctx.reply('Welcome! What would you like to do?', {
      reply_markup: {
        inline_keyboard: HOME_KEYBOARD,
      },
    });
  }
}
