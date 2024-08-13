import { AbstractEntity } from '../database';

export type AbstractDtoOptions = Partial<{ excludeFields?: string[] }>;

export class AbstractDto {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | null;

  constructor(entity: AbstractEntity, opts?: AbstractDtoOptions) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    if (opts) {
      // do stuff!
    }
  }
}
