import {
  AbstractDto,
  AbstractDtoOptions,
  UserRole,
} from '@telegram-streams/models';
import { UserEntity } from '../../database/entities/user.entity';

export type UserDtoOptions = AbstractDtoOptions;

/**
 * UserDto represents data from the User entity _before_ serializing into JSON
 * for an API response. To serialize a User entity, use the User.toJSON() method
 */
export class UserDto extends AbstractDto {
  firstName!: string | null;
  lastName!: string | null;
  role!: UserRole;

  constructor(user: UserEntity, opts?: UserDtoOptions) {
    super(user, opts);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
  }
}
