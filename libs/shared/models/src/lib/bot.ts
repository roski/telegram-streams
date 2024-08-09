export enum BotScene {
  Home = 'Home',
}

export type Uuid = string;

export type Constructor<T, Arguments extends unknown[] = undefined[]> = new (
  ...arguments_: Arguments
) => T;
