import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { TelegrafExecutionContext } from 'nestjs-telegraf';
import { UserService } from '@telegram-streams/user';
import { BotContext } from '@telegram-streams/models';

@Injectable()
export class RegisteredUserGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx =
      TelegrafExecutionContext.create(context).getContext<BotContext>();
    const {
      session,
      from: { id: telegramId, first_name: firstName, last_name: lastName } = {},
    } = ctx;
    if (!telegramId) {
      return false;
    }
    const user = await this.userService.findUser({ telegramId });

    if (!user) {
      await this.userService.createUser({
        telegramId,
        firstName,
        lastName,
      });
      session.isNewUser = true;
    } else {
      session.isNewUser = false;
    }
    return true;
  }
}
