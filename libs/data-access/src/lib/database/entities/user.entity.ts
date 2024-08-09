import { Column, Entity, VirtualColumn } from 'typeorm';
import { AbstractEntity, UserRole } from '@telegram-streams/models';
import { instanceToPlain } from 'class-transformer';
import { UserDto, UserDtoOptions } from '../../dtos/user';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto, UserDtoOptions> {
  @Column({ nullable: true, type: String })
  firstName!: string | null;

  @Column({ nullable: true, type: String })
  lastName!: string | null;

  @VirtualColumn({
    query: (alias) =>
      `SELECT CONCAT(${alias}."firstName", ' ', ${alias}."lastName")`,
  })
  fullName!: string;

  @Column({
    type: 'simple-enum',
    enum: UserRole,
    default: UserRole.User,
  })
  role!: UserRole;

  // TODO figure out how to make this type-safe!
  public override toJSON() {
    return instanceToPlain(this);
  }
}
