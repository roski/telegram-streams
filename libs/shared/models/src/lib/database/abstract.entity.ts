import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AbstractDto } from '../dto';
import { Exclude, instanceToPlain } from 'class-transformer';
import { Constructor, Uuid } from '../bot';

export abstract class AbstractEntity<
  DTO extends AbstractDto = AbstractDto,
  Options = never,
> extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: Uuid;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp',
  })
  @Exclude({ toPlainOnly: true })
  deletedAt!: Date | null;

  protected dtoClass?: Constructor<DTO, [AbstractEntity, Options?]>;

  toJSON() {
    return instanceToPlain(this);
  }

  toDto(options?: Options): DTO {
    if (!this.dtoClass) {
      throw new Error(
        `You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`,
      );
    }
    return new this.dtoClass(this, options);
  }

  constructor(entity: AbstractEntity, opts?: unknown) {
    super();
    if (entity && opts) {
      // just here to avoid unused vars linting errors
    }
  }
}
