export enum AppConfigKeys {
  TelegramBotToken = 'TELEGRAM_BOT_TOKEN',
  DbSynchronize = 'DB_SYNCHRONIZE',
  DbLogging = 'DB_LOGGING',
  DbName = 'DB_NAME',
}

export interface AppConfig {
  [AppConfigKeys.TelegramBotToken]: string;
  [AppConfigKeys.DbSynchronize]: boolean;
  [AppConfigKeys.DbLogging]: boolean;
  [AppConfigKeys.DbName]: string;
}

/** Ensure all keys in T are present in U */
type EnsureAllKeysArePresent<T, U extends Record<keyof T, any>> = T extends U
  ? U
  : never;

/**
 * Ensure all keys in AppConfig are present in the provided object
 *
 * This is a type-level validation step to ensure that all keys in the AppConfig
 * */
type ValidatedAppConfig = EnsureAllKeysArePresent<
  Record<AppConfigKeys, any>,
  AppConfig
>;
