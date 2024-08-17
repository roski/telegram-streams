/** UserCreateDto represents the data required to create a new user. */
export class UserCreateDto {
  telegramId!: number;
  firstName?: string;
  lastName?: string;
}
