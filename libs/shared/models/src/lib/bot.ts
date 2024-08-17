import { Context, Scenes } from 'telegraf';

export enum BotScene {
  Home = 'Home',
}

export interface BotContext extends Context {
  session: BotSession;
}

interface BotSession extends Scenes.SceneSession {
  isNewUser: boolean;
}

export type Uuid = string;

export type Constructor<T, Arguments extends unknown[] = undefined[]> = new (
  ...arguments_: Arguments
) => T;
