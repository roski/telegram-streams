export enum AppConfigKeys {
  DbHost = 'DB_HOST',
  DbLogging = 'DB_LOGGING',
  DbName = 'DB_NAME',
  DbPassword = 'DB_PASSWORD',
  DbPort = 'DB_PORT',
  DbSynchronize = 'DB_SYNCHRONIZE',
  DbUsername = 'DB_USERNAME',
  TelegramBotToken = 'TELEGRAM_BOT_TOKEN',
}

export interface AppConfig {
  [AppConfigKeys.DbHost]: string;
  [AppConfigKeys.DbLogging]: boolean;
  [AppConfigKeys.DbName]: string;
  [AppConfigKeys.DbPassword]: string;
  [AppConfigKeys.DbPort]: number;
  [AppConfigKeys.DbSynchronize]: boolean;
  [AppConfigKeys.DbUsername]: string;
  [AppConfigKeys.TelegramBotToken]: string;
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
