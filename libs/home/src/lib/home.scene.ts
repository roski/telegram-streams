import { Ctx, Scene, SceneEnter } from 'nestjs-telegraf';
import { BotContext, BotScene } from '@telegram-streams/models';

/** Home scene keyboard */
const HOME_KEYBOARD = [
  [{ text: 'Add Channel', callback_data: 'add_channel' }],
  [{ text: 'Edit Channels', callback_data: 'edit_channel' }],
];

/** Home scene */
@Scene(BotScene.Home)
export class HomeScene {
  @SceneEnter()
  async start(@Ctx() ctx: BotContext) {
    await ctx.reply('Welcome! What would you like to do?', {
      reply_markup: {
        inline_keyboard: HOME_KEYBOARD,
      },
    });
  }
}
